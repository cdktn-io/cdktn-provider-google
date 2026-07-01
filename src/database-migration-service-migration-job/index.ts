/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/database_migration_service_migration_job
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DatabaseMigrationServiceMigrationJobConfig extends cdktn.TerraformMetaArguments {
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/database_migration_service_migration_job#deletion_policy DatabaseMigrationServiceMigrationJob#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * The desired state of the migration job. If set to 'RUNNING', the migration job will be started. Possible values: ["NOT_STARTED", "RUNNING"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/database_migration_service_migration_job#desired_state DatabaseMigrationServiceMigrationJob#desired_state}
  */
  readonly desiredState?: string;
  /**
  * The name of the destination connection profile resource in the form of projects/{project}/locations/{location}/connectionProfiles/{destinationConnectionProfile}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/database_migration_service_migration_job#destination DatabaseMigrationServiceMigrationJob#destination}
  */
  readonly destination: string;
  /**
  * The migration job display name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/database_migration_service_migration_job#display_name DatabaseMigrationServiceMigrationJob#display_name}
  */
  readonly displayName?: string;
  /**
  * The path to the dump file in Google Cloud Storage,
  * in the format: (gs://[BUCKET_NAME]/[OBJECT_NAME]).
  * This field and the "dump_flags" field are mutually exclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/database_migration_service_migration_job#dump_path DatabaseMigrationServiceMigrationJob#dump_path}
  */
  readonly dumpPath?: string;
  /**
  * The type of the data dump. Supported for MySQL to CloudSQL for MySQL
  * migrations only. Possible values: ["LOGICAL", "PHYSICAL"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/database_migration_service_migration_job#dump_type DatabaseMigrationServiceMigrationJob#dump_type}
  */
  readonly dumpType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/database_migration_service_migration_job#id DatabaseMigrationServiceMigrationJob#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The resource labels for migration job to use to annotate any related underlying resources such as Compute Engine VMs.
  * 
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/database_migration_service_migration_job#labels DatabaseMigrationServiceMigrationJob#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The location where the migration job should reside.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/database_migration_service_migration_job#location DatabaseMigrationServiceMigrationJob#location}
  */
  readonly location?: string;
  /**
  * The ID of the migration job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/database_migration_service_migration_job#migration_job_id DatabaseMigrationServiceMigrationJob#migration_job_id}
  */
  readonly migrationJobId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/database_migration_service_migration_job#project DatabaseMigrationServiceMigrationJob#project}
  */
  readonly project?: string;
  /**
  * The name of the source connection profile resource in the form of projects/{project}/locations/{location}/connectionProfiles/{sourceConnectionProfile}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/database_migration_service_migration_job#source DatabaseMigrationServiceMigrationJob#source}
  */
  readonly source: string;
  /**
  * If set to true, will stop the Terraform apply if there are validation warnings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/database_migration_service_migration_job#stop_on_warnings DatabaseMigrationServiceMigrationJob#stop_on_warnings}
  */
  readonly stopOnWarnings?: boolean | cdktn.IResolvable;
  /**
  * The type of the migration job. Possible values: ["ONE_TIME", "CONTINUOUS"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/database_migration_service_migration_job#type DatabaseMigrationServiceMigrationJob#type}
  */
  readonly type: string;
  /**
  * dump_flags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/database_migration_service_migration_job#dump_flags DatabaseMigrationServiceMigrationJob#dump_flags}
  */
  readonly dumpFlags?: DatabaseMigrationServiceMigrationJobDumpFlags;
  /**
  * objects_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/database_migration_service_migration_job#objects_config DatabaseMigrationServiceMigrationJob#objects_config}
  */
  readonly objectsConfig?: DatabaseMigrationServiceMigrationJobObjectsConfig;
  /**
  * performance_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/database_migration_service_migration_job#performance_config DatabaseMigrationServiceMigrationJob#performance_config}
  */
  readonly performanceConfig?: DatabaseMigrationServiceMigrationJobPerformanceConfig;
  /**
  * postgres_homogeneous_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/database_migration_service_migration_job#postgres_homogeneous_config DatabaseMigrationServiceMigrationJob#postgres_homogeneous_config}
  */
  readonly postgresHomogeneousConfig?: DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfig;
  /**
  * reverse_ssh_connectivity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/database_migration_service_migration_job#reverse_ssh_connectivity DatabaseMigrationServiceMigrationJob#reverse_ssh_connectivity}
  */
  readonly reverseSshConnectivity?: DatabaseMigrationServiceMigrationJobReverseSshConnectivity;
  /**
  * static_ip_connectivity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/database_migration_service_migration_job#static_ip_connectivity DatabaseMigrationServiceMigrationJob#static_ip_connectivity}
  */
  readonly staticIpConnectivity?: DatabaseMigrationServiceMigrationJobStaticIpConnectivity;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/database_migration_service_migration_job#timeouts DatabaseMigrationServiceMigrationJob#timeouts}
  */
  readonly timeouts?: DatabaseMigrationServiceMigrationJobTimeouts;
  /**
  * vpc_peering_connectivity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/database_migration_service_migration_job#vpc_peering_connectivity DatabaseMigrationServiceMigrationJob#vpc_peering_connectivity}
  */
  readonly vpcPeeringConnectivity?: DatabaseMigrationServiceMigrationJobVpcPeeringConnectivity;
}
export interface DatabaseMigrationServiceMigrationJobError {
}

