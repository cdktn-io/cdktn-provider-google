/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_acl_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DiscoveryEngineAclConfigConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_acl_config#id DiscoveryEngineAclConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The geographic location where the data store should reside. The value can
  * only be one of "global", "us" and "eu".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_acl_config#location DiscoveryEngineAclConfig#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_acl_config#project DiscoveryEngineAclConfig#project}
  */
  readonly project?: string;
  /**
  * idp_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_acl_config#idp_config DiscoveryEngineAclConfig#idp_config}
  */
  readonly idpConfig?: DiscoveryEngineAclConfigIdpConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_acl_config#timeouts DiscoveryEngineAclConfig#timeouts}
  */
  readonly timeouts?: DiscoveryEngineAclConfigTimeouts;
}
export interface DiscoveryEngineAclConfigIdpConfigExternalIdpConfig {
  /**
  * Workforce pool name: "locations/global/workforcePools/pool_id"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_acl_config#workforce_pool_name DiscoveryEngineAclConfig#workforce_pool_name}
  */
  readonly workforcePoolName?: string;
}

export function discoveryEngineAclConfigIdpConfigExternalIdpConfigToTerraform(struct?: DiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference | DiscoveryEngineAclConfigIdpConfigExternalIdpConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    workforce_pool_name: cdktn.stringToTerraform(struct!.workforcePoolName),
  }
}


export function discoveryEngineAclConfigIdpConfigExternalIdpConfigToHclTerraform(struct?: DiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference | DiscoveryEngineAclConfigIdpConfigExternalIdpConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    workforce_pool_name: {
      value: cdktn.stringToHclTerraform(struct!.workforcePoolName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryEngineAclConfigIdpConfigExternalIdpConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._workforcePoolName !== undefined) {
      hasAnyValues = true;
      internalValueResult.workforcePoolName = this._workforcePoolName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryEngineAclConfigIdpConfigExternalIdpConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._workforcePoolName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._workforcePoolName = value.workforcePoolName;
    }
  }

  // workforce_pool_name - computed: false, optional: true, required: false
  private _workforcePoolName?: string; 
  public get workforcePoolName() {
    return this.getStringAttribute('workforce_pool_name');
  }
  public set workforcePoolName(value: string) {
    this._workforcePoolName = value;
  }
  public resetWorkforcePoolName() {
    this._workforcePoolName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workforcePoolNameInput() {
    return this._workforcePoolName;
  }
}
export interface DiscoveryEngineAclConfigIdpConfig {
  /**
  * Identity provider type. Possible values: ["GSUITE", "THIRD_PARTY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_acl_config#idp_type DiscoveryEngineAclConfig#idp_type}
  */
  readonly idpType?: string;
  /**
  * external_idp_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_acl_config#external_idp_config DiscoveryEngineAclConfig#external_idp_config}
  */
  readonly externalIdpConfig?: DiscoveryEngineAclConfigIdpConfigExternalIdpConfig;
}

export function discoveryEngineAclConfigIdpConfigToTerraform(struct?: DiscoveryEngineAclConfigIdpConfigOutputReference | DiscoveryEngineAclConfigIdpConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    idp_type: cdktn.stringToTerraform(struct!.idpType),
    external_idp_config: discoveryEngineAclConfigIdpConfigExternalIdpConfigToTerraform(struct!.externalIdpConfig),
  }
}


