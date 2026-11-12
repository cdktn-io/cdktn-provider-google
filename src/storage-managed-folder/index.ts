/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/storage_managed_folder
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface StorageManagedFolderConfig extends cdktn.TerraformMetaArguments {
  /**
  * The name of the bucket that contains the managed folder.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/storage_managed_folder#bucket StorageManagedFolder#bucket}
  */
  readonly bucket: string;
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/storage_managed_folder#deletion_policy StorageManagedFolder#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Allows the deletion of a managed folder even if contains
  * objects. If a non-empty managed folder is deleted, any objects
  * within the folder will remain in a simulated folder with the
  * same name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/storage_managed_folder#force_destroy StorageManagedFolder#force_destroy}
  */
  readonly forceDestroy?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/storage_managed_folder#id StorageManagedFolder#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the managed folder expressed as a path. Must include
  * trailing '/'. For example, 'example_dir/example_dir2/'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/storage_managed_folder#name StorageManagedFolder#name}
  */
  readonly name: string;
  /**
  * rapid_cache_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/storage_managed_folder#rapid_cache_config StorageManagedFolder#rapid_cache_config}
  */
  readonly rapidCacheConfig?: StorageManagedFolderRapidCacheConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/storage_managed_folder#timeouts StorageManagedFolder#timeouts}
  */
  readonly timeouts?: StorageManagedFolderTimeouts;
}
export interface StorageManagedFolderRapidCacheConfigPolicies {
  /**
  * The ingest-on-write policy for objects in the managed folder. When
  * set to 'enabled', objects are automatically ingested into the cache
  * when they are written to the managed folder.
  * Possible values: ["enabled", "unspecified"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/storage_managed_folder#ingest_on_write StorageManagedFolder#ingest_on_write}
  */
  readonly ingestOnWrite?: string;
  /**
  * The unique identifier of the rapid cache.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/storage_managed_folder#rapid_cache_id StorageManagedFolder#rapid_cache_id}
  */
  readonly rapidCacheId: string;
}

export function storageManagedFolderRapidCacheConfigPoliciesToTerraform(struct?: StorageManagedFolderRapidCacheConfigPolicies | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    ingest_on_write: cdktn.stringToTerraform(struct!.ingestOnWrite),
    rapid_cache_id: cdktn.stringToTerraform(struct!.rapidCacheId),
  }
}


