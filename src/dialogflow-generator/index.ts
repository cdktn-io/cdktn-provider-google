/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/dialogflow_generator
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DialogflowGeneratorConfig extends cdktn.TerraformMetaArguments {
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/dialogflow_generator#deletion_policy DialogflowGenerator#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Optional. Human readable description of the generator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/dialogflow_generator#description DialogflowGenerator#description}
  */
  readonly description?: string;
  /**
  * Optional. The ID to use for the generator, which will become the final component of the generator's resource name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/dialogflow_generator#generator_id DialogflowGenerator#generator_id}
  */
  readonly generatorId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/dialogflow_generator#id DialogflowGenerator#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * desc
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/dialogflow_generator#location DialogflowGenerator#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/dialogflow_generator#project DialogflowGenerator#project}
  */
  readonly project?: string;
  /**
  * Optional. The published Large Language Model name. * To use the latest model version, specify the model name without version number. Example: text-bison * To use a stable model version, specify the version number as well. Example: text-bison@002.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/dialogflow_generator#published_model DialogflowGenerator#published_model}
  */
  readonly publishedModel?: string;
  /**
  * Optional. The trigger event of the generator. It defines when the generator is triggered in a conversation. Possible values: ["END_OF_UTTERANCE", "MANUAL_CALL", "CUSTOMER_MESSAGE", "AGENT_MESSAGE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/dialogflow_generator#trigger_event DialogflowGenerator#trigger_event}
  */
  readonly triggerEvent?: string;
  /**
  * inference_parameter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/dialogflow_generator#inference_parameter DialogflowGenerator#inference_parameter}
  */
  readonly inferenceParameter?: DialogflowGeneratorInferenceParameter;
  /**
  * summarization_context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/dialogflow_generator#summarization_context DialogflowGenerator#summarization_context}
  */
  readonly summarizationContext: DialogflowGeneratorSummarizationContext;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/dialogflow_generator#timeouts DialogflowGenerator#timeouts}
  */
  readonly timeouts?: DialogflowGeneratorTimeouts;
}
export interface DialogflowGeneratorInferenceParameter {
  /**
  * Optional. Maximum number of the output tokens for the generator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/dialogflow_generator#max_output_tokens DialogflowGenerator#max_output_tokens}
  */
  readonly maxOutputTokens?: number;
  /**
  * Optional. Controls the randomness of LLM predictions. Low temperature = less random. High temperature = more random. If unset (or 0), uses a default value of 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/dialogflow_generator#temperature DialogflowGenerator#temperature}
  */
  readonly temperature?: number;
  /**
  * Optional. Top-k changes how the model selects tokens for output. A top-k of 1 means the selected token is the most probable among all tokens in the model's vocabulary (also called greedy decoding), while a top-k of 3 means that the next token is selected from among the 3 most probable tokens (using temperature). For each token selection step, the top K tokens with the highest probabilities are sampled. Then tokens are further filtered based on topP with the final token selected using temperature sampling. Specify a lower value for less random responses and a higher value for more random responses. Acceptable value is [1, 40], default to 40.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/dialogflow_generator#top_k DialogflowGenerator#top_k}
  */
  readonly topK?: number;
  /**
  * Optional. Top-p changes how the model selects tokens for output. Tokens are selected from most K (see topK parameter) probable to least until the sum of their probabilities equals the top-p value. For example, if tokens A, B, and C have a probability of 0.3, 0.2, and 0.1 and the top-p value is 0.5, then the model will select either A or B as the next token (using temperature) and doesn't consider C. The default top-p value is 0.95. Specify a lower value for less random responses and a higher value for more random responses. Acceptable value is [0.0, 1.0], default to 0.95.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/dialogflow_generator#top_p DialogflowGenerator#top_p}
  */
  readonly topP?: number;
}

export function dialogflowGeneratorInferenceParameterToTerraform(struct?: DialogflowGeneratorInferenceParameterOutputReference | DialogflowGeneratorInferenceParameter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_output_tokens: cdktn.numberToTerraform(struct!.maxOutputTokens),
    temperature: cdktn.numberToTerraform(struct!.temperature),
    top_k: cdktn.numberToTerraform(struct!.topK),
    top_p: cdktn.numberToTerraform(struct!.topP),
  }
}


