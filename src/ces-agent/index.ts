/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_agent
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface CesAgentConfig extends cdktn.TerraformMetaArguments {
  /**
  * The ID to use for the agent, which will become the final component of
  * the agent's resource name. If not provided, a unique ID will be
  * automatically assigned for the agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_agent#agent_id CesAgent#agent_id}
  */
  readonly agentId?: string;
  /**
  * Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_agent#app CesAgent#app}
  */
  readonly app: string;
  /**
  * List of child agents in the agent tree.
  * Format: 'projects/{project}/locations/{location}/apps/{app}/agents/{agent}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_agent#child_agents CesAgent#child_agents}
  */
  readonly childAgents?: string[];
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_agent#deletion_policy CesAgent#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Human-readable description of the agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_agent#description CesAgent#description}
  */
  readonly description?: string;
  /**
  * Display name of the agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_agent#display_name CesAgent#display_name}
  */
  readonly displayName: string;
  /**
  * List of guardrails for the agent.
  * Format:
  * 'projects/{project}/locations/{location}/apps/{app}/guardrails/{guardrail}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_agent#guardrails CesAgent#guardrails}
  */
  readonly guardrails?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_agent#id CesAgent#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Instructions for the LLM model to guide the agent's behavior.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_agent#instruction CesAgent#instruction}
  */
  readonly instruction?: string;
  /**
  * Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_agent#location CesAgent#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_agent#project CesAgent#project}
  */
  readonly project?: string;
  /**
  * List of available tools for the agent.
  * Format: 'projects/{project}/locations/{location}/apps/{app}/tools/{tool}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_agent#tools CesAgent#tools}
  */
  readonly tools?: string[];
  /**
  * after_agent_callbacks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_agent#after_agent_callbacks CesAgent#after_agent_callbacks}
  */
  readonly afterAgentCallbacks?: CesAgentAfterAgentCallbacks[] | cdktn.IResolvable;
  /**
  * after_model_callbacks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_agent#after_model_callbacks CesAgent#after_model_callbacks}
  */
  readonly afterModelCallbacks?: CesAgentAfterModelCallbacks[] | cdktn.IResolvable;
  /**
  * after_tool_callbacks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_agent#after_tool_callbacks CesAgent#after_tool_callbacks}
  */
  readonly afterToolCallbacks?: CesAgentAfterToolCallbacks[] | cdktn.IResolvable;
  /**
  * before_agent_callbacks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_agent#before_agent_callbacks CesAgent#before_agent_callbacks}
  */
  readonly beforeAgentCallbacks?: CesAgentBeforeAgentCallbacks[] | cdktn.IResolvable;
  /**
  * before_model_callbacks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_agent#before_model_callbacks CesAgent#before_model_callbacks}
  */
  readonly beforeModelCallbacks?: CesAgentBeforeModelCallbacks[] | cdktn.IResolvable;
  /**
  * before_tool_callbacks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_agent#before_tool_callbacks CesAgent#before_tool_callbacks}
  */
  readonly beforeToolCallbacks?: CesAgentBeforeToolCallbacks[] | cdktn.IResolvable;
  /**
  * llm_agent block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_agent#llm_agent CesAgent#llm_agent}
  */
  readonly llmAgent?: CesAgentLlmAgent;
  /**
  * model_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_agent#model_settings CesAgent#model_settings}
  */
  readonly modelSettings?: CesAgentModelSettings;
  /**
  * remote_dialogflow_agent block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_agent#remote_dialogflow_agent CesAgent#remote_dialogflow_agent}
  */
  readonly remoteDialogflowAgent?: CesAgentRemoteDialogflowAgent;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_agent#timeouts CesAgent#timeouts}
  */
  readonly timeouts?: CesAgentTimeouts;
  /**
  * toolsets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_agent#toolsets CesAgent#toolsets}
  */
  readonly toolsets?: CesAgentToolsets[] | cdktn.IResolvable;
}
export interface CesAgentAfterAgentCallbacks {
  /**
  * Human-readable description of the callback.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_agent#description CesAgent#description}
  */
  readonly description?: string;
  /**
  * Whether the callback is disabled. Disabled callbacks are ignored by the
  * agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_agent#disabled CesAgent#disabled}
  */
  readonly disabled?: boolean | cdktn.IResolvable;
  /**
  * The python code to execute for the callback.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_agent#python_code CesAgent#python_code}
  */
  readonly pythonCode: string;
}

