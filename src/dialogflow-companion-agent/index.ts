/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DialogflowCompanionAgentConfig extends cdktn.TerraformMetaArguments {
  /**
  * The ID to use for the companion agent, which will become the final component of the companion agent's resource name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#companion_agent_id DialogflowCompanionAgent#companion_agent_id}
  */
  readonly companionAgentId: string;
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#deletion_policy DialogflowCompanionAgent#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Description for the companion agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#description DialogflowCompanionAgent#description}
  */
  readonly description?: string;
  /**
  * Display name for the companion agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#display_name DialogflowCompanionAgent#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#id DialogflowCompanionAgent#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The location of the companion agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#location DialogflowCompanionAgent#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#project DialogflowCompanionAgent#project}
  */
  readonly project?: string;
  /**
  * ces_tool_specs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#ces_tool_specs DialogflowCompanionAgent#ces_tool_specs}
  */
  readonly cesToolSpecs?: DialogflowCompanionAgentCesToolSpecs[] | cdktn.IResolvable;
  /**
  * skill_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#skill_configs DialogflowCompanionAgent#skill_configs}
  */
  readonly skillConfigs?: DialogflowCompanionAgentSkillConfigs[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#timeouts DialogflowCompanionAgent#timeouts}
  */
  readonly timeouts?: DialogflowCompanionAgentTimeouts;
  /**
  * toolset_tools block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#toolset_tools DialogflowCompanionAgent#toolset_tools}
  */
  readonly toolsetTools?: DialogflowCompanionAgentToolsetTools[] | cdktn.IResolvable;
}
export interface DialogflowCompanionAgentCesToolSpecsParameterOverrides {
  /**
  * The key of the context reference in ingested context references.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#context_reference_key DialogflowCompanionAgent#context_reference_key}
  */
  readonly contextReferenceKey: string;
  /**
  * The path into the JSON object of the latest content ingested under 'context_reference_key' (e.g. 'email' or 'user.email'). If omitted, the entire content under 'context_reference_key' is used.
  * If the path cannot be resolved when the tool is called, the value predicted by the model is used (or omitted if the model did not predict it).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#field_path DialogflowCompanionAgent#field_path}
  */
  readonly fieldPath?: string;
  /**
  * The name of the tool input parameter to override, as defined in the tool's input schema. For example, 'user_email'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#parameter_name DialogflowCompanionAgent#parameter_name}
  */
  readonly parameterName: string;
}

export function dialogflowCompanionAgentCesToolSpecsParameterOverridesToTerraform(struct?: DialogflowCompanionAgentCesToolSpecsParameterOverrides | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    context_reference_key: cdktn.stringToTerraform(struct!.contextReferenceKey),
    field_path: cdktn.stringToTerraform(struct!.fieldPath),
    parameter_name: cdktn.stringToTerraform(struct!.parameterName),
  }
}


