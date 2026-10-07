/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#agent_id CesAgent#agent_id}
  */
  readonly agentId?: string;
  /**
  * Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#app CesAgent#app}
  */
  readonly app: string;
  /**
  * List of child agents in the agent tree.
  * Format: 'projects/{project}/locations/{location}/apps/{app}/agents/{agent}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#child_agents CesAgent#child_agents}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#deletion_policy CesAgent#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Human-readable description of the agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#description CesAgent#description}
  */
  readonly description?: string;
  /**
  * Display name of the agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#display_name CesAgent#display_name}
  */
  readonly displayName: string;
  /**
  * List of guardrails for the agent.
  * Format:
  * 'projects/{project}/locations/{location}/apps/{app}/guardrails/{guardrail}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#guardrails CesAgent#guardrails}
  */
  readonly guardrails?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#id CesAgent#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Instructions for the LLM model to guide the agent's behavior.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#instruction CesAgent#instruction}
  */
  readonly instruction?: string;
  /**
  * Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#location CesAgent#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#project CesAgent#project}
  */
  readonly project?: string;
  /**
  * List of available tools for the agent.
  * Format: 'projects/{project}/locations/{location}/apps/{app}/tools/{tool}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#tools CesAgent#tools}
  */
  readonly tools?: string[];
  /**
  * after_agent_callbacks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#after_agent_callbacks CesAgent#after_agent_callbacks}
  */
  readonly afterAgentCallbacks?: CesAgentAfterAgentCallbacks[] | cdktn.IResolvable;
  /**
  * after_model_callbacks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#after_model_callbacks CesAgent#after_model_callbacks}
  */
  readonly afterModelCallbacks?: CesAgentAfterModelCallbacks[] | cdktn.IResolvable;
  /**
  * after_tool_callbacks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#after_tool_callbacks CesAgent#after_tool_callbacks}
  */
  readonly afterToolCallbacks?: CesAgentAfterToolCallbacks[] | cdktn.IResolvable;
  /**
  * before_agent_callbacks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#before_agent_callbacks CesAgent#before_agent_callbacks}
  */
  readonly beforeAgentCallbacks?: CesAgentBeforeAgentCallbacks[] | cdktn.IResolvable;
  /**
  * before_model_callbacks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#before_model_callbacks CesAgent#before_model_callbacks}
  */
  readonly beforeModelCallbacks?: CesAgentBeforeModelCallbacks[] | cdktn.IResolvable;
  /**
  * before_tool_callbacks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#before_tool_callbacks CesAgent#before_tool_callbacks}
  */
  readonly beforeToolCallbacks?: CesAgentBeforeToolCallbacks[] | cdktn.IResolvable;
  /**
  * llm_agent block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#llm_agent CesAgent#llm_agent}
  */
  readonly llmAgent?: CesAgentLlmAgent;
  /**
  * model_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#model_settings CesAgent#model_settings}
  */
  readonly modelSettings?: CesAgentModelSettings;
  /**
  * remote_a2a_agent block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#remote_a2a_agent CesAgent#remote_a2a_agent}
  */
  readonly remoteA2AAgent?: CesAgentRemoteA2AAgent;
  /**
  * remote_dialogflow_agent block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#remote_dialogflow_agent CesAgent#remote_dialogflow_agent}
  */
  readonly remoteDialogflowAgent?: CesAgentRemoteDialogflowAgent;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#timeouts CesAgent#timeouts}
  */
  readonly timeouts?: CesAgentTimeouts;
  /**
  * toolsets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#toolsets CesAgent#toolsets}
  */
  readonly toolsets?: CesAgentToolsets[] | cdktn.IResolvable;
  /**
  * transfer_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#transfer_rules CesAgent#transfer_rules}
  */
  readonly transferRules?: CesAgentTransferRules[] | cdktn.IResolvable;
}
export interface CesAgentAfterAgentCallbacks {
  /**
  * Human-readable description of the callback.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#description CesAgent#description}
  */
  readonly description?: string;
  /**
  * Whether the callback is disabled. Disabled callbacks are ignored by the
  * agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#disabled CesAgent#disabled}
  */
  readonly disabled?: boolean | cdktn.IResolvable;
  /**
  * If enabled, the callback will also be executed on intermediate model
  * outputs. This setting only affects after model callback.
  * **ENABLE WITH CAUTION**. Typically after model callback only needs to be
  * executed after receiving all model responses. Enabling proactive execution
  * may have negative implication on the execution cost and latency, and
  * should only be enabled in rare situations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#proactive_execution_enabled CesAgent#proactive_execution_enabled}
  */
  readonly proactiveExecutionEnabled?: boolean | cdktn.IResolvable;
  /**
  * The python code to execute for the callback.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#python_code CesAgent#python_code}
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
    proactive_execution_enabled: cdktn.booleanToTerraform(struct!.proactiveExecutionEnabled),
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
    proactive_execution_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.proactiveExecutionEnabled),
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
    if (this._proactiveExecutionEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.proactiveExecutionEnabled = this._proactiveExecutionEnabled;
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
      this._proactiveExecutionEnabled = undefined;
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
      this._proactiveExecutionEnabled = value.proactiveExecutionEnabled;
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

  // proactive_execution_enabled - computed: false, optional: true, required: false
  private _proactiveExecutionEnabled?: boolean | cdktn.IResolvable; 
  public get proactiveExecutionEnabled() {
    return this.getBooleanAttribute('proactive_execution_enabled');
  }
  public set proactiveExecutionEnabled(value: boolean | cdktn.IResolvable) {
    this._proactiveExecutionEnabled = value;
  }
  public resetProactiveExecutionEnabled() {
    this._proactiveExecutionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proactiveExecutionEnabledInput() {
    return this._proactiveExecutionEnabled;
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#description CesAgent#description}
  */
  readonly description?: string;
  /**
  * Whether the callback is disabled. Disabled callbacks are ignored by the
  * agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#disabled CesAgent#disabled}
  */
  readonly disabled?: boolean | cdktn.IResolvable;
  /**
  * If enabled, the callback will also be executed on intermediate model
  * outputs. This setting only affects after model callback.
  * **ENABLE WITH CAUTION**. Typically after model callback only needs to be
  * executed after receiving all model responses. Enabling proactive execution
  * may have negative implication on the execution cost and latency, and
  * should only be enabled in rare situations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#proactive_execution_enabled CesAgent#proactive_execution_enabled}
  */
  readonly proactiveExecutionEnabled?: boolean | cdktn.IResolvable;
  /**
  * The python code to execute for the callback.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#python_code CesAgent#python_code}
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
    proactive_execution_enabled: cdktn.booleanToTerraform(struct!.proactiveExecutionEnabled),
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
    proactive_execution_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.proactiveExecutionEnabled),
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
    if (this._proactiveExecutionEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.proactiveExecutionEnabled = this._proactiveExecutionEnabled;
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
      this._proactiveExecutionEnabled = undefined;
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
      this._proactiveExecutionEnabled = value.proactiveExecutionEnabled;
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

  // proactive_execution_enabled - computed: false, optional: true, required: false
  private _proactiveExecutionEnabled?: boolean | cdktn.IResolvable; 
  public get proactiveExecutionEnabled() {
    return this.getBooleanAttribute('proactive_execution_enabled');
  }
  public set proactiveExecutionEnabled(value: boolean | cdktn.IResolvable) {
    this._proactiveExecutionEnabled = value;
  }
  public resetProactiveExecutionEnabled() {
    this._proactiveExecutionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proactiveExecutionEnabledInput() {
    return this._proactiveExecutionEnabled;
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#description CesAgent#description}
  */
  readonly description?: string;
  /**
  * Whether the callback is disabled. Disabled callbacks are ignored by the
  * agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#disabled CesAgent#disabled}
  */
  readonly disabled?: boolean | cdktn.IResolvable;
  /**
  * If enabled, the callback will also be executed on intermediate model
  * outputs. This setting only affects after model callback.
  * **ENABLE WITH CAUTION**. Typically after model callback only needs to be
  * executed after receiving all model responses. Enabling proactive execution
  * may have negative implication on the execution cost and latency, and
  * should only be enabled in rare situations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#proactive_execution_enabled CesAgent#proactive_execution_enabled}
  */
  readonly proactiveExecutionEnabled?: boolean | cdktn.IResolvable;
  /**
  * The python code to execute for the callback.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#python_code CesAgent#python_code}
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
    proactive_execution_enabled: cdktn.booleanToTerraform(struct!.proactiveExecutionEnabled),
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
    proactive_execution_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.proactiveExecutionEnabled),
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
    if (this._proactiveExecutionEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.proactiveExecutionEnabled = this._proactiveExecutionEnabled;
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
      this._proactiveExecutionEnabled = undefined;
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
      this._proactiveExecutionEnabled = value.proactiveExecutionEnabled;
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

  // proactive_execution_enabled - computed: false, optional: true, required: false
  private _proactiveExecutionEnabled?: boolean | cdktn.IResolvable; 
  public get proactiveExecutionEnabled() {
    return this.getBooleanAttribute('proactive_execution_enabled');
  }
  public set proactiveExecutionEnabled(value: boolean | cdktn.IResolvable) {
    this._proactiveExecutionEnabled = value;
  }
  public resetProactiveExecutionEnabled() {
    this._proactiveExecutionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proactiveExecutionEnabledInput() {
    return this._proactiveExecutionEnabled;
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#description CesAgent#description}
  */
  readonly description?: string;
  /**
  * Whether the callback is disabled. Disabled callbacks are ignored by the
  * agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#disabled CesAgent#disabled}
  */
  readonly disabled?: boolean | cdktn.IResolvable;
  /**
  * If enabled, the callback will also be executed on intermediate model
  * outputs. This setting only affects after model callback.
  * **ENABLE WITH CAUTION**. Typically after model callback only needs to be
  * executed after receiving all model responses. Enabling proactive execution
  * may have negative implication on the execution cost and latency, and
  * should only be enabled in rare situations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#proactive_execution_enabled CesAgent#proactive_execution_enabled}
  */
  readonly proactiveExecutionEnabled?: boolean | cdktn.IResolvable;
  /**
  * The python code to execute for the callback.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#python_code CesAgent#python_code}
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
    proactive_execution_enabled: cdktn.booleanToTerraform(struct!.proactiveExecutionEnabled),
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
    proactive_execution_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.proactiveExecutionEnabled),
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
    if (this._proactiveExecutionEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.proactiveExecutionEnabled = this._proactiveExecutionEnabled;
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
      this._proactiveExecutionEnabled = undefined;
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
      this._proactiveExecutionEnabled = value.proactiveExecutionEnabled;
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

  // proactive_execution_enabled - computed: false, optional: true, required: false
  private _proactiveExecutionEnabled?: boolean | cdktn.IResolvable; 
  public get proactiveExecutionEnabled() {
    return this.getBooleanAttribute('proactive_execution_enabled');
  }
  public set proactiveExecutionEnabled(value: boolean | cdktn.IResolvable) {
    this._proactiveExecutionEnabled = value;
  }
  public resetProactiveExecutionEnabled() {
    this._proactiveExecutionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proactiveExecutionEnabledInput() {
    return this._proactiveExecutionEnabled;
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#description CesAgent#description}
  */
  readonly description?: string;
  /**
  * Whether the callback is disabled. Disabled callbacks are ignored by the
  * agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#disabled CesAgent#disabled}
  */
  readonly disabled?: boolean | cdktn.IResolvable;
  /**
  * If enabled, the callback will also be executed on intermediate model
  * outputs. This setting only affects after model callback.
  * **ENABLE WITH CAUTION**. Typically after model callback only needs to be
  * executed after receiving all model responses. Enabling proactive execution
  * may have negative implication on the execution cost and latency, and
  * should only be enabled in rare situations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#proactive_execution_enabled CesAgent#proactive_execution_enabled}
  */
  readonly proactiveExecutionEnabled?: boolean | cdktn.IResolvable;
  /**
  * The python code to execute for the callback.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#python_code CesAgent#python_code}
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
    proactive_execution_enabled: cdktn.booleanToTerraform(struct!.proactiveExecutionEnabled),
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
    proactive_execution_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.proactiveExecutionEnabled),
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
    if (this._proactiveExecutionEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.proactiveExecutionEnabled = this._proactiveExecutionEnabled;
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
      this._proactiveExecutionEnabled = undefined;
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
      this._proactiveExecutionEnabled = value.proactiveExecutionEnabled;
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

  // proactive_execution_enabled - computed: false, optional: true, required: false
  private _proactiveExecutionEnabled?: boolean | cdktn.IResolvable; 
  public get proactiveExecutionEnabled() {
    return this.getBooleanAttribute('proactive_execution_enabled');
  }
  public set proactiveExecutionEnabled(value: boolean | cdktn.IResolvable) {
    this._proactiveExecutionEnabled = value;
  }
  public resetProactiveExecutionEnabled() {
    this._proactiveExecutionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proactiveExecutionEnabledInput() {
    return this._proactiveExecutionEnabled;
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#description CesAgent#description}
  */
  readonly description?: string;
  /**
  * Whether the callback is disabled. Disabled callbacks are ignored by the
  * agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#disabled CesAgent#disabled}
  */
  readonly disabled?: boolean | cdktn.IResolvable;
  /**
  * If enabled, the callback will also be executed on intermediate model
  * outputs. This setting only affects after model callback.
  * **ENABLE WITH CAUTION**. Typically after model callback only needs to be
  * executed after receiving all model responses. Enabling proactive execution
  * may have negative implication on the execution cost and latency, and
  * should only be enabled in rare situations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#proactive_execution_enabled CesAgent#proactive_execution_enabled}
  */
  readonly proactiveExecutionEnabled?: boolean | cdktn.IResolvable;
  /**
  * The python code to execute for the callback.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#python_code CesAgent#python_code}
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
    proactive_execution_enabled: cdktn.booleanToTerraform(struct!.proactiveExecutionEnabled),
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
    proactive_execution_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.proactiveExecutionEnabled),
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
    if (this._proactiveExecutionEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.proactiveExecutionEnabled = this._proactiveExecutionEnabled;
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
      this._proactiveExecutionEnabled = undefined;
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
      this._proactiveExecutionEnabled = value.proactiveExecutionEnabled;
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

  // proactive_execution_enabled - computed: false, optional: true, required: false
  private _proactiveExecutionEnabled?: boolean | cdktn.IResolvable; 
  public get proactiveExecutionEnabled() {
    return this.getBooleanAttribute('proactive_execution_enabled');
  }
  public set proactiveExecutionEnabled(value: boolean | cdktn.IResolvable) {
    this._proactiveExecutionEnabled = value;
  }
  public resetProactiveExecutionEnabled() {
    this._proactiveExecutionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proactiveExecutionEnabledInput() {
    return this._proactiveExecutionEnabled;
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#model CesAgent#model}
  */
  readonly model?: string;
  /**
  * If set, this temperature will be used for the LLM model. Temperature
  * controls the randomness of the model's responses. Lower temperatures
  * produce responses that are more predictable. Higher temperatures produce
  * responses that are more creative.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#temperature CesAgent#temperature}
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
export interface CesAgentRemoteA2AAgentA2AConfigAgentCardSkills {
  /**
  * A detailed description of the skill.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#description CesAgent#description}
  */
  readonly description: string;
  /**
  * Example prompts or scenarios that this skill can handle.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#examples CesAgent#examples}
  */
  readonly examples?: string[];
  /**
  * A unique identifier for the agent's skill.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#id CesAgent#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The set of supported input media types for this skill, overriding the
  * agent's defaults.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#input_modes CesAgent#input_modes}
  */
  readonly inputModes?: string[];
  /**
  * A human-readable name for the skill.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#name CesAgent#name}
  */
  readonly name: string;
  /**
  * The set of supported output media types for this skill, overriding the
  * agent's defaults.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#output_modes CesAgent#output_modes}
  */
  readonly outputModes?: string[];
  /**
  * A set of keywords describing the skill's capabilities.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#tags CesAgent#tags}
  */
  readonly tags: string[];
}

