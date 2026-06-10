/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/gemini_data_sharing_with_google_setting
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface GeminiDataSharingWithGoogleSettingConfig extends cdktn.TerraformMetaArguments {
  /**
  * Id of the Data Sharing With Google Setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/gemini_data_sharing_with_google_setting#data_sharing_with_google_setting_id GeminiDataSharingWithGoogleSetting#data_sharing_with_google_setting_id}
  */
  readonly dataSharingWithGoogleSettingId: string;
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/gemini_data_sharing_with_google_setting#deletion_policy GeminiDataSharingWithGoogleSetting#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Whether data sharing should be enabled in GA products.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/gemini_data_sharing_with_google_setting#enable_data_sharing GeminiDataSharingWithGoogleSetting#enable_data_sharing}
  */
  readonly enableDataSharing?: boolean | cdktn.IResolvable;
  /**
  * Whether data sharing should be enabled in Preview products.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/gemini_data_sharing_with_google_setting#enable_preview_data_sharing GeminiDataSharingWithGoogleSetting#enable_preview_data_sharing}
  */
  readonly enablePreviewDataSharing?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/gemini_data_sharing_with_google_setting#id GeminiDataSharingWithGoogleSetting#id}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/gemini_data_sharing_with_google_setting#labels GeminiDataSharingWithGoogleSetting#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/gemini_data_sharing_with_google_setting#location GeminiDataSharingWithGoogleSetting#location}
  */
  readonly location?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/gemini_data_sharing_with_google_setting#project GeminiDataSharingWithGoogleSetting#project}
  */
  readonly project?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/gemini_data_sharing_with_google_setting#timeouts GeminiDataSharingWithGoogleSetting#timeouts}
  */
  readonly timeouts?: GeminiDataSharingWithGoogleSettingTimeouts;
}
export interface GeminiDataSharingWithGoogleSettingTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/gemini_data_sharing_with_google_setting#create GeminiDataSharingWithGoogleSetting#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/gemini_data_sharing_with_google_setting#delete GeminiDataSharingWithGoogleSetting#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/gemini_data_sharing_with_google_setting#update GeminiDataSharingWithGoogleSetting#update}
  */
  readonly update?: string;
}

export function geminiDataSharingWithGoogleSettingTimeoutsToTerraform(struct?: GeminiDataSharingWithGoogleSettingTimeouts | cdktn.IResolvable): any {
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


export function geminiDataSharingWithGoogleSettingTimeoutsToHclTerraform(struct?: GeminiDataSharingWithGoogleSettingTimeouts | cdktn.IResolvable): any {
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

export class GeminiDataSharingWithGoogleSettingTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GeminiDataSharingWithGoogleSettingTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: GeminiDataSharingWithGoogleSettingTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/gemini_data_sharing_with_google_setting google_gemini_data_sharing_with_google_setting}
*/
export class GeminiDataSharingWithGoogleSetting extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_gemini_data_sharing_with_google_setting";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a GeminiDataSharingWithGoogleSetting resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GeminiDataSharingWithGoogleSetting to import
  * @param importFromId The id of the existing GeminiDataSharingWithGoogleSetting that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/gemini_data_sharing_with_google_setting#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GeminiDataSharingWithGoogleSetting to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_gemini_data_sharing_with_google_setting", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/gemini_data_sharing_with_google_setting google_gemini_data_sharing_with_google_setting} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GeminiDataSharingWithGoogleSettingConfig
  */
  public constructor(scope: Construct, id: string, config: GeminiDataSharingWithGoogleSettingConfig) {
    super(scope, id, {
      terraformResourceType: 'google_gemini_data_sharing_with_google_setting',
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
    this._dataSharingWithGoogleSettingId = config.dataSharingWithGoogleSettingId;
    this._deletionPolicy = config.deletionPolicy;
    this._enableDataSharing = config.enableDataSharing;
    this._enablePreviewDataSharing = config.enablePreviewDataSharing;
    this._id = config.id;
    this._labels = config.labels;
    this._location = config.location;
    this._project = config.project;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // data_sharing_with_google_setting_id - computed: false, optional: false, required: true
  private _dataSharingWithGoogleSettingId?: string; 
  public get dataSharingWithGoogleSettingId() {
    return this.getStringAttribute('data_sharing_with_google_setting_id');
  }
  public set dataSharingWithGoogleSettingId(value: string) {
    this._dataSharingWithGoogleSettingId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSharingWithGoogleSettingIdInput() {
    return this._dataSharingWithGoogleSettingId;
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

  // enable_data_sharing - computed: false, optional: true, required: false
  private _enableDataSharing?: boolean | cdktn.IResolvable; 
  public get enableDataSharing() {
    return this.getBooleanAttribute('enable_data_sharing');
  }
  public set enableDataSharing(value: boolean | cdktn.IResolvable) {
    this._enableDataSharing = value;
  }
  public resetEnableDataSharing() {
    this._enableDataSharing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDataSharingInput() {
    return this._enableDataSharing;
  }

  // enable_preview_data_sharing - computed: false, optional: true, required: false
  private _enablePreviewDataSharing?: boolean | cdktn.IResolvable; 
  public get enablePreviewDataSharing() {
    return this.getBooleanAttribute('enable_preview_data_sharing');
  }
  public set enablePreviewDataSharing(value: boolean | cdktn.IResolvable) {
    this._enablePreviewDataSharing = value;
  }
  public resetEnablePreviewDataSharing() {
    this._enablePreviewDataSharing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePreviewDataSharingInput() {
    return this._enablePreviewDataSharing;
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GeminiDataSharingWithGoogleSettingTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GeminiDataSharingWithGoogleSettingTimeouts) {
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
      data_sharing_with_google_setting_id: cdktn.stringToTerraform(this._dataSharingWithGoogleSettingId),
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      enable_data_sharing: cdktn.booleanToTerraform(this._enableDataSharing),
      enable_preview_data_sharing: cdktn.booleanToTerraform(this._enablePreviewDataSharing),
      id: cdktn.stringToTerraform(this._id),
      labels: cdktn.hashMapper(cdktn.stringToTerraform)(this._labels),
      location: cdktn.stringToTerraform(this._location),
      project: cdktn.stringToTerraform(this._project),
      timeouts: geminiDataSharingWithGoogleSettingTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      data_sharing_with_google_setting_id: {
        value: cdktn.stringToHclTerraform(this._dataSharingWithGoogleSettingId),
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
      enable_data_sharing: {
        value: cdktn.booleanToHclTerraform(this._enableDataSharing),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_preview_data_sharing: {
        value: cdktn.booleanToHclTerraform(this._enablePreviewDataSharing),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      timeouts: {
        value: geminiDataSharingWithGoogleSettingTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GeminiDataSharingWithGoogleSettingTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