export function dialogflowGeneratorInferenceParameterToHclTerraform(struct?: DialogflowGeneratorInferenceParameterOutputReference | DialogflowGeneratorInferenceParameter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_output_tokens: {
      value: cdktn.numberToHclTerraform(struct!.maxOutputTokens),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    temperature: {
      value: cdktn.numberToHclTerraform(struct!.temperature),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    top_k: {
      value: cdktn.numberToHclTerraform(struct!.topK),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    top_p: {
      value: cdktn.numberToHclTerraform(struct!.topP),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowGeneratorInferenceParameterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowGeneratorInferenceParameter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxOutputTokens !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxOutputTokens = this._maxOutputTokens;
    }
    if (this._temperature !== undefined) {
      hasAnyValues = true;
      internalValueResult.temperature = this._temperature;
    }
    if (this._topK !== undefined) {
      hasAnyValues = true;
      internalValueResult.topK = this._topK;
    }
    if (this._topP !== undefined) {
      hasAnyValues = true;
      internalValueResult.topP = this._topP;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowGeneratorInferenceParameter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxOutputTokens = undefined;
      this._temperature = undefined;
      this._topK = undefined;
      this._topP = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxOutputTokens = value.maxOutputTokens;
      this._temperature = value.temperature;
      this._topK = value.topK;
      this._topP = value.topP;
    }
  }

  // max_output_tokens - computed: false, optional: true, required: false
  private _maxOutputTokens?: number; 
  public get maxOutputTokens() {
    return this.getNumberAttribute('max_output_tokens');
  }
  public set maxOutputTokens(value: number) {
    this._maxOutputTokens = value;
  }
  public resetMaxOutputTokens() {
    this._maxOutputTokens = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxOutputTokensInput() {
    return this._maxOutputTokens;
  }

  // temperature - computed: false, optional: true, required: false
  private _temperature?: number; 
  public get temperature() {
    return this.getNumberAttribute('temperature');
  }
  public set temperature(value: number) {
    this._temperature = value;
  }
  public resetTemperature() {
    this._temperature = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get temperatureInput() {
    return this._temperature;
  }

  // top_k - computed: false, optional: true, required: false
  private _topK?: number; 
  public get topK() {
    return this.getNumberAttribute('top_k');
  }
  public set topK(value: number) {
    this._topK = value;
  }
  public resetTopK() {
    this._topK = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topKInput() {
    return this._topK;
  }

  // top_p - computed: false, optional: true, required: false
  private _topP?: number; 
  public get topP() {
    return this.getNumberAttribute('top_p');
  }
  public set topP(value: number) {
    this._topP = value;
  }
  public resetTopP() {
    this._topP = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topPInput() {
    return this._topP;
  }
}
export interface DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries {
  /**
  * Optional. Create time of the message entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/dialogflow_generator#create_time DialogflowGenerator#create_time}
  */
  readonly createTime?: string;
  /**
  * Optional. The language of the text.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/dialogflow_generator#language_code DialogflowGenerator#language_code}
  */
  readonly languageCode?: string;
  /**
  * Optional. Participant role of the message. Possible values: ["HUMAN_AGENT", "AUTOMATED_AGENT", "END_USER"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/dialogflow_generator#role DialogflowGenerator#role}
  */
  readonly role?: string;
  /**
  * Optional. Transcript content of the message.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/dialogflow_generator#text DialogflowGenerator#text}
  */
  readonly text?: string;
}

export function dialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesToTerraform(struct?: DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    create_time: cdktn.stringToTerraform(struct!.createTime),
    language_code: cdktn.stringToTerraform(struct!.languageCode),
    role: cdktn.stringToTerraform(struct!.role),
    text: cdktn.stringToTerraform(struct!.text),
  }
}


export function dialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesToHclTerraform(struct?: DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    create_time: {
      value: cdktn.stringToHclTerraform(struct!.createTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    language_code: {
      value: cdktn.stringToHclTerraform(struct!.languageCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role: {
      value: cdktn.stringToHclTerraform(struct!.role),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._createTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.createTime = this._createTime;
    }
    if (this._languageCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.languageCode = this._languageCode;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._createTime = undefined;
      this._languageCode = undefined;
      this._role = undefined;
      this._text = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._createTime = value.createTime;
      this._languageCode = value.languageCode;
      this._role = value.role;
      this._text = value.text;
    }
  }

  // create_time - computed: false, optional: true, required: false
  private _createTime?: string; 
  public get createTime() {
    return this.getStringAttribute('create_time');
  }
  public set createTime(value: string) {
    this._createTime = value;
  }
  public resetCreateTime() {
    this._createTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createTimeInput() {
    return this._createTime;
  }

  // language_code - computed: false, optional: true, required: false
  private _languageCode?: string; 
  public get languageCode() {
    return this.getStringAttribute('language_code');
  }
  public set languageCode(value: string) {
    this._languageCode = value;
  }
  public resetLanguageCode() {
    this._languageCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get languageCodeInput() {
    return this._languageCode;
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
}

export class DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList extends cdktn.ComplexList {
  public internalValue? : DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries[] | cdktn.IResolvable

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
  public get(index: number): DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference {
    return new DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DialogflowGeneratorSummarizationContextFewShotExamplesConversationContext {
  /**
  * message_entries block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/dialogflow_generator#message_entries DialogflowGenerator#message_entries}
  */
  readonly messageEntries?: DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries[] | cdktn.IResolvable;
}

export function dialogflowGeneratorSummarizationContextFewShotExamplesConversationContextToTerraform(struct?: DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference | DialogflowGeneratorSummarizationContextFewShotExamplesConversationContext): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    message_entries: cdktn.listMapper(dialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesToTerraform, true)(struct!.messageEntries),
  }
}


export function dialogflowGeneratorSummarizationContextFewShotExamplesConversationContextToHclTerraform(struct?: DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference | DialogflowGeneratorSummarizationContextFewShotExamplesConversationContext): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    message_entries: {
      value: cdktn.listMapperHcl(dialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesToHclTerraform, true)(struct!.messageEntries),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowGeneratorSummarizationContextFewShotExamplesConversationContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._messageEntries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageEntries = this._messageEntries?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowGeneratorSummarizationContextFewShotExamplesConversationContext | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._messageEntries.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._messageEntries.internalValue = value.messageEntries;
    }
  }

  // message_entries - computed: false, optional: true, required: false
  private _messageEntries = new DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList(this, "message_entries", false);
  public get messageEntries() {
    return this._messageEntries;
  }
  public putMessageEntries(value: DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries[] | cdktn.IResolvable) {
    this._messageEntries.internalValue = value;
  }
  public resetMessageEntries() {
    this._messageEntries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageEntriesInput() {
    return this._messageEntries.internalValue;
  }
}
export interface DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySections {
  /**
  * Required. Name of the section.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/dialogflow_generator#section DialogflowGenerator#section}
  */
  readonly section: string;
  /**
  * Required. Summary text for the section.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/dialogflow_generator#summary DialogflowGenerator#summary}
  */
  readonly summary: string;
}

export function dialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsToTerraform(struct?: DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySections | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    section: cdktn.stringToTerraform(struct!.section),
    summary: cdktn.stringToTerraform(struct!.summary),
  }
}


export function dialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsToHclTerraform(struct?: DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySections | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    section: {
      value: cdktn.stringToHclTerraform(struct!.section),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    summary: {
      value: cdktn.stringToHclTerraform(struct!.summary),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySections | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._section !== undefined) {
      hasAnyValues = true;
      internalValueResult.section = this._section;
    }
    if (this._summary !== undefined) {
      hasAnyValues = true;
      internalValueResult.summary = this._summary;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySections | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._section = undefined;
      this._summary = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._section = value.section;
      this._summary = value.summary;
    }
  }

  // section - computed: false, optional: false, required: true
  private _section?: string; 
  public get section() {
    return this.getStringAttribute('section');
  }
  public set section(value: string) {
    this._section = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sectionInput() {
    return this._section;
  }

  // summary - computed: false, optional: false, required: true
  private _summary?: string; 
  public get summary() {
    return this.getStringAttribute('summary');
  }
  public set summary(value: string) {
    this._summary = value;
  }
  // Temporarily expose input value. Use with caution.
  public get summaryInput() {
    return this._summary;
  }
}

export class DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList extends cdktn.ComplexList {
  public internalValue? : DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySections[] | cdktn.IResolvable

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
  public get(index: number): DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference {
    return new DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestion {
  /**
  * summary_sections block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/dialogflow_generator#summary_sections DialogflowGenerator#summary_sections}
  */
  readonly summarySections: DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySections[] | cdktn.IResolvable;
}

export function dialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionToTerraform(struct?: DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference | DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestion): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    summary_sections: cdktn.listMapper(dialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsToTerraform, true)(struct!.summarySections),
  }
}


export function dialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionToHclTerraform(struct?: DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference | DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestion): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    summary_sections: {
      value: cdktn.listMapperHcl(dialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsToHclTerraform, true)(struct!.summarySections),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestion | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._summarySections?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.summarySections = this._summarySections?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestion | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._summarySections.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._summarySections.internalValue = value.summarySections;
    }
  }

  // summary_sections - computed: false, optional: false, required: true
  private _summarySections = new DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList(this, "summary_sections", false);
  public get summarySections() {
    return this._summarySections;
  }
  public putSummarySections(value: DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySections[] | cdktn.IResolvable) {
    this._summarySections.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get summarySectionsInput() {
    return this._summarySections.internalValue;
  }
}
export interface DialogflowGeneratorSummarizationContextFewShotExamplesOutput {
  /**
  * summary_suggestion block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/dialogflow_generator#summary_suggestion DialogflowGenerator#summary_suggestion}
  */
  readonly summarySuggestion?: DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestion;
}

export function dialogflowGeneratorSummarizationContextFewShotExamplesOutputToTerraform(struct?: DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference | DialogflowGeneratorSummarizationContextFewShotExamplesOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    summary_suggestion: dialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionToTerraform(struct!.summarySuggestion),
  }
}


export function dialogflowGeneratorSummarizationContextFewShotExamplesOutputToHclTerraform(struct?: DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference | DialogflowGeneratorSummarizationContextFewShotExamplesOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    summary_suggestion: {
      value: dialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionToHclTerraform(struct!.summarySuggestion),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowGeneratorSummarizationContextFewShotExamplesOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._summarySuggestion?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.summarySuggestion = this._summarySuggestion?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowGeneratorSummarizationContextFewShotExamplesOutput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._summarySuggestion.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._summarySuggestion.internalValue = value.summarySuggestion;
    }
  }

  // summary_suggestion - computed: false, optional: true, required: false
  private _summarySuggestion = new DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference(this, "summary_suggestion");
  public get summarySuggestion() {
    return this._summarySuggestion;
  }
  public putSummarySuggestion(value: DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestion) {
    this._summarySuggestion.internalValue = value;
  }
  public resetSummarySuggestion() {
    this._summarySuggestion.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get summarySuggestionInput() {
    return this._summarySuggestion.internalValue;
  }
}
export interface DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSections {
  /**
  * Optional. Definition of the section, for example, "what the customer needs help with or has question about."
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/dialogflow_generator#definition DialogflowGenerator#definition}
  */
  readonly definition?: string;
  /**
  * Optional. Name of the section, for example, "situation".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/dialogflow_generator#key DialogflowGenerator#key}
  */
  readonly key?: string;
  /**
  * Optional. Type of the summarization section. Possible values: ["SITUATION", "ACTION", "RESOLUTION", "REASON_FOR_CANCELLATION", "CUSTOMER_SATISFACTION", "ENTITIES", "CUSTOMER_DEFINED", "SITUATION_CONCISE", "ACTION_CONCISE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/dialogflow_generator#type DialogflowGenerator#type}
  */
  readonly type?: string;
}

export function dialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsToTerraform(struct?: DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSections | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    definition: cdktn.stringToTerraform(struct!.definition),
    key: cdktn.stringToTerraform(struct!.key),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function dialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsToHclTerraform(struct?: DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSections | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    definition: {
      value: cdktn.stringToHclTerraform(struct!.definition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSections | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._definition !== undefined) {
      hasAnyValues = true;
      internalValueResult.definition = this._definition;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSections | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._definition = undefined;
      this._key = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._definition = value.definition;
      this._key = value.key;
      this._type = value.type;
    }
  }

  // definition - computed: false, optional: true, required: false
  private _definition?: string; 
  public get definition() {
    return this.getStringAttribute('definition');
  }
  public set definition(value: string) {
    this._definition = value;
  }
  public resetDefinition() {
    this._definition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionInput() {
    return this._definition;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList extends cdktn.ComplexList {
  public internalValue? : DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSections[] | cdktn.IResolvable

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
  public get(index: number): DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference {
    return new DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStruct {
  /**
  * summarization_sections block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/dialogflow_generator#summarization_sections DialogflowGenerator#summarization_sections}
  */
  readonly summarizationSections?: DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSections[] | cdktn.IResolvable;
}

export function dialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructToTerraform(struct?: DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference | DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    summarization_sections: cdktn.listMapper(dialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsToTerraform, true)(struct!.summarizationSections),
  }
}


export function dialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructToHclTerraform(struct?: DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference | DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    summarization_sections: {
      value: cdktn.listMapperHcl(dialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsToHclTerraform, true)(struct!.summarizationSections),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._summarizationSections?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.summarizationSections = this._summarizationSections?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._summarizationSections.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._summarizationSections.internalValue = value.summarizationSections;
    }
  }

  // summarization_sections - computed: false, optional: true, required: false
  private _summarizationSections = new DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList(this, "summarization_sections", false);
  public get summarizationSections() {
    return this._summarizationSections;
  }
  public putSummarizationSections(value: DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSections[] | cdktn.IResolvable) {
    this._summarizationSections.internalValue = value;
  }
  public resetSummarizationSections() {
    this._summarizationSections.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get summarizationSectionsInput() {
    return this._summarizationSections.internalValue;
  }
}
export interface DialogflowGeneratorSummarizationContextFewShotExamples {
  /**
  * Optional. Key is the placeholder field name in input, value is the value of the placeholder. E.g. instruction contains "@price", and ingested data has <"price", "10">
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/dialogflow_generator#extra_info DialogflowGenerator#extra_info}
  */
  readonly extraInfo?: { [key: string]: string };
  /**
  * conversation_context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/dialogflow_generator#conversation_context DialogflowGenerator#conversation_context}
  */
  readonly conversationContext?: DialogflowGeneratorSummarizationContextFewShotExamplesConversationContext;
  /**
  * output block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/dialogflow_generator#output DialogflowGenerator#output}
  */
  readonly output: DialogflowGeneratorSummarizationContextFewShotExamplesOutput;
  /**
  * summarization_section_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/dialogflow_generator#summarization_section_list DialogflowGenerator#summarization_section_list}
  */
  readonly summarizationSectionList?: DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStruct;
}

export function dialogflowGeneratorSummarizationContextFewShotExamplesToTerraform(struct?: DialogflowGeneratorSummarizationContextFewShotExamples | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    extra_info: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.extraInfo),
    conversation_context: dialogflowGeneratorSummarizationContextFewShotExamplesConversationContextToTerraform(struct!.conversationContext),
    output: dialogflowGeneratorSummarizationContextFewShotExamplesOutputToTerraform(struct!.output),
    summarization_section_list: dialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructToTerraform(struct!.summarizationSectionList),
  }
}


export function dialogflowGeneratorSummarizationContextFewShotExamplesToHclTerraform(struct?: DialogflowGeneratorSummarizationContextFewShotExamples | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    extra_info: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.extraInfo),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    conversation_context: {
      value: dialogflowGeneratorSummarizationContextFewShotExamplesConversationContextToHclTerraform(struct!.conversationContext),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextList",
    },
    output: {
      value: dialogflowGeneratorSummarizationContextFewShotExamplesOutputToHclTerraform(struct!.output),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowGeneratorSummarizationContextFewShotExamplesOutputList",
    },
    summarization_section_list: {
      value: dialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructToHclTerraform(struct!.summarizationSectionList),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DialogflowGeneratorSummarizationContextFewShotExamples | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._extraInfo !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraInfo = this._extraInfo;
    }
    if (this._conversationContext?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conversationContext = this._conversationContext?.internalValue;
    }
    if (this._output?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.output = this._output?.internalValue;
    }
    if (this._summarizationSectionList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.summarizationSectionList = this._summarizationSectionList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowGeneratorSummarizationContextFewShotExamples | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._extraInfo = undefined;
      this._conversationContext.internalValue = undefined;
      this._output.internalValue = undefined;
      this._summarizationSectionList.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._extraInfo = value.extraInfo;
      this._conversationContext.internalValue = value.conversationContext;
      this._output.internalValue = value.output;
      this._summarizationSectionList.internalValue = value.summarizationSectionList;
    }
  }

  // extra_info - computed: false, optional: true, required: false
  private _extraInfo?: { [key: string]: string }; 
  public get extraInfo() {
    return this.getStringMapAttribute('extra_info');
  }
  public set extraInfo(value: { [key: string]: string }) {
    this._extraInfo = value;
  }
  public resetExtraInfo() {
    this._extraInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraInfoInput() {
    return this._extraInfo;
  }

  // conversation_context - computed: false, optional: true, required: false
  private _conversationContext = new DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference(this, "conversation_context");
  public get conversationContext() {
    return this._conversationContext;
  }
  public putConversationContext(value: DialogflowGeneratorSummarizationContextFewShotExamplesConversationContext) {
    this._conversationContext.internalValue = value;
  }
  public resetConversationContext() {
    this._conversationContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conversationContextInput() {
    return this._conversationContext.internalValue;
  }

  // output - computed: false, optional: false, required: true
  private _output = new DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference(this, "output");
  public get output() {
    return this._output;
  }
  public putOutput(value: DialogflowGeneratorSummarizationContextFewShotExamplesOutput) {
    this._output.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outputInput() {
    return this._output.internalValue;
  }

  // summarization_section_list - computed: false, optional: true, required: false
  private _summarizationSectionList = new DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference(this, "summarization_section_list");
  public get summarizationSectionList() {
    return this._summarizationSectionList;
  }
  public putSummarizationSectionList(value: DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStruct) {
    this._summarizationSectionList.internalValue = value;
  }
  public resetSummarizationSectionList() {
    this._summarizationSectionList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get summarizationSectionListInput() {
    return this._summarizationSectionList.internalValue;
  }
}

export class DialogflowGeneratorSummarizationContextFewShotExamplesList extends cdktn.ComplexList {
  public internalValue? : DialogflowGeneratorSummarizationContextFewShotExamples[] | cdktn.IResolvable

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
  public get(index: number): DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference {
    return new DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DialogflowGeneratorSummarizationContextSummarizationSections {
  /**
  * Optional. Definition of the section, for example, "what the customer needs help with or has question about."
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/dialogflow_generator#definition DialogflowGenerator#definition}
  */
  readonly definition?: string;
  /**
  * Optional. Name of the section, for example, "situation".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/dialogflow_generator#key DialogflowGenerator#key}
  */
  readonly key?: string;
  /**
  * Optional. Type of the summarization section. Possible values: ["SITUATION", "ACTION", "RESOLUTION", "REASON_FOR_CANCELLATION", "CUSTOMER_SATISFACTION", "ENTITIES", "CUSTOMER_DEFINED", "SITUATION_CONCISE", "ACTION_CONCISE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/dialogflow_generator#type DialogflowGenerator#type}
  */
  readonly type?: string;
}

export function dialogflowGeneratorSummarizationContextSummarizationSectionsToTerraform(struct?: DialogflowGeneratorSummarizationContextSummarizationSections | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    definition: cdktn.stringToTerraform(struct!.definition),
    key: cdktn.stringToTerraform(struct!.key),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function dialogflowGeneratorSummarizationContextSummarizationSectionsToHclTerraform(struct?: DialogflowGeneratorSummarizationContextSummarizationSections | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    definition: {
      value: cdktn.stringToHclTerraform(struct!.definition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DialogflowGeneratorSummarizationContextSummarizationSections | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._definition !== undefined) {
      hasAnyValues = true;
      internalValueResult.definition = this._definition;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowGeneratorSummarizationContextSummarizationSections | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._definition = undefined;
      this._key = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._definition = value.definition;
      this._key = value.key;
      this._type = value.type;
    }
  }

  // definition - computed: false, optional: true, required: false
  private _definition?: string; 
  public get definition() {
    return this.getStringAttribute('definition');
  }
  public set definition(value: string) {
    this._definition = value;
  }
  public resetDefinition() {
    this._definition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionInput() {
    return this._definition;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class DialogflowGeneratorSummarizationContextSummarizationSectionsList extends cdktn.ComplexList {
  public internalValue? : DialogflowGeneratorSummarizationContextSummarizationSections[] | cdktn.IResolvable

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
  public get(index: number): DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference {
    return new DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DialogflowGeneratorSummarizationContext {
  /**
  * Optional. The target language of the generated summary. The language code for conversation will be used if this field is empty. Supported 2.0 and later versions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/dialogflow_generator#output_language_code DialogflowGenerator#output_language_code}
  */
  readonly outputLanguageCode?: string;
  /**
  * Optional. Version of the feature. If not set, default to latest version. Current candidates are ["1.0"].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/dialogflow_generator#version DialogflowGenerator#version}
  */
  readonly version?: string;
  /**
  * few_shot_examples block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/dialogflow_generator#few_shot_examples DialogflowGenerator#few_shot_examples}
  */
  readonly fewShotExamples?: DialogflowGeneratorSummarizationContextFewShotExamples[] | cdktn.IResolvable;
  /**
  * summarization_sections block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/dialogflow_generator#summarization_sections DialogflowGenerator#summarization_sections}
  */
  readonly summarizationSections?: DialogflowGeneratorSummarizationContextSummarizationSections[] | cdktn.IResolvable;
}

export function dialogflowGeneratorSummarizationContextToTerraform(struct?: DialogflowGeneratorSummarizationContextOutputReference | DialogflowGeneratorSummarizationContext): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    output_language_code: cdktn.stringToTerraform(struct!.outputLanguageCode),
    version: cdktn.stringToTerraform(struct!.version),
    few_shot_examples: cdktn.listMapper(dialogflowGeneratorSummarizationContextFewShotExamplesToTerraform, true)(struct!.fewShotExamples),
    summarization_sections: cdktn.listMapper(dialogflowGeneratorSummarizationContextSummarizationSectionsToTerraform, true)(struct!.summarizationSections),
  }
}


export function dialogflowGeneratorSummarizationContextToHclTerraform(struct?: DialogflowGeneratorSummarizationContextOutputReference | DialogflowGeneratorSummarizationContext): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    output_language_code: {
      value: cdktn.stringToHclTerraform(struct!.outputLanguageCode),
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
    few_shot_examples: {
      value: cdktn.listMapperHcl(dialogflowGeneratorSummarizationContextFewShotExamplesToHclTerraform, true)(struct!.fewShotExamples),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowGeneratorSummarizationContextFewShotExamplesList",
    },
    summarization_sections: {
      value: cdktn.listMapperHcl(dialogflowGeneratorSummarizationContextSummarizationSectionsToHclTerraform, true)(struct!.summarizationSections),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowGeneratorSummarizationContextSummarizationSectionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowGeneratorSummarizationContextOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowGeneratorSummarizationContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._outputLanguageCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputLanguageCode = this._outputLanguageCode;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._fewShotExamples?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fewShotExamples = this._fewShotExamples?.internalValue;
    }
    if (this._summarizationSections?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.summarizationSections = this._summarizationSections?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowGeneratorSummarizationContext | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._outputLanguageCode = undefined;
      this._version = undefined;
      this._fewShotExamples.internalValue = undefined;
      this._summarizationSections.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._outputLanguageCode = value.outputLanguageCode;
      this._version = value.version;
      this._fewShotExamples.internalValue = value.fewShotExamples;
      this._summarizationSections.internalValue = value.summarizationSections;
    }
  }

  // output_language_code - computed: false, optional: true, required: false
  private _outputLanguageCode?: string; 
  public get outputLanguageCode() {
    return this.getStringAttribute('output_language_code');
  }
  public set outputLanguageCode(value: string) {
    this._outputLanguageCode = value;
  }
  public resetOutputLanguageCode() {
    this._outputLanguageCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputLanguageCodeInput() {
    return this._outputLanguageCode;
  }

  // version - computed: true, optional: true, required: false
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

  // few_shot_examples - computed: false, optional: true, required: false
  private _fewShotExamples = new DialogflowGeneratorSummarizationContextFewShotExamplesList(this, "few_shot_examples", false);
  public get fewShotExamples() {
    return this._fewShotExamples;
  }
  public putFewShotExamples(value: DialogflowGeneratorSummarizationContextFewShotExamples[] | cdktn.IResolvable) {
    this._fewShotExamples.internalValue = value;
  }
  public resetFewShotExamples() {
    this._fewShotExamples.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fewShotExamplesInput() {
    return this._fewShotExamples.internalValue;
  }

  // summarization_sections - computed: false, optional: true, required: false
  private _summarizationSections = new DialogflowGeneratorSummarizationContextSummarizationSectionsList(this, "summarization_sections", false);
  public get summarizationSections() {
    return this._summarizationSections;
  }
  public putSummarizationSections(value: DialogflowGeneratorSummarizationContextSummarizationSections[] | cdktn.IResolvable) {
    this._summarizationSections.internalValue = value;
  }
  public resetSummarizationSections() {
    this._summarizationSections.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get summarizationSectionsInput() {
    return this._summarizationSections.internalValue;
  }
}
export interface DialogflowGeneratorTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/dialogflow_generator#create DialogflowGenerator#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/dialogflow_generator#delete DialogflowGenerator#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/dialogflow_generator#update DialogflowGenerator#update}
  */
  readonly update?: string;
}

export function dialogflowGeneratorTimeoutsToTerraform(struct?: DialogflowGeneratorTimeouts | cdktn.IResolvable): any {
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


export function dialogflowGeneratorTimeoutsToHclTerraform(struct?: DialogflowGeneratorTimeouts | cdktn.IResolvable): any {
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

export class DialogflowGeneratorTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DialogflowGeneratorTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DialogflowGeneratorTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/dialogflow_generator google_dialogflow_generator}
*/
export class DialogflowGenerator extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_dialogflow_generator";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DialogflowGenerator resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DialogflowGenerator to import
  * @param importFromId The id of the existing DialogflowGenerator that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/dialogflow_generator#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DialogflowGenerator to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_dialogflow_generator", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/dialogflow_generator google_dialogflow_generator} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DialogflowGeneratorConfig
  */
  public constructor(scope: Construct, id: string, config: DialogflowGeneratorConfig) {
    super(scope, id, {
      terraformResourceType: 'google_dialogflow_generator',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.37.0',
        providerVersionConstraint: '~> 7.0'
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
    this._generatorId = config.generatorId;
    this._id = config.id;
    this._location = config.location;
    this._project = config.project;
    this._publishedModel = config.publishedModel;
    this._triggerEvent = config.triggerEvent;
    this._inferenceParameter.internalValue = config.inferenceParameter;
    this._summarizationContext.internalValue = config.summarizationContext;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // generator_id - computed: true, optional: true, required: false
  private _generatorId?: string; 
  public get generatorId() {
    return this.getStringAttribute('generator_id');
  }
  public set generatorId(value: string) {
    this._generatorId = value;
  }
  public resetGeneratorId() {
    this._generatorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generatorIdInput() {
    return this._generatorId;
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

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
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

  // published_model - computed: false, optional: true, required: false
  private _publishedModel?: string; 
  public get publishedModel() {
    return this.getStringAttribute('published_model');
  }
  public set publishedModel(value: string) {
    this._publishedModel = value;
  }
  public resetPublishedModel() {
    this._publishedModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publishedModelInput() {
    return this._publishedModel;
  }

  // trigger_event - computed: false, optional: true, required: false
  private _triggerEvent?: string; 
  public get triggerEvent() {
    return this.getStringAttribute('trigger_event');
  }
  public set triggerEvent(value: string) {
    this._triggerEvent = value;
  }
  public resetTriggerEvent() {
    this._triggerEvent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerEventInput() {
    return this._triggerEvent;
  }

  // inference_parameter - computed: false, optional: true, required: false
  private _inferenceParameter = new DialogflowGeneratorInferenceParameterOutputReference(this, "inference_parameter");
  public get inferenceParameter() {
    return this._inferenceParameter;
  }
  public putInferenceParameter(value: DialogflowGeneratorInferenceParameter) {
    this._inferenceParameter.internalValue = value;
  }
  public resetInferenceParameter() {
    this._inferenceParameter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inferenceParameterInput() {
    return this._inferenceParameter.internalValue;
  }

  // summarization_context - computed: false, optional: false, required: true
  private _summarizationContext = new DialogflowGeneratorSummarizationContextOutputReference(this, "summarization_context");
  public get summarizationContext() {
    return this._summarizationContext;
  }
  public putSummarizationContext(value: DialogflowGeneratorSummarizationContext) {
    this._summarizationContext.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get summarizationContextInput() {
    return this._summarizationContext.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DialogflowGeneratorTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DialogflowGeneratorTimeouts) {
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
      generator_id: cdktn.stringToTerraform(this._generatorId),
      id: cdktn.stringToTerraform(this._id),
      location: cdktn.stringToTerraform(this._location),
      project: cdktn.stringToTerraform(this._project),
      published_model: cdktn.stringToTerraform(this._publishedModel),
      trigger_event: cdktn.stringToTerraform(this._triggerEvent),
      inference_parameter: dialogflowGeneratorInferenceParameterToTerraform(this._inferenceParameter.internalValue),
      summarization_context: dialogflowGeneratorSummarizationContextToTerraform(this._summarizationContext.internalValue),
      timeouts: dialogflowGeneratorTimeoutsToTerraform(this._timeouts.internalValue),
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
      generator_id: {
        value: cdktn.stringToHclTerraform(this._generatorId),
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
      location: {
        value: cdktn.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project: {
        value: cdktn.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      published_model: {
        value: cdktn.stringToHclTerraform(this._publishedModel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trigger_event: {
        value: cdktn.stringToHclTerraform(this._triggerEvent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      inference_parameter: {
        value: dialogflowGeneratorInferenceParameterToHclTerraform(this._inferenceParameter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DialogflowGeneratorInferenceParameterList",
      },
      summarization_context: {
        value: dialogflowGeneratorSummarizationContextToHclTerraform(this._summarizationContext.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DialogflowGeneratorSummarizationContextList",
      },
      timeouts: {
        value: dialogflowGeneratorTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DialogflowGeneratorTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