export function discoveryEngineAclConfigIdpConfigToHclTerraform(struct?: DiscoveryEngineAclConfigIdpConfigOutputReference | DiscoveryEngineAclConfigIdpConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    idp_type: {
      value: cdktn.stringToHclTerraform(struct!.idpType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_idp_config: {
      value: discoveryEngineAclConfigIdpConfigExternalIdpConfigToHclTerraform(struct!.externalIdpConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryEngineAclConfigIdpConfigExternalIdpConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiscoveryEngineAclConfigIdpConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryEngineAclConfigIdpConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._idpType !== undefined) {
      hasAnyValues = true;
      internalValueResult.idpType = this._idpType;
    }
    if (this._externalIdpConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalIdpConfig = this._externalIdpConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryEngineAclConfigIdpConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._idpType = undefined;
      this._externalIdpConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._idpType = value.idpType;
      this._externalIdpConfig.internalValue = value.externalIdpConfig;
    }
  }

  // idp_type - computed: false, optional: true, required: false
  private _idpType?: string; 
  public get idpType() {
    return this.getStringAttribute('idp_type');
  }
  public set idpType(value: string) {
    this._idpType = value;
  }
  public resetIdpType() {
    this._idpType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpTypeInput() {
    return this._idpType;
  }

  // external_idp_config - computed: false, optional: true, required: false
  private _externalIdpConfig = new DiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference(this, "external_idp_config");
  public get externalIdpConfig() {
    return this._externalIdpConfig;
  }
  public putExternalIdpConfig(value: DiscoveryEngineAclConfigIdpConfigExternalIdpConfig) {
    this._externalIdpConfig.internalValue = value;
  }
  public resetExternalIdpConfig() {
    this._externalIdpConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdpConfigInput() {
    return this._externalIdpConfig.internalValue;
  }
}
export interface DiscoveryEngineAclConfigTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_acl_config#create DiscoveryEngineAclConfig#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_acl_config#delete DiscoveryEngineAclConfig#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_acl_config#update DiscoveryEngineAclConfig#update}
  */
  readonly update?: string;
}

export function discoveryEngineAclConfigTimeoutsToTerraform(struct?: DiscoveryEngineAclConfigTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    delete: cdktn.stringToTerraform(struct!.delete),
    update: cdktn.stringToTerraform(struct!.update),
  }
}


export function discoveryEngineAclConfigTimeoutsToHclTerraform(struct?: DiscoveryEngineAclConfigTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class DiscoveryEngineAclConfigTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DiscoveryEngineAclConfigTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DiscoveryEngineAclConfigTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_acl_config google_discovery_engine_acl_config}
*/
export class DiscoveryEngineAclConfig extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_discovery_engine_acl_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DiscoveryEngineAclConfig resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DiscoveryEngineAclConfig to import
  * @param importFromId The id of the existing DiscoveryEngineAclConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_acl_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DiscoveryEngineAclConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_discovery_engine_acl_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_acl_config google_discovery_engine_acl_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DiscoveryEngineAclConfigConfig
  */
  public constructor(scope: Construct, id: string, config: DiscoveryEngineAclConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'google_discovery_engine_acl_config',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.31.0',
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
    this._id = config.id;
    this._location = config.location;
    this._project = config.project;
    this._idpConfig.internalValue = config.idpConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // idp_config - computed: false, optional: true, required: false
  private _idpConfig = new DiscoveryEngineAclConfigIdpConfigOutputReference(this, "idp_config");
  public get idpConfig() {
    return this._idpConfig;
  }
  public putIdpConfig(value: DiscoveryEngineAclConfigIdpConfig) {
    this._idpConfig.internalValue = value;
  }
  public resetIdpConfig() {
    this._idpConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpConfigInput() {
    return this._idpConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DiscoveryEngineAclConfigTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DiscoveryEngineAclConfigTimeouts) {
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
      id: cdktn.stringToTerraform(this._id),
      location: cdktn.stringToTerraform(this._location),
      project: cdktn.stringToTerraform(this._project),
      idp_config: discoveryEngineAclConfigIdpConfigToTerraform(this._idpConfig.internalValue),
      timeouts: discoveryEngineAclConfigTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      idp_config: {
        value: discoveryEngineAclConfigIdpConfigToHclTerraform(this._idpConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DiscoveryEngineAclConfigIdpConfigList",
      },
      timeouts: {
        value: discoveryEngineAclConfigTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DiscoveryEngineAclConfigTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
