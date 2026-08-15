/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/compute_reservation_sub_block
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataGoogleComputeReservationSubBlockConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/compute_reservation_sub_block#id DataGoogleComputeReservationSubBlock#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the reservation sub-block.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/compute_reservation_sub_block#name DataGoogleComputeReservationSubBlock#name}
  */
  readonly name: string;
  /**
  * The project in which the resource belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/compute_reservation_sub_block#project DataGoogleComputeReservationSubBlock#project}
  */
  readonly project?: string;
  /**
  * The name of the parent reservation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/compute_reservation_sub_block#reservation DataGoogleComputeReservationSubBlock#reservation}
  */
  readonly reservation: string;
  /**
  * The name of the parent reservation block.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/compute_reservation_sub_block#reservation_block DataGoogleComputeReservationSubBlock#reservation_block}
  */
  readonly reservationBlock: string;
  /**
  * The zone where the reservation sub-block resides.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/compute_reservation_sub_block#zone DataGoogleComputeReservationSubBlock#zone}
  */
  readonly zone?: string;
}
export interface DataGoogleComputeReservationSubBlockHealthInfo {
}

export function dataGoogleComputeReservationSubBlockHealthInfoToTerraform(struct?: DataGoogleComputeReservationSubBlockHealthInfo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleComputeReservationSubBlockHealthInfoToHclTerraform(struct?: DataGoogleComputeReservationSubBlockHealthInfo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleComputeReservationSubBlockHealthInfoOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleComputeReservationSubBlockHealthInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleComputeReservationSubBlockHealthInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // degraded_host_count - computed: true, optional: false, required: false
  public get degradedHostCount() {
    return this.getNumberAttribute('degraded_host_count');
  }

  // degraded_infra_count - computed: true, optional: false, required: false
  public get degradedInfraCount() {
    return this.getNumberAttribute('degraded_infra_count');
  }

  // health_status - computed: true, optional: false, required: false
  public get healthStatus() {
    return this.getStringAttribute('health_status');
  }

  // healthy_host_count - computed: true, optional: false, required: false
  public get healthyHostCount() {
    return this.getNumberAttribute('healthy_host_count');
  }

  // healthy_infra_count - computed: true, optional: false, required: false
  public get healthyInfraCount() {
    return this.getNumberAttribute('healthy_infra_count');
  }
}

export class DataGoogleComputeReservationSubBlockHealthInfoList extends cdktn.ComplexList {

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
  public get(index: number): DataGoogleComputeReservationSubBlockHealthInfoOutputReference {
    return new DataGoogleComputeReservationSubBlockHealthInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleComputeReservationSubBlockPhysicalTopology {
}

export function dataGoogleComputeReservationSubBlockPhysicalTopologyToTerraform(struct?: DataGoogleComputeReservationSubBlockPhysicalTopology): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleComputeReservationSubBlockPhysicalTopologyToHclTerraform(struct?: DataGoogleComputeReservationSubBlockPhysicalTopology): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleComputeReservationSubBlockPhysicalTopology | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleComputeReservationSubBlockPhysicalTopology | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // block - computed: true, optional: false, required: false
  public get block() {
    return this.getStringAttribute('block');
  }

  // cluster - computed: true, optional: false, required: false
  public get cluster() {
    return this.getStringAttribute('cluster');
  }

  // sub_block - computed: true, optional: false, required: false
  public get subBlock() {
    return this.getStringAttribute('sub_block');
  }
}

export class DataGoogleComputeReservationSubBlockPhysicalTopologyList extends cdktn.ComplexList {

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
  public get(index: number): DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference {
    return new DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleComputeReservationSubBlockReservationSubBlockMaintenance {
}

export function dataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceToTerraform(struct?: DataGoogleComputeReservationSubBlockReservationSubBlockMaintenance): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceToHclTerraform(struct?: DataGoogleComputeReservationSubBlockReservationSubBlockMaintenance): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleComputeReservationSubBlockReservationSubBlockMaintenance | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleComputeReservationSubBlockReservationSubBlockMaintenance | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // instance_maintenance_ongoing_count - computed: true, optional: false, required: false
  public get instanceMaintenanceOngoingCount() {
    return this.getNumberAttribute('instance_maintenance_ongoing_count');
  }

  // instance_maintenance_pending_count - computed: true, optional: false, required: false
  public get instanceMaintenancePendingCount() {
    return this.getNumberAttribute('instance_maintenance_pending_count');
  }

  // maintenance_ongoing_count - computed: true, optional: false, required: false
  public get maintenanceOngoingCount() {
    return this.getNumberAttribute('maintenance_ongoing_count');
  }

  // maintenance_pending_count - computed: true, optional: false, required: false
  public get maintenancePendingCount() {
    return this.getNumberAttribute('maintenance_pending_count');
  }

  // scheduling_type - computed: true, optional: false, required: false
  public get schedulingType() {
    return this.getStringAttribute('scheduling_type');
  }

  // subblock_infra_maintenance_ongoing_count - computed: true, optional: false, required: false
  public get subblockInfraMaintenanceOngoingCount() {
    return this.getNumberAttribute('subblock_infra_maintenance_ongoing_count');
  }

  // subblock_infra_maintenance_pending_count - computed: true, optional: false, required: false
  public get subblockInfraMaintenancePendingCount() {
    return this.getNumberAttribute('subblock_infra_maintenance_pending_count');
  }
}

export class DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList extends cdktn.ComplexList {

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
  public get(index: number): DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference {
    return new DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/compute_reservation_sub_block google_compute_reservation_sub_block}
*/
export class DataGoogleComputeReservationSubBlock extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_compute_reservation_sub_block";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataGoogleComputeReservationSubBlock resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGoogleComputeReservationSubBlock to import
  * @param importFromId The id of the existing DataGoogleComputeReservationSubBlock that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/compute_reservation_sub_block#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGoogleComputeReservationSubBlock to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_compute_reservation_sub_block", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/compute_reservation_sub_block google_compute_reservation_sub_block} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGoogleComputeReservationSubBlockConfig
  */
  public constructor(scope: Construct, id: string, config: DataGoogleComputeReservationSubBlockConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_reservation_sub_block',
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
    this._id = config.id;
    this._name = config.name;
    this._project = config.project;
    this._reservation = config.reservation;
    this._reservationBlock = config.reservationBlock;
    this._zone = config.zone;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // creation_timestamp - computed: true, optional: false, required: false
  public get creationTimestamp() {
    return this.getStringAttribute('creation_timestamp');
  }

  // health_info - computed: true, optional: false, required: false
  private _healthInfo = new DataGoogleComputeReservationSubBlockHealthInfoList(this, "health_info", false);
  public get healthInfo() {
    return this._healthInfo;
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

  // in_use_count - computed: true, optional: false, required: false
  public get inUseCount() {
    return this.getNumberAttribute('in_use_count');
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
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

  // physical_topology - computed: true, optional: false, required: false
  private _physicalTopology = new DataGoogleComputeReservationSubBlockPhysicalTopologyList(this, "physical_topology", false);
  public get physicalTopology() {
    return this._physicalTopology;
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

  // reservation - computed: false, optional: false, required: true
  private _reservation?: string; 
  public get reservation() {
    return this.getStringAttribute('reservation');
  }
  public set reservation(value: string) {
    this._reservation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get reservationInput() {
    return this._reservation;
  }

  // reservation_block - computed: false, optional: false, required: true
  private _reservationBlock?: string; 
  public get reservationBlock() {
    return this.getStringAttribute('reservation_block');
  }
  public set reservationBlock(value: string) {
    this._reservationBlock = value;
  }
  // Temporarily expose input value. Use with caution.
  public get reservationBlockInput() {
    return this._reservationBlock;
  }

  // reservation_sub_block_maintenance - computed: true, optional: false, required: false
  private _reservationSubBlockMaintenance = new DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList(this, "reservation_sub_block_maintenance", false);
  public get reservationSubBlockMaintenance() {
    return this._reservationSubBlockMaintenance;
  }

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // self_link_with_id - computed: true, optional: false, required: false
  public get selfLinkWithId() {
    return this.getStringAttribute('self_link_with_id');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // sub_block_count - computed: true, optional: false, required: false
  public get subBlockCount() {
    return this.getNumberAttribute('sub_block_count');
  }

  // zone - computed: false, optional: true, required: false
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      project: cdktn.stringToTerraform(this._project),
      reservation: cdktn.stringToTerraform(this._reservation),
      reservation_block: cdktn.stringToTerraform(this._reservationBlock),
      zone: cdktn.stringToTerraform(this._zone),
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
      reservation: {
        value: cdktn.stringToHclTerraform(this._reservation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reservation_block: {
        value: cdktn.stringToHclTerraform(this._reservationBlock),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone: {
        value: cdktn.stringToHclTerraform(this._zone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
