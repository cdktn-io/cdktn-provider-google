/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dataplex_metadata_feed
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataplexMetadataFeedConfig extends cdktn.TerraformMetaArguments {
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dataplex_metadata_feed#deletion_policy DataplexMetadataFeed#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dataplex_metadata_feed#id DataplexMetadataFeed#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * User-defined labels.
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dataplex_metadata_feed#labels DataplexMetadataFeed#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dataplex_metadata_feed#location DataplexMetadataFeed#location}
  */
  readonly location: string;
  /**
  * The metadata job ID. If not provided, a unique ID is generated with the prefix metadata-job-.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dataplex_metadata_feed#metadata_feed_id DataplexMetadataFeed#metadata_feed_id}
  */
  readonly metadataFeedId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dataplex_metadata_feed#project DataplexMetadataFeed#project}
  */
  readonly project?: string;
  /**
  * The pubsub topic that you want the metadata feed messages to publish to. Please grant Dataplex service account the permission to publish messages to the topic. The service account is: service-{PROJECT_NUMBER}@gcp-sa-dataplex.iam.gserviceaccount.com.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dataplex_metadata_feed#pubsub_topic DataplexMetadataFeed#pubsub_topic}
  */
  readonly pubsubTopic?: string;
  /**
  * filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dataplex_metadata_feed#filters DataplexMetadataFeed#filters}
  */
  readonly filters?: DataplexMetadataFeedFilters;
  /**
  * scope block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dataplex_metadata_feed#scope DataplexMetadataFeed#scope}
  */
  readonly scope: DataplexMetadataFeedScope;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dataplex_metadata_feed#timeouts DataplexMetadataFeed#timeouts}
  */
  readonly timeouts?: DataplexMetadataFeedTimeouts;
}
export interface DataplexMetadataFeedFilters {
  /**
  * The aspect types that you want to listen to. Depending on how the aspect is attached to the entry, in the format: projects/{project_id_or_number}/locations/{location}/aspectTypes/{aspect_type_id}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dataplex_metadata_feed#aspect_types DataplexMetadataFeed#aspect_types}
  */
  readonly aspectTypes?: string[];
  /**
  * The type of change that you want to listen to. If not specified, all changes are published.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dataplex_metadata_feed#change_types DataplexMetadataFeed#change_types}
  */
  readonly changeTypes?: string[];
  /**
  * The entry types that you want to listen to, specified as relative resource names in the format projects/{project_id_or_number}/locations/{location}/entryTypes/{entry_type_id}. Only entries that belong to the specified entry types are published.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dataplex_metadata_feed#entry_types DataplexMetadataFeed#entry_types}
  */
  readonly entryTypes?: string[];
}

export function dataplexMetadataFeedFiltersToTerraform(struct?: DataplexMetadataFeedFiltersOutputReference | DataplexMetadataFeedFilters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    aspect_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.aspectTypes),
    change_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.changeTypes),
    entry_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.entryTypes),
  }
}