export function dialogflowCompanionAgentCesToolSpecsParameterOverridesToHclTerraform(struct?: DialogflowCompanionAgentCesToolSpecsParameterOverrides | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    context_reference_key: {
      value: cdktn.stringToHclTerraform(struct!.contextReferenceKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_path: {
      value: cdktn.stringToHclTerraform(struct!.fieldPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameter_name: {
      value: cdktn.stringToHclTerraform(struct!.parameterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DialogflowCompanionAgentCesToolSpecsParameterOverrides | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contextReferenceKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.contextReferenceKey = this._contextReferenceKey;
    }
    if (this._fieldPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldPath = this._fieldPath;
    }
    if (this._parameterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterName = this._parameterName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCompanionAgentCesToolSpecsParameterOverrides | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contextReferenceKey = undefined;
      this._fieldPath = undefined;
      this._parameterName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contextReferenceKey = value.contextReferenceKey;
      this._fieldPath = value.fieldPath;
      this._parameterName = value.parameterName;
    }
  }

  // context_reference_key - computed: false, optional: false, required: true
  private _contextReferenceKey?: string; 
  public get contextReferenceKey() {
    return this.getStringAttribute('context_reference_key');
  }
  public set contextReferenceKey(value: string) {
    this._contextReferenceKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contextReferenceKeyInput() {
    return this._contextReferenceKey;
  }

  // field_path - computed: false, optional: true, required: false
  private _fieldPath?: string; 
  public get fieldPath() {
    return this.getStringAttribute('field_path');
  }
  public set fieldPath(value: string) {
    this._fieldPath = value;
  }
  public resetFieldPath() {
    this._fieldPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldPathInput() {
    return this._fieldPath;
  }

  // parameter_name - computed: false, optional: false, required: true
  private _parameterName?: string; 
  public get parameterName() {
    return this.getStringAttribute('parameter_name');
  }
  public set parameterName(value: string) {
    this._parameterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterNameInput() {
    return this._parameterName;
  }
}

export class DialogflowCompanionAgentCesToolSpecsParameterOverridesList extends cdktn.ComplexList {
  public internalValue? : DialogflowCompanionAgentCesToolSpecsParameterOverrides[] | cdktn.IResolvable

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
  public get(index: number): DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference {
    return new DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DialogflowCompanionAgentCesToolSpecs {
  /**
  * The resource name of the CES tool.
  * Format: 'projects/{project}/locations/{location}/apps/{app}/tools/{tool}'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#ces_tool DialogflowCompanionAgent#ces_tool}
  */
  readonly cesTool?: string;
  /**
  * Indicates whether the tool requires human confirmation. Possible values: ["REQUIRED", "NOT_REQUIRED"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#confirmation_requirement DialogflowCompanionAgent#confirmation_requirement}
  */
  readonly confirmationRequirement?: string;
  /**
  * Indicates whether the tool is enabled in proactive mode.
  * All tools are enabled in proactive mode by default. To disable a tool in proactive mode, set this field to 'false'.
  * NOTE: At least one of 'proactive_enabled' or 'reactive_enabled' should be 'true' else the tool will be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#proactive_enabled DialogflowCompanionAgent#proactive_enabled}
  */
  readonly proactiveEnabled?: boolean | cdktn.IResolvable;
  /**
  * Indicates whether the tool is enabled in reactive mode.
  * All tools are disabled in reactive mode by default. To enable a tool in reactive mode, set this field to 'true'.
  * NOTE: At least one of 'reactive_enabled' or 'proactive_enabled' should be 'true' else the tool will be ignored. CompanionAgent config will throw an error if any unsupported tool is enabled in reactive mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#reactive_enabled DialogflowCompanionAgent#reactive_enabled}
  */
  readonly reactiveEnabled?: boolean | cdktn.IResolvable;
  /**
  * parameter_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#parameter_overrides DialogflowCompanionAgent#parameter_overrides}
  */
  readonly parameterOverrides?: DialogflowCompanionAgentCesToolSpecsParameterOverrides[] | cdktn.IResolvable;
}

export function dialogflowCompanionAgentCesToolSpecsToTerraform(struct?: DialogflowCompanionAgentCesToolSpecs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    ces_tool: cdktn.stringToTerraform(struct!.cesTool),
    confirmation_requirement: cdktn.stringToTerraform(struct!.confirmationRequirement),
    proactive_enabled: cdktn.booleanToTerraform(struct!.proactiveEnabled),
    reactive_enabled: cdktn.booleanToTerraform(struct!.reactiveEnabled),
    parameter_overrides: cdktn.listMapper(dialogflowCompanionAgentCesToolSpecsParameterOverridesToTerraform, true)(struct!.parameterOverrides),
  }
}


export function dialogflowCompanionAgentCesToolSpecsToHclTerraform(struct?: DialogflowCompanionAgentCesToolSpecs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    ces_tool: {
      value: cdktn.stringToHclTerraform(struct!.cesTool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    confirmation_requirement: {
      value: cdktn.stringToHclTerraform(struct!.confirmationRequirement),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proactive_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.proactiveEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    reactive_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.reactiveEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    parameter_overrides: {
      value: cdktn.listMapperHcl(dialogflowCompanionAgentCesToolSpecsParameterOverridesToHclTerraform, true)(struct!.parameterOverrides),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCompanionAgentCesToolSpecsParameterOverridesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCompanionAgentCesToolSpecsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DialogflowCompanionAgentCesToolSpecs | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cesTool !== undefined) {
      hasAnyValues = true;
      internalValueResult.cesTool = this._cesTool;
    }
    if (this._confirmationRequirement !== undefined) {
      hasAnyValues = true;
      internalValueResult.confirmationRequirement = this._confirmationRequirement;
    }
    if (this._proactiveEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.proactiveEnabled = this._proactiveEnabled;
    }
    if (this._reactiveEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.reactiveEnabled = this._reactiveEnabled;
    }
    if (this._parameterOverrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterOverrides = this._parameterOverrides?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCompanionAgentCesToolSpecs | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cesTool = undefined;
      this._confirmationRequirement = undefined;
      this._proactiveEnabled = undefined;
      this._reactiveEnabled = undefined;
      this._parameterOverrides.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cesTool = value.cesTool;
      this._confirmationRequirement = value.confirmationRequirement;
      this._proactiveEnabled = value.proactiveEnabled;
      this._reactiveEnabled = value.reactiveEnabled;
      this._parameterOverrides.internalValue = value.parameterOverrides;
    }
  }

  // ces_tool - computed: false, optional: true, required: false
  private _cesTool?: string; 
  public get cesTool() {
    return this.getStringAttribute('ces_tool');
  }
  public set cesTool(value: string) {
    this._cesTool = value;
  }
  public resetCesTool() {
    this._cesTool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cesToolInput() {
    return this._cesTool;
  }

  // confirmation_requirement - computed: false, optional: true, required: false
  private _confirmationRequirement?: string; 
  public get confirmationRequirement() {
    return this.getStringAttribute('confirmation_requirement');
  }
  public set confirmationRequirement(value: string) {
    this._confirmationRequirement = value;
  }
  public resetConfirmationRequirement() {
    this._confirmationRequirement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confirmationRequirementInput() {
    return this._confirmationRequirement;
  }

  // proactive_enabled - computed: false, optional: true, required: false
  private _proactiveEnabled?: boolean | cdktn.IResolvable; 
  public get proactiveEnabled() {
    return this.getBooleanAttribute('proactive_enabled');
  }
  public set proactiveEnabled(value: boolean | cdktn.IResolvable) {
    this._proactiveEnabled = value;
  }
  public resetProactiveEnabled() {
    this._proactiveEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proactiveEnabledInput() {
    return this._proactiveEnabled;
  }

  // reactive_enabled - computed: false, optional: true, required: false
  private _reactiveEnabled?: boolean | cdktn.IResolvable; 
  public get reactiveEnabled() {
    return this.getBooleanAttribute('reactive_enabled');
  }
  public set reactiveEnabled(value: boolean | cdktn.IResolvable) {
    this._reactiveEnabled = value;
  }
  public resetReactiveEnabled() {
    this._reactiveEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reactiveEnabledInput() {
    return this._reactiveEnabled;
  }

  // parameter_overrides - computed: false, optional: true, required: false
  private _parameterOverrides = new DialogflowCompanionAgentCesToolSpecsParameterOverridesList(this, "parameter_overrides", false);
  public get parameterOverrides() {
    return this._parameterOverrides;
  }
  public putParameterOverrides(value: DialogflowCompanionAgentCesToolSpecsParameterOverrides[] | cdktn.IResolvable) {
    this._parameterOverrides.internalValue = value;
  }
  public resetParameterOverrides() {
    this._parameterOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterOverridesInput() {
    return this._parameterOverrides.internalValue;
  }
}

export class DialogflowCompanionAgentCesToolSpecsList extends cdktn.ComplexList {
  public internalValue? : DialogflowCompanionAgentCesToolSpecs[] | cdktn.IResolvable

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
  public get(index: number): DialogflowCompanionAgentCesToolSpecsOutputReference {
    return new DialogflowCompanionAgentCesToolSpecsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions {
  /**
  * Description of action item.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#description DialogflowCompanionAgent#description}
  */
  readonly description: string;
}

export function dialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsToTerraform(struct?: DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
  }
}


export function dialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsToHclTerraform(struct?: DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
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
}

export class DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList extends cdktn.ComplexList {
  public internalValue? : DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions[] | cdktn.IResolvable

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
  public get(index: number): DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference {
    return new DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions {
  /**
  * The condition of the instruction.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#condition DialogflowCompanionAgent#condition}
  */
  readonly condition?: string;
  /**
  * Whether to disable suggested reply generation for this instruction.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#disable_suggested_reply DialogflowCompanionAgent#disable_suggested_reply}
  */
  readonly disableSuggestedReply?: boolean | cdktn.IResolvable;
  /**
  * The detailed description of this instruction.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#display_details DialogflowCompanionAgent#display_details}
  */
  readonly displayDetails?: string;
  /**
  * Display name for the instruction.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#display_name DialogflowCompanionAgent#display_name}
  */
  readonly displayName?: string;
  /**
  * Event that triggers the guidance instruction. Possible values: ["END_OF_UTTERANCE", "CUSTOMER_MESSAGE", "AGENT_MESSAGE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#trigger_event DialogflowCompanionAgent#trigger_event}
  */
  readonly triggerEvent?: string;
  /**
  * actions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#actions DialogflowCompanionAgent#actions}
  */
  readonly actions?: DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions[] | cdktn.IResolvable;
}

export function dialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsToTerraform(struct?: DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    condition: cdktn.stringToTerraform(struct!.condition),
    disable_suggested_reply: cdktn.booleanToTerraform(struct!.disableSuggestedReply),
    display_details: cdktn.stringToTerraform(struct!.displayDetails),
    display_name: cdktn.stringToTerraform(struct!.displayName),
    trigger_event: cdktn.stringToTerraform(struct!.triggerEvent),
    actions: cdktn.listMapper(dialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsToTerraform, true)(struct!.actions),
  }
}


export function dialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsToHclTerraform(struct?: DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    condition: {
      value: cdktn.stringToHclTerraform(struct!.condition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_suggested_reply: {
      value: cdktn.booleanToHclTerraform(struct!.disableSuggestedReply),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    display_details: {
      value: cdktn.stringToHclTerraform(struct!.displayDetails),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_name: {
      value: cdktn.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trigger_event: {
      value: cdktn.stringToHclTerraform(struct!.triggerEvent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    actions: {
      value: cdktn.listMapperHcl(dialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsToHclTerraform, true)(struct!.actions),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    if (this._disableSuggestedReply !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableSuggestedReply = this._disableSuggestedReply;
    }
    if (this._displayDetails !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayDetails = this._displayDetails;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._triggerEvent !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggerEvent = this._triggerEvent;
    }
    if (this._actions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._condition = undefined;
      this._disableSuggestedReply = undefined;
      this._displayDetails = undefined;
      this._displayName = undefined;
      this._triggerEvent = undefined;
      this._actions.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._condition = value.condition;
      this._disableSuggestedReply = value.disableSuggestedReply;
      this._displayDetails = value.displayDetails;
      this._displayName = value.displayName;
      this._triggerEvent = value.triggerEvent;
      this._actions.internalValue = value.actions;
    }
  }

  // condition - computed: false, optional: true, required: false
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  public resetCondition() {
    this._condition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
  }

  // disable_suggested_reply - computed: false, optional: true, required: false
  private _disableSuggestedReply?: boolean | cdktn.IResolvable; 
  public get disableSuggestedReply() {
    return this.getBooleanAttribute('disable_suggested_reply');
  }
  public set disableSuggestedReply(value: boolean | cdktn.IResolvable) {
    this._disableSuggestedReply = value;
  }
  public resetDisableSuggestedReply() {
    this._disableSuggestedReply = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableSuggestedReplyInput() {
    return this._disableSuggestedReply;
  }

  // display_details - computed: false, optional: true, required: false
  private _displayDetails?: string; 
  public get displayDetails() {
    return this.getStringAttribute('display_details');
  }
  public set displayDetails(value: string) {
    this._displayDetails = value;
  }
  public resetDisplayDetails() {
    this._displayDetails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayDetailsInput() {
    return this._displayDetails;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // actions - computed: false, optional: true, required: false
  private _actions = new DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList(this, "actions", false);
  public get actions() {
    return this._actions;
  }
  public putActions(value: DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions[] | cdktn.IResolvable) {
    this._actions.internalValue = value;
  }
  public resetActions() {
    this._actions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions.internalValue;
  }
}

export class DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList extends cdktn.ComplexList {
  public internalValue? : DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions[] | cdktn.IResolvable

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
  public get(index: number): DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference {
    return new DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DialogflowCompanionAgentSkillConfigsGuidanceSkillConfig {
  /**
  * This is specific additional guidance that can be configured by the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#overarching_guidance DialogflowCompanionAgent#overarching_guidance}
  */
  readonly overarchingGuidance?: string;
  /**
  * guidance_instructions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#guidance_instructions DialogflowCompanionAgent#guidance_instructions}
  */
  readonly guidanceInstructions?: DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions[] | cdktn.IResolvable;
}

export function dialogflowCompanionAgentSkillConfigsGuidanceSkillConfigToTerraform(struct?: DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference | DialogflowCompanionAgentSkillConfigsGuidanceSkillConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    overarching_guidance: cdktn.stringToTerraform(struct!.overarchingGuidance),
    guidance_instructions: cdktn.listMapper(dialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsToTerraform, true)(struct!.guidanceInstructions),
  }
}


export function dialogflowCompanionAgentSkillConfigsGuidanceSkillConfigToHclTerraform(struct?: DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference | DialogflowCompanionAgentSkillConfigsGuidanceSkillConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    overarching_guidance: {
      value: cdktn.stringToHclTerraform(struct!.overarchingGuidance),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    guidance_instructions: {
      value: cdktn.listMapperHcl(dialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsToHclTerraform, true)(struct!.guidanceInstructions),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCompanionAgentSkillConfigsGuidanceSkillConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._overarchingGuidance !== undefined) {
      hasAnyValues = true;
      internalValueResult.overarchingGuidance = this._overarchingGuidance;
    }
    if (this._guidanceInstructions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.guidanceInstructions = this._guidanceInstructions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCompanionAgentSkillConfigsGuidanceSkillConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._overarchingGuidance = undefined;
      this._guidanceInstructions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._overarchingGuidance = value.overarchingGuidance;
      this._guidanceInstructions.internalValue = value.guidanceInstructions;
    }
  }

  // overarching_guidance - computed: false, optional: true, required: false
  private _overarchingGuidance?: string; 
  public get overarchingGuidance() {
    return this.getStringAttribute('overarching_guidance');
  }
  public set overarchingGuidance(value: string) {
    this._overarchingGuidance = value;
  }
  public resetOverarchingGuidance() {
    this._overarchingGuidance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overarchingGuidanceInput() {
    return this._overarchingGuidance;
  }

  // guidance_instructions - computed: false, optional: true, required: false
  private _guidanceInstructions = new DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList(this, "guidance_instructions", false);
  public get guidanceInstructions() {
    return this._guidanceInstructions;
  }
  public putGuidanceInstructions(value: DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions[] | cdktn.IResolvable) {
    this._guidanceInstructions.internalValue = value;
  }
  public resetGuidanceInstructions() {
    this._guidanceInstructions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guidanceInstructionsInput() {
    return this._guidanceInstructions.internalValue;
  }
}
export interface DialogflowCompanionAgentSkillConfigs {
  /**
  * The event that should trigger the skill. Possible values: ["END_OF_UTTERANCE", "CUSTOMER_MESSAGE", "AGENT_MESSAGE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#skill_triggering_event DialogflowCompanionAgent#skill_triggering_event}
  */
  readonly skillTriggeringEvent?: string;
  /**
  * guidance_skill_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#guidance_skill_config DialogflowCompanionAgent#guidance_skill_config}
  */
  readonly guidanceSkillConfig?: DialogflowCompanionAgentSkillConfigsGuidanceSkillConfig;
}

export function dialogflowCompanionAgentSkillConfigsToTerraform(struct?: DialogflowCompanionAgentSkillConfigs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    skill_triggering_event: cdktn.stringToTerraform(struct!.skillTriggeringEvent),
    guidance_skill_config: dialogflowCompanionAgentSkillConfigsGuidanceSkillConfigToTerraform(struct!.guidanceSkillConfig),
  }
}


export function dialogflowCompanionAgentSkillConfigsToHclTerraform(struct?: DialogflowCompanionAgentSkillConfigs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    skill_triggering_event: {
      value: cdktn.stringToHclTerraform(struct!.skillTriggeringEvent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    guidance_skill_config: {
      value: dialogflowCompanionAgentSkillConfigsGuidanceSkillConfigToHclTerraform(struct!.guidanceSkillConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCompanionAgentSkillConfigsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DialogflowCompanionAgentSkillConfigs | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._skillTriggeringEvent !== undefined) {
      hasAnyValues = true;
      internalValueResult.skillTriggeringEvent = this._skillTriggeringEvent;
    }
    if (this._guidanceSkillConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.guidanceSkillConfig = this._guidanceSkillConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCompanionAgentSkillConfigs | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._skillTriggeringEvent = undefined;
      this._guidanceSkillConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._skillTriggeringEvent = value.skillTriggeringEvent;
      this._guidanceSkillConfig.internalValue = value.guidanceSkillConfig;
    }
  }

  // skill_triggering_event - computed: false, optional: true, required: false
  private _skillTriggeringEvent?: string; 
  public get skillTriggeringEvent() {
    return this.getStringAttribute('skill_triggering_event');
  }
  public set skillTriggeringEvent(value: string) {
    this._skillTriggeringEvent = value;
  }
  public resetSkillTriggeringEvent() {
    this._skillTriggeringEvent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skillTriggeringEventInput() {
    return this._skillTriggeringEvent;
  }

  // guidance_skill_config - computed: false, optional: true, required: false
  private _guidanceSkillConfig = new DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference(this, "guidance_skill_config");
  public get guidanceSkillConfig() {
    return this._guidanceSkillConfig;
  }
  public putGuidanceSkillConfig(value: DialogflowCompanionAgentSkillConfigsGuidanceSkillConfig) {
    this._guidanceSkillConfig.internalValue = value;
  }
  public resetGuidanceSkillConfig() {
    this._guidanceSkillConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guidanceSkillConfigInput() {
    return this._guidanceSkillConfig.internalValue;
  }
}

export class DialogflowCompanionAgentSkillConfigsList extends cdktn.ComplexList {
  public internalValue? : DialogflowCompanionAgentSkillConfigs[] | cdktn.IResolvable

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
  public get(index: number): DialogflowCompanionAgentSkillConfigsOutputReference {
    return new DialogflowCompanionAgentSkillConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DialogflowCompanionAgentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#create DialogflowCompanionAgent#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#delete DialogflowCompanionAgent#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#update DialogflowCompanionAgent#update}
  */
  readonly update?: string;
}

export function dialogflowCompanionAgentTimeoutsToTerraform(struct?: DialogflowCompanionAgentTimeouts | cdktn.IResolvable): any {
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


export function dialogflowCompanionAgentTimeoutsToHclTerraform(struct?: DialogflowCompanionAgentTimeouts | cdktn.IResolvable): any {
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

export class DialogflowCompanionAgentTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DialogflowCompanionAgentTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DialogflowCompanionAgentTimeouts | cdktn.IResolvable | undefined) {
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
export interface DialogflowCompanionAgentToolsetToolsParameterOverrides {
  /**
  * The key of the context reference in ingested context references.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#context_reference_key DialogflowCompanionAgent#context_reference_key}
  */
  readonly contextReferenceKey: string;
  /**
  * The path into the JSON object of the latest content ingested under 'context_reference_key' (e.g. 'email' or 'user.email'). If omitted, the entire content under 'context_reference_key' is used.
  * If the path cannot be resolved when the tool is called, the value predicted by the model is used (or omitted if the model did not predict it).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#field_path DialogflowCompanionAgent#field_path}
  */
  readonly fieldPath?: string;
  /**
  * The name of the tool input parameter to override, as defined in the tool's input schema. For example, 'user_email'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#parameter_name DialogflowCompanionAgent#parameter_name}
  */
  readonly parameterName: string;
}

export function dialogflowCompanionAgentToolsetToolsParameterOverridesToTerraform(struct?: DialogflowCompanionAgentToolsetToolsParameterOverrides | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    context_reference_key: cdktn.stringToTerraform(struct!.contextReferenceKey),
    field_path: cdktn.stringToTerraform(struct!.fieldPath),
    parameter_name: cdktn.stringToTerraform(struct!.parameterName),
  }
}


export function dialogflowCompanionAgentToolsetToolsParameterOverridesToHclTerraform(struct?: DialogflowCompanionAgentToolsetToolsParameterOverrides | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    context_reference_key: {
      value: cdktn.stringToHclTerraform(struct!.contextReferenceKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_path: {
      value: cdktn.stringToHclTerraform(struct!.fieldPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameter_name: {
      value: cdktn.stringToHclTerraform(struct!.parameterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DialogflowCompanionAgentToolsetToolsParameterOverrides | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contextReferenceKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.contextReferenceKey = this._contextReferenceKey;
    }
    if (this._fieldPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldPath = this._fieldPath;
    }
    if (this._parameterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterName = this._parameterName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCompanionAgentToolsetToolsParameterOverrides | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contextReferenceKey = undefined;
      this._fieldPath = undefined;
      this._parameterName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contextReferenceKey = value.contextReferenceKey;
      this._fieldPath = value.fieldPath;
      this._parameterName = value.parameterName;
    }
  }

  // context_reference_key - computed: false, optional: false, required: true
  private _contextReferenceKey?: string; 
  public get contextReferenceKey() {
    return this.getStringAttribute('context_reference_key');
  }
  public set contextReferenceKey(value: string) {
    this._contextReferenceKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contextReferenceKeyInput() {
    return this._contextReferenceKey;
  }

  // field_path - computed: false, optional: true, required: false
  private _fieldPath?: string; 
  public get fieldPath() {
    return this.getStringAttribute('field_path');
  }
  public set fieldPath(value: string) {
    this._fieldPath = value;
  }
  public resetFieldPath() {
    this._fieldPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldPathInput() {
    return this._fieldPath;
  }

  // parameter_name - computed: false, optional: false, required: true
  private _parameterName?: string; 
  public get parameterName() {
    return this.getStringAttribute('parameter_name');
  }
  public set parameterName(value: string) {
    this._parameterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterNameInput() {
    return this._parameterName;
  }
}

export class DialogflowCompanionAgentToolsetToolsParameterOverridesList extends cdktn.ComplexList {
  public internalValue? : DialogflowCompanionAgentToolsetToolsParameterOverrides[] | cdktn.IResolvable

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
  public get(index: number): DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference {
    return new DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DialogflowCompanionAgentToolsetTools {
  /**
  * Indicates whether the tool requires human confirmation. Possible values: ["REQUIRED", "NOT_REQUIRED"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#confirmation_requirement DialogflowCompanionAgent#confirmation_requirement}
  */
  readonly confirmationRequirement?: string;
  /**
  * The 'operationId' field of the OpenAPI endpoint. The 'operationId' must be present in the toolset's definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#operation_id DialogflowCompanionAgent#operation_id}
  */
  readonly operationId?: string;
  /**
  * Indicates whether the toolset tool is enabled in proactive mode.
  * NOTE: At least one of 'proactive_enabled' or 'reactive_enabled' should be 'true' else the toolset tool will be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#proactive_enabled DialogflowCompanionAgent#proactive_enabled}
  */
  readonly proactiveEnabled?: boolean | cdktn.IResolvable;
  /**
  * Indicates whether the toolset tool is enabled in reactive mode.
  * NOTE: At least one of 'reactive_enabled' or 'proactive_enabled' should be 'true' else the toolset tool will be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#reactive_enabled DialogflowCompanionAgent#reactive_enabled}
  */
  readonly reactiveEnabled?: boolean | cdktn.IResolvable;
  /**
  * The name of the toolset to retrieve the schema for.
  * Format: 'projects/{project}/locations/{location}/apps/{app}/toolsets/{toolset}'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#toolset DialogflowCompanionAgent#toolset}
  */
  readonly toolset: string;
  /**
  * parameter_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#parameter_overrides DialogflowCompanionAgent#parameter_overrides}
  */
  readonly parameterOverrides?: DialogflowCompanionAgentToolsetToolsParameterOverrides[] | cdktn.IResolvable;
}

export function dialogflowCompanionAgentToolsetToolsToTerraform(struct?: DialogflowCompanionAgentToolsetTools | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    confirmation_requirement: cdktn.stringToTerraform(struct!.confirmationRequirement),
    operation_id: cdktn.stringToTerraform(struct!.operationId),
    proactive_enabled: cdktn.booleanToTerraform(struct!.proactiveEnabled),
    reactive_enabled: cdktn.booleanToTerraform(struct!.reactiveEnabled),
    toolset: cdktn.stringToTerraform(struct!.toolset),
    parameter_overrides: cdktn.listMapper(dialogflowCompanionAgentToolsetToolsParameterOverridesToTerraform, true)(struct!.parameterOverrides),
  }
}


export function dialogflowCompanionAgentToolsetToolsToHclTerraform(struct?: DialogflowCompanionAgentToolsetTools | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    confirmation_requirement: {
      value: cdktn.stringToHclTerraform(struct!.confirmationRequirement),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operation_id: {
      value: cdktn.stringToHclTerraform(struct!.operationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proactive_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.proactiveEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    reactive_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.reactiveEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    toolset: {
      value: cdktn.stringToHclTerraform(struct!.toolset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameter_overrides: {
      value: cdktn.listMapperHcl(dialogflowCompanionAgentToolsetToolsParameterOverridesToHclTerraform, true)(struct!.parameterOverrides),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCompanionAgentToolsetToolsParameterOverridesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCompanionAgentToolsetToolsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DialogflowCompanionAgentToolsetTools | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._confirmationRequirement !== undefined) {
      hasAnyValues = true;
      internalValueResult.confirmationRequirement = this._confirmationRequirement;
    }
    if (this._operationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.operationId = this._operationId;
    }
    if (this._proactiveEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.proactiveEnabled = this._proactiveEnabled;
    }
    if (this._reactiveEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.reactiveEnabled = this._reactiveEnabled;
    }
    if (this._toolset !== undefined) {
      hasAnyValues = true;
      internalValueResult.toolset = this._toolset;
    }
    if (this._parameterOverrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterOverrides = this._parameterOverrides?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCompanionAgentToolsetTools | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._confirmationRequirement = undefined;
      this._operationId = undefined;
      this._proactiveEnabled = undefined;
      this._reactiveEnabled = undefined;
      this._toolset = undefined;
      this._parameterOverrides.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._confirmationRequirement = value.confirmationRequirement;
      this._operationId = value.operationId;
      this._proactiveEnabled = value.proactiveEnabled;
      this._reactiveEnabled = value.reactiveEnabled;
      this._toolset = value.toolset;
      this._parameterOverrides.internalValue = value.parameterOverrides;
    }
  }

  // confirmation_requirement - computed: false, optional: true, required: false
  private _confirmationRequirement?: string; 
  public get confirmationRequirement() {
    return this.getStringAttribute('confirmation_requirement');
  }
  public set confirmationRequirement(value: string) {
    this._confirmationRequirement = value;
  }
  public resetConfirmationRequirement() {
    this._confirmationRequirement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confirmationRequirementInput() {
    return this._confirmationRequirement;
  }

  // operation_id - computed: false, optional: true, required: false
  private _operationId?: string; 
  public get operationId() {
    return this.getStringAttribute('operation_id');
  }
  public set operationId(value: string) {
    this._operationId = value;
  }
  public resetOperationId() {
    this._operationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationIdInput() {
    return this._operationId;
  }

  // proactive_enabled - computed: false, optional: true, required: false
  private _proactiveEnabled?: boolean | cdktn.IResolvable; 
  public get proactiveEnabled() {
    return this.getBooleanAttribute('proactive_enabled');
  }
  public set proactiveEnabled(value: boolean | cdktn.IResolvable) {
    this._proactiveEnabled = value;
  }
  public resetProactiveEnabled() {
    this._proactiveEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proactiveEnabledInput() {
    return this._proactiveEnabled;
  }

  // reactive_enabled - computed: false, optional: true, required: false
  private _reactiveEnabled?: boolean | cdktn.IResolvable; 
  public get reactiveEnabled() {
    return this.getBooleanAttribute('reactive_enabled');
  }
  public set reactiveEnabled(value: boolean | cdktn.IResolvable) {
    this._reactiveEnabled = value;
  }
  public resetReactiveEnabled() {
    this._reactiveEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reactiveEnabledInput() {
    return this._reactiveEnabled;
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

  // parameter_overrides - computed: false, optional: true, required: false
  private _parameterOverrides = new DialogflowCompanionAgentToolsetToolsParameterOverridesList(this, "parameter_overrides", false);
  public get parameterOverrides() {
    return this._parameterOverrides;
  }
  public putParameterOverrides(value: DialogflowCompanionAgentToolsetToolsParameterOverrides[] | cdktn.IResolvable) {
    this._parameterOverrides.internalValue = value;
  }
  public resetParameterOverrides() {
    this._parameterOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterOverridesInput() {
    return this._parameterOverrides.internalValue;
  }
}

export class DialogflowCompanionAgentToolsetToolsList extends cdktn.ComplexList {
  public internalValue? : DialogflowCompanionAgentToolsetTools[] | cdktn.IResolvable

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
  public get(index: number): DialogflowCompanionAgentToolsetToolsOutputReference {
    return new DialogflowCompanionAgentToolsetToolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent google_dialogflow_companion_agent}
*/
export class DialogflowCompanionAgent extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_dialogflow_companion_agent";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DialogflowCompanionAgent resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DialogflowCompanionAgent to import
  * @param importFromId The id of the existing DialogflowCompanionAgent that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DialogflowCompanionAgent to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_dialogflow_companion_agent", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent google_dialogflow_companion_agent} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DialogflowCompanionAgentConfig
  */
  public constructor(scope: Construct, id: string, config: DialogflowCompanionAgentConfig) {
    super(scope, id, {
      terraformResourceType: 'google_dialogflow_companion_agent',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '8.11.0',
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
    this._companionAgentId = config.companionAgentId;
    this._deletionPolicy = config.deletionPolicy;
    this._description = config.description;
    this._displayName = config.displayName;
    this._id = config.id;
    this._location = config.location;
    this._project = config.project;
    this._cesToolSpecs.internalValue = config.cesToolSpecs;
    this._skillConfigs.internalValue = config.skillConfigs;
    this._timeouts.internalValue = config.timeouts;
    this._toolsetTools.internalValue = config.toolsetTools;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // companion_agent_id - computed: false, optional: false, required: true
  private _companionAgentId?: string; 
  public get companionAgentId() {
    return this.getStringAttribute('companion_agent_id');
  }
  public set companionAgentId(value: string) {
    this._companionAgentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get companionAgentIdInput() {
    return this._companionAgentId;
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

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // ces_tool_specs - computed: false, optional: true, required: false
  private _cesToolSpecs = new DialogflowCompanionAgentCesToolSpecsList(this, "ces_tool_specs", false);
  public get cesToolSpecs() {
    return this._cesToolSpecs;
  }
  public putCesToolSpecs(value: DialogflowCompanionAgentCesToolSpecs[] | cdktn.IResolvable) {
    this._cesToolSpecs.internalValue = value;
  }
  public resetCesToolSpecs() {
    this._cesToolSpecs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cesToolSpecsInput() {
    return this._cesToolSpecs.internalValue;
  }

  // skill_configs - computed: false, optional: true, required: false
  private _skillConfigs = new DialogflowCompanionAgentSkillConfigsList(this, "skill_configs", false);
  public get skillConfigs() {
    return this._skillConfigs;
  }
  public putSkillConfigs(value: DialogflowCompanionAgentSkillConfigs[] | cdktn.IResolvable) {
    this._skillConfigs.internalValue = value;
  }
  public resetSkillConfigs() {
    this._skillConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skillConfigsInput() {
    return this._skillConfigs.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DialogflowCompanionAgentTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DialogflowCompanionAgentTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // toolset_tools - computed: false, optional: true, required: false
  private _toolsetTools = new DialogflowCompanionAgentToolsetToolsList(this, "toolset_tools", false);
  public get toolsetTools() {
    return this._toolsetTools;
  }
  public putToolsetTools(value: DialogflowCompanionAgentToolsetTools[] | cdktn.IResolvable) {
    this._toolsetTools.internalValue = value;
  }
  public resetToolsetTools() {
    this._toolsetTools.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toolsetToolsInput() {
    return this._toolsetTools.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      companion_agent_id: cdktn.stringToTerraform(this._companionAgentId),
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      description: cdktn.stringToTerraform(this._description),
      display_name: cdktn.stringToTerraform(this._displayName),
      id: cdktn.stringToTerraform(this._id),
      location: cdktn.stringToTerraform(this._location),
      project: cdktn.stringToTerraform(this._project),
      ces_tool_specs: cdktn.listMapper(dialogflowCompanionAgentCesToolSpecsToTerraform, true)(this._cesToolSpecs.internalValue),
      skill_configs: cdktn.listMapper(dialogflowCompanionAgentSkillConfigsToTerraform, true)(this._skillConfigs.internalValue),
      timeouts: dialogflowCompanionAgentTimeoutsToTerraform(this._timeouts.internalValue),
      toolset_tools: cdktn.listMapper(dialogflowCompanionAgentToolsetToolsToTerraform, true)(this._toolsetTools.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      companion_agent_id: {
        value: cdktn.stringToHclTerraform(this._companionAgentId),
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
      ces_tool_specs: {
        value: cdktn.listMapperHcl(dialogflowCompanionAgentCesToolSpecsToHclTerraform, true)(this._cesToolSpecs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DialogflowCompanionAgentCesToolSpecsList",
      },
      skill_configs: {
        value: cdktn.listMapperHcl(dialogflowCompanionAgentSkillConfigsToHclTerraform, true)(this._skillConfigs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DialogflowCompanionAgentSkillConfigsList",
      },
      timeouts: {
        value: dialogflowCompanionAgentTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DialogflowCompanionAgentTimeouts",
      },
      toolset_tools: {
        value: cdktn.listMapperHcl(dialogflowCompanionAgentToolsetToolsToHclTerraform, true)(this._toolsetTools.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DialogflowCompanionAgentToolsetToolsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
