/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface VertexAiReasoningEngineConfig extends cdktn.TerraformMetaArguments {
  /**
  * This field uses a custom implementation please refer to documentation under /hashicorp/terraform-provider-google-beta/website/docs/r/vertex_ai_reasoning_engine.html.markdown for specifics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#deletion_policy VertexAiReasoningEngine#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * The description of the ReasoningEngine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#description VertexAiReasoningEngine#description}
  */
  readonly description?: string;
  /**
  * The display name of the ReasoningEngine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#display_name VertexAiReasoningEngine#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#id VertexAiReasoningEngine#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The labels associated with this ReasoningEngine. You can use these to
  * organize and group your ReasoningEngines.
  * 
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#labels VertexAiReasoningEngine#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#project VertexAiReasoningEngine#project}
  */
  readonly project?: string;
  /**
  * The region of the reasoning engine. eg us-central1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#region VertexAiReasoningEngine#region}
  */
  readonly region?: string;
  /**
  * context_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#context_spec VertexAiReasoningEngine#context_spec}
  */
  readonly contextSpec?: VertexAiReasoningEngineContextSpec;
  /**
  * encryption_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#encryption_spec VertexAiReasoningEngine#encryption_spec}
  */
  readonly encryptionSpec?: VertexAiReasoningEngineEncryptionSpec;
  /**
  * spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#spec VertexAiReasoningEngine#spec}
  */
  readonly spec?: VertexAiReasoningEngineSpec;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#timeouts VertexAiReasoningEngine#timeouts}
  */
  readonly timeouts?: VertexAiReasoningEngineTimeouts;
}
export interface VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsConsolidationConfig {
  /**
  * Number of revisions to consider per candidate count.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#revisions_per_candidate_count VertexAiReasoningEngine#revisions_per_candidate_count}
  */
  readonly revisionsPerCandidateCount?: number;
}

export function vertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsConsolidationConfigToTerraform(struct?: VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsConsolidationConfigOutputReference | VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsConsolidationConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    revisions_per_candidate_count: cdktn.numberToTerraform(struct!.revisionsPerCandidateCount),
  }
}


export function vertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsConsolidationConfigToHclTerraform(struct?: VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsConsolidationConfigOutputReference | VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsConsolidationConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    revisions_per_candidate_count: {
      value: cdktn.numberToHclTerraform(struct!.revisionsPerCandidateCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsConsolidationConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsConsolidationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._revisionsPerCandidateCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.revisionsPerCandidateCount = this._revisionsPerCandidateCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsConsolidationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._revisionsPerCandidateCount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._revisionsPerCandidateCount = value.revisionsPerCandidateCount;
    }
  }

  // revisions_per_candidate_count - computed: false, optional: true, required: false
  private _revisionsPerCandidateCount?: number; 
  public get revisionsPerCandidateCount() {
    return this.getNumberAttribute('revisions_per_candidate_count');
  }
  public set revisionsPerCandidateCount(value: number) {
    this._revisionsPerCandidateCount = value;
  }
  public resetRevisionsPerCandidateCount() {
    this._revisionsPerCandidateCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revisionsPerCandidateCountInput() {
    return this._revisionsPerCandidateCount;
  }
}
export interface VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsAudioTranscriptionWords {
  /**
  * End offset in time of the word relative to the start of the audio.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#end_offset VertexAiReasoningEngine#end_offset}
  */
  readonly endOffset?: string;
  /**
  * Start offset in time of the word relative to the start of the audio.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#start_offset VertexAiReasoningEngine#start_offset}
  */
  readonly startOffset?: string;
  /**
  * Transcript of the word.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#word VertexAiReasoningEngine#word}
  */
  readonly word: string;
}

export function vertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsAudioTranscriptionWordsToTerraform(struct?: VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsAudioTranscriptionWords | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    end_offset: cdktn.stringToTerraform(struct!.endOffset),
    start_offset: cdktn.stringToTerraform(struct!.startOffset),
    word: cdktn.stringToTerraform(struct!.word),
  }
}


