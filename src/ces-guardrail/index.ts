/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_guardrail
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface CesGuardrailConfig extends cdktn.TerraformMetaArguments {
  /**
  * Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_guardrail#app CesGuardrail#app}
  */
  readonly app: string;
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_guardrail#deletion_policy CesGuardrail#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Description of the guardrail.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_guardrail#description CesGuardrail#description}
  */
  readonly description?: string;
  /**
  * Display name of the guardrail.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_guardrail#display_name CesGuardrail#display_name}
  */
  readonly displayName: string;
  /**
  * Whether the guardrail is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_guardrail#enabled CesGuardrail#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * The ID to use for the guardrail, which will become the final component of
  * the guardrail's resource name. If not provided, a unique ID will be
  * automatically assigned for the guardrail.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_guardrail#guardrail_id CesGuardrail#guardrail_id}
  */
  readonly guardrailId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_guardrail#id CesGuardrail#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_guardrail#location CesGuardrail#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_guardrail#project CesGuardrail#project}
  */
  readonly project?: string;
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_guardrail#action CesGuardrail#action}
  */
  readonly action?: CesGuardrailAction;
  /**
  * code_callback block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_guardrail#code_callback CesGuardrail#code_callback}
  */
  readonly codeCallback?: CesGuardrailCodeCallback;
  /**
  * content_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_guardrail#content_filter CesGuardrail#content_filter}
  */
  readonly contentFilter?: CesGuardrailContentFilter;
  /**
  * llm_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_guardrail#llm_policy CesGuardrail#llm_policy}
  */
  readonly llmPolicy?: CesGuardrailLlmPolicy;
  /**
  * llm_prompt_security block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_guardrail#llm_prompt_security CesGuardrail#llm_prompt_security}
  */
  readonly llmPromptSecurity?: CesGuardrailLlmPromptSecurity;
  /**
  * model_safety block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_guardrail#model_safety CesGuardrail#model_safety}
  */
  readonly modelSafety?: CesGuardrailModelSafety;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_guardrail#timeouts CesGuardrail#timeouts}
  */
  readonly timeouts?: CesGuardrailTimeouts;
}
export interface CesGuardrailActionGenerativeAnswer {
  /**
  * The prompt to use for the generative answer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_guardrail#prompt CesGuardrail#prompt}
  */
  readonly prompt: string;
}

export function cesGuardrailActionGenerativeAnswerToTerraform(struct?: CesGuardrailActionGenerativeAnswerOutputReference | CesGuardrailActionGenerativeAnswer): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    prompt: cdktn.stringToTerraform(struct!.prompt),
  }
}


export function cesGuardrailActionGenerativeAnswerToHclTerraform(struct?: CesGuardrailActionGenerativeAnswerOutputReference | CesGuardrailActionGenerativeAnswer): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    prompt: {
      value: cdktn.stringToHclTerraform(struct!.prompt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CesGuardrailActionGenerativeAnswerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CesGuardrailActionGenerativeAnswer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prompt !== undefined) {
      hasAnyValues = true;
      internalValueResult.prompt = this._prompt;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesGuardrailActionGenerativeAnswer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._prompt = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._prompt = value.prompt;
    }
  }

  // prompt - computed: false, optional: false, required: true
  private _prompt?: string; 
  public get prompt() {
    return this.getStringAttribute('prompt');
  }
  public set prompt(value: string) {
    this._prompt = value;
  }
  // Temporarily expose input value. Use with caution.
  public get promptInput() {
    return this._prompt;
  }
}
export interface CesGuardrailActionRespondImmediatelyResponses {
  /**
  * Whether the response is disabled. Disabled responses are not used by the
  * agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_guardrail#disabled CesGuardrail#disabled}
  */
  readonly disabled?: boolean | cdktn.IResolvable;
  /**
  * Text for the agent to respond with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_guardrail#text CesGuardrail#text}
  */
  readonly text: string;
}

export function cesGuardrailActionRespondImmediatelyResponsesToTerraform(struct?: CesGuardrailActionRespondImmediatelyResponses | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    disabled: cdktn.booleanToTerraform(struct!.disabled),
    text: cdktn.stringToTerraform(struct!.text),
  }
}


export function cesGuardrailActionRespondImmediatelyResponsesToHclTerraform(struct?: CesGuardrailActionRespondImmediatelyResponses | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    disabled: {
      value: cdktn.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class CesGuardrailActionRespondImmediatelyResponsesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CesGuardrailActionRespondImmediatelyResponses | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesGuardrailActionRespondImmediatelyResponses | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disabled = undefined;
      this._text = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disabled = value.disabled;
      this._text = value.text;
    }
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktn.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktn.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
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
}

export class CesGuardrailActionRespondImmediatelyResponsesList extends cdktn.ComplexList {
  public internalValue? : CesGuardrailActionRespondImmediatelyResponses[] | cdktn.IResolvable

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
  public get(index: number): CesGuardrailActionRespondImmediatelyResponsesOutputReference {
    return new CesGuardrailActionRespondImmediatelyResponsesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesGuardrailActionRespondImmediately {
  /**
  * responses block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_guardrail#responses CesGuardrail#responses}
  */
  readonly responses: CesGuardrailActionRespondImmediatelyResponses[] | cdktn.IResolvable;
}

export function cesGuardrailActionRespondImmediatelyToTerraform(struct?: CesGuardrailActionRespondImmediatelyOutputReference | CesGuardrailActionRespondImmediately): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    responses: cdktn.listMapper(cesGuardrailActionRespondImmediatelyResponsesToTerraform, true)(struct!.responses),
  }
}


export function cesGuardrailActionRespondImmediatelyToHclTerraform(struct?: CesGuardrailActionRespondImmediatelyOutputReference | CesGuardrailActionRespondImmediately): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    responses: {
      value: cdktn.listMapperHcl(cesGuardrailActionRespondImmediatelyResponsesToHclTerraform, true)(struct!.responses),
      isBlock: true,
      type: "list",
      storageClassType: "CesGuardrailActionRespondImmediatelyResponsesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CesGuardrailActionRespondImmediatelyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CesGuardrailActionRespondImmediately | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._responses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.responses = this._responses?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesGuardrailActionRespondImmediately | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._responses.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._responses.internalValue = value.responses;
    }
  }

  // responses - computed: false, optional: false, required: true
  private _responses = new CesGuardrailActionRespondImmediatelyResponsesList(this, "responses", false);
  public get responses() {
    return this._responses;
  }
  public putResponses(value: CesGuardrailActionRespondImmediatelyResponses[] | cdktn.IResolvable) {
    this._responses.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get responsesInput() {
    return this._responses.internalValue;
  }
}
export interface CesGuardrailActionTransferAgent {
  /**
  * The name of the agent to transfer the conversation to. The agent must be
  * in the same app as the current agent.
  * Format:
  * 'projects/{project}/locations/{location}/apps/{app}/agents/{agent}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_guardrail#agent CesGuardrail#agent}
  */
  readonly agent: string;
}

export function cesGuardrailActionTransferAgentToTerraform(struct?: CesGuardrailActionTransferAgentOutputReference | CesGuardrailActionTransferAgent): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    agent: cdktn.stringToTerraform(struct!.agent),
  }
}


export function cesGuardrailActionTransferAgentToHclTerraform(struct?: CesGuardrailActionTransferAgentOutputReference | CesGuardrailActionTransferAgent): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    agent: {
      value: cdktn.stringToHclTerraform(struct!.agent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CesGuardrailActionTransferAgentOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CesGuardrailActionTransferAgent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agent !== undefined) {
      hasAnyValues = true;
      internalValueResult.agent = this._agent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesGuardrailActionTransferAgent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._agent = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._agent = value.agent;
    }
  }

  // agent - computed: false, optional: false, required: true
  private _agent?: string; 
  public get agent() {
    return this.getStringAttribute('agent');
  }
  public set agent(value: string) {
    this._agent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get agentInput() {
    return this._agent;
  }
}
export interface CesGuardrailAction {
  /**
  * generative_answer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_guardrail#generative_answer CesGuardrail#generative_answer}
  */
  readonly generativeAnswer?: CesGuardrailActionGenerativeAnswer;
  /**
  * respond_immediately block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_guardrail#respond_immediately CesGuardrail#respond_immediately}
  */
  readonly respondImmediately?: CesGuardrailActionRespondImmediately;
  /**
  * transfer_agent block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_guardrail#transfer_agent CesGuardrail#transfer_agent}
  */
  readonly transferAgent?: CesGuardrailActionTransferAgent;
}

