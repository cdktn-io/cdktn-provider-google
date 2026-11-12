/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface VertexAiTrainingPipelineConfig extends cdktn.TerraformMetaArguments {
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#deletion_policy VertexAiTrainingPipeline#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * The user-defined name of this TrainingPipeline.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#display_name VertexAiTrainingPipeline#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#id VertexAiTrainingPipeline#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The labels with user-defined metadata to organize TrainingPipelines.
  * 
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#labels VertexAiTrainingPipeline#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The ID to use for the uploaded Model, which will become the final component of the model resource name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#model_id VertexAiTrainingPipeline#model_id}
  */
  readonly modelId: string;
  /**
  * When specified, the model_to_upload will become a new version of this parent_model.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#parent_model VertexAiTrainingPipeline#parent_model}
  */
  readonly parentModel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#project VertexAiTrainingPipeline#project}
  */
  readonly project?: string;
  /**
  * The region of the training pipeline. eg us-central1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#region VertexAiTrainingPipeline#region}
  */
  readonly region?: string;
  /**
  * A Google Cloud Storage path to the YAML file that defines the training task which is responsible for producing the model artifact, and may also include additional auxiliary work. The definition files that can be used here are found in gs://google-cloud-aiplatform/schema/trainingjob/definition/.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#training_task_definition VertexAiTrainingPipeline#training_task_definition}
  */
  readonly trainingTaskDefinition: string;
  /**
  * The training task's parameter(s), as specified in the training_task_definition's inputs. This field uses JSON data as a string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#training_task_inputs VertexAiTrainingPipeline#training_task_inputs}
  */
  readonly trainingTaskInputs: string;
  /**
  * encryption_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#encryption_spec VertexAiTrainingPipeline#encryption_spec}
  */
  readonly encryptionSpec?: VertexAiTrainingPipelineEncryptionSpec;
  /**
  * input_data_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#input_data_config VertexAiTrainingPipeline#input_data_config}
  */
  readonly inputDataConfig?: VertexAiTrainingPipelineInputDataConfig;
  /**
  * model_to_upload block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#model_to_upload VertexAiTrainingPipeline#model_to_upload}
  */
  readonly modelToUpload?: VertexAiTrainingPipelineModelToUpload;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#timeouts VertexAiTrainingPipeline#timeouts}
  */
  readonly timeouts?: VertexAiTrainingPipelineTimeouts;
}
export interface VertexAiTrainingPipelineError {
}

export function vertexAiTrainingPipelineErrorToTerraform(struct?: VertexAiTrainingPipelineError): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function vertexAiTrainingPipelineErrorToHclTerraform(struct?: VertexAiTrainingPipelineError): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class VertexAiTrainingPipelineErrorOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): VertexAiTrainingPipelineError | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiTrainingPipelineError | undefined) {
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

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }
}

export class VertexAiTrainingPipelineErrorList extends cdktn.ComplexList {

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
  public get(index: number): VertexAiTrainingPipelineErrorOutputReference {
    return new VertexAiTrainingPipelineErrorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VertexAiTrainingPipelineEncryptionSpec {
  /**
  * The Cloud KMS resource identifier of the customer-managed encryption key used to protect the training pipeline.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#kms_key_name VertexAiTrainingPipeline#kms_key_name}
  */
  readonly kmsKeyName: string;
}

export function vertexAiTrainingPipelineEncryptionSpecToTerraform(struct?: VertexAiTrainingPipelineEncryptionSpecOutputReference | VertexAiTrainingPipelineEncryptionSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    kms_key_name: cdktn.stringToTerraform(struct!.kmsKeyName),
  }
}


export function vertexAiTrainingPipelineEncryptionSpecToHclTerraform(struct?: VertexAiTrainingPipelineEncryptionSpecOutputReference | VertexAiTrainingPipelineEncryptionSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    kms_key_name: {
      value: cdktn.stringToHclTerraform(struct!.kmsKeyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiTrainingPipelineEncryptionSpecOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiTrainingPipelineEncryptionSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyName = this._kmsKeyName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiTrainingPipelineEncryptionSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsKeyName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsKeyName = value.kmsKeyName;
    }
  }

  // kms_key_name - computed: false, optional: false, required: true
  private _kmsKeyName?: string; 
  public get kmsKeyName() {
    return this.getStringAttribute('kms_key_name');
  }
  public set kmsKeyName(value: string) {
    this._kmsKeyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyNameInput() {
    return this._kmsKeyName;
  }
}
export interface VertexAiTrainingPipelineInputDataConfigBigqueryDestination {
  /**
  * The BigQuery table to which the output is to be written.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#output_uri VertexAiTrainingPipeline#output_uri}
  */
  readonly outputUri: string;
}

export function vertexAiTrainingPipelineInputDataConfigBigqueryDestinationToTerraform(struct?: VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference | VertexAiTrainingPipelineInputDataConfigBigqueryDestination): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    output_uri: cdktn.stringToTerraform(struct!.outputUri),
  }
}


export function vertexAiTrainingPipelineInputDataConfigBigqueryDestinationToHclTerraform(struct?: VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference | VertexAiTrainingPipelineInputDataConfigBigqueryDestination): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    output_uri: {
      value: cdktn.stringToHclTerraform(struct!.outputUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiTrainingPipelineInputDataConfigBigqueryDestination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._outputUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputUri = this._outputUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiTrainingPipelineInputDataConfigBigqueryDestination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._outputUri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._outputUri = value.outputUri;
    }
  }

  // output_uri - computed: false, optional: false, required: true
  private _outputUri?: string; 
  public get outputUri() {
    return this.getStringAttribute('output_uri');
  }
  public set outputUri(value: string) {
    this._outputUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outputUriInput() {
    return this._outputUri;
  }
}
export interface VertexAiTrainingPipelineInputDataConfigFilterSplit {
  /**
  * A filter on DataItems of the Dataset for test set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#test_filter VertexAiTrainingPipeline#test_filter}
  */
  readonly testFilter: string;
  /**
  * A filter on DataItems of the Dataset for training set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#training_filter VertexAiTrainingPipeline#training_filter}
  */
  readonly trainingFilter: string;
  /**
  * A filter on DataItems of the Dataset for validation set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#validation_filter VertexAiTrainingPipeline#validation_filter}
  */
  readonly validationFilter: string;
}

export function vertexAiTrainingPipelineInputDataConfigFilterSplitToTerraform(struct?: VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference | VertexAiTrainingPipelineInputDataConfigFilterSplit): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    test_filter: cdktn.stringToTerraform(struct!.testFilter),
    training_filter: cdktn.stringToTerraform(struct!.trainingFilter),
    validation_filter: cdktn.stringToTerraform(struct!.validationFilter),
  }
}


