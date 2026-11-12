/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataflow_config_store_setting
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataflowConfigStoreSettingConfig extends cdktn.TerraformMetaArguments {
  /**
  * The ID of the config store setting (e.g. 'default_launcher_machine_type').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataflow_config_store_setting#config_store_setting_id DataflowConfigStoreSetting#config_store_setting_id}
  */
  readonly configStoreSettingId: string;
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataflow_config_store_setting#deletion_policy DataflowConfigStoreSetting#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataflow_config_store_setting#id DataflowConfigStoreSetting#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The Dataflow region for the setting (e.g. 'us-central1').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataflow_config_store_setting#location DataflowConfigStoreSetting#location}
  */
  readonly location: string;
  /**
  * The parent resource in which to create the config store setting.
  * Must be in one of the following formats:
  * * 'projects/{project_number}' (numeric project number is required)
  * * 'folders/{folder_id}'
  * * 'organizations/{organization_id}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataflow_config_store_setting#parent DataflowConfigStoreSetting#parent}
  */
  readonly parent: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataflow_config_store_setting#timeouts DataflowConfigStoreSetting#timeouts}
  */
  readonly timeouts?: DataflowConfigStoreSettingTimeouts;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataflow_config_store_setting#value DataflowConfigStoreSetting#value}
  */
  readonly value: DataflowConfigStoreSettingValue;
}
export interface DataflowConfigStoreSettingTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataflow_config_store_setting#create DataflowConfigStoreSetting#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataflow_config_store_setting#delete DataflowConfigStoreSetting#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataflow_config_store_setting#update DataflowConfigStoreSetting#update}
  */
  readonly update?: string;
}

export function dataflowConfigStoreSettingTimeoutsToTerraform(struct?: DataflowConfigStoreSettingTimeouts | cdktn.IResolvable): any {
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


export function dataflowConfigStoreSettingTimeoutsToHclTerraform(struct?: DataflowConfigStoreSettingTimeouts | cdktn.IResolvable): any {
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

export class DataflowConfigStoreSettingTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataflowConfigStoreSettingTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataflowConfigStoreSettingTimeouts | cdktn.IResolvable | undefined) {
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
export interface DataflowConfigStoreSettingValue {
  /**
  * Represents a boolean value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataflow_config_store_setting#bool_value DataflowConfigStoreSetting#bool_value}
  */
  readonly boolValue?: boolean | cdktn.IResolvable;
  /**
  * Represents a string value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataflow_config_store_setting#string_value DataflowConfigStoreSetting#string_value}
  */
  readonly stringValue?: string;
}

export function dataflowConfigStoreSettingValueToTerraform(struct?: DataflowConfigStoreSettingValueOutputReference | DataflowConfigStoreSettingValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bool_value: cdktn.booleanToTerraform(struct!.boolValue),
    string_value: cdktn.stringToTerraform(struct!.stringValue),
  }
}


export function dataflowConfigStoreSettingValueToHclTerraform(struct?: DataflowConfigStoreSettingValueOutputReference | DataflowConfigStoreSettingValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bool_value: {
      value: cdktn.booleanToHclTerraform(struct!.boolValue),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    string_value: {
      value: cdktn.stringToHclTerraform(struct!.stringValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataflowConfigStoreSettingValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataflowConfigStoreSettingValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._boolValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.boolValue = this._boolValue;
    }
    if (this._stringValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringValue = this._stringValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataflowConfigStoreSettingValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._boolValue = undefined;
      this._stringValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._boolValue = value.boolValue;
      this._stringValue = value.stringValue;
    }
  }

  // bool_value - computed: false, optional: true, required: false
  private _boolValue?: boolean | cdktn.IResolvable; 
  public get boolValue() {
    return this.getBooleanAttribute('bool_value');
  }
  public set boolValue(value: boolean | cdktn.IResolvable) {
    this._boolValue = value;
  }
  public resetBoolValue() {
    this._boolValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boolValueInput() {
    return this._boolValue;
  }

  // string_value - computed: false, optional: true, required: false
  private _stringValue?: string; 
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }
  public set stringValue(value: string) {
    this._stringValue = value;
  }
  public resetStringValue() {
    this._stringValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringValueInput() {
    return this._stringValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataflow_config_store_setting google_dataflow_config_store_setting}
*/
export class DataflowConfigStoreSetting extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_dataflow_config_store_setting";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataflowConfigStoreSetting resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataflowConfigStoreSetting to import
  * @param importFromId The id of the existing DataflowConfigStoreSetting that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataflow_config_store_setting#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataflowConfigStoreSetting to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_dataflow_config_store_setting", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataflow_config_store_setting google_dataflow_config_store_setting} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataflowConfigStoreSettingConfig
  */
  public constructor(scope: Construct, id: string, config: DataflowConfigStoreSettingConfig) {
    super(scope, id, {
      terraformResourceType: 'google_dataflow_config_store_setting',
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
    this._configStoreSettingId = config.configStoreSettingId;
    this._deletionPolicy = config.deletionPolicy;
    this._id = config.id;
    this._location = config.location;
    this._parent = config.parent;
    this._timeouts.internalValue = config.timeouts;
    this._value.internalValue = config.value;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config_store_setting_id - computed: false, optional: false, required: true
  private _configStoreSettingId?: string; 
  public get configStoreSettingId() {
    return this.getStringAttribute('config_store_setting_id');
  }
  public set configStoreSettingId(value: string) {
    this._configStoreSettingId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configStoreSettingIdInput() {
    return this._configStoreSettingId;
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

  // parent - computed: false, optional: false, required: true
  private _parent?: string; 
  public get parent() {
    return this.getStringAttribute('parent');
  }
  public set parent(value: string) {
    this._parent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataflowConfigStoreSettingTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataflowConfigStoreSettingTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // value - computed: false, optional: false, required: true
  private _value = new DataflowConfigStoreSettingValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: DataflowConfigStoreSettingValue) {
    this._value.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      config_store_setting_id: cdktn.stringToTerraform(this._configStoreSettingId),
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      id: cdktn.stringToTerraform(this._id),
      location: cdktn.stringToTerraform(this._location),
      parent: cdktn.stringToTerraform(this._parent),
      timeouts: dataflowConfigStoreSettingTimeoutsToTerraform(this._timeouts.internalValue),
      value: dataflowConfigStoreSettingValueToTerraform(this._value.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      config_store_setting_id: {
        value: cdktn.stringToHclTerraform(this._configStoreSettingId),
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
      location: {
        value: cdktn.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent: {
        value: cdktn.stringToHclTerraform(this._parent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: dataflowConfigStoreSettingTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataflowConfigStoreSettingTimeouts",
      },
      value: {
        value: dataflowConfigStoreSettingValueToHclTerraform(this._value.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataflowConfigStoreSettingValueList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