export function databaseMigrationServiceMigrationJobErrorToTerraform(struct?: DatabaseMigrationServiceMigrationJobError): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function databaseMigrationServiceMigrationJobErrorToHclTerraform(struct?: DatabaseMigrationServiceMigrationJobError): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DatabaseMigrationServiceMigrationJobErrorOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DatabaseMigrationServiceMigrationJobError | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseMigrationServiceMigrationJobError | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // code - computed: true, optional: false, required: false
  public get code() {
    return this.getNumberAttribute('code');
  }

  // details - computed: true, optional: false, required: false
  private _details = new cdktn.StringMapList(this, "details", false);
  public get details() {
    return this._details;
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }
}

export class DatabaseMigrationServiceMigrationJobErrorList extends cdktn.ComplexList {

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
  public get(index: number): DatabaseMigrationServiceMigrationJobErrorOutputReference {
    return new DatabaseMigrationServiceMigrationJobErrorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags {
  /**
  * The name of the flag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/database_migration_service_migration_job#name DatabaseMigrationServiceMigrationJob#name}
  */
  readonly name?: string;
  /**
  * The vale of the flag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/database_migration_service_migration_job#value DatabaseMigrationServiceMigrationJob#value}
  */
  readonly value?: string;
}

export function databaseMigrationServiceMigrationJobDumpFlagsDumpFlagsToTerraform(struct?: DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function databaseMigrationServiceMigrationJobDumpFlagsDumpFlagsToHclTerraform(struct?: DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList extends cdktn.ComplexList {
  public internalValue? : DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags[] | cdktn.IResolvable

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
  public get(index: number): DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference {
    return new DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseMigrationServiceMigrationJobDumpFlags {
  /**
  * dump_flags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/database_migration_service_migration_job#dump_flags DatabaseMigrationServiceMigrationJob#dump_flags}
  */
  readonly dumpFlags?: DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags[] | cdktn.IResolvable;
}

export function databaseMigrationServiceMigrationJobDumpFlagsToTerraform(struct?: DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference | DatabaseMigrationServiceMigrationJobDumpFlags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dump_flags: cdktn.listMapper(databaseMigrationServiceMigrationJobDumpFlagsDumpFlagsToTerraform, true)(struct!.dumpFlags),
  }
}


export function databaseMigrationServiceMigrationJobDumpFlagsToHclTerraform(struct?: DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference | DatabaseMigrationServiceMigrationJobDumpFlags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dump_flags: {
      value: cdktn.listMapperHcl(databaseMigrationServiceMigrationJobDumpFlagsDumpFlagsToHclTerraform, true)(struct!.dumpFlags),
      isBlock: true,
      type: "list",
      storageClassType: "DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseMigrationServiceMigrationJobDumpFlags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dumpFlags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dumpFlags = this._dumpFlags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseMigrationServiceMigrationJobDumpFlags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dumpFlags.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dumpFlags.internalValue = value.dumpFlags;
    }
  }

  // dump_flags - computed: false, optional: true, required: false
  private _dumpFlags = new DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList(this, "dump_flags", false);
  public get dumpFlags() {
    return this._dumpFlags;
  }
  public putDumpFlags(value: DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags[] | cdktn.IResolvable) {
    this._dumpFlags.internalValue = value;
  }
  public resetDumpFlags() {
    this._dumpFlags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dumpFlagsInput() {
    return this._dumpFlags.internalValue;
  }
}
export interface DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifier {
  /**
  * The database name. Required only if the object uses
  * a database name as part of its unique identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/database_migration_service_migration_job#database DatabaseMigrationServiceMigrationJob#database}
  */
  readonly database?: string;
  /**
  * The schema name. Required only if the object uses
  * a schema name as part of its unique identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/database_migration_service_migration_job#schema DatabaseMigrationServiceMigrationJob#schema}
  */
  readonly schema?: string;
  /**
  * The table name. Required only if the object is a level
  * below database or schema.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/database_migration_service_migration_job#table DatabaseMigrationServiceMigrationJob#table}
  */
  readonly table?: string;
  /**
  * The category of the migration job object: 'DATABASE',
  * 'SCHEMA', or 'TABLE'. Possible values: ["DATABASE", "SCHEMA", "TABLE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/database_migration_service_migration_job#type DatabaseMigrationServiceMigrationJob#type}
  */
  readonly type: string;
}

export function databaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierToTerraform(struct?: DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference | DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifier): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    database: cdktn.stringToTerraform(struct!.database),
    schema: cdktn.stringToTerraform(struct!.schema),
    table: cdktn.stringToTerraform(struct!.table),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function databaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierToHclTerraform(struct?: DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference | DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifier): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    database: {
      value: cdktn.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schema: {
      value: cdktn.stringToHclTerraform(struct!.schema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table: {
      value: cdktn.stringToHclTerraform(struct!.table),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifier | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._schema !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema;
    }
    if (this._table !== undefined) {
      hasAnyValues = true;
      internalValueResult.table = this._table;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifier | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._database = undefined;
      this._schema = undefined;
      this._table = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._database = value.database;
      this._schema = value.schema;
      this._table = value.table;
      this._type = value.type;
    }
  }

  // database - computed: false, optional: true, required: false
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  public resetDatabase() {
    this._database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // schema - computed: false, optional: true, required: false
  private _schema?: string; 
  public get schema() {
    return this.getStringAttribute('schema');
  }
  public set schema(value: string) {
    this._schema = value;
  }
  public resetSchema() {
    this._schema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema;
  }

  // table - computed: false, optional: true, required: false
  private _table?: string; 
  public get table() {
    return this.getStringAttribute('table');
  }
  public set table(value: string) {
    this._table = value;
  }
  public resetTable() {
    this._table = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableInput() {
    return this._table;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigs {
  /**
  * object_identifier block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/database_migration_service_migration_job#object_identifier DatabaseMigrationServiceMigrationJob#object_identifier}
  */
  readonly objectIdentifier?: DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifier;
}

export function databaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsToTerraform(struct?: DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    object_identifier: databaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierToTerraform(struct!.objectIdentifier),
  }
}


export function databaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsToHclTerraform(struct?: DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    object_identifier: {
      value: databaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierToHclTerraform(struct!.objectIdentifier),
      isBlock: true,
      type: "list",
      storageClassType: "DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigs | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._objectIdentifier?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectIdentifier = this._objectIdentifier?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigs | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._objectIdentifier.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._objectIdentifier.internalValue = value.objectIdentifier;
    }
  }

  // object_identifier - computed: false, optional: true, required: false
  private _objectIdentifier = new DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference(this, "object_identifier");
  public get objectIdentifier() {
    return this._objectIdentifier;
  }
  public putObjectIdentifier(value: DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifier) {
    this._objectIdentifier.internalValue = value;
  }
  public resetObjectIdentifier() {
    this._objectIdentifier.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectIdentifierInput() {
    return this._objectIdentifier.internalValue;
  }
}

export class DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsList extends cdktn.ComplexList {
  public internalValue? : DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigs[] | cdktn.IResolvable

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
  public get(index: number): DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference {
    return new DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfig {
  /**
  * The objects selection type of the migration job. When set to
  * 'SPECIFIED_OBJECTS', only the objects listed in 'objectConfigs' are
  * migrated. When set to 'ALL_OBJECTS', all objects available on the
  * source are migrated. Possible values: ["ALL_OBJECTS", "SPECIFIED_OBJECTS"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/database_migration_service_migration_job#objects_selection_type DatabaseMigrationServiceMigrationJob#objects_selection_type}
  */
  readonly objectsSelectionType?: string;
  /**
  * object_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/database_migration_service_migration_job#object_configs DatabaseMigrationServiceMigrationJob#object_configs}
  */
  readonly objectConfigs?: DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigs[] | cdktn.IResolvable;
}

export function databaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigToTerraform(struct?: DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference | DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    objects_selection_type: cdktn.stringToTerraform(struct!.objectsSelectionType),
    object_configs: cdktn.listMapper(databaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsToTerraform, true)(struct!.objectConfigs),
  }
}


export function databaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigToHclTerraform(struct?: DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference | DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    objects_selection_type: {
      value: cdktn.stringToHclTerraform(struct!.objectsSelectionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_configs: {
      value: cdktn.listMapperHcl(databaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsToHclTerraform, true)(struct!.objectConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._objectsSelectionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectsSelectionType = this._objectsSelectionType;
    }
    if (this._objectConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectConfigs = this._objectConfigs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._objectsSelectionType = undefined;
      this._objectConfigs.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._objectsSelectionType = value.objectsSelectionType;
      this._objectConfigs.internalValue = value.objectConfigs;
    }
  }

  // objects_selection_type - computed: true, optional: true, required: false
  private _objectsSelectionType?: string; 
  public get objectsSelectionType() {
    return this.getStringAttribute('objects_selection_type');
  }
  public set objectsSelectionType(value: string) {
    this._objectsSelectionType = value;
  }
  public resetObjectsSelectionType() {
    this._objectsSelectionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectsSelectionTypeInput() {
    return this._objectsSelectionType;
  }

  // object_configs - computed: false, optional: true, required: false
  private _objectConfigs = new DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsList(this, "object_configs", false);
  public get objectConfigs() {
    return this._objectConfigs;
  }
  public putObjectConfigs(value: DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigs[] | cdktn.IResolvable) {
    this._objectConfigs.internalValue = value;
  }
  public resetObjectConfigs() {
    this._objectConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectConfigsInput() {
    return this._objectConfigs.internalValue;
  }
}
export interface DatabaseMigrationServiceMigrationJobObjectsConfig {
  /**
  * source_objects_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/database_migration_service_migration_job#source_objects_config DatabaseMigrationServiceMigrationJob#source_objects_config}
  */
  readonly sourceObjectsConfig?: DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfig;
}

export function databaseMigrationServiceMigrationJobObjectsConfigToTerraform(struct?: DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference | DatabaseMigrationServiceMigrationJobObjectsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    source_objects_config: databaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigToTerraform(struct!.sourceObjectsConfig),
  }
}


export function databaseMigrationServiceMigrationJobObjectsConfigToHclTerraform(struct?: DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference | DatabaseMigrationServiceMigrationJobObjectsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    source_objects_config: {
      value: databaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigToHclTerraform(struct!.sourceObjectsConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseMigrationServiceMigrationJobObjectsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourceObjectsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceObjectsConfig = this._sourceObjectsConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseMigrationServiceMigrationJobObjectsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sourceObjectsConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sourceObjectsConfig.internalValue = value.sourceObjectsConfig;
    }
  }

  // source_objects_config - computed: false, optional: true, required: false
  private _sourceObjectsConfig = new DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference(this, "source_objects_config");
  public get sourceObjectsConfig() {
    return this._sourceObjectsConfig;
  }
  public putSourceObjectsConfig(value: DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfig) {
    this._sourceObjectsConfig.internalValue = value;
  }
  public resetSourceObjectsConfig() {
    this._sourceObjectsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceObjectsConfigInput() {
    return this._sourceObjectsConfig.internalValue;
  }
}
export interface DatabaseMigrationServiceMigrationJobPerformanceConfig {
  /**
  * Initial dump parallelism level. Possible values: ["MIN", "OPTIMAL", "MAX"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/database_migration_service_migration_job#dump_parallel_level DatabaseMigrationServiceMigrationJob#dump_parallel_level}
  */
  readonly dumpParallelLevel?: string;
}

export function databaseMigrationServiceMigrationJobPerformanceConfigToTerraform(struct?: DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference | DatabaseMigrationServiceMigrationJobPerformanceConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dump_parallel_level: cdktn.stringToTerraform(struct!.dumpParallelLevel),
  }
}


export function databaseMigrationServiceMigrationJobPerformanceConfigToHclTerraform(struct?: DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference | DatabaseMigrationServiceMigrationJobPerformanceConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dump_parallel_level: {
      value: cdktn.stringToHclTerraform(struct!.dumpParallelLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseMigrationServiceMigrationJobPerformanceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dumpParallelLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.dumpParallelLevel = this._dumpParallelLevel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseMigrationServiceMigrationJobPerformanceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dumpParallelLevel = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dumpParallelLevel = value.dumpParallelLevel;
    }
  }

  // dump_parallel_level - computed: false, optional: true, required: false
  private _dumpParallelLevel?: string; 
  public get dumpParallelLevel() {
    return this.getStringAttribute('dump_parallel_level');
  }
  public set dumpParallelLevel(value: string) {
    this._dumpParallelLevel = value;
  }
  public resetDumpParallelLevel() {
    this._dumpParallelLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dumpParallelLevelInput() {
    return this._dumpParallelLevel;
  }
}
export interface DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfig {
  /**
  * Whether the migration uses native logical replication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/database_migration_service_migration_job#is_native_logical DatabaseMigrationServiceMigrationJob#is_native_logical}
  */
  readonly isNativeLogical: boolean | cdktn.IResolvable;
  /**
  * Maximum number of additional subscriptions to use for the migration job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/database_migration_service_migration_job#max_additional_subscriptions DatabaseMigrationServiceMigrationJob#max_additional_subscriptions}
  */
  readonly maxAdditionalSubscriptions?: number;
}

export function databaseMigrationServiceMigrationJobPostgresHomogeneousConfigToTerraform(struct?: DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference | DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    is_native_logical: cdktn.booleanToTerraform(struct!.isNativeLogical),
    max_additional_subscriptions: cdktn.numberToTerraform(struct!.maxAdditionalSubscriptions),
  }
}


export function databaseMigrationServiceMigrationJobPostgresHomogeneousConfigToHclTerraform(struct?: DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference | DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    is_native_logical: {
      value: cdktn.booleanToHclTerraform(struct!.isNativeLogical),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_additional_subscriptions: {
      value: cdktn.numberToHclTerraform(struct!.maxAdditionalSubscriptions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isNativeLogical !== undefined) {
      hasAnyValues = true;
      internalValueResult.isNativeLogical = this._isNativeLogical;
    }
    if (this._maxAdditionalSubscriptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAdditionalSubscriptions = this._maxAdditionalSubscriptions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isNativeLogical = undefined;
      this._maxAdditionalSubscriptions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isNativeLogical = value.isNativeLogical;
      this._maxAdditionalSubscriptions = value.maxAdditionalSubscriptions;
    }
  }

  // is_native_logical - computed: false, optional: false, required: true
  private _isNativeLogical?: boolean | cdktn.IResolvable; 
  public get isNativeLogical() {
    return this.getBooleanAttribute('is_native_logical');
  }
  public set isNativeLogical(value: boolean | cdktn.IResolvable) {
    this._isNativeLogical = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isNativeLogicalInput() {
    return this._isNativeLogical;
  }

  // max_additional_subscriptions - computed: false, optional: true, required: false
  private _maxAdditionalSubscriptions?: number; 
  public get maxAdditionalSubscriptions() {
    return this.getNumberAttribute('max_additional_subscriptions');
  }
  public set maxAdditionalSubscriptions(value: number) {
    this._maxAdditionalSubscriptions = value;
  }
  public resetMaxAdditionalSubscriptions() {
    this._maxAdditionalSubscriptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAdditionalSubscriptionsInput() {
    return this._maxAdditionalSubscriptions;
  }
}
export interface DatabaseMigrationServiceMigrationJobReverseSshConnectivity {
  /**
  * The name of the virtual machine (Compute Engine) used as the bastion server
  * for the SSH tunnel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/database_migration_service_migration_job#vm DatabaseMigrationServiceMigrationJob#vm}
  */
  readonly vm?: string;
  /**
  * The IP of the virtual machine (Compute Engine) used as the bastion server
  * for the SSH tunnel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/database_migration_service_migration_job#vm_ip DatabaseMigrationServiceMigrationJob#vm_ip}
  */
  readonly vmIp?: string;
  /**
  * The forwarding port of the virtual machine (Compute Engine) used as the
  * bastion server for the SSH tunnel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/database_migration_service_migration_job#vm_port DatabaseMigrationServiceMigrationJob#vm_port}
  */
  readonly vmPort?: number;
  /**
  * The name of the VPC to peer with the Cloud SQL private network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/database_migration_service_migration_job#vpc DatabaseMigrationServiceMigrationJob#vpc}
  */
  readonly vpc?: string;
}

export function databaseMigrationServiceMigrationJobReverseSshConnectivityToTerraform(struct?: DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference | DatabaseMigrationServiceMigrationJobReverseSshConnectivity): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    vm: cdktn.stringToTerraform(struct!.vm),
    vm_ip: cdktn.stringToTerraform(struct!.vmIp),
    vm_port: cdktn.numberToTerraform(struct!.vmPort),
    vpc: cdktn.stringToTerraform(struct!.vpc),
  }
}


export function databaseMigrationServiceMigrationJobReverseSshConnectivityToHclTerraform(struct?: DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference | DatabaseMigrationServiceMigrationJobReverseSshConnectivity): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    vm: {
      value: cdktn.stringToHclTerraform(struct!.vm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vm_ip: {
      value: cdktn.stringToHclTerraform(struct!.vmIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vm_port: {
      value: cdktn.numberToHclTerraform(struct!.vmPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vpc: {
      value: cdktn.stringToHclTerraform(struct!.vpc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseMigrationServiceMigrationJobReverseSshConnectivity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vm !== undefined) {
      hasAnyValues = true;
      internalValueResult.vm = this._vm;
    }
    if (this._vmIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmIp = this._vmIp;
    }
    if (this._vmPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmPort = this._vmPort;
    }
    if (this._vpc !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpc = this._vpc;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseMigrationServiceMigrationJobReverseSshConnectivity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._vm = undefined;
      this._vmIp = undefined;
      this._vmPort = undefined;
      this._vpc = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._vm = value.vm;
      this._vmIp = value.vmIp;
      this._vmPort = value.vmPort;
      this._vpc = value.vpc;
    }
  }

  // vm - computed: false, optional: true, required: false
  private _vm?: string; 
  public get vm() {
    return this.getStringAttribute('vm');
  }
  public set vm(value: string) {
    this._vm = value;
  }
  public resetVm() {
    this._vm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmInput() {
    return this._vm;
  }

  // vm_ip - computed: false, optional: true, required: false
  private _vmIp?: string; 
  public get vmIp() {
    return this.getStringAttribute('vm_ip');
  }
  public set vmIp(value: string) {
    this._vmIp = value;
  }
  public resetVmIp() {
    this._vmIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmIpInput() {
    return this._vmIp;
  }

  // vm_port - computed: false, optional: true, required: false
  private _vmPort?: number; 
  public get vmPort() {
    return this.getNumberAttribute('vm_port');
  }
  public set vmPort(value: number) {
    this._vmPort = value;
  }
  public resetVmPort() {
    this._vmPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmPortInput() {
    return this._vmPort;
  }

  // vpc - computed: false, optional: true, required: false
  private _vpc?: string; 
  public get vpc() {
    return this.getStringAttribute('vpc');
  }
  public set vpc(value: string) {
    this._vpc = value;
  }
  public resetVpc() {
    this._vpc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcInput() {
    return this._vpc;
  }
}
export interface DatabaseMigrationServiceMigrationJobStaticIpConnectivity {
}

export function databaseMigrationServiceMigrationJobStaticIpConnectivityToTerraform(struct?: DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference | DatabaseMigrationServiceMigrationJobStaticIpConnectivity): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function databaseMigrationServiceMigrationJobStaticIpConnectivityToHclTerraform(struct?: DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference | DatabaseMigrationServiceMigrationJobStaticIpConnectivity): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseMigrationServiceMigrationJobStaticIpConnectivity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseMigrationServiceMigrationJobStaticIpConnectivity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DatabaseMigrationServiceMigrationJobTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/database_migration_service_migration_job#create DatabaseMigrationServiceMigrationJob#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/database_migration_service_migration_job#delete DatabaseMigrationServiceMigrationJob#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/database_migration_service_migration_job#update DatabaseMigrationServiceMigrationJob#update}
  */
  readonly update?: string;
}

export function databaseMigrationServiceMigrationJobTimeoutsToTerraform(struct?: DatabaseMigrationServiceMigrationJobTimeouts | cdktn.IResolvable): any {
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


export function databaseMigrationServiceMigrationJobTimeoutsToHclTerraform(struct?: DatabaseMigrationServiceMigrationJobTimeouts | cdktn.IResolvable): any {
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

export class DatabaseMigrationServiceMigrationJobTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatabaseMigrationServiceMigrationJobTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DatabaseMigrationServiceMigrationJobTimeouts | cdktn.IResolvable | undefined) {
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
export interface DatabaseMigrationServiceMigrationJobVpcPeeringConnectivity {
  /**
  * The name of the VPC network to peer with the Cloud SQL private network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/database_migration_service_migration_job#vpc DatabaseMigrationServiceMigrationJob#vpc}
  */
  readonly vpc?: string;
}

export function databaseMigrationServiceMigrationJobVpcPeeringConnectivityToTerraform(struct?: DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference | DatabaseMigrationServiceMigrationJobVpcPeeringConnectivity): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    vpc: cdktn.stringToTerraform(struct!.vpc),
  }
}


export function databaseMigrationServiceMigrationJobVpcPeeringConnectivityToHclTerraform(struct?: DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference | DatabaseMigrationServiceMigrationJobVpcPeeringConnectivity): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    vpc: {
      value: cdktn.stringToHclTerraform(struct!.vpc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseMigrationServiceMigrationJobVpcPeeringConnectivity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vpc !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpc = this._vpc;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseMigrationServiceMigrationJobVpcPeeringConnectivity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._vpc = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._vpc = value.vpc;
    }
  }

  // vpc - computed: false, optional: true, required: false
  private _vpc?: string; 
  public get vpc() {
    return this.getStringAttribute('vpc');
  }
  public set vpc(value: string) {
    this._vpc = value;
  }
  public resetVpc() {
    this._vpc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcInput() {
    return this._vpc;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/database_migration_service_migration_job google_database_migration_service_migration_job}
*/
export class DatabaseMigrationServiceMigrationJob extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_database_migration_service_migration_job";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DatabaseMigrationServiceMigrationJob resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatabaseMigrationServiceMigrationJob to import
  * @param importFromId The id of the existing DatabaseMigrationServiceMigrationJob that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/database_migration_service_migration_job#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatabaseMigrationServiceMigrationJob to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_database_migration_service_migration_job", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/database_migration_service_migration_job google_database_migration_service_migration_job} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatabaseMigrationServiceMigrationJobConfig
  */
  public constructor(scope: Construct, id: string, config: DatabaseMigrationServiceMigrationJobConfig) {
    super(scope, id, {
      terraformResourceType: 'google_database_migration_service_migration_job',
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
    this._desiredState = config.desiredState;
    this._destination = config.destination;
    this._displayName = config.displayName;
    this._dumpPath = config.dumpPath;
    this._dumpType = config.dumpType;
    this._id = config.id;
    this._labels = config.labels;
    this._location = config.location;
    this._migrationJobId = config.migrationJobId;
    this._project = config.project;
    this._source = config.source;
    this._stopOnWarnings = config.stopOnWarnings;
    this._type = config.type;
    this._dumpFlags.internalValue = config.dumpFlags;
    this._objectsConfig.internalValue = config.objectsConfig;
    this._performanceConfig.internalValue = config.performanceConfig;
    this._postgresHomogeneousConfig.internalValue = config.postgresHomogeneousConfig;
    this._reverseSshConnectivity.internalValue = config.reverseSshConnectivity;
    this._staticIpConnectivity.internalValue = config.staticIpConnectivity;
    this._timeouts.internalValue = config.timeouts;
    this._vpcPeeringConnectivity.internalValue = config.vpcPeeringConnectivity;
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

  // desired_state - computed: true, optional: true, required: false
  private _desiredState?: string; 
  public get desiredState() {
    return this.getStringAttribute('desired_state');
  }
  public set desiredState(value: string) {
    this._desiredState = value;
  }
  public resetDesiredState() {
    this._desiredState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredStateInput() {
    return this._desiredState;
  }

  // destination - computed: false, optional: false, required: true
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // dump_path - computed: false, optional: true, required: false
  private _dumpPath?: string; 
  public get dumpPath() {
    return this.getStringAttribute('dump_path');
  }
  public set dumpPath(value: string) {
    this._dumpPath = value;
  }
  public resetDumpPath() {
    this._dumpPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dumpPathInput() {
    return this._dumpPath;
  }

  // dump_type - computed: false, optional: true, required: false
  private _dumpType?: string; 
  public get dumpType() {
    return this.getStringAttribute('dump_type');
  }
  public set dumpType(value: string) {
    this._dumpType = value;
  }
  public resetDumpType() {
    this._dumpType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dumpTypeInput() {
    return this._dumpType;
  }

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktn.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
  }

  // error - computed: true, optional: false, required: false
  private _error = new DatabaseMigrationServiceMigrationJobErrorList(this, "error", false);
  public get error() {
    return this._error;
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

  // migration_job_id - computed: false, optional: false, required: true
  private _migrationJobId?: string; 
  public get migrationJobId() {
    return this.getStringAttribute('migration_job_id');
  }
  public set migrationJobId(value: string) {
    this._migrationJobId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get migrationJobIdInput() {
    return this._migrationJobId;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // phase - computed: true, optional: false, required: false
  public get phase() {
    return this.getStringAttribute('phase');
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

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // stop_on_warnings - computed: false, optional: true, required: false
  private _stopOnWarnings?: boolean | cdktn.IResolvable; 
  public get stopOnWarnings() {
    return this.getBooleanAttribute('stop_on_warnings');
  }
  public set stopOnWarnings(value: boolean | cdktn.IResolvable) {
    this._stopOnWarnings = value;
  }
  public resetStopOnWarnings() {
    this._stopOnWarnings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stopOnWarningsInput() {
    return this._stopOnWarnings;
  }

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktn.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // dump_flags - computed: false, optional: true, required: false
  private _dumpFlags = new DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference(this, "dump_flags");
  public get dumpFlags() {
    return this._dumpFlags;
  }
  public putDumpFlags(value: DatabaseMigrationServiceMigrationJobDumpFlags) {
    this._dumpFlags.internalValue = value;
  }
  public resetDumpFlags() {
    this._dumpFlags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dumpFlagsInput() {
    return this._dumpFlags.internalValue;
  }

  // objects_config - computed: false, optional: true, required: false
  private _objectsConfig = new DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference(this, "objects_config");
  public get objectsConfig() {
    return this._objectsConfig;
  }
  public putObjectsConfig(value: DatabaseMigrationServiceMigrationJobObjectsConfig) {
    this._objectsConfig.internalValue = value;
  }
  public resetObjectsConfig() {
    this._objectsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectsConfigInput() {
    return this._objectsConfig.internalValue;
  }

  // performance_config - computed: false, optional: true, required: false
  private _performanceConfig = new DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference(this, "performance_config");
  public get performanceConfig() {
    return this._performanceConfig;
  }
  public putPerformanceConfig(value: DatabaseMigrationServiceMigrationJobPerformanceConfig) {
    this._performanceConfig.internalValue = value;
  }
  public resetPerformanceConfig() {
    this._performanceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get performanceConfigInput() {
    return this._performanceConfig.internalValue;
  }

  // postgres_homogeneous_config - computed: false, optional: true, required: false
  private _postgresHomogeneousConfig = new DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference(this, "postgres_homogeneous_config");
  public get postgresHomogeneousConfig() {
    return this._postgresHomogeneousConfig;
  }
  public putPostgresHomogeneousConfig(value: DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfig) {
    this._postgresHomogeneousConfig.internalValue = value;
  }
  public resetPostgresHomogeneousConfig() {
    this._postgresHomogeneousConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postgresHomogeneousConfigInput() {
    return this._postgresHomogeneousConfig.internalValue;
  }

  // reverse_ssh_connectivity - computed: false, optional: true, required: false
  private _reverseSshConnectivity = new DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference(this, "reverse_ssh_connectivity");
  public get reverseSshConnectivity() {
    return this._reverseSshConnectivity;
  }
  public putReverseSshConnectivity(value: DatabaseMigrationServiceMigrationJobReverseSshConnectivity) {
    this._reverseSshConnectivity.internalValue = value;
  }
  public resetReverseSshConnectivity() {
    this._reverseSshConnectivity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reverseSshConnectivityInput() {
    return this._reverseSshConnectivity.internalValue;
  }

  // static_ip_connectivity - computed: false, optional: true, required: false
  private _staticIpConnectivity = new DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference(this, "static_ip_connectivity");
  public get staticIpConnectivity() {
    return this._staticIpConnectivity;
  }
  public putStaticIpConnectivity(value: DatabaseMigrationServiceMigrationJobStaticIpConnectivity) {
    this._staticIpConnectivity.internalValue = value;
  }
  public resetStaticIpConnectivity() {
    this._staticIpConnectivity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticIpConnectivityInput() {
    return this._staticIpConnectivity.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DatabaseMigrationServiceMigrationJobTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DatabaseMigrationServiceMigrationJobTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // vpc_peering_connectivity - computed: false, optional: true, required: false
  private _vpcPeeringConnectivity = new DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference(this, "vpc_peering_connectivity");
  public get vpcPeeringConnectivity() {
    return this._vpcPeeringConnectivity;
  }
  public putVpcPeeringConnectivity(value: DatabaseMigrationServiceMigrationJobVpcPeeringConnectivity) {
    this._vpcPeeringConnectivity.internalValue = value;
  }
  public resetVpcPeeringConnectivity() {
    this._vpcPeeringConnectivity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcPeeringConnectivityInput() {
    return this._vpcPeeringConnectivity.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      desired_state: cdktn.stringToTerraform(this._desiredState),
      destination: cdktn.stringToTerraform(this._destination),
      display_name: cdktn.stringToTerraform(this._displayName),
      dump_path: cdktn.stringToTerraform(this._dumpPath),
      dump_type: cdktn.stringToTerraform(this._dumpType),
      id: cdktn.stringToTerraform(this._id),
      labels: cdktn.hashMapper(cdktn.stringToTerraform)(this._labels),
      location: cdktn.stringToTerraform(this._location),
      migration_job_id: cdktn.stringToTerraform(this._migrationJobId),
      project: cdktn.stringToTerraform(this._project),
      source: cdktn.stringToTerraform(this._source),
      stop_on_warnings: cdktn.booleanToTerraform(this._stopOnWarnings),
      type: cdktn.stringToTerraform(this._type),
      dump_flags: databaseMigrationServiceMigrationJobDumpFlagsToTerraform(this._dumpFlags.internalValue),
      objects_config: databaseMigrationServiceMigrationJobObjectsConfigToTerraform(this._objectsConfig.internalValue),
      performance_config: databaseMigrationServiceMigrationJobPerformanceConfigToTerraform(this._performanceConfig.internalValue),
      postgres_homogeneous_config: databaseMigrationServiceMigrationJobPostgresHomogeneousConfigToTerraform(this._postgresHomogeneousConfig.internalValue),
      reverse_ssh_connectivity: databaseMigrationServiceMigrationJobReverseSshConnectivityToTerraform(this._reverseSshConnectivity.internalValue),
      static_ip_connectivity: databaseMigrationServiceMigrationJobStaticIpConnectivityToTerraform(this._staticIpConnectivity.internalValue),
      timeouts: databaseMigrationServiceMigrationJobTimeoutsToTerraform(this._timeouts.internalValue),
      vpc_peering_connectivity: databaseMigrationServiceMigrationJobVpcPeeringConnectivityToTerraform(this._vpcPeeringConnectivity.internalValue),
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
      desired_state: {
        value: cdktn.stringToHclTerraform(this._desiredState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination: {
        value: cdktn.stringToHclTerraform(this._destination),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktn.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dump_path: {
        value: cdktn.stringToHclTerraform(this._dumpPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dump_type: {
        value: cdktn.stringToHclTerraform(this._dumpType),
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
      migration_job_id: {
        value: cdktn.stringToHclTerraform(this._migrationJobId),
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
      source: {
        value: cdktn.stringToHclTerraform(this._source),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stop_on_warnings: {
        value: cdktn.booleanToHclTerraform(this._stopOnWarnings),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      type: {
        value: cdktn.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dump_flags: {
        value: databaseMigrationServiceMigrationJobDumpFlagsToHclTerraform(this._dumpFlags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabaseMigrationServiceMigrationJobDumpFlagsList",
      },
      objects_config: {
        value: databaseMigrationServiceMigrationJobObjectsConfigToHclTerraform(this._objectsConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabaseMigrationServiceMigrationJobObjectsConfigList",
      },
      performance_config: {
        value: databaseMigrationServiceMigrationJobPerformanceConfigToHclTerraform(this._performanceConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabaseMigrationServiceMigrationJobPerformanceConfigList",
      },
      postgres_homogeneous_config: {
        value: databaseMigrationServiceMigrationJobPostgresHomogeneousConfigToHclTerraform(this._postgresHomogeneousConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigList",
      },
      reverse_ssh_connectivity: {
        value: databaseMigrationServiceMigrationJobReverseSshConnectivityToHclTerraform(this._reverseSshConnectivity.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabaseMigrationServiceMigrationJobReverseSshConnectivityList",
      },
      static_ip_connectivity: {
        value: databaseMigrationServiceMigrationJobStaticIpConnectivityToHclTerraform(this._staticIpConnectivity.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabaseMigrationServiceMigrationJobStaticIpConnectivityList",
      },
      timeouts: {
        value: databaseMigrationServiceMigrationJobTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DatabaseMigrationServiceMigrationJobTimeouts",
      },
      vpc_peering_connectivity: {
        value: databaseMigrationServiceMigrationJobVpcPeeringConnectivityToHclTerraform(this._vpcPeeringConnectivity.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