export function cesAgentRemoteA2AAgentA2AConfigAgentCardSkillsToTerraform(struct?: CesAgentRemoteA2AAgentA2AConfigAgentCardSkills | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    examples: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.examples),
    id: cdktn.stringToTerraform(struct!.id),
    input_modes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.inputModes),
    name: cdktn.stringToTerraform(struct!.name),
    output_modes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.outputModes),
    tags: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.tags),
  }
}


export function cesAgentRemoteA2AAgentA2AConfigAgentCardSkillsToHclTerraform(struct?: CesAgentRemoteA2AAgentA2AConfigAgentCardSkills | cdktn.IResolvable): any {
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
    examples: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.examples),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    input_modes: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.inputModes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output_modes: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.outputModes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tags: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CesAgentRemoteA2AAgentA2AConfigAgentCardSkills | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._examples !== undefined) {
      hasAnyValues = true;
      internalValueResult.examples = this._examples;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._inputModes !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputModes = this._inputModes;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._outputModes !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputModes = this._outputModes;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAgentRemoteA2AAgentA2AConfigAgentCardSkills | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._examples = undefined;
      this._id = undefined;
      this._inputModes = undefined;
      this._name = undefined;
      this._outputModes = undefined;
      this._tags = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._examples = value.examples;
      this._id = value.id;
      this._inputModes = value.inputModes;
      this._name = value.name;
      this._outputModes = value.outputModes;
      this._tags = value.tags;
    }
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // examples - computed: false, optional: true, required: false
  private _examples?: string[]; 
  public get examples() {
    return this.getListAttribute('examples');
  }
  public set examples(value: string[]) {
    this._examples = value;
  }
  public resetExamples() {
    this._examples = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get examplesInput() {
    return this._examples;
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

  // input_modes - computed: false, optional: true, required: false
  private _inputModes?: string[]; 
  public get inputModes() {
    return this.getListAttribute('input_modes');
  }
  public set inputModes(value: string[]) {
    this._inputModes = value;
  }
  public resetInputModes() {
    this._inputModes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputModesInput() {
    return this._inputModes;
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

  // output_modes - computed: false, optional: true, required: false
  private _outputModes?: string[]; 
  public get outputModes() {
    return this.getListAttribute('output_modes');
  }
  public set outputModes(value: string[]) {
    this._outputModes = value;
  }
  public resetOutputModes() {
    this._outputModes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputModesInput() {
    return this._outputModes;
  }

  // tags - computed: false, optional: false, required: true
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }
}

export class CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList extends cdktn.ComplexList {
  public internalValue? : CesAgentRemoteA2AAgentA2AConfigAgentCardSkills[] | cdktn.IResolvable

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
  public get(index: number): CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference {
    return new CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces {
  /**
  * The protocol binding supported at this URL. The core ones officially
  * supported are JSONRPC, GRPC and HTTP+JSON.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#protocol_binding CesAgent#protocol_binding}
  */
  readonly protocolBinding: string;
  /**
  * The version of the A2A protocol this interface exposes.
  * Examples: "0.3", "1.0"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#protocol_version CesAgent#protocol_version}
  */
  readonly protocolVersion: string;
  /**
  * Tenant ID to be used in the request when calling the agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#tenant CesAgent#tenant}
  */
  readonly tenant?: string;
  /**
  * The URL where this interface is available. Must be a valid absolute HTTPS
  * URL in production.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#url CesAgent#url}
  */
  readonly url: string;
}

export function cesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesToTerraform(struct?: CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    protocol_binding: cdktn.stringToTerraform(struct!.protocolBinding),
    protocol_version: cdktn.stringToTerraform(struct!.protocolVersion),
    tenant: cdktn.stringToTerraform(struct!.tenant),
    url: cdktn.stringToTerraform(struct!.url),
  }
}


export function cesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesToHclTerraform(struct?: CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    protocol_binding: {
      value: cdktn.stringToHclTerraform(struct!.protocolBinding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol_version: {
      value: cdktn.stringToHclTerraform(struct!.protocolVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktn.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktn.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._protocolBinding !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolBinding = this._protocolBinding;
    }
    if (this._protocolVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolVersion = this._protocolVersion;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._protocolBinding = undefined;
      this._protocolVersion = undefined;
      this._tenant = undefined;
      this._url = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._protocolBinding = value.protocolBinding;
      this._protocolVersion = value.protocolVersion;
      this._tenant = value.tenant;
      this._url = value.url;
    }
  }

  // protocol_binding - computed: false, optional: false, required: true
  private _protocolBinding?: string; 
  public get protocolBinding() {
    return this.getStringAttribute('protocol_binding');
  }
  public set protocolBinding(value: string) {
    this._protocolBinding = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolBindingInput() {
    return this._protocolBinding;
  }

  // protocol_version - computed: false, optional: false, required: true
  private _protocolVersion?: string; 
  public get protocolVersion() {
    return this.getStringAttribute('protocol_version');
  }
  public set protocolVersion(value: string) {
    this._protocolVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolVersionInput() {
    return this._protocolVersion;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}

export class CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList extends cdktn.ComplexList {
  public internalValue? : CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces[] | cdktn.IResolvable

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
  public get(index: number): CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference {
    return new CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesAgentRemoteA2AAgentA2AConfigAgentCard {
  /**
  * A description of the agent's domain of action/solution space.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#description CesAgent#description}
  */
  readonly description: string;
  /**
  * A human-readable name for the agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#name CesAgent#name}
  */
  readonly name: string;
  /**
  * The version of the agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#version CesAgent#version}
  */
  readonly version: string;
  /**
  * skills block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#skills CesAgent#skills}
  */
  readonly skills: CesAgentRemoteA2AAgentA2AConfigAgentCardSkills[] | cdktn.IResolvable;
  /**
  * supported_interfaces block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#supported_interfaces CesAgent#supported_interfaces}
  */
  readonly supportedInterfaces: CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces[] | cdktn.IResolvable;
}

export function cesAgentRemoteA2AAgentA2AConfigAgentCardToTerraform(struct?: CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference | CesAgentRemoteA2AAgentA2AConfigAgentCard): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    name: cdktn.stringToTerraform(struct!.name),
    version: cdktn.stringToTerraform(struct!.version),
    skills: cdktn.listMapper(cesAgentRemoteA2AAgentA2AConfigAgentCardSkillsToTerraform, true)(struct!.skills),
    supported_interfaces: cdktn.listMapper(cesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesToTerraform, true)(struct!.supportedInterfaces),
  }
}


export function cesAgentRemoteA2AAgentA2AConfigAgentCardToHclTerraform(struct?: CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference | CesAgentRemoteA2AAgentA2AConfigAgentCard): any {
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
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
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
    skills: {
      value: cdktn.listMapperHcl(cesAgentRemoteA2AAgentA2AConfigAgentCardSkillsToHclTerraform, true)(struct!.skills),
      isBlock: true,
      type: "list",
      storageClassType: "CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList",
    },
    supported_interfaces: {
      value: cdktn.listMapperHcl(cesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesToHclTerraform, true)(struct!.supportedInterfaces),
      isBlock: true,
      type: "list",
      storageClassType: "CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CesAgentRemoteA2AAgentA2AConfigAgentCard | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._skills?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.skills = this._skills?.internalValue;
    }
    if (this._supportedInterfaces?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.supportedInterfaces = this._supportedInterfaces?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAgentRemoteA2AAgentA2AConfigAgentCard | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._name = undefined;
      this._version = undefined;
      this._skills.internalValue = undefined;
      this._supportedInterfaces.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._name = value.name;
      this._version = value.version;
      this._skills.internalValue = value.skills;
      this._supportedInterfaces.internalValue = value.supportedInterfaces;
    }
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // skills - computed: false, optional: false, required: true
  private _skills = new CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList(this, "skills", false);
  public get skills() {
    return this._skills;
  }
  public putSkills(value: CesAgentRemoteA2AAgentA2AConfigAgentCardSkills[] | cdktn.IResolvable) {
    this._skills.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get skillsInput() {
    return this._skills.internalValue;
  }

  // supported_interfaces - computed: false, optional: false, required: true
  private _supportedInterfaces = new CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList(this, "supported_interfaces", false);
  public get supportedInterfaces() {
    return this._supportedInterfaces;
  }
  public putSupportedInterfaces(value: CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces[] | cdktn.IResolvable) {
    this._supportedInterfaces.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get supportedInterfacesInput() {
    return this._supportedInterfaces.internalValue;
  }
}
export interface CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig {
  /**
  * The name of the SecretManager secret version resource storing the API key.
  * Format: 'projects/{project}/secrets/{secret}/versions/{version}'
  * Note: You should grant 'roles/secretmanager.secretAccessor' role to the CES
  * service agent
  * 'service-@gcp-sa-ces.iam.gserviceaccount.com'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#api_key_secret_version CesAgent#api_key_secret_version}
  */
  readonly apiKeySecretVersion: string;
  /**
  * The parameter name or the header name of the API key.
  * E.g., If the API request is "https://example.com/act?X-Api-Key=", "X-Api-Key" would be the parameter name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#key_name CesAgent#key_name}
  */
  readonly keyName: string;
  /**
  * Key location in the request.
  * Possible values:
  * HEADER
  * QUERY_STRING
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#request_location CesAgent#request_location}
  */
  readonly requestLocation: string;
}

export function cesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigToTerraform(struct?: CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference | CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    api_key_secret_version: cdktn.stringToTerraform(struct!.apiKeySecretVersion),
    key_name: cdktn.stringToTerraform(struct!.keyName),
    request_location: cdktn.stringToTerraform(struct!.requestLocation),
  }
}


export function cesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigToHclTerraform(struct?: CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference | CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    api_key_secret_version: {
      value: cdktn.stringToHclTerraform(struct!.apiKeySecretVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_name: {
      value: cdktn.stringToHclTerraform(struct!.keyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_location: {
      value: cdktn.stringToHclTerraform(struct!.requestLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKeySecretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKeySecretVersion = this._apiKeySecretVersion;
    }
    if (this._keyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyName = this._keyName;
    }
    if (this._requestLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestLocation = this._requestLocation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiKeySecretVersion = undefined;
      this._keyName = undefined;
      this._requestLocation = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiKeySecretVersion = value.apiKeySecretVersion;
      this._keyName = value.keyName;
      this._requestLocation = value.requestLocation;
    }
  }

  // api_key_secret_version - computed: false, optional: false, required: true
  private _apiKeySecretVersion?: string; 
  public get apiKeySecretVersion() {
    return this.getStringAttribute('api_key_secret_version');
  }
  public set apiKeySecretVersion(value: string) {
    this._apiKeySecretVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeySecretVersionInput() {
    return this._apiKeySecretVersion;
  }

  // key_name - computed: false, optional: false, required: true
  private _keyName?: string; 
  public get keyName() {
    return this.getStringAttribute('key_name');
  }
  public set keyName(value: string) {
    this._keyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyNameInput() {
    return this._keyName;
  }

  // request_location - computed: false, optional: false, required: true
  private _requestLocation?: string; 
  public get requestLocation() {
    return this.getStringAttribute('request_location');
  }
  public set requestLocation(value: string) {
    this._requestLocation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requestLocationInput() {
    return this._requestLocation;
  }
}
export interface CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig {
  /**
  * The bearer token.
  * Must be in the format '$context.variables.<name_of_variable>'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#token CesAgent#token}
  */
  readonly token: string;
}

export function cesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigToTerraform(struct?: CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference | CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    token: cdktn.stringToTerraform(struct!.token),
  }
}


export function cesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigToHclTerraform(struct?: CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference | CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    token: {
      value: cdktn.stringToHclTerraform(struct!.token),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._token !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._token = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._token = value.token;
    }
  }

  // token - computed: false, optional: false, required: true
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }
}
export interface CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig {
  /**
  * The client ID from the OAuth provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#client_id CesAgent#client_id}
  */
  readonly clientId: string;
  /**
  * The name of the SecretManager secret version resource storing the
  * client secret.
  * Format: 'projects/{project}/secrets/{secret}/versions/{version}'
  * 
  * Note: You should grant 'roles/secretmanager.secretAccessor' role to the CES
  * service agent
  * 'service-@gcp-sa-ces.iam.gserviceaccount.com'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#client_secret_version CesAgent#client_secret_version}
  */
  readonly clientSecretVersion: string;
  /**
  * OAuth grant types.
  * Possible values:
  * CLIENT_CREDENTIAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#oauth_grant_type CesAgent#oauth_grant_type}
  */
  readonly oauthGrantType: string;
  /**
  * The OAuth scopes to grant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#scopes CesAgent#scopes}
  */
  readonly scopes?: string[];
  /**
  * The token endpoint in the OAuth provider to exchange for an access token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#token_endpoint CesAgent#token_endpoint}
  */
  readonly tokenEndpoint: string;
}

export function cesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigToTerraform(struct?: CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference | CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    client_id: cdktn.stringToTerraform(struct!.clientId),
    client_secret_version: cdktn.stringToTerraform(struct!.clientSecretVersion),
    oauth_grant_type: cdktn.stringToTerraform(struct!.oauthGrantType),
    scopes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.scopes),
    token_endpoint: cdktn.stringToTerraform(struct!.tokenEndpoint),
  }
}


export function cesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigToHclTerraform(struct?: CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference | CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    client_id: {
      value: cdktn.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret_version: {
      value: cdktn.stringToHclTerraform(struct!.clientSecretVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oauth_grant_type: {
      value: cdktn.stringToHclTerraform(struct!.oauthGrantType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scopes: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.scopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    token_endpoint: {
      value: cdktn.stringToHclTerraform(struct!.tokenEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecretVersion = this._clientSecretVersion;
    }
    if (this._oauthGrantType !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauthGrantType = this._oauthGrantType;
    }
    if (this._scopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopes = this._scopes;
    }
    if (this._tokenEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenEndpoint = this._tokenEndpoint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._clientSecretVersion = undefined;
      this._oauthGrantType = undefined;
      this._scopes = undefined;
      this._tokenEndpoint = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._clientSecretVersion = value.clientSecretVersion;
      this._oauthGrantType = value.oauthGrantType;
      this._scopes = value.scopes;
      this._tokenEndpoint = value.tokenEndpoint;
    }
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret_version - computed: false, optional: false, required: true
  private _clientSecretVersion?: string; 
  public get clientSecretVersion() {
    return this.getStringAttribute('client_secret_version');
  }
  public set clientSecretVersion(value: string) {
    this._clientSecretVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretVersionInput() {
    return this._clientSecretVersion;
  }

  // oauth_grant_type - computed: false, optional: false, required: true
  private _oauthGrantType?: string; 
  public get oauthGrantType() {
    return this.getStringAttribute('oauth_grant_type');
  }
  public set oauthGrantType(value: string) {
    this._oauthGrantType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthGrantTypeInput() {
    return this._oauthGrantType;
  }

  // scopes - computed: false, optional: true, required: false
  private _scopes?: string[]; 
  public get scopes() {
    return this.getListAttribute('scopes');
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  public resetScopes() {
    this._scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }

  // token_endpoint - computed: false, optional: false, required: true
  private _tokenEndpoint?: string; 
  public get tokenEndpoint() {
    return this.getStringAttribute('token_endpoint');
  }
  public set tokenEndpoint(value: string) {
    this._tokenEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenEndpointInput() {
    return this._tokenEndpoint;
  }
}
export interface CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig {
  /**
  * The OAuth scopes to grant. If not specified, the default scope
  * 'https://www.googleapis.com/auth/cloud-platform' is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#scopes CesAgent#scopes}
  */
  readonly scopes?: string[];
  /**
  * The email address of the service account used for authenticatation. CES
  * uses this service account to exchange an access token and the access token
  * is then sent in the 'Authorization' header of the request.
  * 
  * The service account must have the
  * 'roles/iam.serviceAccountTokenCreator' role granted to the
  * CES service agent
  * 'service-@gcp-sa-ces.iam.gserviceaccount.com'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#service_account CesAgent#service_account}
  */
  readonly serviceAccount: string;
}

export function cesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigToTerraform(struct?: CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference | CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    scopes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.scopes),
    service_account: cdktn.stringToTerraform(struct!.serviceAccount),
  }
}


export function cesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigToHclTerraform(struct?: CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference | CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    scopes: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.scopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    service_account: {
      value: cdktn.stringToHclTerraform(struct!.serviceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopes = this._scopes;
    }
    if (this._serviceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccount = this._serviceAccount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._scopes = undefined;
      this._serviceAccount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._scopes = value.scopes;
      this._serviceAccount = value.serviceAccount;
    }
  }

  // scopes - computed: false, optional: true, required: false
  private _scopes?: string[]; 
  public get scopes() {
    return this.getListAttribute('scopes');
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  public resetScopes() {
    this._scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }

  // service_account - computed: false, optional: false, required: true
  private _serviceAccount?: string; 
  public get serviceAccount() {
    return this.getStringAttribute('service_account');
  }
  public set serviceAccount(value: string) {
    this._serviceAccount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountInput() {
    return this._serviceAccount;
  }
}
export interface CesAgentRemoteA2AAgentA2AConfigApiAuthentication {
  /**
  * api_key_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#api_key_config CesAgent#api_key_config}
  */
  readonly apiKeyConfig?: CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig;
  /**
  * bearer_token_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#bearer_token_config CesAgent#bearer_token_config}
  */
  readonly bearerTokenConfig?: CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig;
  /**
  * oauth_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#oauth_config CesAgent#oauth_config}
  */
  readonly oauthConfig?: CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig;
  /**
  * service_account_auth_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#service_account_auth_config CesAgent#service_account_auth_config}
  */
  readonly serviceAccountAuthConfig?: CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig;
}

export function cesAgentRemoteA2AAgentA2AConfigApiAuthenticationToTerraform(struct?: CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference | CesAgentRemoteA2AAgentA2AConfigApiAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    api_key_config: cesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigToTerraform(struct!.apiKeyConfig),
    bearer_token_config: cesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigToTerraform(struct!.bearerTokenConfig),
    oauth_config: cesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigToTerraform(struct!.oauthConfig),
    service_account_auth_config: cesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigToTerraform(struct!.serviceAccountAuthConfig),
  }
}


export function cesAgentRemoteA2AAgentA2AConfigApiAuthenticationToHclTerraform(struct?: CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference | CesAgentRemoteA2AAgentA2AConfigApiAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    api_key_config: {
      value: cesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigToHclTerraform(struct!.apiKeyConfig),
      isBlock: true,
      type: "list",
      storageClassType: "CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigList",
    },
    bearer_token_config: {
      value: cesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigToHclTerraform(struct!.bearerTokenConfig),
      isBlock: true,
      type: "list",
      storageClassType: "CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigList",
    },
    oauth_config: {
      value: cesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigToHclTerraform(struct!.oauthConfig),
      isBlock: true,
      type: "list",
      storageClassType: "CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigList",
    },
    service_account_auth_config: {
      value: cesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigToHclTerraform(struct!.serviceAccountAuthConfig),
      isBlock: true,
      type: "list",
      storageClassType: "CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CesAgentRemoteA2AAgentA2AConfigApiAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKeyConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKeyConfig = this._apiKeyConfig?.internalValue;
    }
    if (this._bearerTokenConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bearerTokenConfig = this._bearerTokenConfig?.internalValue;
    }
    if (this._oauthConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauthConfig = this._oauthConfig?.internalValue;
    }
    if (this._serviceAccountAuthConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountAuthConfig = this._serviceAccountAuthConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAgentRemoteA2AAgentA2AConfigApiAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiKeyConfig.internalValue = undefined;
      this._bearerTokenConfig.internalValue = undefined;
      this._oauthConfig.internalValue = undefined;
      this._serviceAccountAuthConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiKeyConfig.internalValue = value.apiKeyConfig;
      this._bearerTokenConfig.internalValue = value.bearerTokenConfig;
      this._oauthConfig.internalValue = value.oauthConfig;
      this._serviceAccountAuthConfig.internalValue = value.serviceAccountAuthConfig;
    }
  }

  // api_key_config - computed: false, optional: true, required: false
  private _apiKeyConfig = new CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference(this, "api_key_config");
  public get apiKeyConfig() {
    return this._apiKeyConfig;
  }
  public putApiKeyConfig(value: CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig) {
    this._apiKeyConfig.internalValue = value;
  }
  public resetApiKeyConfig() {
    this._apiKeyConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyConfigInput() {
    return this._apiKeyConfig.internalValue;
  }

  // bearer_token_config - computed: false, optional: true, required: false
  private _bearerTokenConfig = new CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference(this, "bearer_token_config");
  public get bearerTokenConfig() {
    return this._bearerTokenConfig;
  }
  public putBearerTokenConfig(value: CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig) {
    this._bearerTokenConfig.internalValue = value;
  }
  public resetBearerTokenConfig() {
    this._bearerTokenConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bearerTokenConfigInput() {
    return this._bearerTokenConfig.internalValue;
  }

  // oauth_config - computed: false, optional: true, required: false
  private _oauthConfig = new CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference(this, "oauth_config");
  public get oauthConfig() {
    return this._oauthConfig;
  }
  public putOauthConfig(value: CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig) {
    this._oauthConfig.internalValue = value;
  }
  public resetOauthConfig() {
    this._oauthConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthConfigInput() {
    return this._oauthConfig.internalValue;
  }

  // service_account_auth_config - computed: false, optional: true, required: false
  private _serviceAccountAuthConfig = new CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference(this, "service_account_auth_config");
  public get serviceAccountAuthConfig() {
    return this._serviceAccountAuthConfig;
  }
  public putServiceAccountAuthConfig(value: CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig) {
    this._serviceAccountAuthConfig.internalValue = value;
  }
  public resetServiceAccountAuthConfig() {
    this._serviceAccountAuthConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountAuthConfigInput() {
    return this._serviceAccountAuthConfig.internalValue;
  }
}
export interface CesAgentRemoteA2AAgentA2AConfig {
  /**
  * Reference to the agent in the Agent Registry.
  * Format: 'projects/{project}/locations/{location}/agents/{agent}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#agent_registry CesAgent#agent_registry}
  */
  readonly agentRegistry?: string;
  /**
  * If not empty, interactions with the remote A2A agent will use this context
  * ID. This context_id field can refer to a session variable like
  * '$context.variables.order_agent_session_id'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#context_id CesAgent#context_id}
  */
  readonly contextId?: string;
  /**
  * Mapping of input variable names of remote agent to GECX variable names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#input_variable_mapping CesAgent#input_variable_mapping}
  */
  readonly inputVariableMapping?: { [key: string]: string };
  /**
  * Mapping of output variable names of remote agent to GECX variable names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#output_variable_mapping CesAgent#output_variable_mapping}
  */
  readonly outputVariableMapping?: { [key: string]: string };
  /**
  * Whether streaming is enabled for the remote agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#streaming_enabled CesAgent#streaming_enabled}
  */
  readonly streamingEnabled?: boolean | cdktn.IResolvable;
  /**
  * agent_card block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#agent_card CesAgent#agent_card}
  */
  readonly agentCard?: CesAgentRemoteA2AAgentA2AConfigAgentCard;
  /**
  * api_authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#api_authentication CesAgent#api_authentication}
  */
  readonly apiAuthentication?: CesAgentRemoteA2AAgentA2AConfigApiAuthentication;
}

export function cesAgentRemoteA2AAgentA2AConfigToTerraform(struct?: CesAgentRemoteA2AAgentA2AConfigOutputReference | CesAgentRemoteA2AAgentA2AConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    agent_registry: cdktn.stringToTerraform(struct!.agentRegistry),
    context_id: cdktn.stringToTerraform(struct!.contextId),
    input_variable_mapping: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.inputVariableMapping),
    output_variable_mapping: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.outputVariableMapping),
    streaming_enabled: cdktn.booleanToTerraform(struct!.streamingEnabled),
    agent_card: cesAgentRemoteA2AAgentA2AConfigAgentCardToTerraform(struct!.agentCard),
    api_authentication: cesAgentRemoteA2AAgentA2AConfigApiAuthenticationToTerraform(struct!.apiAuthentication),
  }
}


export function cesAgentRemoteA2AAgentA2AConfigToHclTerraform(struct?: CesAgentRemoteA2AAgentA2AConfigOutputReference | CesAgentRemoteA2AAgentA2AConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    agent_registry: {
      value: cdktn.stringToHclTerraform(struct!.agentRegistry),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    context_id: {
      value: cdktn.stringToHclTerraform(struct!.contextId),
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
    streaming_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.streamingEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    agent_card: {
      value: cesAgentRemoteA2AAgentA2AConfigAgentCardToHclTerraform(struct!.agentCard),
      isBlock: true,
      type: "list",
      storageClassType: "CesAgentRemoteA2AAgentA2AConfigAgentCardList",
    },
    api_authentication: {
      value: cesAgentRemoteA2AAgentA2AConfigApiAuthenticationToHclTerraform(struct!.apiAuthentication),
      isBlock: true,
      type: "list",
      storageClassType: "CesAgentRemoteA2AAgentA2AConfigApiAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CesAgentRemoteA2AAgentA2AConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CesAgentRemoteA2AAgentA2AConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agentRegistry !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentRegistry = this._agentRegistry;
    }
    if (this._contextId !== undefined) {
      hasAnyValues = true;
      internalValueResult.contextId = this._contextId;
    }
    if (this._inputVariableMapping !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputVariableMapping = this._inputVariableMapping;
    }
    if (this._outputVariableMapping !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputVariableMapping = this._outputVariableMapping;
    }
    if (this._streamingEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamingEnabled = this._streamingEnabled;
    }
    if (this._agentCard?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentCard = this._agentCard?.internalValue;
    }
    if (this._apiAuthentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiAuthentication = this._apiAuthentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAgentRemoteA2AAgentA2AConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._agentRegistry = undefined;
      this._contextId = undefined;
      this._inputVariableMapping = undefined;
      this._outputVariableMapping = undefined;
      this._streamingEnabled = undefined;
      this._agentCard.internalValue = undefined;
      this._apiAuthentication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._agentRegistry = value.agentRegistry;
      this._contextId = value.contextId;
      this._inputVariableMapping = value.inputVariableMapping;
      this._outputVariableMapping = value.outputVariableMapping;
      this._streamingEnabled = value.streamingEnabled;
      this._agentCard.internalValue = value.agentCard;
      this._apiAuthentication.internalValue = value.apiAuthentication;
    }
  }

  // agent_registry - computed: false, optional: true, required: false
  private _agentRegistry?: string; 
  public get agentRegistry() {
    return this.getStringAttribute('agent_registry');
  }
  public set agentRegistry(value: string) {
    this._agentRegistry = value;
  }
  public resetAgentRegistry() {
    this._agentRegistry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentRegistryInput() {
    return this._agentRegistry;
  }

  // context_id - computed: false, optional: true, required: false
  private _contextId?: string; 
  public get contextId() {
    return this.getStringAttribute('context_id');
  }
  public set contextId(value: string) {
    this._contextId = value;
  }
  public resetContextId() {
    this._contextId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextIdInput() {
    return this._contextId;
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

  // streaming_enabled - computed: false, optional: true, required: false
  private _streamingEnabled?: boolean | cdktn.IResolvable; 
  public get streamingEnabled() {
    return this.getBooleanAttribute('streaming_enabled');
  }
  public set streamingEnabled(value: boolean | cdktn.IResolvable) {
    this._streamingEnabled = value;
  }
  public resetStreamingEnabled() {
    this._streamingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamingEnabledInput() {
    return this._streamingEnabled;
  }

  // agent_card - computed: false, optional: true, required: false
  private _agentCard = new CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference(this, "agent_card");
  public get agentCard() {
    return this._agentCard;
  }
  public putAgentCard(value: CesAgentRemoteA2AAgentA2AConfigAgentCard) {
    this._agentCard.internalValue = value;
  }
  public resetAgentCard() {
    this._agentCard.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentCardInput() {
    return this._agentCard.internalValue;
  }

  // api_authentication - computed: false, optional: true, required: false
  private _apiAuthentication = new CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference(this, "api_authentication");
  public get apiAuthentication() {
    return this._apiAuthentication;
  }
  public putApiAuthentication(value: CesAgentRemoteA2AAgentA2AConfigApiAuthentication) {
    this._apiAuthentication.internalValue = value;
  }
  public resetApiAuthentication() {
    this._apiAuthentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiAuthenticationInput() {
    return this._apiAuthentication.internalValue;
  }
}
export interface CesAgentRemoteA2AAgent {
  /**
  * a2a_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#a2a_config CesAgent#a2a_config}
  */
  readonly a2AConfig: CesAgentRemoteA2AAgentA2AConfig;
}

export function cesAgentRemoteA2AAgentToTerraform(struct?: CesAgentRemoteA2AAgentOutputReference | CesAgentRemoteA2AAgent): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    a2a_config: cesAgentRemoteA2AAgentA2AConfigToTerraform(struct!.a2AConfig),
  }
}


export function cesAgentRemoteA2AAgentToHclTerraform(struct?: CesAgentRemoteA2AAgentOutputReference | CesAgentRemoteA2AAgent): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    a2a_config: {
      value: cesAgentRemoteA2AAgentA2AConfigToHclTerraform(struct!.a2AConfig),
      isBlock: true,
      type: "list",
      storageClassType: "CesAgentRemoteA2AAgentA2AConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CesAgentRemoteA2AAgentOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CesAgentRemoteA2AAgent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._a2AConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.a2AConfig = this._a2AConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAgentRemoteA2AAgent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._a2AConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._a2AConfig.internalValue = value.a2AConfig;
    }
  }

  // a2a_config - computed: false, optional: false, required: true
  private _a2AConfig = new CesAgentRemoteA2AAgentA2AConfigOutputReference(this, "a2a_config");
  public get a2AConfig() {
    return this._a2AConfig;
  }
  public putA2AConfig(value: CesAgentRemoteA2AAgentA2AConfig) {
    this._a2AConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get a2AConfigInput() {
    return this._a2AConfig.internalValue;
  }
}
export interface CesAgentRemoteDialogflowAgent {
  /**
  * The
  * [Dialogflow](https://cloud.google.com/dialogflow/cx/docs/concept/console-conversational-agents
  * agent resource name.
  * Format: 'projects/{project}/locations/{location}/agents/{agent}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#agent CesAgent#agent}
  */
  readonly agent: string;
  /**
  * The environment ID of the Dialogflow agent be used for the agent
  * execution. If not specified, the draft environment will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#environment_id CesAgent#environment_id}
  */
  readonly environmentId?: string;
  /**
  * The flow ID of the flow in the Dialogflow agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#flow_id CesAgent#flow_id}
  */
  readonly flowId: string;
  /**
  * The mapping of the app variables names to the Dialogflow session
  * parameters names to be sent to the Dialogflow agent as input.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#input_variable_mapping CesAgent#input_variable_mapping}
  */
  readonly inputVariableMapping?: { [key: string]: string };
  /**
  * The name of the variable that contains the language code to be used for
  * the Dialogflow session. If unspecified, the default language code of the
  * Dialogflow agent will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#language_code_variable CesAgent#language_code_variable}
  */
  readonly languageCodeVariable?: string;
  /**
  * The mapping of the Dialogflow session parameters names to the app
  * variables names to be sent back to the CES agent after the Dialogflow
  * agent execution ends.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#output_variable_mapping CesAgent#output_variable_mapping}
  */
  readonly outputVariableMapping?: { [key: string]: string };
  /**
  * Indicates whether to respect the message-level interruption settings configured in the Dialogflow agent. * If false: all response messages from the Dialogflow agent follow the app-level barge-in settings. * If true: only response messages with ['allow_playback_interruption'](https://docs.cloud.google.com/dialogflow/cx/docs/reference/rpc/google.cloud.dialogflow.cx.v3#text) set to true will be interruptable, all other messages follow the app-level barge-in settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#respect_response_interruption_settings CesAgent#respect_response_interruption_settings}
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
    language_code_variable: cdktn.stringToTerraform(struct!.languageCodeVariable),
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
    language_code_variable: {
      value: cdktn.stringToHclTerraform(struct!.languageCodeVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    if (this._languageCodeVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.languageCodeVariable = this._languageCodeVariable;
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
      this._languageCodeVariable = undefined;
      this._outputVariableMapping = undefined;
      this._respectResponseInterruptionSettings = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._agent = value.agent;
      this._environmentId = value.environmentId;
      this._flowId = value.flowId;
      this._inputVariableMapping = value.inputVariableMapping;
      this._languageCodeVariable = value.languageCodeVariable;
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

  // language_code_variable - computed: false, optional: true, required: false
  private _languageCodeVariable?: string; 
  public get languageCodeVariable() {
    return this.getStringAttribute('language_code_variable');
  }
  public set languageCodeVariable(value: string) {
    this._languageCodeVariable = value;
  }
  public resetLanguageCodeVariable() {
    this._languageCodeVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get languageCodeVariableInput() {
    return this._languageCodeVariable;
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#create CesAgent#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#delete CesAgent#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#update CesAgent#update}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#tool_ids CesAgent#tool_ids}
  */
  readonly toolIds?: string[];
  /**
  * The resource name of the toolset.
  * Format:
  * 'projects/{project}/locations/{location}/apps/{app}/toolsets/{toolset}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#toolset CesAgent#toolset}
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
export interface CesAgentTransferRulesDeterministicTransferExpressionCondition {
  /**
  * The string representation of cloud.api.Expression condition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#expression CesAgent#expression}
  */
  readonly expression: string;
}

export function cesAgentTransferRulesDeterministicTransferExpressionConditionToTerraform(struct?: CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference | CesAgentTransferRulesDeterministicTransferExpressionCondition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    expression: cdktn.stringToTerraform(struct!.expression),
  }
}


export function cesAgentTransferRulesDeterministicTransferExpressionConditionToHclTerraform(struct?: CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference | CesAgentTransferRulesDeterministicTransferExpressionCondition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    expression: {
      value: cdktn.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CesAgentTransferRulesDeterministicTransferExpressionCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAgentTransferRulesDeterministicTransferExpressionCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._expression = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._expression = value.expression;
    }
  }

  // expression - computed: false, optional: false, required: true
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }
}
export interface CesAgentTransferRulesDeterministicTransferPythonCodeCondition {
  /**
  * The python code to execute. The function must be named
  * 'should_trigger_transfer_callback'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#python_code CesAgent#python_code}
  */
  readonly pythonCode: string;
}

export function cesAgentTransferRulesDeterministicTransferPythonCodeConditionToTerraform(struct?: CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference | CesAgentTransferRulesDeterministicTransferPythonCodeCondition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    python_code: cdktn.stringToTerraform(struct!.pythonCode),
  }
}


export function cesAgentTransferRulesDeterministicTransferPythonCodeConditionToHclTerraform(struct?: CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference | CesAgentTransferRulesDeterministicTransferPythonCodeCondition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
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

export class CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CesAgentTransferRulesDeterministicTransferPythonCodeCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pythonCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.pythonCode = this._pythonCode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAgentTransferRulesDeterministicTransferPythonCodeCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._pythonCode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._pythonCode = value.pythonCode;
    }
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
export interface CesAgentTransferRulesDeterministicTransfer {
  /**
  * expression_condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#expression_condition CesAgent#expression_condition}
  */
  readonly expressionCondition?: CesAgentTransferRulesDeterministicTransferExpressionCondition;
  /**
  * python_code_condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#python_code_condition CesAgent#python_code_condition}
  */
  readonly pythonCodeCondition?: CesAgentTransferRulesDeterministicTransferPythonCodeCondition;
}

export function cesAgentTransferRulesDeterministicTransferToTerraform(struct?: CesAgentTransferRulesDeterministicTransferOutputReference | CesAgentTransferRulesDeterministicTransfer): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    expression_condition: cesAgentTransferRulesDeterministicTransferExpressionConditionToTerraform(struct!.expressionCondition),
    python_code_condition: cesAgentTransferRulesDeterministicTransferPythonCodeConditionToTerraform(struct!.pythonCodeCondition),
  }
}


export function cesAgentTransferRulesDeterministicTransferToHclTerraform(struct?: CesAgentTransferRulesDeterministicTransferOutputReference | CesAgentTransferRulesDeterministicTransfer): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    expression_condition: {
      value: cesAgentTransferRulesDeterministicTransferExpressionConditionToHclTerraform(struct!.expressionCondition),
      isBlock: true,
      type: "list",
      storageClassType: "CesAgentTransferRulesDeterministicTransferExpressionConditionList",
    },
    python_code_condition: {
      value: cesAgentTransferRulesDeterministicTransferPythonCodeConditionToHclTerraform(struct!.pythonCodeCondition),
      isBlock: true,
      type: "list",
      storageClassType: "CesAgentTransferRulesDeterministicTransferPythonCodeConditionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CesAgentTransferRulesDeterministicTransferOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CesAgentTransferRulesDeterministicTransfer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expressionCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.expressionCondition = this._expressionCondition?.internalValue;
    }
    if (this._pythonCodeCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pythonCodeCondition = this._pythonCodeCondition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAgentTransferRulesDeterministicTransfer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._expressionCondition.internalValue = undefined;
      this._pythonCodeCondition.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._expressionCondition.internalValue = value.expressionCondition;
      this._pythonCodeCondition.internalValue = value.pythonCodeCondition;
    }
  }

  // expression_condition - computed: false, optional: true, required: false
  private _expressionCondition = new CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference(this, "expression_condition");
  public get expressionCondition() {
    return this._expressionCondition;
  }
  public putExpressionCondition(value: CesAgentTransferRulesDeterministicTransferExpressionCondition) {
    this._expressionCondition.internalValue = value;
  }
  public resetExpressionCondition() {
    this._expressionCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionConditionInput() {
    return this._expressionCondition.internalValue;
  }

  // python_code_condition - computed: false, optional: true, required: false
  private _pythonCodeCondition = new CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference(this, "python_code_condition");
  public get pythonCodeCondition() {
    return this._pythonCodeCondition;
  }
  public putPythonCodeCondition(value: CesAgentTransferRulesDeterministicTransferPythonCodeCondition) {
    this._pythonCodeCondition.internalValue = value;
  }
  public resetPythonCodeCondition() {
    this._pythonCodeCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pythonCodeConditionInput() {
    return this._pythonCodeCondition.internalValue;
  }
}
export interface CesAgentTransferRulesDisablePlannerTransferExpressionCondition {
  /**
  * The string representation of cloud.api.Expression condition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#expression CesAgent#expression}
  */
  readonly expression: string;
}

export function cesAgentTransferRulesDisablePlannerTransferExpressionConditionToTerraform(struct?: CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference | CesAgentTransferRulesDisablePlannerTransferExpressionCondition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    expression: cdktn.stringToTerraform(struct!.expression),
  }
}


export function cesAgentTransferRulesDisablePlannerTransferExpressionConditionToHclTerraform(struct?: CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference | CesAgentTransferRulesDisablePlannerTransferExpressionCondition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    expression: {
      value: cdktn.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CesAgentTransferRulesDisablePlannerTransferExpressionCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAgentTransferRulesDisablePlannerTransferExpressionCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._expression = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._expression = value.expression;
    }
  }

  // expression - computed: false, optional: false, required: true
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }
}
export interface CesAgentTransferRulesDisablePlannerTransfer {
  /**
  * expression_condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#expression_condition CesAgent#expression_condition}
  */
  readonly expressionCondition: CesAgentTransferRulesDisablePlannerTransferExpressionCondition;
}

export function cesAgentTransferRulesDisablePlannerTransferToTerraform(struct?: CesAgentTransferRulesDisablePlannerTransferOutputReference | CesAgentTransferRulesDisablePlannerTransfer): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    expression_condition: cesAgentTransferRulesDisablePlannerTransferExpressionConditionToTerraform(struct!.expressionCondition),
  }
}


export function cesAgentTransferRulesDisablePlannerTransferToHclTerraform(struct?: CesAgentTransferRulesDisablePlannerTransferOutputReference | CesAgentTransferRulesDisablePlannerTransfer): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    expression_condition: {
      value: cesAgentTransferRulesDisablePlannerTransferExpressionConditionToHclTerraform(struct!.expressionCondition),
      isBlock: true,
      type: "list",
      storageClassType: "CesAgentTransferRulesDisablePlannerTransferExpressionConditionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CesAgentTransferRulesDisablePlannerTransferOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CesAgentTransferRulesDisablePlannerTransfer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expressionCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.expressionCondition = this._expressionCondition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAgentTransferRulesDisablePlannerTransfer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._expressionCondition.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._expressionCondition.internalValue = value.expressionCondition;
    }
  }

  // expression_condition - computed: false, optional: false, required: true
  private _expressionCondition = new CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference(this, "expression_condition");
  public get expressionCondition() {
    return this._expressionCondition;
  }
  public putExpressionCondition(value: CesAgentTransferRulesDisablePlannerTransferExpressionCondition) {
    this._expressionCondition.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionConditionInput() {
    return this._expressionCondition.internalValue;
  }
}
export interface CesAgentTransferRules {
  /**
  * The resource name of the child agent the rule applies to.
  * Format: 'projects/{project}/locations/{location}/apps/{app}/agents/{agent}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#child_agent CesAgent#child_agent}
  */
  readonly childAgent: string;
  /**
  * The direction of the transfer. Possible values: ["PARENT_TO_CHILD", "CHILD_TO_PARENT"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#direction CesAgent#direction}
  */
  readonly direction: string;
  /**
  * deterministic_transfer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#deterministic_transfer CesAgent#deterministic_transfer}
  */
  readonly deterministicTransfer?: CesAgentTransferRulesDeterministicTransfer;
  /**
  * disable_planner_transfer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#disable_planner_transfer CesAgent#disable_planner_transfer}
  */
  readonly disablePlannerTransfer?: CesAgentTransferRulesDisablePlannerTransfer;
}

export function cesAgentTransferRulesToTerraform(struct?: CesAgentTransferRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    child_agent: cdktn.stringToTerraform(struct!.childAgent),
    direction: cdktn.stringToTerraform(struct!.direction),
    deterministic_transfer: cesAgentTransferRulesDeterministicTransferToTerraform(struct!.deterministicTransfer),
    disable_planner_transfer: cesAgentTransferRulesDisablePlannerTransferToTerraform(struct!.disablePlannerTransfer),
  }
}


export function cesAgentTransferRulesToHclTerraform(struct?: CesAgentTransferRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    child_agent: {
      value: cdktn.stringToHclTerraform(struct!.childAgent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    direction: {
      value: cdktn.stringToHclTerraform(struct!.direction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deterministic_transfer: {
      value: cesAgentTransferRulesDeterministicTransferToHclTerraform(struct!.deterministicTransfer),
      isBlock: true,
      type: "list",
      storageClassType: "CesAgentTransferRulesDeterministicTransferList",
    },
    disable_planner_transfer: {
      value: cesAgentTransferRulesDisablePlannerTransferToHclTerraform(struct!.disablePlannerTransfer),
      isBlock: true,
      type: "list",
      storageClassType: "CesAgentTransferRulesDisablePlannerTransferList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CesAgentTransferRulesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CesAgentTransferRules | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._childAgent !== undefined) {
      hasAnyValues = true;
      internalValueResult.childAgent = this._childAgent;
    }
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._deterministicTransfer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deterministicTransfer = this._deterministicTransfer?.internalValue;
    }
    if (this._disablePlannerTransfer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.disablePlannerTransfer = this._disablePlannerTransfer?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAgentTransferRules | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._childAgent = undefined;
      this._direction = undefined;
      this._deterministicTransfer.internalValue = undefined;
      this._disablePlannerTransfer.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._childAgent = value.childAgent;
      this._direction = value.direction;
      this._deterministicTransfer.internalValue = value.deterministicTransfer;
      this._disablePlannerTransfer.internalValue = value.disablePlannerTransfer;
    }
  }

  // child_agent - computed: false, optional: false, required: true
  private _childAgent?: string; 
  public get childAgent() {
    return this.getStringAttribute('child_agent');
  }
  public set childAgent(value: string) {
    this._childAgent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get childAgentInput() {
    return this._childAgent;
  }

  // direction - computed: false, optional: false, required: true
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // deterministic_transfer - computed: false, optional: true, required: false
  private _deterministicTransfer = new CesAgentTransferRulesDeterministicTransferOutputReference(this, "deterministic_transfer");
  public get deterministicTransfer() {
    return this._deterministicTransfer;
  }
  public putDeterministicTransfer(value: CesAgentTransferRulesDeterministicTransfer) {
    this._deterministicTransfer.internalValue = value;
  }
  public resetDeterministicTransfer() {
    this._deterministicTransfer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deterministicTransferInput() {
    return this._deterministicTransfer.internalValue;
  }

  // disable_planner_transfer - computed: false, optional: true, required: false
  private _disablePlannerTransfer = new CesAgentTransferRulesDisablePlannerTransferOutputReference(this, "disable_planner_transfer");
  public get disablePlannerTransfer() {
    return this._disablePlannerTransfer;
  }
  public putDisablePlannerTransfer(value: CesAgentTransferRulesDisablePlannerTransfer) {
    this._disablePlannerTransfer.internalValue = value;
  }
  public resetDisablePlannerTransfer() {
    this._disablePlannerTransfer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disablePlannerTransferInput() {
    return this._disablePlannerTransfer.internalValue;
  }
}

export class CesAgentTransferRulesList extends cdktn.ComplexList {
  public internalValue? : CesAgentTransferRules[] | cdktn.IResolvable

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
  public get(index: number): CesAgentTransferRulesOutputReference {
    return new CesAgentTransferRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent google_ces_agent}
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
  * @param importFromId The id of the existing CesAgent that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CesAgent to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_ces_agent", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent google_ces_agent} Resource
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
        providerVersion: '8.6.0',
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
    this._remoteA2AAgent.internalValue = config.remoteA2AAgent;
    this._remoteDialogflowAgent.internalValue = config.remoteDialogflowAgent;
    this._timeouts.internalValue = config.timeouts;
    this._toolsets.internalValue = config.toolsets;
    this._transferRules.internalValue = config.transferRules;
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

  // remote_a2a_agent - computed: false, optional: true, required: false
  private _remoteA2AAgent = new CesAgentRemoteA2AAgentOutputReference(this, "remote_a2a_agent");
  public get remoteA2AAgent() {
    return this._remoteA2AAgent;
  }
  public putRemoteA2AAgent(value: CesAgentRemoteA2AAgent) {
    this._remoteA2AAgent.internalValue = value;
  }
  public resetRemoteA2AAgent() {
    this._remoteA2AAgent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteA2AAgentInput() {
    return this._remoteA2AAgent.internalValue;
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

  // transfer_rules - computed: false, optional: true, required: false
  private _transferRules = new CesAgentTransferRulesList(this, "transfer_rules", false);
  public get transferRules() {
    return this._transferRules;
  }
  public putTransferRules(value: CesAgentTransferRules[] | cdktn.IResolvable) {
    this._transferRules.internalValue = value;
  }
  public resetTransferRules() {
    this._transferRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transferRulesInput() {
    return this._transferRules.internalValue;
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
      remote_a2a_agent: cesAgentRemoteA2AAgentToTerraform(this._remoteA2AAgent.internalValue),
      remote_dialogflow_agent: cesAgentRemoteDialogflowAgentToTerraform(this._remoteDialogflowAgent.internalValue),
      timeouts: cesAgentTimeoutsToTerraform(this._timeouts.internalValue),
      toolsets: cdktn.listMapper(cesAgentToolsetsToTerraform, true)(this._toolsets.internalValue),
      transfer_rules: cdktn.listMapper(cesAgentTransferRulesToTerraform, true)(this._transferRules.internalValue),
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
      remote_a2a_agent: {
        value: cesAgentRemoteA2AAgentToHclTerraform(this._remoteA2AAgent.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CesAgentRemoteA2AAgentList",
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
      transfer_rules: {
        value: cdktn.listMapperHcl(cesAgentTransferRulesToHclTerraform, true)(this._transferRules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CesAgentTransferRulesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