export function cesAgentAfterAgentCallbacksToTerraform(struct?: CesAgentAfterAgentCallbacks | cdktn.IResolvable): any {
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


export function cesAgentAfterAgentCallbacksToHclTerraform(struct?: CesAgentAfterAgentCallbacks | cdktn.IResolvable): any {
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

export class CesAgentAfterAgentCallbacksOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CesAgentAfterAgentCallbacks | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: CesAgentAfterAgentCallbacks | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._disabled = undefined;
      this._pythonCode = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

export class CesAgentAfterAgentCallbacksList extends cdktn.ComplexList {
  public internalValue? : CesAgentAfterAgentCallbacks[] | cdktn.IResolvable

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
  public get(index: number): CesAgentAfterAgentCallbacksOutputReference {
    return new CesAgentAfterAgentCallbacksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesAgentAfterModelCallbacks {
  /**
  * Human-readable description of the callback.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_agent#description CesAgent#description}
  */
  readonly description?: string;
  /**
  * Whether the callback is disabled. Disabled callbacks are ignored by the
  * agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_agent#disabled CesAgent#disabled}
  */
  readonly disabled?: boolean | cdktn.IResolvable;
  /**
  * The python code to execute for the callback.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_agent#python_code CesAgent#python_code}
  */
  readonly pythonCode: string;
}

export function cesAgentAfterModelCallbacksToTerraform(struct?: CesAgentAfterModelCallbacks | cdktn.IResolvable): any {
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


export function cesAgentAfterModelCallbacksToHclTerraform(struct?: CesAgentAfterModelCallbacks | cdktn.IResolvable): any {
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

export class CesAgentAfterModelCallbacksOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CesAgentAfterModelCallbacks | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: CesAgentAfterModelCallbacks | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._disabled = undefined;
      this._pythonCode = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

export class CesAgentAfterModelCallbacksList extends cdktn.ComplexList {
  public internalValue? : CesAgentAfterModelCallbacks[] | cdktn.IResolvable

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
  public get(index: number): CesAgentAfterModelCallbacksOutputReference {
    return new CesAgentAfterModelCallbacksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesAgentAfterToolCallbacks {
  /**
  * Human-readable description of the callback.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_agent#description CesAgent#description}
  */
  readonly description?: string;
  /**
  * Whether the callback is disabled. Disabled callbacks are ignored by the
  * agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_agent#disabled CesAgent#disabled}
  */
  readonly disabled?: boolean | cdktn.IResolvable;
  /**
  * The python code to execute for the callback.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_agent#python_code CesAgent#python_code}
  */
  readonly pythonCode: string;
}

export function cesAgentAfterToolCallbacksToTerraform(struct?: CesAgentAfterToolCallbacks | cdktn.IResolvable): any {
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


export function cesAgentAfterToolCallbacksToHclTerraform(struct?: CesAgentAfterToolCallbacks | cdktn.IResolvable): any {
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

export class CesAgentAfterToolCallbacksOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CesAgentAfterToolCallbacks | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: CesAgentAfterToolCallbacks | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._disabled = undefined;
      this._pythonCode = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

export class CesAgentAfterToolCallbacksList extends cdktn.ComplexList {
  public internalValue? : CesAgentAfterToolCallbacks[] | cdktn.IResolvable

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
  public get(index: number): CesAgentAfterToolCallbacksOutputReference {
    return new CesAgentAfterToolCallbacksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesAgentBeforeAgentCallbacks {
  /**
  * Human-readable description of the callback.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_agent#description CesAgent#description}
  */
  readonly description?: string;
  /**
  * Whether the callback is disabled. Disabled callbacks are ignored by the
  * agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_agent#disabled CesAgent#disabled}
  */
  readonly disabled?: boolean | cdktn.IResolvable;
  /**
  * The python code to execute for the callback.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_agent#python_code CesAgent#python_code}
  */
  readonly pythonCode: string;
}

export function cesAgentBeforeAgentCallbacksToTerraform(struct?: CesAgentBeforeAgentCallbacks | cdktn.IResolvable): any {
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


export function cesAgentBeforeAgentCallbacksToHclTerraform(struct?: CesAgentBeforeAgentCallbacks | cdktn.IResolvable): any {
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

export class CesAgentBeforeAgentCallbacksOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CesAgentBeforeAgentCallbacks | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: CesAgentBeforeAgentCallbacks | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._disabled = undefined;
      this._pythonCode = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

export class CesAgentBeforeAgentCallbacksList extends cdktn.ComplexList {
  public internalValue? : CesAgentBeforeAgentCallbacks[] | cdktn.IResolvable

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
  public get(index: number): CesAgentBeforeAgentCallbacksOutputReference {
    return new CesAgentBeforeAgentCallbacksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesAgentBeforeModelCallbacks {
  /**
  * Human-readable description of the callback.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_agent#description CesAgent#description}
  */
  readonly description?: string;
  /**
  * Whether the callback is disabled. Disabled callbacks are ignored by the
  * agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_agent#disabled CesAgent#disabled}
  */
  readonly disabled?: boolean | cdktn.IResolvable;
  /**
  * The python code to execute for the callback.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_agent#python_code CesAgent#python_code}
  */
  readonly pythonCode: string;
}

export function cesAgentBeforeModelCallbacksToTerraform(struct?: CesAgentBeforeModelCallbacks | cdktn.IResolvable): any {
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


export function cesAgentBeforeModelCallbacksToHclTerraform(struct?: CesAgentBeforeModelCallbacks | cdktn.IResolvable): any {
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

export class CesAgentBeforeModelCallbacksOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CesAgentBeforeModelCallbacks | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: CesAgentBeforeModelCallbacks | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._disabled = undefined;
      this._pythonCode = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

export class CesAgentBeforeModelCallbacksList extends cdktn.ComplexList {
  public internalValue? : CesAgentBeforeModelCallbacks[] | cdktn.IResolvable

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
  public get(index: number): CesAgentBeforeModelCallbacksOutputReference {
    return new CesAgentBeforeModelCallbacksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesAgentBeforeToolCallbacks {
  /**
  * Human-readable description of the callback.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_agent#description CesAgent#description}
  */
  readonly description?: string;
  /**
  * Whether the callback is disabled. Disabled callbacks are ignored by the
  * agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_agent#disabled CesAgent#disabled}
  */
  readonly disabled?: boolean | cdktn.IResolvable;
  /**
  * The python code to execute for the callback.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_agent#python_code CesAgent#python_code}
  */
  readonly pythonCode: string;
}

export function cesAgentBeforeToolCallbacksToTerraform(struct?: CesAgentBeforeToolCallbacks | cdktn.IResolvable): any {
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


export function cesAgentBeforeToolCallbacksToHclTerraform(struct?: CesAgentBeforeToolCallbacks | cdktn.IResolvable): any {
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

export class CesAgentBeforeToolCallbacksOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CesAgentBeforeToolCallbacks | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: CesAgentBeforeToolCallbacks | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._disabled = undefined;
      this._pythonCode = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

export class CesAgentBeforeToolCallbacksList extends cdktn.ComplexList {
  public internalValue? : CesAgentBeforeToolCallbacks[] | cdktn.IResolvable

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
  public get(index: number): CesAgentBeforeToolCallbacksOutputReference {
    return new CesAgentBeforeToolCallbacksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesAgentLlmAgent {
}

export function cesAgentLlmAgentToTerraform(struct?: CesAgentLlmAgentOutputReference | CesAgentLlmAgent): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function cesAgentLlmAgentToHclTerraform(struct?: CesAgentLlmAgentOutputReference | CesAgentLlmAgent): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class CesAgentLlmAgentOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CesAgentLlmAgent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAgentLlmAgent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface CesAgentModelSettings {
  /**
  * The LLM model that the agent should use.
  * If not set, the agent will inherit the model from its parent agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_agent#model CesAgent#model}
  */
  readonly model?: string;
  /**
  * If set, this temperature will be used for the LLM model. Temperature
  * controls the randomness of the model's responses. Lower temperatures
  * produce responses that are more predictable. Higher temperatures produce
  * responses that are more creative.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_agent#temperature CesAgent#temperature}
  */
  readonly temperature?: number;
}

export function cesAgentModelSettingsToTerraform(struct?: CesAgentModelSettingsOutputReference | CesAgentModelSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    model: cdktn.stringToTerraform(struct!.model),
    temperature: cdktn.numberToTerraform(struct!.temperature),
  }
}


export function cesAgentModelSettingsToHclTerraform(struct?: CesAgentModelSettingsOutputReference | CesAgentModelSettings): any {
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

export class CesAgentModelSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CesAgentModelSettings | undefined {
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

  public set internalValue(value: CesAgentModelSettings | undefined) {
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
export interface CesAgentRemoteDialogflowAgent {
  /**
  * The
  * [Dialogflow](https://cloud.google.com/dialogflow/cx/docs/concept/console-conversational-agents
  * agent resource name.
  * Format: 'projects/{project}/locations/{location}/agents/{agent}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_agent#agent CesAgent#agent}
  */
  readonly agent: string;
  /**
  * The environment ID of the Dialogflow agent be used for the agent
  * execution. If not specified, the draft environment will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_agent#environment_id CesAgent#environment_id}
  */
  readonly environmentId?: string;
  /**
  * The flow ID of the flow in the Dialogflow agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_agent#flow_id CesAgent#flow_id}
  */
  readonly flowId: string;
  /**
  * The mapping of the app variables names to the Dialogflow session
  * parameters names to be sent to the Dialogflow agent as input.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_agent#input_variable_mapping CesAgent#input_variable_mapping}
  */
  readonly inputVariableMapping?: { [key: string]: string };
  /**
  * The mapping of the Dialogflow session parameters names to the app
  * variables names to be sent back to the CES agent after the Dialogflow
  * agent execution ends.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_agent#output_variable_mapping CesAgent#output_variable_mapping}
  */
  readonly outputVariableMapping?: { [key: string]: string };
  /**
  * Indicates whether to respect the message-level interruption settings configured in the Dialogflow agent. * If false: all response messages from the Dialogflow agent follow the app-level barge-in settings. * If true: only response messages with ['allow_playback_interruption'](https://docs.cloud.google.com/dialogflow/cx/docs/reference/rpc/google.cloud.dialogflow.cx.v3#text) set to true will be interruptable, all other messages follow the app-level barge-in settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_agent#respect_response_interruption_settings CesAgent#respect_response_interruption_settings}
  */
  readonly respectResponseInterruptionSettings?: boolean | cdktn.IResolvable;
}

export function cesAgentRemoteDialogflowAgentToTerraform(struct?: CesAgentRemoteDialogflowAgentOutputReference | CesAgentRemoteDialogflowAgent): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    agent: cdktn.stringToTerraform(struct!.agent),
    environment_id: cdktn.stringToTerraform(struct!.environmentId),
    flow_id: cdktn.stringToTerraform(struct!.flowId),
    input_variable_mapping: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.inputVariableMapping),
    output_variable_mapping: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.outputVariableMapping),
    respect_response_interruption_settings: cdktn.booleanToTerraform(struct!.respectResponseInterruptionSettings),
  }
}


export function cesAgentRemoteDialogflowAgentToHclTerraform(struct?: CesAgentRemoteDialogflowAgentOutputReference | CesAgentRemoteDialogflowAgent): any {
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
    environment_id: {
      value: cdktn.stringToHclTerraform(struct!.environmentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    flow_id: {
      value: cdktn.stringToHclTerraform(struct!.flowId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    input_variable_mapping: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.inputVariableMapping),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    output_variable_mapping: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.outputVariableMapping),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    respect_response_interruption_settings: {
      value: cdktn.booleanToHclTerraform(struct!.respectResponseInterruptionSettings),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CesAgentRemoteDialogflowAgentOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CesAgentRemoteDialogflowAgent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agent !== undefined) {
      hasAnyValues = true;
      internalValueResult.agent = this._agent;
    }
    if (this._environmentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.environmentId = this._environmentId;
    }
    if (this._flowId !== undefined) {
      hasAnyValues = true;
      internalValueResult.flowId = this._flowId;
    }
    if (this._inputVariableMapping !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputVariableMapping = this._inputVariableMapping;
    }
    if (this._outputVariableMapping !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputVariableMapping = this._outputVariableMapping;
    }
    if (this._respectResponseInterruptionSettings !== undefined) {
      hasAnyValues = true;
      internalValueResult.respectResponseInterruptionSettings = this._respectResponseInterruptionSettings;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAgentRemoteDialogflowAgent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._agent = undefined;
      this._environmentId = undefined;
      this._flowId = undefined;
      this._inputVariableMapping = undefined;
      this._outputVariableMapping = undefined;
      this._respectResponseInterruptionSettings = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._agent = value.agent;
      this._environmentId = value.environmentId;
      this._flowId = value.flowId;
      this._inputVariableMapping = value.inputVariableMapping;
      this._outputVariableMapping = value.outputVariableMapping;
      this._respectResponseInterruptionSettings = value.respectResponseInterruptionSettings;
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

  // environment_id - computed: false, optional: true, required: false
  private _environmentId?: string; 
  public get environmentId() {
    return this.getStringAttribute('environment_id');
  }
  public set environmentId(value: string) {
    this._environmentId = value;
  }
  public resetEnvironmentId() {
    this._environmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdInput() {
    return this._environmentId;
  }

  // flow_id - computed: false, optional: false, required: true
  private _flowId?: string; 
  public get flowId() {
    return this.getStringAttribute('flow_id');
  }
  public set flowId(value: string) {
    this._flowId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get flowIdInput() {
    return this._flowId;
  }

  // input_variable_mapping - computed: false, optional: true, required: false
  private _inputVariableMapping?: { [key: string]: string }; 
  public get inputVariableMapping() {
    return this.getStringMapAttribute('input_variable_mapping');
  }
  public set inputVariableMapping(value: { [key: string]: string }) {
    this._inputVariableMapping = value;
  }
  public resetInputVariableMapping() {
    this._inputVariableMapping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputVariableMappingInput() {
    return this._inputVariableMapping;
  }

  // output_variable_mapping - computed: false, optional: true, required: false
  private _outputVariableMapping?: { [key: string]: string }; 
  public get outputVariableMapping() {
    return this.getStringMapAttribute('output_variable_mapping');
  }
  public set outputVariableMapping(value: { [key: string]: string }) {
    this._outputVariableMapping = value;
  }
  public resetOutputVariableMapping() {
    this._outputVariableMapping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputVariableMappingInput() {
    return this._outputVariableMapping;
  }

  // respect_response_interruption_settings - computed: false, optional: true, required: false
  private _respectResponseInterruptionSettings?: boolean | cdktn.IResolvable; 
  public get respectResponseInterruptionSettings() {
    return this.getBooleanAttribute('respect_response_interruption_settings');
  }
  public set respectResponseInterruptionSettings(value: boolean | cdktn.IResolvable) {
    this._respectResponseInterruptionSettings = value;
  }
  public resetRespectResponseInterruptionSettings() {
    this._respectResponseInterruptionSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get respectResponseInterruptionSettingsInput() {
    return this._respectResponseInterruptionSettings;
  }
}
export interface CesAgentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_agent#create CesAgent#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_agent#delete CesAgent#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_agent#update CesAgent#update}
  */
  readonly update?: string;
}

export function cesAgentTimeoutsToTerraform(struct?: CesAgentTimeouts | cdktn.IResolvable): any {
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


export function cesAgentTimeoutsToHclTerraform(struct?: CesAgentTimeouts | cdktn.IResolvable): any {
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

export class CesAgentTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CesAgentTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: CesAgentTimeouts | cdktn.IResolvable | undefined) {
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
export interface CesAgentToolsets {
  /**
  * The tools IDs to filter the toolset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_agent#tool_ids CesAgent#tool_ids}
  */
  readonly toolIds?: string[];
  /**
  * The resource name of the toolset.
  * Format:
  * 'projects/{project}/locations/{location}/apps/{app}/toolsets/{toolset}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_agent#toolset CesAgent#toolset}
  */
  readonly toolset: string;
}

export function cesAgentToolsetsToTerraform(struct?: CesAgentToolsets | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    tool_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.toolIds),
    toolset: cdktn.stringToTerraform(struct!.toolset),
  }
}


export function cesAgentToolsetsToHclTerraform(struct?: CesAgentToolsets | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    tool_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.toolIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    toolset: {
      value: cdktn.stringToHclTerraform(struct!.toolset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CesAgentToolsetsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CesAgentToolsets | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._toolIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.toolIds = this._toolIds;
    }
    if (this._toolset !== undefined) {
      hasAnyValues = true;
      internalValueResult.toolset = this._toolset;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAgentToolsets | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._toolIds = undefined;
      this._toolset = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._toolIds = value.toolIds;
      this._toolset = value.toolset;
    }
  }

  // tool_ids - computed: false, optional: true, required: false
  private _toolIds?: string[]; 
  public get toolIds() {
    return this.getListAttribute('tool_ids');
  }
  public set toolIds(value: string[]) {
    this._toolIds = value;
  }
  public resetToolIds() {
    this._toolIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toolIdsInput() {
    return this._toolIds;
  }

  // toolset - computed: false, optional: false, required: true
  private _toolset?: string; 
  public get toolset() {
    return this.getStringAttribute('toolset');
  }
  public set toolset(value: string) {
    this._toolset = value;
  }
  // Temporarily expose input value. Use with caution.
  public get toolsetInput() {
    return this._toolset;
  }
}

export class CesAgentToolsetsList extends cdktn.ComplexList {
  public internalValue? : CesAgentToolsets[] | cdktn.IResolvable

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
  public get(index: number): CesAgentToolsetsOutputReference {
    return new CesAgentToolsetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_agent google_ces_agent}
*/
export class CesAgent extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_ces_agent";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a CesAgent resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CesAgent to import
  * @param importFromId The id of the existing CesAgent that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_agent#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CesAgent to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_ces_agent", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_agent google_ces_agent} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CesAgentConfig
  */
  public constructor(scope: Construct, id: string, config: CesAgentConfig) {
    super(scope, id, {
      terraformResourceType: 'google_ces_agent',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.46.1',
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
    this._agentId = config.agentId;
    this._app = config.app;
    this._childAgents = config.childAgents;
    this._deletionPolicy = config.deletionPolicy;
    this._description = config.description;
    this._displayName = config.displayName;
    this._guardrails = config.guardrails;
    this._id = config.id;
    this._instruction = config.instruction;
    this._location = config.location;
    this._project = config.project;
    this._tools = config.tools;
    this._afterAgentCallbacks.internalValue = config.afterAgentCallbacks;
    this._afterModelCallbacks.internalValue = config.afterModelCallbacks;
    this._afterToolCallbacks.internalValue = config.afterToolCallbacks;
    this._beforeAgentCallbacks.internalValue = config.beforeAgentCallbacks;
    this._beforeModelCallbacks.internalValue = config.beforeModelCallbacks;
    this._beforeToolCallbacks.internalValue = config.beforeToolCallbacks;
    this._llmAgent.internalValue = config.llmAgent;
    this._modelSettings.internalValue = config.modelSettings;
    this._remoteDialogflowAgent.internalValue = config.remoteDialogflowAgent;
    this._timeouts.internalValue = config.timeouts;
    this._toolsets.internalValue = config.toolsets;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agent_id - computed: false, optional: true, required: false
  private _agentId?: string; 
  public get agentId() {
    return this.getStringAttribute('agent_id');
  }
  public set agentId(value: string) {
    this._agentId = value;
  }
  public resetAgentId() {
    this._agentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentIdInput() {
    return this._agentId;
  }

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

  // child_agents - computed: false, optional: true, required: false
  private _childAgents?: string[]; 
  public get childAgents() {
    return this.getListAttribute('child_agents');
  }
  public set childAgents(value: string[]) {
    this._childAgents = value;
  }
  public resetChildAgents() {
    this._childAgents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get childAgentsInput() {
    return this._childAgents;
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

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // generated_summary - computed: true, optional: false, required: false
  public get generatedSummary() {
    return this.getStringAttribute('generated_summary');
  }

  // guardrails - computed: false, optional: true, required: false
  private _guardrails?: string[]; 
  public get guardrails() {
    return this.getListAttribute('guardrails');
  }
  public set guardrails(value: string[]) {
    this._guardrails = value;
  }
  public resetGuardrails() {
    this._guardrails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guardrailsInput() {
    return this._guardrails;
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

  // instruction - computed: false, optional: true, required: false
  private _instruction?: string; 
  public get instruction() {
    return this.getStringAttribute('instruction');
  }
  public set instruction(value: string) {
    this._instruction = value;
  }
  public resetInstruction() {
    this._instruction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instructionInput() {
    return this._instruction;
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

  // tools - computed: false, optional: true, required: false
  private _tools?: string[]; 
  public get tools() {
    return this.getListAttribute('tools');
  }
  public set tools(value: string[]) {
    this._tools = value;
  }
  public resetTools() {
    this._tools = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toolsInput() {
    return this._tools;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // after_agent_callbacks - computed: false, optional: true, required: false
  private _afterAgentCallbacks = new CesAgentAfterAgentCallbacksList(this, "after_agent_callbacks", false);
  public get afterAgentCallbacks() {
    return this._afterAgentCallbacks;
  }
  public putAfterAgentCallbacks(value: CesAgentAfterAgentCallbacks[] | cdktn.IResolvable) {
    this._afterAgentCallbacks.internalValue = value;
  }
  public resetAfterAgentCallbacks() {
    this._afterAgentCallbacks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get afterAgentCallbacksInput() {
    return this._afterAgentCallbacks.internalValue;
  }

  // after_model_callbacks - computed: false, optional: true, required: false
  private _afterModelCallbacks = new CesAgentAfterModelCallbacksList(this, "after_model_callbacks", false);
  public get afterModelCallbacks() {
    return this._afterModelCallbacks;
  }
  public putAfterModelCallbacks(value: CesAgentAfterModelCallbacks[] | cdktn.IResolvable) {
    this._afterModelCallbacks.internalValue = value;
  }
  public resetAfterModelCallbacks() {
    this._afterModelCallbacks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get afterModelCallbacksInput() {
    return this._afterModelCallbacks.internalValue;
  }

  // after_tool_callbacks - computed: false, optional: true, required: false
  private _afterToolCallbacks = new CesAgentAfterToolCallbacksList(this, "after_tool_callbacks", false);
  public get afterToolCallbacks() {
    return this._afterToolCallbacks;
  }
  public putAfterToolCallbacks(value: CesAgentAfterToolCallbacks[] | cdktn.IResolvable) {
    this._afterToolCallbacks.internalValue = value;
  }
  public resetAfterToolCallbacks() {
    this._afterToolCallbacks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get afterToolCallbacksInput() {
    return this._afterToolCallbacks.internalValue;
  }

  // before_agent_callbacks - computed: false, optional: true, required: false
  private _beforeAgentCallbacks = new CesAgentBeforeAgentCallbacksList(this, "before_agent_callbacks", false);
  public get beforeAgentCallbacks() {
    return this._beforeAgentCallbacks;
  }
  public putBeforeAgentCallbacks(value: CesAgentBeforeAgentCallbacks[] | cdktn.IResolvable) {
    this._beforeAgentCallbacks.internalValue = value;
  }
  public resetBeforeAgentCallbacks() {
    this._beforeAgentCallbacks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get beforeAgentCallbacksInput() {
    return this._beforeAgentCallbacks.internalValue;
  }

  // before_model_callbacks - computed: false, optional: true, required: false
  private _beforeModelCallbacks = new CesAgentBeforeModelCallbacksList(this, "before_model_callbacks", false);
  public get beforeModelCallbacks() {
    return this._beforeModelCallbacks;
  }
  public putBeforeModelCallbacks(value: CesAgentBeforeModelCallbacks[] | cdktn.IResolvable) {
    this._beforeModelCallbacks.internalValue = value;
  }
  public resetBeforeModelCallbacks() {
    this._beforeModelCallbacks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get beforeModelCallbacksInput() {
    return this._beforeModelCallbacks.internalValue;
  }

  // before_tool_callbacks - computed: false, optional: true, required: false
  private _beforeToolCallbacks = new CesAgentBeforeToolCallbacksList(this, "before_tool_callbacks", false);
  public get beforeToolCallbacks() {
    return this._beforeToolCallbacks;
  }
  public putBeforeToolCallbacks(value: CesAgentBeforeToolCallbacks[] | cdktn.IResolvable) {
    this._beforeToolCallbacks.internalValue = value;
  }
  public resetBeforeToolCallbacks() {
    this._beforeToolCallbacks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get beforeToolCallbacksInput() {
    return this._beforeToolCallbacks.internalValue;
  }

  // llm_agent - computed: false, optional: true, required: false
  private _llmAgent = new CesAgentLlmAgentOutputReference(this, "llm_agent");
  public get llmAgent() {
    return this._llmAgent;
  }
  public putLlmAgent(value: CesAgentLlmAgent) {
    this._llmAgent.internalValue = value;
  }
  public resetLlmAgent() {
    this._llmAgent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get llmAgentInput() {
    return this._llmAgent.internalValue;
  }

  // model_settings - computed: false, optional: true, required: false
  private _modelSettings = new CesAgentModelSettingsOutputReference(this, "model_settings");
  public get modelSettings() {
    return this._modelSettings;
  }
  public putModelSettings(value: CesAgentModelSettings) {
    this._modelSettings.internalValue = value;
  }
  public resetModelSettings() {
    this._modelSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelSettingsInput() {
    return this._modelSettings.internalValue;
  }

  // remote_dialogflow_agent - computed: false, optional: true, required: false
  private _remoteDialogflowAgent = new CesAgentRemoteDialogflowAgentOutputReference(this, "remote_dialogflow_agent");
  public get remoteDialogflowAgent() {
    return this._remoteDialogflowAgent;
  }
  public putRemoteDialogflowAgent(value: CesAgentRemoteDialogflowAgent) {
    this._remoteDialogflowAgent.internalValue = value;
  }
  public resetRemoteDialogflowAgent() {
    this._remoteDialogflowAgent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteDialogflowAgentInput() {
    return this._remoteDialogflowAgent.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CesAgentTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CesAgentTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // toolsets - computed: false, optional: true, required: false
  private _toolsets = new CesAgentToolsetsList(this, "toolsets", false);
  public get toolsets() {
    return this._toolsets;
  }
  public putToolsets(value: CesAgentToolsets[] | cdktn.IResolvable) {
    this._toolsets.internalValue = value;
  }
  public resetToolsets() {
    this._toolsets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toolsetsInput() {
    return this._toolsets.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      agent_id: cdktn.stringToTerraform(this._agentId),
      app: cdktn.stringToTerraform(this._app),
      child_agents: cdktn.listMapper(cdktn.stringToTerraform, false)(this._childAgents),
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      description: cdktn.stringToTerraform(this._description),
      display_name: cdktn.stringToTerraform(this._displayName),
      guardrails: cdktn.listMapper(cdktn.stringToTerraform, false)(this._guardrails),
      id: cdktn.stringToTerraform(this._id),
      instruction: cdktn.stringToTerraform(this._instruction),
      location: cdktn.stringToTerraform(this._location),
      project: cdktn.stringToTerraform(this._project),
      tools: cdktn.listMapper(cdktn.stringToTerraform, false)(this._tools),
      after_agent_callbacks: cdktn.listMapper(cesAgentAfterAgentCallbacksToTerraform, true)(this._afterAgentCallbacks.internalValue),
      after_model_callbacks: cdktn.listMapper(cesAgentAfterModelCallbacksToTerraform, true)(this._afterModelCallbacks.internalValue),
      after_tool_callbacks: cdktn.listMapper(cesAgentAfterToolCallbacksToTerraform, true)(this._afterToolCallbacks.internalValue),
      before_agent_callbacks: cdktn.listMapper(cesAgentBeforeAgentCallbacksToTerraform, true)(this._beforeAgentCallbacks.internalValue),
      before_model_callbacks: cdktn.listMapper(cesAgentBeforeModelCallbacksToTerraform, true)(this._beforeModelCallbacks.internalValue),
      before_tool_callbacks: cdktn.listMapper(cesAgentBeforeToolCallbacksToTerraform, true)(this._beforeToolCallbacks.internalValue),
      llm_agent: cesAgentLlmAgentToTerraform(this._llmAgent.internalValue),
      model_settings: cesAgentModelSettingsToTerraform(this._modelSettings.internalValue),
      remote_dialogflow_agent: cesAgentRemoteDialogflowAgentToTerraform(this._remoteDialogflowAgent.internalValue),
      timeouts: cesAgentTimeoutsToTerraform(this._timeouts.internalValue),
      toolsets: cdktn.listMapper(cesAgentToolsetsToTerraform, true)(this._toolsets.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      agent_id: {
        value: cdktn.stringToHclTerraform(this._agentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      app: {
        value: cdktn.stringToHclTerraform(this._app),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      child_agents: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._childAgents),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
      guardrails: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._guardrails),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instruction: {
        value: cdktn.stringToHclTerraform(this._instruction),
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
      tools: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._tools),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      after_agent_callbacks: {
        value: cdktn.listMapperHcl(cesAgentAfterAgentCallbacksToHclTerraform, true)(this._afterAgentCallbacks.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CesAgentAfterAgentCallbacksList",
      },
      after_model_callbacks: {
        value: cdktn.listMapperHcl(cesAgentAfterModelCallbacksToHclTerraform, true)(this._afterModelCallbacks.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CesAgentAfterModelCallbacksList",
      },
      after_tool_callbacks: {
        value: cdktn.listMapperHcl(cesAgentAfterToolCallbacksToHclTerraform, true)(this._afterToolCallbacks.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CesAgentAfterToolCallbacksList",
      },
      before_agent_callbacks: {
        value: cdktn.listMapperHcl(cesAgentBeforeAgentCallbacksToHclTerraform, true)(this._beforeAgentCallbacks.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CesAgentBeforeAgentCallbacksList",
      },
      before_model_callbacks: {
        value: cdktn.listMapperHcl(cesAgentBeforeModelCallbacksToHclTerraform, true)(this._beforeModelCallbacks.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CesAgentBeforeModelCallbacksList",
      },
      before_tool_callbacks: {
        value: cdktn.listMapperHcl(cesAgentBeforeToolCallbacksToHclTerraform, true)(this._beforeToolCallbacks.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CesAgentBeforeToolCallbacksList",
      },
      llm_agent: {
        value: cesAgentLlmAgentToHclTerraform(this._llmAgent.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CesAgentLlmAgentList",
      },
      model_settings: {
        value: cesAgentModelSettingsToHclTerraform(this._modelSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CesAgentModelSettingsList",
      },
      remote_dialogflow_agent: {
        value: cesAgentRemoteDialogflowAgentToHclTerraform(this._remoteDialogflowAgent.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CesAgentRemoteDialogflowAgentList",
      },
      timeouts: {
        value: cesAgentTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CesAgentTimeouts",
      },
      toolsets: {
        value: cdktn.listMapperHcl(cesAgentToolsetsToHclTerraform, true)(this._toolsets.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CesAgentToolsetsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
