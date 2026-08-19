/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/colab_notebook_execution
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ColabNotebookExecutionConfig extends cdktn.TerraformMetaArguments {
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/colab_notebook_execution#deletion_policy ColabNotebookExecution#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Required. The display name of the Notebook Execution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/colab_notebook_execution#display_name ColabNotebookExecution#display_name}
  */
  readonly displayName: string;
  /**
  * Max running time of the execution job in seconds (default 86400s / 24 hrs).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/colab_notebook_execution#execution_timeout ColabNotebookExecution#execution_timeout}
  */
  readonly executionTimeout?: string;
  /**
  * The user email to run the execution as.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/colab_notebook_execution#execution_user ColabNotebookExecution#execution_user}
  */
  readonly executionUser?: string;
  /**
  * The Cloud Storage location to upload the result to. Format:'gs://bucket-name'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/colab_notebook_execution#gcs_output_uri ColabNotebookExecution#gcs_output_uri}
  */
  readonly gcsOutputUri: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/colab_notebook_execution#id ColabNotebookExecution#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The location for the resource: https://cloud.google.com/colab/docs/locations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/colab_notebook_execution#location ColabNotebookExecution#location}
  */
  readonly location: string;
  /**
  * User specified ID for the Notebook Execution Job
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/colab_notebook_execution#notebook_execution_job_id ColabNotebookExecution#notebook_execution_job_id}
  */
  readonly notebookExecutionJobId?: string;
  /**
  * The NotebookRuntimeTemplate to source compute configuration from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/colab_notebook_execution#notebook_runtime_template_resource_name ColabNotebookExecution#notebook_runtime_template_resource_name}
  */
  readonly notebookRuntimeTemplateResourceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/colab_notebook_execution#project ColabNotebookExecution#project}
  */
  readonly project?: string;
  /**
  * The service account to run the execution as.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/colab_notebook_execution#service_account ColabNotebookExecution#service_account}
  */
  readonly serviceAccount?: string;
  /**
  * custom_environment_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/colab_notebook_execution#custom_environment_spec ColabNotebookExecution#custom_environment_spec}
  */
  readonly customEnvironmentSpec?: ColabNotebookExecutionCustomEnvironmentSpec;
  /**
  * dataform_repository_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/colab_notebook_execution#dataform_repository_source ColabNotebookExecution#dataform_repository_source}
  */
  readonly dataformRepositorySource?: ColabNotebookExecutionDataformRepositorySource;
  /**
  * direct_notebook_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/colab_notebook_execution#direct_notebook_source ColabNotebookExecution#direct_notebook_source}
  */
  readonly directNotebookSource?: ColabNotebookExecutionDirectNotebookSource;
  /**
  * gcs_notebook_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/colab_notebook_execution#gcs_notebook_source ColabNotebookExecution#gcs_notebook_source}
  */
  readonly gcsNotebookSource?: ColabNotebookExecutionGcsNotebookSource;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/colab_notebook_execution#timeouts ColabNotebookExecution#timeouts}
  */
  readonly timeouts?: ColabNotebookExecutionTimeouts;
  /**
  * workbench_runtime block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/colab_notebook_execution#workbench_runtime ColabNotebookExecution#workbench_runtime}
  */
  readonly workbenchRuntime?: ColabNotebookExecutionWorkbenchRuntime;
}
export interface ColabNotebookExecutionCustomEnvironmentSpecMachineSpec {
  /**
  * The number of accelerators used by the runtime.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/colab_notebook_execution#accelerator_count ColabNotebookExecution#accelerator_count}
  */
  readonly acceleratorCount?: number;
  /**
  * The type of hardware accelerator used by the runtime. If specified, acceleratorCount must also be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/colab_notebook_execution#accelerator_type ColabNotebookExecution#accelerator_type}
  */
  readonly acceleratorType?: string;
  /**
  * The Compute Engine machine type selected for the runtime.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/colab_notebook_execution#machine_type ColabNotebookExecution#machine_type}
  */
  readonly machineType?: string;
}

export function colabNotebookExecutionCustomEnvironmentSpecMachineSpecToTerraform(struct?: ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference | ColabNotebookExecutionCustomEnvironmentSpecMachineSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    accelerator_count: cdktn.numberToTerraform(struct!.acceleratorCount),
    accelerator_type: cdktn.stringToTerraform(struct!.acceleratorType),
    machine_type: cdktn.stringToTerraform(struct!.machineType),
  }
}


