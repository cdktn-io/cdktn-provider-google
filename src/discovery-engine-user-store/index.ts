/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/discovery_engine_user_store
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DiscoveryEngineUserStoreConfig extends cdktn.TerraformMetaArguments {
  /**
  * The resource name of the default license config assigned to users created in
  * this user store. Format:
  * 'projects/{project}/locations/{location}/licenseConfigs/{license_config}'.
  * If 'enableLicenseAutoRegister' is true, new users will automatically
  * register under the default subscription.
  * If the default license config doesn't have remaining license seats left,
  * new users will not be assigned with license.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/discovery_engine_user_store#default_license_config DiscoveryEngineUserStore#default_license_config}
  */
  readonly defaultLicenseConfig?: string;
  /**
  * Whether to enable automatic license update for users with expired licenses
  * in this user store. If enabled, users with expired licenses will
  * automatically be updated to the default subscription if there are
  * remaining license seats.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/discovery_engine_user_store#enable_expired_license_auto_update DiscoveryEngineUserStore#enable_expired_license_auto_update}
  */
  readonly enableExpiredLicenseAutoUpdate?: boolean | cdktn.IResolvable;
  /**
  * Whether to enable automatic license registration for new users created in
  * this user store. If enabled, new users will automatically register under
  * the default subscription.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/discovery_engine_user_store#enable_license_auto_register DiscoveryEngineUserStore#enable_license_auto_register}
  */
  readonly enableLicenseAutoRegister?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/discovery_engine_user_store#id DiscoveryEngineUserStore#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The geographic location where the data store should reside. The value can
  * only be one of "global", "us" and "eu".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/discovery_engine_user_store#location DiscoveryEngineUserStore#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/discovery_engine_user_store#project DiscoveryEngineUserStore#project}
  */
  readonly project?: string;
  /**
  * The ID of the user store. Currently only accepts "default_user_store".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/discovery_engine_user_store#user_store_id DiscoveryEngineUserStore#user_store_id}
  */
  readonly userStoreId?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/discovery_engine_user_store#timeouts DiscoveryEngineUserStore#timeouts}
  */
  readonly timeouts?: DiscoveryEngineUserStoreTimeouts;
}
export interface DiscoveryEngineUserStoreTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/discovery_engine_user_store#create DiscoveryEngineUserStore#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/discovery_engine_user_store#delete DiscoveryEngineUserStore#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/discovery_engine_user_store#update DiscoveryEngineUserStore#update}
  */
  readonly update?: string;
}

export function discoveryEngineUserStoreTimeoutsToTerraform(struct?: DiscoveryEngineUserStoreTimeouts | cdktn.IResolvable): any {
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


export function discoveryEngineUserStoreTimeoutsToHclTerraform(struct?: DiscoveryEngineUserStoreTimeouts | cdktn.IResolvable): any {
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

export class DiscoveryEngineUserStoreTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DiscoveryEngineUserStoreTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DiscoveryEngineUserStoreTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/discovery_engine_user_store google_discovery_engine_user_store}
*/
export class DiscoveryEngineUserStore extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_discovery_engine_user_store";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DiscoveryEngineUserStore resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DiscoveryEngineUserStore to import
  * @param importFromId The id of the existing DiscoveryEngineUserStore that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/discovery_engine_user_store#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DiscoveryEngineUserStore to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_discovery_engine_user_store", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/discovery_engine_user_store google_discovery_engine_user_store} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DiscoveryEngineUserStoreConfig
  */
  public constructor(scope: Construct, id: string, config: DiscoveryEngineUserStoreConfig) {
    super(scope, id, {
      terraformResourceType: 'google_discovery_engine_user_store',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.38.0',
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
    this._defaultLicenseConfig = config.defaultLicenseConfig;
    this._enableExpiredLicenseAutoUpdate = config.enableExpiredLicenseAutoUpdate;
    this._enableLicenseAutoRegister = config.enableLicenseAutoRegister;
    this._id = config.id;
    this._location = config.location;
    this._project = config.project;
    this._userStoreId = config.userStoreId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_license_config - computed: false, optional: true, required: false
  private _defaultLicenseConfig?: string; 
  public get defaultLicenseConfig() {
    return this.getStringAttribute('default_license_config');
  }
  public set defaultLicenseConfig(value: string) {
    this._defaultLicenseConfig = value;
  }
  public resetDefaultLicenseConfig() {
    this._defaultLicenseConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultLicenseConfigInput() {
    return this._defaultLicenseConfig;
  }

  // enable_expired_license_auto_update - computed: false, optional: true, required: false
  private _enableExpiredLicenseAutoUpdate?: boolean | cdktn.IResolvable; 
  public get enableExpiredLicenseAutoUpdate() {
    return this.getBooleanAttribute('enable_expired_license_auto_update');
  }
  public set enableExpiredLicenseAutoUpdate(value: boolean | cdktn.IResolvable) {
    this._enableExpiredLicenseAutoUpdate = value;
  }
  public resetEnableExpiredLicenseAutoUpdate() {
    this._enableExpiredLicenseAutoUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableExpiredLicenseAutoUpdateInput() {
    return this._enableExpiredLicenseAutoUpdate;
  }

  // enable_license_auto_register - computed: false, optional: true, required: false
  private _enableLicenseAutoRegister?: boolean | cdktn.IResolvable; 
  public get enableLicenseAutoRegister() {
    return this.getBooleanAttribute('enable_license_auto_register');
  }
  public set enableLicenseAutoRegister(value: boolean | cdktn.IResolvable) {
    this._enableLicenseAutoRegister = value;
  }
  public resetEnableLicenseAutoRegister() {
    this._enableLicenseAutoRegister = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableLicenseAutoRegisterInput() {
    return this._enableLicenseAutoRegister;
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

  // user_store_id - computed: false, optional: true, required: false
  private _userStoreId?: string; 
  public get userStoreId() {
    return this.getStringAttribute('user_store_id');
  }
  public set userStoreId(value: string) {
    this._userStoreId = value;
  }
  public resetUserStoreId() {
    this._userStoreId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userStoreIdInput() {
    return this._userStoreId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DiscoveryEngineUserStoreTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DiscoveryEngineUserStoreTimeouts) {
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
      default_license_config: cdktn.stringToTerraform(this._defaultLicenseConfig),
      enable_expired_license_auto_update: cdktn.booleanToTerraform(this._enableExpiredLicenseAutoUpdate),
      enable_license_auto_register: cdktn.booleanToTerraform(this._enableLicenseAutoRegister),
      id: cdktn.stringToTerraform(this._id),
      location: cdktn.stringToTerraform(this._location),
      project: cdktn.stringToTerraform(this._project),
      user_store_id: cdktn.stringToTerraform(this._userStoreId),
      timeouts: discoveryEngineUserStoreTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_license_config: {
        value: cdktn.stringToHclTerraform(this._defaultLicenseConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_expired_license_auto_update: {
        value: cdktn.booleanToHclTerraform(this._enableExpiredLicenseAutoUpdate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_license_auto_register: {
        value: cdktn.booleanToHclTerraform(this._enableLicenseAutoRegister),
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
      user_store_id: {
        value: cdktn.stringToHclTerraform(this._userStoreId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: discoveryEngineUserStoreTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DiscoveryEngineUserStoreTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