export function vertexAiTrainingPipelineInputDataConfigFilterSplitToHclTerraform(struct?: VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference | VertexAiTrainingPipelineInputDataConfigFilterSplit): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    test_filter: {
      value: cdktn.stringToHclTerraform(struct!.testFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    training_filter: {
      value: cdktn.stringToHclTerraform(struct!.trainingFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    validation_filter: {
      value: cdktn.stringToHclTerraform(struct!.validationFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiTrainingPipelineInputDataConfigFilterSplit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._testFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.testFilter = this._testFilter;
    }
    if (this._trainingFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.trainingFilter = this._trainingFilter;
    }
    if (this._validationFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.validationFilter = this._validationFilter;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiTrainingPipelineInputDataConfigFilterSplit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._testFilter = undefined;
      this._trainingFilter = undefined;
      this._validationFilter = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._testFilter = value.testFilter;
      this._trainingFilter = value.trainingFilter;
      this._validationFilter = value.validationFilter;
    }
  }

  // test_filter - computed: false, optional: false, required: true
  private _testFilter?: string; 
  public get testFilter() {
    return this.getStringAttribute('test_filter');
  }
  public set testFilter(value: string) {
    this._testFilter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get testFilterInput() {
    return this._testFilter;
  }

  // training_filter - computed: false, optional: false, required: true
  private _trainingFilter?: string; 
  public get trainingFilter() {
    return this.getStringAttribute('training_filter');
  }
  public set trainingFilter(value: string) {
    this._trainingFilter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trainingFilterInput() {
    return this._trainingFilter;
  }

  // validation_filter - computed: false, optional: false, required: true
  private _validationFilter?: string; 
  public get validationFilter() {
    return this.getStringAttribute('validation_filter');
  }
  public set validationFilter(value: string) {
    this._validationFilter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get validationFilterInput() {
    return this._validationFilter;
  }
}
export interface VertexAiTrainingPipelineInputDataConfigFractionSplit {
  /**
  * The fraction of the input data that is to be used to evaluate the Model.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#test_fraction VertexAiTrainingPipeline#test_fraction}
  */
  readonly testFraction?: number;
  /**
  * The fraction of the input data that is to be used to train the Model.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#training_fraction VertexAiTrainingPipeline#training_fraction}
  */
  readonly trainingFraction?: number;
  /**
  * The fraction of the input data that is to be used to validate the Model.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#validation_fraction VertexAiTrainingPipeline#validation_fraction}
  */
  readonly validationFraction?: number;
}

export function vertexAiTrainingPipelineInputDataConfigFractionSplitToTerraform(struct?: VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference | VertexAiTrainingPipelineInputDataConfigFractionSplit): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    test_fraction: cdktn.numberToTerraform(struct!.testFraction),
    training_fraction: cdktn.numberToTerraform(struct!.trainingFraction),
    validation_fraction: cdktn.numberToTerraform(struct!.validationFraction),
  }
}


export function vertexAiTrainingPipelineInputDataConfigFractionSplitToHclTerraform(struct?: VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference | VertexAiTrainingPipelineInputDataConfigFractionSplit): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    test_fraction: {
      value: cdktn.numberToHclTerraform(struct!.testFraction),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    training_fraction: {
      value: cdktn.numberToHclTerraform(struct!.trainingFraction),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    validation_fraction: {
      value: cdktn.numberToHclTerraform(struct!.validationFraction),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiTrainingPipelineInputDataConfigFractionSplit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._testFraction !== undefined) {
      hasAnyValues = true;
      internalValueResult.testFraction = this._testFraction;
    }
    if (this._trainingFraction !== undefined) {
      hasAnyValues = true;
      internalValueResult.trainingFraction = this._trainingFraction;
    }
    if (this._validationFraction !== undefined) {
      hasAnyValues = true;
      internalValueResult.validationFraction = this._validationFraction;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiTrainingPipelineInputDataConfigFractionSplit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._testFraction = undefined;
      this._trainingFraction = undefined;
      this._validationFraction = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._testFraction = value.testFraction;
      this._trainingFraction = value.trainingFraction;
      this._validationFraction = value.validationFraction;
    }
  }

  // test_fraction - computed: false, optional: true, required: false
  private _testFraction?: number; 
  public get testFraction() {
    return this.getNumberAttribute('test_fraction');
  }
  public set testFraction(value: number) {
    this._testFraction = value;
  }
  public resetTestFraction() {
    this._testFraction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testFractionInput() {
    return this._testFraction;
  }

  // training_fraction - computed: false, optional: true, required: false
  private _trainingFraction?: number; 
  public get trainingFraction() {
    return this.getNumberAttribute('training_fraction');
  }
  public set trainingFraction(value: number) {
    this._trainingFraction = value;
  }
  public resetTrainingFraction() {
    this._trainingFraction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trainingFractionInput() {
    return this._trainingFraction;
  }

  // validation_fraction - computed: false, optional: true, required: false
  private _validationFraction?: number; 
  public get validationFraction() {
    return this.getNumberAttribute('validation_fraction');
  }
  public set validationFraction(value: number) {
    this._validationFraction = value;
  }
  public resetValidationFraction() {
    this._validationFraction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationFractionInput() {
    return this._validationFraction;
  }
}
export interface VertexAiTrainingPipelineInputDataConfigGcsDestination {
  /**
  * The Cloud Storage URI prefix to write to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#output_uri_prefix VertexAiTrainingPipeline#output_uri_prefix}
  */
  readonly outputUriPrefix: string;
}

export function vertexAiTrainingPipelineInputDataConfigGcsDestinationToTerraform(struct?: VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference | VertexAiTrainingPipelineInputDataConfigGcsDestination): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    output_uri_prefix: cdktn.stringToTerraform(struct!.outputUriPrefix),
  }
}


export function vertexAiTrainingPipelineInputDataConfigGcsDestinationToHclTerraform(struct?: VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference | VertexAiTrainingPipelineInputDataConfigGcsDestination): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    output_uri_prefix: {
      value: cdktn.stringToHclTerraform(struct!.outputUriPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiTrainingPipelineInputDataConfigGcsDestination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._outputUriPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputUriPrefix = this._outputUriPrefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiTrainingPipelineInputDataConfigGcsDestination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._outputUriPrefix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._outputUriPrefix = value.outputUriPrefix;
    }
  }

  // output_uri_prefix - computed: false, optional: false, required: true
  private _outputUriPrefix?: string; 
  public get outputUriPrefix() {
    return this.getStringAttribute('output_uri_prefix');
  }
  public set outputUriPrefix(value: string) {
    this._outputUriPrefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outputUriPrefixInput() {
    return this._outputUriPrefix;
  }
}
export interface VertexAiTrainingPipelineInputDataConfigPredefinedSplit {
  /**
  * The key is a name of one of the Dataset's data columns.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#key VertexAiTrainingPipeline#key}
  */
  readonly key: string;
}

export function vertexAiTrainingPipelineInputDataConfigPredefinedSplitToTerraform(struct?: VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference | VertexAiTrainingPipelineInputDataConfigPredefinedSplit): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
  }
}


export function vertexAiTrainingPipelineInputDataConfigPredefinedSplitToHclTerraform(struct?: VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference | VertexAiTrainingPipelineInputDataConfigPredefinedSplit): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiTrainingPipelineInputDataConfigPredefinedSplit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiTrainingPipelineInputDataConfigPredefinedSplit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }
}
export interface VertexAiTrainingPipelineInputDataConfigStratifiedSplit {
  /**
  * The key is a name of one of the Dataset's data columns.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#key VertexAiTrainingPipeline#key}
  */
  readonly key: string;
  /**
  * The fraction of the input data that is to be used to evaluate the Model.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#test_fraction VertexAiTrainingPipeline#test_fraction}
  */
  readonly testFraction?: number;
  /**
  * The fraction of the input data that is to be used to train the Model.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#training_fraction VertexAiTrainingPipeline#training_fraction}
  */
  readonly trainingFraction?: number;
  /**
  * The fraction of the input data that is to be used to validate the Model.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#validation_fraction VertexAiTrainingPipeline#validation_fraction}
  */
  readonly validationFraction?: number;
}

export function vertexAiTrainingPipelineInputDataConfigStratifiedSplitToTerraform(struct?: VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference | VertexAiTrainingPipelineInputDataConfigStratifiedSplit): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    test_fraction: cdktn.numberToTerraform(struct!.testFraction),
    training_fraction: cdktn.numberToTerraform(struct!.trainingFraction),
    validation_fraction: cdktn.numberToTerraform(struct!.validationFraction),
  }
}


