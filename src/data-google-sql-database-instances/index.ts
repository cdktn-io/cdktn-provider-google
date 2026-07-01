/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/sql_database_instances
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataGoogleSqlDatabaseInstancesConfig extends cdktn.TerraformMetaArguments {
  /**
  * To filter out the database instances which are of the specified database version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/sql_database_instances#database_version DataGoogleSqlDatabaseInstances#database_version}
  */
  readonly databaseVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/sql_database_instances#id DataGoogleSqlDatabaseInstances#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Project ID of the project that contains the instances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/sql_database_instances#project DataGoogleSqlDatabaseInstances#project}
  */
  readonly project?: string;
  /**
  * To filter out the database instances which are located in this specified region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/sql_database_instances#region DataGoogleSqlDatabaseInstances#region}
  */
  readonly region?: string;
  /**
  * To filter out the database instances based on the current state of the database instance, valid values include : "SQL_INSTANCE_STATE_UNSPECIFIED", "RUNNABLE", "SUSPENDED", "PENDING_DELETE", "PENDING_CREATE", "MAINTENANCE" and "FAILED".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/sql_database_instances#state DataGoogleSqlDatabaseInstances#state}
  */
  readonly state?: string;
  /**
  * To filter out the database instances based on the machine type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/sql_database_instances#tier DataGoogleSqlDatabaseInstances#tier}
  */
  readonly tier?: string;
  /**
  * To filter out the database instances which are located in this specified zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/sql_database_instances#zone DataGoogleSqlDatabaseInstances#zone}
  */
  readonly zone?: string;
}
export interface DataGoogleSqlDatabaseInstancesInstancesClone {
}

export function dataGoogleSqlDatabaseInstancesInstancesCloneToTerraform(struct?: DataGoogleSqlDatabaseInstancesInstancesClone): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleSqlDatabaseInstancesInstancesCloneToHclTerraform(struct?: DataGoogleSqlDatabaseInstancesInstancesClone): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataGoogleSqlDatabaseInstancesInstancesClone | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleSqlDatabaseInstancesInstancesClone | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allocated_ip_range - computed: true, optional: false, required: false
  public get allocatedIpRange() {
    return this.getStringAttribute('allocated_ip_range');
  }

  // database_names - computed: true, optional: false, required: false
  public get databaseNames() {
    return this.getListAttribute('database_names');
  }

  // point_in_time - computed: true, optional: false, required: false
  public get pointInTime() {
    return this.getStringAttribute('point_in_time');
  }

  // preferred_zone - computed: true, optional: false, required: false
  public get preferredZone() {
    return this.getStringAttribute('preferred_zone');
  }

  // source_instance_deletion_time - computed: true, optional: false, required: false
  public get sourceInstanceDeletionTime() {
    return this.getStringAttribute('source_instance_deletion_time');
  }

  // source_instance_name - computed: true, optional: false, required: false
  public get sourceInstanceName() {
    return this.getStringAttribute('source_instance_name');
  }

  // source_project - computed: true, optional: false, required: false
  public get sourceProject() {
    return this.getStringAttribute('source_project');
  }
}