export function cesGuardrailActionToTerraform(struct?: CesGuardrailActionOutputReference | CesGuardrailAction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    generative_answer: cesGuardrailActionGenerativeAnswerToTerraform(struct!.generativeAnswer),
    respond_immediately: cesGuardrailActionRespondImmediatelyToTerraform(struct!.respondImmediately),
    transfer_agent: cesGuardrailActionTransferAgentToTerraform(struct!.transferAgent),
  }
}


export function cesGuardrailActionToHclTerraform(struct?: CesGuardrailActionOutputReference | CesGuardrailAction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    generative_answer: {
      value: cesGuardrailActionGenerativeAnswerToHclTerraform(struct!.generativeAnswer),
      isBlock: true,
      type: "list",
      storageClassType: "CesGuardrailActionGenerativeAnswerList",
    },
    respond_immediately: {
      value: cesGuardrailActionRespondImmediatelyToHclTerraform(struct!.respondImmediately),
      isBlock: true,
      type: "list",
      storageClassType: "CesGuardrailActionRespondImmediatelyList",
    },
    transfer_agent: {
      value: cesGuardrailActionTransferAgentToHclTerraform(struct!.transferAgent),
      isBlock: true,
      type: "list",
      storageClassType: "CesGuardrailActionTransferAgentList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CesGuardrailActionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CesGuardrailAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._generativeAnswer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.generativeAnswer = this._generativeAnswer?.internalValue;
    }
    if (this._respondImmediately?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.respondImmediately = this._respondImmediately?.internalValue;
    }
    if (this._transferAgent?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transferAgent = this._transferAgent?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesGuardrailAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._generativeAnswer.internalValue = undefined;
      this._respondImmediately.internalValue = undefined;
      this._transferAgent.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._generativeAnswer.internalValue = value.generativeAnswer;
      this._respondImmediately.internalValue = value.respondImmediately;
      this._transferAgent.internalValue = value.transferAgent;
    }
  }

  // generative_answer - computed: false, optional: true, required: false
  private _generativeAnswer = new CesGuardrailActionGenerativeAnswerOutputReference(this, "generative_answer");
  public get generativeAnswer() {
    return this._generativeAnswer;
  }
  public putGenerativeAnswer(value: CesGuardrailActionGenerativeAnswer) {
    this._generativeAnswer.internalValue = value;
  }
  public resetGenerativeAnswer() {
    this._generativeAnswer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generativeAnswerInput() {
    return this._generativeAnswer.internalValue;
  }

  // respond_immediately - computed: false, optional: true, required: false
  private _respondImmediately = new CesGuardrailActionRespondImmediatelyOutputReference(this, "respond_immediately");
  public get respondImmediately() {
    return this._respondImmediately;
  }
  public putRespondImmediately(value: CesGuardrailActionRespondImmediately) {
    this._respondImmediately.internalValue = value;
  }
  public resetRespondImmediately() {
    this._respondImmediately.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get respondImmediatelyInput() {
    return this._respondImmediately.internalValue;
  }

  // transfer_agent - computed: false, optional: true, required: false
  private _transferAgent = new CesGuardrailActionTransferAgentOutputReference(this, "transfer_agent");
  public get transferAgent() {
    return this._transferAgent;
  }
  public putTransferAgent(value: CesGuardrailActionTransferAgent) {
    this._transferAgent.internalValue = value;
  }
  public resetTransferAgent() {
    this._transferAgent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transferAgentInput() {
    return this._transferAgent.internalValue;
  }
}
export interface CesGuardrailCodeCallbackAfterAgentCallback {
  /**
  * Human-readable description of the callback.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_guardrail#description CesGuardrail#description}
  */
  readonly description?: string;
  /**
  * Whether the callback is disabled. Disabled callbacks are ignored by the
  * agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_guardrail#disabled CesGuardrail#disabled}
  */
  readonly disabled?: boolean | cdktn.IResolvable;
  /**
  * The python code to execute for the callback.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_guardrail#python_code CesGuardrail#python_code}
  */
  readonly pythonCode: string;
}

export function cesGuardrailCodeCallbackAfterAgentCallbackToTerraform(struct?: CesGuardrailCodeCallbackAfterAgentCallbackOutputReference | CesGuardrailCodeCallbackAfterAgentCallback): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    disabled: cdktn.booleanToTerraform(struct!.disabled),
    python_code: cdktn.stringToTerraform(struct!.pythonCode),
  }
}


