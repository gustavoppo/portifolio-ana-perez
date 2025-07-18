import { isPlatformBrowser, NgClass } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  OnInit,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CarouselModule } from 'primeng/carousel';
import { GitHub } from '../../../services/github';

interface ExperienceItem {
  name: string;
  description: string;
  image: string;
  references: any;
  rawUrl: string;
}

@Component({
  selector: 'experience-carousel',
  standalone: true,
  imports: [CarouselModule, NgClass, FormsModule],
  templateUrl: './experience-carousel.html',
  styleUrls: ['./experience-carousel.css'],
})
export class ExperienceCarousel implements OnInit, AfterViewInit {
  @ViewChild('editorHost', { static: true })
  editorHost!: ElementRef<HTMLDivElement>;

  private editorView?: any;

  items: ExperienceItem[] = [];
  responsiveOptions: any[] | undefined;
  selectedItemName: string = '';
  selectedItemDescription: string = '';
  selectedItemReferences: string[] = [];
  selectedItemRawUrl: string = '';

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private githubService: GitHub
  ) {}

  ngOnInit(): void {
    this.items = [
      {
        name: 'Experiência 1',
        description: 'Descrição da experiência 1',
        image: 'assets/icons/python-white.svg',
        references: ['Python', 'Django', 'Flask'],
        rawUrl:
          'https://raw.githubusercontent.com/Anapaulapalandi/rdi-abs/refs/heads/main/rdi-abs.py',
      },
      {
        name: 'Experiência 2',
        description: 'Descrição da experiência 2',
        image: 'assets/icons/python-white.svg',
        references: ['Python', 'Django', 'Flask'],
        rawUrl:
          'https://raw.githubusercontent.com/Anapaulapalandi/primeiro_projeto/refs/heads/master/calculadora.py',
      },
      {
        name: 'Experiência 3',
        description: 'Descrição da experiência 3',
        image: 'assets/icons/python-white.svg',
        references: ['Python', 'Django', 'Flask'],
        rawUrl:
          'https://raw.githubusercontent.com/Anapaulapalandi/rdi-abs/refs/heads/main/rdi-abs.py',
      },
    ];

    this.responsiveOptions = [
      { breakpoint: '1400px', numVisible: 2, numScroll: 1 },
      { breakpoint: '1199px', numVisible: 3, numScroll: 1 },
      { breakpoint: '767px', numVisible: 2, numScroll: 1 },
      { breakpoint: '575px', numVisible: 2, numScroll: 1 },
    ];

    if (this.items.length > 0) {
      this.selectedItemName = this.items[0].name;
      this.selectedItemDescription = this.items[0].description;
      this.selectedItemReferences = this.items[0].references;
      this.selectedItemRawUrl = this.items[0].rawUrl;
    }
  }

  updateContent(item: ExperienceItem) {
    this.selectedItemName = item.name;
    this.selectedItemDescription = item.description;
    this.selectedItemReferences = item.references;
    this.selectedItemRawUrl = item.rawUrl;

    this.githubService.fetchRawFile(item.rawUrl).subscribe((code) => {
      const state = this.editorView?.state.update({
        changes: {
          from: 0,
          to: this.editorView.state.doc.length,
          insert: code,
        },
      });
      if (state) this.editorView?.update([state]);
    });
  }

  async ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const [
        { EditorView, lineNumbers, drawSelection, highlightActiveLine },
        { EditorState },
        { python },
        { defaultHighlightStyle, syntaxHighlighting, indentOnInput },
        { tags },
        { HighlightStyle },
      ] = await Promise.all([
        import('@codemirror/view'),
        import('@codemirror/state'),
        import('@codemirror/lang-python'),
        import('@codemirror/language'),
        import('@lezer/highlight'),
        import('@codemirror/language'),
      ]);

      const vscodeTheme = EditorView.theme({
        '&': {
          color: '#d4d4d4',
          backgroundColor: '#424242',
          fontFamily: '"Fira Code", monospace',
          fontSize: '14px',
          height: '100%',
        },
        '.cm-content': {
          caretColor: '#ffffff',
        },
        '.cm-gutters': {
          backgroundColor: '#424242',
          color: '#858585',
          border: 'none',
        },
        '.cm-activeLine': {
          backgroundColor: '#2a2d2e',
        },
      });

      const vscodeHighlightStyle = HighlightStyle.define([
        { tag: tags.keyword, color: '#569CD6' },
        {
          tag: [tags.name, tags.deleted, tags.character, tags.propertyName],
          color: '#9CDCFE',
        },
        { tag: [tags.function(tags.variableName)], color: '#DCDCAA' },
        { tag: [tags.string, tags.special(tags.string)], color: '#CE9178' },
        { tag: tags.number, color: '#B5CEA8' },
        { tag: tags.bool, color: '#569CD6' },
        { tag: tags.comment, color: '#6A9955', fontStyle: 'italic' },
        { tag: tags.variableName, color: '#9CDCFE' },
      ]);
      const rawCode = await this.githubService
        .fetchRawFile(this.selectedItemRawUrl)
        .toPromise();
      this.editorView = new EditorView({
        state: EditorState.create({
          doc: rawCode,
          extensions: [
            lineNumbers(),
            highlightActiveLine(),
            drawSelection(),
            indentOnInput(),
            syntaxHighlighting(defaultHighlightStyle, { fallback: true }),
            python(),
            EditorView.editable.of(false),
            vscodeTheme,
            syntaxHighlighting(vscodeHighlightStyle),
          ],
        }),
        parent: this.editorHost.nativeElement,
      });
    }
  }
}
