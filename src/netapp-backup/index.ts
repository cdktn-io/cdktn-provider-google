/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/netapp_backup
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface NetappBackupConfig extends cdktn.TerraformMetaArguments {
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/netapp_backup#deletion_policy NetappBackup#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * A description of the backup with 2048 characters or less. Requests with longer descriptions will be rejected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/netapp_backup#description NetappBackup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/netapp_backup#id NetappBackup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Labels as key value pairs. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'.
  * 
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/netapp_backup#labels NetappBackup#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Location of the backup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/netapp_backup#location NetappBackup#location}
  */
  readonly location: string;
  /**
  * The resource name of the backup. Needs to be unique per location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/netapp_backup#name NetappBackup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/netapp_backup#project NetappBackup#project}
  */
  readonly project?: string;
  /**
  * If specified, backup will be created from the given snapshot. If not specified,
  * there will be a new snapshot taken to initiate the backup creation.
  * Format: 'projects/{{projectId}}/locations/{{location}}/volumes/{{volumename}}/snapshots/{{snapshotname}}''
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/netapp_backup#source_snapshot NetappBackup#source_snapshot}
  */
  readonly sourceSnapshot?: string;
  /**
  * ID of volumes this backup belongs to. Format: 'projects/{{projects_id}}/locations/{{location}}/volumes/{{name}}''
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/netapp_backup#source_volume NetappBackup#source_volume}
  */
  readonly sourceVolume?: string;
  /**
  * Name of the backup vault to store the backup in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/netapp_backup#vault_name NetappBackup#vault_name}
  */
  readonly vaultName: string;
  /**
  * ontap_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/netapp_backup#ontap_source NetappBackup#ontap_source}
  */
  readonly ontapSource?: NetappBackupOntapSource;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/netapp_backup#timeouts NetappBackup#timeouts}
  */
  readonly timeouts?: NetappBackupTimeouts;
}
export interface NetappBackupOntapSource {
  /**
  * The UUID of the ONTAP source snapshot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/netapp_backup#snapshot_uuid NetappBackup#snapshot_uuid}
  */
  readonly snapshotUuid?: string;
  /**
  * Name of the storage pool. This must be specified for creating backups for ONTAP mode volumes.
  * Format: 'projects/{{project}}/locations/{{location}}/storagePools/{{storage_pool_id}}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/netapp_backup#storage_pool NetappBackup#storage_pool}
  */
  readonly storagePool: string;
  /**
  * The UUID of the ONTAP source volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/netapp_backup#volume_uuid NetappBackup#volume_uuid}
  */
  readonly volumeUuid: string;
}

export function netappBackupOntapSourceToTerraform(struct?: NetappBackupOntapSourceOutputReference | NetappBackupOntapSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    snapshot_uuid: cdktn.stringToTerraform(struct!.snapshotUuid),
    storage_pool: cdktn.stringToTerraform(struct!.storagePool),
    volume_uuid: cdktn.stringToTerraform(struct!.volumeUuid),
  }
}