export class DataGoogleSqlDatabaseInstancesInstancesCloneList extends cdktn.ComplexList {

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
  public get(index: number): DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference {
    return new DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleSqlDatabaseInstancesInstancesDnsNames {
}

export function dataGoogleSqlDatabaseInstancesInstancesDnsNamesToTerraform(struct?: DataGoogleSqlDatabaseInstancesInstancesDnsNames): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleSqlDatabaseInstancesInstancesDnsNamesToHclTerraform(struct?: DataGoogleSqlDatabaseInstancesInstancesDnsNames): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleSqlDatabaseInstancesInstancesDnsNamesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataGoogleSqlDatabaseInstancesInstancesDnsNames | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleSqlDatabaseInstancesInstancesDnsNames | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // connection_type - computed: true, optional: false, required: false
  public get connectionType() {
    return this.getStringAttribute('connection_type');
  }

  // dns_scope - computed: true, optional: false, required: false
  public get dnsScope() {
    return this.getStringAttribute('dns_scope');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataGoogleSqlDatabaseInstancesInstancesDnsNamesList extends cdktn.ComplexList {

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
  public get(index: number): DataGoogleSqlDatabaseInstancesInstancesDnsNamesOutputReference {
    return new DataGoogleSqlDatabaseInstancesInstancesDnsNamesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleSqlDatabaseInstancesInstancesIpAddress {
}

export function dataGoogleSqlDatabaseInstancesInstancesIpAddressToTerraform(struct?: DataGoogleSqlDatabaseInstancesInstancesIpAddress): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleSqlDatabaseInstancesInstancesIpAddressToHclTerraform(struct?: DataGoogleSqlDatabaseInstancesInstancesIpAddress): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleSqlDatabaseInstancesInstancesIpAddressOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataGoogleSqlDatabaseInstancesInstancesIpAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleSqlDatabaseInstancesInstancesIpAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // time_to_retire - computed: true, optional: false, required: false
  public get timeToRetire() {
    return this.getStringAttribute('time_to_retire');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataGoogleSqlDatabaseInstancesInstancesIpAddressList extends cdktn.ComplexList {

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
  public get(index: number): DataGoogleSqlDatabaseInstancesInstancesIpAddressOutputReference {
    return new DataGoogleSqlDatabaseInstancesInstancesIpAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleSqlDatabaseInstancesInstancesPointInTimeRestoreContext {
}

export function dataGoogleSqlDatabaseInstancesInstancesPointInTimeRestoreContextToTerraform(struct?: DataGoogleSqlDatabaseInstancesInstancesPointInTimeRestoreContext): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleSqlDatabaseInstancesInstancesPointInTimeRestoreContextToHclTerraform(struct?: DataGoogleSqlDatabaseInstancesInstancesPointInTimeRestoreContext): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleSqlDatabaseInstancesInstancesPointInTimeRestoreContextOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataGoogleSqlDatabaseInstancesInstancesPointInTimeRestoreContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleSqlDatabaseInstancesInstancesPointInTimeRestoreContext | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allocated_ip_range - computed: true, optional: false, required: false
  public get allocatedIpRange() {
    return this.getStringAttribute('allocated_ip_range');
  }

  // datasource - computed: true, optional: false, required: false
  public get datasource() {
    return this.getStringAttribute('datasource');
  }

  // point_in_time - computed: true, optional: false, required: false
  public get pointInTime() {
    return this.getStringAttribute('point_in_time');
  }

  // preferred_zone - computed: true, optional: false, required: false
  public get preferredZone() {
    return this.getStringAttribute('preferred_zone');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // target_instance - computed: true, optional: false, required: false
  public get targetInstance() {
    return this.getStringAttribute('target_instance');
  }
}

export class DataGoogleSqlDatabaseInstancesInstancesPointInTimeRestoreContextList extends cdktn.ComplexList {

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
  public get(index: number): DataGoogleSqlDatabaseInstancesInstancesPointInTimeRestoreContextOutputReference {
    return new DataGoogleSqlDatabaseInstancesInstancesPointInTimeRestoreContextOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleSqlDatabaseInstancesInstancesReplicaConfiguration {
}

export function dataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationToTerraform(struct?: DataGoogleSqlDatabaseInstancesInstancesReplicaConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationToHclTerraform(struct?: DataGoogleSqlDatabaseInstancesInstancesReplicaConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataGoogleSqlDatabaseInstancesInstancesReplicaConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleSqlDatabaseInstancesInstancesReplicaConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ca_certificate - computed: true, optional: false, required: false
  public get caCertificate() {
    return this.getStringAttribute('ca_certificate');
  }

  // cascadable_replica - computed: true, optional: false, required: false
  public get cascadableReplica() {
    return this.getBooleanAttribute('cascadable_replica');
  }

  // client_certificate - computed: true, optional: false, required: false
  public get clientCertificate() {
    return this.getStringAttribute('client_certificate');
  }

  // client_key - computed: true, optional: false, required: false
  public get clientKey() {
    return this.getStringAttribute('client_key');
  }

  // connect_retry_interval - computed: true, optional: false, required: false
  public get connectRetryInterval() {
    return this.getNumberAttribute('connect_retry_interval');
  }

  // dump_file_path - computed: true, optional: false, required: false
  public get dumpFilePath() {
    return this.getStringAttribute('dump_file_path');
  }

  // failover_target - computed: true, optional: false, required: false
  public get failoverTarget() {
    return this.getBooleanAttribute('failover_target');
  }

  // master_heartbeat_period - computed: true, optional: false, required: false
  public get masterHeartbeatPeriod() {
    return this.getNumberAttribute('master_heartbeat_period');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // ssl_cipher - computed: true, optional: false, required: false
  public get sslCipher() {
    return this.getStringAttribute('ssl_cipher');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }

  // verify_server_certificate - computed: true, optional: false, required: false
  public get verifyServerCertificate() {
    return this.getBooleanAttribute('verify_server_certificate');
  }
}

export class DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationList extends cdktn.ComplexList {

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
  public get(index: number): DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference {
    return new DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleSqlDatabaseInstancesInstancesReplicationCluster {
}

export function dataGoogleSqlDatabaseInstancesInstancesReplicationClusterToTerraform(struct?: DataGoogleSqlDatabaseInstancesInstancesReplicationCluster): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleSqlDatabaseInstancesInstancesReplicationClusterToHclTerraform(struct?: DataGoogleSqlDatabaseInstancesInstancesReplicationCluster): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleSqlDatabaseInstancesInstancesReplicationClusterOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataGoogleSqlDatabaseInstancesInstancesReplicationCluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleSqlDatabaseInstancesInstancesReplicationCluster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dr_replica - computed: true, optional: false, required: false
  public get drReplica() {
    return this.getBooleanAttribute('dr_replica');
  }

  // failover_dr_replica_name - computed: true, optional: false, required: false
  public get failoverDrReplicaName() {
    return this.getStringAttribute('failover_dr_replica_name');
  }

  // psa_write_endpoint - computed: true, optional: false, required: false
  public get psaWriteEndpoint() {
    return this.getStringAttribute('psa_write_endpoint');
  }
}

export class DataGoogleSqlDatabaseInstancesInstancesReplicationClusterList extends cdktn.ComplexList {

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
  public get(index: number): DataGoogleSqlDatabaseInstancesInstancesReplicationClusterOutputReference {
    return new DataGoogleSqlDatabaseInstancesInstancesReplicationClusterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContext {
}

export function dataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextToTerraform(struct?: DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContext): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextToHclTerraform(struct?: DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContext): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContext | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // backup_run_id - computed: true, optional: false, required: false
  public get backupRunId() {
    return this.getNumberAttribute('backup_run_id');
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // project - computed: true, optional: false, required: false
  public get project() {
    return this.getStringAttribute('project');
  }
}

export class DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextList extends cdktn.ComplexList {

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
  public get(index: number): DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextOutputReference {
    return new DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleSqlDatabaseInstancesInstancesServerCaCert {
}

export function dataGoogleSqlDatabaseInstancesInstancesServerCaCertToTerraform(struct?: DataGoogleSqlDatabaseInstancesInstancesServerCaCert): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleSqlDatabaseInstancesInstancesServerCaCertToHclTerraform(struct?: DataGoogleSqlDatabaseInstancesInstancesServerCaCert): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataGoogleSqlDatabaseInstancesInstancesServerCaCert | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleSqlDatabaseInstancesInstancesServerCaCert | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cert - computed: true, optional: false, required: false
  public get cert() {
    return this.getStringAttribute('cert');
  }

  // common_name - computed: true, optional: false, required: false
  public get commonName() {
    return this.getStringAttribute('common_name');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // expiration_time - computed: true, optional: false, required: false
  public get expirationTime() {
    return this.getStringAttribute('expiration_time');
  }

  // sha1_fingerprint - computed: true, optional: false, required: false
  public get sha1Fingerprint() {
    return this.getStringAttribute('sha1_fingerprint');
  }
}

export class DataGoogleSqlDatabaseInstancesInstancesServerCaCertList extends cdktn.ComplexList {

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
  public get(index: number): DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference {
    return new DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfig {
}

export function dataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigToTerraform(struct?: DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigToHclTerraform(struct?: DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // admin_credential_secret_name - computed: true, optional: false, required: false
  public get adminCredentialSecretName() {
    return this.getStringAttribute('admin_credential_secret_name');
  }

  // dns_servers - computed: true, optional: false, required: false
  public get dnsServers() {
    return this.getListAttribute('dns_servers');
  }

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // organizational_unit - computed: true, optional: false, required: false
  public get organizationalUnit() {
    return this.getStringAttribute('organizational_unit');
  }
}

export class DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigList extends cdktn.ComplexList {

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
  public get(index: number): DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigOutputReference {
    return new DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleSqlDatabaseInstancesInstancesSettingsAdvancedMachineFeatures {
}

export function dataGoogleSqlDatabaseInstancesInstancesSettingsAdvancedMachineFeaturesToTerraform(struct?: DataGoogleSqlDatabaseInstancesInstancesSettingsAdvancedMachineFeatures): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleSqlDatabaseInstancesInstancesSettingsAdvancedMachineFeaturesToHclTerraform(struct?: DataGoogleSqlDatabaseInstancesInstancesSettingsAdvancedMachineFeatures): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleSqlDatabaseInstancesInstancesSettingsAdvancedMachineFeaturesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataGoogleSqlDatabaseInstancesInstancesSettingsAdvancedMachineFeatures | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleSqlDatabaseInstancesInstancesSettingsAdvancedMachineFeatures | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // threads_per_core - computed: true, optional: false, required: false
  public get threadsPerCore() {
    return this.getNumberAttribute('threads_per_core');
  }
}

export class DataGoogleSqlDatabaseInstancesInstancesSettingsAdvancedMachineFeaturesList extends cdktn.ComplexList {

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
  public get(index: number): DataGoogleSqlDatabaseInstancesInstancesSettingsAdvancedMachineFeaturesOutputReference {
    return new DataGoogleSqlDatabaseInstancesInstancesSettingsAdvancedMachineFeaturesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettings {
}

export function dataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsToTerraform(struct?: DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsToHclTerraform(struct?: DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // retained_backups - computed: true, optional: false, required: false
  public get retainedBackups() {
    return this.getNumberAttribute('retained_backups');
  }

  // retention_unit - computed: true, optional: false, required: false
  public get retentionUnit() {
    return this.getStringAttribute('retention_unit');
  }
}

export class DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsList extends cdktn.ComplexList {

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
  public get(index: number): DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsOutputReference {
    return new DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfiguration {
}

export function dataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationToTerraform(struct?: DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationToHclTerraform(struct?: DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // backup_retention_settings - computed: true, optional: false, required: false
  private _backupRetentionSettings = new DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsList(this, "backup_retention_settings", false);
  public get backupRetentionSettings() {
    return this._backupRetentionSettings;
  }

  // backup_tier - computed: true, optional: false, required: false
  public get backupTier() {
    return this.getStringAttribute('backup_tier');
  }

  // binary_log_enabled - computed: true, optional: false, required: false
  public get binaryLogEnabled() {
    return this.getBooleanAttribute('binary_log_enabled');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // point_in_time_recovery_enabled - computed: true, optional: false, required: false
  public get pointInTimeRecoveryEnabled() {
    return this.getBooleanAttribute('point_in_time_recovery_enabled');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
  }

  // transaction_log_retention_days - computed: true, optional: false, required: false
  public get transactionLogRetentionDays() {
    return this.getNumberAttribute('transaction_log_retention_days');
  }
}

export class DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationList extends cdktn.ComplexList {

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
  public get(index: number): DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference {
    return new DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigFlags {
}

export function dataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigFlagsToTerraform(struct?: DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigFlags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigFlagsToHclTerraform(struct?: DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigFlags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigFlagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigFlags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigFlags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigFlagsList extends cdktn.ComplexList {

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
  public get(index: number): DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigFlagsOutputReference {
    return new DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigFlagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfig {
}

export function dataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigToTerraform(struct?: DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigToHclTerraform(struct?: DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // connection_pooling_enabled - computed: true, optional: false, required: false
  public get connectionPoolingEnabled() {
    return this.getBooleanAttribute('connection_pooling_enabled');
  }

  // flags - computed: true, optional: false, required: false
  private _flags = new DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigFlagsList(this, "flags", true);
  public get flags() {
    return this._flags;
  }
}

export class DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigList extends cdktn.ComplexList {

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
  public get(index: number): DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigOutputReference {
    return new DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleSqlDatabaseInstancesInstancesSettingsDataCacheConfig {
}

export function dataGoogleSqlDatabaseInstancesInstancesSettingsDataCacheConfigToTerraform(struct?: DataGoogleSqlDatabaseInstancesInstancesSettingsDataCacheConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleSqlDatabaseInstancesInstancesSettingsDataCacheConfigToHclTerraform(struct?: DataGoogleSqlDatabaseInstancesInstancesSettingsDataCacheConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleSqlDatabaseInstancesInstancesSettingsDataCacheConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataGoogleSqlDatabaseInstancesInstancesSettingsDataCacheConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleSqlDatabaseInstancesInstancesSettingsDataCacheConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_cache_enabled - computed: true, optional: false, required: false
  public get dataCacheEnabled() {
    return this.getBooleanAttribute('data_cache_enabled');
  }
}

export class DataGoogleSqlDatabaseInstancesInstancesSettingsDataCacheConfigList extends cdktn.ComplexList {

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
  public get(index: number): DataGoogleSqlDatabaseInstancesInstancesSettingsDataCacheConfigOutputReference {
    return new DataGoogleSqlDatabaseInstancesInstancesSettingsDataCacheConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlags {
}

export function dataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsToTerraform(struct?: DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsToHclTerraform(struct?: DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsList extends cdktn.ComplexList {

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
  public get(index: number): DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsOutputReference {
    return new DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriod {
}

export function dataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodToTerraform(struct?: DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriod): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodToHclTerraform(struct?: DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriod): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriod | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriod | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end_date - computed: true, optional: false, required: false
  public get endDate() {
    return this.getStringAttribute('end_date');
  }

  // start_date - computed: true, optional: false, required: false
  public get startDate() {
    return this.getStringAttribute('start_date');
  }

  // time - computed: true, optional: false, required: false
  public get time() {
    return this.getStringAttribute('time');
  }
}

export class DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodList extends cdktn.ComplexList {

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
  public get(index: number): DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodOutputReference {
    return new DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleSqlDatabaseInstancesInstancesSettingsEntraidConfig {
}

export function dataGoogleSqlDatabaseInstancesInstancesSettingsEntraidConfigToTerraform(struct?: DataGoogleSqlDatabaseInstancesInstancesSettingsEntraidConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleSqlDatabaseInstancesInstancesSettingsEntraidConfigToHclTerraform(struct?: DataGoogleSqlDatabaseInstancesInstancesSettingsEntraidConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleSqlDatabaseInstancesInstancesSettingsEntraidConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataGoogleSqlDatabaseInstancesInstancesSettingsEntraidConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleSqlDatabaseInstancesInstancesSettingsEntraidConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // application_id - computed: true, optional: false, required: false
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
}

export class DataGoogleSqlDatabaseInstancesInstancesSettingsEntraidConfigList extends cdktn.ComplexList {

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
  public get(index: number): DataGoogleSqlDatabaseInstancesInstancesSettingsEntraidConfigOutputReference {
    return new DataGoogleSqlDatabaseInstancesInstancesSettingsEntraidConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleSqlDatabaseInstancesInstancesSettingsFinalBackupConfig {
}

export function dataGoogleSqlDatabaseInstancesInstancesSettingsFinalBackupConfigToTerraform(struct?: DataGoogleSqlDatabaseInstancesInstancesSettingsFinalBackupConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleSqlDatabaseInstancesInstancesSettingsFinalBackupConfigToHclTerraform(struct?: DataGoogleSqlDatabaseInstancesInstancesSettingsFinalBackupConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleSqlDatabaseInstancesInstancesSettingsFinalBackupConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataGoogleSqlDatabaseInstancesInstancesSettingsFinalBackupConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleSqlDatabaseInstancesInstancesSettingsFinalBackupConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // retention_days - computed: true, optional: false, required: false
  public get retentionDays() {
    return this.getNumberAttribute('retention_days');
  }
}

export class DataGoogleSqlDatabaseInstancesInstancesSettingsFinalBackupConfigList extends cdktn.ComplexList {

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
  public get(index: number): DataGoogleSqlDatabaseInstancesInstancesSettingsFinalBackupConfigOutputReference {
    return new DataGoogleSqlDatabaseInstancesInstancesSettingsFinalBackupConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfig {
}

export function dataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigToTerraform(struct?: DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigToHclTerraform(struct?: DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enhanced_query_insights_enabled - computed: true, optional: false, required: false
  public get enhancedQueryInsightsEnabled() {
    return this.getBooleanAttribute('enhanced_query_insights_enabled');
  }

  // query_insights_enabled - computed: true, optional: false, required: false
  public get queryInsightsEnabled() {
    return this.getBooleanAttribute('query_insights_enabled');
  }

  // query_plans_per_minute - computed: true, optional: false, required: false
  public get queryPlansPerMinute() {
    return this.getNumberAttribute('query_plans_per_minute');
  }

  // query_string_length - computed: true, optional: false, required: false
  public get queryStringLength() {
    return this.getNumberAttribute('query_string_length');
  }

  // record_application_tags - computed: true, optional: false, required: false
  public get recordApplicationTags() {
    return this.getBooleanAttribute('record_application_tags');
  }

  // record_client_address - computed: true, optional: false, required: false
  public get recordClientAddress() {
    return this.getBooleanAttribute('record_client_address');
  }
}

export class DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigList extends cdktn.ComplexList {

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
  public get(index: number): DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference {
    return new DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworks {
}

export function dataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksToTerraform(struct?: DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworks): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksToHclTerraform(struct?: DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworks): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // expiration_time - computed: true, optional: false, required: false
  public get expirationTime() {
    return this.getStringAttribute('expiration_time');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksList extends cdktn.ComplexList {

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
  public get(index: number): DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksOutputReference {
    return new DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigPscAutoConnections {
}

export function dataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigPscAutoConnectionsToTerraform(struct?: DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigPscAutoConnections): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigPscAutoConnectionsToHclTerraform(struct?: DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigPscAutoConnections): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigPscAutoConnections | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigPscAutoConnections | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // consumer_network - computed: true, optional: false, required: false
  public get consumerNetwork() {
    return this.getStringAttribute('consumer_network');
  }

  // consumer_network_status - computed: true, optional: false, required: false
  public get consumerNetworkStatus() {
    return this.getStringAttribute('consumer_network_status');
  }

  // consumer_service_project_id - computed: true, optional: false, required: false
  public get consumerServiceProjectId() {
    return this.getStringAttribute('consumer_service_project_id');
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigPscAutoConnectionsList extends cdktn.ComplexList {

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
  public get(index: number): DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference {
    return new DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfig {
}

export function dataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigToTerraform(struct?: DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigToHclTerraform(struct?: DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed_consumer_projects - computed: true, optional: false, required: false
  public get allowedConsumerProjects() {
    return cdktn.Fn.tolist(this.getListAttribute('allowed_consumer_projects'));
  }

  // network_attachment_uri - computed: true, optional: false, required: false
  public get networkAttachmentUri() {
    return this.getStringAttribute('network_attachment_uri');
  }

  // psc_auto_connections - computed: true, optional: false, required: false
  private _pscAutoConnections = new DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigPscAutoConnectionsList(this, "psc_auto_connections", false);
  public get pscAutoConnections() {
    return this._pscAutoConnections;
  }

  // psc_auto_dns_enabled - computed: true, optional: false, required: false
  public get pscAutoDnsEnabled() {
    return this.getBooleanAttribute('psc_auto_dns_enabled');
  }

  // psc_enabled - computed: true, optional: false, required: false
  public get pscEnabled() {
    return this.getBooleanAttribute('psc_enabled');
  }

  // psc_write_endpoint_dns_enabled - computed: true, optional: false, required: false
  public get pscWriteEndpointDnsEnabled() {
    return this.getBooleanAttribute('psc_write_endpoint_dns_enabled');
  }
}

export class DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigList extends cdktn.ComplexList {

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
  public get(index: number): DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigOutputReference {
    return new DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfiguration {
}

export function dataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationToTerraform(struct?: DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationToHclTerraform(struct?: DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allocated_ip_range - computed: true, optional: false, required: false
  public get allocatedIpRange() {
    return this.getStringAttribute('allocated_ip_range');
  }

  // authorized_networks - computed: true, optional: false, required: false
  private _authorizedNetworks = new DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksList(this, "authorized_networks", true);
  public get authorizedNetworks() {
    return this._authorizedNetworks;
  }

  // custom_subject_alternative_names - computed: true, optional: false, required: false
  public get customSubjectAlternativeNames() {
    return cdktn.Fn.tolist(this.getListAttribute('custom_subject_alternative_names'));
  }

  // enable_private_path_for_google_cloud_services - computed: true, optional: false, required: false
  public get enablePrivatePathForGoogleCloudServices() {
    return this.getBooleanAttribute('enable_private_path_for_google_cloud_services');
  }

  // ipv4_enabled - computed: true, optional: false, required: false
  public get ipv4Enabled() {
    return this.getBooleanAttribute('ipv4_enabled');
  }

  // private_network - computed: true, optional: false, required: false
  public get privateNetwork() {
    return this.getStringAttribute('private_network');
  }

  // psc_config - computed: true, optional: false, required: false
  private _pscConfig = new DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigList(this, "psc_config", true);
  public get pscConfig() {
    return this._pscConfig;
  }

  // server_ca_mode - computed: true, optional: false, required: false
  public get serverCaMode() {
    return this.getStringAttribute('server_ca_mode');
  }

  // server_ca_pool - computed: true, optional: false, required: false
  public get serverCaPool() {
    return this.getStringAttribute('server_ca_pool');
  }

  // server_certificate_rotation_mode - computed: true, optional: false, required: false
  public get serverCertificateRotationMode() {
    return this.getStringAttribute('server_certificate_rotation_mode');
  }

  // ssl_mode - computed: true, optional: false, required: false
  public get sslMode() {
    return this.getStringAttribute('ssl_mode');
  }
}

export class DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationList extends cdktn.ComplexList {

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
  public get(index: number): DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference {
    return new DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreference {
}

export function dataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceToTerraform(struct?: DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreference): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceToHclTerraform(struct?: DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreference): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // follow_gae_application - computed: true, optional: false, required: false
  public get followGaeApplication() {
    return this.getStringAttribute('follow_gae_application');
  }

  // secondary_zone - computed: true, optional: false, required: false
  public get secondaryZone() {
    return this.getStringAttribute('secondary_zone');
  }

  // zone - computed: true, optional: false, required: false
  public get zone() {
    return this.getStringAttribute('zone');
  }
}

export class DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceList extends cdktn.ComplexList {

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
  public get(index: number): DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceOutputReference {
    return new DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindow {
}

export function dataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowToTerraform(struct?: DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindow): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowToHclTerraform(struct?: DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindow): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // day - computed: true, optional: false, required: false
  public get day() {
    return this.getNumberAttribute('day');
  }

  // hour - computed: true, optional: false, required: false
  public get hour() {
    return this.getNumberAttribute('hour');
  }

  // update_track - computed: true, optional: false, required: false
  public get updateTrack() {
    return this.getStringAttribute('update_track');
  }
}

export class DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowList extends cdktn.ComplexList {

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
  public get(index: number): DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowOutputReference {
    return new DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicy {
}

export function dataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyToTerraform(struct?: DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyToHclTerraform(struct?: DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // complexity - computed: true, optional: false, required: false
  public get complexity() {
    return this.getStringAttribute('complexity');
  }

  // disallow_username_substring - computed: true, optional: false, required: false
  public get disallowUsernameSubstring() {
    return this.getBooleanAttribute('disallow_username_substring');
  }

  // enable_password_policy - computed: true, optional: false, required: false
  public get enablePasswordPolicy() {
    return this.getBooleanAttribute('enable_password_policy');
  }

  // min_length - computed: true, optional: false, required: false
  public get minLength() {
    return this.getNumberAttribute('min_length');
  }

  // password_change_interval - computed: true, optional: false, required: false
  public get passwordChangeInterval() {
    return this.getStringAttribute('password_change_interval');
  }

  // reuse_interval - computed: true, optional: false, required: false
  public get reuseInterval() {
    return this.getNumberAttribute('reuse_interval');
  }
}

export class DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyList extends cdktn.ComplexList {

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
  public get(index: number): DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference {
    return new DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleSqlDatabaseInstancesInstancesSettingsReadPoolAutoScaleConfigTargetMetrics {
}

export function dataGoogleSqlDatabaseInstancesInstancesSettingsReadPoolAutoScaleConfigTargetMetricsToTerraform(struct?: DataGoogleSqlDatabaseInstancesInstancesSettingsReadPoolAutoScaleConfigTargetMetrics): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleSqlDatabaseInstancesInstancesSettingsReadPoolAutoScaleConfigTargetMetricsToHclTerraform(struct?: DataGoogleSqlDatabaseInstancesInstancesSettingsReadPoolAutoScaleConfigTargetMetrics): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleSqlDatabaseInstancesInstancesSettingsReadPoolAutoScaleConfigTargetMetricsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataGoogleSqlDatabaseInstancesInstancesSettingsReadPoolAutoScaleConfigTargetMetrics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleSqlDatabaseInstancesInstancesSettingsReadPoolAutoScaleConfigTargetMetrics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // metric - computed: true, optional: false, required: false
  public get metric() {
    return this.getStringAttribute('metric');
  }

  // target_value - computed: true, optional: false, required: false
  public get targetValue() {
    return this.getNumberAttribute('target_value');
  }
}

export class DataGoogleSqlDatabaseInstancesInstancesSettingsReadPoolAutoScaleConfigTargetMetricsList extends cdktn.ComplexList {

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
  public get(index: number): DataGoogleSqlDatabaseInstancesInstancesSettingsReadPoolAutoScaleConfigTargetMetricsOutputReference {
    return new DataGoogleSqlDatabaseInstancesInstancesSettingsReadPoolAutoScaleConfigTargetMetricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleSqlDatabaseInstancesInstancesSettingsReadPoolAutoScaleConfig {
}

export function dataGoogleSqlDatabaseInstancesInstancesSettingsReadPoolAutoScaleConfigToTerraform(struct?: DataGoogleSqlDatabaseInstancesInstancesSettingsReadPoolAutoScaleConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleSqlDatabaseInstancesInstancesSettingsReadPoolAutoScaleConfigToHclTerraform(struct?: DataGoogleSqlDatabaseInstancesInstancesSettingsReadPoolAutoScaleConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleSqlDatabaseInstancesInstancesSettingsReadPoolAutoScaleConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataGoogleSqlDatabaseInstancesInstancesSettingsReadPoolAutoScaleConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleSqlDatabaseInstancesInstancesSettingsReadPoolAutoScaleConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disable_scale_in - computed: true, optional: false, required: false
  public get disableScaleIn() {
    return this.getBooleanAttribute('disable_scale_in');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // max_node_count - computed: true, optional: false, required: false
  public get maxNodeCount() {
    return this.getNumberAttribute('max_node_count');
  }

  // min_node_count - computed: true, optional: false, required: false
  public get minNodeCount() {
    return this.getNumberAttribute('min_node_count');
  }

  // scale_in_cooldown_seconds - computed: true, optional: false, required: false
  public get scaleInCooldownSeconds() {
    return this.getNumberAttribute('scale_in_cooldown_seconds');
  }

  // scale_out_cooldown_seconds - computed: true, optional: false, required: false
  public get scaleOutCooldownSeconds() {
    return this.getNumberAttribute('scale_out_cooldown_seconds');
  }

  // target_metrics - computed: true, optional: false, required: false
  private _targetMetrics = new DataGoogleSqlDatabaseInstancesInstancesSettingsReadPoolAutoScaleConfigTargetMetricsList(this, "target_metrics", true);
  public get targetMetrics() {
    return this._targetMetrics;
  }
}

export class DataGoogleSqlDatabaseInstancesInstancesSettingsReadPoolAutoScaleConfigList extends cdktn.ComplexList {

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
  public get(index: number): DataGoogleSqlDatabaseInstancesInstancesSettingsReadPoolAutoScaleConfigOutputReference {
    return new DataGoogleSqlDatabaseInstancesInstancesSettingsReadPoolAutoScaleConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfig {
}

export function dataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigToTerraform(struct?: DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigToHclTerraform(struct?: DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // retention_interval - computed: true, optional: false, required: false
  public get retentionInterval() {
    return this.getStringAttribute('retention_interval');
  }

  // upload_interval - computed: true, optional: false, required: false
  public get uploadInterval() {
    return this.getStringAttribute('upload_interval');
  }
}

export class DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigList extends cdktn.ComplexList {

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
  public get(index: number): DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigOutputReference {
    return new DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleSqlDatabaseInstancesInstancesSettings {
}

export function dataGoogleSqlDatabaseInstancesInstancesSettingsToTerraform(struct?: DataGoogleSqlDatabaseInstancesInstancesSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleSqlDatabaseInstancesInstancesSettingsToHclTerraform(struct?: DataGoogleSqlDatabaseInstancesInstancesSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataGoogleSqlDatabaseInstancesInstancesSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleSqlDatabaseInstancesInstancesSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // activation_policy - computed: true, optional: false, required: false
  public get activationPolicy() {
    return this.getStringAttribute('activation_policy');
  }

  // active_directory_config - computed: true, optional: false, required: false
  private _activeDirectoryConfig = new DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigList(this, "active_directory_config", false);
  public get activeDirectoryConfig() {
    return this._activeDirectoryConfig;
  }

  // advanced_machine_features - computed: true, optional: false, required: false
  private _advancedMachineFeatures = new DataGoogleSqlDatabaseInstancesInstancesSettingsAdvancedMachineFeaturesList(this, "advanced_machine_features", false);
  public get advancedMachineFeatures() {
    return this._advancedMachineFeatures;
  }

  // auto_upgrade_enabled - computed: true, optional: false, required: false
  public get autoUpgradeEnabled() {
    return this.getBooleanAttribute('auto_upgrade_enabled');
  }

  // availability_type - computed: true, optional: false, required: false
  public get availabilityType() {
    return this.getStringAttribute('availability_type');
  }

  // backup_configuration - computed: true, optional: false, required: false
  private _backupConfiguration = new DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationList(this, "backup_configuration", false);
  public get backupConfiguration() {
    return this._backupConfiguration;
  }

  // collation - computed: true, optional: false, required: false
  public get collation() {
    return this.getStringAttribute('collation');
  }

  // connection_pool_config - computed: true, optional: false, required: false
  private _connectionPoolConfig = new DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigList(this, "connection_pool_config", true);
  public get connectionPoolConfig() {
    return this._connectionPoolConfig;
  }

  // connector_enforcement - computed: true, optional: false, required: false
  public get connectorEnforcement() {
    return this.getStringAttribute('connector_enforcement');
  }

  // data_api_access - computed: true, optional: false, required: false
  public get dataApiAccess() {
    return this.getStringAttribute('data_api_access');
  }

  // data_cache_config - computed: true, optional: false, required: false
  private _dataCacheConfig = new DataGoogleSqlDatabaseInstancesInstancesSettingsDataCacheConfigList(this, "data_cache_config", false);
  public get dataCacheConfig() {
    return this._dataCacheConfig;
  }

  // data_disk_provisioned_iops - computed: true, optional: false, required: false
  public get dataDiskProvisionedIops() {
    return this.getNumberAttribute('data_disk_provisioned_iops');
  }

  // data_disk_provisioned_throughput - computed: true, optional: false, required: false
  public get dataDiskProvisionedThroughput() {
    return this.getNumberAttribute('data_disk_provisioned_throughput');
  }

  // database_flags - computed: true, optional: false, required: false
  private _databaseFlags = new DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsList(this, "database_flags", true);
  public get databaseFlags() {
    return this._databaseFlags;
  }

  // deletion_protection_enabled - computed: true, optional: false, required: false
  public get deletionProtectionEnabled() {
    return this.getBooleanAttribute('deletion_protection_enabled');
  }

  // deny_maintenance_period - computed: true, optional: false, required: false
  private _denyMaintenancePeriod = new DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodList(this, "deny_maintenance_period", false);
  public get denyMaintenancePeriod() {
    return this._denyMaintenancePeriod;
  }

  // disk_autoresize - computed: true, optional: false, required: false
  public get diskAutoresize() {
    return this.getBooleanAttribute('disk_autoresize');
  }

  // disk_autoresize_limit - computed: true, optional: false, required: false
  public get diskAutoresizeLimit() {
    return this.getNumberAttribute('disk_autoresize_limit');
  }

  // disk_size - computed: true, optional: false, required: false
  public get diskSize() {
    return this.getNumberAttribute('disk_size');
  }

  // disk_type - computed: true, optional: false, required: false
  public get diskType() {
    return this.getStringAttribute('disk_type');
  }

  // edition - computed: true, optional: false, required: false
  public get edition() {
    return this.getStringAttribute('edition');
  }

  // effective_availability_type - computed: true, optional: false, required: false
  public get effectiveAvailabilityType() {
    return this.getStringAttribute('effective_availability_type');
  }

  // enable_dataplex_integration - computed: true, optional: false, required: false
  public get enableDataplexIntegration() {
    return this.getBooleanAttribute('enable_dataplex_integration');
  }

  // enable_google_ml_integration - computed: true, optional: false, required: false
  public get enableGoogleMlIntegration() {
    return this.getBooleanAttribute('enable_google_ml_integration');
  }

  // entraid_config - computed: true, optional: false, required: false
  private _entraidConfig = new DataGoogleSqlDatabaseInstancesInstancesSettingsEntraidConfigList(this, "entraid_config", false);
  public get entraidConfig() {
    return this._entraidConfig;
  }

  // final_backup_config - computed: true, optional: false, required: false
  private _finalBackupConfig = new DataGoogleSqlDatabaseInstancesInstancesSettingsFinalBackupConfigList(this, "final_backup_config", false);
  public get finalBackupConfig() {
    return this._finalBackupConfig;
  }

  // insights_config - computed: true, optional: false, required: false
  private _insightsConfig = new DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigList(this, "insights_config", false);
  public get insightsConfig() {
    return this._insightsConfig;
  }

  // ip_configuration - computed: true, optional: false, required: false
  private _ipConfiguration = new DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationList(this, "ip_configuration", false);
  public get ipConfiguration() {
    return this._ipConfiguration;
  }

  // location_preference - computed: true, optional: false, required: false
  private _locationPreference = new DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceList(this, "location_preference", false);
  public get locationPreference() {
    return this._locationPreference;
  }

  // maintenance_window - computed: true, optional: false, required: false
  private _maintenanceWindow = new DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowList(this, "maintenance_window", false);
  public get maintenanceWindow() {
    return this._maintenanceWindow;
  }

  // password_validation_policy - computed: true, optional: false, required: false
  private _passwordValidationPolicy = new DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyList(this, "password_validation_policy", false);
  public get passwordValidationPolicy() {
    return this._passwordValidationPolicy;
  }

  // pricing_plan - computed: true, optional: false, required: false
  public get pricingPlan() {
    return this.getStringAttribute('pricing_plan');
  }

  // read_pool_auto_scale_config - computed: true, optional: false, required: false
  private _readPoolAutoScaleConfig = new DataGoogleSqlDatabaseInstancesInstancesSettingsReadPoolAutoScaleConfigList(this, "read_pool_auto_scale_config", false);
  public get readPoolAutoScaleConfig() {
    return this._readPoolAutoScaleConfig;
  }

  // retain_backups_on_delete - computed: true, optional: false, required: false
  public get retainBackupsOnDelete() {
    return this.getBooleanAttribute('retain_backups_on_delete');
  }

  // sql_server_audit_config - computed: true, optional: false, required: false
  private _sqlServerAuditConfig = new DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigList(this, "sql_server_audit_config", false);
  public get sqlServerAuditConfig() {
    return this._sqlServerAuditConfig;
  }

  // tier - computed: true, optional: false, required: false
  public get tier() {
    return this.getStringAttribute('tier');
  }

  // time_zone - computed: true, optional: false, required: false
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }

  // user_labels - computed: true, optional: false, required: false
  private _userLabels = new cdktn.StringMap(this, "user_labels");
  public get userLabels() {
    return this._userLabels;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }
}

export class DataGoogleSqlDatabaseInstancesInstancesSettingsList extends cdktn.ComplexList {

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
  public get(index: number): DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference {
    return new DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleSqlDatabaseInstancesInstances {
}

export function dataGoogleSqlDatabaseInstancesInstancesToTerraform(struct?: DataGoogleSqlDatabaseInstancesInstances): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleSqlDatabaseInstancesInstancesToHclTerraform(struct?: DataGoogleSqlDatabaseInstancesInstances): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleSqlDatabaseInstancesInstancesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataGoogleSqlDatabaseInstancesInstances | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleSqlDatabaseInstancesInstances | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // available_maintenance_versions - computed: true, optional: false, required: false
  public get availableMaintenanceVersions() {
    return this.getListAttribute('available_maintenance_versions');
  }

  // backupdr_backup - computed: true, optional: false, required: false
  public get backupdrBackup() {
    return this.getStringAttribute('backupdr_backup');
  }

  // clone - computed: true, optional: false, required: false
  private _clone = new DataGoogleSqlDatabaseInstancesInstancesCloneList(this, "clone", false);
  public get clone() {
    return this._clone;
  }

  // connection_name - computed: true, optional: false, required: false
  public get connectionName() {
    return this.getStringAttribute('connection_name');
  }

  // database_version - computed: true, optional: false, required: false
  public get databaseVersion() {
    return this.getStringAttribute('database_version');
  }

  // deletion_policy - computed: true, optional: false, required: false
  public get deletionPolicy() {
    return this.getStringAttribute('deletion_policy');
  }

  // deletion_protection - computed: true, optional: false, required: false
  public get deletionProtection() {
    return this.getBooleanAttribute('deletion_protection');
  }

  // dns_name - computed: true, optional: false, required: false
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }

  // dns_names - computed: true, optional: false, required: false
  private _dnsNames = new DataGoogleSqlDatabaseInstancesInstancesDnsNamesList(this, "dns_names", false);
  public get dnsNames() {
    return this._dnsNames;
  }

  // encryption_key_name - computed: true, optional: false, required: false
  public get encryptionKeyName() {
    return this.getStringAttribute('encryption_key_name');
  }

  // final_backup_description - computed: true, optional: false, required: false
  public get finalBackupDescription() {
    return this.getStringAttribute('final_backup_description');
  }

  // first_ip_address - computed: true, optional: false, required: false
  public get firstIpAddress() {
    return this.getStringAttribute('first_ip_address');
  }

  // instance_type - computed: true, optional: false, required: false
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }

  // ip_address - computed: true, optional: false, required: false
  private _ipAddress = new DataGoogleSqlDatabaseInstancesInstancesIpAddressList(this, "ip_address", false);
  public get ipAddress() {
    return this._ipAddress;
  }

  // maintenance_version - computed: true, optional: false, required: false
  public get maintenanceVersion() {
    return this.getStringAttribute('maintenance_version');
  }

  // master_instance_name - computed: true, optional: false, required: false
  public get masterInstanceName() {
    return this.getStringAttribute('master_instance_name');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // node_count - computed: true, optional: false, required: false
  public get nodeCount() {
    return this.getNumberAttribute('node_count');
  }

  // point_in_time_restore_context - computed: true, optional: false, required: false
  private _pointInTimeRestoreContext = new DataGoogleSqlDatabaseInstancesInstancesPointInTimeRestoreContextList(this, "point_in_time_restore_context", false);
  public get pointInTimeRestoreContext() {
    return this._pointInTimeRestoreContext;
  }

  // private_ip_address - computed: true, optional: false, required: false
  public get privateIpAddress() {
    return this.getStringAttribute('private_ip_address');
  }

  // project - computed: true, optional: false, required: false
  public get project() {
    return this.getStringAttribute('project');
  }

  // psc_service_attachment_link - computed: true, optional: false, required: false
  public get pscServiceAttachmentLink() {
    return this.getStringAttribute('psc_service_attachment_link');
  }

  // public_ip_address - computed: true, optional: false, required: false
  public get publicIpAddress() {
    return this.getStringAttribute('public_ip_address');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // replica_configuration - computed: true, optional: false, required: false
  private _replicaConfiguration = new DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationList(this, "replica_configuration", false);
  public get replicaConfiguration() {
    return this._replicaConfiguration;
  }

  // replica_names - computed: true, optional: false, required: false
  public get replicaNames() {
    return this.getListAttribute('replica_names');
  }

  // replication_cluster - computed: true, optional: false, required: false
  private _replicationCluster = new DataGoogleSqlDatabaseInstancesInstancesReplicationClusterList(this, "replication_cluster", false);
  public get replicationCluster() {
    return this._replicationCluster;
  }

  // restore_backup_context - computed: true, optional: false, required: false
  private _restoreBackupContext = new DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextList(this, "restore_backup_context", false);
  public get restoreBackupContext() {
    return this._restoreBackupContext;
  }

  // root_password - computed: true, optional: false, required: false
  public get rootPassword() {
    return this.getStringAttribute('root_password');
  }

  // root_password_wo - computed: true, optional: false, required: false
  public get rootPasswordWo() {
    return this.getStringAttribute('root_password_wo');
  }

  // root_password_wo_version - computed: true, optional: false, required: false
  public get rootPasswordWoVersion() {
    return this.getStringAttribute('root_password_wo_version');
  }

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // server_ca_cert - computed: true, optional: false, required: false
  private _serverCaCert = new DataGoogleSqlDatabaseInstancesInstancesServerCaCertList(this, "server_ca_cert", false);
  public get serverCaCert() {
    return this._serverCaCert;
  }

  // service_account_email_address - computed: true, optional: false, required: false
  public get serviceAccountEmailAddress() {
    return this.getStringAttribute('service_account_email_address');
  }

  // settings - computed: true, optional: false, required: false
  private _settings = new DataGoogleSqlDatabaseInstancesInstancesSettingsList(this, "settings", false);
  public get settings() {
    return this._settings;
  }
}

export class DataGoogleSqlDatabaseInstancesInstancesList extends cdktn.ComplexList {

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
  public get(index: number): DataGoogleSqlDatabaseInstancesInstancesOutputReference {
    return new DataGoogleSqlDatabaseInstancesInstancesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/sql_database_instances google_sql_database_instances}
*/
export class DataGoogleSqlDatabaseInstances extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_sql_database_instances";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataGoogleSqlDatabaseInstances resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGoogleSqlDatabaseInstances to import
  * @param importFromId The id of the existing DataGoogleSqlDatabaseInstances that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/sql_database_instances#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGoogleSqlDatabaseInstances to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_sql_database_instances", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/sql_database_instances google_sql_database_instances} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGoogleSqlDatabaseInstancesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataGoogleSqlDatabaseInstancesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'google_sql_database_instances',
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
    this._databaseVersion = config.databaseVersion;
    this._id = config.id;
    this._project = config.project;
    this._region = config.region;
    this._state = config.state;
    this._tier = config.tier;
    this._zone = config.zone;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // database_version - computed: false, optional: true, required: false
  private _databaseVersion?: string; 
  public get databaseVersion() {
    return this.getStringAttribute('database_version');
  }
  public set databaseVersion(value: string) {
    this._databaseVersion = value;
  }
  public resetDatabaseVersion() {
    this._databaseVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseVersionInput() {
    return this._databaseVersion;
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

  // instances - computed: true, optional: false, required: false
  private _instances = new DataGoogleSqlDatabaseInstancesInstancesList(this, "instances", false);
  public get instances() {
    return this._instances;
  }

  // project - computed: false, optional: true, required: false
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

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // tier - computed: false, optional: true, required: false
  private _tier?: string; 
  public get tier() {
    return this.getStringAttribute('tier');
  }
  public set tier(value: string) {
    this._tier = value;
  }
  public resetTier() {
    this._tier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tierInput() {
    return this._tier;
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
      database_version: cdktn.stringToTerraform(this._databaseVersion),
      id: cdktn.stringToTerraform(this._id),
      project: cdktn.stringToTerraform(this._project),
      region: cdktn.stringToTerraform(this._region),
      state: cdktn.stringToTerraform(this._state),
      tier: cdktn.stringToTerraform(this._tier),
      zone: cdktn.stringToTerraform(this._zone),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      database_version: {
        value: cdktn.stringToHclTerraform(this._databaseVersion),
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
      project: {
        value: cdktn.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktn.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state: {
        value: cdktn.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tier: {
        value: cdktn.stringToHclTerraform(this._tier),
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