export function dataplexMetadataFeedFiltersToHclTerraform(struct?: DataplexMetadataFeedFiltersOutputReference | DataplexMetadataFeedFilters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    aspect_types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.aspectTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    change_types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.changeTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    entry_types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.entryTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataplexMetadataFeedFiltersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataplexMetadataFeedFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aspectTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.aspectTypes = this._aspectTypes;
    }
    if (this._changeTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.changeTypes = this._changeTypes;
    }
    if (this._entryTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryTypes = this._entryTypes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataplexMetadataFeedFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aspectTypes = undefined;
      this._changeTypes = undefined;
      this._entryTypes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aspectTypes = value.aspectTypes;
      this._changeTypes = value.changeTypes;
      this._entryTypes = value.entryTypes;
    }
  }

  // aspect_types - computed: false, optional: true, required: false
  private _aspectTypes?: string[]; 
  public get aspectTypes() {
    return this.getListAttribute('aspect_types');
  }
  public set aspectTypes(value: string[]) {
    this._aspectTypes = value;
  }
  public resetAspectTypes() {
    this._aspectTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aspectTypesInput() {
    return this._aspectTypes;
  }

  // change_types - computed: false, optional: true, required: false
  private _changeTypes?: string[]; 
  public get changeTypes() {
    return this.getListAttribute('change_types');
  }
  public set changeTypes(value: string[]) {
    this._changeTypes = value;
  }
  public resetChangeTypes() {
    this._changeTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get changeTypesInput() {
    return this._changeTypes;
  }

  // entry_types - computed: false, optional: true, required: false
  private _entryTypes?: string[]; 
  public get entryTypes() {
    return this.getListAttribute('entry_types');
  }
  public set entryTypes(value: string[]) {
    this._entryTypes = value;
  }
  public resetEntryTypes() {
    this._entryTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryTypesInput() {
    return this._entryTypes;
  }
}
export interface DataplexMetadataFeedScope {
  /**
  * The entry groups whose entries you want to listen to. Must be in the format: projects/{project_id_or_number}/locations/{location_id}/entryGroups/{entry_group_id}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dataplex_metadata_feed#entry_groups DataplexMetadataFeed#entry_groups}
  */
  readonly entryGroups?: string[];
  /**
  * Whether the metadata feed is at the organization-level.
  * If true, all changes happened to the entries in the same organization as the feed are published.
  * If false, you must specify a list of projects or a list of entry groups whose entries you want to listen to.The default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dataplex_metadata_feed#organization_level DataplexMetadataFeed#organization_level}
  */
  readonly organizationLevel?: boolean | cdktn.IResolvable;
  /**
  * The projects whose entries you want to listen to. Must be in the same organization as the feed. Must be in the format: projects/{project_id_or_number}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dataplex_metadata_feed#projects DataplexMetadataFeed#projects}
  */
  readonly projects?: string[];
}

export function dataplexMetadataFeedScopeToTerraform(struct?: DataplexMetadataFeedScopeOutputReference | DataplexMetadataFeedScope): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    entry_groups: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.entryGroups),
    organization_level: cdktn.booleanToTerraform(struct!.organizationLevel),
    projects: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.projects),
  }
}