export function storageManagedFolderRapidCacheConfigPoliciesToHclTerraform(struct?: StorageManagedFolderRapidCacheConfigPolicies | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    ingest_on_write: {
      value: cdktn.stringToHclTerraform(struct!.ingestOnWrite),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rapid_cache_id: {
      value: cdktn.stringToHclTerraform(struct!.rapidCacheId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StorageManagedFolderRapidCacheConfigPoliciesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): StorageManagedFolderRapidCacheConfigPolicies | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ingestOnWrite !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingestOnWrite = this._ingestOnWrite;
    }
    if (this._rapidCacheId !== undefined) {
      hasAnyValues = true;
      internalValueResult.rapidCacheId = this._rapidCacheId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageManagedFolderRapidCacheConfigPolicies | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ingestOnWrite = undefined;
      this._rapidCacheId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ingestOnWrite = value.ingestOnWrite;
      this._rapidCacheId = value.rapidCacheId;
    }
  }

  // ingest_on_write - computed: false, optional: true, required: false
  private _ingestOnWrite?: string; 
  public get ingestOnWrite() {
    return this.getStringAttribute('ingest_on_write');
  }
  public set ingestOnWrite(value: string) {
    this._ingestOnWrite = value;
  }
  public resetIngestOnWrite() {
    this._ingestOnWrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingestOnWriteInput() {
    return this._ingestOnWrite;
  }

  // rapid_cache_id - computed: false, optional: false, required: true
  private _rapidCacheId?: string; 
  public get rapidCacheId() {
    return this.getStringAttribute('rapid_cache_id');
  }
  public set rapidCacheId(value: string) {
    this._rapidCacheId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rapidCacheIdInput() {
    return this._rapidCacheId;
  }
}

export class StorageManagedFolderRapidCacheConfigPoliciesList extends cdktn.ComplexList {
  public internalValue? : StorageManagedFolderRapidCacheConfigPolicies[] | cdktn.IResolvable

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
  public get(index: number): StorageManagedFolderRapidCacheConfigPoliciesOutputReference {
    return new StorageManagedFolderRapidCacheConfigPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StorageManagedFolderRapidCacheConfig {
  /**
  * policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/storage_managed_folder#policies StorageManagedFolder#policies}
  */
  readonly policies: StorageManagedFolderRapidCacheConfigPolicies[] | cdktn.IResolvable;
}

export function storageManagedFolderRapidCacheConfigToTerraform(struct?: StorageManagedFolderRapidCacheConfigOutputReference | StorageManagedFolderRapidCacheConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    policies: cdktn.listMapper(storageManagedFolderRapidCacheConfigPoliciesToTerraform, true)(struct!.policies),
  }
}


export function storageManagedFolderRapidCacheConfigToHclTerraform(struct?: StorageManagedFolderRapidCacheConfigOutputReference | StorageManagedFolderRapidCacheConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    policies: {
      value: cdktn.listMapperHcl(storageManagedFolderRapidCacheConfigPoliciesToHclTerraform, true)(struct!.policies),
      isBlock: true,
      type: "set",
      storageClassType: "StorageManagedFolderRapidCacheConfigPoliciesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StorageManagedFolderRapidCacheConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageManagedFolderRapidCacheConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._policies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.policies = this._policies?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageManagedFolderRapidCacheConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._policies.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._policies.internalValue = value.policies;
    }
  }

  // policies - computed: false, optional: false, required: true
  private _policies = new StorageManagedFolderRapidCacheConfigPoliciesList(this, "policies", true);
  public get policies() {
    return this._policies;
  }
  public putPolicies(value: StorageManagedFolderRapidCacheConfigPolicies[] | cdktn.IResolvable) {
    this._policies.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policiesInput() {
    return this._policies.internalValue;
  }
}
export interface StorageManagedFolderTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/storage_managed_folder#create StorageManagedFolder#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/storage_managed_folder#delete StorageManagedFolder#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/storage_managed_folder#update StorageManagedFolder#update}
  */
  readonly update?: string;
}

export function storageManagedFolderTimeoutsToTerraform(struct?: StorageManagedFolderTimeouts | cdktn.IResolvable): any {
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


export function storageManagedFolderTimeoutsToHclTerraform(struct?: StorageManagedFolderTimeouts | cdktn.IResolvable): any {
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

export class StorageManagedFolderTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): StorageManagedFolderTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: StorageManagedFolderTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/storage_managed_folder google_storage_managed_folder}
*/
export class StorageManagedFolder extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_storage_managed_folder";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a StorageManagedFolder resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StorageManagedFolder to import
  * @param importFromId The id of the existing StorageManagedFolder that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/storage_managed_folder#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StorageManagedFolder to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_storage_managed_folder", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/storage_managed_folder google_storage_managed_folder} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StorageManagedFolderConfig
  */
  public constructor(scope: Construct, id: string, config: StorageManagedFolderConfig) {
    super(scope, id, {
      terraformResourceType: 'google_storage_managed_folder',
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
    this._bucket = config.bucket;
    this._deletionPolicy = config.deletionPolicy;
    this._forceDestroy = config.forceDestroy;
    this._id = config.id;
    this._name = config.name;
    this._rapidCacheConfig.internalValue = config.rapidCacheConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
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

  // force_destroy - computed: false, optional: true, required: false
  private _forceDestroy?: boolean | cdktn.IResolvable; 
  public get forceDestroy() {
    return this.getBooleanAttribute('force_destroy');
  }
  public set forceDestroy(value: boolean | cdktn.IResolvable) {
    this._forceDestroy = value;
  }
  public resetForceDestroy() {
    this._forceDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDestroyInput() {
    return this._forceDestroy;
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

  // metageneration - computed: true, optional: false, required: false
  public get metageneration() {
    return this.getStringAttribute('metageneration');
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

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // rapid_cache_config - computed: false, optional: true, required: false
  private _rapidCacheConfig = new StorageManagedFolderRapidCacheConfigOutputReference(this, "rapid_cache_config");
  public get rapidCacheConfig() {
    return this._rapidCacheConfig;
  }
  public putRapidCacheConfig(value: StorageManagedFolderRapidCacheConfig) {
    this._rapidCacheConfig.internalValue = value;
  }
  public resetRapidCacheConfig() {
    this._rapidCacheConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rapidCacheConfigInput() {
    return this._rapidCacheConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new StorageManagedFolderTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: StorageManagedFolderTimeouts) {
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
      bucket: cdktn.stringToTerraform(this._bucket),
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      force_destroy: cdktn.booleanToTerraform(this._forceDestroy),
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      rapid_cache_config: storageManagedFolderRapidCacheConfigToTerraform(this._rapidCacheConfig.internalValue),
      timeouts: storageManagedFolderTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bucket: {
        value: cdktn.stringToHclTerraform(this._bucket),
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
      force_destroy: {
        value: cdktn.booleanToHclTerraform(this._forceDestroy),
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
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rapid_cache_config: {
        value: storageManagedFolderRapidCacheConfigToHclTerraform(this._rapidCacheConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StorageManagedFolderRapidCacheConfigList",
      },
      timeouts: {
        value: storageManagedFolderTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "StorageManagedFolderTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