export function cesGuardrailCodeCallbackAfterAgentCallbackToHclTerraform(struct?: CesGuardrailCodeCallbackAfterAgentCallbackOutputReference | CesGuardrailCodeCallbackAfterAgentCallback): any {
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
    disabled: {
      value: cdktn.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    python_code: {
      value: cdktn.stringToHclTerraform(struct!.pythonCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CesGuardrailCodeCallbackAfterAgentCallbackOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CesGuardrailCodeCallbackAfterAgentCallback | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._pythonCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.pythonCode = this._pythonCode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesGuardrailCodeCallbackAfterAgentCallback | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._disabled = undefined;
      this._pythonCode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._disabled = value.disabled;
      this._pythonCode = value.pythonCode;
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

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktn.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktn.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // python_code - computed: false, optional: false, required: true
  private _pythonCode?: string; 
  public get pythonCode() {
    return this.getStringAttribute('python_code');
  }
  public set pythonCode(value: string) {
    this._pythonCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pythonCodeInput() {
    return this._pythonCode;
  }
}
export interface CesGuardrailCodeCallbackAfterModelCallback {
  /**
  * Human-readable description of the callback.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_guardrail#description CesGuardrail#description}
  */
  readonly description?: string;
  /**
  * Whether the callback is disabled. Disabled callbacks are ignored by the
  * agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_guardrail#disabled CesGuardrail#disabled}
  */
  readonly disabled?: boolean | cdktn.IResolvable;
  /**
  * The python code to execute for the callback.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_guardrail#python_code CesGuardrail#python_code}
  */
  readonly pythonCode: string;
}

export function cesGuardrailCodeCallbackAfterModelCallbackToTerraform(struct?: CesGuardrailCodeCallbackAfterModelCallbackOutputReference | CesGuardrailCodeCallbackAfterModelCallback): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    disabled: cdktn.booleanToTerraform(struct!.disabled),
    python_code: cdktn.stringToTerraform(struct!.pythonCode),
  }
}


export function cesGuardrailCodeCallbackAfterModelCallbackToHclTerraform(struct?: CesGuardrailCodeCallbackAfterModelCallbackOutputReference | CesGuardrailCodeCallbackAfterModelCallback): any {
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
    disabled: {
      value: cdktn.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    python_code: {
      value: cdktn.stringToHclTerraform(struct!.pythonCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CesGuardrailCodeCallbackAfterModelCallbackOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CesGuardrailCodeCallbackAfterModelCallback | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._pythonCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.pythonCode = this._pythonCode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesGuardrailCodeCallbackAfterModelCallback | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._disabled = undefined;
      this._pythonCode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._disabled = value.disabled;
      this._pythonCode = value.pythonCode;
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

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktn.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktn.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // python_code - computed: false, optional: false, required: true
  private _pythonCode?: string; 
  public get pythonCode() {
    return this.getStringAttribute('python_code');
  }
  public set pythonCode(value: string) {
    this._pythonCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pythonCodeInput() {
    return this._pythonCode;
  }
}
export interface CesGuardrailCodeCallbackBeforeAgentCallback {
  /**
  * Human-readable description of the callback.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_guardrail#description CesGuardrail#description}
  */
  readonly description?: string;
  /**
  * Whether the callback is disabled. Disabled callbacks are ignored by the
  * agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_guardrail#disabled CesGuardrail#disabled}
  */
  readonly disabled?: boolean | cdktn.IResolvable;
  /**
  * The python code to execute for the callback.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_guardrail#python_code CesGuardrail#python_code}
  */
  readonly pythonCode: string;
}

export function cesGuardrailCodeCallbackBeforeAgentCallbackToTerraform(struct?: CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference | CesGuardrailCodeCallbackBeforeAgentCallback): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    disabled: cdktn.booleanToTerraform(struct!.disabled),
    python_code: cdktn.stringToTerraform(struct!.pythonCode),
  }
}


export function cesGuardrailCodeCallbackBeforeAgentCallbackToHclTerraform(struct?: CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference | CesGuardrailCodeCallbackBeforeAgentCallback): any {
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
    disabled: {
      value: cdktn.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    python_code: {
      value: cdktn.stringToHclTerraform(struct!.pythonCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CesGuardrailCodeCallbackBeforeAgentCallback | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._pythonCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.pythonCode = this._pythonCode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesGuardrailCodeCallbackBeforeAgentCallback | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._disabled = undefined;
      this._pythonCode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._disabled = value.disabled;
      this._pythonCode = value.pythonCode;
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

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktn.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktn.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // python_code - computed: false, optional: false, required: true
  private _pythonCode?: string; 
  public get pythonCode() {
    return this.getStringAttribute('python_code');
  }
  public set pythonCode(value: string) {
    this._pythonCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pythonCodeInput() {
    return this._pythonCode;
  }
}
export interface CesGuardrailCodeCallbackBeforeModelCallback {
  /**
  * Human-readable description of the callback.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_guardrail#description CesGuardrail#description}
  */
  readonly description?: string;
  /**
  * Whether the callback is disabled. Disabled callbacks are ignored by the
  * agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_guardrail#disabled CesGuardrail#disabled}
  */
  readonly disabled?: boolean | cdktn.IResolvable;
  /**
  * The python code to execute for the callback.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_guardrail#python_code CesGuardrail#python_code}
  */
  readonly pythonCode: string;
}

export function cesGuardrailCodeCallbackBeforeModelCallbackToTerraform(struct?: CesGuardrailCodeCallbackBeforeModelCallbackOutputReference | CesGuardrailCodeCallbackBeforeModelCallback): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    disabled: cdktn.booleanToTerraform(struct!.disabled),
    python_code: cdktn.stringToTerraform(struct!.pythonCode),
  }
}


export function cesGuardrailCodeCallbackBeforeModelCallbackToHclTerraform(struct?: CesGuardrailCodeCallbackBeforeModelCallbackOutputReference | CesGuardrailCodeCallbackBeforeModelCallback): any {
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
    disabled: {
      value: cdktn.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    python_code: {
      value: cdktn.stringToHclTerraform(struct!.pythonCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CesGuardrailCodeCallbackBeforeModelCallbackOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CesGuardrailCodeCallbackBeforeModelCallback | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._pythonCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.pythonCode = this._pythonCode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesGuardrailCodeCallbackBeforeModelCallback | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._disabled = undefined;
      this._pythonCode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._disabled = value.disabled;
      this._pythonCode = value.pythonCode;
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

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktn.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktn.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // python_code - computed: false, optional: false, required: true
  private _pythonCode?: string; 
  public get pythonCode() {
    return this.getStringAttribute('python_code');
  }
  public set pythonCode(value: string) {
    this._pythonCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pythonCodeInput() {
    return this._pythonCode;
  }
}
export interface CesGuardrailCodeCallback {
  /**
  * after_agent_callback block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_guardrail#after_agent_callback CesGuardrail#after_agent_callback}
  */
  readonly afterAgentCallback?: CesGuardrailCodeCallbackAfterAgentCallback;
  /**
  * after_model_callback block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_guardrail#after_model_callback CesGuardrail#after_model_callback}
  */
  readonly afterModelCallback?: CesGuardrailCodeCallbackAfterModelCallback;
  /**
  * before_agent_callback block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_guardrail#before_agent_callback CesGuardrail#before_agent_callback}
  */
  readonly beforeAgentCallback?: CesGuardrailCodeCallbackBeforeAgentCallback;
  /**
  * before_model_callback block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_guardrail#before_model_callback CesGuardrail#before_model_callback}
  */
  readonly beforeModelCallback?: CesGuardrailCodeCallbackBeforeModelCallback;
}

export function cesGuardrailCodeCallbackToTerraform(struct?: CesGuardrailCodeCallbackOutputReference | CesGuardrailCodeCallback): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    after_agent_callback: cesGuardrailCodeCallbackAfterAgentCallbackToTerraform(struct!.afterAgentCallback),
    after_model_callback: cesGuardrailCodeCallbackAfterModelCallbackToTerraform(struct!.afterModelCallback),
    before_agent_callback: cesGuardrailCodeCallbackBeforeAgentCallbackToTerraform(struct!.beforeAgentCallback),
    before_model_callback: cesGuardrailCodeCallbackBeforeModelCallbackToTerraform(struct!.beforeModelCallback),
  }
}


export function cesGuardrailCodeCallbackToHclTerraform(struct?: CesGuardrailCodeCallbackOutputReference | CesGuardrailCodeCallback): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    after_agent_callback: {
      value: cesGuardrailCodeCallbackAfterAgentCallbackToHclTerraform(struct!.afterAgentCallback),
      isBlock: true,
      type: "list",
      storageClassType: "CesGuardrailCodeCallbackAfterAgentCallbackList",
    },
    after_model_callback: {
      value: cesGuardrailCodeCallbackAfterModelCallbackToHclTerraform(struct!.afterModelCallback),
      isBlock: true,
      type: "list",
      storageClassType: "CesGuardrailCodeCallbackAfterModelCallbackList",
    },
    before_agent_callback: {
      value: cesGuardrailCodeCallbackBeforeAgentCallbackToHclTerraform(struct!.beforeAgentCallback),
      isBlock: true,
      type: "list",
      storageClassType: "CesGuardrailCodeCallbackBeforeAgentCallbackList",
    },
    before_model_callback: {
      value: cesGuardrailCodeCallbackBeforeModelCallbackToHclTerraform(struct!.beforeModelCallback),
      isBlock: true,
      type: "list",
      storageClassType: "CesGuardrailCodeCallbackBeforeModelCallbackList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CesGuardrailCodeCallbackOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CesGuardrailCodeCallback | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._afterAgentCallback?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.afterAgentCallback = this._afterAgentCallback?.internalValue;
    }
    if (this._afterModelCallback?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.afterModelCallback = this._afterModelCallback?.internalValue;
    }
    if (this._beforeAgentCallback?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.beforeAgentCallback = this._beforeAgentCallback?.internalValue;
    }
    if (this._beforeModelCallback?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.beforeModelCallback = this._beforeModelCallback?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesGuardrailCodeCallback | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._afterAgentCallback.internalValue = undefined;
      this._afterModelCallback.internalValue = undefined;
      this._beforeAgentCallback.internalValue = undefined;
      this._beforeModelCallback.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._afterAgentCallback.internalValue = value.afterAgentCallback;
      this._afterModelCallback.internalValue = value.afterModelCallback;
      this._beforeAgentCallback.internalValue = value.beforeAgentCallback;
      this._beforeModelCallback.internalValue = value.beforeModelCallback;
    }
  }

  // after_agent_callback - computed: false, optional: true, required: false
  private _afterAgentCallback = new CesGuardrailCodeCallbackAfterAgentCallbackOutputReference(this, "after_agent_callback");
  public get afterAgentCallback() {
    return this._afterAgentCallback;
  }
  public putAfterAgentCallback(value: CesGuardrailCodeCallbackAfterAgentCallback) {
    this._afterAgentCallback.internalValue = value;
  }
  public resetAfterAgentCallback() {
    this._afterAgentCallback.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get afterAgentCallbackInput() {
    return this._afterAgentCallback.internalValue;
  }

  // after_model_callback - computed: false, optional: true, required: false
  private _afterModelCallback = new CesGuardrailCodeCallbackAfterModelCallbackOutputReference(this, "after_model_callback");
  public get afterModelCallback() {
    return this._afterModelCallback;
  }
  public putAfterModelCallback(value: CesGuardrailCodeCallbackAfterModelCallback) {
    this._afterModelCallback.internalValue = value;
  }
  public resetAfterModelCallback() {
    this._afterModelCallback.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get afterModelCallbackInput() {
    return this._afterModelCallback.internalValue;
  }

  // before_agent_callback - computed: false, optional: true, required: false
  private _beforeAgentCallback = new CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference(this, "before_agent_callback");
  public get beforeAgentCallback() {
    return this._beforeAgentCallback;
  }
  public putBeforeAgentCallback(value: CesGuardrailCodeCallbackBeforeAgentCallback) {
    this._beforeAgentCallback.internalValue = value;
  }
  public resetBeforeAgentCallback() {
    this._beforeAgentCallback.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get beforeAgentCallbackInput() {
    return this._beforeAgentCallback.internalValue;
  }

  // before_model_callback - computed: false, optional: true, required: false
  private _beforeModelCallback = new CesGuardrailCodeCallbackBeforeModelCallbackOutputReference(this, "before_model_callback");
  public get beforeModelCallback() {
    return this._beforeModelCallback;
  }
  public putBeforeModelCallback(value: CesGuardrailCodeCallbackBeforeModelCallback) {
    this._beforeModelCallback.internalValue = value;
  }
  public resetBeforeModelCallback() {
    this._beforeModelCallback.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get beforeModelCallbackInput() {
    return this._beforeModelCallback.internalValue;
  }
}
export interface CesGuardrailContentFilter {
  /**
  * List of banned phrases. Applies to both user inputs and agent responses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_guardrail#banned_contents CesGuardrail#banned_contents}
  */
  readonly bannedContents?: string[];
  /**
  * List of banned phrases. Applies only to agent responses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_guardrail#banned_contents_in_agent_response CesGuardrail#banned_contents_in_agent_response}
  */
  readonly bannedContentsInAgentResponse?: string[];
  /**
  * List of banned phrases. Applies only to user inputs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_guardrail#banned_contents_in_user_input CesGuardrail#banned_contents_in_user_input}
  */
  readonly bannedContentsInUserInput?: string[];
  /**
  * If true, diacritics are ignored during matching.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_guardrail#disregard_diacritics CesGuardrail#disregard_diacritics}
  */
  readonly disregardDiacritics?: boolean | cdktn.IResolvable;
  /**
  * Match type for the content filter.
  * Possible values:
  * SIMPLE_STRING_MATCH
  * WORD_BOUNDARY_STRING_MATCH
  * REGEXP_MATCH
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_guardrail#match_type CesGuardrail#match_type}
  */
  readonly matchType: string;
}

export function cesGuardrailContentFilterToTerraform(struct?: CesGuardrailContentFilterOutputReference | CesGuardrailContentFilter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    banned_contents: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.bannedContents),
    banned_contents_in_agent_response: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.bannedContentsInAgentResponse),
    banned_contents_in_user_input: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.bannedContentsInUserInput),
    disregard_diacritics: cdktn.booleanToTerraform(struct!.disregardDiacritics),
    match_type: cdktn.stringToTerraform(struct!.matchType),
  }
}


export function cesGuardrailContentFilterToHclTerraform(struct?: CesGuardrailContentFilterOutputReference | CesGuardrailContentFilter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    banned_contents: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.bannedContents),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    banned_contents_in_agent_response: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.bannedContentsInAgentResponse),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    banned_contents_in_user_input: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.bannedContentsInUserInput),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    disregard_diacritics: {
      value: cdktn.booleanToHclTerraform(struct!.disregardDiacritics),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_type: {
      value: cdktn.stringToHclTerraform(struct!.matchType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CesGuardrailContentFilterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CesGuardrailContentFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bannedContents !== undefined) {
      hasAnyValues = true;
      internalValueResult.bannedContents = this._bannedContents;
    }
    if (this._bannedContentsInAgentResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.bannedContentsInAgentResponse = this._bannedContentsInAgentResponse;
    }
    if (this._bannedContentsInUserInput !== undefined) {
      hasAnyValues = true;
      internalValueResult.bannedContentsInUserInput = this._bannedContentsInUserInput;
    }
    if (this._disregardDiacritics !== undefined) {
      hasAnyValues = true;
      internalValueResult.disregardDiacritics = this._disregardDiacritics;
    }
    if (this._matchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchType = this._matchType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesGuardrailContentFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bannedContents = undefined;
      this._bannedContentsInAgentResponse = undefined;
      this._bannedContentsInUserInput = undefined;
      this._disregardDiacritics = undefined;
      this._matchType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bannedContents = value.bannedContents;
      this._bannedContentsInAgentResponse = value.bannedContentsInAgentResponse;
      this._bannedContentsInUserInput = value.bannedContentsInUserInput;
      this._disregardDiacritics = value.disregardDiacritics;
      this._matchType = value.matchType;
    }
  }

  // banned_contents - computed: false, optional: true, required: false
  private _bannedContents?: string[]; 
  public get bannedContents() {
    return this.getListAttribute('banned_contents');
  }
  public set bannedContents(value: string[]) {
    this._bannedContents = value;
  }
  public resetBannedContents() {
    this._bannedContents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bannedContentsInput() {
    return this._bannedContents;
  }

  // banned_contents_in_agent_response - computed: false, optional: true, required: false
  private _bannedContentsInAgentResponse?: string[]; 
  public get bannedContentsInAgentResponse() {
    return this.getListAttribute('banned_contents_in_agent_response');
  }
  public set bannedContentsInAgentResponse(value: string[]) {
    this._bannedContentsInAgentResponse = value;
  }
  public resetBannedContentsInAgentResponse() {
    this._bannedContentsInAgentResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bannedContentsInAgentResponseInput() {
    return this._bannedContentsInAgentResponse;
  }

  // banned_contents_in_user_input - computed: false, optional: true, required: false
  private _bannedContentsInUserInput?: string[]; 
  public get bannedContentsInUserInput() {
    return this.getListAttribute('banned_contents_in_user_input');
  }
  public set bannedContentsInUserInput(value: string[]) {
    this._bannedContentsInUserInput = value;
  }
  public resetBannedContentsInUserInput() {
    this._bannedContentsInUserInput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bannedContentsInUserInputInput() {
    return this._bannedContentsInUserInput;
  }

  // disregard_diacritics - computed: false, optional: true, required: false
  private _disregardDiacritics?: boolean | cdktn.IResolvable; 
  public get disregardDiacritics() {
    return this.getBooleanAttribute('disregard_diacritics');
  }
  public set disregardDiacritics(value: boolean | cdktn.IResolvable) {
    this._disregardDiacritics = value;
  }
  public resetDisregardDiacritics() {
    this._disregardDiacritics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disregardDiacriticsInput() {
    return this._disregardDiacritics;
  }

  // match_type - computed: false, optional: false, required: true
  private _matchType?: string; 
  public get matchType() {
    return this.getStringAttribute('match_type');
  }
  public set matchType(value: string) {
    this._matchType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchTypeInput() {
    return this._matchType;
  }
}
export interface CesGuardrailLlmPolicyModelSettings {
  /**
  * The LLM model that the agent should use.
  * If not set, the agent will inherit the model from its parent agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_guardrail#model CesGuardrail#model}
  */
  readonly model?: string;
  /**
  * If set, this temperature will be used for the LLM model. Temperature
  * controls the randomness of the model's responses. Lower temperatures
  * produce responses that are more predictable. Higher temperatures produce
  * responses that are more creative.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_guardrail#temperature CesGuardrail#temperature}
  */
  readonly temperature?: number;
}

export function cesGuardrailLlmPolicyModelSettingsToTerraform(struct?: CesGuardrailLlmPolicyModelSettingsOutputReference | CesGuardrailLlmPolicyModelSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    model: cdktn.stringToTerraform(struct!.model),
    temperature: cdktn.numberToTerraform(struct!.temperature),
  }
}


export function cesGuardrailLlmPolicyModelSettingsToHclTerraform(struct?: CesGuardrailLlmPolicyModelSettingsOutputReference | CesGuardrailLlmPolicyModelSettings): any {
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
    temperature: {
      value: cdktn.numberToHclTerraform(struct!.temperature),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CesGuardrailLlmPolicyModelSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CesGuardrailLlmPolicyModelSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._model !== undefined) {
      hasAnyValues = true;
      internalValueResult.model = this._model;
    }
    if (this._temperature !== undefined) {
      hasAnyValues = true;
      internalValueResult.temperature = this._temperature;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesGuardrailLlmPolicyModelSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._model = undefined;
      this._temperature = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._model = value.model;
      this._temperature = value.temperature;
    }
  }

  // model - computed: false, optional: true, required: false
  private _model?: string; 
  public get model() {
    return this.getStringAttribute('model');
  }
  public set model(value: string) {
    this._model = value;
  }
  public resetModel() {
    this._model = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelInput() {
    return this._model;
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
}
export interface CesGuardrailLlmPolicy {
  /**
  * By default, the LLM policy check is bypassed for short utterances.
  * Enabling this setting applies the policy check to all utterances,
  * including those that would normally be skipped.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_guardrail#allow_short_utterance CesGuardrail#allow_short_utterance}
  */
  readonly allowShortUtterance?: boolean | cdktn.IResolvable;
  /**
  * If an error occurs during the policy check, fail open and do not trigger
  * the guardrail.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_guardrail#fail_open CesGuardrail#fail_open}
  */
  readonly failOpen?: boolean | cdktn.IResolvable;
  /**
  * When checking this policy, consider the last 'n' messages in the
  * conversation.
  * When not set a default value of 10 will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_guardrail#max_conversation_messages CesGuardrail#max_conversation_messages}
  */
  readonly maxConversationMessages?: number;
  /**
  * Defines when to apply the policy check during the conversation. If set to
  * 'POLICY_SCOPE_UNSPECIFIED', the policy will be applied to the user input.
  * When applying the policy to the agent response, additional latency will
  * be introduced before the agent can respond.
  * Possible values:
  * USER_QUERY
  * AGENT_RESPONSE
  * USER_QUERY_AND_AGENT_RESPONSE Possible values: ["USER_QUERY", "AGENT_RESPONSE", "USER_QUERY_AND_AGENT_RESPONSE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_guardrail#policy_scope CesGuardrail#policy_scope}
  */
  readonly policyScope: string;
  /**
  * Policy prompt.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_guardrail#prompt CesGuardrail#prompt}
  */
  readonly prompt: string;
  /**
  * model_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_guardrail#model_settings CesGuardrail#model_settings}
  */
  readonly modelSettings?: CesGuardrailLlmPolicyModelSettings;
}

export function cesGuardrailLlmPolicyToTerraform(struct?: CesGuardrailLlmPolicyOutputReference | CesGuardrailLlmPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    allow_short_utterance: cdktn.booleanToTerraform(struct!.allowShortUtterance),
    fail_open: cdktn.booleanToTerraform(struct!.failOpen),
    max_conversation_messages: cdktn.numberToTerraform(struct!.maxConversationMessages),
    policy_scope: cdktn.stringToTerraform(struct!.policyScope),
    prompt: cdktn.stringToTerraform(struct!.prompt),
    model_settings: cesGuardrailLlmPolicyModelSettingsToTerraform(struct!.modelSettings),
  }
}


export function cesGuardrailLlmPolicyToHclTerraform(struct?: CesGuardrailLlmPolicyOutputReference | CesGuardrailLlmPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    allow_short_utterance: {
      value: cdktn.booleanToHclTerraform(struct!.allowShortUtterance),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fail_open: {
      value: cdktn.booleanToHclTerraform(struct!.failOpen),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_conversation_messages: {
      value: cdktn.numberToHclTerraform(struct!.maxConversationMessages),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    policy_scope: {
      value: cdktn.stringToHclTerraform(struct!.policyScope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prompt: {
      value: cdktn.stringToHclTerraform(struct!.prompt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_settings: {
      value: cesGuardrailLlmPolicyModelSettingsToHclTerraform(struct!.modelSettings),
      isBlock: true,
      type: "list",
      storageClassType: "CesGuardrailLlmPolicyModelSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CesGuardrailLlmPolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CesGuardrailLlmPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowShortUtterance !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowShortUtterance = this._allowShortUtterance;
    }
    if (this._failOpen !== undefined) {
      hasAnyValues = true;
      internalValueResult.failOpen = this._failOpen;
    }
    if (this._maxConversationMessages !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConversationMessages = this._maxConversationMessages;
    }
    if (this._policyScope !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyScope = this._policyScope;
    }
    if (this._prompt !== undefined) {
      hasAnyValues = true;
      internalValueResult.prompt = this._prompt;
    }
    if (this._modelSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelSettings = this._modelSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesGuardrailLlmPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowShortUtterance = undefined;
      this._failOpen = undefined;
      this._maxConversationMessages = undefined;
      this._policyScope = undefined;
      this._prompt = undefined;
      this._modelSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowShortUtterance = value.allowShortUtterance;
      this._failOpen = value.failOpen;
      this._maxConversationMessages = value.maxConversationMessages;
      this._policyScope = value.policyScope;
      this._prompt = value.prompt;
      this._modelSettings.internalValue = value.modelSettings;
    }
  }

  // allow_short_utterance - computed: false, optional: true, required: false
  private _allowShortUtterance?: boolean | cdktn.IResolvable; 
  public get allowShortUtterance() {
    return this.getBooleanAttribute('allow_short_utterance');
  }
  public set allowShortUtterance(value: boolean | cdktn.IResolvable) {
    this._allowShortUtterance = value;
  }
  public resetAllowShortUtterance() {
    this._allowShortUtterance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowShortUtteranceInput() {
    return this._allowShortUtterance;
  }

  // fail_open - computed: false, optional: true, required: false
  private _failOpen?: boolean | cdktn.IResolvable; 
  public get failOpen() {
    return this.getBooleanAttribute('fail_open');
  }
  public set failOpen(value: boolean | cdktn.IResolvable) {
    this._failOpen = value;
  }
  public resetFailOpen() {
    this._failOpen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failOpenInput() {
    return this._failOpen;
  }

  // max_conversation_messages - computed: false, optional: true, required: false
  private _maxConversationMessages?: number; 
  public get maxConversationMessages() {
    return this.getNumberAttribute('max_conversation_messages');
  }
  public set maxConversationMessages(value: number) {
    this._maxConversationMessages = value;
  }
  public resetMaxConversationMessages() {
    this._maxConversationMessages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConversationMessagesInput() {
    return this._maxConversationMessages;
  }

  // policy_scope - computed: false, optional: false, required: true
  private _policyScope?: string; 
  public get policyScope() {
    return this.getStringAttribute('policy_scope');
  }
  public set policyScope(value: string) {
    this._policyScope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyScopeInput() {
    return this._policyScope;
  }

  // prompt - computed: false, optional: false, required: true
  private _prompt?: string; 
  public get prompt() {
    return this.getStringAttribute('prompt');
  }
  public set prompt(value: string) {
    this._prompt = value;
  }
  // Temporarily expose input value. Use with caution.
  public get promptInput() {
    return this._prompt;
  }

  // model_settings - computed: false, optional: true, required: false
  private _modelSettings = new CesGuardrailLlmPolicyModelSettingsOutputReference(this, "model_settings");
  public get modelSettings() {
    return this._modelSettings;
  }
  public putModelSettings(value: CesGuardrailLlmPolicyModelSettings) {
    this._modelSettings.internalValue = value;
  }
  public resetModelSettings() {
    this._modelSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelSettingsInput() {
    return this._modelSettings.internalValue;
  }
}
export interface CesGuardrailLlmPromptSecurityCustomPolicyModelSettings {
  /**
  * The LLM model that the agent should use.
  * If not set, the agent will inherit the model from its parent agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_guardrail#model CesGuardrail#model}
  */
  readonly model?: string;
  /**
  * If set, this temperature will be used for the LLM model. Temperature
  * controls the randomness of the model's responses. Lower temperatures
  * produce responses that are more predictable. Higher temperatures produce
  * responses that are more creative.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_guardrail#temperature CesGuardrail#temperature}
  */
  readonly temperature?: number;
}

export function cesGuardrailLlmPromptSecurityCustomPolicyModelSettingsToTerraform(struct?: CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference | CesGuardrailLlmPromptSecurityCustomPolicyModelSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    model: cdktn.stringToTerraform(struct!.model),
    temperature: cdktn.numberToTerraform(struct!.temperature),
  }
}


export function cesGuardrailLlmPromptSecurityCustomPolicyModelSettingsToHclTerraform(struct?: CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference | CesGuardrailLlmPromptSecurityCustomPolicyModelSettings): any {
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
    temperature: {
      value: cdktn.numberToHclTerraform(struct!.temperature),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CesGuardrailLlmPromptSecurityCustomPolicyModelSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._model !== undefined) {
      hasAnyValues = true;
      internalValueResult.model = this._model;
    }
    if (this._temperature !== undefined) {
      hasAnyValues = true;
      internalValueResult.temperature = this._temperature;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesGuardrailLlmPromptSecurityCustomPolicyModelSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._model = undefined;
      this._temperature = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._model = value.model;
      this._temperature = value.temperature;
    }
  }

  // model - computed: false, optional: true, required: false
  private _model?: string; 
  public get model() {
    return this.getStringAttribute('model');
  }
  public set model(value: string) {
    this._model = value;
  }
  public resetModel() {
    this._model = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelInput() {
    return this._model;
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
}
export interface CesGuardrailLlmPromptSecurityCustomPolicy {
  /**
  * By default, the LLM policy check is bypassed for short utterances.
  * Enabling this setting applies the policy check to all utterances,
  * including those that would normally be skipped.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_guardrail#allow_short_utterance CesGuardrail#allow_short_utterance}
  */
  readonly allowShortUtterance?: boolean | cdktn.IResolvable;
  /**
  * If an error occurs during the policy check, fail open and do not trigger
  * the guardrail.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_guardrail#fail_open CesGuardrail#fail_open}
  */
  readonly failOpen?: boolean | cdktn.IResolvable;
  /**
  * When checking this policy, consider the last 'n' messages in the
  * conversation.
  * When not set a default value of 10 will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_guardrail#max_conversation_messages CesGuardrail#max_conversation_messages}
  */
  readonly maxConversationMessages?: number;
  /**
  * Defines when to apply the policy check during the conversation. If set to
  * 'POLICY_SCOPE_UNSPECIFIED', the policy will be applied to the user input.
  * When applying the policy to the agent response, additional latency will
  * be introduced before the agent can respond.
  * Possible values:
  * USER_QUERY
  * AGENT_RESPONSE
  * USER_QUERY_AND_AGENT_RESPONSE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_guardrail#policy_scope CesGuardrail#policy_scope}
  */
  readonly policyScope: string;
  /**
  * Policy prompt.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_guardrail#prompt CesGuardrail#prompt}
  */
  readonly prompt: string;
  /**
  * model_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_guardrail#model_settings CesGuardrail#model_settings}
  */
  readonly modelSettings?: CesGuardrailLlmPromptSecurityCustomPolicyModelSettings;
}

export function cesGuardrailLlmPromptSecurityCustomPolicyToTerraform(struct?: CesGuardrailLlmPromptSecurityCustomPolicyOutputReference | CesGuardrailLlmPromptSecurityCustomPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    allow_short_utterance: cdktn.booleanToTerraform(struct!.allowShortUtterance),
    fail_open: cdktn.booleanToTerraform(struct!.failOpen),
    max_conversation_messages: cdktn.numberToTerraform(struct!.maxConversationMessages),
    policy_scope: cdktn.stringToTerraform(struct!.policyScope),
    prompt: cdktn.stringToTerraform(struct!.prompt),
    model_settings: cesGuardrailLlmPromptSecurityCustomPolicyModelSettingsToTerraform(struct!.modelSettings),
  }
}


export function cesGuardrailLlmPromptSecurityCustomPolicyToHclTerraform(struct?: CesGuardrailLlmPromptSecurityCustomPolicyOutputReference | CesGuardrailLlmPromptSecurityCustomPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    allow_short_utterance: {
      value: cdktn.booleanToHclTerraform(struct!.allowShortUtterance),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fail_open: {
      value: cdktn.booleanToHclTerraform(struct!.failOpen),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_conversation_messages: {
      value: cdktn.numberToHclTerraform(struct!.maxConversationMessages),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    policy_scope: {
      value: cdktn.stringToHclTerraform(struct!.policyScope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prompt: {
      value: cdktn.stringToHclTerraform(struct!.prompt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_settings: {
      value: cesGuardrailLlmPromptSecurityCustomPolicyModelSettingsToHclTerraform(struct!.modelSettings),
      isBlock: true,
      type: "list",
      storageClassType: "CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CesGuardrailLlmPromptSecurityCustomPolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CesGuardrailLlmPromptSecurityCustomPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowShortUtterance !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowShortUtterance = this._allowShortUtterance;
    }
    if (this._failOpen !== undefined) {
      hasAnyValues = true;
      internalValueResult.failOpen = this._failOpen;
    }
    if (this._maxConversationMessages !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConversationMessages = this._maxConversationMessages;
    }
    if (this._policyScope !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyScope = this._policyScope;
    }
    if (this._prompt !== undefined) {
      hasAnyValues = true;
      internalValueResult.prompt = this._prompt;
    }
    if (this._modelSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelSettings = this._modelSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesGuardrailLlmPromptSecurityCustomPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowShortUtterance = undefined;
      this._failOpen = undefined;
      this._maxConversationMessages = undefined;
      this._policyScope = undefined;
      this._prompt = undefined;
      this._modelSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowShortUtterance = value.allowShortUtterance;
      this._failOpen = value.failOpen;
      this._maxConversationMessages = value.maxConversationMessages;
      this._policyScope = value.policyScope;
      this._prompt = value.prompt;
      this._modelSettings.internalValue = value.modelSettings;
    }
  }

  // allow_short_utterance - computed: false, optional: true, required: false
  private _allowShortUtterance?: boolean | cdktn.IResolvable; 
  public get allowShortUtterance() {
    return this.getBooleanAttribute('allow_short_utterance');
  }
  public set allowShortUtterance(value: boolean | cdktn.IResolvable) {
    this._allowShortUtterance = value;
  }
  public resetAllowShortUtterance() {
    this._allowShortUtterance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowShortUtteranceInput() {
    return this._allowShortUtterance;
  }

  // fail_open - computed: false, optional: true, required: false
  private _failOpen?: boolean | cdktn.IResolvable; 
  public get failOpen() {
    return this.getBooleanAttribute('fail_open');
  }
  public set failOpen(value: boolean | cdktn.IResolvable) {
    this._failOpen = value;
  }
  public resetFailOpen() {
    this._failOpen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failOpenInput() {
    return this._failOpen;
  }

  // max_conversation_messages - computed: false, optional: true, required: false
  private _maxConversationMessages?: number; 
  public get maxConversationMessages() {
    return this.getNumberAttribute('max_conversation_messages');
  }
  public set maxConversationMessages(value: number) {
    this._maxConversationMessages = value;
  }
  public resetMaxConversationMessages() {
    this._maxConversationMessages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConversationMessagesInput() {
    return this._maxConversationMessages;
  }

  // policy_scope - computed: false, optional: false, required: true
  private _policyScope?: string; 
  public get policyScope() {
    return this.getStringAttribute('policy_scope');
  }
  public set policyScope(value: string) {
    this._policyScope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyScopeInput() {
    return this._policyScope;
  }

  // prompt - computed: false, optional: false, required: true
  private _prompt?: string; 
  public get prompt() {
    return this.getStringAttribute('prompt');
  }
  public set prompt(value: string) {
    this._prompt = value;
  }
  // Temporarily expose input value. Use with caution.
  public get promptInput() {
    return this._prompt;
  }

  // model_settings - computed: false, optional: true, required: false
  private _modelSettings = new CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference(this, "model_settings");
  public get modelSettings() {
    return this._modelSettings;
  }
  public putModelSettings(value: CesGuardrailLlmPromptSecurityCustomPolicyModelSettings) {
    this._modelSettings.internalValue = value;
  }
  public resetModelSettings() {
    this._modelSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelSettingsInput() {
    return this._modelSettings.internalValue;
  }
}
export interface CesGuardrailLlmPromptSecurityDefaultSettings {
}

export function cesGuardrailLlmPromptSecurityDefaultSettingsToTerraform(struct?: CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference | CesGuardrailLlmPromptSecurityDefaultSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function cesGuardrailLlmPromptSecurityDefaultSettingsToHclTerraform(struct?: CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference | CesGuardrailLlmPromptSecurityDefaultSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CesGuardrailLlmPromptSecurityDefaultSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesGuardrailLlmPromptSecurityDefaultSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_prompt_template - computed: true, optional: false, required: false
  public get defaultPromptTemplate() {
    return this.getStringAttribute('default_prompt_template');
  }
}
export interface CesGuardrailLlmPromptSecurity {
  /**
  * Determines the behavior when the guardrail encounters an LLM error.
  * - If true: the guardrail is bypassed.
  * - If false (default): the guardrail triggers/blocks.
  * Note: If a custom policy is provided, this field is ignored in favor of
  * the policy's 'failOpen' configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_guardrail#fail_open CesGuardrail#fail_open}
  */
  readonly failOpen?: boolean | cdktn.IResolvable;
  /**
  * custom_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_guardrail#custom_policy CesGuardrail#custom_policy}
  */
  readonly customPolicy?: CesGuardrailLlmPromptSecurityCustomPolicy;
  /**
  * default_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_guardrail#default_settings CesGuardrail#default_settings}
  */
  readonly defaultSettings?: CesGuardrailLlmPromptSecurityDefaultSettings;
}

export function cesGuardrailLlmPromptSecurityToTerraform(struct?: CesGuardrailLlmPromptSecurityOutputReference | CesGuardrailLlmPromptSecurity): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    fail_open: cdktn.booleanToTerraform(struct!.failOpen),
    custom_policy: cesGuardrailLlmPromptSecurityCustomPolicyToTerraform(struct!.customPolicy),
    default_settings: cesGuardrailLlmPromptSecurityDefaultSettingsToTerraform(struct!.defaultSettings),
  }
}


export function cesGuardrailLlmPromptSecurityToHclTerraform(struct?: CesGuardrailLlmPromptSecurityOutputReference | CesGuardrailLlmPromptSecurity): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    fail_open: {
      value: cdktn.booleanToHclTerraform(struct!.failOpen),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    custom_policy: {
      value: cesGuardrailLlmPromptSecurityCustomPolicyToHclTerraform(struct!.customPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "CesGuardrailLlmPromptSecurityCustomPolicyList",
    },
    default_settings: {
      value: cesGuardrailLlmPromptSecurityDefaultSettingsToHclTerraform(struct!.defaultSettings),
      isBlock: true,
      type: "list",
      storageClassType: "CesGuardrailLlmPromptSecurityDefaultSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CesGuardrailLlmPromptSecurityOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CesGuardrailLlmPromptSecurity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failOpen !== undefined) {
      hasAnyValues = true;
      internalValueResult.failOpen = this._failOpen;
    }
    if (this._customPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPolicy = this._customPolicy?.internalValue;
    }
    if (this._defaultSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultSettings = this._defaultSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesGuardrailLlmPromptSecurity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._failOpen = undefined;
      this._customPolicy.internalValue = undefined;
      this._defaultSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._failOpen = value.failOpen;
      this._customPolicy.internalValue = value.customPolicy;
      this._defaultSettings.internalValue = value.defaultSettings;
    }
  }

  // fail_open - computed: false, optional: true, required: false
  private _failOpen?: boolean | cdktn.IResolvable; 
  public get failOpen() {
    return this.getBooleanAttribute('fail_open');
  }
  public set failOpen(value: boolean | cdktn.IResolvable) {
    this._failOpen = value;
  }
  public resetFailOpen() {
    this._failOpen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failOpenInput() {
    return this._failOpen;
  }

  // custom_policy - computed: false, optional: true, required: false
  private _customPolicy = new CesGuardrailLlmPromptSecurityCustomPolicyOutputReference(this, "custom_policy");
  public get customPolicy() {
    return this._customPolicy;
  }
  public putCustomPolicy(value: CesGuardrailLlmPromptSecurityCustomPolicy) {
    this._customPolicy.internalValue = value;
  }
  public resetCustomPolicy() {
    this._customPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPolicyInput() {
    return this._customPolicy.internalValue;
  }

  // default_settings - computed: false, optional: true, required: false
  private _defaultSettings = new CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference(this, "default_settings");
  public get defaultSettings() {
    return this._defaultSettings;
  }
  public putDefaultSettings(value: CesGuardrailLlmPromptSecurityDefaultSettings) {
    this._defaultSettings.internalValue = value;
  }
  public resetDefaultSettings() {
    this._defaultSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSettingsInput() {
    return this._defaultSettings.internalValue;
  }
}
export interface CesGuardrailModelSafetySafetySettings {
  /**
  * The harm category.
  * Possible values:
  * HARM_CATEGORY_HATE_SPEECH
  * HARM_CATEGORY_DANGEROUS_CONTENT
  * HARM_CATEGORY_HARASSMENT
  * HARM_CATEGORY_SEXUALLY_EXPLICIT Possible values: ["HARM_CATEGORY_HATE_SPEECH", "HARM_CATEGORY_DANGEROUS_CONTENT", "HARM_CATEGORY_HARASSMENT", "HARM_CATEGORY_SEXUALLY_EXPLICIT"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_guardrail#category CesGuardrail#category}
  */
  readonly category: string;
  /**
  * The harm block threshold.
  * Possible values:
  * BLOCK_LOW_AND_ABOVE
  * BLOCK_MEDIUM_AND_ABOVE
  * BLOCK_ONLY_HIGH
  * BLOCK_NONE
  * OFF Possible values: ["BLOCK_LOW_AND_ABOVE", "BLOCK_MEDIUM_AND_ABOVE", "BLOCK_ONLY_HIGH", "BLOCK_NONE", "OFF"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_guardrail#threshold CesGuardrail#threshold}
  */
  readonly threshold: string;
}

export function cesGuardrailModelSafetySafetySettingsToTerraform(struct?: CesGuardrailModelSafetySafetySettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    category: cdktn.stringToTerraform(struct!.category),
    threshold: cdktn.stringToTerraform(struct!.threshold),
  }
}


export function cesGuardrailModelSafetySafetySettingsToHclTerraform(struct?: CesGuardrailModelSafetySafetySettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    category: {
      value: cdktn.stringToHclTerraform(struct!.category),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold: {
      value: cdktn.stringToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CesGuardrailModelSafetySafetySettingsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CesGuardrailModelSafetySafetySettings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._category !== undefined) {
      hasAnyValues = true;
      internalValueResult.category = this._category;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesGuardrailModelSafetySafetySettings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._category = undefined;
      this._threshold = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._category = value.category;
      this._threshold = value.threshold;
    }
  }

  // category - computed: false, optional: false, required: true
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // threshold - computed: false, optional: false, required: true
  private _threshold?: string; 
  public get threshold() {
    return this.getStringAttribute('threshold');
  }
  public set threshold(value: string) {
    this._threshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }
}

export class CesGuardrailModelSafetySafetySettingsList extends cdktn.ComplexList {
  public internalValue? : CesGuardrailModelSafetySafetySettings[] | cdktn.IResolvable

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
  public get(index: number): CesGuardrailModelSafetySafetySettingsOutputReference {
    return new CesGuardrailModelSafetySafetySettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesGuardrailModelSafety {
  /**
  * safety_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_guardrail#safety_settings CesGuardrail#safety_settings}
  */
  readonly safetySettings: CesGuardrailModelSafetySafetySettings[] | cdktn.IResolvable;
}

export function cesGuardrailModelSafetyToTerraform(struct?: CesGuardrailModelSafetyOutputReference | CesGuardrailModelSafety): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    safety_settings: cdktn.listMapper(cesGuardrailModelSafetySafetySettingsToTerraform, true)(struct!.safetySettings),
  }
}


export function cesGuardrailModelSafetyToHclTerraform(struct?: CesGuardrailModelSafetyOutputReference | CesGuardrailModelSafety): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    safety_settings: {
      value: cdktn.listMapperHcl(cesGuardrailModelSafetySafetySettingsToHclTerraform, true)(struct!.safetySettings),
      isBlock: true,
      type: "list",
      storageClassType: "CesGuardrailModelSafetySafetySettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CesGuardrailModelSafetyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CesGuardrailModelSafety | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._safetySettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.safetySettings = this._safetySettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesGuardrailModelSafety | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._safetySettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._safetySettings.internalValue = value.safetySettings;
    }
  }

  // safety_settings - computed: false, optional: false, required: true
  private _safetySettings = new CesGuardrailModelSafetySafetySettingsList(this, "safety_settings", false);
  public get safetySettings() {
    return this._safetySettings;
  }
  public putSafetySettings(value: CesGuardrailModelSafetySafetySettings[] | cdktn.IResolvable) {
    this._safetySettings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get safetySettingsInput() {
    return this._safetySettings.internalValue;
  }
}
export interface CesGuardrailTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_guardrail#create CesGuardrail#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_guardrail#delete CesGuardrail#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_guardrail#update CesGuardrail#update}
  */
  readonly update?: string;
}

export function cesGuardrailTimeoutsToTerraform(struct?: CesGuardrailTimeouts | cdktn.IResolvable): any {
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


export function cesGuardrailTimeoutsToHclTerraform(struct?: CesGuardrailTimeouts | cdktn.IResolvable): any {
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

export class CesGuardrailTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CesGuardrailTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: CesGuardrailTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_guardrail google_ces_guardrail}
*/
export class CesGuardrail extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_ces_guardrail";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a CesGuardrail resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CesGuardrail to import
  * @param importFromId The id of the existing CesGuardrail that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_guardrail#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CesGuardrail to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_ces_guardrail", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_guardrail google_ces_guardrail} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CesGuardrailConfig
  */
  public constructor(scope: Construct, id: string, config: CesGuardrailConfig) {
    super(scope, id, {
      terraformResourceType: 'google_ces_guardrail',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.36.0',
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
    this._app = config.app;
    this._deletionPolicy = config.deletionPolicy;
    this._description = config.description;
    this._displayName = config.displayName;
    this._enabled = config.enabled;
    this._guardrailId = config.guardrailId;
    this._id = config.id;
    this._location = config.location;
    this._project = config.project;
    this._action.internalValue = config.action;
    this._codeCallback.internalValue = config.codeCallback;
    this._contentFilter.internalValue = config.contentFilter;
    this._llmPolicy.internalValue = config.llmPolicy;
    this._llmPromptSecurity.internalValue = config.llmPromptSecurity;
    this._modelSafety.internalValue = config.modelSafety;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app - computed: false, optional: false, required: true
  private _app?: string; 
  public get app() {
    return this.getStringAttribute('app');
  }
  public set app(value: string) {
    this._app = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appInput() {
    return this._app;
  }

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

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // guardrail_id - computed: false, optional: false, required: true
  private _guardrailId?: string; 
  public get guardrailId() {
    return this.getStringAttribute('guardrail_id');
  }
  public set guardrailId(value: string) {
    this._guardrailId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get guardrailIdInput() {
    return this._guardrailId;
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

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // action - computed: false, optional: true, required: false
  private _action = new CesGuardrailActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: CesGuardrailAction) {
    this._action.internalValue = value;
  }
  public resetAction() {
    this._action.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // code_callback - computed: false, optional: true, required: false
  private _codeCallback = new CesGuardrailCodeCallbackOutputReference(this, "code_callback");
  public get codeCallback() {
    return this._codeCallback;
  }
  public putCodeCallback(value: CesGuardrailCodeCallback) {
    this._codeCallback.internalValue = value;
  }
  public resetCodeCallback() {
    this._codeCallback.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeCallbackInput() {
    return this._codeCallback.internalValue;
  }

  // content_filter - computed: false, optional: true, required: false
  private _contentFilter = new CesGuardrailContentFilterOutputReference(this, "content_filter");
  public get contentFilter() {
    return this._contentFilter;
  }
  public putContentFilter(value: CesGuardrailContentFilter) {
    this._contentFilter.internalValue = value;
  }
  public resetContentFilter() {
    this._contentFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentFilterInput() {
    return this._contentFilter.internalValue;
  }

  // llm_policy - computed: false, optional: true, required: false
  private _llmPolicy = new CesGuardrailLlmPolicyOutputReference(this, "llm_policy");
  public get llmPolicy() {
    return this._llmPolicy;
  }
  public putLlmPolicy(value: CesGuardrailLlmPolicy) {
    this._llmPolicy.internalValue = value;
  }
  public resetLlmPolicy() {
    this._llmPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get llmPolicyInput() {
    return this._llmPolicy.internalValue;
  }

  // llm_prompt_security - computed: false, optional: true, required: false
  private _llmPromptSecurity = new CesGuardrailLlmPromptSecurityOutputReference(this, "llm_prompt_security");
  public get llmPromptSecurity() {
    return this._llmPromptSecurity;
  }
  public putLlmPromptSecurity(value: CesGuardrailLlmPromptSecurity) {
    this._llmPromptSecurity.internalValue = value;
  }
  public resetLlmPromptSecurity() {
    this._llmPromptSecurity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get llmPromptSecurityInput() {
    return this._llmPromptSecurity.internalValue;
  }

  // model_safety - computed: false, optional: true, required: false
  private _modelSafety = new CesGuardrailModelSafetyOutputReference(this, "model_safety");
  public get modelSafety() {
    return this._modelSafety;
  }
  public putModelSafety(value: CesGuardrailModelSafety) {
    this._modelSafety.internalValue = value;
  }
  public resetModelSafety() {
    this._modelSafety.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelSafetyInput() {
    return this._modelSafety.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CesGuardrailTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CesGuardrailTimeouts) {
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
      app: cdktn.stringToTerraform(this._app),
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      description: cdktn.stringToTerraform(this._description),
      display_name: cdktn.stringToTerraform(this._displayName),
      enabled: cdktn.booleanToTerraform(this._enabled),
      guardrail_id: cdktn.stringToTerraform(this._guardrailId),
      id: cdktn.stringToTerraform(this._id),
      location: cdktn.stringToTerraform(this._location),
      project: cdktn.stringToTerraform(this._project),
      action: cesGuardrailActionToTerraform(this._action.internalValue),
      code_callback: cesGuardrailCodeCallbackToTerraform(this._codeCallback.internalValue),
      content_filter: cesGuardrailContentFilterToTerraform(this._contentFilter.internalValue),
      llm_policy: cesGuardrailLlmPolicyToTerraform(this._llmPolicy.internalValue),
      llm_prompt_security: cesGuardrailLlmPromptSecurityToTerraform(this._llmPromptSecurity.internalValue),
      model_safety: cesGuardrailModelSafetyToTerraform(this._modelSafety.internalValue),
      timeouts: cesGuardrailTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app: {
        value: cdktn.stringToHclTerraform(this._app),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      enabled: {
        value: cdktn.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      guardrail_id: {
        value: cdktn.stringToHclTerraform(this._guardrailId),
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
      action: {
        value: cesGuardrailActionToHclTerraform(this._action.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CesGuardrailActionList",
      },
      code_callback: {
        value: cesGuardrailCodeCallbackToHclTerraform(this._codeCallback.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CesGuardrailCodeCallbackList",
      },
      content_filter: {
        value: cesGuardrailContentFilterToHclTerraform(this._contentFilter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CesGuardrailContentFilterList",
      },
      llm_policy: {
        value: cesGuardrailLlmPolicyToHclTerraform(this._llmPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CesGuardrailLlmPolicyList",
      },
      llm_prompt_security: {
        value: cesGuardrailLlmPromptSecurityToHclTerraform(this._llmPromptSecurity.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CesGuardrailLlmPromptSecurityList",
      },
      model_safety: {
        value: cesGuardrailModelSafetyToHclTerraform(this._modelSafety.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CesGuardrailModelSafetyList",
      },
      timeouts: {
        value: cesGuardrailTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CesGuardrailTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