export function vertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsAudioTranscriptionWordsToHclTerraform(struct?: VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsAudioTranscriptionWords | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    end_offset: {
      value: cdktn.stringToHclTerraform(struct!.endOffset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_offset: {
      value: cdktn.stringToHclTerraform(struct!.startOffset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    word: {
      value: cdktn.stringToHclTerraform(struct!.word),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsAudioTranscriptionWordsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsAudioTranscriptionWords | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endOffset !== undefined) {
      hasAnyValues = true;
      internalValueResult.endOffset = this._endOffset;
    }
    if (this._startOffset !== undefined) {
      hasAnyValues = true;
      internalValueResult.startOffset = this._startOffset;
    }
    if (this._word !== undefined) {
      hasAnyValues = true;
      internalValueResult.word = this._word;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsAudioTranscriptionWords | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endOffset = undefined;
      this._startOffset = undefined;
      this._word = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endOffset = value.endOffset;
      this._startOffset = value.startOffset;
      this._word = value.word;
    }
  }

  // end_offset - computed: false, optional: true, required: false
  private _endOffset?: string; 
  public get endOffset() {
    return this.getStringAttribute('end_offset');
  }
  public set endOffset(value: string) {
    this._endOffset = value;
  }
  public resetEndOffset() {
    this._endOffset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endOffsetInput() {
    return this._endOffset;
  }

  // start_offset - computed: false, optional: true, required: false
  private _startOffset?: string; 
  public get startOffset() {
    return this.getStringAttribute('start_offset');
  }
  public set startOffset(value: string) {
    this._startOffset = value;
  }
  public resetStartOffset() {
    this._startOffset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startOffsetInput() {
    return this._startOffset;
  }

  // word - computed: false, optional: false, required: true
  private _word?: string; 
  public get word() {
    return this.getStringAttribute('word');
  }
  public set word(value: string) {
    this._word = value;
  }
  // Temporarily expose input value. Use with caution.
  public get wordInput() {
    return this._word;
  }
}

export class VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsAudioTranscriptionWordsList extends cdktn.ComplexList {
  public internalValue? : VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsAudioTranscriptionWords[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsAudioTranscriptionWordsOutputReference {
    return new VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsAudioTranscriptionWordsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsAudioTranscription {
  /**
  * A label identifying the speaker of this audio segment (e.g. spk_1, spk_2). Present when diarization is set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#speaker_label VertexAiReasoningEngine#speaker_label}
  */
  readonly speakerLabel?: string;
  /**
  * The transcription text of this audio segment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#text VertexAiReasoningEngine#text}
  */
  readonly text: string;
  /**
  * words block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#words VertexAiReasoningEngine#words}
  */
  readonly words?: VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsAudioTranscriptionWords[] | cdktn.IResolvable;
}

export function vertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsAudioTranscriptionToTerraform(struct?: VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsAudioTranscriptionOutputReference | VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsAudioTranscription): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    speaker_label: cdktn.stringToTerraform(struct!.speakerLabel),
    text: cdktn.stringToTerraform(struct!.text),
    words: cdktn.listMapper(vertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsAudioTranscriptionWordsToTerraform, true)(struct!.words),
  }
}


export function vertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsAudioTranscriptionToHclTerraform(struct?: VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsAudioTranscriptionOutputReference | VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsAudioTranscription): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    speaker_label: {
      value: cdktn.stringToHclTerraform(struct!.speakerLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    text: {
      value: cdktn.stringToHclTerraform(struct!.text),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    words: {
      value: cdktn.listMapperHcl(vertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsAudioTranscriptionWordsToHclTerraform, true)(struct!.words),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsAudioTranscriptionWordsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsAudioTranscriptionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsAudioTranscription | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._speakerLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.speakerLabel = this._speakerLabel;
    }
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    if (this._words?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.words = this._words?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsAudioTranscription | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._speakerLabel = undefined;
      this._text = undefined;
      this._words.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._speakerLabel = value.speakerLabel;
      this._text = value.text;
      this._words.internalValue = value.words;
    }
  }

  // speaker_label - computed: false, optional: true, required: false
  private _speakerLabel?: string; 
  public get speakerLabel() {
    return this.getStringAttribute('speaker_label');
  }
  public set speakerLabel(value: string) {
    this._speakerLabel = value;
  }
  public resetSpeakerLabel() {
    this._speakerLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get speakerLabelInput() {
    return this._speakerLabel;
  }

  // text - computed: false, optional: false, required: true
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }

  // words - computed: false, optional: true, required: false
  private _words = new VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsAudioTranscriptionWordsList(this, "words", false);
  public get words() {
    return this._words;
  }
  public putWords(value: VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsAudioTranscriptionWords[] | cdktn.IResolvable) {
    this._words.internalValue = value;
  }
  public resetWords() {
    this._words.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wordsInput() {
    return this._words.internalValue;
  }
}
export interface VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsCodeExecutionResult {
  /**
  * The identifier of the ExecutableCode part this result is for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#id VertexAiReasoningEngine#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Outcome of the code execution. Possible values: ["OUTCOME_UNSPECIFIED", "OUTCOME_OK", "OUTCOME_FAILED", "OUTCOME_DEADLINE_EXCEEDED"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#outcome VertexAiReasoningEngine#outcome}
  */
  readonly outcome: string;
  /**
  * Contains stdout when code execution is successful, stderr or other description otherwise.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#output VertexAiReasoningEngine#output}
  */
  readonly output?: string;
}

export function vertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsCodeExecutionResultToTerraform(struct?: VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsCodeExecutionResultOutputReference | VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsCodeExecutionResult): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    id: cdktn.stringToTerraform(struct!.id),
    outcome: cdktn.stringToTerraform(struct!.outcome),
    output: cdktn.stringToTerraform(struct!.output),
  }
}


export function vertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsCodeExecutionResultToHclTerraform(struct?: VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsCodeExecutionResultOutputReference | VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsCodeExecutionResult): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    outcome: {
      value: cdktn.stringToHclTerraform(struct!.outcome),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output: {
      value: cdktn.stringToHclTerraform(struct!.output),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsCodeExecutionResultOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsCodeExecutionResult | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._outcome !== undefined) {
      hasAnyValues = true;
      internalValueResult.outcome = this._outcome;
    }
    if (this._output !== undefined) {
      hasAnyValues = true;
      internalValueResult.output = this._output;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsCodeExecutionResult | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._outcome = undefined;
      this._output = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._outcome = value.outcome;
      this._output = value.output;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // outcome - computed: false, optional: false, required: true
  private _outcome?: string; 
  public get outcome() {
    return this.getStringAttribute('outcome');
  }
  public set outcome(value: string) {
    this._outcome = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outcomeInput() {
    return this._outcome;
  }

  // output - computed: false, optional: true, required: false
  private _output?: string; 
  public get output() {
    return this.getStringAttribute('output');
  }
  public set output(value: string) {
    this._output = value;
  }
  public resetOutput() {
    this._output = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputInput() {
    return this._output;
  }
}
export interface VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsExecutableCode {
  /**
  * The code to be executed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#code VertexAiReasoningEngine#code}
  */
  readonly code: string;
  /**
  * Unique identifier of the ExecutableCode part.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#id VertexAiReasoningEngine#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Supported programming languages for the generated code. Possible values: ["LANGUAGE_UNSPECIFIED", "PYTHON", "BASH"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#language VertexAiReasoningEngine#language}
  */
  readonly language: string;
}

export function vertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsExecutableCodeToTerraform(struct?: VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsExecutableCodeOutputReference | VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsExecutableCode): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    code: cdktn.stringToTerraform(struct!.code),
    id: cdktn.stringToTerraform(struct!.id),
    language: cdktn.stringToTerraform(struct!.language),
  }
}


export function vertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsExecutableCodeToHclTerraform(struct?: VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsExecutableCodeOutputReference | VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsExecutableCode): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    code: {
      value: cdktn.stringToHclTerraform(struct!.code),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    language: {
      value: cdktn.stringToHclTerraform(struct!.language),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsExecutableCodeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsExecutableCode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._language !== undefined) {
      hasAnyValues = true;
      internalValueResult.language = this._language;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsExecutableCode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._code = undefined;
      this._id = undefined;
      this._language = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._code = value.code;
      this._id = value.id;
      this._language = value.language;
    }
  }

  // code - computed: false, optional: false, required: true
  private _code?: string; 
  public get code() {
    return this.getStringAttribute('code');
  }
  public set code(value: string) {
    this._code = value;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
  }

  // id - computed: false, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // language - computed: false, optional: false, required: true
  private _language?: string; 
  public get language() {
    return this.getStringAttribute('language');
  }
  public set language(value: string) {
    this._language = value;
  }
  // Temporarily expose input value. Use with caution.
  public get languageInput() {
    return this._language;
  }
}
export interface VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsFileData {
  /**
  * The URI of the file in Google Cloud Storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#file_uri VertexAiReasoningEngine#file_uri}
  */
  readonly fileUri: string;
  /**
  * The IANA standard MIME type of the source data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#mime_type VertexAiReasoningEngine#mime_type}
  */
  readonly mimeType: string;
}

export function vertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsFileDataToTerraform(struct?: VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsFileDataOutputReference | VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsFileData): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    file_uri: cdktn.stringToTerraform(struct!.fileUri),
    mime_type: cdktn.stringToTerraform(struct!.mimeType),
  }
}


export function vertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsFileDataToHclTerraform(struct?: VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsFileDataOutputReference | VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsFileData): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    file_uri: {
      value: cdktn.stringToHclTerraform(struct!.fileUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mime_type: {
      value: cdktn.stringToHclTerraform(struct!.mimeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsFileDataOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsFileData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileUri = this._fileUri;
    }
    if (this._mimeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.mimeType = this._mimeType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsFileData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fileUri = undefined;
      this._mimeType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fileUri = value.fileUri;
      this._mimeType = value.mimeType;
    }
  }

  // file_uri - computed: false, optional: false, required: true
  private _fileUri?: string; 
  public get fileUri() {
    return this.getStringAttribute('file_uri');
  }
  public set fileUri(value: string) {
    this._fileUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileUriInput() {
    return this._fileUri;
  }

  // mime_type - computed: false, optional: false, required: true
  private _mimeType?: string; 
  public get mimeType() {
    return this.getStringAttribute('mime_type');
  }
  public set mimeType(value: string) {
    this._mimeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mimeTypeInput() {
    return this._mimeType;
  }
}
export interface VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsFunctionCall {
  /**
  * The function parameters and values in JSON object format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#args VertexAiReasoningEngine#args}
  */
  readonly args?: string;
  /**
  * The unique id of the function call.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#id VertexAiReasoningEngine#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the function to call.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#name VertexAiReasoningEngine#name}
  */
  readonly name?: string;
}

export function vertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsFunctionCallToTerraform(struct?: VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsFunctionCallOutputReference | VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsFunctionCall): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    args: cdktn.stringToTerraform(struct!.args),
    id: cdktn.stringToTerraform(struct!.id),
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function vertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsFunctionCallToHclTerraform(struct?: VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsFunctionCallOutputReference | VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsFunctionCall): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    args: {
      value: cdktn.stringToHclTerraform(struct!.args),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsFunctionCallOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsFunctionCall | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._args !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsFunctionCall | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._args = undefined;
      this._id = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._args = value.args;
      this._id = value.id;
      this._name = value.name;
    }
  }

  // args - computed: false, optional: true, required: false
  private _args?: string; 
  public get args() {
    return this.getStringAttribute('args');
  }
  public set args(value: string) {
    this._args = value;
  }
  public resetArgs() {
    this._args = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsInput() {
    return this._args;
  }

  // id - computed: false, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsFunctionResponse {
  /**
  * The id of the function call this response is for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#id VertexAiReasoningEngine#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the function to call.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#name VertexAiReasoningEngine#name}
  */
  readonly name: string;
  /**
  * The function response in JSON object format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#response VertexAiReasoningEngine#response}
  */
  readonly response?: string;
}

export function vertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsFunctionResponseToTerraform(struct?: VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsFunctionResponseOutputReference | VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsFunctionResponse): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    id: cdktn.stringToTerraform(struct!.id),
    name: cdktn.stringToTerraform(struct!.name),
    response: cdktn.stringToTerraform(struct!.response),
  }
}


export function vertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsFunctionResponseToHclTerraform(struct?: VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsFunctionResponseOutputReference | VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsFunctionResponse): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response: {
      value: cdktn.stringToHclTerraform(struct!.response),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsFunctionResponseOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsFunctionResponse | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._response !== undefined) {
      hasAnyValues = true;
      internalValueResult.response = this._response;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsFunctionResponse | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._name = undefined;
      this._response = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._name = value.name;
      this._response = value.response;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // response - computed: false, optional: true, required: false
  private _response?: string; 
  public get response() {
    return this.getStringAttribute('response');
  }
  public set response(value: string) {
    this._response = value;
  }
  public resetResponse() {
    this._response = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseInput() {
    return this._response;
  }
}
export interface VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsInlineData {
  /**
  * Raw bytes, which should be base64-encoded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#data VertexAiReasoningEngine#data}
  */
  readonly data: string;
  /**
  * The IANA standard MIME type of the source data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#mime_type VertexAiReasoningEngine#mime_type}
  */
  readonly mimeType: string;
}

export function vertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsInlineDataToTerraform(struct?: VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsInlineDataOutputReference | VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsInlineData): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data: cdktn.stringToTerraform(struct!.data),
    mime_type: cdktn.stringToTerraform(struct!.mimeType),
  }
}


export function vertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsInlineDataToHclTerraform(struct?: VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsInlineDataOutputReference | VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsInlineData): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    data: {
      value: cdktn.stringToHclTerraform(struct!.data),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mime_type: {
      value: cdktn.stringToHclTerraform(struct!.mimeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsInlineDataOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsInlineData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._data !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data;
    }
    if (this._mimeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.mimeType = this._mimeType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsInlineData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._data = undefined;
      this._mimeType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._data = value.data;
      this._mimeType = value.mimeType;
    }
  }

  // data - computed: false, optional: false, required: true
  private _data?: string; 
  public get data() {
    return this.getStringAttribute('data');
  }
  public set data(value: string) {
    this._data = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
  }

  // mime_type - computed: false, optional: false, required: true
  private _mimeType?: string; 
  public get mimeType() {
    return this.getStringAttribute('mime_type');
  }
  public set mimeType(value: string) {
    this._mimeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mimeTypeInput() {
    return this._mimeType;
  }
}
export interface VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsVideoMetadata {
  /**
  * The end offset of the video.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#end_offset VertexAiReasoningEngine#end_offset}
  */
  readonly endOffset?: string;
  /**
  * The start offset of the video.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#start_offset VertexAiReasoningEngine#start_offset}
  */
  readonly startOffset?: string;
}

export function vertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsVideoMetadataToTerraform(struct?: VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsVideoMetadataOutputReference | VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsVideoMetadata): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    end_offset: cdktn.stringToTerraform(struct!.endOffset),
    start_offset: cdktn.stringToTerraform(struct!.startOffset),
  }
}


export function vertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsVideoMetadataToHclTerraform(struct?: VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsVideoMetadataOutputReference | VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsVideoMetadata): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    end_offset: {
      value: cdktn.stringToHclTerraform(struct!.endOffset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_offset: {
      value: cdktn.stringToHclTerraform(struct!.startOffset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsVideoMetadataOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsVideoMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endOffset !== undefined) {
      hasAnyValues = true;
      internalValueResult.endOffset = this._endOffset;
    }
    if (this._startOffset !== undefined) {
      hasAnyValues = true;
      internalValueResult.startOffset = this._startOffset;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsVideoMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endOffset = undefined;
      this._startOffset = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endOffset = value.endOffset;
      this._startOffset = value.startOffset;
    }
  }

  // end_offset - computed: false, optional: true, required: false
  private _endOffset?: string; 
  public get endOffset() {
    return this.getStringAttribute('end_offset');
  }
  public set endOffset(value: string) {
    this._endOffset = value;
  }
  public resetEndOffset() {
    this._endOffset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endOffsetInput() {
    return this._endOffset;
  }

  // start_offset - computed: false, optional: true, required: false
  private _startOffset?: string; 
  public get startOffset() {
    return this.getStringAttribute('start_offset');
  }
  public set startOffset(value: string) {
    this._startOffset = value;
  }
  public resetStartOffset() {
    this._startOffset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startOffsetInput() {
    return this._startOffset;
  }
}
export interface VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentParts {
  /**
  * The text content of the part.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#text VertexAiReasoningEngine#text}
  */
  readonly text?: string;
  /**
  * Indicates whether the part represents the model's thought process or reasoning.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#thought VertexAiReasoningEngine#thought}
  */
  readonly thought?: boolean | cdktn.IResolvable;
  /**
  * audio_transcription block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#audio_transcription VertexAiReasoningEngine#audio_transcription}
  */
  readonly audioTranscription?: VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsAudioTranscription;
  /**
  * code_execution_result block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#code_execution_result VertexAiReasoningEngine#code_execution_result}
  */
  readonly codeExecutionResult?: VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsCodeExecutionResult;
  /**
  * executable_code block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#executable_code VertexAiReasoningEngine#executable_code}
  */
  readonly executableCode?: VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsExecutableCode;
  /**
  * file_data block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#file_data VertexAiReasoningEngine#file_data}
  */
  readonly fileData?: VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsFileData;
  /**
  * function_call block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#function_call VertexAiReasoningEngine#function_call}
  */
  readonly functionCall?: VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsFunctionCall;
  /**
  * function_response block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#function_response VertexAiReasoningEngine#function_response}
  */
  readonly functionResponse?: VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsFunctionResponse;
  /**
  * inline_data block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#inline_data VertexAiReasoningEngine#inline_data}
  */
  readonly inlineData?: VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsInlineData;
  /**
  * video_metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#video_metadata VertexAiReasoningEngine#video_metadata}
  */
  readonly videoMetadata?: VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsVideoMetadata;
}

export function vertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsToTerraform(struct?: VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentParts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    text: cdktn.stringToTerraform(struct!.text),
    thought: cdktn.booleanToTerraform(struct!.thought),
    audio_transcription: vertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsAudioTranscriptionToTerraform(struct!.audioTranscription),
    code_execution_result: vertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsCodeExecutionResultToTerraform(struct!.codeExecutionResult),
    executable_code: vertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsExecutableCodeToTerraform(struct!.executableCode),
    file_data: vertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsFileDataToTerraform(struct!.fileData),
    function_call: vertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsFunctionCallToTerraform(struct!.functionCall),
    function_response: vertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsFunctionResponseToTerraform(struct!.functionResponse),
    inline_data: vertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsInlineDataToTerraform(struct!.inlineData),
    video_metadata: vertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsVideoMetadataToTerraform(struct!.videoMetadata),
  }
}


export function vertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsToHclTerraform(struct?: VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentParts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    text: {
      value: cdktn.stringToHclTerraform(struct!.text),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    thought: {
      value: cdktn.booleanToHclTerraform(struct!.thought),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    audio_transcription: {
      value: vertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsAudioTranscriptionToHclTerraform(struct!.audioTranscription),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsAudioTranscriptionList",
    },
    code_execution_result: {
      value: vertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsCodeExecutionResultToHclTerraform(struct!.codeExecutionResult),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsCodeExecutionResultList",
    },
    executable_code: {
      value: vertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsExecutableCodeToHclTerraform(struct!.executableCode),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsExecutableCodeList",
    },
    file_data: {
      value: vertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsFileDataToHclTerraform(struct!.fileData),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsFileDataList",
    },
    function_call: {
      value: vertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsFunctionCallToHclTerraform(struct!.functionCall),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsFunctionCallList",
    },
    function_response: {
      value: vertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsFunctionResponseToHclTerraform(struct!.functionResponse),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsFunctionResponseList",
    },
    inline_data: {
      value: vertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsInlineDataToHclTerraform(struct!.inlineData),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsInlineDataList",
    },
    video_metadata: {
      value: vertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsVideoMetadataToHclTerraform(struct!.videoMetadata),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsVideoMetadataList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentParts | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    if (this._thought !== undefined) {
      hasAnyValues = true;
      internalValueResult.thought = this._thought;
    }
    if (this._audioTranscription?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.audioTranscription = this._audioTranscription?.internalValue;
    }
    if (this._codeExecutionResult?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeExecutionResult = this._codeExecutionResult?.internalValue;
    }
    if (this._executableCode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.executableCode = this._executableCode?.internalValue;
    }
    if (this._fileData?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileData = this._fileData?.internalValue;
    }
    if (this._functionCall?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.functionCall = this._functionCall?.internalValue;
    }
    if (this._functionResponse?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.functionResponse = this._functionResponse?.internalValue;
    }
    if (this._inlineData?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inlineData = this._inlineData?.internalValue;
    }
    if (this._videoMetadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.videoMetadata = this._videoMetadata?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentParts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._text = undefined;
      this._thought = undefined;
      this._audioTranscription.internalValue = undefined;
      this._codeExecutionResult.internalValue = undefined;
      this._executableCode.internalValue = undefined;
      this._fileData.internalValue = undefined;
      this._functionCall.internalValue = undefined;
      this._functionResponse.internalValue = undefined;
      this._inlineData.internalValue = undefined;
      this._videoMetadata.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._text = value.text;
      this._thought = value.thought;
      this._audioTranscription.internalValue = value.audioTranscription;
      this._codeExecutionResult.internalValue = value.codeExecutionResult;
      this._executableCode.internalValue = value.executableCode;
      this._fileData.internalValue = value.fileData;
      this._functionCall.internalValue = value.functionCall;
      this._functionResponse.internalValue = value.functionResponse;
      this._inlineData.internalValue = value.inlineData;
      this._videoMetadata.internalValue = value.videoMetadata;
    }
  }

  // text - computed: false, optional: true, required: false
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  public resetText() {
    this._text = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }

  // thought - computed: false, optional: true, required: false
  private _thought?: boolean | cdktn.IResolvable; 
  public get thought() {
    return this.getBooleanAttribute('thought');
  }
  public set thought(value: boolean | cdktn.IResolvable) {
    this._thought = value;
  }
  public resetThought() {
    this._thought = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thoughtInput() {
    return this._thought;
  }

  // audio_transcription - computed: false, optional: true, required: false
  private _audioTranscription = new VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsAudioTranscriptionOutputReference(this, "audio_transcription");
  public get audioTranscription() {
    return this._audioTranscription;
  }
  public putAudioTranscription(value: VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsAudioTranscription) {
    this._audioTranscription.internalValue = value;
  }
  public resetAudioTranscription() {
    this._audioTranscription.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audioTranscriptionInput() {
    return this._audioTranscription.internalValue;
  }

  // code_execution_result - computed: false, optional: true, required: false
  private _codeExecutionResult = new VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsCodeExecutionResultOutputReference(this, "code_execution_result");
  public get codeExecutionResult() {
    return this._codeExecutionResult;
  }
  public putCodeExecutionResult(value: VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsCodeExecutionResult) {
    this._codeExecutionResult.internalValue = value;
  }
  public resetCodeExecutionResult() {
    this._codeExecutionResult.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeExecutionResultInput() {
    return this._codeExecutionResult.internalValue;
  }

  // executable_code - computed: false, optional: true, required: false
  private _executableCode = new VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsExecutableCodeOutputReference(this, "executable_code");
  public get executableCode() {
    return this._executableCode;
  }
  public putExecutableCode(value: VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsExecutableCode) {
    this._executableCode.internalValue = value;
  }
  public resetExecutableCode() {
    this._executableCode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executableCodeInput() {
    return this._executableCode.internalValue;
  }

  // file_data - computed: false, optional: true, required: false
  private _fileData = new VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsFileDataOutputReference(this, "file_data");
  public get fileData() {
    return this._fileData;
  }
  public putFileData(value: VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsFileData) {
    this._fileData.internalValue = value;
  }
  public resetFileData() {
    this._fileData.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileDataInput() {
    return this._fileData.internalValue;
  }

  // function_call - computed: false, optional: true, required: false
  private _functionCall = new VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsFunctionCallOutputReference(this, "function_call");
  public get functionCall() {
    return this._functionCall;
  }
  public putFunctionCall(value: VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsFunctionCall) {
    this._functionCall.internalValue = value;
  }
  public resetFunctionCall() {
    this._functionCall.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionCallInput() {
    return this._functionCall.internalValue;
  }

  // function_response - computed: false, optional: true, required: false
  private _functionResponse = new VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsFunctionResponseOutputReference(this, "function_response");
  public get functionResponse() {
    return this._functionResponse;
  }
  public putFunctionResponse(value: VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsFunctionResponse) {
    this._functionResponse.internalValue = value;
  }
  public resetFunctionResponse() {
    this._functionResponse.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionResponseInput() {
    return this._functionResponse.internalValue;
  }

  // inline_data - computed: false, optional: true, required: false
  private _inlineData = new VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsInlineDataOutputReference(this, "inline_data");
  public get inlineData() {
    return this._inlineData;
  }
  public putInlineData(value: VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsInlineData) {
    this._inlineData.internalValue = value;
  }
  public resetInlineData() {
    this._inlineData.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inlineDataInput() {
    return this._inlineData.internalValue;
  }

  // video_metadata - computed: false, optional: true, required: false
  private _videoMetadata = new VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsVideoMetadataOutputReference(this, "video_metadata");
  public get videoMetadata() {
    return this._videoMetadata;
  }
  public putVideoMetadata(value: VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsVideoMetadata) {
    this._videoMetadata.internalValue = value;
  }
  public resetVideoMetadata() {
    this._videoMetadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoMetadataInput() {
    return this._videoMetadata.internalValue;
  }
}

export class VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsList extends cdktn.ComplexList {
  public internalValue? : VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentParts[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsOutputReference {
    return new VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContent {
  /**
  * The producer of the content. Must be either 'user' or 'model'. If not set, the service will default to 'user'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#role VertexAiReasoningEngine#role}
  */
  readonly role?: string;
  /**
  * parts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#parts VertexAiReasoningEngine#parts}
  */
  readonly parts: VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentParts[] | cdktn.IResolvable;
}

export function vertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentToTerraform(struct?: VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentOutputReference | VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContent): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    role: cdktn.stringToTerraform(struct!.role),
    parts: cdktn.listMapper(vertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsToTerraform, true)(struct!.parts),
  }
}


export function vertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentToHclTerraform(struct?: VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentOutputReference | VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContent): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    role: {
      value: cdktn.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parts: {
      value: cdktn.listMapperHcl(vertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsToHclTerraform, true)(struct!.parts),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._parts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parts = this._parts?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._role = undefined;
      this._parts.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._role = value.role;
      this._parts.internalValue = value.parts;
    }
  }

  // role - computed: false, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // parts - computed: false, optional: false, required: true
  private _parts = new VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsList(this, "parts", false);
  public get parts() {
    return this._parts;
  }
  public putParts(value: VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentParts[] | cdktn.IResolvable) {
    this._parts.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get partsInput() {
    return this._parts.internalValue;
  }
}
export interface VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEvents {
  /**
  * content block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#content VertexAiReasoningEngine#content}
  */
  readonly content: VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContent;
}

export function vertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsToTerraform(struct?: VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEvents | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    content: vertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentToTerraform(struct!.content),
  }
}


export function vertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsToHclTerraform(struct?: VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEvents | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    content: {
      value: vertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentToHclTerraform(struct!.content),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEvents | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEvents | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._content.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._content.internalValue = value.content;
    }
  }

  // content - computed: false, optional: false, required: true
  private _content = new VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentOutputReference(this, "content");
  public get content() {
    return this._content;
  }
  public putContent(value: VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContent) {
    this._content.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content.internalValue;
  }
}

export class VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsList extends cdktn.ComplexList {
  public internalValue? : VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEvents[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsOutputReference {
    return new VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSource {
  /**
  * events block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#events VertexAiReasoningEngine#events}
  */
  readonly events?: VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEvents[] | cdktn.IResolvable;
}

export function vertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceToTerraform(struct?: VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceOutputReference | VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    events: cdktn.listMapper(vertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsToTerraform, true)(struct!.events),
  }
}


export function vertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceToHclTerraform(struct?: VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceOutputReference | VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    events: {
      value: cdktn.listMapperHcl(vertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsToHclTerraform, true)(struct!.events),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._events?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.events = this._events?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._events.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._events.internalValue = value.events;
    }
  }

  // events - computed: false, optional: true, required: false
  private _events = new VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsList(this, "events", false);
  public get events() {
    return this._events;
  }
  public putEvents(value: VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEvents[] | cdktn.IResolvable) {
    this._events.internalValue = value;
  }
  public resetEvents() {
    this._events.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventsInput() {
    return this._events.internalValue;
  }
}
export interface VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesGeneratedMemoriesTopics {
  /**
  * Represents the custom memory topic label.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#custom_memory_topic_label VertexAiReasoningEngine#custom_memory_topic_label}
  */
  readonly customMemoryTopicLabel?: string;
  /**
  * Represents the managed memory topic. Possible values: ["USER_PERSONAL_INFO", "USER_PREFERENCES", "KEY_CONVERSATION_DETAILS", "EXPLICIT_INSTRUCTIONS"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#managed_memory_topic VertexAiReasoningEngine#managed_memory_topic}
  */
  readonly managedMemoryTopic?: string;
}

export function vertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesGeneratedMemoriesTopicsToTerraform(struct?: VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesGeneratedMemoriesTopics | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    custom_memory_topic_label: cdktn.stringToTerraform(struct!.customMemoryTopicLabel),
    managed_memory_topic: cdktn.stringToTerraform(struct!.managedMemoryTopic),
  }
}


export function vertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesGeneratedMemoriesTopicsToHclTerraform(struct?: VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesGeneratedMemoriesTopics | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    custom_memory_topic_label: {
      value: cdktn.stringToHclTerraform(struct!.customMemoryTopicLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    managed_memory_topic: {
      value: cdktn.stringToHclTerraform(struct!.managedMemoryTopic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesGeneratedMemoriesTopicsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesGeneratedMemoriesTopics | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customMemoryTopicLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.customMemoryTopicLabel = this._customMemoryTopicLabel;
    }
    if (this._managedMemoryTopic !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedMemoryTopic = this._managedMemoryTopic;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesGeneratedMemoriesTopics | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customMemoryTopicLabel = undefined;
      this._managedMemoryTopic = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customMemoryTopicLabel = value.customMemoryTopicLabel;
      this._managedMemoryTopic = value.managedMemoryTopic;
    }
  }

  // custom_memory_topic_label - computed: false, optional: true, required: false
  private _customMemoryTopicLabel?: string; 
  public get customMemoryTopicLabel() {
    return this.getStringAttribute('custom_memory_topic_label');
  }
  public set customMemoryTopicLabel(value: string) {
    this._customMemoryTopicLabel = value;
  }
  public resetCustomMemoryTopicLabel() {
    this._customMemoryTopicLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customMemoryTopicLabelInput() {
    return this._customMemoryTopicLabel;
  }

  // managed_memory_topic - computed: false, optional: true, required: false
  private _managedMemoryTopic?: string; 
  public get managedMemoryTopic() {
    return this.getStringAttribute('managed_memory_topic');
  }
  public set managedMemoryTopic(value: string) {
    this._managedMemoryTopic = value;
  }
  public resetManagedMemoryTopic() {
    this._managedMemoryTopic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedMemoryTopicInput() {
    return this._managedMemoryTopic;
  }
}

export class VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesGeneratedMemoriesTopicsList extends cdktn.ComplexList {
  public internalValue? : VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesGeneratedMemoriesTopics[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesGeneratedMemoriesTopicsOutputReference {
    return new VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesGeneratedMemoriesTopicsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesGeneratedMemories {
  /**
  * Represents the fact to generate a memory from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#fact VertexAiReasoningEngine#fact}
  */
  readonly fact: string;
  /**
  * topics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#topics VertexAiReasoningEngine#topics}
  */
  readonly topics?: VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesGeneratedMemoriesTopics[] | cdktn.IResolvable;
}

export function vertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesGeneratedMemoriesToTerraform(struct?: VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesGeneratedMemories | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    fact: cdktn.stringToTerraform(struct!.fact),
    topics: cdktn.listMapper(vertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesGeneratedMemoriesTopicsToTerraform, true)(struct!.topics),
  }
}


export function vertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesGeneratedMemoriesToHclTerraform(struct?: VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesGeneratedMemories | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    fact: {
      value: cdktn.stringToHclTerraform(struct!.fact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    topics: {
      value: cdktn.listMapperHcl(vertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesGeneratedMemoriesTopicsToHclTerraform, true)(struct!.topics),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesGeneratedMemoriesTopicsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesGeneratedMemoriesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesGeneratedMemories | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fact !== undefined) {
      hasAnyValues = true;
      internalValueResult.fact = this._fact;
    }
    if (this._topics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.topics = this._topics?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesGeneratedMemories | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fact = undefined;
      this._topics.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fact = value.fact;
      this._topics.internalValue = value.topics;
    }
  }

  // fact - computed: false, optional: false, required: true
  private _fact?: string; 
  public get fact() {
    return this.getStringAttribute('fact');
  }
  public set fact(value: string) {
    this._fact = value;
  }
  // Temporarily expose input value. Use with caution.
  public get factInput() {
    return this._fact;
  }

  // topics - computed: false, optional: true, required: false
  private _topics = new VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesGeneratedMemoriesTopicsList(this, "topics", false);
  public get topics() {
    return this._topics;
  }
  public putTopics(value: VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesGeneratedMemoriesTopics[] | cdktn.IResolvable) {
    this._topics.internalValue = value;
  }
  public resetTopics() {
    this._topics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicsInput() {
    return this._topics.internalValue;
  }
}

export class VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesGeneratedMemoriesList extends cdktn.ComplexList {
  public internalValue? : VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesGeneratedMemories[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesGeneratedMemoriesOutputReference {
    return new VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesGeneratedMemoriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamples {
  /**
  * conversation_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#conversation_source VertexAiReasoningEngine#conversation_source}
  */
  readonly conversationSource?: VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSource;
  /**
  * generated_memories block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#generated_memories VertexAiReasoningEngine#generated_memories}
  */
  readonly generatedMemories?: VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesGeneratedMemories[] | cdktn.IResolvable;
}

export function vertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesToTerraform(struct?: VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamples | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    conversation_source: vertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceToTerraform(struct!.conversationSource),
    generated_memories: cdktn.listMapper(vertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesGeneratedMemoriesToTerraform, true)(struct!.generatedMemories),
  }
}


export function vertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesToHclTerraform(struct?: VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamples | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    conversation_source: {
      value: vertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceToHclTerraform(struct!.conversationSource),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceList",
    },
    generated_memories: {
      value: cdktn.listMapperHcl(vertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesGeneratedMemoriesToHclTerraform, true)(struct!.generatedMemories),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesGeneratedMemoriesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamples | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conversationSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conversationSource = this._conversationSource?.internalValue;
    }
    if (this._generatedMemories?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.generatedMemories = this._generatedMemories?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamples | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._conversationSource.internalValue = undefined;
      this._generatedMemories.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._conversationSource.internalValue = value.conversationSource;
      this._generatedMemories.internalValue = value.generatedMemories;
    }
  }

  // conversation_source - computed: false, optional: true, required: false
  private _conversationSource = new VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceOutputReference(this, "conversation_source");
  public get conversationSource() {
    return this._conversationSource;
  }
  public putConversationSource(value: VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSource) {
    this._conversationSource.internalValue = value;
  }
  public resetConversationSource() {
    this._conversationSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conversationSourceInput() {
    return this._conversationSource.internalValue;
  }

  // generated_memories - computed: false, optional: true, required: false
  private _generatedMemories = new VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesGeneratedMemoriesList(this, "generated_memories", false);
  public get generatedMemories() {
    return this._generatedMemories;
  }
  public putGeneratedMemories(value: VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesGeneratedMemories[] | cdktn.IResolvable) {
    this._generatedMemories.internalValue = value;
  }
  public resetGeneratedMemories() {
    this._generatedMemories.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generatedMemoriesInput() {
    return this._generatedMemories.internalValue;
  }
}

export class VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesList extends cdktn.ComplexList {
  public internalValue? : VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamples[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesOutputReference {
    return new VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsMemoryTopicsCustomMemoryTopic {
  /**
  * Description of custom memory topic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#description VertexAiReasoningEngine#description}
  */
  readonly description?: string;
  /**
  * Label of custom memory topic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#label VertexAiReasoningEngine#label}
  */
  readonly label?: string;
}

export function vertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsMemoryTopicsCustomMemoryTopicToTerraform(struct?: VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsMemoryTopicsCustomMemoryTopicOutputReference | VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsMemoryTopicsCustomMemoryTopic): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    label: cdktn.stringToTerraform(struct!.label),
  }
}


export function vertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsMemoryTopicsCustomMemoryTopicToHclTerraform(struct?: VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsMemoryTopicsCustomMemoryTopicOutputReference | VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsMemoryTopicsCustomMemoryTopic): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label: {
      value: cdktn.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsMemoryTopicsCustomMemoryTopicOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsMemoryTopicsCustomMemoryTopic | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsMemoryTopicsCustomMemoryTopic | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._label = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._label = value.label;
    }
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }
}
export interface VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsMemoryTopicsManagedMemoryTopic {
  /**
  * Managed topic enum (e.g. USER_PREFERENCES, EXPLICIT_INSTRUCTIONS).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#managed_topic_enum VertexAiReasoningEngine#managed_topic_enum}
  */
  readonly managedTopicEnum?: string;
}

export function vertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsMemoryTopicsManagedMemoryTopicToTerraform(struct?: VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsMemoryTopicsManagedMemoryTopicOutputReference | VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsMemoryTopicsManagedMemoryTopic): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    managed_topic_enum: cdktn.stringToTerraform(struct!.managedTopicEnum),
  }
}


export function vertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsMemoryTopicsManagedMemoryTopicToHclTerraform(struct?: VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsMemoryTopicsManagedMemoryTopicOutputReference | VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsMemoryTopicsManagedMemoryTopic): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    managed_topic_enum: {
      value: cdktn.stringToHclTerraform(struct!.managedTopicEnum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsMemoryTopicsManagedMemoryTopicOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsMemoryTopicsManagedMemoryTopic | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._managedTopicEnum !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedTopicEnum = this._managedTopicEnum;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsMemoryTopicsManagedMemoryTopic | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._managedTopicEnum = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._managedTopicEnum = value.managedTopicEnum;
    }
  }

  // managed_topic_enum - computed: false, optional: true, required: false
  private _managedTopicEnum?: string; 
  public get managedTopicEnum() {
    return this.getStringAttribute('managed_topic_enum');
  }
  public set managedTopicEnum(value: string) {
    this._managedTopicEnum = value;
  }
  public resetManagedTopicEnum() {
    this._managedTopicEnum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedTopicEnumInput() {
    return this._managedTopicEnum;
  }
}
export interface VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsMemoryTopics {
  /**
  * custom_memory_topic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#custom_memory_topic VertexAiReasoningEngine#custom_memory_topic}
  */
  readonly customMemoryTopic?: VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsMemoryTopicsCustomMemoryTopic;
  /**
  * managed_memory_topic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#managed_memory_topic VertexAiReasoningEngine#managed_memory_topic}
  */
  readonly managedMemoryTopic?: VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsMemoryTopicsManagedMemoryTopic;
}

export function vertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsMemoryTopicsToTerraform(struct?: VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsMemoryTopics | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    custom_memory_topic: vertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsMemoryTopicsCustomMemoryTopicToTerraform(struct!.customMemoryTopic),
    managed_memory_topic: vertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsMemoryTopicsManagedMemoryTopicToTerraform(struct!.managedMemoryTopic),
  }
}


export function vertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsMemoryTopicsToHclTerraform(struct?: VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsMemoryTopics | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    custom_memory_topic: {
      value: vertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsMemoryTopicsCustomMemoryTopicToHclTerraform(struct!.customMemoryTopic),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsMemoryTopicsCustomMemoryTopicList",
    },
    managed_memory_topic: {
      value: vertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsMemoryTopicsManagedMemoryTopicToHclTerraform(struct!.managedMemoryTopic),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsMemoryTopicsManagedMemoryTopicList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsMemoryTopicsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsMemoryTopics | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customMemoryTopic?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customMemoryTopic = this._customMemoryTopic?.internalValue;
    }
    if (this._managedMemoryTopic?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedMemoryTopic = this._managedMemoryTopic?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsMemoryTopics | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customMemoryTopic.internalValue = undefined;
      this._managedMemoryTopic.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customMemoryTopic.internalValue = value.customMemoryTopic;
      this._managedMemoryTopic.internalValue = value.managedMemoryTopic;
    }
  }

  // custom_memory_topic - computed: false, optional: true, required: false
  private _customMemoryTopic = new VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsMemoryTopicsCustomMemoryTopicOutputReference(this, "custom_memory_topic");
  public get customMemoryTopic() {
    return this._customMemoryTopic;
  }
  public putCustomMemoryTopic(value: VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsMemoryTopicsCustomMemoryTopic) {
    this._customMemoryTopic.internalValue = value;
  }
  public resetCustomMemoryTopic() {
    this._customMemoryTopic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customMemoryTopicInput() {
    return this._customMemoryTopic.internalValue;
  }

  // managed_memory_topic - computed: false, optional: true, required: false
  private _managedMemoryTopic = new VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsMemoryTopicsManagedMemoryTopicOutputReference(this, "managed_memory_topic");
  public get managedMemoryTopic() {
    return this._managedMemoryTopic;
  }
  public putManagedMemoryTopic(value: VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsMemoryTopicsManagedMemoryTopic) {
    this._managedMemoryTopic.internalValue = value;
  }
  public resetManagedMemoryTopic() {
    this._managedMemoryTopic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedMemoryTopicInput() {
    return this._managedMemoryTopic.internalValue;
  }
}

export class VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsMemoryTopicsList extends cdktn.ComplexList {
  public internalValue? : VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsMemoryTopics[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsMemoryTopicsOutputReference {
    return new VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsMemoryTopicsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigs {
  /**
  * Indicates whether natural language memory generation should be disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#disable_natural_language_memories VertexAiReasoningEngine#disable_natural_language_memories}
  */
  readonly disableNaturalLanguageMemories?: boolean | cdktn.IResolvable;
  /**
  * Optional. Generate memories in the third person if set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#enable_third_person_memories VertexAiReasoningEngine#enable_third_person_memories}
  */
  readonly enableThirdPersonMemories?: boolean | cdktn.IResolvable;
  /**
  * Optional. List of scope keys that this customization config applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#scope_keys VertexAiReasoningEngine#scope_keys}
  */
  readonly scopeKeys?: string[];
  /**
  * consolidation_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#consolidation_config VertexAiReasoningEngine#consolidation_config}
  */
  readonly consolidationConfig?: VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsConsolidationConfig;
  /**
  * generate_memories_examples block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#generate_memories_examples VertexAiReasoningEngine#generate_memories_examples}
  */
  readonly generateMemoriesExamples?: VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamples[] | cdktn.IResolvable;
  /**
  * memory_topics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#memory_topics VertexAiReasoningEngine#memory_topics}
  */
  readonly memoryTopics?: VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsMemoryTopics[] | cdktn.IResolvable;
}

export function vertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsToTerraform(struct?: VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    disable_natural_language_memories: cdktn.booleanToTerraform(struct!.disableNaturalLanguageMemories),
    enable_third_person_memories: cdktn.booleanToTerraform(struct!.enableThirdPersonMemories),
    scope_keys: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.scopeKeys),
    consolidation_config: vertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsConsolidationConfigToTerraform(struct!.consolidationConfig),
    generate_memories_examples: cdktn.listMapper(vertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesToTerraform, true)(struct!.generateMemoriesExamples),
    memory_topics: cdktn.listMapper(vertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsMemoryTopicsToTerraform, true)(struct!.memoryTopics),
  }
}


export function vertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsToHclTerraform(struct?: VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    disable_natural_language_memories: {
      value: cdktn.booleanToHclTerraform(struct!.disableNaturalLanguageMemories),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_third_person_memories: {
      value: cdktn.booleanToHclTerraform(struct!.enableThirdPersonMemories),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    scope_keys: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.scopeKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    consolidation_config: {
      value: vertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsConsolidationConfigToHclTerraform(struct!.consolidationConfig),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsConsolidationConfigList",
    },
    generate_memories_examples: {
      value: cdktn.listMapperHcl(vertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesToHclTerraform, true)(struct!.generateMemoriesExamples),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesList",
    },
    memory_topics: {
      value: cdktn.listMapperHcl(vertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsMemoryTopicsToHclTerraform, true)(struct!.memoryTopics),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsMemoryTopicsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigs | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableNaturalLanguageMemories !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableNaturalLanguageMemories = this._disableNaturalLanguageMemories;
    }
    if (this._enableThirdPersonMemories !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableThirdPersonMemories = this._enableThirdPersonMemories;
    }
    if (this._scopeKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopeKeys = this._scopeKeys;
    }
    if (this._consolidationConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.consolidationConfig = this._consolidationConfig?.internalValue;
    }
    if (this._generateMemoriesExamples?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.generateMemoriesExamples = this._generateMemoriesExamples?.internalValue;
    }
    if (this._memoryTopics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryTopics = this._memoryTopics?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigs | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disableNaturalLanguageMemories = undefined;
      this._enableThirdPersonMemories = undefined;
      this._scopeKeys = undefined;
      this._consolidationConfig.internalValue = undefined;
      this._generateMemoriesExamples.internalValue = undefined;
      this._memoryTopics.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disableNaturalLanguageMemories = value.disableNaturalLanguageMemories;
      this._enableThirdPersonMemories = value.enableThirdPersonMemories;
      this._scopeKeys = value.scopeKeys;
      this._consolidationConfig.internalValue = value.consolidationConfig;
      this._generateMemoriesExamples.internalValue = value.generateMemoriesExamples;
      this._memoryTopics.internalValue = value.memoryTopics;
    }
  }

  // disable_natural_language_memories - computed: false, optional: true, required: false
  private _disableNaturalLanguageMemories?: boolean | cdktn.IResolvable; 
  public get disableNaturalLanguageMemories() {
    return this.getBooleanAttribute('disable_natural_language_memories');
  }
  public set disableNaturalLanguageMemories(value: boolean | cdktn.IResolvable) {
    this._disableNaturalLanguageMemories = value;
  }
  public resetDisableNaturalLanguageMemories() {
    this._disableNaturalLanguageMemories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableNaturalLanguageMemoriesInput() {
    return this._disableNaturalLanguageMemories;
  }

  // enable_third_person_memories - computed: false, optional: true, required: false
  private _enableThirdPersonMemories?: boolean | cdktn.IResolvable; 
  public get enableThirdPersonMemories() {
    return this.getBooleanAttribute('enable_third_person_memories');
  }
  public set enableThirdPersonMemories(value: boolean | cdktn.IResolvable) {
    this._enableThirdPersonMemories = value;
  }
  public resetEnableThirdPersonMemories() {
    this._enableThirdPersonMemories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableThirdPersonMemoriesInput() {
    return this._enableThirdPersonMemories;
  }

  // scope_keys - computed: false, optional: true, required: false
  private _scopeKeys?: string[]; 
  public get scopeKeys() {
    return this.getListAttribute('scope_keys');
  }
  public set scopeKeys(value: string[]) {
    this._scopeKeys = value;
  }
  public resetScopeKeys() {
    this._scopeKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeKeysInput() {
    return this._scopeKeys;
  }

  // consolidation_config - computed: false, optional: true, required: false
  private _consolidationConfig = new VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsConsolidationConfigOutputReference(this, "consolidation_config");
  public get consolidationConfig() {
    return this._consolidationConfig;
  }
  public putConsolidationConfig(value: VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsConsolidationConfig) {
    this._consolidationConfig.internalValue = value;
  }
  public resetConsolidationConfig() {
    this._consolidationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consolidationConfigInput() {
    return this._consolidationConfig.internalValue;
  }

  // generate_memories_examples - computed: false, optional: true, required: false
  private _generateMemoriesExamples = new VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesList(this, "generate_memories_examples", false);
  public get generateMemoriesExamples() {
    return this._generateMemoriesExamples;
  }
  public putGenerateMemoriesExamples(value: VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamples[] | cdktn.IResolvable) {
    this._generateMemoriesExamples.internalValue = value;
  }
  public resetGenerateMemoriesExamples() {
    this._generateMemoriesExamples.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generateMemoriesExamplesInput() {
    return this._generateMemoriesExamples.internalValue;
  }

  // memory_topics - computed: false, optional: true, required: false
  private _memoryTopics = new VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsMemoryTopicsList(this, "memory_topics", false);
  public get memoryTopics() {
    return this._memoryTopics;
  }
  public putMemoryTopics(value: VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsMemoryTopics[] | cdktn.IResolvable) {
    this._memoryTopics.internalValue = value;
  }
  public resetMemoryTopics() {
    this._memoryTopics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryTopicsInput() {
    return this._memoryTopics.internalValue;
  }
}

export class VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsList extends cdktn.ComplexList {
  public internalValue? : VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigs[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsOutputReference {
    return new VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigGenerationTriggerConfigGenerationRule {
  /**
  * Optional. Specifies to trigger generation when the event count reaches this limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#event_count VertexAiReasoningEngine#event_count}
  */
  readonly eventCount?: number;
  /**
  * Optional. Specifies to trigger generation at a fixed interval. The duration
  * must have a minute-level granularity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#fixed_interval VertexAiReasoningEngine#fixed_interval}
  */
  readonly fixedInterval?: string;
  /**
  * Optional. Specifies to trigger generation if the stream is inactive for the
  * specified duration after the most recent event. The duration must have a
  * minute-level granularity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#idle_duration VertexAiReasoningEngine#idle_duration}
  */
  readonly idleDuration?: string;
  /**
  * Optional. Re-include the last N already-processed events in the next window.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#overlap_event_count VertexAiReasoningEngine#overlap_event_count}
  */
  readonly overlapEventCount?: number;
}

export function vertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigGenerationTriggerConfigGenerationRuleToTerraform(struct?: VertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigGenerationTriggerConfigGenerationRuleOutputReference | VertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigGenerationTriggerConfigGenerationRule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    event_count: cdktn.numberToTerraform(struct!.eventCount),
    fixed_interval: cdktn.stringToTerraform(struct!.fixedInterval),
    idle_duration: cdktn.stringToTerraform(struct!.idleDuration),
    overlap_event_count: cdktn.numberToTerraform(struct!.overlapEventCount),
  }
}


export function vertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigGenerationTriggerConfigGenerationRuleToHclTerraform(struct?: VertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigGenerationTriggerConfigGenerationRuleOutputReference | VertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigGenerationTriggerConfigGenerationRule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    event_count: {
      value: cdktn.numberToHclTerraform(struct!.eventCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fixed_interval: {
      value: cdktn.stringToHclTerraform(struct!.fixedInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    idle_duration: {
      value: cdktn.stringToHclTerraform(struct!.idleDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    overlap_event_count: {
      value: cdktn.numberToHclTerraform(struct!.overlapEventCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigGenerationTriggerConfigGenerationRuleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigGenerationTriggerConfigGenerationRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eventCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventCount = this._eventCount;
    }
    if (this._fixedInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedInterval = this._fixedInterval;
    }
    if (this._idleDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleDuration = this._idleDuration;
    }
    if (this._overlapEventCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.overlapEventCount = this._overlapEventCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigGenerationTriggerConfigGenerationRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._eventCount = undefined;
      this._fixedInterval = undefined;
      this._idleDuration = undefined;
      this._overlapEventCount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._eventCount = value.eventCount;
      this._fixedInterval = value.fixedInterval;
      this._idleDuration = value.idleDuration;
      this._overlapEventCount = value.overlapEventCount;
    }
  }

  // event_count - computed: false, optional: true, required: false
  private _eventCount?: number; 
  public get eventCount() {
    return this.getNumberAttribute('event_count');
  }
  public set eventCount(value: number) {
    this._eventCount = value;
  }
  public resetEventCount() {
    this._eventCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventCountInput() {
    return this._eventCount;
  }

  // fixed_interval - computed: false, optional: true, required: false
  private _fixedInterval?: string; 
  public get fixedInterval() {
    return this.getStringAttribute('fixed_interval');
  }
  public set fixedInterval(value: string) {
    this._fixedInterval = value;
  }
  public resetFixedInterval() {
    this._fixedInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedIntervalInput() {
    return this._fixedInterval;
  }

  // idle_duration - computed: false, optional: true, required: false
  private _idleDuration?: string; 
  public get idleDuration() {
    return this.getStringAttribute('idle_duration');
  }
  public set idleDuration(value: string) {
    this._idleDuration = value;
  }
  public resetIdleDuration() {
    this._idleDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleDurationInput() {
    return this._idleDuration;
  }

  // overlap_event_count - computed: false, optional: true, required: false
  private _overlapEventCount?: number; 
  public get overlapEventCount() {
    return this.getNumberAttribute('overlap_event_count');
  }
  public set overlapEventCount(value: number) {
    this._overlapEventCount = value;
  }
  public resetOverlapEventCount() {
    this._overlapEventCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overlapEventCountInput() {
    return this._overlapEventCount;
  }
}
export interface VertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigGenerationTriggerConfig {
  /**
  * generation_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#generation_rule VertexAiReasoningEngine#generation_rule}
  */
  readonly generationRule?: VertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigGenerationTriggerConfigGenerationRule;
}

export function vertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigGenerationTriggerConfigToTerraform(struct?: VertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigGenerationTriggerConfigOutputReference | VertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigGenerationTriggerConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    generation_rule: vertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigGenerationTriggerConfigGenerationRuleToTerraform(struct!.generationRule),
  }
}


export function vertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigGenerationTriggerConfigToHclTerraform(struct?: VertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigGenerationTriggerConfigOutputReference | VertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigGenerationTriggerConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    generation_rule: {
      value: vertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigGenerationTriggerConfigGenerationRuleToHclTerraform(struct!.generationRule),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigGenerationTriggerConfigGenerationRuleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigGenerationTriggerConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigGenerationTriggerConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._generationRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.generationRule = this._generationRule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigGenerationTriggerConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._generationRule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._generationRule.internalValue = value.generationRule;
    }
  }

  // generation_rule - computed: false, optional: true, required: false
  private _generationRule = new VertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigGenerationTriggerConfigGenerationRuleOutputReference(this, "generation_rule");
  public get generationRule() {
    return this._generationRule;
  }
  public putGenerationRule(value: VertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigGenerationTriggerConfigGenerationRule) {
    this._generationRule.internalValue = value;
  }
  public resetGenerationRule() {
    this._generationRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generationRuleInput() {
    return this._generationRule.internalValue;
  }
}
export interface VertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfig {
  /**
  * The model used to generate memories. Format: projects/{project}/locations/{location}/publishers/google/models/{model}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#model VertexAiReasoningEngine#model}
  */
  readonly model: string;
  /**
  * generation_trigger_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#generation_trigger_config VertexAiReasoningEngine#generation_trigger_config}
  */
  readonly generationTriggerConfig?: VertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigGenerationTriggerConfig;
}

export function vertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigToTerraform(struct?: VertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigOutputReference | VertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    model: cdktn.stringToTerraform(struct!.model),
    generation_trigger_config: vertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigGenerationTriggerConfigToTerraform(struct!.generationTriggerConfig),
  }
}


export function vertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigToHclTerraform(struct?: VertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigOutputReference | VertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    model: {
      value: cdktn.stringToHclTerraform(struct!.model),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    generation_trigger_config: {
      value: vertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigGenerationTriggerConfigToHclTerraform(struct!.generationTriggerConfig),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigGenerationTriggerConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._model !== undefined) {
      hasAnyValues = true;
      internalValueResult.model = this._model;
    }
    if (this._generationTriggerConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.generationTriggerConfig = this._generationTriggerConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._model = undefined;
      this._generationTriggerConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._model = value.model;
      this._generationTriggerConfig.internalValue = value.generationTriggerConfig;
    }
  }

  // model - computed: false, optional: false, required: true
  private _model?: string; 
  public get model() {
    return this.getStringAttribute('model');
  }
  public set model(value: string) {
    this._model = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelInput() {
    return this._model;
  }

  // generation_trigger_config - computed: false, optional: true, required: false
  private _generationTriggerConfig = new VertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigGenerationTriggerConfigOutputReference(this, "generation_trigger_config");
  public get generationTriggerConfig() {
    return this._generationTriggerConfig;
  }
  public putGenerationTriggerConfig(value: VertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigGenerationTriggerConfig) {
    this._generationTriggerConfig.internalValue = value;
  }
  public resetGenerationTriggerConfig() {
    this._generationTriggerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generationTriggerConfigInput() {
    return this._generationTriggerConfig.internalValue;
  }
}
export interface VertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfig {
  /**
  * The model used to generate embeddings to lookup similar memories. Format: projects/{project}/locations/{location}/publishers/google/models/{model}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#embedding_model VertexAiReasoningEngine#embedding_model}
  */
  readonly embeddingModel: string;
}

export function vertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigToTerraform(struct?: VertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigOutputReference | VertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    embedding_model: cdktn.stringToTerraform(struct!.embeddingModel),
  }
}


export function vertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigToHclTerraform(struct?: VertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigOutputReference | VertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    embedding_model: {
      value: cdktn.stringToHclTerraform(struct!.embeddingModel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._embeddingModel !== undefined) {
      hasAnyValues = true;
      internalValueResult.embeddingModel = this._embeddingModel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._embeddingModel = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._embeddingModel = value.embeddingModel;
    }
  }

  // embedding_model - computed: false, optional: false, required: true
  private _embeddingModel?: string; 
  public get embeddingModel() {
    return this.getStringAttribute('embedding_model');
  }
  public set embeddingModel(value: string) {
    this._embeddingModel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get embeddingModelInput() {
    return this._embeddingModel;
  }
}
export interface VertexAiReasoningEngineContextSpecMemoryBankConfigStructuredMemoryConfigsSchemaConfigs {
  /**
  * Required. Unique ID identifying the memory schema.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#id VertexAiReasoningEngine#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Optional. The memory schema defined as an OpenAPI Schema Object JSON string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#memory_schema VertexAiReasoningEngine#memory_schema}
  */
  readonly memorySchema?: string;
}

export function vertexAiReasoningEngineContextSpecMemoryBankConfigStructuredMemoryConfigsSchemaConfigsToTerraform(struct?: VertexAiReasoningEngineContextSpecMemoryBankConfigStructuredMemoryConfigsSchemaConfigs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    id: cdktn.stringToTerraform(struct!.id),
    memory_schema: cdktn.stringToTerraform(struct!.memorySchema),
  }
}


export function vertexAiReasoningEngineContextSpecMemoryBankConfigStructuredMemoryConfigsSchemaConfigsToHclTerraform(struct?: VertexAiReasoningEngineContextSpecMemoryBankConfigStructuredMemoryConfigsSchemaConfigs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory_schema: {
      value: cdktn.stringToHclTerraform(struct!.memorySchema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiReasoningEngineContextSpecMemoryBankConfigStructuredMemoryConfigsSchemaConfigsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): VertexAiReasoningEngineContextSpecMemoryBankConfigStructuredMemoryConfigsSchemaConfigs | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._memorySchema !== undefined) {
      hasAnyValues = true;
      internalValueResult.memorySchema = this._memorySchema;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiReasoningEngineContextSpecMemoryBankConfigStructuredMemoryConfigsSchemaConfigs | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._memorySchema = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._memorySchema = value.memorySchema;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // memory_schema - computed: false, optional: true, required: false
  private _memorySchema?: string; 
  public get memorySchema() {
    return this.getStringAttribute('memory_schema');
  }
  public set memorySchema(value: string) {
    this._memorySchema = value;
  }
  public resetMemorySchema() {
    this._memorySchema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memorySchemaInput() {
    return this._memorySchema;
  }
}

export class VertexAiReasoningEngineContextSpecMemoryBankConfigStructuredMemoryConfigsSchemaConfigsList extends cdktn.ComplexList {
  public internalValue? : VertexAiReasoningEngineContextSpecMemoryBankConfigStructuredMemoryConfigsSchemaConfigs[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): VertexAiReasoningEngineContextSpecMemoryBankConfigStructuredMemoryConfigsSchemaConfigsOutputReference {
    return new VertexAiReasoningEngineContextSpecMemoryBankConfigStructuredMemoryConfigsSchemaConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VertexAiReasoningEngineContextSpecMemoryBankConfigStructuredMemoryConfigs {
  /**
  * Optional. List of scope keys that this structured memory config applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#scope_keys VertexAiReasoningEngine#scope_keys}
  */
  readonly scopeKeys?: string[];
  /**
  * schema_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#schema_configs VertexAiReasoningEngine#schema_configs}
  */
  readonly schemaConfigs?: VertexAiReasoningEngineContextSpecMemoryBankConfigStructuredMemoryConfigsSchemaConfigs[] | cdktn.IResolvable;
}

export function vertexAiReasoningEngineContextSpecMemoryBankConfigStructuredMemoryConfigsToTerraform(struct?: VertexAiReasoningEngineContextSpecMemoryBankConfigStructuredMemoryConfigs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    scope_keys: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.scopeKeys),
    schema_configs: cdktn.listMapper(vertexAiReasoningEngineContextSpecMemoryBankConfigStructuredMemoryConfigsSchemaConfigsToTerraform, true)(struct!.schemaConfigs),
  }
}


export function vertexAiReasoningEngineContextSpecMemoryBankConfigStructuredMemoryConfigsToHclTerraform(struct?: VertexAiReasoningEngineContextSpecMemoryBankConfigStructuredMemoryConfigs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    scope_keys: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.scopeKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    schema_configs: {
      value: cdktn.listMapperHcl(vertexAiReasoningEngineContextSpecMemoryBankConfigStructuredMemoryConfigsSchemaConfigsToHclTerraform, true)(struct!.schemaConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiReasoningEngineContextSpecMemoryBankConfigStructuredMemoryConfigsSchemaConfigsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiReasoningEngineContextSpecMemoryBankConfigStructuredMemoryConfigsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): VertexAiReasoningEngineContextSpecMemoryBankConfigStructuredMemoryConfigs | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scopeKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopeKeys = this._scopeKeys;
    }
    if (this._schemaConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaConfigs = this._schemaConfigs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiReasoningEngineContextSpecMemoryBankConfigStructuredMemoryConfigs | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._scopeKeys = undefined;
      this._schemaConfigs.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._scopeKeys = value.scopeKeys;
      this._schemaConfigs.internalValue = value.schemaConfigs;
    }
  }

  // scope_keys - computed: false, optional: true, required: false
  private _scopeKeys?: string[]; 
  public get scopeKeys() {
    return this.getListAttribute('scope_keys');
  }
  public set scopeKeys(value: string[]) {
    this._scopeKeys = value;
  }
  public resetScopeKeys() {
    this._scopeKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeKeysInput() {
    return this._scopeKeys;
  }

  // schema_configs - computed: false, optional: true, required: false
  private _schemaConfigs = new VertexAiReasoningEngineContextSpecMemoryBankConfigStructuredMemoryConfigsSchemaConfigsList(this, "schema_configs", false);
  public get schemaConfigs() {
    return this._schemaConfigs;
  }
  public putSchemaConfigs(value: VertexAiReasoningEngineContextSpecMemoryBankConfigStructuredMemoryConfigsSchemaConfigs[] | cdktn.IResolvable) {
    this._schemaConfigs.internalValue = value;
  }
  public resetSchemaConfigs() {
    this._schemaConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaConfigsInput() {
    return this._schemaConfigs.internalValue;
  }
}

export class VertexAiReasoningEngineContextSpecMemoryBankConfigStructuredMemoryConfigsList extends cdktn.ComplexList {
  public internalValue? : VertexAiReasoningEngineContextSpecMemoryBankConfigStructuredMemoryConfigs[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): VertexAiReasoningEngineContextSpecMemoryBankConfigStructuredMemoryConfigsOutputReference {
    return new VertexAiReasoningEngineContextSpecMemoryBankConfigStructuredMemoryConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfig {
  /**
  * The TTL duration for memories uploaded via CreateMemory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#create_ttl VertexAiReasoningEngine#create_ttl}
  */
  readonly createTtl?: string;
  /**
  * The TTL duration for memories newly generated via GenerateMemories.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#generate_created_ttl VertexAiReasoningEngine#generate_created_ttl}
  */
  readonly generateCreatedTtl?: string;
  /**
  * The TTL duration for memories updated via GenerateMemories.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#generate_updated_ttl VertexAiReasoningEngine#generate_updated_ttl}
  */
  readonly generateUpdatedTtl?: string;
}

export function vertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigToTerraform(struct?: VertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference | VertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    create_ttl: cdktn.stringToTerraform(struct!.createTtl),
    generate_created_ttl: cdktn.stringToTerraform(struct!.generateCreatedTtl),
    generate_updated_ttl: cdktn.stringToTerraform(struct!.generateUpdatedTtl),
  }
}


export function vertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigToHclTerraform(struct?: VertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference | VertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    create_ttl: {
      value: cdktn.stringToHclTerraform(struct!.createTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    generate_created_ttl: {
      value: cdktn.stringToHclTerraform(struct!.generateCreatedTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    generate_updated_ttl: {
      value: cdktn.stringToHclTerraform(struct!.generateUpdatedTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._createTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.createTtl = this._createTtl;
    }
    if (this._generateCreatedTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.generateCreatedTtl = this._generateCreatedTtl;
    }
    if (this._generateUpdatedTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.generateUpdatedTtl = this._generateUpdatedTtl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._createTtl = undefined;
      this._generateCreatedTtl = undefined;
      this._generateUpdatedTtl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._createTtl = value.createTtl;
      this._generateCreatedTtl = value.generateCreatedTtl;
      this._generateUpdatedTtl = value.generateUpdatedTtl;
    }
  }

  // create_ttl - computed: false, optional: true, required: false
  private _createTtl?: string; 
  public get createTtl() {
    return this.getStringAttribute('create_ttl');
  }
  public set createTtl(value: string) {
    this._createTtl = value;
  }
  public resetCreateTtl() {
    this._createTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createTtlInput() {
    return this._createTtl;
  }

  // generate_created_ttl - computed: false, optional: true, required: false
  private _generateCreatedTtl?: string; 
  public get generateCreatedTtl() {
    return this.getStringAttribute('generate_created_ttl');
  }
  public set generateCreatedTtl(value: string) {
    this._generateCreatedTtl = value;
  }
  public resetGenerateCreatedTtl() {
    this._generateCreatedTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generateCreatedTtlInput() {
    return this._generateCreatedTtl;
  }

  // generate_updated_ttl - computed: false, optional: true, required: false
  private _generateUpdatedTtl?: string; 
  public get generateUpdatedTtl() {
    return this.getStringAttribute('generate_updated_ttl');
  }
  public set generateUpdatedTtl(value: string) {
    this._generateUpdatedTtl = value;
  }
  public resetGenerateUpdatedTtl() {
    this._generateUpdatedTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generateUpdatedTtlInput() {
    return this._generateUpdatedTtl;
  }
}
export interface VertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfig {
  /**
  * The default TTL duration of the memories in the Memory Bank.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#default_ttl VertexAiReasoningEngine#default_ttl}
  */
  readonly defaultTtl?: string;
  /**
  * The default TTL duration of the memory revisions in the Memory Bank.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#memory_revision_default_ttl VertexAiReasoningEngine#memory_revision_default_ttl}
  */
  readonly memoryRevisionDefaultTtl?: string;
  /**
  * granular_ttl_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#granular_ttl_config VertexAiReasoningEngine#granular_ttl_config}
  */
  readonly granularTtlConfig?: VertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfig;
}

export function vertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigToTerraform(struct?: VertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference | VertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    default_ttl: cdktn.stringToTerraform(struct!.defaultTtl),
    memory_revision_default_ttl: cdktn.stringToTerraform(struct!.memoryRevisionDefaultTtl),
    granular_ttl_config: vertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigToTerraform(struct!.granularTtlConfig),
  }
}


export function vertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigToHclTerraform(struct?: VertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference | VertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    default_ttl: {
      value: cdktn.stringToHclTerraform(struct!.defaultTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory_revision_default_ttl: {
      value: cdktn.stringToHclTerraform(struct!.memoryRevisionDefaultTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    granular_ttl_config: {
      value: vertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigToHclTerraform(struct!.granularTtlConfig),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultTtl = this._defaultTtl;
    }
    if (this._memoryRevisionDefaultTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryRevisionDefaultTtl = this._memoryRevisionDefaultTtl;
    }
    if (this._granularTtlConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.granularTtlConfig = this._granularTtlConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultTtl = undefined;
      this._memoryRevisionDefaultTtl = undefined;
      this._granularTtlConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultTtl = value.defaultTtl;
      this._memoryRevisionDefaultTtl = value.memoryRevisionDefaultTtl;
      this._granularTtlConfig.internalValue = value.granularTtlConfig;
    }
  }

  // default_ttl - computed: false, optional: true, required: false
  private _defaultTtl?: string; 
  public get defaultTtl() {
    return this.getStringAttribute('default_ttl');
  }
  public set defaultTtl(value: string) {
    this._defaultTtl = value;
  }
  public resetDefaultTtl() {
    this._defaultTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTtlInput() {
    return this._defaultTtl;
  }

  // memory_revision_default_ttl - computed: false, optional: true, required: false
  private _memoryRevisionDefaultTtl?: string; 
  public get memoryRevisionDefaultTtl() {
    return this.getStringAttribute('memory_revision_default_ttl');
  }
  public set memoryRevisionDefaultTtl(value: string) {
    this._memoryRevisionDefaultTtl = value;
  }
  public resetMemoryRevisionDefaultTtl() {
    this._memoryRevisionDefaultTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryRevisionDefaultTtlInput() {
    return this._memoryRevisionDefaultTtl;
  }

  // granular_ttl_config - computed: false, optional: true, required: false
  private _granularTtlConfig = new VertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference(this, "granular_ttl_config");
  public get granularTtlConfig() {
    return this._granularTtlConfig;
  }
  public putGranularTtlConfig(value: VertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfig) {
    this._granularTtlConfig.internalValue = value;
  }
  public resetGranularTtlConfig() {
    this._granularTtlConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get granularTtlConfigInput() {
    return this._granularTtlConfig.internalValue;
  }
}
export interface VertexAiReasoningEngineContextSpecMemoryBankConfig {
  /**
  * If true, no memory revisions will be created for any requests to the Memory Bank.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#disable_memory_revisions VertexAiReasoningEngine#disable_memory_revisions}
  */
  readonly disableMemoryRevisions?: boolean | cdktn.IResolvable;
  /**
  * customization_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#customization_configs VertexAiReasoningEngine#customization_configs}
  */
  readonly customizationConfigs?: VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigs[] | cdktn.IResolvable;
  /**
  * generation_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#generation_config VertexAiReasoningEngine#generation_config}
  */
  readonly generationConfig?: VertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfig;
  /**
  * similarity_search_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#similarity_search_config VertexAiReasoningEngine#similarity_search_config}
  */
  readonly similaritySearchConfig?: VertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfig;
  /**
  * structured_memory_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#structured_memory_configs VertexAiReasoningEngine#structured_memory_configs}
  */
  readonly structuredMemoryConfigs?: VertexAiReasoningEngineContextSpecMemoryBankConfigStructuredMemoryConfigs[] | cdktn.IResolvable;
  /**
  * ttl_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#ttl_config VertexAiReasoningEngine#ttl_config}
  */
  readonly ttlConfig?: VertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfig;
}

export function vertexAiReasoningEngineContextSpecMemoryBankConfigToTerraform(struct?: VertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference | VertexAiReasoningEngineContextSpecMemoryBankConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    disable_memory_revisions: cdktn.booleanToTerraform(struct!.disableMemoryRevisions),
    customization_configs: cdktn.listMapper(vertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsToTerraform, true)(struct!.customizationConfigs),
    generation_config: vertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigToTerraform(struct!.generationConfig),
    similarity_search_config: vertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigToTerraform(struct!.similaritySearchConfig),
    structured_memory_configs: cdktn.listMapper(vertexAiReasoningEngineContextSpecMemoryBankConfigStructuredMemoryConfigsToTerraform, true)(struct!.structuredMemoryConfigs),
    ttl_config: vertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigToTerraform(struct!.ttlConfig),
  }
}


export function vertexAiReasoningEngineContextSpecMemoryBankConfigToHclTerraform(struct?: VertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference | VertexAiReasoningEngineContextSpecMemoryBankConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    disable_memory_revisions: {
      value: cdktn.booleanToHclTerraform(struct!.disableMemoryRevisions),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    customization_configs: {
      value: cdktn.listMapperHcl(vertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsToHclTerraform, true)(struct!.customizationConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsList",
    },
    generation_config: {
      value: vertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigToHclTerraform(struct!.generationConfig),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigList",
    },
    similarity_search_config: {
      value: vertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigToHclTerraform(struct!.similaritySearchConfig),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigList",
    },
    structured_memory_configs: {
      value: cdktn.listMapperHcl(vertexAiReasoningEngineContextSpecMemoryBankConfigStructuredMemoryConfigsToHclTerraform, true)(struct!.structuredMemoryConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiReasoningEngineContextSpecMemoryBankConfigStructuredMemoryConfigsList",
    },
    ttl_config: {
      value: vertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigToHclTerraform(struct!.ttlConfig),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiReasoningEngineContextSpecMemoryBankConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableMemoryRevisions !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableMemoryRevisions = this._disableMemoryRevisions;
    }
    if (this._customizationConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customizationConfigs = this._customizationConfigs?.internalValue;
    }
    if (this._generationConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.generationConfig = this._generationConfig?.internalValue;
    }
    if (this._similaritySearchConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.similaritySearchConfig = this._similaritySearchConfig?.internalValue;
    }
    if (this._structuredMemoryConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.structuredMemoryConfigs = this._structuredMemoryConfigs?.internalValue;
    }
    if (this._ttlConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttlConfig = this._ttlConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiReasoningEngineContextSpecMemoryBankConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disableMemoryRevisions = undefined;
      this._customizationConfigs.internalValue = undefined;
      this._generationConfig.internalValue = undefined;
      this._similaritySearchConfig.internalValue = undefined;
      this._structuredMemoryConfigs.internalValue = undefined;
      this._ttlConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disableMemoryRevisions = value.disableMemoryRevisions;
      this._customizationConfigs.internalValue = value.customizationConfigs;
      this._generationConfig.internalValue = value.generationConfig;
      this._similaritySearchConfig.internalValue = value.similaritySearchConfig;
      this._structuredMemoryConfigs.internalValue = value.structuredMemoryConfigs;
      this._ttlConfig.internalValue = value.ttlConfig;
    }
  }

  // disable_memory_revisions - computed: false, optional: true, required: false
  private _disableMemoryRevisions?: boolean | cdktn.IResolvable; 
  public get disableMemoryRevisions() {
    return this.getBooleanAttribute('disable_memory_revisions');
  }
  public set disableMemoryRevisions(value: boolean | cdktn.IResolvable) {
    this._disableMemoryRevisions = value;
  }
  public resetDisableMemoryRevisions() {
    this._disableMemoryRevisions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableMemoryRevisionsInput() {
    return this._disableMemoryRevisions;
  }

  // customization_configs - computed: false, optional: true, required: false
  private _customizationConfigs = new VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsList(this, "customization_configs", false);
  public get customizationConfigs() {
    return this._customizationConfigs;
  }
  public putCustomizationConfigs(value: VertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigs[] | cdktn.IResolvable) {
    this._customizationConfigs.internalValue = value;
  }
  public resetCustomizationConfigs() {
    this._customizationConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customizationConfigsInput() {
    return this._customizationConfigs.internalValue;
  }

  // generation_config - computed: false, optional: true, required: false
  private _generationConfig = new VertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigOutputReference(this, "generation_config");
  public get generationConfig() {
    return this._generationConfig;
  }
  public putGenerationConfig(value: VertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfig) {
    this._generationConfig.internalValue = value;
  }
  public resetGenerationConfig() {
    this._generationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generationConfigInput() {
    return this._generationConfig.internalValue;
  }

  // similarity_search_config - computed: false, optional: true, required: false
  private _similaritySearchConfig = new VertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigOutputReference(this, "similarity_search_config");
  public get similaritySearchConfig() {
    return this._similaritySearchConfig;
  }
  public putSimilaritySearchConfig(value: VertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfig) {
    this._similaritySearchConfig.internalValue = value;
  }
  public resetSimilaritySearchConfig() {
    this._similaritySearchConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get similaritySearchConfigInput() {
    return this._similaritySearchConfig.internalValue;
  }

  // structured_memory_configs - computed: false, optional: true, required: false
  private _structuredMemoryConfigs = new VertexAiReasoningEngineContextSpecMemoryBankConfigStructuredMemoryConfigsList(this, "structured_memory_configs", false);
  public get structuredMemoryConfigs() {
    return this._structuredMemoryConfigs;
  }
  public putStructuredMemoryConfigs(value: VertexAiReasoningEngineContextSpecMemoryBankConfigStructuredMemoryConfigs[] | cdktn.IResolvable) {
    this._structuredMemoryConfigs.internalValue = value;
  }
  public resetStructuredMemoryConfigs() {
    this._structuredMemoryConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get structuredMemoryConfigsInput() {
    return this._structuredMemoryConfigs.internalValue;
  }

  // ttl_config - computed: false, optional: true, required: false
  private _ttlConfig = new VertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference(this, "ttl_config");
  public get ttlConfig() {
    return this._ttlConfig;
  }
  public putTtlConfig(value: VertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfig) {
    this._ttlConfig.internalValue = value;
  }
  public resetTtlConfig() {
    this._ttlConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlConfigInput() {
    return this._ttlConfig.internalValue;
  }
}
export interface VertexAiReasoningEngineContextSpec {
  /**
  * memory_bank_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#memory_bank_config VertexAiReasoningEngine#memory_bank_config}
  */
  readonly memoryBankConfig?: VertexAiReasoningEngineContextSpecMemoryBankConfig;
}

export function vertexAiReasoningEngineContextSpecToTerraform(struct?: VertexAiReasoningEngineContextSpecOutputReference | VertexAiReasoningEngineContextSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    memory_bank_config: vertexAiReasoningEngineContextSpecMemoryBankConfigToTerraform(struct!.memoryBankConfig),
  }
}


export function vertexAiReasoningEngineContextSpecToHclTerraform(struct?: VertexAiReasoningEngineContextSpecOutputReference | VertexAiReasoningEngineContextSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    memory_bank_config: {
      value: vertexAiReasoningEngineContextSpecMemoryBankConfigToHclTerraform(struct!.memoryBankConfig),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiReasoningEngineContextSpecMemoryBankConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiReasoningEngineContextSpecOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiReasoningEngineContextSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._memoryBankConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryBankConfig = this._memoryBankConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiReasoningEngineContextSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._memoryBankConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._memoryBankConfig.internalValue = value.memoryBankConfig;
    }
  }

  // memory_bank_config - computed: false, optional: true, required: false
  private _memoryBankConfig = new VertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference(this, "memory_bank_config");
  public get memoryBankConfig() {
    return this._memoryBankConfig;
  }
  public putMemoryBankConfig(value: VertexAiReasoningEngineContextSpecMemoryBankConfig) {
    this._memoryBankConfig.internalValue = value;
  }
  public resetMemoryBankConfig() {
    this._memoryBankConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryBankConfigInput() {
    return this._memoryBankConfig.internalValue;
  }
}
export interface VertexAiReasoningEngineEncryptionSpec {
  /**
  * Required. The Cloud KMS resource identifier of the customer managed
  * encryption key used to protect a resource. Has the form:
  * projects/my-project/locations/my-region/keyRings/my-kr/cryptoKeys/my-key.
  * The key needs to be in the same region as where the compute resource
  * is created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#kms_key_name VertexAiReasoningEngine#kms_key_name}
  */
  readonly kmsKeyName: string;
}

export function vertexAiReasoningEngineEncryptionSpecToTerraform(struct?: VertexAiReasoningEngineEncryptionSpecOutputReference | VertexAiReasoningEngineEncryptionSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    kms_key_name: cdktn.stringToTerraform(struct!.kmsKeyName),
  }
}


export function vertexAiReasoningEngineEncryptionSpecToHclTerraform(struct?: VertexAiReasoningEngineEncryptionSpecOutputReference | VertexAiReasoningEngineEncryptionSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    kms_key_name: {
      value: cdktn.stringToHclTerraform(struct!.kmsKeyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiReasoningEngineEncryptionSpecOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiReasoningEngineEncryptionSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyName = this._kmsKeyName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiReasoningEngineEncryptionSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsKeyName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsKeyName = value.kmsKeyName;
    }
  }

  // kms_key_name - computed: false, optional: false, required: true
  private _kmsKeyName?: string; 
  public get kmsKeyName() {
    return this.getStringAttribute('kms_key_name');
  }
  public set kmsKeyName(value: string) {
    this._kmsKeyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyNameInput() {
    return this._kmsKeyName;
  }
}
export interface VertexAiReasoningEngineSpecBuildSpec {
  /**
  * Optional. The service account that the Cloud Build builder runs as.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#service_account VertexAiReasoningEngine#service_account}
  */
  readonly serviceAccount?: string;
  /**
  * Optional. The resource name of the Cloud Build WorkerPool to use for the build.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#worker_pool VertexAiReasoningEngine#worker_pool}
  */
  readonly workerPool?: string;
}

export function vertexAiReasoningEngineSpecBuildSpecToTerraform(struct?: VertexAiReasoningEngineSpecBuildSpecOutputReference | VertexAiReasoningEngineSpecBuildSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    service_account: cdktn.stringToTerraform(struct!.serviceAccount),
    worker_pool: cdktn.stringToTerraform(struct!.workerPool),
  }
}


export function vertexAiReasoningEngineSpecBuildSpecToHclTerraform(struct?: VertexAiReasoningEngineSpecBuildSpecOutputReference | VertexAiReasoningEngineSpecBuildSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    service_account: {
      value: cdktn.stringToHclTerraform(struct!.serviceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    worker_pool: {
      value: cdktn.stringToHclTerraform(struct!.workerPool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiReasoningEngineSpecBuildSpecOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiReasoningEngineSpecBuildSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serviceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccount = this._serviceAccount;
    }
    if (this._workerPool !== undefined) {
      hasAnyValues = true;
      internalValueResult.workerPool = this._workerPool;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiReasoningEngineSpecBuildSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._serviceAccount = undefined;
      this._workerPool = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._serviceAccount = value.serviceAccount;
      this._workerPool = value.workerPool;
    }
  }

  // service_account - computed: false, optional: true, required: false
  private _serviceAccount?: string; 
  public get serviceAccount() {
    return this.getStringAttribute('service_account');
  }
  public set serviceAccount(value: string) {
    this._serviceAccount = value;
  }
  public resetServiceAccount() {
    this._serviceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountInput() {
    return this._serviceAccount;
  }

  // worker_pool - computed: false, optional: true, required: false
  private _workerPool?: string; 
  public get workerPool() {
    return this.getStringAttribute('worker_pool');
  }
  public set workerPool(value: string) {
    this._workerPool = value;
  }
  public resetWorkerPool() {
    this._workerPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerPoolInput() {
    return this._workerPool;
  }
}
export interface VertexAiReasoningEngineSpecContainerSpec {
  /**
  * The Artifact Registry Docker image URI (e.g.,
  * 'us-central1-docker.pkg.dev/my-project/my-repo/my-image:tag') of the
  * container image that is to be run on each worker replica.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#image_uri VertexAiReasoningEngine#image_uri}
  */
  readonly imageUri: string;
  /**
  * Optional. The port that the container listens on for incoming requests. If not specified, defaults to 8080.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#port VertexAiReasoningEngine#port}
  */
  readonly port?: number;
}

export function vertexAiReasoningEngineSpecContainerSpecToTerraform(struct?: VertexAiReasoningEngineSpecContainerSpecOutputReference | VertexAiReasoningEngineSpecContainerSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    image_uri: cdktn.stringToTerraform(struct!.imageUri),
    port: cdktn.numberToTerraform(struct!.port),
  }
}


export function vertexAiReasoningEngineSpecContainerSpecToHclTerraform(struct?: VertexAiReasoningEngineSpecContainerSpecOutputReference | VertexAiReasoningEngineSpecContainerSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    image_uri: {
      value: cdktn.stringToHclTerraform(struct!.imageUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktn.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiReasoningEngineSpecContainerSpecOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiReasoningEngineSpecContainerSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._imageUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageUri = this._imageUri;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiReasoningEngineSpecContainerSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._imageUri = undefined;
      this._port = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._imageUri = value.imageUri;
      this._port = value.port;
    }
  }

  // image_uri - computed: false, optional: false, required: true
  private _imageUri?: string; 
  public get imageUri() {
    return this.getStringAttribute('image_uri');
  }
  public set imageUri(value: string) {
    this._imageUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageUriInput() {
    return this._imageUri;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface VertexAiReasoningEngineSpecDeploymentSpecAgentGatewayConfigAgentToAnywhereConfig {
  /**
  * Required. The resource name of the Agent Gateway for outbound traffic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#agent_gateway VertexAiReasoningEngine#agent_gateway}
  */
  readonly agentGateway: string;
}

export function vertexAiReasoningEngineSpecDeploymentSpecAgentGatewayConfigAgentToAnywhereConfigToTerraform(struct?: VertexAiReasoningEngineSpecDeploymentSpecAgentGatewayConfigAgentToAnywhereConfigOutputReference | VertexAiReasoningEngineSpecDeploymentSpecAgentGatewayConfigAgentToAnywhereConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    agent_gateway: cdktn.stringToTerraform(struct!.agentGateway),
  }
}


export function vertexAiReasoningEngineSpecDeploymentSpecAgentGatewayConfigAgentToAnywhereConfigToHclTerraform(struct?: VertexAiReasoningEngineSpecDeploymentSpecAgentGatewayConfigAgentToAnywhereConfigOutputReference | VertexAiReasoningEngineSpecDeploymentSpecAgentGatewayConfigAgentToAnywhereConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    agent_gateway: {
      value: cdktn.stringToHclTerraform(struct!.agentGateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiReasoningEngineSpecDeploymentSpecAgentGatewayConfigAgentToAnywhereConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiReasoningEngineSpecDeploymentSpecAgentGatewayConfigAgentToAnywhereConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agentGateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentGateway = this._agentGateway;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiReasoningEngineSpecDeploymentSpecAgentGatewayConfigAgentToAnywhereConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._agentGateway = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._agentGateway = value.agentGateway;
    }
  }

  // agent_gateway - computed: false, optional: false, required: true
  private _agentGateway?: string; 
  public get agentGateway() {
    return this.getStringAttribute('agent_gateway');
  }
  public set agentGateway(value: string) {
    this._agentGateway = value;
  }
  // Temporarily expose input value. Use with caution.
  public get agentGatewayInput() {
    return this._agentGateway;
  }
}
export interface VertexAiReasoningEngineSpecDeploymentSpecAgentGatewayConfigClientToAgentConfig {
  /**
  * Required. The resource name of the Agent Gateway to use for inbound traffic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#agent_gateway VertexAiReasoningEngine#agent_gateway}
  */
  readonly agentGateway: string;
}

export function vertexAiReasoningEngineSpecDeploymentSpecAgentGatewayConfigClientToAgentConfigToTerraform(struct?: VertexAiReasoningEngineSpecDeploymentSpecAgentGatewayConfigClientToAgentConfigOutputReference | VertexAiReasoningEngineSpecDeploymentSpecAgentGatewayConfigClientToAgentConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    agent_gateway: cdktn.stringToTerraform(struct!.agentGateway),
  }
}


export function vertexAiReasoningEngineSpecDeploymentSpecAgentGatewayConfigClientToAgentConfigToHclTerraform(struct?: VertexAiReasoningEngineSpecDeploymentSpecAgentGatewayConfigClientToAgentConfigOutputReference | VertexAiReasoningEngineSpecDeploymentSpecAgentGatewayConfigClientToAgentConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    agent_gateway: {
      value: cdktn.stringToHclTerraform(struct!.agentGateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiReasoningEngineSpecDeploymentSpecAgentGatewayConfigClientToAgentConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiReasoningEngineSpecDeploymentSpecAgentGatewayConfigClientToAgentConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agentGateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentGateway = this._agentGateway;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiReasoningEngineSpecDeploymentSpecAgentGatewayConfigClientToAgentConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._agentGateway = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._agentGateway = value.agentGateway;
    }
  }

  // agent_gateway - computed: false, optional: false, required: true
  private _agentGateway?: string; 
  public get agentGateway() {
    return this.getStringAttribute('agent_gateway');
  }
  public set agentGateway(value: string) {
    this._agentGateway = value;
  }
  // Temporarily expose input value. Use with caution.
  public get agentGatewayInput() {
    return this._agentGateway;
  }
}
export interface VertexAiReasoningEngineSpecDeploymentSpecAgentGatewayConfig {
  /**
  * agent_to_anywhere_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#agent_to_anywhere_config VertexAiReasoningEngine#agent_to_anywhere_config}
  */
  readonly agentToAnywhereConfig?: VertexAiReasoningEngineSpecDeploymentSpecAgentGatewayConfigAgentToAnywhereConfig;
  /**
  * client_to_agent_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#client_to_agent_config VertexAiReasoningEngine#client_to_agent_config}
  */
  readonly clientToAgentConfig?: VertexAiReasoningEngineSpecDeploymentSpecAgentGatewayConfigClientToAgentConfig;
}

export function vertexAiReasoningEngineSpecDeploymentSpecAgentGatewayConfigToTerraform(struct?: VertexAiReasoningEngineSpecDeploymentSpecAgentGatewayConfigOutputReference | VertexAiReasoningEngineSpecDeploymentSpecAgentGatewayConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    agent_to_anywhere_config: vertexAiReasoningEngineSpecDeploymentSpecAgentGatewayConfigAgentToAnywhereConfigToTerraform(struct!.agentToAnywhereConfig),
    client_to_agent_config: vertexAiReasoningEngineSpecDeploymentSpecAgentGatewayConfigClientToAgentConfigToTerraform(struct!.clientToAgentConfig),
  }
}


export function vertexAiReasoningEngineSpecDeploymentSpecAgentGatewayConfigToHclTerraform(struct?: VertexAiReasoningEngineSpecDeploymentSpecAgentGatewayConfigOutputReference | VertexAiReasoningEngineSpecDeploymentSpecAgentGatewayConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    agent_to_anywhere_config: {
      value: vertexAiReasoningEngineSpecDeploymentSpecAgentGatewayConfigAgentToAnywhereConfigToHclTerraform(struct!.agentToAnywhereConfig),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiReasoningEngineSpecDeploymentSpecAgentGatewayConfigAgentToAnywhereConfigList",
    },
    client_to_agent_config: {
      value: vertexAiReasoningEngineSpecDeploymentSpecAgentGatewayConfigClientToAgentConfigToHclTerraform(struct!.clientToAgentConfig),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiReasoningEngineSpecDeploymentSpecAgentGatewayConfigClientToAgentConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiReasoningEngineSpecDeploymentSpecAgentGatewayConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiReasoningEngineSpecDeploymentSpecAgentGatewayConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agentToAnywhereConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentToAnywhereConfig = this._agentToAnywhereConfig?.internalValue;
    }
    if (this._clientToAgentConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientToAgentConfig = this._clientToAgentConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiReasoningEngineSpecDeploymentSpecAgentGatewayConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._agentToAnywhereConfig.internalValue = undefined;
      this._clientToAgentConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._agentToAnywhereConfig.internalValue = value.agentToAnywhereConfig;
      this._clientToAgentConfig.internalValue = value.clientToAgentConfig;
    }
  }

  // agent_to_anywhere_config - computed: false, optional: true, required: false
  private _agentToAnywhereConfig = new VertexAiReasoningEngineSpecDeploymentSpecAgentGatewayConfigAgentToAnywhereConfigOutputReference(this, "agent_to_anywhere_config");
  public get agentToAnywhereConfig() {
    return this._agentToAnywhereConfig;
  }
  public putAgentToAnywhereConfig(value: VertexAiReasoningEngineSpecDeploymentSpecAgentGatewayConfigAgentToAnywhereConfig) {
    this._agentToAnywhereConfig.internalValue = value;
  }
  public resetAgentToAnywhereConfig() {
    this._agentToAnywhereConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentToAnywhereConfigInput() {
    return this._agentToAnywhereConfig.internalValue;
  }

  // client_to_agent_config - computed: false, optional: true, required: false
  private _clientToAgentConfig = new VertexAiReasoningEngineSpecDeploymentSpecAgentGatewayConfigClientToAgentConfigOutputReference(this, "client_to_agent_config");
  public get clientToAgentConfig() {
    return this._clientToAgentConfig;
  }
  public putClientToAgentConfig(value: VertexAiReasoningEngineSpecDeploymentSpecAgentGatewayConfigClientToAgentConfig) {
    this._clientToAgentConfig.internalValue = value;
  }
  public resetClientToAgentConfig() {
    this._clientToAgentConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientToAgentConfigInput() {
    return this._clientToAgentConfig.internalValue;
  }
}
export interface VertexAiReasoningEngineSpecDeploymentSpecEnv {
  /**
  * The name of the environment variable. Must be a valid
  * C identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#name VertexAiReasoningEngine#name}
  */
  readonly name: string;
  /**
  * Variables that reference a $(VAR_NAME) are expanded using
  * the previous defined environment variables in the container
  * and any service environment variables. If a variable cannot
  * be resolved, the reference in the input string will be
  * unchanged. The $(VAR_NAME) syntax can be escaped with a
  * double $$, ie: $$(VAR_NAME). Escaped references will never
  * be expanded, regardless of whether the variable exists
  * or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#value VertexAiReasoningEngine#value}
  */
  readonly value: string;
}

export function vertexAiReasoningEngineSpecDeploymentSpecEnvToTerraform(struct?: VertexAiReasoningEngineSpecDeploymentSpecEnv | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function vertexAiReasoningEngineSpecDeploymentSpecEnvToHclTerraform(struct?: VertexAiReasoningEngineSpecDeploymentSpecEnv | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): VertexAiReasoningEngineSpecDeploymentSpecEnv | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiReasoningEngineSpecDeploymentSpecEnv | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class VertexAiReasoningEngineSpecDeploymentSpecEnvList extends cdktn.ComplexList {
  public internalValue? : VertexAiReasoningEngineSpecDeploymentSpecEnv[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference {
    return new VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs {
  /**
  * Required. The DNS name suffix of the zone being peered
  * to, e.g., "my-internal-domain.corp.".
  * Must end with a dot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#domain VertexAiReasoningEngine#domain}
  */
  readonly domain: string;
  /**
  * Required. The VPC network name in the targetProject
  * where the DNS zone specified by 'domain' is visible.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#target_network VertexAiReasoningEngine#target_network}
  */
  readonly targetNetwork: string;
  /**
  * Required. The project id hosting the Cloud DNS managed
  * zone that contains the 'domain'.
  * The Vertex AI service Agent requires the dns.peer role
  * on this project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#target_project VertexAiReasoningEngine#target_project}
  */
  readonly targetProject: string;
}

export function vertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsToTerraform(struct?: VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    domain: cdktn.stringToTerraform(struct!.domain),
    target_network: cdktn.stringToTerraform(struct!.targetNetwork),
    target_project: cdktn.stringToTerraform(struct!.targetProject),
  }
}


export function vertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsToHclTerraform(struct?: VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    domain: {
      value: cdktn.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_network: {
      value: cdktn.stringToHclTerraform(struct!.targetNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_project: {
      value: cdktn.stringToHclTerraform(struct!.targetProject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._targetNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetNetwork = this._targetNetwork;
    }
    if (this._targetProject !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetProject = this._targetProject;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domain = undefined;
      this._targetNetwork = undefined;
      this._targetProject = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domain = value.domain;
      this._targetNetwork = value.targetNetwork;
      this._targetProject = value.targetProject;
    }
  }

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // target_network - computed: false, optional: false, required: true
  private _targetNetwork?: string; 
  public get targetNetwork() {
    return this.getStringAttribute('target_network');
  }
  public set targetNetwork(value: string) {
    this._targetNetwork = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetNetworkInput() {
    return this._targetNetwork;
  }

  // target_project - computed: false, optional: false, required: true
  private _targetProject?: string; 
  public get targetProject() {
    return this.getStringAttribute('target_project');
  }
  public set targetProject(value: string) {
    this._targetProject = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetProjectInput() {
    return this._targetProject;
  }
}

export class VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList extends cdktn.ComplexList {
  public internalValue? : VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference {
    return new VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig {
  /**
  * Optional. The name of the Compute Engine network attachment
  * to attach to the resource within the region and user project.
  * To specify this field, you must have already created a network attachment.
  * This field is only used for resources using PSC-Interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#network_attachment VertexAiReasoningEngine#network_attachment}
  */
  readonly networkAttachment?: string;
  /**
  * dns_peering_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#dns_peering_configs VertexAiReasoningEngine#dns_peering_configs}
  */
  readonly dnsPeeringConfigs?: VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs[] | cdktn.IResolvable;
}

export function vertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigToTerraform(struct?: VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference | VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    network_attachment: cdktn.stringToTerraform(struct!.networkAttachment),
    dns_peering_configs: cdktn.listMapper(vertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsToTerraform, true)(struct!.dnsPeeringConfigs),
  }
}


export function vertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigToHclTerraform(struct?: VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference | VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    network_attachment: {
      value: cdktn.stringToHclTerraform(struct!.networkAttachment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_peering_configs: {
      value: cdktn.listMapperHcl(vertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsToHclTerraform, true)(struct!.dnsPeeringConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkAttachment !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkAttachment = this._networkAttachment;
    }
    if (this._dnsPeeringConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsPeeringConfigs = this._dnsPeeringConfigs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._networkAttachment = undefined;
      this._dnsPeeringConfigs.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._networkAttachment = value.networkAttachment;
      this._dnsPeeringConfigs.internalValue = value.dnsPeeringConfigs;
    }
  }

  // network_attachment - computed: false, optional: true, required: false
  private _networkAttachment?: string; 
  public get networkAttachment() {
    return this.getStringAttribute('network_attachment');
  }
  public set networkAttachment(value: string) {
    this._networkAttachment = value;
  }
  public resetNetworkAttachment() {
    this._networkAttachment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkAttachmentInput() {
    return this._networkAttachment;
  }

  // dns_peering_configs - computed: false, optional: true, required: false
  private _dnsPeeringConfigs = new VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList(this, "dns_peering_configs", false);
  public get dnsPeeringConfigs() {
    return this._dnsPeeringConfigs;
  }
  public putDnsPeeringConfigs(value: VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs[] | cdktn.IResolvable) {
    this._dnsPeeringConfigs.internalValue = value;
  }
  public resetDnsPeeringConfigs() {
    this._dnsPeeringConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsPeeringConfigsInput() {
    return this._dnsPeeringConfigs.internalValue;
  }
}
export interface VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef {
  /**
  * The name of the secret in Cloud Secret Manager.
  * Format: {secret_name}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#secret VertexAiReasoningEngine#secret}
  */
  readonly secret: string;
  /**
  * The Cloud Secret Manager secret version. Can be 'latest'
  * for the latest version, an integer for a specific
  * version, or a version alias.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#version VertexAiReasoningEngine#version}
  */
  readonly version?: string;
}

export function vertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefToTerraform(struct?: VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference | VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    secret: cdktn.stringToTerraform(struct!.secret),
    version: cdktn.stringToTerraform(struct!.version),
  }
}


export function vertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefToHclTerraform(struct?: VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference | VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    secret: {
      value: cdktn.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktn.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secret = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secret = value.secret;
      this._version = value.version;
    }
  }

  // secret - computed: false, optional: false, required: true
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface VertexAiReasoningEngineSpecDeploymentSpecSecretEnv {
  /**
  * The name of the environment variable. Must be a valid C
  * identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#name VertexAiReasoningEngine#name}
  */
  readonly name: string;
  /**
  * secret_ref block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#secret_ref VertexAiReasoningEngine#secret_ref}
  */
  readonly secretRef: VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef;
}

export function vertexAiReasoningEngineSpecDeploymentSpecSecretEnvToTerraform(struct?: VertexAiReasoningEngineSpecDeploymentSpecSecretEnv | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    secret_ref: vertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefToTerraform(struct!.secretRef),
  }
}


export function vertexAiReasoningEngineSpecDeploymentSpecSecretEnvToHclTerraform(struct?: VertexAiReasoningEngineSpecDeploymentSpecSecretEnv | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_ref: {
      value: vertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): VertexAiReasoningEngineSpecDeploymentSpecSecretEnv | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._secretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretRef = this._secretRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiReasoningEngineSpecDeploymentSpecSecretEnv | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._secretRef.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._secretRef.internalValue = value.secretRef;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // secret_ref - computed: false, optional: false, required: true
  private _secretRef = new VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef) {
    this._secretRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefInput() {
    return this._secretRef.internalValue;
  }
}

export class VertexAiReasoningEngineSpecDeploymentSpecSecretEnvList extends cdktn.ComplexList {
  public internalValue? : VertexAiReasoningEngineSpecDeploymentSpecSecretEnv[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference {
    return new VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VertexAiReasoningEngineSpecDeploymentSpec {
  /**
  * Optional. Concurrency for each container and agent server.
  * Recommended value: 2 * cpu + 1. Defaults to 9.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#container_concurrency VertexAiReasoningEngine#container_concurrency}
  */
  readonly containerConcurrency?: number;
  /**
  * Optional. The maximum number of application instances that can be
  * launched to handle increased traffic. Defaults to 100.
  * Range: [1, 1000]. If VPC-SC or PSC-I is enabled, the acceptable
  * range is [1, 100].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#max_instances VertexAiReasoningEngine#max_instances}
  */
  readonly maxInstances?: number;
  /**
  * Optional. The minimum number of application instances that will be
  * kept running at all times. Defaults to 1. Range: [0, 10].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#min_instances VertexAiReasoningEngine#min_instances}
  */
  readonly minInstances?: number;
  /**
  * Optional. Resource limits for each container.
  * Only 'cpu' and 'memory' keys are supported.
  * 
  * Defaults to {"cpu": "4", "memory": "4Gi"}.
  * 
  * The only supported values for CPU are '1', '2', '4', '6' and '8'.
  * For more information, go to
  * https://cloud.google.com/run/docs/configuring/cpu.
  * 
  * The only supported values for memory are '1Gi', '2Gi', ... '32 Gi'.
  * For more information, go to
  * https://cloud.google.com/run/docs/configuring/memory-limits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#resource_limits VertexAiReasoningEngine#resource_limits}
  */
  readonly resourceLimits?: { [key: string]: string };
  /**
  * agent_gateway_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#agent_gateway_config VertexAiReasoningEngine#agent_gateway_config}
  */
  readonly agentGatewayConfig?: VertexAiReasoningEngineSpecDeploymentSpecAgentGatewayConfig;
  /**
  * env block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#env VertexAiReasoningEngine#env}
  */
  readonly env?: VertexAiReasoningEngineSpecDeploymentSpecEnv[] | cdktn.IResolvable;
  /**
  * psc_interface_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#psc_interface_config VertexAiReasoningEngine#psc_interface_config}
  */
  readonly pscInterfaceConfig?: VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig;
  /**
  * secret_env block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#secret_env VertexAiReasoningEngine#secret_env}
  */
  readonly secretEnv?: VertexAiReasoningEngineSpecDeploymentSpecSecretEnv[] | cdktn.IResolvable;
}

export function vertexAiReasoningEngineSpecDeploymentSpecToTerraform(struct?: VertexAiReasoningEngineSpecDeploymentSpecOutputReference | VertexAiReasoningEngineSpecDeploymentSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    container_concurrency: cdktn.numberToTerraform(struct!.containerConcurrency),
    max_instances: cdktn.numberToTerraform(struct!.maxInstances),
    min_instances: cdktn.numberToTerraform(struct!.minInstances),
    resource_limits: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.resourceLimits),
    agent_gateway_config: vertexAiReasoningEngineSpecDeploymentSpecAgentGatewayConfigToTerraform(struct!.agentGatewayConfig),
    env: cdktn.listMapper(vertexAiReasoningEngineSpecDeploymentSpecEnvToTerraform, true)(struct!.env),
    psc_interface_config: vertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigToTerraform(struct!.pscInterfaceConfig),
    secret_env: cdktn.listMapper(vertexAiReasoningEngineSpecDeploymentSpecSecretEnvToTerraform, true)(struct!.secretEnv),
  }
}


export function vertexAiReasoningEngineSpecDeploymentSpecToHclTerraform(struct?: VertexAiReasoningEngineSpecDeploymentSpecOutputReference | VertexAiReasoningEngineSpecDeploymentSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    container_concurrency: {
      value: cdktn.numberToHclTerraform(struct!.containerConcurrency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_instances: {
      value: cdktn.numberToHclTerraform(struct!.maxInstances),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_instances: {
      value: cdktn.numberToHclTerraform(struct!.minInstances),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resource_limits: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.resourceLimits),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    agent_gateway_config: {
      value: vertexAiReasoningEngineSpecDeploymentSpecAgentGatewayConfigToHclTerraform(struct!.agentGatewayConfig),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiReasoningEngineSpecDeploymentSpecAgentGatewayConfigList",
    },
    env: {
      value: cdktn.listMapperHcl(vertexAiReasoningEngineSpecDeploymentSpecEnvToHclTerraform, true)(struct!.env),
      isBlock: true,
      type: "set",
      storageClassType: "VertexAiReasoningEngineSpecDeploymentSpecEnvList",
    },
    psc_interface_config: {
      value: vertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigToHclTerraform(struct!.pscInterfaceConfig),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigList",
    },
    secret_env: {
      value: cdktn.listMapperHcl(vertexAiReasoningEngineSpecDeploymentSpecSecretEnvToHclTerraform, true)(struct!.secretEnv),
      isBlock: true,
      type: "set",
      storageClassType: "VertexAiReasoningEngineSpecDeploymentSpecSecretEnvList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiReasoningEngineSpecDeploymentSpecOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiReasoningEngineSpecDeploymentSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerConcurrency !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerConcurrency = this._containerConcurrency;
    }
    if (this._maxInstances !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxInstances = this._maxInstances;
    }
    if (this._minInstances !== undefined) {
      hasAnyValues = true;
      internalValueResult.minInstances = this._minInstances;
    }
    if (this._resourceLimits !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceLimits = this._resourceLimits;
    }
    if (this._agentGatewayConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentGatewayConfig = this._agentGatewayConfig?.internalValue;
    }
    if (this._env?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env?.internalValue;
    }
    if (this._pscInterfaceConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pscInterfaceConfig = this._pscInterfaceConfig?.internalValue;
    }
    if (this._secretEnv?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretEnv = this._secretEnv?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiReasoningEngineSpecDeploymentSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._containerConcurrency = undefined;
      this._maxInstances = undefined;
      this._minInstances = undefined;
      this._resourceLimits = undefined;
      this._agentGatewayConfig.internalValue = undefined;
      this._env.internalValue = undefined;
      this._pscInterfaceConfig.internalValue = undefined;
      this._secretEnv.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._containerConcurrency = value.containerConcurrency;
      this._maxInstances = value.maxInstances;
      this._minInstances = value.minInstances;
      this._resourceLimits = value.resourceLimits;
      this._agentGatewayConfig.internalValue = value.agentGatewayConfig;
      this._env.internalValue = value.env;
      this._pscInterfaceConfig.internalValue = value.pscInterfaceConfig;
      this._secretEnv.internalValue = value.secretEnv;
    }
  }

  // container_concurrency - computed: true, optional: true, required: false
  private _containerConcurrency?: number; 
  public get containerConcurrency() {
    return this.getNumberAttribute('container_concurrency');
  }
  public set containerConcurrency(value: number) {
    this._containerConcurrency = value;
  }
  public resetContainerConcurrency() {
    this._containerConcurrency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerConcurrencyInput() {
    return this._containerConcurrency;
  }

  // max_instances - computed: true, optional: true, required: false
  private _maxInstances?: number; 
  public get maxInstances() {
    return this.getNumberAttribute('max_instances');
  }
  public set maxInstances(value: number) {
    this._maxInstances = value;
  }
  public resetMaxInstances() {
    this._maxInstances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInstancesInput() {
    return this._maxInstances;
  }

  // min_instances - computed: true, optional: true, required: false
  private _minInstances?: number; 
  public get minInstances() {
    return this.getNumberAttribute('min_instances');
  }
  public set minInstances(value: number) {
    this._minInstances = value;
  }
  public resetMinInstances() {
    this._minInstances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInstancesInput() {
    return this._minInstances;
  }

  // resource_limits - computed: true, optional: true, required: false
  private _resourceLimits?: { [key: string]: string }; 
  public get resourceLimits() {
    return this.getStringMapAttribute('resource_limits');
  }
  public set resourceLimits(value: { [key: string]: string }) {
    this._resourceLimits = value;
  }
  public resetResourceLimits() {
    this._resourceLimits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceLimitsInput() {
    return this._resourceLimits;
  }

  // agent_gateway_config - computed: false, optional: true, required: false
  private _agentGatewayConfig = new VertexAiReasoningEngineSpecDeploymentSpecAgentGatewayConfigOutputReference(this, "agent_gateway_config");
  public get agentGatewayConfig() {
    return this._agentGatewayConfig;
  }
  public putAgentGatewayConfig(value: VertexAiReasoningEngineSpecDeploymentSpecAgentGatewayConfig) {
    this._agentGatewayConfig.internalValue = value;
  }
  public resetAgentGatewayConfig() {
    this._agentGatewayConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentGatewayConfigInput() {
    return this._agentGatewayConfig.internalValue;
  }

  // env - computed: false, optional: true, required: false
  private _env = new VertexAiReasoningEngineSpecDeploymentSpecEnvList(this, "env", true);
  public get env() {
    return this._env;
  }
  public putEnv(value: VertexAiReasoningEngineSpecDeploymentSpecEnv[] | cdktn.IResolvable) {
    this._env.internalValue = value;
  }
  public resetEnv() {
    this._env.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env.internalValue;
  }

  // psc_interface_config - computed: false, optional: true, required: false
  private _pscInterfaceConfig = new VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference(this, "psc_interface_config");
  public get pscInterfaceConfig() {
    return this._pscInterfaceConfig;
  }
  public putPscInterfaceConfig(value: VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig) {
    this._pscInterfaceConfig.internalValue = value;
  }
  public resetPscInterfaceConfig() {
    this._pscInterfaceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pscInterfaceConfigInput() {
    return this._pscInterfaceConfig.internalValue;
  }

  // secret_env - computed: false, optional: true, required: false
  private _secretEnv = new VertexAiReasoningEngineSpecDeploymentSpecSecretEnvList(this, "secret_env", true);
  public get secretEnv() {
    return this._secretEnv;
  }
  public putSecretEnv(value: VertexAiReasoningEngineSpecDeploymentSpecSecretEnv[] | cdktn.IResolvable) {
    this._secretEnv.internalValue = value;
  }
  public resetSecretEnv() {
    this._secretEnv.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretEnvInput() {
    return this._secretEnv.internalValue;
  }
}
export interface VertexAiReasoningEngineSpecPackageSpec {
  /**
  * Optional. The Cloud Storage URI of the dependency files in tar.gz
  * format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#dependency_files_gcs_uri VertexAiReasoningEngine#dependency_files_gcs_uri}
  */
  readonly dependencyFilesGcsUri?: string;
  /**
  * Optional. The Cloud Storage URI of the pickled python object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#pickle_object_gcs_uri VertexAiReasoningEngine#pickle_object_gcs_uri}
  */
  readonly pickleObjectGcsUri?: string;
  /**
  * Optional. The Python version. Currently support 3.8, 3.9, 3.10,
  * 3.11, 3.12, 3.13. If not specified, default value is 3.10.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#python_version VertexAiReasoningEngine#python_version}
  */
  readonly pythonVersion?: string;
  /**
  * Optional. The Cloud Storage URI of the requirements.txtfile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#requirements_gcs_uri VertexAiReasoningEngine#requirements_gcs_uri}
  */
  readonly requirementsGcsUri?: string;
}

export function vertexAiReasoningEngineSpecPackageSpecToTerraform(struct?: VertexAiReasoningEngineSpecPackageSpecOutputReference | VertexAiReasoningEngineSpecPackageSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dependency_files_gcs_uri: cdktn.stringToTerraform(struct!.dependencyFilesGcsUri),
    pickle_object_gcs_uri: cdktn.stringToTerraform(struct!.pickleObjectGcsUri),
    python_version: cdktn.stringToTerraform(struct!.pythonVersion),
    requirements_gcs_uri: cdktn.stringToTerraform(struct!.requirementsGcsUri),
  }
}


export function vertexAiReasoningEngineSpecPackageSpecToHclTerraform(struct?: VertexAiReasoningEngineSpecPackageSpecOutputReference | VertexAiReasoningEngineSpecPackageSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dependency_files_gcs_uri: {
      value: cdktn.stringToHclTerraform(struct!.dependencyFilesGcsUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pickle_object_gcs_uri: {
      value: cdktn.stringToHclTerraform(struct!.pickleObjectGcsUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    python_version: {
      value: cdktn.stringToHclTerraform(struct!.pythonVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    requirements_gcs_uri: {
      value: cdktn.stringToHclTerraform(struct!.requirementsGcsUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiReasoningEngineSpecPackageSpecOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiReasoningEngineSpecPackageSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dependencyFilesGcsUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.dependencyFilesGcsUri = this._dependencyFilesGcsUri;
    }
    if (this._pickleObjectGcsUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.pickleObjectGcsUri = this._pickleObjectGcsUri;
    }
    if (this._pythonVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.pythonVersion = this._pythonVersion;
    }
    if (this._requirementsGcsUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.requirementsGcsUri = this._requirementsGcsUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiReasoningEngineSpecPackageSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dependencyFilesGcsUri = undefined;
      this._pickleObjectGcsUri = undefined;
      this._pythonVersion = undefined;
      this._requirementsGcsUri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dependencyFilesGcsUri = value.dependencyFilesGcsUri;
      this._pickleObjectGcsUri = value.pickleObjectGcsUri;
      this._pythonVersion = value.pythonVersion;
      this._requirementsGcsUri = value.requirementsGcsUri;
    }
  }

  // dependency_files_gcs_uri - computed: false, optional: true, required: false
  private _dependencyFilesGcsUri?: string; 
  public get dependencyFilesGcsUri() {
    return this.getStringAttribute('dependency_files_gcs_uri');
  }
  public set dependencyFilesGcsUri(value: string) {
    this._dependencyFilesGcsUri = value;
  }
  public resetDependencyFilesGcsUri() {
    this._dependencyFilesGcsUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dependencyFilesGcsUriInput() {
    return this._dependencyFilesGcsUri;
  }

  // pickle_object_gcs_uri - computed: false, optional: true, required: false
  private _pickleObjectGcsUri?: string; 
  public get pickleObjectGcsUri() {
    return this.getStringAttribute('pickle_object_gcs_uri');
  }
  public set pickleObjectGcsUri(value: string) {
    this._pickleObjectGcsUri = value;
  }
  public resetPickleObjectGcsUri() {
    this._pickleObjectGcsUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pickleObjectGcsUriInput() {
    return this._pickleObjectGcsUri;
  }

  // python_version - computed: false, optional: true, required: false
  private _pythonVersion?: string; 
  public get pythonVersion() {
    return this.getStringAttribute('python_version');
  }
  public set pythonVersion(value: string) {
    this._pythonVersion = value;
  }
  public resetPythonVersion() {
    this._pythonVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pythonVersionInput() {
    return this._pythonVersion;
  }

  // requirements_gcs_uri - computed: false, optional: true, required: false
  private _requirementsGcsUri?: string; 
  public get requirementsGcsUri() {
    return this.getStringAttribute('requirements_gcs_uri');
  }
  public set requirementsGcsUri(value: string) {
    this._requirementsGcsUri = value;
  }
  public resetRequirementsGcsUri() {
    this._requirementsGcsUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requirementsGcsUriInput() {
    return this._requirementsGcsUri;
  }
}
export interface VertexAiReasoningEngineSpecSourceCodeSpecAgentConfigSourceAdkConfig {
  /**
  * Required. The value of the ADK config in JSON format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#json_config VertexAiReasoningEngine#json_config}
  */
  readonly jsonConfig: string;
}

export function vertexAiReasoningEngineSpecSourceCodeSpecAgentConfigSourceAdkConfigToTerraform(struct?: VertexAiReasoningEngineSpecSourceCodeSpecAgentConfigSourceAdkConfigOutputReference | VertexAiReasoningEngineSpecSourceCodeSpecAgentConfigSourceAdkConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    json_config: cdktn.stringToTerraform(struct!.jsonConfig),
  }
}


export function vertexAiReasoningEngineSpecSourceCodeSpecAgentConfigSourceAdkConfigToHclTerraform(struct?: VertexAiReasoningEngineSpecSourceCodeSpecAgentConfigSourceAdkConfigOutputReference | VertexAiReasoningEngineSpecSourceCodeSpecAgentConfigSourceAdkConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    json_config: {
      value: cdktn.stringToHclTerraform(struct!.jsonConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiReasoningEngineSpecSourceCodeSpecAgentConfigSourceAdkConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiReasoningEngineSpecSourceCodeSpecAgentConfigSourceAdkConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jsonConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonConfig = this._jsonConfig;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiReasoningEngineSpecSourceCodeSpecAgentConfigSourceAdkConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._jsonConfig = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._jsonConfig = value.jsonConfig;
    }
  }

  // json_config - computed: false, optional: false, required: true
  private _jsonConfig?: string; 
  public get jsonConfig() {
    return this.getStringAttribute('json_config');
  }
  public set jsonConfig(value: string) {
    this._jsonConfig = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonConfigInput() {
    return this._jsonConfig;
  }
}
export interface VertexAiReasoningEngineSpecSourceCodeSpecAgentConfigSourceInlineSource {
  /**
  * Required. Input only. The application source code archive, provided as a compressed tarball (.tar.gz) file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#source_archive VertexAiReasoningEngine#source_archive}
  */
  readonly sourceArchive: string;
}

export function vertexAiReasoningEngineSpecSourceCodeSpecAgentConfigSourceInlineSourceToTerraform(struct?: VertexAiReasoningEngineSpecSourceCodeSpecAgentConfigSourceInlineSourceOutputReference | VertexAiReasoningEngineSpecSourceCodeSpecAgentConfigSourceInlineSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    source_archive: cdktn.stringToTerraform(struct!.sourceArchive),
  }
}


export function vertexAiReasoningEngineSpecSourceCodeSpecAgentConfigSourceInlineSourceToHclTerraform(struct?: VertexAiReasoningEngineSpecSourceCodeSpecAgentConfigSourceInlineSourceOutputReference | VertexAiReasoningEngineSpecSourceCodeSpecAgentConfigSourceInlineSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    source_archive: {
      value: cdktn.stringToHclTerraform(struct!.sourceArchive),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiReasoningEngineSpecSourceCodeSpecAgentConfigSourceInlineSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiReasoningEngineSpecSourceCodeSpecAgentConfigSourceInlineSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourceArchive !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceArchive = this._sourceArchive;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiReasoningEngineSpecSourceCodeSpecAgentConfigSourceInlineSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sourceArchive = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sourceArchive = value.sourceArchive;
    }
  }

  // source_archive - computed: false, optional: false, required: true
  private _sourceArchive?: string; 
  public get sourceArchive() {
    return this.getStringAttribute('source_archive');
  }
  public set sourceArchive(value: string) {
    this._sourceArchive = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceArchiveInput() {
    return this._sourceArchive;
  }
}
export interface VertexAiReasoningEngineSpecSourceCodeSpecAgentConfigSource {
  /**
  * adk_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#adk_config VertexAiReasoningEngine#adk_config}
  */
  readonly adkConfig?: VertexAiReasoningEngineSpecSourceCodeSpecAgentConfigSourceAdkConfig;
  /**
  * inline_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#inline_source VertexAiReasoningEngine#inline_source}
  */
  readonly inlineSource?: VertexAiReasoningEngineSpecSourceCodeSpecAgentConfigSourceInlineSource;
}

export function vertexAiReasoningEngineSpecSourceCodeSpecAgentConfigSourceToTerraform(struct?: VertexAiReasoningEngineSpecSourceCodeSpecAgentConfigSourceOutputReference | VertexAiReasoningEngineSpecSourceCodeSpecAgentConfigSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    adk_config: vertexAiReasoningEngineSpecSourceCodeSpecAgentConfigSourceAdkConfigToTerraform(struct!.adkConfig),
    inline_source: vertexAiReasoningEngineSpecSourceCodeSpecAgentConfigSourceInlineSourceToTerraform(struct!.inlineSource),
  }
}


export function vertexAiReasoningEngineSpecSourceCodeSpecAgentConfigSourceToHclTerraform(struct?: VertexAiReasoningEngineSpecSourceCodeSpecAgentConfigSourceOutputReference | VertexAiReasoningEngineSpecSourceCodeSpecAgentConfigSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    adk_config: {
      value: vertexAiReasoningEngineSpecSourceCodeSpecAgentConfigSourceAdkConfigToHclTerraform(struct!.adkConfig),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiReasoningEngineSpecSourceCodeSpecAgentConfigSourceAdkConfigList",
    },
    inline_source: {
      value: vertexAiReasoningEngineSpecSourceCodeSpecAgentConfigSourceInlineSourceToHclTerraform(struct!.inlineSource),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiReasoningEngineSpecSourceCodeSpecAgentConfigSourceInlineSourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiReasoningEngineSpecSourceCodeSpecAgentConfigSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiReasoningEngineSpecSourceCodeSpecAgentConfigSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adkConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.adkConfig = this._adkConfig?.internalValue;
    }
    if (this._inlineSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inlineSource = this._inlineSource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiReasoningEngineSpecSourceCodeSpecAgentConfigSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adkConfig.internalValue = undefined;
      this._inlineSource.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adkConfig.internalValue = value.adkConfig;
      this._inlineSource.internalValue = value.inlineSource;
    }
  }

  // adk_config - computed: false, optional: true, required: false
  private _adkConfig = new VertexAiReasoningEngineSpecSourceCodeSpecAgentConfigSourceAdkConfigOutputReference(this, "adk_config");
  public get adkConfig() {
    return this._adkConfig;
  }
  public putAdkConfig(value: VertexAiReasoningEngineSpecSourceCodeSpecAgentConfigSourceAdkConfig) {
    this._adkConfig.internalValue = value;
  }
  public resetAdkConfig() {
    this._adkConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adkConfigInput() {
    return this._adkConfig.internalValue;
  }

  // inline_source - computed: false, optional: true, required: false
  private _inlineSource = new VertexAiReasoningEngineSpecSourceCodeSpecAgentConfigSourceInlineSourceOutputReference(this, "inline_source");
  public get inlineSource() {
    return this._inlineSource;
  }
  public putInlineSource(value: VertexAiReasoningEngineSpecSourceCodeSpecAgentConfigSourceInlineSource) {
    this._inlineSource.internalValue = value;
  }
  public resetInlineSource() {
    this._inlineSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inlineSourceInput() {
    return this._inlineSource.internalValue;
  }
}
export interface VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig {
  /**
  * Directory, relative to the source root, in which to run the build.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#dir VertexAiReasoningEngine#dir}
  */
  readonly dir: string;
  /**
  * The Developer Connect Git repository link, formatted as projects/* /locations/* /connections/* /gitRepositoryLink/*.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#git_repository_link VertexAiReasoningEngine#git_repository_link}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly gitRepositoryLink: string;
  /**
  * The revision to fetch from the Git repository such as a branch, a tag, a commit SHA, or any Git ref.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#revision VertexAiReasoningEngine#revision}
  */
  readonly revision: string;
}

export function vertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigToTerraform(struct?: VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference | VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dir: cdktn.stringToTerraform(struct!.dir),
    git_repository_link: cdktn.stringToTerraform(struct!.gitRepositoryLink),
    revision: cdktn.stringToTerraform(struct!.revision),
  }
}


export function vertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigToHclTerraform(struct?: VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference | VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dir: {
      value: cdktn.stringToHclTerraform(struct!.dir),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    git_repository_link: {
      value: cdktn.stringToHclTerraform(struct!.gitRepositoryLink),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    revision: {
      value: cdktn.stringToHclTerraform(struct!.revision),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dir !== undefined) {
      hasAnyValues = true;
      internalValueResult.dir = this._dir;
    }
    if (this._gitRepositoryLink !== undefined) {
      hasAnyValues = true;
      internalValueResult.gitRepositoryLink = this._gitRepositoryLink;
    }
    if (this._revision !== undefined) {
      hasAnyValues = true;
      internalValueResult.revision = this._revision;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dir = undefined;
      this._gitRepositoryLink = undefined;
      this._revision = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dir = value.dir;
      this._gitRepositoryLink = value.gitRepositoryLink;
      this._revision = value.revision;
    }
  }

  // dir - computed: false, optional: false, required: true
  private _dir?: string; 
  public get dir() {
    return this.getStringAttribute('dir');
  }
  public set dir(value: string) {
    this._dir = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dirInput() {
    return this._dir;
  }

  // git_repository_link - computed: false, optional: false, required: true
  private _gitRepositoryLink?: string; 
  public get gitRepositoryLink() {
    return this.getStringAttribute('git_repository_link');
  }
  public set gitRepositoryLink(value: string) {
    this._gitRepositoryLink = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gitRepositoryLinkInput() {
    return this._gitRepositoryLink;
  }

  // revision - computed: false, optional: false, required: true
  private _revision?: string; 
  public get revision() {
    return this.getStringAttribute('revision');
  }
  public set revision(value: string) {
    this._revision = value;
  }
  // Temporarily expose input value. Use with caution.
  public get revisionInput() {
    return this._revision;
  }
}
export interface VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSource {
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#config VertexAiReasoningEngine#config}
  */
  readonly config: VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig;
}

export function vertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceToTerraform(struct?: VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference | VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    config: vertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigToTerraform(struct!.config),
  }
}


export function vertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceToHclTerraform(struct?: VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference | VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    config: {
      value: vertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigToHclTerraform(struct!.config),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._config.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._config.internalValue = value.config;
    }
  }

  // config - computed: false, optional: false, required: true
  private _config = new VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig) {
    this._config.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }
}
export interface VertexAiReasoningEngineSpecSourceCodeSpecImageSpec {
  /**
  * Build arguments to be used. They will be passed through --build-arg flags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#build_args VertexAiReasoningEngine#build_args}
  */
  readonly buildArgs?: { [key: string]: string };
}

export function vertexAiReasoningEngineSpecSourceCodeSpecImageSpecToTerraform(struct?: VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference | VertexAiReasoningEngineSpecSourceCodeSpecImageSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    build_args: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.buildArgs),
  }
}


export function vertexAiReasoningEngineSpecSourceCodeSpecImageSpecToHclTerraform(struct?: VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference | VertexAiReasoningEngineSpecSourceCodeSpecImageSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    build_args: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.buildArgs),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiReasoningEngineSpecSourceCodeSpecImageSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._buildArgs !== undefined) {
      hasAnyValues = true;
      internalValueResult.buildArgs = this._buildArgs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiReasoningEngineSpecSourceCodeSpecImageSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._buildArgs = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._buildArgs = value.buildArgs;
    }
  }

  // build_args - computed: false, optional: true, required: false
  private _buildArgs?: { [key: string]: string }; 
  public get buildArgs() {
    return this.getStringMapAttribute('build_args');
  }
  public set buildArgs(value: { [key: string]: string }) {
    this._buildArgs = value;
  }
  public resetBuildArgs() {
    this._buildArgs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildArgsInput() {
    return this._buildArgs;
  }
}
export interface VertexAiReasoningEngineSpecSourceCodeSpecInlineSource {
  /**
  * Required. Input only.
  * The application source code archive, provided as a compressed
  * tarball (.tar.gz) file. A base64-encoded string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#source_archive VertexAiReasoningEngine#source_archive}
  */
  readonly sourceArchive?: string;
}

export function vertexAiReasoningEngineSpecSourceCodeSpecInlineSourceToTerraform(struct?: VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference | VertexAiReasoningEngineSpecSourceCodeSpecInlineSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    source_archive: cdktn.stringToTerraform(struct!.sourceArchive),
  }
}


export function vertexAiReasoningEngineSpecSourceCodeSpecInlineSourceToHclTerraform(struct?: VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference | VertexAiReasoningEngineSpecSourceCodeSpecInlineSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    source_archive: {
      value: cdktn.stringToHclTerraform(struct!.sourceArchive),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiReasoningEngineSpecSourceCodeSpecInlineSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourceArchive !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceArchive = this._sourceArchive;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiReasoningEngineSpecSourceCodeSpecInlineSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sourceArchive = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sourceArchive = value.sourceArchive;
    }
  }

  // source_archive - computed: false, optional: true, required: false
  private _sourceArchive?: string; 
  public get sourceArchive() {
    return this.getStringAttribute('source_archive');
  }
  public set sourceArchive(value: string) {
    this._sourceArchive = value;
  }
  public resetSourceArchive() {
    this._sourceArchive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceArchiveInput() {
    return this._sourceArchive;
  }
}
export interface VertexAiReasoningEngineSpecSourceCodeSpecPythonSpec {
  /**
  * Optional. The Python module to load as the entrypoint,
  * specified as a fully qualified module name. For example:
  * path.to.agent. If not specified, defaults to "agent".
  * The project root will be added to Python sys.path, allowing
  * imports to be specified relative to the root.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#entrypoint_module VertexAiReasoningEngine#entrypoint_module}
  */
  readonly entrypointModule?: string;
  /**
  * Optional. The name of the callable object within the
  * entrypointModule to use as the application If not specified,
  * defaults to "root_agent".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#entrypoint_object VertexAiReasoningEngine#entrypoint_object}
  */
  readonly entrypointObject?: string;
  /**
  * Optional. The path to the requirements file, relative to the
  * source root. If not specified, defaults to "requirements.txt".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#requirements_file VertexAiReasoningEngine#requirements_file}
  */
  readonly requirementsFile?: string;
  /**
  * Optional. The version of Python to use. Support version
  * includes 3.9, 3.10, 3.11, 3.12, 3.13. If not specified,
  * default value is 3.10.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#version VertexAiReasoningEngine#version}
  */
  readonly version?: string;
}

export function vertexAiReasoningEngineSpecSourceCodeSpecPythonSpecToTerraform(struct?: VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference | VertexAiReasoningEngineSpecSourceCodeSpecPythonSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    entrypoint_module: cdktn.stringToTerraform(struct!.entrypointModule),
    entrypoint_object: cdktn.stringToTerraform(struct!.entrypointObject),
    requirements_file: cdktn.stringToTerraform(struct!.requirementsFile),
    version: cdktn.stringToTerraform(struct!.version),
  }
}


export function vertexAiReasoningEngineSpecSourceCodeSpecPythonSpecToHclTerraform(struct?: VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference | VertexAiReasoningEngineSpecSourceCodeSpecPythonSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    entrypoint_module: {
      value: cdktn.stringToHclTerraform(struct!.entrypointModule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    entrypoint_object: {
      value: cdktn.stringToHclTerraform(struct!.entrypointObject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    requirements_file: {
      value: cdktn.stringToHclTerraform(struct!.requirementsFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktn.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiReasoningEngineSpecSourceCodeSpecPythonSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entrypointModule !== undefined) {
      hasAnyValues = true;
      internalValueResult.entrypointModule = this._entrypointModule;
    }
    if (this._entrypointObject !== undefined) {
      hasAnyValues = true;
      internalValueResult.entrypointObject = this._entrypointObject;
    }
    if (this._requirementsFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.requirementsFile = this._requirementsFile;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiReasoningEngineSpecSourceCodeSpecPythonSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._entrypointModule = undefined;
      this._entrypointObject = undefined;
      this._requirementsFile = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._entrypointModule = value.entrypointModule;
      this._entrypointObject = value.entrypointObject;
      this._requirementsFile = value.requirementsFile;
      this._version = value.version;
    }
  }

  // entrypoint_module - computed: false, optional: true, required: false
  private _entrypointModule?: string; 
  public get entrypointModule() {
    return this.getStringAttribute('entrypoint_module');
  }
  public set entrypointModule(value: string) {
    this._entrypointModule = value;
  }
  public resetEntrypointModule() {
    this._entrypointModule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entrypointModuleInput() {
    return this._entrypointModule;
  }

  // entrypoint_object - computed: false, optional: true, required: false
  private _entrypointObject?: string; 
  public get entrypointObject() {
    return this.getStringAttribute('entrypoint_object');
  }
  public set entrypointObject(value: string) {
    this._entrypointObject = value;
  }
  public resetEntrypointObject() {
    this._entrypointObject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entrypointObjectInput() {
    return this._entrypointObject;
  }

  // requirements_file - computed: false, optional: true, required: false
  private _requirementsFile?: string; 
  public get requirementsFile() {
    return this.getStringAttribute('requirements_file');
  }
  public set requirementsFile(value: string) {
    this._requirementsFile = value;
  }
  public resetRequirementsFile() {
    this._requirementsFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requirementsFileInput() {
    return this._requirementsFile;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface VertexAiReasoningEngineSpecSourceCodeSpec {
  /**
  * agent_config_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#agent_config_source VertexAiReasoningEngine#agent_config_source}
  */
  readonly agentConfigSource?: VertexAiReasoningEngineSpecSourceCodeSpecAgentConfigSource;
  /**
  * developer_connect_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#developer_connect_source VertexAiReasoningEngine#developer_connect_source}
  */
  readonly developerConnectSource?: VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSource;
  /**
  * image_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#image_spec VertexAiReasoningEngine#image_spec}
  */
  readonly imageSpec?: VertexAiReasoningEngineSpecSourceCodeSpecImageSpec;
  /**
  * inline_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#inline_source VertexAiReasoningEngine#inline_source}
  */
  readonly inlineSource?: VertexAiReasoningEngineSpecSourceCodeSpecInlineSource;
  /**
  * python_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#python_spec VertexAiReasoningEngine#python_spec}
  */
  readonly pythonSpec?: VertexAiReasoningEngineSpecSourceCodeSpecPythonSpec;
}

export function vertexAiReasoningEngineSpecSourceCodeSpecToTerraform(struct?: VertexAiReasoningEngineSpecSourceCodeSpecOutputReference | VertexAiReasoningEngineSpecSourceCodeSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    agent_config_source: vertexAiReasoningEngineSpecSourceCodeSpecAgentConfigSourceToTerraform(struct!.agentConfigSource),
    developer_connect_source: vertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceToTerraform(struct!.developerConnectSource),
    image_spec: vertexAiReasoningEngineSpecSourceCodeSpecImageSpecToTerraform(struct!.imageSpec),
    inline_source: vertexAiReasoningEngineSpecSourceCodeSpecInlineSourceToTerraform(struct!.inlineSource),
    python_spec: vertexAiReasoningEngineSpecSourceCodeSpecPythonSpecToTerraform(struct!.pythonSpec),
  }
}


export function vertexAiReasoningEngineSpecSourceCodeSpecToHclTerraform(struct?: VertexAiReasoningEngineSpecSourceCodeSpecOutputReference | VertexAiReasoningEngineSpecSourceCodeSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    agent_config_source: {
      value: vertexAiReasoningEngineSpecSourceCodeSpecAgentConfigSourceToHclTerraform(struct!.agentConfigSource),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiReasoningEngineSpecSourceCodeSpecAgentConfigSourceList",
    },
    developer_connect_source: {
      value: vertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceToHclTerraform(struct!.developerConnectSource),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceList",
    },
    image_spec: {
      value: vertexAiReasoningEngineSpecSourceCodeSpecImageSpecToHclTerraform(struct!.imageSpec),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiReasoningEngineSpecSourceCodeSpecImageSpecList",
    },
    inline_source: {
      value: vertexAiReasoningEngineSpecSourceCodeSpecInlineSourceToHclTerraform(struct!.inlineSource),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceList",
    },
    python_spec: {
      value: vertexAiReasoningEngineSpecSourceCodeSpecPythonSpecToHclTerraform(struct!.pythonSpec),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiReasoningEngineSpecSourceCodeSpecOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiReasoningEngineSpecSourceCodeSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agentConfigSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentConfigSource = this._agentConfigSource?.internalValue;
    }
    if (this._developerConnectSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.developerConnectSource = this._developerConnectSource?.internalValue;
    }
    if (this._imageSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageSpec = this._imageSpec?.internalValue;
    }
    if (this._inlineSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inlineSource = this._inlineSource?.internalValue;
    }
    if (this._pythonSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pythonSpec = this._pythonSpec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiReasoningEngineSpecSourceCodeSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._agentConfigSource.internalValue = undefined;
      this._developerConnectSource.internalValue = undefined;
      this._imageSpec.internalValue = undefined;
      this._inlineSource.internalValue = undefined;
      this._pythonSpec.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._agentConfigSource.internalValue = value.agentConfigSource;
      this._developerConnectSource.internalValue = value.developerConnectSource;
      this._imageSpec.internalValue = value.imageSpec;
      this._inlineSource.internalValue = value.inlineSource;
      this._pythonSpec.internalValue = value.pythonSpec;
    }
  }

  // agent_config_source - computed: false, optional: true, required: false
  private _agentConfigSource = new VertexAiReasoningEngineSpecSourceCodeSpecAgentConfigSourceOutputReference(this, "agent_config_source");
  public get agentConfigSource() {
    return this._agentConfigSource;
  }
  public putAgentConfigSource(value: VertexAiReasoningEngineSpecSourceCodeSpecAgentConfigSource) {
    this._agentConfigSource.internalValue = value;
  }
  public resetAgentConfigSource() {
    this._agentConfigSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentConfigSourceInput() {
    return this._agentConfigSource.internalValue;
  }

  // developer_connect_source - computed: false, optional: true, required: false
  private _developerConnectSource = new VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference(this, "developer_connect_source");
  public get developerConnectSource() {
    return this._developerConnectSource;
  }
  public putDeveloperConnectSource(value: VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSource) {
    this._developerConnectSource.internalValue = value;
  }
  public resetDeveloperConnectSource() {
    this._developerConnectSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get developerConnectSourceInput() {
    return this._developerConnectSource.internalValue;
  }

  // image_spec - computed: false, optional: true, required: false
  private _imageSpec = new VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference(this, "image_spec");
  public get imageSpec() {
    return this._imageSpec;
  }
  public putImageSpec(value: VertexAiReasoningEngineSpecSourceCodeSpecImageSpec) {
    this._imageSpec.internalValue = value;
  }
  public resetImageSpec() {
    this._imageSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageSpecInput() {
    return this._imageSpec.internalValue;
  }

  // inline_source - computed: false, optional: true, required: false
  private _inlineSource = new VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference(this, "inline_source");
  public get inlineSource() {
    return this._inlineSource;
  }
  public putInlineSource(value: VertexAiReasoningEngineSpecSourceCodeSpecInlineSource) {
    this._inlineSource.internalValue = value;
  }
  public resetInlineSource() {
    this._inlineSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inlineSourceInput() {
    return this._inlineSource.internalValue;
  }

  // python_spec - computed: false, optional: true, required: false
  private _pythonSpec = new VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference(this, "python_spec");
  public get pythonSpec() {
    return this._pythonSpec;
  }
  public putPythonSpec(value: VertexAiReasoningEngineSpecSourceCodeSpecPythonSpec) {
    this._pythonSpec.internalValue = value;
  }
  public resetPythonSpec() {
    this._pythonSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pythonSpecInput() {
    return this._pythonSpec.internalValue;
  }
}
export interface VertexAiReasoningEngineSpec {
  /**
  * Optional. The OSS agent framework used to develop the agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#agent_framework VertexAiReasoningEngine#agent_framework}
  */
  readonly agentFramework?: string;
  /**
  * Optional. Declarations for object class methods in OpenAPI
  * specification format.
  * 
  * **Note**: When deploying via Terraform, this field must be populated manually.
  * Otherwise, client SDKs (like 'agent_engines.get()') will not be able to discover the methods, and calls to the engine (or A2A integrations) will fail.
  * 
  * Depending on the template/framework used ('agent_framework'), the required class methods and their parameters differ:
  * 
  * **Warning**: The configuration snippets below are illustrative, may not be exhaustive, and could stop working over time. For the most up-to-date method lists and schemas, please consult the respective SDK source code:
  * * For Google ADK: See [ADK Python SDK cli_deploy.py](https://github.com/google/adk-python/blob/68a780306e3bdd648a882ef34c0abf8e5148353e/src/google/adk/cli/cli_deploy.py#L109).
  * * For Langchain: See [Vertex AI Python SDK langchain.py](https://github.com/googleapis/python-aiplatform/blob/c8a38a085931b01f4d6071f0ab7a64cb42851829/agentplatform/agent_engines/templates/langchain.py#L642-L717).
  * 
  * ### 1. Langchain Template
  * * 'query' (api_mode = "sync" or empty)
  * * 'stream_query' (api_mode = "stream")
  * 
  * Example for Langchain:
  * ```hcl
  * class_methods = jsonencode([
  *   {
  *     name        = "query"
  *     api_mode    = "sync"
  *     description = "Queries the reasoning engine"
  *     parameters  = {
  *       type       = "object"
  *       required   = ["input"]
  *       properties = {
  *         input = {
  *           type        = "string"
  *           description = "The input prompt"
  *         }
  *       }
  *     }
  *   },
  *   {
  *     name        = "stream_query"
  *     api_mode    = "stream"
  *     description = "Streams queries from the reasoning engine"
  *     parameters  = {
  *       type       = "object"
  *       required   = ["input"]
  *       properties = {
  *         input = {
  *           type        = "string"
  *           description = "The input prompt"
  *         }
  *       }
  *     }
  *   }
  * ])
  * ```
  * 
  * ### 2. Google ADK Template (Standard - No A2A)
  * For standard Google ADK (Agent Development Kit) deployments, you must define the following 11 methods:
  * 
  * Example for Standard ADK:
  * ```hcl
  * class_methods = jsonencode([
  *   {
  *     name        = "get_session"
  *     api_mode    = ""
  *     description = "Retrieve session by ID"
  *     parameters  = {
  *       type     = "object"
  *       required = ["user_id", "session_id"]
  *       properties = {
  *         user_id    = { type = "string" }
  *         session_id = { type = "string" }
  *       }
  *     }
  *   },
  *   {
  *     name        = "async_get_session"
  *     api_mode    = "async"
  *     description = "Retrieve session asynchronously by ID"
  *     parameters  = {
  *       type     = "object"
  *       required = ["user_id", "session_id"]
  *       properties = {
  *         user_id    = { type = "string" }
  *         session_id = { type = "string" }
  *       }
  *     }
  *   },
  *   {
  *     name        = "list_sessions"
  *     api_mode    = ""
  *     description = "List all sessions for a user"
  *     parameters  = {
  *       type     = "object"
  *       required = ["user_id"]
  *       properties = {
  *         user_id = { type = "string" }
  *       }
  *     }
  *   },
  *   {
  *     name        = "async_list_sessions"
  *     api_mode    = "async"
  *     description = "List all sessions for a user asynchronously"
  *     parameters  = {
  *       type     = "object"
  *       required = ["user_id"]
  *       properties = {
  *         user_id = { type = "string" }
  *       }
  *     }
  *   },
  *   {
  *     name        = "create_session"
  *     api_mode    = ""
  *     description = "Create a new session"
  *     parameters  = {
  *       type     = "object"
  *       required = ["user_id"]
  *       properties = {
  *         user_id    = { type = "string" }
  *         session_id = { type = "string" }
  *         state      = { type = "object" }
  *       }
  *     }
  *   },
  *   {
  *     name        = "async_create_session"
  *     api_mode    = "async"
  *     description = "Create a new session asynchronously"
  *     parameters  = {
  *       type     = "object"
  *       required = ["user_id"]
  *       properties = {
  *         user_id    = { type = "string" }
  *         session_id = { type = "string" }
  *         state      = { type = "object" }
  *       }
  *     }
  *   },
  *   {
  *     name        = "delete_session"
  *     api_mode    = ""
  *     description = "Delete session by ID"
  *     parameters  = {
  *       type     = "object"
  *       required = ["user_id", "session_id"]
  *       properties = {
  *         user_id    = { type = "string" }
  *         session_id = { type = "string" }
  *       }
  *     }
  *   },
  *   {
  *     name        = "async_delete_session"
  *     api_mode    = "async"
  *     description = "Delete session asynchronously by ID"
  *     parameters  = {
  *       type     = "object"
  *       required = ["user_id", "session_id"]
  *       properties = {
  *         user_id    = { type = "string" }
  *         session_id = { type = "string" }
  *       }
  *     }
  *   },
  *   {
  *     name        = "stream_query"
  *     api_mode    = "stream"
  *     description = "Stream queries from the agent"
  *     parameters  = {
  *       type     = "object"
  *       required = ["message", "user_id"]
  *       properties = {
  *         message    = { description = "Message string or object" }
  *         user_id    = { type = "string" }
  *         session_id = { type = "string" }
  *         run_config = { type = "object" }
  *       }
  *     }
  *   },
  *   {
  *     name        = "async_stream_query"
  *     api_mode    = "async_stream"
  *     description = "Stream queries asynchronously from the agent"
  *     parameters  = {
  *       type     = "object"
  *       required = ["message", "user_id"]
  *       properties = {
  *         message        = { description = "Message string or object" }
  *         user_id        = { type = "string" }
  *         session_id     = { type = "string" }
  *         session_events = { type = "array", items = { type = "object" } }
  *         run_config     = { type = "object" }
  *       }
  *     }
  *   },
  *   {
  *     name        = "streaming_agent_run_with_events"
  *     api_mode    = "async_stream"
  *     description = "Stream agent run with events asynchronously"
  *     parameters  = {
  *       type     = "object"
  *       required = ["request_json"]
  *       properties = {
  *         request_json = { type = "string" }
  *       }
  *     }
  *   }
  * ])
  * ```
  * 
  * ### 3. Google ADK Template (A2A-Enabled)
  * If the agent integrates with the Gemini Enterprise Agent Registry (A2A), you must inject the 'a2a_agent_card' JSON metadata as a string **specifically inside the 'async_create_session' method definition**:
  * 
  * Example for A2A-Enabled ADK:
  * ```hcl
  * locals {
  *   # Construct the A2A endpoint URL
  *   a2a_url = "https://us-central1-aiplatform.googleapis.com/v1/projects/my-project/locations/us-central1/reasoningEngines/my-agent/a2a"
  * 
  *   agent_card = {
  *     name                 = "my-agent"
  *     description          = "A2A Agent"
  *     version              = "1.0.0"
  *     preferred_transport  = "HTTP_JSON"
  *     supported_interfaces = [{ url = local.a2a_url, protocol_binding = "HTTP_JSON" }]
  *     capabilities         = { streaming = true }
  *   }
  * }
  * 
  * # In class_methods, append "a2a_agent_card" key ONLY to the "async_create_session" method:
  * class_methods = jsonencode([
  *   # ... other 10 standard methods (same as Standard ADK) ...
  *   {
  *     name        = "async_create_session"
  *     api_mode    = "async"
  *     description = "Create a new session asynchronously"
  *     parameters  = {
  *       type     = "object"
  *       required = ["user_id"]
  *       properties = {
  *         user_id    = { type = "string" }
  *         session_id = { type = "string" }
  *         state      = { type = "object" }
  *       }
  *     }
  *     # Inject the serialized Agent Card here
  *     a2a_agent_card = jsonencode(local.agent_card)
  *   }
  * ])
  * ```
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#class_methods VertexAiReasoningEngine#class_methods}
  */
  readonly classMethods?: string;
  /**
  * Optional. The identity type to use for the Reasoning Engine.
  * If not specified, the 'service_account' field will be used if set,
  * otherwise the default Vertex AI Reasoning Engine Service Agent in the project will be used.
  * Possible values:
  * * 'SERVICE_ACCOUNT': Use a custom service account if the 'service_account' field is set, otherwise use the default Vertex AI Reasoning Engine Service Agent in the project.
  * * 'AGENT_IDENTITY': Use Agent Identity. The 'service_account' field must not be set. Possible values: ["SERVICE_ACCOUNT", "AGENT_IDENTITY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#identity_type VertexAiReasoningEngine#identity_type}
  */
  readonly identityType?: string;
  /**
  * Optional. The service account that the Reasoning Engine artifact runs
  * as. It should have "roles/storage.objectViewer" for reading the user
  * project's Cloud Storage and "roles/aiplatform.user" for using Vertex
  * extensions. If not specified, the Vertex AI Reasoning Engine service
  * Agent in the project will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#service_account VertexAiReasoningEngine#service_account}
  */
  readonly serviceAccount?: string;
  /**
  * build_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#build_spec VertexAiReasoningEngine#build_spec}
  */
  readonly buildSpec?: VertexAiReasoningEngineSpecBuildSpec;
  /**
  * container_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#container_spec VertexAiReasoningEngine#container_spec}
  */
  readonly containerSpec?: VertexAiReasoningEngineSpecContainerSpec;
  /**
  * deployment_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#deployment_spec VertexAiReasoningEngine#deployment_spec}
  */
  readonly deploymentSpec?: VertexAiReasoningEngineSpecDeploymentSpec;
  /**
  * package_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#package_spec VertexAiReasoningEngine#package_spec}
  */
  readonly packageSpec?: VertexAiReasoningEngineSpecPackageSpec;
  /**
  * source_code_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#source_code_spec VertexAiReasoningEngine#source_code_spec}
  */
  readonly sourceCodeSpec?: VertexAiReasoningEngineSpecSourceCodeSpec;
}

export function vertexAiReasoningEngineSpecToTerraform(struct?: VertexAiReasoningEngineSpecOutputReference | VertexAiReasoningEngineSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    agent_framework: cdktn.stringToTerraform(struct!.agentFramework),
    class_methods: cdktn.stringToTerraform(struct!.classMethods),
    identity_type: cdktn.stringToTerraform(struct!.identityType),
    service_account: cdktn.stringToTerraform(struct!.serviceAccount),
    build_spec: vertexAiReasoningEngineSpecBuildSpecToTerraform(struct!.buildSpec),
    container_spec: vertexAiReasoningEngineSpecContainerSpecToTerraform(struct!.containerSpec),
    deployment_spec: vertexAiReasoningEngineSpecDeploymentSpecToTerraform(struct!.deploymentSpec),
    package_spec: vertexAiReasoningEngineSpecPackageSpecToTerraform(struct!.packageSpec),
    source_code_spec: vertexAiReasoningEngineSpecSourceCodeSpecToTerraform(struct!.sourceCodeSpec),
  }
}


export function vertexAiReasoningEngineSpecToHclTerraform(struct?: VertexAiReasoningEngineSpecOutputReference | VertexAiReasoningEngineSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    agent_framework: {
      value: cdktn.stringToHclTerraform(struct!.agentFramework),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_methods: {
      value: cdktn.stringToHclTerraform(struct!.classMethods),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identity_type: {
      value: cdktn.stringToHclTerraform(struct!.identityType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account: {
      value: cdktn.stringToHclTerraform(struct!.serviceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    build_spec: {
      value: vertexAiReasoningEngineSpecBuildSpecToHclTerraform(struct!.buildSpec),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiReasoningEngineSpecBuildSpecList",
    },
    container_spec: {
      value: vertexAiReasoningEngineSpecContainerSpecToHclTerraform(struct!.containerSpec),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiReasoningEngineSpecContainerSpecList",
    },
    deployment_spec: {
      value: vertexAiReasoningEngineSpecDeploymentSpecToHclTerraform(struct!.deploymentSpec),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiReasoningEngineSpecDeploymentSpecList",
    },
    package_spec: {
      value: vertexAiReasoningEngineSpecPackageSpecToHclTerraform(struct!.packageSpec),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiReasoningEngineSpecPackageSpecList",
    },
    source_code_spec: {
      value: vertexAiReasoningEngineSpecSourceCodeSpecToHclTerraform(struct!.sourceCodeSpec),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiReasoningEngineSpecSourceCodeSpecList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiReasoningEngineSpecOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiReasoningEngineSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agentFramework !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentFramework = this._agentFramework;
    }
    if (this._classMethods !== undefined) {
      hasAnyValues = true;
      internalValueResult.classMethods = this._classMethods;
    }
    if (this._identityType !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityType = this._identityType;
    }
    if (this._serviceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccount = this._serviceAccount;
    }
    if (this._buildSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.buildSpec = this._buildSpec?.internalValue;
    }
    if (this._containerSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerSpec = this._containerSpec?.internalValue;
    }
    if (this._deploymentSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deploymentSpec = this._deploymentSpec?.internalValue;
    }
    if (this._packageSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.packageSpec = this._packageSpec?.internalValue;
    }
    if (this._sourceCodeSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceCodeSpec = this._sourceCodeSpec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiReasoningEngineSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._agentFramework = undefined;
      this._classMethods = undefined;
      this._identityType = undefined;
      this._serviceAccount = undefined;
      this._buildSpec.internalValue = undefined;
      this._containerSpec.internalValue = undefined;
      this._deploymentSpec.internalValue = undefined;
      this._packageSpec.internalValue = undefined;
      this._sourceCodeSpec.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._agentFramework = value.agentFramework;
      this._classMethods = value.classMethods;
      this._identityType = value.identityType;
      this._serviceAccount = value.serviceAccount;
      this._buildSpec.internalValue = value.buildSpec;
      this._containerSpec.internalValue = value.containerSpec;
      this._deploymentSpec.internalValue = value.deploymentSpec;
      this._packageSpec.internalValue = value.packageSpec;
      this._sourceCodeSpec.internalValue = value.sourceCodeSpec;
    }
  }

  // agent_framework - computed: false, optional: true, required: false
  private _agentFramework?: string; 
  public get agentFramework() {
    return this.getStringAttribute('agent_framework');
  }
  public set agentFramework(value: string) {
    this._agentFramework = value;
  }
  public resetAgentFramework() {
    this._agentFramework = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentFrameworkInput() {
    return this._agentFramework;
  }

  // class_methods - computed: false, optional: true, required: false
  private _classMethods?: string; 
  public get classMethods() {
    return this.getStringAttribute('class_methods');
  }
  public set classMethods(value: string) {
    this._classMethods = value;
  }
  public resetClassMethods() {
    this._classMethods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classMethodsInput() {
    return this._classMethods;
  }

  // effective_identity - computed: true, optional: false, required: false
  public get effectiveIdentity() {
    return this.getStringAttribute('effective_identity');
  }

  // identity_type - computed: false, optional: true, required: false
  private _identityType?: string; 
  public get identityType() {
    return this.getStringAttribute('identity_type');
  }
  public set identityType(value: string) {
    this._identityType = value;
  }
  public resetIdentityType() {
    this._identityType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityTypeInput() {
    return this._identityType;
  }

  // service_account - computed: false, optional: true, required: false
  private _serviceAccount?: string; 
  public get serviceAccount() {
    return this.getStringAttribute('service_account');
  }
  public set serviceAccount(value: string) {
    this._serviceAccount = value;
  }
  public resetServiceAccount() {
    this._serviceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountInput() {
    return this._serviceAccount;
  }

  // build_spec - computed: false, optional: true, required: false
  private _buildSpec = new VertexAiReasoningEngineSpecBuildSpecOutputReference(this, "build_spec");
  public get buildSpec() {
    return this._buildSpec;
  }
  public putBuildSpec(value: VertexAiReasoningEngineSpecBuildSpec) {
    this._buildSpec.internalValue = value;
  }
  public resetBuildSpec() {
    this._buildSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildSpecInput() {
    return this._buildSpec.internalValue;
  }

  // container_spec - computed: false, optional: true, required: false
  private _containerSpec = new VertexAiReasoningEngineSpecContainerSpecOutputReference(this, "container_spec");
  public get containerSpec() {
    return this._containerSpec;
  }
  public putContainerSpec(value: VertexAiReasoningEngineSpecContainerSpec) {
    this._containerSpec.internalValue = value;
  }
  public resetContainerSpec() {
    this._containerSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerSpecInput() {
    return this._containerSpec.internalValue;
  }

  // deployment_spec - computed: false, optional: true, required: false
  private _deploymentSpec = new VertexAiReasoningEngineSpecDeploymentSpecOutputReference(this, "deployment_spec");
  public get deploymentSpec() {
    return this._deploymentSpec;
  }
  public putDeploymentSpec(value: VertexAiReasoningEngineSpecDeploymentSpec) {
    this._deploymentSpec.internalValue = value;
  }
  public resetDeploymentSpec() {
    this._deploymentSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentSpecInput() {
    return this._deploymentSpec.internalValue;
  }

  // package_spec - computed: false, optional: true, required: false
  private _packageSpec = new VertexAiReasoningEngineSpecPackageSpecOutputReference(this, "package_spec");
  public get packageSpec() {
    return this._packageSpec;
  }
  public putPackageSpec(value: VertexAiReasoningEngineSpecPackageSpec) {
    this._packageSpec.internalValue = value;
  }
  public resetPackageSpec() {
    this._packageSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageSpecInput() {
    return this._packageSpec.internalValue;
  }

  // source_code_spec - computed: false, optional: true, required: false
  private _sourceCodeSpec = new VertexAiReasoningEngineSpecSourceCodeSpecOutputReference(this, "source_code_spec");
  public get sourceCodeSpec() {
    return this._sourceCodeSpec;
  }
  public putSourceCodeSpec(value: VertexAiReasoningEngineSpecSourceCodeSpec) {
    this._sourceCodeSpec.internalValue = value;
  }
  public resetSourceCodeSpec() {
    this._sourceCodeSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceCodeSpecInput() {
    return this._sourceCodeSpec.internalValue;
  }
}
export interface VertexAiReasoningEngineTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#create VertexAiReasoningEngine#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#delete VertexAiReasoningEngine#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#update VertexAiReasoningEngine#update}
  */
  readonly update?: string;
}

export function vertexAiReasoningEngineTimeoutsToTerraform(struct?: VertexAiReasoningEngineTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    delete: cdktn.stringToTerraform(struct!.delete),
    update: cdktn.stringToTerraform(struct!.update),
  }
}


export function vertexAiReasoningEngineTimeoutsToHclTerraform(struct?: VertexAiReasoningEngineTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    create: {
      value: cdktn.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktn.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktn.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiReasoningEngineTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VertexAiReasoningEngineTimeouts | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiReasoningEngineTimeouts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine google_vertex_ai_reasoning_engine}
*/
export class VertexAiReasoningEngine extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_vertex_ai_reasoning_engine";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a VertexAiReasoningEngine resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VertexAiReasoningEngine to import
  * @param importFromId The id of the existing VertexAiReasoningEngine that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VertexAiReasoningEngine to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_vertex_ai_reasoning_engine", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_reasoning_engine google_vertex_ai_reasoning_engine} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VertexAiReasoningEngineConfig
  */
  public constructor(scope: Construct, id: string, config: VertexAiReasoningEngineConfig) {
    super(scope, id, {
      terraformResourceType: 'google_vertex_ai_reasoning_engine',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '8.5.0',
        providerVersionConstraint: '~> 8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deletionPolicy = config.deletionPolicy;
    this._description = config.description;
    this._displayName = config.displayName;
    this._id = config.id;
    this._labels = config.labels;
    this._project = config.project;
    this._region = config.region;
    this._contextSpec.internalValue = config.contextSpec;
    this._encryptionSpec.internalValue = config.encryptionSpec;
    this._spec.internalValue = config.spec;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // deletion_policy - computed: true, optional: true, required: false
  private _deletionPolicy?: string; 
  public get deletionPolicy() {
    return this.getStringAttribute('deletion_policy');
  }
  public set deletionPolicy(value: string) {
    this._deletionPolicy = value;
  }
  public resetDeletionPolicy() {
    this._deletionPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionPolicyInput() {
    return this._deletionPolicy;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktn.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // project - computed: true, optional: true, required: false
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktn.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // context_spec - computed: false, optional: true, required: false
  private _contextSpec = new VertexAiReasoningEngineContextSpecOutputReference(this, "context_spec");
  public get contextSpec() {
    return this._contextSpec;
  }
  public putContextSpec(value: VertexAiReasoningEngineContextSpec) {
    this._contextSpec.internalValue = value;
  }
  public resetContextSpec() {
    this._contextSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextSpecInput() {
    return this._contextSpec.internalValue;
  }

  // encryption_spec - computed: false, optional: true, required: false
  private _encryptionSpec = new VertexAiReasoningEngineEncryptionSpecOutputReference(this, "encryption_spec");
  public get encryptionSpec() {
    return this._encryptionSpec;
  }
  public putEncryptionSpec(value: VertexAiReasoningEngineEncryptionSpec) {
    this._encryptionSpec.internalValue = value;
  }
  public resetEncryptionSpec() {
    this._encryptionSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionSpecInput() {
    return this._encryptionSpec.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new VertexAiReasoningEngineSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: VertexAiReasoningEngineSpec) {
    this._spec.internalValue = value;
  }
  public resetSpec() {
    this._spec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new VertexAiReasoningEngineTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: VertexAiReasoningEngineTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      description: cdktn.stringToTerraform(this._description),
      display_name: cdktn.stringToTerraform(this._displayName),
      id: cdktn.stringToTerraform(this._id),
      labels: cdktn.hashMapper(cdktn.stringToTerraform)(this._labels),
      project: cdktn.stringToTerraform(this._project),
      region: cdktn.stringToTerraform(this._region),
      context_spec: vertexAiReasoningEngineContextSpecToTerraform(this._contextSpec.internalValue),
      encryption_spec: vertexAiReasoningEngineEncryptionSpecToTerraform(this._encryptionSpec.internalValue),
      spec: vertexAiReasoningEngineSpecToTerraform(this._spec.internalValue),
      timeouts: vertexAiReasoningEngineTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      deletion_policy: {
        value: cdktn.stringToHclTerraform(this._deletionPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktn.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      project: {
        value: cdktn.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktn.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      context_spec: {
        value: vertexAiReasoningEngineContextSpecToHclTerraform(this._contextSpec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VertexAiReasoningEngineContextSpecList",
      },
      encryption_spec: {
        value: vertexAiReasoningEngineEncryptionSpecToHclTerraform(this._encryptionSpec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VertexAiReasoningEngineEncryptionSpecList",
      },
      spec: {
        value: vertexAiReasoningEngineSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VertexAiReasoningEngineSpecList",
      },
      timeouts: {
        value: vertexAiReasoningEngineTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VertexAiReasoningEngineTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
