/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_serving_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DiscoveryEngineServingConfigConfig extends cdktn.TerraformMetaArguments {
  /**
  * The resource IDs of the boost controls to be applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_serving_config#boost_control_ids DiscoveryEngineServingConfig#boost_control_ids}
  */
  readonly boostControlIds?: string[];
  /**
  * The collection ID. Currently only accepts "default_collection".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_serving_config#collection_id DiscoveryEngineServingConfig#collection_id}
  */
  readonly collectionId?: string;
  /**
  * The ID of the engine associated with the serving config.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_serving_config#engine_id DiscoveryEngineServingConfig#engine_id}
  */
  readonly engineId: string;
  /**
  * The resource IDs of the filter controls to be applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_serving_config#filter_control_ids DiscoveryEngineServingConfig#filter_control_ids}
  */
  readonly filterControlIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_serving_config#id DiscoveryEngineServingConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The geographic location where the data store should reside. The value can
  * only be one of "global", "us" and "eu".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_serving_config#location DiscoveryEngineServingConfig#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_serving_config#project DiscoveryEngineServingConfig#project}
  */
  readonly project?: string;
  /**
  * The resource IDs of the promote controls to be applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_serving_config#promote_control_ids DiscoveryEngineServingConfig#promote_control_ids}
  */
  readonly promoteControlIds?: string[];
  /**
  * The resource IDs of the redirect controls to be applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_serving_config#redirect_control_ids DiscoveryEngineServingConfig#redirect_control_ids}
  */
  readonly redirectControlIds?: string[];
  /**
  * 'The unique ID of the serving config. Currently only accepts "default_search".'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_serving_config#serving_config_id DiscoveryEngineServingConfig#serving_config_id}
  */
  readonly servingConfigId?: string;
  /**
  * The resource IDs of the synonyms controls to be applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_serving_config#synonyms_control_ids DiscoveryEngineServingConfig#synonyms_control_ids}
  */
  readonly synonymsControlIds?: string[];
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_serving_config#timeouts DiscoveryEngineServingConfig#timeouts}
  */
  readonly timeouts?: DiscoveryEngineServingConfigTimeouts;
}
export interface DiscoveryEngineServingConfigTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_serving_config#create DiscoveryEngineServingConfig#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_serving_config#delete DiscoveryEngineServingConfig#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_serving_config#update DiscoveryEngineServingConfig#update}
  */
  readonly update?: string;
}