export function dataplexMetadataFeedScopeToHclTerraform(struct?: DataplexMetadataFeedScopeOutputReference | DataplexMetadataFeedScope): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    entry_groups: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.entryGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    organization_level: {
      value: cdktn.booleanToHclTerraform(struct!.organizationLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    projects: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.projects),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataplexMetadataFeedScopeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataplexMetadataFeedScope | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entryGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryGroups = this._entryGroups;
    }
    if (this._organizationLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizationLevel = this._organizationLevel;
    }
    if (this._projects !== undefined) {
      hasAnyValues = true;
      internalValueResult.projects = this._projects;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataplexMetadataFeedScope | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._entryGroups = undefined;
      this._organizationLevel = undefined;
      this._projects = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._entryGroups = value.entryGroups;
      this._organizationLevel = value.organizationLevel;
      this._projects = value.projects;
    }
  }

  // entry_groups - computed: false, optional: true, required: false
  private _entryGroups?: string[]; 
  public get entryGroups() {
    return this.getListAttribute('entry_groups');
  }
  public set entryGroups(value: string[]) {
    this._entryGroups = value;
  }
  public resetEntryGroups() {
    this._entryGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryGroupsInput() {
    return this._entryGroups;
  }

  // organization_level - computed: false, optional: true, required: false
  private _organizationLevel?: boolean | cdktn.IResolvable; 
  public get organizationLevel() {
    return this.getBooleanAttribute('organization_level');
  }
  public set organizationLevel(value: boolean | cdktn.IResolvable) {
    this._organizationLevel = value;
  }
  public resetOrganizationLevel() {
    this._organizationLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationLevelInput() {
    return this._organizationLevel;
  }

  // projects - computed: false, optional: true, required: false
  private _projects?: string[]; 
  public get projects() {
    return this.getListAttribute('projects');
  }
  public set projects(value: string[]) {
    this._projects = value;
  }
  public resetProjects() {
    this._projects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectsInput() {
    return this._projects;
  }
}
export interface DataplexMetadataFeedTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dataplex_metadata_feed#create DataplexMetadataFeed#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dataplex_metadata_feed#delete DataplexMetadataFeed#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dataplex_metadata_feed#update DataplexMetadataFeed#update}
  */
  readonly update?: string;
}

export function dataplexMetadataFeedTimeoutsToTerraform(struct?: DataplexMetadataFeedTimeouts | cdktn.IResolvable): any {
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


export function dataplexMetadataFeedTimeoutsToHclTerraform(struct?: DataplexMetadataFeedTimeouts | cdktn.IResolvable): any {
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

export class DataplexMetadataFeedTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataplexMetadataFeedTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataplexMetadataFeedTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dataplex_metadata_feed google_dataplex_metadata_feed}
*/
export class DataplexMetadataFeed extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_dataplex_metadata_feed";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataplexMetadataFeed resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataplexMetadataFeed to import
  * @param importFromId The id of the existing DataplexMetadataFeed that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dataplex_metadata_feed#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataplexMetadataFeed to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_dataplex_metadata_feed", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dataplex_metadata_feed google_dataplex_metadata_feed} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataplexMetadataFeedConfig
  */
  public constructor(scope: Construct, id: string, config: DataplexMetadataFeedConfig) {
    super(scope, id, {
      terraformResourceType: 'google_dataplex_metadata_feed',
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
    this._deletionPolicy = config.deletionPolicy;
    this._id = config.id;
    this._labels = config.labels;
    this._location = config.location;
    this._metadataFeedId = config.metadataFeedId;
    this._project = config.project;
    this._pubsubTopic = config.pubsubTopic;
    this._filters.internalValue = config.filters;
    this._scope.internalValue = config.scope;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // metadata_feed_id - computed: false, optional: false, required: true
  private _metadataFeedId?: string; 
  public get metadataFeedId() {
    return this.getStringAttribute('metadata_feed_id');
  }
  public set metadataFeedId(value: string) {
    this._metadataFeedId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataFeedIdInput() {
    return this._metadataFeedId;
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

  // pubsub_topic - computed: false, optional: true, required: false
  private _pubsubTopic?: string; 
  public get pubsubTopic() {
    return this.getStringAttribute('pubsub_topic');
  }
  public set pubsubTopic(value: string) {
    this._pubsubTopic = value;
  }
  public resetPubsubTopic() {
    this._pubsubTopic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pubsubTopicInput() {
    return this._pubsubTopic;
  }

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktn.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // filters - computed: false, optional: true, required: false
  private _filters = new DataplexMetadataFeedFiltersOutputReference(this, "filters");
  public get filters() {
    return this._filters;
  }
  public putFilters(value: DataplexMetadataFeedFilters) {
    this._filters.internalValue = value;
  }
  public resetFilters() {
    this._filters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }

  // scope - computed: false, optional: false, required: true
  private _scope = new DataplexMetadataFeedScopeOutputReference(this, "scope");
  public get scope() {
    return this._scope;
  }
  public putScope(value: DataplexMetadataFeedScope) {
    this._scope.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataplexMetadataFeedTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataplexMetadataFeedTimeouts) {
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
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      id: cdktn.stringToTerraform(this._id),
      labels: cdktn.hashMapper(cdktn.stringToTerraform)(this._labels),
      location: cdktn.stringToTerraform(this._location),
      metadata_feed_id: cdktn.stringToTerraform(this._metadataFeedId),
      project: cdktn.stringToTerraform(this._project),
      pubsub_topic: cdktn.stringToTerraform(this._pubsubTopic),
      filters: dataplexMetadataFeedFiltersToTerraform(this._filters.internalValue),
      scope: dataplexMetadataFeedScopeToTerraform(this._scope.internalValue),
      timeouts: dataplexMetadataFeedTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      metadata_feed_id: {
        value: cdktn.stringToHclTerraform(this._metadataFeedId),
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
      pubsub_topic: {
        value: cdktn.stringToHclTerraform(this._pubsubTopic),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filters: {
        value: dataplexMetadataFeedFiltersToHclTerraform(this._filters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataplexMetadataFeedFiltersList",
      },
      scope: {
        value: dataplexMetadataFeedScopeToHclTerraform(this._scope.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataplexMetadataFeedScopeList",
      },
      timeouts: {
        value: dataplexMetadataFeedTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataplexMetadataFeedTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