export function colabNotebookExecutionCustomEnvironmentSpecMachineSpecToHclTerraform(struct?: ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference | ColabNotebookExecutionCustomEnvironmentSpecMachineSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    accelerator_count: {
      value: cdktn.numberToHclTerraform(struct!.acceleratorCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    accelerator_type: {
      value: cdktn.stringToHclTerraform(struct!.acceleratorType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    machine_type: {
      value: cdktn.stringToHclTerraform(struct!.machineType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ColabNotebookExecutionCustomEnvironmentSpecMachineSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acceleratorCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceleratorCount = this._acceleratorCount;
    }
    if (this._acceleratorType !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceleratorType = this._acceleratorType;
    }
    if (this._machineType !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineType = this._machineType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ColabNotebookExecutionCustomEnvironmentSpecMachineSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._acceleratorCount = undefined;
      this._acceleratorType = undefined;
      this._machineType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._acceleratorCount = value.acceleratorCount;
      this._acceleratorType = value.acceleratorType;
      this._machineType = value.machineType;
    }
  }

  // accelerator_count - computed: false, optional: true, required: false
  private _acceleratorCount?: number; 
  public get acceleratorCount() {
    return this.getNumberAttribute('accelerator_count');
  }
  public set acceleratorCount(value: number) {
    this._acceleratorCount = value;
  }
  public resetAcceleratorCount() {
    this._acceleratorCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceleratorCountInput() {
    return this._acceleratorCount;
  }

  // accelerator_type - computed: false, optional: true, required: false
  private _acceleratorType?: string; 
  public get acceleratorType() {
    return this.getStringAttribute('accelerator_type');
  }
  public set acceleratorType(value: string) {
    this._acceleratorType = value;
  }
  public resetAcceleratorType() {
    this._acceleratorType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceleratorTypeInput() {
    return this._acceleratorType;
  }

  // machine_type - computed: false, optional: true, required: false
  private _machineType?: string; 
  public get machineType() {
    return this.getStringAttribute('machine_type');
  }
  public set machineType(value: string) {
    this._machineType = value;
  }
  public resetMachineType() {
    this._machineType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineTypeInput() {
    return this._machineType;
  }
}
export interface ColabNotebookExecutionCustomEnvironmentSpecNetworkSpec {
  /**
  * Enable public internet access for the runtime.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/colab_notebook_execution#enable_internet_access ColabNotebookExecution#enable_internet_access}
  */
  readonly enableInternetAccess?: boolean | cdktn.IResolvable;
  /**
  * The name of the VPC that this runtime is in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/colab_notebook_execution#network ColabNotebookExecution#network}
  */
  readonly network?: string;
  /**
  * The name of the subnetwork that this runtime is in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/colab_notebook_execution#subnetwork ColabNotebookExecution#subnetwork}
  */
  readonly subnetwork?: string;
}

export function colabNotebookExecutionCustomEnvironmentSpecNetworkSpecToTerraform(struct?: ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference | ColabNotebookExecutionCustomEnvironmentSpecNetworkSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enable_internet_access: cdktn.booleanToTerraform(struct!.enableInternetAccess),
    network: cdktn.stringToTerraform(struct!.network),
    subnetwork: cdktn.stringToTerraform(struct!.subnetwork),
  }
}


export function colabNotebookExecutionCustomEnvironmentSpecNetworkSpecToHclTerraform(struct?: ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference | ColabNotebookExecutionCustomEnvironmentSpecNetworkSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enable_internet_access: {
      value: cdktn.booleanToHclTerraform(struct!.enableInternetAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    network: {
      value: cdktn.stringToHclTerraform(struct!.network),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnetwork: {
      value: cdktn.stringToHclTerraform(struct!.subnetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ColabNotebookExecutionCustomEnvironmentSpecNetworkSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableInternetAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableInternetAccess = this._enableInternetAccess;
    }
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    if (this._subnetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetwork = this._subnetwork;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ColabNotebookExecutionCustomEnvironmentSpecNetworkSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableInternetAccess = undefined;
      this._network = undefined;
      this._subnetwork = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableInternetAccess = value.enableInternetAccess;
      this._network = value.network;
      this._subnetwork = value.subnetwork;
    }
  }

  // enable_internet_access - computed: false, optional: true, required: false
  private _enableInternetAccess?: boolean | cdktn.IResolvable; 
  public get enableInternetAccess() {
    return this.getBooleanAttribute('enable_internet_access');
  }
  public set enableInternetAccess(value: boolean | cdktn.IResolvable) {
    this._enableInternetAccess = value;
  }
  public resetEnableInternetAccess() {
    this._enableInternetAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInternetAccessInput() {
    return this._enableInternetAccess;
  }

  // network - computed: false, optional: true, required: false
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  public resetNetwork() {
    this._network = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // subnetwork - computed: false, optional: true, required: false
  private _subnetwork?: string; 
  public get subnetwork() {
    return this.getStringAttribute('subnetwork');
  }
  public set subnetwork(value: string) {
    this._subnetwork = value;
  }
  public resetSubnetwork() {
    this._subnetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetworkInput() {
    return this._subnetwork;
  }
}
export interface ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpec {
  /**
  * The disk size of the runtime in GB. If specified, the diskType must also be specified. The minimum size is 10GB and the maximum is 65536GB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/colab_notebook_execution#disk_size_gb ColabNotebookExecution#disk_size_gb}
  */
  readonly diskSizeGb?: string;
  /**
  * The type of the persistent disk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/colab_notebook_execution#disk_type ColabNotebookExecution#disk_type}
  */
  readonly diskType?: string;
}

export function colabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecToTerraform(struct?: ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference | ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    disk_size_gb: cdktn.stringToTerraform(struct!.diskSizeGb),
    disk_type: cdktn.stringToTerraform(struct!.diskType),
  }
}


export function colabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecToHclTerraform(struct?: ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference | ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    disk_size_gb: {
      value: cdktn.stringToHclTerraform(struct!.diskSizeGb),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk_type: {
      value: cdktn.stringToHclTerraform(struct!.diskType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskSizeGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSizeGb = this._diskSizeGb;
    }
    if (this._diskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskType = this._diskType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._diskSizeGb = undefined;
      this._diskType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._diskSizeGb = value.diskSizeGb;
      this._diskType = value.diskType;
    }
  }

  // disk_size_gb - computed: false, optional: true, required: false
  private _diskSizeGb?: string; 
  public get diskSizeGb() {
    return this.getStringAttribute('disk_size_gb');
  }
  public set diskSizeGb(value: string) {
    this._diskSizeGb = value;
  }
  public resetDiskSizeGb() {
    this._diskSizeGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeGbInput() {
    return this._diskSizeGb;
  }

  // disk_type - computed: false, optional: true, required: false
  private _diskType?: string; 
  public get diskType() {
    return this.getStringAttribute('disk_type');
  }
  public set diskType(value: string) {
    this._diskType = value;
  }
  public resetDiskType() {
    this._diskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskTypeInput() {
    return this._diskType;
  }
}
export interface ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfig {
  /**
  * Defines whether the instance has integrity monitoring enabled. Enables monitoring and attestation of the boot integrity of the instance. The attestation is performed against the integrity policy baseline. This baseline is initially derived from the implicitly trusted boot image when the instance is created. Enabled by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/colab_notebook_execution#enable_integrity_monitoring ColabNotebookExecution#enable_integrity_monitoring}
  */
  readonly enableIntegrityMonitoring?: boolean | cdktn.IResolvable;
  /**
  * Defines whether the instance has Secure Boot enabled. Secure Boot helps ensure that the system only runs authentic software by verifying the digital signature of all boot components, and halting the boot process if signature verification fails. Disabled by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/colab_notebook_execution#enable_secure_boot ColabNotebookExecution#enable_secure_boot}
  */
  readonly enableSecureBoot?: boolean | cdktn.IResolvable;
  /**
  * Defines whether the instance has the vTPM enabled. Enabled by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/colab_notebook_execution#enable_vtpm ColabNotebookExecution#enable_vtpm}
  */
  readonly enableVtpm?: boolean | cdktn.IResolvable;
}

export function colabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigToTerraform(struct?: ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference | ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enable_integrity_monitoring: cdktn.booleanToTerraform(struct!.enableIntegrityMonitoring),
    enable_secure_boot: cdktn.booleanToTerraform(struct!.enableSecureBoot),
    enable_vtpm: cdktn.booleanToTerraform(struct!.enableVtpm),
  }
}


export function colabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigToHclTerraform(struct?: ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference | ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enable_integrity_monitoring: {
      value: cdktn.booleanToHclTerraform(struct!.enableIntegrityMonitoring),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_secure_boot: {
      value: cdktn.booleanToHclTerraform(struct!.enableSecureBoot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_vtpm: {
      value: cdktn.booleanToHclTerraform(struct!.enableVtpm),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableIntegrityMonitoring !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableIntegrityMonitoring = this._enableIntegrityMonitoring;
    }
    if (this._enableSecureBoot !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableSecureBoot = this._enableSecureBoot;
    }
    if (this._enableVtpm !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableVtpm = this._enableVtpm;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableIntegrityMonitoring = undefined;
      this._enableSecureBoot = undefined;
      this._enableVtpm = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableIntegrityMonitoring = value.enableIntegrityMonitoring;
      this._enableSecureBoot = value.enableSecureBoot;
      this._enableVtpm = value.enableVtpm;
    }
  }

  // enable_integrity_monitoring - computed: false, optional: true, required: false
  private _enableIntegrityMonitoring?: boolean | cdktn.IResolvable; 
  public get enableIntegrityMonitoring() {
    return this.getBooleanAttribute('enable_integrity_monitoring');
  }
  public set enableIntegrityMonitoring(value: boolean | cdktn.IResolvable) {
    this._enableIntegrityMonitoring = value;
  }
  public resetEnableIntegrityMonitoring() {
    this._enableIntegrityMonitoring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableIntegrityMonitoringInput() {
    return this._enableIntegrityMonitoring;
  }

  // enable_secure_boot - computed: false, optional: true, required: false
  private _enableSecureBoot?: boolean | cdktn.IResolvable; 
  public get enableSecureBoot() {
    return this.getBooleanAttribute('enable_secure_boot');
  }
  public set enableSecureBoot(value: boolean | cdktn.IResolvable) {
    this._enableSecureBoot = value;
  }
  public resetEnableSecureBoot() {
    this._enableSecureBoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSecureBootInput() {
    return this._enableSecureBoot;
  }

  // enable_vtpm - computed: false, optional: true, required: false
  private _enableVtpm?: boolean | cdktn.IResolvable; 
  public get enableVtpm() {
    return this.getBooleanAttribute('enable_vtpm');
  }
  public set enableVtpm(value: boolean | cdktn.IResolvable) {
    this._enableVtpm = value;
  }
  public resetEnableVtpm() {
    this._enableVtpm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableVtpmInput() {
    return this._enableVtpm;
  }
}
export interface ColabNotebookExecutionCustomEnvironmentSpec {
  /**
  * machine_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/colab_notebook_execution#machine_spec ColabNotebookExecution#machine_spec}
  */
  readonly machineSpec?: ColabNotebookExecutionCustomEnvironmentSpecMachineSpec;
  /**
  * network_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/colab_notebook_execution#network_spec ColabNotebookExecution#network_spec}
  */
  readonly networkSpec?: ColabNotebookExecutionCustomEnvironmentSpecNetworkSpec;
  /**
  * persistent_disk_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/colab_notebook_execution#persistent_disk_spec ColabNotebookExecution#persistent_disk_spec}
  */
  readonly persistentDiskSpec?: ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpec;
  /**
  * shielded_instance_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/colab_notebook_execution#shielded_instance_config ColabNotebookExecution#shielded_instance_config}
  */
  readonly shieldedInstanceConfig?: ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfig;
}

export function colabNotebookExecutionCustomEnvironmentSpecToTerraform(struct?: ColabNotebookExecutionCustomEnvironmentSpecOutputReference | ColabNotebookExecutionCustomEnvironmentSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    machine_spec: colabNotebookExecutionCustomEnvironmentSpecMachineSpecToTerraform(struct!.machineSpec),
    network_spec: colabNotebookExecutionCustomEnvironmentSpecNetworkSpecToTerraform(struct!.networkSpec),
    persistent_disk_spec: colabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecToTerraform(struct!.persistentDiskSpec),
    shielded_instance_config: colabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigToTerraform(struct!.shieldedInstanceConfig),
  }
}


export function colabNotebookExecutionCustomEnvironmentSpecToHclTerraform(struct?: ColabNotebookExecutionCustomEnvironmentSpecOutputReference | ColabNotebookExecutionCustomEnvironmentSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    machine_spec: {
      value: colabNotebookExecutionCustomEnvironmentSpecMachineSpecToHclTerraform(struct!.machineSpec),
      isBlock: true,
      type: "list",
      storageClassType: "ColabNotebookExecutionCustomEnvironmentSpecMachineSpecList",
    },
    network_spec: {
      value: colabNotebookExecutionCustomEnvironmentSpecNetworkSpecToHclTerraform(struct!.networkSpec),
      isBlock: true,
      type: "list",
      storageClassType: "ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecList",
    },
    persistent_disk_spec: {
      value: colabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecToHclTerraform(struct!.persistentDiskSpec),
      isBlock: true,
      type: "list",
      storageClassType: "ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecList",
    },
    shielded_instance_config: {
      value: colabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigToHclTerraform(struct!.shieldedInstanceConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ColabNotebookExecutionCustomEnvironmentSpecOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ColabNotebookExecutionCustomEnvironmentSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._machineSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineSpec = this._machineSpec?.internalValue;
    }
    if (this._networkSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkSpec = this._networkSpec?.internalValue;
    }
    if (this._persistentDiskSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistentDiskSpec = this._persistentDiskSpec?.internalValue;
    }
    if (this._shieldedInstanceConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.shieldedInstanceConfig = this._shieldedInstanceConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ColabNotebookExecutionCustomEnvironmentSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._machineSpec.internalValue = undefined;
      this._networkSpec.internalValue = undefined;
      this._persistentDiskSpec.internalValue = undefined;
      this._shieldedInstanceConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._machineSpec.internalValue = value.machineSpec;
      this._networkSpec.internalValue = value.networkSpec;
      this._persistentDiskSpec.internalValue = value.persistentDiskSpec;
      this._shieldedInstanceConfig.internalValue = value.shieldedInstanceConfig;
    }
  }

  // machine_spec - computed: false, optional: true, required: false
  private _machineSpec = new ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference(this, "machine_spec");
  public get machineSpec() {
    return this._machineSpec;
  }
  public putMachineSpec(value: ColabNotebookExecutionCustomEnvironmentSpecMachineSpec) {
    this._machineSpec.internalValue = value;
  }
  public resetMachineSpec() {
    this._machineSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineSpecInput() {
    return this._machineSpec.internalValue;
  }

  // network_spec - computed: false, optional: true, required: false
  private _networkSpec = new ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference(this, "network_spec");
  public get networkSpec() {
    return this._networkSpec;
  }
  public putNetworkSpec(value: ColabNotebookExecutionCustomEnvironmentSpecNetworkSpec) {
    this._networkSpec.internalValue = value;
  }
  public resetNetworkSpec() {
    this._networkSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkSpecInput() {
    return this._networkSpec.internalValue;
  }

  // persistent_disk_spec - computed: false, optional: true, required: false
  private _persistentDiskSpec = new ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference(this, "persistent_disk_spec");
  public get persistentDiskSpec() {
    return this._persistentDiskSpec;
  }
  public putPersistentDiskSpec(value: ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpec) {
    this._persistentDiskSpec.internalValue = value;
  }
  public resetPersistentDiskSpec() {
    this._persistentDiskSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistentDiskSpecInput() {
    return this._persistentDiskSpec.internalValue;
  }

  // shielded_instance_config - computed: false, optional: true, required: false
  private _shieldedInstanceConfig = new ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference(this, "shielded_instance_config");
  public get shieldedInstanceConfig() {
    return this._shieldedInstanceConfig;
  }
  public putShieldedInstanceConfig(value: ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfig) {
    this._shieldedInstanceConfig.internalValue = value;
  }
  public resetShieldedInstanceConfig() {
    this._shieldedInstanceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shieldedInstanceConfigInput() {
    return this._shieldedInstanceConfig.internalValue;
  }
}
export interface ColabNotebookExecutionDataformRepositorySource {
  /**
  * The commit SHA to read repository with. If unset, the file will be read at HEAD.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/colab_notebook_execution#commit_sha ColabNotebookExecution#commit_sha}
  */
  readonly commitSha?: string;
  /**
  * The resource name of the Dataform Repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/colab_notebook_execution#dataform_repository_resource_name ColabNotebookExecution#dataform_repository_resource_name}
  */
  readonly dataformRepositoryResourceName: string;
}

export function colabNotebookExecutionDataformRepositorySourceToTerraform(struct?: ColabNotebookExecutionDataformRepositorySourceOutputReference | ColabNotebookExecutionDataformRepositorySource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    commit_sha: cdktn.stringToTerraform(struct!.commitSha),
    dataform_repository_resource_name: cdktn.stringToTerraform(struct!.dataformRepositoryResourceName),
  }
}


export function colabNotebookExecutionDataformRepositorySourceToHclTerraform(struct?: ColabNotebookExecutionDataformRepositorySourceOutputReference | ColabNotebookExecutionDataformRepositorySource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    commit_sha: {
      value: cdktn.stringToHclTerraform(struct!.commitSha),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dataform_repository_resource_name: {
      value: cdktn.stringToHclTerraform(struct!.dataformRepositoryResourceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ColabNotebookExecutionDataformRepositorySourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ColabNotebookExecutionDataformRepositorySource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commitSha !== undefined) {
      hasAnyValues = true;
      internalValueResult.commitSha = this._commitSha;
    }
    if (this._dataformRepositoryResourceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataformRepositoryResourceName = this._dataformRepositoryResourceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ColabNotebookExecutionDataformRepositorySource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._commitSha = undefined;
      this._dataformRepositoryResourceName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._commitSha = value.commitSha;
      this._dataformRepositoryResourceName = value.dataformRepositoryResourceName;
    }
  }

  // commit_sha - computed: false, optional: true, required: false
  private _commitSha?: string; 
  public get commitSha() {
    return this.getStringAttribute('commit_sha');
  }
  public set commitSha(value: string) {
    this._commitSha = value;
  }
  public resetCommitSha() {
    this._commitSha = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commitShaInput() {
    return this._commitSha;
  }

  // dataform_repository_resource_name - computed: false, optional: false, required: true
  private _dataformRepositoryResourceName?: string; 
  public get dataformRepositoryResourceName() {
    return this.getStringAttribute('dataform_repository_resource_name');
  }
  public set dataformRepositoryResourceName(value: string) {
    this._dataformRepositoryResourceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataformRepositoryResourceNameInput() {
    return this._dataformRepositoryResourceName;
  }
}
export interface ColabNotebookExecutionDirectNotebookSource {
  /**
  * The base64-encoded contents of the input notebook file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/colab_notebook_execution#content ColabNotebookExecution#content}
  */
  readonly content: string;
}

export function colabNotebookExecutionDirectNotebookSourceToTerraform(struct?: ColabNotebookExecutionDirectNotebookSourceOutputReference | ColabNotebookExecutionDirectNotebookSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    content: cdktn.stringToTerraform(struct!.content),
  }
}


export function colabNotebookExecutionDirectNotebookSourceToHclTerraform(struct?: ColabNotebookExecutionDirectNotebookSourceOutputReference | ColabNotebookExecutionDirectNotebookSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    content: {
      value: cdktn.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ColabNotebookExecutionDirectNotebookSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ColabNotebookExecutionDirectNotebookSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ColabNotebookExecutionDirectNotebookSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._content = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._content = value.content;
    }
  }

  // content - computed: false, optional: false, required: true
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }
}
export interface ColabNotebookExecutionGcsNotebookSource {
  /**
  * The version of the Cloud Storage object to read. If unset, the current version of the object is read. See https://cloud.google.com/storage/docs/metadata#generation-number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/colab_notebook_execution#generation ColabNotebookExecution#generation}
  */
  readonly generation?: string;
  /**
  * The Cloud Storage uri pointing to the ipynb file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/colab_notebook_execution#uri ColabNotebookExecution#uri}
  */
  readonly uri: string;
}

export function colabNotebookExecutionGcsNotebookSourceToTerraform(struct?: ColabNotebookExecutionGcsNotebookSourceOutputReference | ColabNotebookExecutionGcsNotebookSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    generation: cdktn.stringToTerraform(struct!.generation),
    uri: cdktn.stringToTerraform(struct!.uri),
  }
}


export function colabNotebookExecutionGcsNotebookSourceToHclTerraform(struct?: ColabNotebookExecutionGcsNotebookSourceOutputReference | ColabNotebookExecutionGcsNotebookSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    generation: {
      value: cdktn.stringToHclTerraform(struct!.generation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uri: {
      value: cdktn.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ColabNotebookExecutionGcsNotebookSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ColabNotebookExecutionGcsNotebookSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._generation !== undefined) {
      hasAnyValues = true;
      internalValueResult.generation = this._generation;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ColabNotebookExecutionGcsNotebookSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._generation = undefined;
      this._uri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._generation = value.generation;
      this._uri = value.uri;
    }
  }

  // generation - computed: false, optional: true, required: false
  private _generation?: string; 
  public get generation() {
    return this.getStringAttribute('generation');
  }
  public set generation(value: string) {
    this._generation = value;
  }
  public resetGeneration() {
    this._generation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generationInput() {
    return this._generation;
  }

  // uri - computed: false, optional: false, required: true
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }
}
export interface ColabNotebookExecutionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/colab_notebook_execution#create ColabNotebookExecution#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/colab_notebook_execution#delete ColabNotebookExecution#delete}
  */
  readonly delete?: string;
}

export function colabNotebookExecutionTimeoutsToTerraform(struct?: ColabNotebookExecutionTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    delete: cdktn.stringToTerraform(struct!.delete),
  }
}


export function colabNotebookExecutionTimeoutsToHclTerraform(struct?: ColabNotebookExecutionTimeouts | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ColabNotebookExecutionTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ColabNotebookExecutionTimeouts | cdktn.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ColabNotebookExecutionTimeouts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
}
export interface ColabNotebookExecutionWorkbenchRuntimeVmImage {
  /**
  * Use this VM image family to find the image; the newest image in this family will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/colab_notebook_execution#family ColabNotebookExecution#family}
  */
  readonly family?: string;
  /**
  * Use VM image name to find the image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/colab_notebook_execution#name ColabNotebookExecution#name}
  */
  readonly name?: string;
  /**
  * The name of the Google Cloud project that this VM image belongs to. Format: {project_id}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/colab_notebook_execution#project ColabNotebookExecution#project}
  */
  readonly project?: string;
}

export function colabNotebookExecutionWorkbenchRuntimeVmImageToTerraform(struct?: ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference | ColabNotebookExecutionWorkbenchRuntimeVmImage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    family: cdktn.stringToTerraform(struct!.family),
    name: cdktn.stringToTerraform(struct!.name),
    project: cdktn.stringToTerraform(struct!.project),
  }
}


export function colabNotebookExecutionWorkbenchRuntimeVmImageToHclTerraform(struct?: ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference | ColabNotebookExecutionWorkbenchRuntimeVmImage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    family: {
      value: cdktn.stringToHclTerraform(struct!.family),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project: {
      value: cdktn.stringToHclTerraform(struct!.project),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ColabNotebookExecutionWorkbenchRuntimeVmImage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._family !== undefined) {
      hasAnyValues = true;
      internalValueResult.family = this._family;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._project !== undefined) {
      hasAnyValues = true;
      internalValueResult.project = this._project;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ColabNotebookExecutionWorkbenchRuntimeVmImage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._family = undefined;
      this._name = undefined;
      this._project = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._family = value.family;
      this._name = value.name;
      this._project = value.project;
    }
  }

  // family - computed: false, optional: true, required: false
  private _family?: string; 
  public get family() {
    return this.getStringAttribute('family');
  }
  public set family(value: string) {
    this._family = value;
  }
  public resetFamily() {
    this._family = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get familyInput() {
    return this._family;
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
}
export interface ColabNotebookExecutionWorkbenchRuntime {
  /**
  * vm_image block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/colab_notebook_execution#vm_image ColabNotebookExecution#vm_image}
  */
  readonly vmImage: ColabNotebookExecutionWorkbenchRuntimeVmImage;
}

export function colabNotebookExecutionWorkbenchRuntimeToTerraform(struct?: ColabNotebookExecutionWorkbenchRuntimeOutputReference | ColabNotebookExecutionWorkbenchRuntime): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    vm_image: colabNotebookExecutionWorkbenchRuntimeVmImageToTerraform(struct!.vmImage),
  }
}


export function colabNotebookExecutionWorkbenchRuntimeToHclTerraform(struct?: ColabNotebookExecutionWorkbenchRuntimeOutputReference | ColabNotebookExecutionWorkbenchRuntime): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    vm_image: {
      value: colabNotebookExecutionWorkbenchRuntimeVmImageToHclTerraform(struct!.vmImage),
      isBlock: true,
      type: "list",
      storageClassType: "ColabNotebookExecutionWorkbenchRuntimeVmImageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ColabNotebookExecutionWorkbenchRuntimeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ColabNotebookExecutionWorkbenchRuntime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vmImage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmImage = this._vmImage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ColabNotebookExecutionWorkbenchRuntime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._vmImage.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._vmImage.internalValue = value.vmImage;
    }
  }

  // vm_image - computed: false, optional: false, required: true
  private _vmImage = new ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference(this, "vm_image");
  public get vmImage() {
    return this._vmImage;
  }
  public putVmImage(value: ColabNotebookExecutionWorkbenchRuntimeVmImage) {
    this._vmImage.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vmImageInput() {
    return this._vmImage.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/colab_notebook_execution google_colab_notebook_execution}
*/
export class ColabNotebookExecution extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_colab_notebook_execution";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ColabNotebookExecution resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ColabNotebookExecution to import
  * @param importFromId The id of the existing ColabNotebookExecution that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/colab_notebook_execution#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ColabNotebookExecution to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_colab_notebook_execution", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/colab_notebook_execution google_colab_notebook_execution} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ColabNotebookExecutionConfig
  */
  public constructor(scope: Construct, id: string, config: ColabNotebookExecutionConfig) {
    super(scope, id, {
      terraformResourceType: 'google_colab_notebook_execution',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.45.0',
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
    this._displayName = config.displayName;
    this._executionTimeout = config.executionTimeout;
    this._executionUser = config.executionUser;
    this._gcsOutputUri = config.gcsOutputUri;
    this._id = config.id;
    this._location = config.location;
    this._notebookExecutionJobId = config.notebookExecutionJobId;
    this._notebookRuntimeTemplateResourceName = config.notebookRuntimeTemplateResourceName;
    this._project = config.project;
    this._serviceAccount = config.serviceAccount;
    this._customEnvironmentSpec.internalValue = config.customEnvironmentSpec;
    this._dataformRepositorySource.internalValue = config.dataformRepositorySource;
    this._directNotebookSource.internalValue = config.directNotebookSource;
    this._gcsNotebookSource.internalValue = config.gcsNotebookSource;
    this._timeouts.internalValue = config.timeouts;
    this._workbenchRuntime.internalValue = config.workbenchRuntime;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // execution_timeout - computed: false, optional: true, required: false
  private _executionTimeout?: string; 
  public get executionTimeout() {
    return this.getStringAttribute('execution_timeout');
  }
  public set executionTimeout(value: string) {
    this._executionTimeout = value;
  }
  public resetExecutionTimeout() {
    this._executionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionTimeoutInput() {
    return this._executionTimeout;
  }

  // execution_user - computed: false, optional: true, required: false
  private _executionUser?: string; 
  public get executionUser() {
    return this.getStringAttribute('execution_user');
  }
  public set executionUser(value: string) {
    this._executionUser = value;
  }
  public resetExecutionUser() {
    this._executionUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionUserInput() {
    return this._executionUser;
  }

  // gcs_output_uri - computed: false, optional: false, required: true
  private _gcsOutputUri?: string; 
  public get gcsOutputUri() {
    return this.getStringAttribute('gcs_output_uri');
  }
  public set gcsOutputUri(value: string) {
    this._gcsOutputUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gcsOutputUriInput() {
    return this._gcsOutputUri;
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

  // notebook_execution_job_id - computed: true, optional: true, required: false
  private _notebookExecutionJobId?: string; 
  public get notebookExecutionJobId() {
    return this.getStringAttribute('notebook_execution_job_id');
  }
  public set notebookExecutionJobId(value: string) {
    this._notebookExecutionJobId = value;
  }
  public resetNotebookExecutionJobId() {
    this._notebookExecutionJobId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notebookExecutionJobIdInput() {
    return this._notebookExecutionJobId;
  }

  // notebook_runtime_template_resource_name - computed: false, optional: true, required: false
  private _notebookRuntimeTemplateResourceName?: string; 
  public get notebookRuntimeTemplateResourceName() {
    return this.getStringAttribute('notebook_runtime_template_resource_name');
  }
  public set notebookRuntimeTemplateResourceName(value: string) {
    this._notebookRuntimeTemplateResourceName = value;
  }
  public resetNotebookRuntimeTemplateResourceName() {
    this._notebookRuntimeTemplateResourceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notebookRuntimeTemplateResourceNameInput() {
    return this._notebookRuntimeTemplateResourceName;
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

  // service_account - computed: false, optional: true, required: false
  private _serviceAccount?: string; 
  public get serviceAccount() {
    return this.getStringAttribute('service_account');
  }
  public set serviceAccount(value: string) {
    this._serviceAccount = value;
  }
  public resetServiceAccount() {
    this._serviceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountInput() {
    return this._serviceAccount;
  }

  // custom_environment_spec - computed: false, optional: true, required: false
  private _customEnvironmentSpec = new ColabNotebookExecutionCustomEnvironmentSpecOutputReference(this, "custom_environment_spec");
  public get customEnvironmentSpec() {
    return this._customEnvironmentSpec;
  }
  public putCustomEnvironmentSpec(value: ColabNotebookExecutionCustomEnvironmentSpec) {
    this._customEnvironmentSpec.internalValue = value;
  }
  public resetCustomEnvironmentSpec() {
    this._customEnvironmentSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customEnvironmentSpecInput() {
    return this._customEnvironmentSpec.internalValue;
  }

  // dataform_repository_source - computed: false, optional: true, required: false
  private _dataformRepositorySource = new ColabNotebookExecutionDataformRepositorySourceOutputReference(this, "dataform_repository_source");
  public get dataformRepositorySource() {
    return this._dataformRepositorySource;
  }
  public putDataformRepositorySource(value: ColabNotebookExecutionDataformRepositorySource) {
    this._dataformRepositorySource.internalValue = value;
  }
  public resetDataformRepositorySource() {
    this._dataformRepositorySource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataformRepositorySourceInput() {
    return this._dataformRepositorySource.internalValue;
  }

  // direct_notebook_source - computed: false, optional: true, required: false
  private _directNotebookSource = new ColabNotebookExecutionDirectNotebookSourceOutputReference(this, "direct_notebook_source");
  public get directNotebookSource() {
    return this._directNotebookSource;
  }
  public putDirectNotebookSource(value: ColabNotebookExecutionDirectNotebookSource) {
    this._directNotebookSource.internalValue = value;
  }
  public resetDirectNotebookSource() {
    this._directNotebookSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directNotebookSourceInput() {
    return this._directNotebookSource.internalValue;
  }

  // gcs_notebook_source - computed: false, optional: true, required: false
  private _gcsNotebookSource = new ColabNotebookExecutionGcsNotebookSourceOutputReference(this, "gcs_notebook_source");
  public get gcsNotebookSource() {
    return this._gcsNotebookSource;
  }
  public putGcsNotebookSource(value: ColabNotebookExecutionGcsNotebookSource) {
    this._gcsNotebookSource.internalValue = value;
  }
  public resetGcsNotebookSource() {
    this._gcsNotebookSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcsNotebookSourceInput() {
    return this._gcsNotebookSource.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ColabNotebookExecutionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ColabNotebookExecutionTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // workbench_runtime - computed: false, optional: true, required: false
  private _workbenchRuntime = new ColabNotebookExecutionWorkbenchRuntimeOutputReference(this, "workbench_runtime");
  public get workbenchRuntime() {
    return this._workbenchRuntime;
  }
  public putWorkbenchRuntime(value: ColabNotebookExecutionWorkbenchRuntime) {
    this._workbenchRuntime.internalValue = value;
  }
  public resetWorkbenchRuntime() {
    this._workbenchRuntime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workbenchRuntimeInput() {
    return this._workbenchRuntime.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      display_name: cdktn.stringToTerraform(this._displayName),
      execution_timeout: cdktn.stringToTerraform(this._executionTimeout),
      execution_user: cdktn.stringToTerraform(this._executionUser),
      gcs_output_uri: cdktn.stringToTerraform(this._gcsOutputUri),
      id: cdktn.stringToTerraform(this._id),
      location: cdktn.stringToTerraform(this._location),
      notebook_execution_job_id: cdktn.stringToTerraform(this._notebookExecutionJobId),
      notebook_runtime_template_resource_name: cdktn.stringToTerraform(this._notebookRuntimeTemplateResourceName),
      project: cdktn.stringToTerraform(this._project),
      service_account: cdktn.stringToTerraform(this._serviceAccount),
      custom_environment_spec: colabNotebookExecutionCustomEnvironmentSpecToTerraform(this._customEnvironmentSpec.internalValue),
      dataform_repository_source: colabNotebookExecutionDataformRepositorySourceToTerraform(this._dataformRepositorySource.internalValue),
      direct_notebook_source: colabNotebookExecutionDirectNotebookSourceToTerraform(this._directNotebookSource.internalValue),
      gcs_notebook_source: colabNotebookExecutionGcsNotebookSourceToTerraform(this._gcsNotebookSource.internalValue),
      timeouts: colabNotebookExecutionTimeoutsToTerraform(this._timeouts.internalValue),
      workbench_runtime: colabNotebookExecutionWorkbenchRuntimeToTerraform(this._workbenchRuntime.internalValue),
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
      display_name: {
        value: cdktn.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      execution_timeout: {
        value: cdktn.stringToHclTerraform(this._executionTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      execution_user: {
        value: cdktn.stringToHclTerraform(this._executionUser),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gcs_output_uri: {
        value: cdktn.stringToHclTerraform(this._gcsOutputUri),
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
      location: {
        value: cdktn.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notebook_execution_job_id: {
        value: cdktn.stringToHclTerraform(this._notebookExecutionJobId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notebook_runtime_template_resource_name: {
        value: cdktn.stringToHclTerraform(this._notebookRuntimeTemplateResourceName),
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
      service_account: {
        value: cdktn.stringToHclTerraform(this._serviceAccount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_environment_spec: {
        value: colabNotebookExecutionCustomEnvironmentSpecToHclTerraform(this._customEnvironmentSpec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ColabNotebookExecutionCustomEnvironmentSpecList",
      },
      dataform_repository_source: {
        value: colabNotebookExecutionDataformRepositorySourceToHclTerraform(this._dataformRepositorySource.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ColabNotebookExecutionDataformRepositorySourceList",
      },
      direct_notebook_source: {
        value: colabNotebookExecutionDirectNotebookSourceToHclTerraform(this._directNotebookSource.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ColabNotebookExecutionDirectNotebookSourceList",
      },
      gcs_notebook_source: {
        value: colabNotebookExecutionGcsNotebookSourceToHclTerraform(this._gcsNotebookSource.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ColabNotebookExecutionGcsNotebookSourceList",
      },
      timeouts: {
        value: colabNotebookExecutionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ColabNotebookExecutionTimeouts",
      },
      workbench_runtime: {
        value: colabNotebookExecutionWorkbenchRuntimeToHclTerraform(this._workbenchRuntime.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ColabNotebookExecutionWorkbenchRuntimeList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