export function discoveryEngineServingConfigTimeoutsToTerraform(struct?: DiscoveryEngineServingConfigTimeouts | cdktn.IResolvable): any {
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


export function discoveryEngineServingConfigTimeoutsToHclTerraform(struct?: DiscoveryEngineServingConfigTimeouts | cdktn.IResolvable): any {
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

export class DiscoveryEngineServingConfigTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DiscoveryEngineServingConfigTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DiscoveryEngineServingConfigTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_serving_config google_discovery_engine_serving_config}
*/
export class DiscoveryEngineServingConfig extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_discovery_engine_serving_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DiscoveryEngineServingConfig resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DiscoveryEngineServingConfig to import
  * @param importFromId The id of the existing DiscoveryEngineServingConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_serving_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DiscoveryEngineServingConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_discovery_engine_serving_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_serving_config google_discovery_engine_serving_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DiscoveryEngineServingConfigConfig
  */
  public constructor(scope: Construct, id: string, config: DiscoveryEngineServingConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'google_discovery_engine_serving_config',
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
    this._boostControlIds = config.boostControlIds;
    this._collectionId = config.collectionId;
    this._engineId = config.engineId;
    this._filterControlIds = config.filterControlIds;
    this._id = config.id;
    this._location = config.location;
    this._project = config.project;
    this._promoteControlIds = config.promoteControlIds;
    this._redirectControlIds = config.redirectControlIds;
    this._servingConfigId = config.servingConfigId;
    this._synonymsControlIds = config.synonymsControlIds;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // boost_control_ids - computed: false, optional: true, required: false
  private _boostControlIds?: string[]; 
  public get boostControlIds() {
    return this.getListAttribute('boost_control_ids');
  }
  public set boostControlIds(value: string[]) {
    this._boostControlIds = value;
  }
  public resetBoostControlIds() {
    this._boostControlIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boostControlIdsInput() {
    return this._boostControlIds;
  }

  // collection_id - computed: false, optional: true, required: false
  private _collectionId?: string; 
  public get collectionId() {
    return this.getStringAttribute('collection_id');
  }
  public set collectionId(value: string) {
    this._collectionId = value;
  }
  public resetCollectionId() {
    this._collectionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectionIdInput() {
    return this._collectionId;
  }

  // engine_id - computed: false, optional: false, required: true
  private _engineId?: string; 
  public get engineId() {
    return this.getStringAttribute('engine_id');
  }
  public set engineId(value: string) {
    this._engineId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get engineIdInput() {
    return this._engineId;
  }

  // filter_control_ids - computed: false, optional: true, required: false
  private _filterControlIds?: string[]; 
  public get filterControlIds() {
    return this.getListAttribute('filter_control_ids');
  }
  public set filterControlIds(value: string[]) {
    this._filterControlIds = value;
  }
  public resetFilterControlIds() {
    this._filterControlIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterControlIdsInput() {
    return this._filterControlIds;
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

  // promote_control_ids - computed: false, optional: true, required: false
  private _promoteControlIds?: string[]; 
  public get promoteControlIds() {
    return this.getListAttribute('promote_control_ids');
  }
  public set promoteControlIds(value: string[]) {
    this._promoteControlIds = value;
  }
  public resetPromoteControlIds() {
    this._promoteControlIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get promoteControlIdsInput() {
    return this._promoteControlIds;
  }

  // redirect_control_ids - computed: false, optional: true, required: false
  private _redirectControlIds?: string[]; 
  public get redirectControlIds() {
    return this.getListAttribute('redirect_control_ids');
  }
  public set redirectControlIds(value: string[]) {
    this._redirectControlIds = value;
  }
  public resetRedirectControlIds() {
    this._redirectControlIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectControlIdsInput() {
    return this._redirectControlIds;
  }

  // serving_config_id - computed: false, optional: true, required: false
  private _servingConfigId?: string; 
  public get servingConfigId() {
    return this.getStringAttribute('serving_config_id');
  }
  public set servingConfigId(value: string) {
    this._servingConfigId = value;
  }
  public resetServingConfigId() {
    this._servingConfigId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servingConfigIdInput() {
    return this._servingConfigId;
  }

  // synonyms_control_ids - computed: false, optional: true, required: false
  private _synonymsControlIds?: string[]; 
  public get synonymsControlIds() {
    return this.getListAttribute('synonyms_control_ids');
  }
  public set synonymsControlIds(value: string[]) {
    this._synonymsControlIds = value;
  }
  public resetSynonymsControlIds() {
    this._synonymsControlIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synonymsControlIdsInput() {
    return this._synonymsControlIds;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DiscoveryEngineServingConfigTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DiscoveryEngineServingConfigTimeouts) {
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
      boost_control_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(this._boostControlIds),
      collection_id: cdktn.stringToTerraform(this._collectionId),
      engine_id: cdktn.stringToTerraform(this._engineId),
      filter_control_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(this._filterControlIds),
      id: cdktn.stringToTerraform(this._id),
      location: cdktn.stringToTerraform(this._location),
      project: cdktn.stringToTerraform(this._project),
      promote_control_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(this._promoteControlIds),
      redirect_control_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(this._redirectControlIds),
      serving_config_id: cdktn.stringToTerraform(this._servingConfigId),
      synonyms_control_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(this._synonymsControlIds),
      timeouts: discoveryEngineServingConfigTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      boost_control_ids: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._boostControlIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      collection_id: {
        value: cdktn.stringToHclTerraform(this._collectionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      engine_id: {
        value: cdktn.stringToHclTerraform(this._engineId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter_control_ids: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._filterControlIds),
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
      promote_control_ids: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._promoteControlIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      redirect_control_ids: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._redirectControlIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      serving_config_id: {
        value: cdktn.stringToHclTerraform(this._servingConfigId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      synonyms_control_ids: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._synonymsControlIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      timeouts: {
        value: discoveryEngineServingConfigTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DiscoveryEngineServingConfigTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
