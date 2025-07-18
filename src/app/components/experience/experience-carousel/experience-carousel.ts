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

import { python } from '@codemirror/lang-python';
import {
  defaultHighlightStyle,
  HighlightStyle,
  indentOnInput,
  syntaxHighlighting,
} from '@codemirror/language';
import { EditorState } from '@codemirror/state';
import {
  drawSelection,
  EditorView,
  highlightActiveLine,
  lineNumbers,
} from '@codemirror/view';
import { tags } from '@lezer/highlight';
interface ExperienceItem {
  name: string;
  image: string;
  reference: any;
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

  private editorView?: EditorView;

  items: ExperienceItem[] = [];
  responsiveOptions: any[] | undefined;
  selectedItemName: string = '';
  currentContent: string = '';

  vscodeTheme = EditorView.theme({
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
  vscodeHighlightStyle = HighlightStyle.define([
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
  vscodeSetup = [
    this.vscodeTheme,
    syntaxHighlighting(this.vscodeHighlightStyle),
  ];

  private basicSetup = [
    highlightActiveLine(),
    drawSelection(),
    indentOnInput(),
    syntaxHighlighting(defaultHighlightStyle, { fallback: true }),
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    this.items = [
      {
        name: 'Experiência 1',
        image: 'assets/icons/python-white.svg',
        reference: 1,
      },
      {
        name: 'Experiência 2',
        image: 'assets/icons/python-white.svg',
        reference: 1,
      },
      {
        name: 'Experiência 3',
        image: 'assets/icons/python-white.svg',
        reference: 1,
      },
    ];

    this.responsiveOptions = [
      { breakpoint: '1400px', numVisible: 2, numScroll: 1 },
      { breakpoint: '1199px', numVisible: 3, numScroll: 1 },
      { breakpoint: '767px', numVisible: 2, numScroll: 1 },
      { breakpoint: '575px', numVisible: 2, numScroll: 1 },
    ];
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.editorView = new EditorView({
        state: EditorState.create({
          doc: `// Digite seu código JavaScript aqui\nfunction hello() {\n  console.log("Olá!");\n}`,
          extensions: [
            lineNumbers(),
            this.basicSetup,
            python(),
            EditorView.editable.of(false),
            ...this.vscodeSetup,
          ],
        }),
        parent: this.editorHost.nativeElement,
      });
    }
  }

  log(name: string) {
    this.selectedItemName = name;
    const selectedItem = this.items.find((item) => item.name === name);
    console.log('Selected Item:', selectedItem);
  }
}