export function netappBackupOntapSourceToHclTerraform(struct?: NetappBackupOntapSourceOutputReference | NetappBackupOntapSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    snapshot_uuid: {
      value: cdktn.stringToHclTerraform(struct!.snapshotUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_pool: {
      value: cdktn.stringToHclTerraform(struct!.storagePool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_uuid: {
      value: cdktn.stringToHclTerraform(struct!.volumeUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetappBackupOntapSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetappBackupOntapSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._snapshotUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotUuid = this._snapshotUuid;
    }
    if (this._storagePool !== undefined) {
      hasAnyValues = true;
      internalValueResult.storagePool = this._storagePool;
    }
    if (this._volumeUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeUuid = this._volumeUuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetappBackupOntapSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._snapshotUuid = undefined;
      this._storagePool = undefined;
      this._volumeUuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._snapshotUuid = value.snapshotUuid;
      this._storagePool = value.storagePool;
      this._volumeUuid = value.volumeUuid;
    }
  }

  // snapshot_uuid - computed: true, optional: true, required: false
  private _snapshotUuid?: string; 
  public get snapshotUuid() {
    return this.getStringAttribute('snapshot_uuid');
  }
  public set snapshotUuid(value: string) {
    this._snapshotUuid = value;
  }
  public resetSnapshotUuid() {
    this._snapshotUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotUuidInput() {
    return this._snapshotUuid;
  }

  // storage_pool - computed: false, optional: false, required: true
  private _storagePool?: string; 
  public get storagePool() {
    return this.getStringAttribute('storage_pool');
  }
  public set storagePool(value: string) {
    this._storagePool = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storagePoolInput() {
    return this._storagePool;
  }

  // volume_uuid - computed: false, optional: false, required: true
  private _volumeUuid?: string; 
  public get volumeUuid() {
    return this.getStringAttribute('volume_uuid');
  }
  public set volumeUuid(value: string) {
    this._volumeUuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeUuidInput() {
    return this._volumeUuid;
  }
}
export interface NetappBackupTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/netapp_backup#create NetappBackup#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/netapp_backup#delete NetappBackup#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/netapp_backup#update NetappBackup#update}
  */
  readonly update?: string;
}

export function netappBackupTimeoutsToTerraform(struct?: NetappBackupTimeouts | cdktn.IResolvable): any {
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


export function netappBackupTimeoutsToHclTerraform(struct?: NetappBackupTimeouts | cdktn.IResolvable): any {
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

export class NetappBackupTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetappBackupTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: NetappBackupTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/netapp_backup google_netapp_backup}
*/
export class NetappBackup extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_netapp_backup";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a NetappBackup resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetappBackup to import
  * @param importFromId The id of the existing NetappBackup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/netapp_backup#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetappBackup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_netapp_backup", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/netapp_backup google_netapp_backup} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetappBackupConfig
  */
  public constructor(scope: Construct, id: string, config: NetappBackupConfig) {
    super(scope, id, {
      terraformResourceType: 'google_netapp_backup',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.44.0',
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
    this._description = config.description;
    this._id = config.id;
    this._labels = config.labels;
    this._location = config.location;
    this._name = config.name;
    this._project = config.project;
    this._sourceSnapshot = config.sourceSnapshot;
    this._sourceVolume = config.sourceVolume;
    this._vaultName = config.vaultName;
    this._ontapSource.internalValue = config.ontapSource;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backup_region - computed: true, optional: false, required: false
  public get backupRegion() {
    return this.getStringAttribute('backup_region');
  }

  // backup_type - computed: true, optional: false, required: false
  public get backupType() {
    return this.getStringAttribute('backup_type');
  }

  // chain_storage_bytes - computed: true, optional: false, required: false
  public get chainStorageBytes() {
    return this.getStringAttribute('chain_storage_bytes');
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

  // source_snapshot - computed: false, optional: true, required: false
  private _sourceSnapshot?: string; 
  public get sourceSnapshot() {
    return this.getStringAttribute('source_snapshot');
  }
  public set sourceSnapshot(value: string) {
    this._sourceSnapshot = value;
  }
  public resetSourceSnapshot() {
    this._sourceSnapshot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceSnapshotInput() {
    return this._sourceSnapshot;
  }

  // source_volume - computed: false, optional: true, required: false
  private _sourceVolume?: string; 
  public get sourceVolume() {
    return this.getStringAttribute('source_volume');
  }
  public set sourceVolume(value: string) {
    this._sourceVolume = value;
  }
  public resetSourceVolume() {
    this._sourceVolume = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceVolumeInput() {
    return this._sourceVolume;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktn.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // vault_name - computed: false, optional: false, required: true
  private _vaultName?: string; 
  public get vaultName() {
    return this.getStringAttribute('vault_name');
  }
  public set vaultName(value: string) {
    this._vaultName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultNameInput() {
    return this._vaultName;
  }

  // volume_region - computed: true, optional: false, required: false
  public get volumeRegion() {
    return this.getStringAttribute('volume_region');
  }

  // volume_usage_bytes - computed: true, optional: false, required: false
  public get volumeUsageBytes() {
    return this.getStringAttribute('volume_usage_bytes');
  }

  // ontap_source - computed: false, optional: true, required: false
  private _ontapSource = new NetappBackupOntapSourceOutputReference(this, "ontap_source");
  public get ontapSource() {
    return this._ontapSource;
  }
  public putOntapSource(value: NetappBackupOntapSource) {
    this._ontapSource.internalValue = value;
  }
  public resetOntapSource() {
    this._ontapSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ontapSourceInput() {
    return this._ontapSource.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new NetappBackupTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: NetappBackupTimeouts) {
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
      description: cdktn.stringToTerraform(this._description),
      id: cdktn.stringToTerraform(this._id),
      labels: cdktn.hashMapper(cdktn.stringToTerraform)(this._labels),
      location: cdktn.stringToTerraform(this._location),
      name: cdktn.stringToTerraform(this._name),
      project: cdktn.stringToTerraform(this._project),
      source_snapshot: cdktn.stringToTerraform(this._sourceSnapshot),
      source_volume: cdktn.stringToTerraform(this._sourceVolume),
      vault_name: cdktn.stringToTerraform(this._vaultName),
      ontap_source: netappBackupOntapSourceToTerraform(this._ontapSource.internalValue),
      timeouts: netappBackupTimeoutsToTerraform(this._timeouts.internalValue),
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
      description: {
        value: cdktn.stringToHclTerraform(this._description),
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
      name: {
        value: cdktn.stringToHclTerraform(this._name),
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
      source_snapshot: {
        value: cdktn.stringToHclTerraform(this._sourceSnapshot),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_volume: {
        value: cdktn.stringToHclTerraform(this._sourceVolume),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vault_name: {
        value: cdktn.stringToHclTerraform(this._vaultName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ontap_source: {
        value: netappBackupOntapSourceToHclTerraform(this._ontapSource.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetappBackupOntapSourceList",
      },
      timeouts: {
        value: netappBackupTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NetappBackupTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