export function vertexAiTrainingPipelineInputDataConfigStratifiedSplitToHclTerraform(struct?: VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference | VertexAiTrainingPipelineInputDataConfigStratifiedSplit): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    test_fraction: {
      value: cdktn.numberToHclTerraform(struct!.testFraction),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    training_fraction: {
      value: cdktn.numberToHclTerraform(struct!.trainingFraction),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    validation_fraction: {
      value: cdktn.numberToHclTerraform(struct!.validationFraction),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiTrainingPipelineInputDataConfigStratifiedSplit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._testFraction !== undefined) {
      hasAnyValues = true;
      internalValueResult.testFraction = this._testFraction;
    }
    if (this._trainingFraction !== undefined) {
      hasAnyValues = true;
      internalValueResult.trainingFraction = this._trainingFraction;
    }
    if (this._validationFraction !== undefined) {
      hasAnyValues = true;
      internalValueResult.validationFraction = this._validationFraction;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiTrainingPipelineInputDataConfigStratifiedSplit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._testFraction = undefined;
      this._trainingFraction = undefined;
      this._validationFraction = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._testFraction = value.testFraction;
      this._trainingFraction = value.trainingFraction;
      this._validationFraction = value.validationFraction;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // test_fraction - computed: false, optional: true, required: false
  private _testFraction?: number; 
  public get testFraction() {
    return this.getNumberAttribute('test_fraction');
  }
  public set testFraction(value: number) {
    this._testFraction = value;
  }
  public resetTestFraction() {
    this._testFraction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testFractionInput() {
    return this._testFraction;
  }

  // training_fraction - computed: false, optional: true, required: false
  private _trainingFraction?: number; 
  public get trainingFraction() {
    return this.getNumberAttribute('training_fraction');
  }
  public set trainingFraction(value: number) {
    this._trainingFraction = value;
  }
  public resetTrainingFraction() {
    this._trainingFraction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trainingFractionInput() {
    return this._trainingFraction;
  }

  // validation_fraction - computed: false, optional: true, required: false
  private _validationFraction?: number; 
  public get validationFraction() {
    return this.getNumberAttribute('validation_fraction');
  }
  public set validationFraction(value: number) {
    this._validationFraction = value;
  }
  public resetValidationFraction() {
    this._validationFraction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationFractionInput() {
    return this._validationFraction;
  }
}
export interface VertexAiTrainingPipelineInputDataConfigTimestampSplit {
  /**
  * The key is a name of one of the Dataset's data columns.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#key VertexAiTrainingPipeline#key}
  */
  readonly key: string;
  /**
  * The fraction of the input data that is to be used to evaluate the Model.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#test_fraction VertexAiTrainingPipeline#test_fraction}
  */
  readonly testFraction?: number;
  /**
  * The fraction of the input data that is to be used to train the Model.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#training_fraction VertexAiTrainingPipeline#training_fraction}
  */
  readonly trainingFraction?: number;
  /**
  * The fraction of the input data that is to be used to validate the Model.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#validation_fraction VertexAiTrainingPipeline#validation_fraction}
  */
  readonly validationFraction?: number;
}

export function vertexAiTrainingPipelineInputDataConfigTimestampSplitToTerraform(struct?: VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference | VertexAiTrainingPipelineInputDataConfigTimestampSplit): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    test_fraction: cdktn.numberToTerraform(struct!.testFraction),
    training_fraction: cdktn.numberToTerraform(struct!.trainingFraction),
    validation_fraction: cdktn.numberToTerraform(struct!.validationFraction),
  }
}


export function vertexAiTrainingPipelineInputDataConfigTimestampSplitToHclTerraform(struct?: VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference | VertexAiTrainingPipelineInputDataConfigTimestampSplit): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    test_fraction: {
      value: cdktn.numberToHclTerraform(struct!.testFraction),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    training_fraction: {
      value: cdktn.numberToHclTerraform(struct!.trainingFraction),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    validation_fraction: {
      value: cdktn.numberToHclTerraform(struct!.validationFraction),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiTrainingPipelineInputDataConfigTimestampSplit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._testFraction !== undefined) {
      hasAnyValues = true;
      internalValueResult.testFraction = this._testFraction;
    }
    if (this._trainingFraction !== undefined) {
      hasAnyValues = true;
      internalValueResult.trainingFraction = this._trainingFraction;
    }
    if (this._validationFraction !== undefined) {
      hasAnyValues = true;
      internalValueResult.validationFraction = this._validationFraction;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiTrainingPipelineInputDataConfigTimestampSplit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._testFraction = undefined;
      this._trainingFraction = undefined;
      this._validationFraction = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._testFraction = value.testFraction;
      this._trainingFraction = value.trainingFraction;
      this._validationFraction = value.validationFraction;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // test_fraction - computed: false, optional: true, required: false
  private _testFraction?: number; 
  public get testFraction() {
    return this.getNumberAttribute('test_fraction');
  }
  public set testFraction(value: number) {
    this._testFraction = value;
  }
  public resetTestFraction() {
    this._testFraction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testFractionInput() {
    return this._testFraction;
  }

  // training_fraction - computed: false, optional: true, required: false
  private _trainingFraction?: number; 
  public get trainingFraction() {
    return this.getNumberAttribute('training_fraction');
  }
  public set trainingFraction(value: number) {
    this._trainingFraction = value;
  }
  public resetTrainingFraction() {
    this._trainingFraction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trainingFractionInput() {
    return this._trainingFraction;
  }

  // validation_fraction - computed: false, optional: true, required: false
  private _validationFraction?: number; 
  public get validationFraction() {
    return this.getNumberAttribute('validation_fraction');
  }
  public set validationFraction(value: number) {
    this._validationFraction = value;
  }
  public resetValidationFraction() {
    this._validationFraction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationFractionInput() {
    return this._validationFraction;
  }
}
export interface VertexAiTrainingPipelineInputDataConfig {
  /**
  * Applicable only to custom training with Datasets that have DataItems and Annotations. Cloud Storage URI that points to a YAML file describing the annotation schema.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#annotation_schema_uri VertexAiTrainingPipeline#annotation_schema_uri}
  */
  readonly annotationSchemaUri?: string;
  /**
  * Applicable only to Datasets that have DataItems and Annotations. A filter on Annotations of the Dataset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#annotations_filter VertexAiTrainingPipeline#annotations_filter}
  */
  readonly annotationsFilter?: string;
  /**
  * The ID of the Dataset in the same Project and Location which data will be used to train the Model.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#dataset_id VertexAiTrainingPipeline#dataset_id}
  */
  readonly datasetId: string;
  /**
  * Whether to persist the ML use assignment to data item system labels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#persist_ml_use_assignment VertexAiTrainingPipeline#persist_ml_use_assignment}
  */
  readonly persistMlUseAssignment?: boolean | cdktn.IResolvable;
  /**
  * Only applicable to Datasets that have SavedQueries. The ID of a SavedQuery under the Dataset specified by dataset_id used for filtering Annotations for training.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#saved_query_id VertexAiTrainingPipeline#saved_query_id}
  */
  readonly savedQueryId?: string;
  /**
  * bigquery_destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#bigquery_destination VertexAiTrainingPipeline#bigquery_destination}
  */
  readonly bigqueryDestination?: VertexAiTrainingPipelineInputDataConfigBigqueryDestination;
  /**
  * filter_split block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#filter_split VertexAiTrainingPipeline#filter_split}
  */
  readonly filterSplit?: VertexAiTrainingPipelineInputDataConfigFilterSplit;
  /**
  * fraction_split block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#fraction_split VertexAiTrainingPipeline#fraction_split}
  */
  readonly fractionSplit?: VertexAiTrainingPipelineInputDataConfigFractionSplit;
  /**
  * gcs_destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#gcs_destination VertexAiTrainingPipeline#gcs_destination}
  */
  readonly gcsDestination?: VertexAiTrainingPipelineInputDataConfigGcsDestination;
  /**
  * predefined_split block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#predefined_split VertexAiTrainingPipeline#predefined_split}
  */
  readonly predefinedSplit?: VertexAiTrainingPipelineInputDataConfigPredefinedSplit;
  /**
  * stratified_split block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#stratified_split VertexAiTrainingPipeline#stratified_split}
  */
  readonly stratifiedSplit?: VertexAiTrainingPipelineInputDataConfigStratifiedSplit;
  /**
  * timestamp_split block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#timestamp_split VertexAiTrainingPipeline#timestamp_split}
  */
  readonly timestampSplit?: VertexAiTrainingPipelineInputDataConfigTimestampSplit;
}

export function vertexAiTrainingPipelineInputDataConfigToTerraform(struct?: VertexAiTrainingPipelineInputDataConfigOutputReference | VertexAiTrainingPipelineInputDataConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    annotation_schema_uri: cdktn.stringToTerraform(struct!.annotationSchemaUri),
    annotations_filter: cdktn.stringToTerraform(struct!.annotationsFilter),
    dataset_id: cdktn.stringToTerraform(struct!.datasetId),
    persist_ml_use_assignment: cdktn.booleanToTerraform(struct!.persistMlUseAssignment),
    saved_query_id: cdktn.stringToTerraform(struct!.savedQueryId),
    bigquery_destination: vertexAiTrainingPipelineInputDataConfigBigqueryDestinationToTerraform(struct!.bigqueryDestination),
    filter_split: vertexAiTrainingPipelineInputDataConfigFilterSplitToTerraform(struct!.filterSplit),
    fraction_split: vertexAiTrainingPipelineInputDataConfigFractionSplitToTerraform(struct!.fractionSplit),
    gcs_destination: vertexAiTrainingPipelineInputDataConfigGcsDestinationToTerraform(struct!.gcsDestination),
    predefined_split: vertexAiTrainingPipelineInputDataConfigPredefinedSplitToTerraform(struct!.predefinedSplit),
    stratified_split: vertexAiTrainingPipelineInputDataConfigStratifiedSplitToTerraform(struct!.stratifiedSplit),
    timestamp_split: vertexAiTrainingPipelineInputDataConfigTimestampSplitToTerraform(struct!.timestampSplit),
  }
}


export function vertexAiTrainingPipelineInputDataConfigToHclTerraform(struct?: VertexAiTrainingPipelineInputDataConfigOutputReference | VertexAiTrainingPipelineInputDataConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    annotation_schema_uri: {
      value: cdktn.stringToHclTerraform(struct!.annotationSchemaUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    annotations_filter: {
      value: cdktn.stringToHclTerraform(struct!.annotationsFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dataset_id: {
      value: cdktn.stringToHclTerraform(struct!.datasetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    persist_ml_use_assignment: {
      value: cdktn.booleanToHclTerraform(struct!.persistMlUseAssignment),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    saved_query_id: {
      value: cdktn.stringToHclTerraform(struct!.savedQueryId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bigquery_destination: {
      value: vertexAiTrainingPipelineInputDataConfigBigqueryDestinationToHclTerraform(struct!.bigqueryDestination),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiTrainingPipelineInputDataConfigBigqueryDestinationList",
    },
    filter_split: {
      value: vertexAiTrainingPipelineInputDataConfigFilterSplitToHclTerraform(struct!.filterSplit),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiTrainingPipelineInputDataConfigFilterSplitList",
    },
    fraction_split: {
      value: vertexAiTrainingPipelineInputDataConfigFractionSplitToHclTerraform(struct!.fractionSplit),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiTrainingPipelineInputDataConfigFractionSplitList",
    },
    gcs_destination: {
      value: vertexAiTrainingPipelineInputDataConfigGcsDestinationToHclTerraform(struct!.gcsDestination),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiTrainingPipelineInputDataConfigGcsDestinationList",
    },
    predefined_split: {
      value: vertexAiTrainingPipelineInputDataConfigPredefinedSplitToHclTerraform(struct!.predefinedSplit),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiTrainingPipelineInputDataConfigPredefinedSplitList",
    },
    stratified_split: {
      value: vertexAiTrainingPipelineInputDataConfigStratifiedSplitToHclTerraform(struct!.stratifiedSplit),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiTrainingPipelineInputDataConfigStratifiedSplitList",
    },
    timestamp_split: {
      value: vertexAiTrainingPipelineInputDataConfigTimestampSplitToHclTerraform(struct!.timestampSplit),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiTrainingPipelineInputDataConfigTimestampSplitList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiTrainingPipelineInputDataConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiTrainingPipelineInputDataConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotationSchemaUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotationSchemaUri = this._annotationSchemaUri;
    }
    if (this._annotationsFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotationsFilter = this._annotationsFilter;
    }
    if (this._datasetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasetId = this._datasetId;
    }
    if (this._persistMlUseAssignment !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistMlUseAssignment = this._persistMlUseAssignment;
    }
    if (this._savedQueryId !== undefined) {
      hasAnyValues = true;
      internalValueResult.savedQueryId = this._savedQueryId;
    }
    if (this._bigqueryDestination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bigqueryDestination = this._bigqueryDestination?.internalValue;
    }
    if (this._filterSplit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterSplit = this._filterSplit?.internalValue;
    }
    if (this._fractionSplit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fractionSplit = this._fractionSplit?.internalValue;
    }
    if (this._gcsDestination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcsDestination = this._gcsDestination?.internalValue;
    }
    if (this._predefinedSplit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.predefinedSplit = this._predefinedSplit?.internalValue;
    }
    if (this._stratifiedSplit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stratifiedSplit = this._stratifiedSplit?.internalValue;
    }
    if (this._timestampSplit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestampSplit = this._timestampSplit?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiTrainingPipelineInputDataConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._annotationSchemaUri = undefined;
      this._annotationsFilter = undefined;
      this._datasetId = undefined;
      this._persistMlUseAssignment = undefined;
      this._savedQueryId = undefined;
      this._bigqueryDestination.internalValue = undefined;
      this._filterSplit.internalValue = undefined;
      this._fractionSplit.internalValue = undefined;
      this._gcsDestination.internalValue = undefined;
      this._predefinedSplit.internalValue = undefined;
      this._stratifiedSplit.internalValue = undefined;
      this._timestampSplit.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._annotationSchemaUri = value.annotationSchemaUri;
      this._annotationsFilter = value.annotationsFilter;
      this._datasetId = value.datasetId;
      this._persistMlUseAssignment = value.persistMlUseAssignment;
      this._savedQueryId = value.savedQueryId;
      this._bigqueryDestination.internalValue = value.bigqueryDestination;
      this._filterSplit.internalValue = value.filterSplit;
      this._fractionSplit.internalValue = value.fractionSplit;
      this._gcsDestination.internalValue = value.gcsDestination;
      this._predefinedSplit.internalValue = value.predefinedSplit;
      this._stratifiedSplit.internalValue = value.stratifiedSplit;
      this._timestampSplit.internalValue = value.timestampSplit;
    }
  }

  // annotation_schema_uri - computed: false, optional: true, required: false
  private _annotationSchemaUri?: string; 
  public get annotationSchemaUri() {
    return this.getStringAttribute('annotation_schema_uri');
  }
  public set annotationSchemaUri(value: string) {
    this._annotationSchemaUri = value;
  }
  public resetAnnotationSchemaUri() {
    this._annotationSchemaUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationSchemaUriInput() {
    return this._annotationSchemaUri;
  }

  // annotations_filter - computed: false, optional: true, required: false
  private _annotationsFilter?: string; 
  public get annotationsFilter() {
    return this.getStringAttribute('annotations_filter');
  }
  public set annotationsFilter(value: string) {
    this._annotationsFilter = value;
  }
  public resetAnnotationsFilter() {
    this._annotationsFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsFilterInput() {
    return this._annotationsFilter;
  }

  // dataset_id - computed: false, optional: false, required: true
  private _datasetId?: string; 
  public get datasetId() {
    return this.getStringAttribute('dataset_id');
  }
  public set datasetId(value: string) {
    this._datasetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetIdInput() {
    return this._datasetId;
  }

  // persist_ml_use_assignment - computed: false, optional: true, required: false
  private _persistMlUseAssignment?: boolean | cdktn.IResolvable; 
  public get persistMlUseAssignment() {
    return this.getBooleanAttribute('persist_ml_use_assignment');
  }
  public set persistMlUseAssignment(value: boolean | cdktn.IResolvable) {
    this._persistMlUseAssignment = value;
  }
  public resetPersistMlUseAssignment() {
    this._persistMlUseAssignment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistMlUseAssignmentInput() {
    return this._persistMlUseAssignment;
  }

  // saved_query_id - computed: false, optional: true, required: false
  private _savedQueryId?: string; 
  public get savedQueryId() {
    return this.getStringAttribute('saved_query_id');
  }
  public set savedQueryId(value: string) {
    this._savedQueryId = value;
  }
  public resetSavedQueryId() {
    this._savedQueryId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get savedQueryIdInput() {
    return this._savedQueryId;
  }

  // bigquery_destination - computed: false, optional: true, required: false
  private _bigqueryDestination = new VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference(this, "bigquery_destination");
  public get bigqueryDestination() {
    return this._bigqueryDestination;
  }
  public putBigqueryDestination(value: VertexAiTrainingPipelineInputDataConfigBigqueryDestination) {
    this._bigqueryDestination.internalValue = value;
  }
  public resetBigqueryDestination() {
    this._bigqueryDestination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bigqueryDestinationInput() {
    return this._bigqueryDestination.internalValue;
  }

  // filter_split - computed: false, optional: true, required: false
  private _filterSplit = new VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference(this, "filter_split");
  public get filterSplit() {
    return this._filterSplit;
  }
  public putFilterSplit(value: VertexAiTrainingPipelineInputDataConfigFilterSplit) {
    this._filterSplit.internalValue = value;
  }
  public resetFilterSplit() {
    this._filterSplit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterSplitInput() {
    return this._filterSplit.internalValue;
  }

  // fraction_split - computed: false, optional: true, required: false
  private _fractionSplit = new VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference(this, "fraction_split");
  public get fractionSplit() {
    return this._fractionSplit;
  }
  public putFractionSplit(value: VertexAiTrainingPipelineInputDataConfigFractionSplit) {
    this._fractionSplit.internalValue = value;
  }
  public resetFractionSplit() {
    this._fractionSplit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fractionSplitInput() {
    return this._fractionSplit.internalValue;
  }

  // gcs_destination - computed: false, optional: true, required: false
  private _gcsDestination = new VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference(this, "gcs_destination");
  public get gcsDestination() {
    return this._gcsDestination;
  }
  public putGcsDestination(value: VertexAiTrainingPipelineInputDataConfigGcsDestination) {
    this._gcsDestination.internalValue = value;
  }
  public resetGcsDestination() {
    this._gcsDestination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcsDestinationInput() {
    return this._gcsDestination.internalValue;
  }

  // predefined_split - computed: false, optional: true, required: false
  private _predefinedSplit = new VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference(this, "predefined_split");
  public get predefinedSplit() {
    return this._predefinedSplit;
  }
  public putPredefinedSplit(value: VertexAiTrainingPipelineInputDataConfigPredefinedSplit) {
    this._predefinedSplit.internalValue = value;
  }
  public resetPredefinedSplit() {
    this._predefinedSplit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predefinedSplitInput() {
    return this._predefinedSplit.internalValue;
  }

  // stratified_split - computed: false, optional: true, required: false
  private _stratifiedSplit = new VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference(this, "stratified_split");
  public get stratifiedSplit() {
    return this._stratifiedSplit;
  }
  public putStratifiedSplit(value: VertexAiTrainingPipelineInputDataConfigStratifiedSplit) {
    this._stratifiedSplit.internalValue = value;
  }
  public resetStratifiedSplit() {
    this._stratifiedSplit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stratifiedSplitInput() {
    return this._stratifiedSplit.internalValue;
  }

  // timestamp_split - computed: false, optional: true, required: false
  private _timestampSplit = new VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference(this, "timestamp_split");
  public get timestampSplit() {
    return this._timestampSplit;
  }
  public putTimestampSplit(value: VertexAiTrainingPipelineInputDataConfigTimestampSplit) {
    this._timestampSplit.internalValue = value;
  }
  public resetTimestampSplit() {
    this._timestampSplit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampSplitInput() {
    return this._timestampSplit.internalValue;
  }
}
export interface VertexAiTrainingPipelineModelToUploadContainerSpecEnv {
  /**
  * The name of the environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#name VertexAiTrainingPipeline#name}
  */
  readonly name: string;
  /**
  * The value of the environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#value VertexAiTrainingPipeline#value}
  */
  readonly value: string;
}

export function vertexAiTrainingPipelineModelToUploadContainerSpecEnvToTerraform(struct?: VertexAiTrainingPipelineModelToUploadContainerSpecEnv | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function vertexAiTrainingPipelineModelToUploadContainerSpecEnvToHclTerraform(struct?: VertexAiTrainingPipelineModelToUploadContainerSpecEnv | cdktn.IResolvable): any {
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

export class VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): VertexAiTrainingPipelineModelToUploadContainerSpecEnv | cdktn.IResolvable | undefined {
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

  public set internalValue(value: VertexAiTrainingPipelineModelToUploadContainerSpecEnv | cdktn.IResolvable | undefined) {
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class VertexAiTrainingPipelineModelToUploadContainerSpecEnvList extends cdktn.ComplexList {
  public internalValue? : VertexAiTrainingPipelineModelToUploadContainerSpecEnv[] | cdktn.IResolvable

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
  public get(index: number): VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference {
    return new VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts {
  /**
  * The number of the port on the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#container_port VertexAiTrainingPipeline#container_port}
  */
  readonly containerPort: number;
}

export function vertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsToTerraform(struct?: VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    container_port: cdktn.numberToTerraform(struct!.containerPort),
  }
}


export function vertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsToHclTerraform(struct?: VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    container_port: {
      value: cdktn.numberToHclTerraform(struct!.containerPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerPort = this._containerPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerPort = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerPort = value.containerPort;
    }
  }

  // container_port - computed: false, optional: false, required: true
  private _containerPort?: number; 
  public get containerPort() {
    return this.getNumberAttribute('container_port');
  }
  public set containerPort(value: number) {
    this._containerPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerPortInput() {
    return this._containerPort;
  }
}

export class VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList extends cdktn.ComplexList {
  public internalValue? : VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts[] | cdktn.IResolvable

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
  public get(index: number): VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference {
    return new VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec {
  /**
  * Command is the command line to execute inside the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#command VertexAiTrainingPipeline#command}
  */
  readonly command?: string[];
}

export function vertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecToTerraform(struct?: VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference | VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    command: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.command),
  }
}


export function vertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecToHclTerraform(struct?: VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference | VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    command: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.command),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._command = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._command = value.command;
    }
  }

  // command - computed: false, optional: true, required: false
  private _command?: string[]; 
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[]) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }
}
export interface VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe {
  /**
  * How often (in seconds) to perform the probe.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#period_seconds VertexAiTrainingPipeline#period_seconds}
  */
  readonly periodSeconds?: number;
  /**
  * Number of seconds after which the probe times out.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#timeout_seconds VertexAiTrainingPipeline#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
  /**
  * exec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#exec VertexAiTrainingPipeline#exec}
  */
  readonly exec?: VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec;
}

export function vertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeToTerraform(struct?: VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference | VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    period_seconds: cdktn.numberToTerraform(struct!.periodSeconds),
    timeout_seconds: cdktn.numberToTerraform(struct!.timeoutSeconds),
    exec: vertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecToTerraform(struct!.exec),
  }
}


export function vertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeToHclTerraform(struct?: VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference | VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    period_seconds: {
      value: cdktn.numberToHclTerraform(struct!.periodSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout_seconds: {
      value: cdktn.numberToHclTerraform(struct!.timeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exec: {
      value: vertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecToHclTerraform(struct!.exec),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._periodSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.periodSeconds = this._periodSeconds;
    }
    if (this._timeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSeconds = this._timeoutSeconds;
    }
    if (this._exec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exec = this._exec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._periodSeconds = undefined;
      this._timeoutSeconds = undefined;
      this._exec.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._periodSeconds = value.periodSeconds;
      this._timeoutSeconds = value.timeoutSeconds;
      this._exec.internalValue = value.exec;
    }
  }

  // period_seconds - computed: false, optional: true, required: false
  private _periodSeconds?: number; 
  public get periodSeconds() {
    return this.getNumberAttribute('period_seconds');
  }
  public set periodSeconds(value: number) {
    this._periodSeconds = value;
  }
  public resetPeriodSeconds() {
    this._periodSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodSecondsInput() {
    return this._periodSeconds;
  }

  // timeout_seconds - computed: false, optional: true, required: false
  private _timeoutSeconds?: number; 
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
  public set timeoutSeconds(value: number) {
    this._timeoutSeconds = value;
  }
  public resetTimeoutSeconds() {
    this._timeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecondsInput() {
    return this._timeoutSeconds;
  }

  // exec - computed: false, optional: true, required: false
  private _exec = new VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference(this, "exec");
  public get exec() {
    return this._exec;
  }
  public putExec(value: VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec) {
    this._exec.internalValue = value;
  }
  public resetExec() {
    this._exec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get execInput() {
    return this._exec.internalValue;
  }
}
export interface VertexAiTrainingPipelineModelToUploadContainerSpecPorts {
  /**
  * The number of the port on the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#container_port VertexAiTrainingPipeline#container_port}
  */
  readonly containerPort: number;
}

export function vertexAiTrainingPipelineModelToUploadContainerSpecPortsToTerraform(struct?: VertexAiTrainingPipelineModelToUploadContainerSpecPorts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    container_port: cdktn.numberToTerraform(struct!.containerPort),
  }
}


export function vertexAiTrainingPipelineModelToUploadContainerSpecPortsToHclTerraform(struct?: VertexAiTrainingPipelineModelToUploadContainerSpecPorts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    container_port: {
      value: cdktn.numberToHclTerraform(struct!.containerPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): VertexAiTrainingPipelineModelToUploadContainerSpecPorts | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerPort = this._containerPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiTrainingPipelineModelToUploadContainerSpecPorts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerPort = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerPort = value.containerPort;
    }
  }

  // container_port - computed: false, optional: false, required: true
  private _containerPort?: number; 
  public get containerPort() {
    return this.getNumberAttribute('container_port');
  }
  public set containerPort(value: number) {
    this._containerPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerPortInput() {
    return this._containerPort;
  }
}

export class VertexAiTrainingPipelineModelToUploadContainerSpecPortsList extends cdktn.ComplexList {
  public internalValue? : VertexAiTrainingPipelineModelToUploadContainerSpecPorts[] | cdktn.IResolvable

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
  public get(index: number): VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference {
    return new VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec {
  /**
  * Command is the command line to execute inside the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#command VertexAiTrainingPipeline#command}
  */
  readonly command?: string[];
}

export function vertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecToTerraform(struct?: VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference | VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    command: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.command),
  }
}


export function vertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecToHclTerraform(struct?: VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference | VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    command: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.command),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._command = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._command = value.command;
    }
  }

  // command - computed: false, optional: true, required: false
  private _command?: string[]; 
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[]) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }
}
export interface VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe {
  /**
  * How often (in seconds) to perform the probe.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#period_seconds VertexAiTrainingPipeline#period_seconds}
  */
  readonly periodSeconds?: number;
  /**
  * Number of seconds after which the probe times out.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#timeout_seconds VertexAiTrainingPipeline#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
  /**
  * exec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#exec VertexAiTrainingPipeline#exec}
  */
  readonly exec?: VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec;
}

export function vertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeToTerraform(struct?: VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference | VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    period_seconds: cdktn.numberToTerraform(struct!.periodSeconds),
    timeout_seconds: cdktn.numberToTerraform(struct!.timeoutSeconds),
    exec: vertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecToTerraform(struct!.exec),
  }
}


export function vertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeToHclTerraform(struct?: VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference | VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    period_seconds: {
      value: cdktn.numberToHclTerraform(struct!.periodSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout_seconds: {
      value: cdktn.numberToHclTerraform(struct!.timeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exec: {
      value: vertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecToHclTerraform(struct!.exec),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._periodSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.periodSeconds = this._periodSeconds;
    }
    if (this._timeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSeconds = this._timeoutSeconds;
    }
    if (this._exec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exec = this._exec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._periodSeconds = undefined;
      this._timeoutSeconds = undefined;
      this._exec.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._periodSeconds = value.periodSeconds;
      this._timeoutSeconds = value.timeoutSeconds;
      this._exec.internalValue = value.exec;
    }
  }

  // period_seconds - computed: false, optional: true, required: false
  private _periodSeconds?: number; 
  public get periodSeconds() {
    return this.getNumberAttribute('period_seconds');
  }
  public set periodSeconds(value: number) {
    this._periodSeconds = value;
  }
  public resetPeriodSeconds() {
    this._periodSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodSecondsInput() {
    return this._periodSeconds;
  }

  // timeout_seconds - computed: false, optional: true, required: false
  private _timeoutSeconds?: number; 
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
  public set timeoutSeconds(value: number) {
    this._timeoutSeconds = value;
  }
  public resetTimeoutSeconds() {
    this._timeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecondsInput() {
    return this._timeoutSeconds;
  }

  // exec - computed: false, optional: true, required: false
  private _exec = new VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference(this, "exec");
  public get exec() {
    return this._exec;
  }
  public putExec(value: VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec) {
    this._exec.internalValue = value;
  }
  public resetExec() {
    this._exec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get execInput() {
    return this._exec.internalValue;
  }
}
export interface VertexAiTrainingPipelineModelToUploadContainerSpec {
  /**
  * Specifies the arguments to the command when the container starts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#args VertexAiTrainingPipeline#args}
  */
  readonly args?: string[];
  /**
  * Specifies the command that runs when the container starts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#command VertexAiTrainingPipeline#command}
  */
  readonly command?: string[];
  /**
  * Deployment timeout. Limit for deployment timeout is 2 hours.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#deployment_timeout VertexAiTrainingPipeline#deployment_timeout}
  */
  readonly deploymentTimeout?: string;
  /**
  * HTTP path on the container to send health checks to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#health_route VertexAiTrainingPipeline#health_route}
  */
  readonly healthRoute?: string;
  /**
  * URI of the Docker image to be used as the custom container for serving predictions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#image_uri VertexAiTrainingPipeline#image_uri}
  */
  readonly imageUri: string;
  /**
  * HTTP path on the container to send prediction requests to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#predict_route VertexAiTrainingPipeline#predict_route}
  */
  readonly predictRoute?: string;
  /**
  * The amount of the VM memory to reserve as the shared memory for the model in megabytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#shared_memory_size_mb VertexAiTrainingPipeline#shared_memory_size_mb}
  */
  readonly sharedMemorySizeMb?: string;
  /**
  * env block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#env VertexAiTrainingPipeline#env}
  */
  readonly env?: VertexAiTrainingPipelineModelToUploadContainerSpecEnv[] | cdktn.IResolvable;
  /**
  * grpc_ports block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#grpc_ports VertexAiTrainingPipeline#grpc_ports}
  */
  readonly grpcPorts?: VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts[] | cdktn.IResolvable;
  /**
  * health_probe block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#health_probe VertexAiTrainingPipeline#health_probe}
  */
  readonly healthProbe?: VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe;
  /**
  * ports block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#ports VertexAiTrainingPipeline#ports}
  */
  readonly ports?: VertexAiTrainingPipelineModelToUploadContainerSpecPorts[] | cdktn.IResolvable;
  /**
  * startup_probe block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#startup_probe VertexAiTrainingPipeline#startup_probe}
  */
  readonly startupProbe?: VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe;
}

export function vertexAiTrainingPipelineModelToUploadContainerSpecToTerraform(struct?: VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference | VertexAiTrainingPipelineModelToUploadContainerSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    args: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.args),
    command: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.command),
    deployment_timeout: cdktn.stringToTerraform(struct!.deploymentTimeout),
    health_route: cdktn.stringToTerraform(struct!.healthRoute),
    image_uri: cdktn.stringToTerraform(struct!.imageUri),
    predict_route: cdktn.stringToTerraform(struct!.predictRoute),
    shared_memory_size_mb: cdktn.stringToTerraform(struct!.sharedMemorySizeMb),
    env: cdktn.listMapper(vertexAiTrainingPipelineModelToUploadContainerSpecEnvToTerraform, true)(struct!.env),
    grpc_ports: cdktn.listMapper(vertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsToTerraform, true)(struct!.grpcPorts),
    health_probe: vertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeToTerraform(struct!.healthProbe),
    ports: cdktn.listMapper(vertexAiTrainingPipelineModelToUploadContainerSpecPortsToTerraform, true)(struct!.ports),
    startup_probe: vertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeToTerraform(struct!.startupProbe),
  }
}


export function vertexAiTrainingPipelineModelToUploadContainerSpecToHclTerraform(struct?: VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference | VertexAiTrainingPipelineModelToUploadContainerSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    args: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.args),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    command: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.command),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    deployment_timeout: {
      value: cdktn.stringToHclTerraform(struct!.deploymentTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    health_route: {
      value: cdktn.stringToHclTerraform(struct!.healthRoute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_uri: {
      value: cdktn.stringToHclTerraform(struct!.imageUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    predict_route: {
      value: cdktn.stringToHclTerraform(struct!.predictRoute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shared_memory_size_mb: {
      value: cdktn.stringToHclTerraform(struct!.sharedMemorySizeMb),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    env: {
      value: cdktn.listMapperHcl(vertexAiTrainingPipelineModelToUploadContainerSpecEnvToHclTerraform, true)(struct!.env),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiTrainingPipelineModelToUploadContainerSpecEnvList",
    },
    grpc_ports: {
      value: cdktn.listMapperHcl(vertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsToHclTerraform, true)(struct!.grpcPorts),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList",
    },
    health_probe: {
      value: vertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeToHclTerraform(struct!.healthProbe),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeList",
    },
    ports: {
      value: cdktn.listMapperHcl(vertexAiTrainingPipelineModelToUploadContainerSpecPortsToHclTerraform, true)(struct!.ports),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiTrainingPipelineModelToUploadContainerSpecPortsList",
    },
    startup_probe: {
      value: vertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeToHclTerraform(struct!.startupProbe),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiTrainingPipelineModelToUploadContainerSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._args !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args;
    }
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._deploymentTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.deploymentTimeout = this._deploymentTimeout;
    }
    if (this._healthRoute !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthRoute = this._healthRoute;
    }
    if (this._imageUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageUri = this._imageUri;
    }
    if (this._predictRoute !== undefined) {
      hasAnyValues = true;
      internalValueResult.predictRoute = this._predictRoute;
    }
    if (this._sharedMemorySizeMb !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharedMemorySizeMb = this._sharedMemorySizeMb;
    }
    if (this._env?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env?.internalValue;
    }
    if (this._grpcPorts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.grpcPorts = this._grpcPorts?.internalValue;
    }
    if (this._healthProbe?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthProbe = this._healthProbe?.internalValue;
    }
    if (this._ports?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports?.internalValue;
    }
    if (this._startupProbe?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.startupProbe = this._startupProbe?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiTrainingPipelineModelToUploadContainerSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._args = undefined;
      this._command = undefined;
      this._deploymentTimeout = undefined;
      this._healthRoute = undefined;
      this._imageUri = undefined;
      this._predictRoute = undefined;
      this._sharedMemorySizeMb = undefined;
      this._env.internalValue = undefined;
      this._grpcPorts.internalValue = undefined;
      this._healthProbe.internalValue = undefined;
      this._ports.internalValue = undefined;
      this._startupProbe.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._args = value.args;
      this._command = value.command;
      this._deploymentTimeout = value.deploymentTimeout;
      this._healthRoute = value.healthRoute;
      this._imageUri = value.imageUri;
      this._predictRoute = value.predictRoute;
      this._sharedMemorySizeMb = value.sharedMemorySizeMb;
      this._env.internalValue = value.env;
      this._grpcPorts.internalValue = value.grpcPorts;
      this._healthProbe.internalValue = value.healthProbe;
      this._ports.internalValue = value.ports;
      this._startupProbe.internalValue = value.startupProbe;
    }
  }

  // args - computed: false, optional: true, required: false
  private _args?: string[]; 
  public get args() {
    return this.getListAttribute('args');
  }
  public set args(value: string[]) {
    this._args = value;
  }
  public resetArgs() {
    this._args = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsInput() {
    return this._args;
  }

  // command - computed: false, optional: true, required: false
  private _command?: string[]; 
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[]) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // deployment_timeout - computed: false, optional: true, required: false
  private _deploymentTimeout?: string; 
  public get deploymentTimeout() {
    return this.getStringAttribute('deployment_timeout');
  }
  public set deploymentTimeout(value: string) {
    this._deploymentTimeout = value;
  }
  public resetDeploymentTimeout() {
    this._deploymentTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentTimeoutInput() {
    return this._deploymentTimeout;
  }

  // health_route - computed: false, optional: true, required: false
  private _healthRoute?: string; 
  public get healthRoute() {
    return this.getStringAttribute('health_route');
  }
  public set healthRoute(value: string) {
    this._healthRoute = value;
  }
  public resetHealthRoute() {
    this._healthRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthRouteInput() {
    return this._healthRoute;
  }

  // image_uri - computed: false, optional: false, required: true
  private _imageUri?: string; 
  public get imageUri() {
    return this.getStringAttribute('image_uri');
  }
  public set imageUri(value: string) {
    this._imageUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageUriInput() {
    return this._imageUri;
  }

  // predict_route - computed: false, optional: true, required: false
  private _predictRoute?: string; 
  public get predictRoute() {
    return this.getStringAttribute('predict_route');
  }
  public set predictRoute(value: string) {
    this._predictRoute = value;
  }
  public resetPredictRoute() {
    this._predictRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predictRouteInput() {
    return this._predictRoute;
  }

  // shared_memory_size_mb - computed: false, optional: true, required: false
  private _sharedMemorySizeMb?: string; 
  public get sharedMemorySizeMb() {
    return this.getStringAttribute('shared_memory_size_mb');
  }
  public set sharedMemorySizeMb(value: string) {
    this._sharedMemorySizeMb = value;
  }
  public resetSharedMemorySizeMb() {
    this._sharedMemorySizeMb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedMemorySizeMbInput() {
    return this._sharedMemorySizeMb;
  }

  // env - computed: false, optional: true, required: false
  private _env = new VertexAiTrainingPipelineModelToUploadContainerSpecEnvList(this, "env", false);
  public get env() {
    return this._env;
  }
  public putEnv(value: VertexAiTrainingPipelineModelToUploadContainerSpecEnv[] | cdktn.IResolvable) {
    this._env.internalValue = value;
  }
  public resetEnv() {
    this._env.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env.internalValue;
  }

  // grpc_ports - computed: false, optional: true, required: false
  private _grpcPorts = new VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList(this, "grpc_ports", false);
  public get grpcPorts() {
    return this._grpcPorts;
  }
  public putGrpcPorts(value: VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts[] | cdktn.IResolvable) {
    this._grpcPorts.internalValue = value;
  }
  public resetGrpcPorts() {
    this._grpcPorts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpcPortsInput() {
    return this._grpcPorts.internalValue;
  }

  // health_probe - computed: false, optional: true, required: false
  private _healthProbe = new VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference(this, "health_probe");
  public get healthProbe() {
    return this._healthProbe;
  }
  public putHealthProbe(value: VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe) {
    this._healthProbe.internalValue = value;
  }
  public resetHealthProbe() {
    this._healthProbe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthProbeInput() {
    return this._healthProbe.internalValue;
  }

  // ports - computed: false, optional: true, required: false
  private _ports = new VertexAiTrainingPipelineModelToUploadContainerSpecPortsList(this, "ports", false);
  public get ports() {
    return this._ports;
  }
  public putPorts(value: VertexAiTrainingPipelineModelToUploadContainerSpecPorts[] | cdktn.IResolvable) {
    this._ports.internalValue = value;
  }
  public resetPorts() {
    this._ports.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports.internalValue;
  }

  // startup_probe - computed: false, optional: true, required: false
  private _startupProbe = new VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference(this, "startup_probe");
  public get startupProbe() {
    return this._startupProbe;
  }
  public putStartupProbe(value: VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe) {
    this._startupProbe.internalValue = value;
  }
  public resetStartupProbe() {
    this._startupProbe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startupProbeInput() {
    return this._startupProbe.internalValue;
  }
}
export interface VertexAiTrainingPipelineModelToUploadEncryptionSpec {
  /**
  * The Cloud KMS resource identifier of the customer-managed encryption key used to protect the model.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#kms_key_name VertexAiTrainingPipeline#kms_key_name}
  */
  readonly kmsKeyName: string;
}

export function vertexAiTrainingPipelineModelToUploadEncryptionSpecToTerraform(struct?: VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference | VertexAiTrainingPipelineModelToUploadEncryptionSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    kms_key_name: cdktn.stringToTerraform(struct!.kmsKeyName),
  }
}


export function vertexAiTrainingPipelineModelToUploadEncryptionSpecToHclTerraform(struct?: VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference | VertexAiTrainingPipelineModelToUploadEncryptionSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    kms_key_name: {
      value: cdktn.stringToHclTerraform(struct!.kmsKeyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiTrainingPipelineModelToUploadEncryptionSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyName = this._kmsKeyName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiTrainingPipelineModelToUploadEncryptionSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsKeyName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsKeyName = value.kmsKeyName;
    }
  }

  // kms_key_name - computed: false, optional: false, required: true
  private _kmsKeyName?: string; 
  public get kmsKeyName() {
    return this.getStringAttribute('kms_key_name');
  }
  public set kmsKeyName(value: string) {
    this._kmsKeyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyNameInput() {
    return this._kmsKeyName;
  }
}
export interface VertexAiTrainingPipelineModelToUploadExplanationSpec {
  /**
  * Metadata describing the Model's input and output for explanation. This field uses JSON data as a string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#metadata VertexAiTrainingPipeline#metadata}
  */
  readonly metadata?: string;
  /**
  * Parameters that configure explaining of the Model's predictions. This field uses JSON data as a string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#parameters VertexAiTrainingPipeline#parameters}
  */
  readonly parameters?: string;
}

export function vertexAiTrainingPipelineModelToUploadExplanationSpecToTerraform(struct?: VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference | VertexAiTrainingPipelineModelToUploadExplanationSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    metadata: cdktn.stringToTerraform(struct!.metadata),
    parameters: cdktn.stringToTerraform(struct!.parameters),
  }
}


export function vertexAiTrainingPipelineModelToUploadExplanationSpecToHclTerraform(struct?: VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference | VertexAiTrainingPipelineModelToUploadExplanationSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    metadata: {
      value: cdktn.stringToHclTerraform(struct!.metadata),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameters: {
      value: cdktn.stringToHclTerraform(struct!.parameters),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiTrainingPipelineModelToUploadExplanationSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    if (this._parameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiTrainingPipelineModelToUploadExplanationSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metadata = undefined;
      this._parameters = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metadata = value.metadata;
      this._parameters = value.parameters;
    }
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata?: string; 
  public get metadata() {
    return this.getStringAttribute('metadata');
  }
  public set metadata(value: string) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters?: string; 
  public get parameters() {
    return this.getStringAttribute('parameters');
  }
  public set parameters(value: string) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }
}
export interface VertexAiTrainingPipelineModelToUpload {
  /**
  * The path to the directory containing the Model artifact and any of its supporting files.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#artifact_uri VertexAiTrainingPipeline#artifact_uri}
  */
  readonly artifactUri?: string;
  /**
  * The description of the Model.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#description VertexAiTrainingPipeline#description}
  */
  readonly description?: string;
  /**
  * The user-defined name of the Model.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#display_name VertexAiTrainingPipeline#display_name}
  */
  readonly displayName: string;
  /**
  * The labels with user-defined metadata to organize your Models.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#labels VertexAiTrainingPipeline#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * User provided version aliases so that a model version can be referenced using alias.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#version_aliases VertexAiTrainingPipeline#version_aliases}
  */
  readonly versionAliases?: string[];
  /**
  * The description of this version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#version_description VertexAiTrainingPipeline#version_description}
  */
  readonly versionDescription?: string;
  /**
  * container_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#container_spec VertexAiTrainingPipeline#container_spec}
  */
  readonly containerSpec?: VertexAiTrainingPipelineModelToUploadContainerSpec;
  /**
  * encryption_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#encryption_spec VertexAiTrainingPipeline#encryption_spec}
  */
  readonly encryptionSpec?: VertexAiTrainingPipelineModelToUploadEncryptionSpec;
  /**
  * explanation_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#explanation_spec VertexAiTrainingPipeline#explanation_spec}
  */
  readonly explanationSpec?: VertexAiTrainingPipelineModelToUploadExplanationSpec;
}

export function vertexAiTrainingPipelineModelToUploadToTerraform(struct?: VertexAiTrainingPipelineModelToUploadOutputReference | VertexAiTrainingPipelineModelToUpload): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    artifact_uri: cdktn.stringToTerraform(struct!.artifactUri),
    description: cdktn.stringToTerraform(struct!.description),
    display_name: cdktn.stringToTerraform(struct!.displayName),
    labels: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.labels),
    version_aliases: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.versionAliases),
    version_description: cdktn.stringToTerraform(struct!.versionDescription),
    container_spec: vertexAiTrainingPipelineModelToUploadContainerSpecToTerraform(struct!.containerSpec),
    encryption_spec: vertexAiTrainingPipelineModelToUploadEncryptionSpecToTerraform(struct!.encryptionSpec),
    explanation_spec: vertexAiTrainingPipelineModelToUploadExplanationSpecToTerraform(struct!.explanationSpec),
  }
}


export function vertexAiTrainingPipelineModelToUploadToHclTerraform(struct?: VertexAiTrainingPipelineModelToUploadOutputReference | VertexAiTrainingPipelineModelToUpload): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    artifact_uri: {
      value: cdktn.stringToHclTerraform(struct!.artifactUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_name: {
      value: cdktn.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    labels: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    version_aliases: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.versionAliases),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    version_description: {
      value: cdktn.stringToHclTerraform(struct!.versionDescription),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    container_spec: {
      value: vertexAiTrainingPipelineModelToUploadContainerSpecToHclTerraform(struct!.containerSpec),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiTrainingPipelineModelToUploadContainerSpecList",
    },
    encryption_spec: {
      value: vertexAiTrainingPipelineModelToUploadEncryptionSpecToHclTerraform(struct!.encryptionSpec),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiTrainingPipelineModelToUploadEncryptionSpecList",
    },
    explanation_spec: {
      value: vertexAiTrainingPipelineModelToUploadExplanationSpecToHclTerraform(struct!.explanationSpec),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiTrainingPipelineModelToUploadExplanationSpecList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiTrainingPipelineModelToUploadOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiTrainingPipelineModelToUpload | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._artifactUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.artifactUri = this._artifactUri;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._versionAliases !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionAliases = this._versionAliases;
    }
    if (this._versionDescription !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionDescription = this._versionDescription;
    }
    if (this._containerSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerSpec = this._containerSpec?.internalValue;
    }
    if (this._encryptionSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionSpec = this._encryptionSpec?.internalValue;
    }
    if (this._explanationSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.explanationSpec = this._explanationSpec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiTrainingPipelineModelToUpload | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._artifactUri = undefined;
      this._description = undefined;
      this._displayName = undefined;
      this._labels = undefined;
      this._versionAliases = undefined;
      this._versionDescription = undefined;
      this._containerSpec.internalValue = undefined;
      this._encryptionSpec.internalValue = undefined;
      this._explanationSpec.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._artifactUri = value.artifactUri;
      this._description = value.description;
      this._displayName = value.displayName;
      this._labels = value.labels;
      this._versionAliases = value.versionAliases;
      this._versionDescription = value.versionDescription;
      this._containerSpec.internalValue = value.containerSpec;
      this._encryptionSpec.internalValue = value.encryptionSpec;
      this._explanationSpec.internalValue = value.explanationSpec;
    }
  }

  // artifact_uri - computed: false, optional: true, required: false
  private _artifactUri?: string; 
  public get artifactUri() {
    return this.getStringAttribute('artifact_uri');
  }
  public set artifactUri(value: string) {
    this._artifactUri = value;
  }
  public resetArtifactUri() {
    this._artifactUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactUriInput() {
    return this._artifactUri;
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // version_aliases - computed: false, optional: true, required: false
  private _versionAliases?: string[]; 
  public get versionAliases() {
    return this.getListAttribute('version_aliases');
  }
  public set versionAliases(value: string[]) {
    this._versionAliases = value;
  }
  public resetVersionAliases() {
    this._versionAliases = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionAliasesInput() {
    return this._versionAliases;
  }

  // version_description - computed: false, optional: true, required: false
  private _versionDescription?: string; 
  public get versionDescription() {
    return this.getStringAttribute('version_description');
  }
  public set versionDescription(value: string) {
    this._versionDescription = value;
  }
  public resetVersionDescription() {
    this._versionDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionDescriptionInput() {
    return this._versionDescription;
  }

  // container_spec - computed: false, optional: true, required: false
  private _containerSpec = new VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference(this, "container_spec");
  public get containerSpec() {
    return this._containerSpec;
  }
  public putContainerSpec(value: VertexAiTrainingPipelineModelToUploadContainerSpec) {
    this._containerSpec.internalValue = value;
  }
  public resetContainerSpec() {
    this._containerSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerSpecInput() {
    return this._containerSpec.internalValue;
  }

  // encryption_spec - computed: false, optional: true, required: false
  private _encryptionSpec = new VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference(this, "encryption_spec");
  public get encryptionSpec() {
    return this._encryptionSpec;
  }
  public putEncryptionSpec(value: VertexAiTrainingPipelineModelToUploadEncryptionSpec) {
    this._encryptionSpec.internalValue = value;
  }
  public resetEncryptionSpec() {
    this._encryptionSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionSpecInput() {
    return this._encryptionSpec.internalValue;
  }

  // explanation_spec - computed: false, optional: true, required: false
  private _explanationSpec = new VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference(this, "explanation_spec");
  public get explanationSpec() {
    return this._explanationSpec;
  }
  public putExplanationSpec(value: VertexAiTrainingPipelineModelToUploadExplanationSpec) {
    this._explanationSpec.internalValue = value;
  }
  public resetExplanationSpec() {
    this._explanationSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get explanationSpecInput() {
    return this._explanationSpec.internalValue;
  }
}
export interface VertexAiTrainingPipelineTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#create VertexAiTrainingPipeline#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#delete VertexAiTrainingPipeline#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#update VertexAiTrainingPipeline#update}
  */
  readonly update?: string;
}

export function vertexAiTrainingPipelineTimeoutsToTerraform(struct?: VertexAiTrainingPipelineTimeouts | cdktn.IResolvable): any {
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


export function vertexAiTrainingPipelineTimeoutsToHclTerraform(struct?: VertexAiTrainingPipelineTimeouts | cdktn.IResolvable): any {
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

export class VertexAiTrainingPipelineTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VertexAiTrainingPipelineTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: VertexAiTrainingPipelineTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline google_vertex_ai_training_pipeline}
*/
export class VertexAiTrainingPipeline extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_vertex_ai_training_pipeline";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a VertexAiTrainingPipeline resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VertexAiTrainingPipeline to import
  * @param importFromId The id of the existing VertexAiTrainingPipeline that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VertexAiTrainingPipeline to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_vertex_ai_training_pipeline", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline google_vertex_ai_training_pipeline} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VertexAiTrainingPipelineConfig
  */
  public constructor(scope: Construct, id: string, config: VertexAiTrainingPipelineConfig) {
    super(scope, id, {
      terraformResourceType: 'google_vertex_ai_training_pipeline',
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
    this._deletionPolicy = config.deletionPolicy;
    this._displayName = config.displayName;
    this._id = config.id;
    this._labels = config.labels;
    this._modelId = config.modelId;
    this._parentModel = config.parentModel;
    this._project = config.project;
    this._region = config.region;
    this._trainingTaskDefinition = config.trainingTaskDefinition;
    this._trainingTaskInputs = config.trainingTaskInputs;
    this._encryptionSpec.internalValue = config.encryptionSpec;
    this._inputDataConfig.internalValue = config.inputDataConfig;
    this._modelToUpload.internalValue = config.modelToUpload;
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

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktn.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
  }

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    return this.getStringAttribute('end_time');
  }

  // error - computed: true, optional: false, required: false
  private _error = new VertexAiTrainingPipelineErrorList(this, "error", false);
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

  // model_id - computed: false, optional: false, required: true
  private _modelId?: string; 
  public get modelId() {
    return this.getStringAttribute('model_id');
  }
  public set modelId(value: string) {
    this._modelId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelIdInput() {
    return this._modelId;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // parent_model - computed: false, optional: true, required: false
  private _parentModel?: string; 
  public get parentModel() {
    return this.getStringAttribute('parent_model');
  }
  public set parentModel(value: string) {
    this._parentModel = value;
  }
  public resetParentModel() {
    this._parentModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentModelInput() {
    return this._parentModel;
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

  // region - computed: true, optional: true, required: false
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

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
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

  // training_task_definition - computed: false, optional: false, required: true
  private _trainingTaskDefinition?: string; 
  public get trainingTaskDefinition() {
    return this.getStringAttribute('training_task_definition');
  }
  public set trainingTaskDefinition(value: string) {
    this._trainingTaskDefinition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trainingTaskDefinitionInput() {
    return this._trainingTaskDefinition;
  }

  // training_task_inputs - computed: false, optional: false, required: true
  private _trainingTaskInputs?: string; 
  public get trainingTaskInputs() {
    return this.getStringAttribute('training_task_inputs');
  }
  public set trainingTaskInputs(value: string) {
    this._trainingTaskInputs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trainingTaskInputsInput() {
    return this._trainingTaskInputs;
  }

  // training_task_metadata - computed: true, optional: false, required: false
  public get trainingTaskMetadata() {
    return this.getStringAttribute('training_task_metadata');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // encryption_spec - computed: false, optional: true, required: false
  private _encryptionSpec = new VertexAiTrainingPipelineEncryptionSpecOutputReference(this, "encryption_spec");
  public get encryptionSpec() {
    return this._encryptionSpec;
  }
  public putEncryptionSpec(value: VertexAiTrainingPipelineEncryptionSpec) {
    this._encryptionSpec.internalValue = value;
  }
  public resetEncryptionSpec() {
    this._encryptionSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionSpecInput() {
    return this._encryptionSpec.internalValue;
  }

  // input_data_config - computed: false, optional: true, required: false
  private _inputDataConfig = new VertexAiTrainingPipelineInputDataConfigOutputReference(this, "input_data_config");
  public get inputDataConfig() {
    return this._inputDataConfig;
  }
  public putInputDataConfig(value: VertexAiTrainingPipelineInputDataConfig) {
    this._inputDataConfig.internalValue = value;
  }
  public resetInputDataConfig() {
    this._inputDataConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputDataConfigInput() {
    return this._inputDataConfig.internalValue;
  }

  // model_to_upload - computed: false, optional: true, required: false
  private _modelToUpload = new VertexAiTrainingPipelineModelToUploadOutputReference(this, "model_to_upload");
  public get modelToUpload() {
    return this._modelToUpload;
  }
  public putModelToUpload(value: VertexAiTrainingPipelineModelToUpload) {
    this._modelToUpload.internalValue = value;
  }
  public resetModelToUpload() {
    this._modelToUpload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelToUploadInput() {
    return this._modelToUpload.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new VertexAiTrainingPipelineTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: VertexAiTrainingPipelineTimeouts) {
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
      display_name: cdktn.stringToTerraform(this._displayName),
      id: cdktn.stringToTerraform(this._id),
      labels: cdktn.hashMapper(cdktn.stringToTerraform)(this._labels),
      model_id: cdktn.stringToTerraform(this._modelId),
      parent_model: cdktn.stringToTerraform(this._parentModel),
      project: cdktn.stringToTerraform(this._project),
      region: cdktn.stringToTerraform(this._region),
      training_task_definition: cdktn.stringToTerraform(this._trainingTaskDefinition),
      training_task_inputs: cdktn.stringToTerraform(this._trainingTaskInputs),
      encryption_spec: vertexAiTrainingPipelineEncryptionSpecToTerraform(this._encryptionSpec.internalValue),
      input_data_config: vertexAiTrainingPipelineInputDataConfigToTerraform(this._inputDataConfig.internalValue),
      model_to_upload: vertexAiTrainingPipelineModelToUploadToTerraform(this._modelToUpload.internalValue),
      timeouts: vertexAiTrainingPipelineTimeoutsToTerraform(this._timeouts.internalValue),
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
      model_id: {
        value: cdktn.stringToHclTerraform(this._modelId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent_model: {
        value: cdktn.stringToHclTerraform(this._parentModel),
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
      training_task_definition: {
        value: cdktn.stringToHclTerraform(this._trainingTaskDefinition),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      training_task_inputs: {
        value: cdktn.stringToHclTerraform(this._trainingTaskInputs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encryption_spec: {
        value: vertexAiTrainingPipelineEncryptionSpecToHclTerraform(this._encryptionSpec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VertexAiTrainingPipelineEncryptionSpecList",
      },
      input_data_config: {
        value: vertexAiTrainingPipelineInputDataConfigToHclTerraform(this._inputDataConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VertexAiTrainingPipelineInputDataConfigList",
      },
      model_to_upload: {
        value: vertexAiTrainingPipelineModelToUploadToHclTerraform(this._modelToUpload.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VertexAiTrainingPipelineModelToUploadList",
      },
      timeouts: {
        value: vertexAiTrainingPipelineTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VertexAiTrainingPipelineTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
