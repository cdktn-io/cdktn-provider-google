/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/gemini_code_tools_setting
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface GeminiCodeToolsSettingConfig extends cdktn.TerraformMetaArguments {
  /**
  * Id of the Code Tools Setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/gemini_code_tools_setting#code_tools_setting_id GeminiCodeToolsSetting#code_tools_setting_id}
  */
  readonly codeToolsSettingId: string;
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/gemini_code_tools_setting#deletion_policy GeminiCodeToolsSetting#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/gemini_code_tools_setting#id GeminiCodeToolsSetting#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Labels as key value pairs.
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/gemini_code_tools_setting#labels GeminiCodeToolsSetting#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/gemini_code_tools_setting#location GeminiCodeToolsSetting#location}
  */
  readonly location?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/gemini_code_tools_setting#project GeminiCodeToolsSetting#project}
  */
  readonly project?: string;
  /**
  * enabled_tool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/gemini_code_tools_setting#enabled_tool GeminiCodeToolsSetting#enabled_tool}
  */
  readonly enabledTool: GeminiCodeToolsSettingEnabledTool[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/gemini_code_tools_setting#timeouts GeminiCodeToolsSetting#timeouts}
  */
  readonly timeouts?: GeminiCodeToolsSettingTimeouts;
}
export interface GeminiCodeToolsSettingEnabledToolConfig {
  /**
  * Key of the configuration item.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/gemini_code_tools_setting#key GeminiCodeToolsSetting#key}
  */
  readonly key: string;
  /**
  * Value of the configuration item.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/gemini_code_tools_setting#value GeminiCodeToolsSetting#value}
  */
  readonly value: string;
}

export function geminiCodeToolsSettingEnabledToolConfigToTerraform(struct?: GeminiCodeToolsSettingEnabledToolConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function geminiCodeToolsSettingEnabledToolConfigToHclTerraform(struct?: GeminiCodeToolsSettingEnabledToolConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
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

export class GeminiCodeToolsSettingEnabledToolConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GeminiCodeToolsSettingEnabledToolConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GeminiCodeToolsSettingEnabledToolConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

export class GeminiCodeToolsSettingEnabledToolConfigList extends cdktn.ComplexList {
  public internalValue? : GeminiCodeToolsSettingEnabledToolConfig[] | cdktn.IResolvable

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
  public get(index: number): GeminiCodeToolsSettingEnabledToolConfigOutputReference {
    return new GeminiCodeToolsSettingEnabledToolConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GeminiCodeToolsSettingEnabledTool {
  /**
  * Link to the Dev Connect Account Connector that holds the user credentials.
  * projects/{project}/locations/{location}/accountConnectors/{account_connector_id}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/gemini_code_tools_setting#account_connector GeminiCodeToolsSetting#account_connector}
  */
  readonly accountConnector?: string;
  /**
  * Handle used to invoke the tool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/gemini_code_tools_setting#handle GeminiCodeToolsSetting#handle}
  */
  readonly handle: string;
  /**
  * Link to the Tool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/gemini_code_tools_setting#tool GeminiCodeToolsSetting#tool}
  */
  readonly tool: string;
  /**
  * Overridden URI, if allowed by Tool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/gemini_code_tools_setting#uri_override GeminiCodeToolsSetting#uri_override}
  */
  readonly uriOverride?: string;
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/gemini_code_tools_setting#config GeminiCodeToolsSetting#config}
  */
  readonly config?: GeminiCodeToolsSettingEnabledToolConfig[] | cdktn.IResolvable;
}

export function geminiCodeToolsSettingEnabledToolToTerraform(struct?: GeminiCodeToolsSettingEnabledTool | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    account_connector: cdktn.stringToTerraform(struct!.accountConnector),
    handle: cdktn.stringToTerraform(struct!.handle),
    tool: cdktn.stringToTerraform(struct!.tool),
    uri_override: cdktn.stringToTerraform(struct!.uriOverride),
    config: cdktn.listMapper(geminiCodeToolsSettingEnabledToolConfigToTerraform, true)(struct!.config),
  }
}


export function geminiCodeToolsSettingEnabledToolToHclTerraform(struct?: GeminiCodeToolsSettingEnabledTool | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    account_connector: {
      value: cdktn.stringToHclTerraform(struct!.accountConnector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    handle: {
      value: cdktn.stringToHclTerraform(struct!.handle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tool: {
      value: cdktn.stringToHclTerraform(struct!.tool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uri_override: {
      value: cdktn.stringToHclTerraform(struct!.uriOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    config: {
      value: cdktn.listMapperHcl(geminiCodeToolsSettingEnabledToolConfigToHclTerraform, true)(struct!.config),
      isBlock: true,
      type: "list",
      storageClassType: "GeminiCodeToolsSettingEnabledToolConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GeminiCodeToolsSettingEnabledToolOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GeminiCodeToolsSettingEnabledTool | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountConnector !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountConnector = this._accountConnector;
    }
    if (this._handle !== undefined) {
      hasAnyValues = true;
      internalValueResult.handle = this._handle;
    }
    if (this._tool !== undefined) {
      hasAnyValues = true;
      internalValueResult.tool = this._tool;
    }
    if (this._uriOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.uriOverride = this._uriOverride;
    }
    if (this._config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GeminiCodeToolsSettingEnabledTool | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountConnector = undefined;
      this._handle = undefined;
      this._tool = undefined;
      this._uriOverride = undefined;
      this._config.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountConnector = value.accountConnector;
      this._handle = value.handle;
      this._tool = value.tool;
      this._uriOverride = value.uriOverride;
      this._config.internalValue = value.config;
    }
  }

  // account_connector - computed: false, optional: true, required: false
  private _accountConnector?: string; 
  public get accountConnector() {
    return this.getStringAttribute('account_connector');
  }
  public set accountConnector(value: string) {
    this._accountConnector = value;
  }
  public resetAccountConnector() {
    this._accountConnector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountConnectorInput() {
    return this._accountConnector;
  }

  // handle - computed: false, optional: false, required: true
  private _handle?: string; 
  public get handle() {
    return this.getStringAttribute('handle');
  }
  public set handle(value: string) {
    this._handle = value;
  }
  // Temporarily expose input value. Use with caution.
  public get handleInput() {
    return this._handle;
  }

  // tool - computed: false, optional: false, required: true
  private _tool?: string; 
  public get tool() {
    return this.getStringAttribute('tool');
  }
  public set tool(value: string) {
    this._tool = value;
  }
  // Temporarily expose input value. Use with caution.
  public get toolInput() {
    return this._tool;
  }

  // uri_override - computed: false, optional: true, required: false
  private _uriOverride?: string; 
  public get uriOverride() {
    return this.getStringAttribute('uri_override');
  }
  public set uriOverride(value: string) {
    this._uriOverride = value;
  }
  public resetUriOverride() {
    this._uriOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriOverrideInput() {
    return this._uriOverride;
  }

  // config - computed: false, optional: true, required: false
  private _config = new GeminiCodeToolsSettingEnabledToolConfigList(this, "config", false);
  public get config() {
    return this._config;
  }
  public putConfig(value: GeminiCodeToolsSettingEnabledToolConfig[] | cdktn.IResolvable) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }
}

export class GeminiCodeToolsSettingEnabledToolList extends cdktn.ComplexList {
  public internalValue? : GeminiCodeToolsSettingEnabledTool[] | cdktn.IResolvable

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
  public get(index: number): GeminiCodeToolsSettingEnabledToolOutputReference {
    return new GeminiCodeToolsSettingEnabledToolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GeminiCodeToolsSettingTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/gemini_code_tools_setting#create GeminiCodeToolsSetting#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/gemini_code_tools_setting#delete GeminiCodeToolsSetting#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/gemini_code_tools_setting#update GeminiCodeToolsSetting#update}
  */
  readonly update?: string;
}

export function geminiCodeToolsSettingTimeoutsToTerraform(struct?: GeminiCodeToolsSettingTimeouts | cdktn.IResolvable): any {
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


export function geminiCodeToolsSettingTimeoutsToHclTerraform(struct?: GeminiCodeToolsSettingTimeouts | cdktn.IResolvable): any {
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

export class GeminiCodeToolsSettingTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GeminiCodeToolsSettingTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: GeminiCodeToolsSettingTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/gemini_code_tools_setting google_gemini_code_tools_setting}
*/
export class GeminiCodeToolsSetting extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_gemini_code_tools_setting";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a GeminiCodeToolsSetting resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GeminiCodeToolsSetting to import
  * @param importFromId The id of the existing GeminiCodeToolsSetting that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/gemini_code_tools_setting#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GeminiCodeToolsSetting to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_gemini_code_tools_setting", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/gemini_code_tools_setting google_gemini_code_tools_setting} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GeminiCodeToolsSettingConfig
  */
  public constructor(scope: Construct, id: string, config: GeminiCodeToolsSettingConfig) {
    super(scope, id, {
      terraformResourceType: 'google_gemini_code_tools_setting',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.39.0',
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
    this._codeToolsSettingId = config.codeToolsSettingId;
    this._deletionPolicy = config.deletionPolicy;
    this._id = config.id;
    this._labels = config.labels;
    this._location = config.location;
    this._project = config.project;
    this._enabledTool.internalValue = config.enabledTool;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // code_tools_setting_id - computed: false, optional: false, required: true
  private _codeToolsSettingId?: string; 
  public get codeToolsSettingId() {
    return this.getStringAttribute('code_tools_setting_id');
  }
  public set codeToolsSettingId(value: string) {
    this._codeToolsSettingId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get codeToolsSettingIdInput() {
    return this._codeToolsSettingId;
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

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
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

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktn.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // enabled_tool - computed: false, optional: false, required: true
  private _enabledTool = new GeminiCodeToolsSettingEnabledToolList(this, "enabled_tool", false);
  public get enabledTool() {
    return this._enabledTool;
  }
  public putEnabledTool(value: GeminiCodeToolsSettingEnabledTool[] | cdktn.IResolvable) {
    this._enabledTool.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledToolInput() {
    return this._enabledTool.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GeminiCodeToolsSettingTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GeminiCodeToolsSettingTimeouts) {
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
      code_tools_setting_id: cdktn.stringToTerraform(this._codeToolsSettingId),
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      id: cdktn.stringToTerraform(this._id),
      labels: cdktn.hashMapper(cdktn.stringToTerraform)(this._labels),
      location: cdktn.stringToTerraform(this._location),
      project: cdktn.stringToTerraform(this._project),
      enabled_tool: cdktn.listMapper(geminiCodeToolsSettingEnabledToolToTerraform, true)(this._enabledTool.internalValue),
      timeouts: geminiCodeToolsSettingTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      code_tools_setting_id: {
        value: cdktn.stringToHclTerraform(this._codeToolsSettingId),
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
      enabled_tool: {
        value: cdktn.listMapperHcl(geminiCodeToolsSettingEnabledToolToHclTerraform, true)(this._enabledTool.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GeminiCodeToolsSettingEnabledToolList",
      },
      timeouts: {
        value: geminiCodeToolsSettingTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GeminiCodeToolsSettingTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
