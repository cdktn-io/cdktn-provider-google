# `dataflowFlexTemplateJob` Submodule <a name="`dataflowFlexTemplateJob` Submodule" id="@cdktn/provider-google.dataflowFlexTemplateJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataflowFlexTemplateJob <a name="DataflowFlexTemplateJob" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job google_dataflow_flex_template_job}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/dataflowflextemplatejob"

dataflowflextemplatejob.NewDataflowFlexTemplateJob(scope Construct, id *string, config DataflowFlexTemplateJobConfig) DataflowFlexTemplateJob
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig">DataflowFlexTemplateJobConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig">DataflowFlexTemplateJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetAdditionalExperiments">ResetAdditionalExperiments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetAdditionalPipelineOptions">ResetAdditionalPipelineOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetAutoscalingAlgorithm">ResetAutoscalingAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetCreateIgnoreAlreadyExists">ResetCreateIgnoreAlreadyExists</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetEnableStreamingEngine">ResetEnableStreamingEngine</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetIpConfiguration">ResetIpConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetKmsKeyName">ResetKmsKeyName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetLauncherMachineType">ResetLauncherMachineType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetMachineType">ResetMachineType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetMaxWorkers">ResetMaxWorkers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetNetwork">ResetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetNumWorkers">ResetNumWorkers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetOnDelete">ResetOnDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetSdkContainerImage">ResetSdkContainerImage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetServiceAccountEmail">ResetServiceAccountEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetSkipWaitOnJobTermination">ResetSkipWaitOnJobTermination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetStagingLocation">ResetStagingLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetSubnetwork">ResetSubnetwork</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetTempLocation">ResetTempLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetTransformNameMapping">ResetTransformNameMapping</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAdditionalExperiments` <a name="ResetAdditionalExperiments" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetAdditionalExperiments"></a>

```go
func ResetAdditionalExperiments()
```

##### `ResetAdditionalPipelineOptions` <a name="ResetAdditionalPipelineOptions" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetAdditionalPipelineOptions"></a>

```go
func ResetAdditionalPipelineOptions()
```

##### `ResetAutoscalingAlgorithm` <a name="ResetAutoscalingAlgorithm" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetAutoscalingAlgorithm"></a>

```go
func ResetAutoscalingAlgorithm()
```

##### `ResetCreateIgnoreAlreadyExists` <a name="ResetCreateIgnoreAlreadyExists" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetCreateIgnoreAlreadyExists"></a>

```go
func ResetCreateIgnoreAlreadyExists()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetEnableStreamingEngine` <a name="ResetEnableStreamingEngine" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetEnableStreamingEngine"></a>

```go
func ResetEnableStreamingEngine()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetId"></a>

```go
func ResetId()
```

##### `ResetIpConfiguration` <a name="ResetIpConfiguration" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetIpConfiguration"></a>

```go
func ResetIpConfiguration()
```

##### `ResetKmsKeyName` <a name="ResetKmsKeyName" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetKmsKeyName"></a>

```go
func ResetKmsKeyName()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetLauncherMachineType` <a name="ResetLauncherMachineType" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetLauncherMachineType"></a>

```go
func ResetLauncherMachineType()
```

##### `ResetMachineType` <a name="ResetMachineType" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetMachineType"></a>

```go
func ResetMachineType()
```

##### `ResetMaxWorkers` <a name="ResetMaxWorkers" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetMaxWorkers"></a>

```go
func ResetMaxWorkers()
```

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetNetwork"></a>

```go
func ResetNetwork()
```

##### `ResetNumWorkers` <a name="ResetNumWorkers" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetNumWorkers"></a>

```go
func ResetNumWorkers()
```

##### `ResetOnDelete` <a name="ResetOnDelete" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetOnDelete"></a>

```go
func ResetOnDelete()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetParameters"></a>

```go
func ResetParameters()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetSdkContainerImage` <a name="ResetSdkContainerImage" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetSdkContainerImage"></a>

```go
func ResetSdkContainerImage()
```

##### `ResetServiceAccountEmail` <a name="ResetServiceAccountEmail" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetServiceAccountEmail"></a>

```go
func ResetServiceAccountEmail()
```

##### `ResetSkipWaitOnJobTermination` <a name="ResetSkipWaitOnJobTermination" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetSkipWaitOnJobTermination"></a>

```go
func ResetSkipWaitOnJobTermination()
```

##### `ResetStagingLocation` <a name="ResetStagingLocation" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetStagingLocation"></a>

```go
func ResetStagingLocation()
```

##### `ResetSubnetwork` <a name="ResetSubnetwork" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetSubnetwork"></a>

```go
func ResetSubnetwork()
```

##### `ResetTempLocation` <a name="ResetTempLocation" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetTempLocation"></a>

```go
func ResetTempLocation()
```

##### `ResetTransformNameMapping` <a name="ResetTransformNameMapping" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetTransformNameMapping"></a>

```go
func ResetTransformNameMapping()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataflowFlexTemplateJob resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/dataflowflextemplatejob"

dataflowflextemplatejob.DataflowFlexTemplateJob_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/dataflowflextemplatejob"

dataflowflextemplatejob.DataflowFlexTemplateJob_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/dataflowflextemplatejob"

dataflowflextemplatejob.DataflowFlexTemplateJob_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/dataflowflextemplatejob"

dataflowflextemplatejob.DataflowFlexTemplateJob_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataflowFlexTemplateJob resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataflowFlexTemplateJob to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataflowFlexTemplateJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataflowFlexTemplateJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.jobId">JobId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.additionalExperimentsInput">AdditionalExperimentsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.additionalPipelineOptionsInput">AdditionalPipelineOptionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.autoscalingAlgorithmInput">AutoscalingAlgorithmInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.containerSpecGcsPathInput">ContainerSpecGcsPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.createIgnoreAlreadyExistsInput">CreateIgnoreAlreadyExistsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.enableStreamingEngineInput">EnableStreamingEngineInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.ipConfigurationInput">IpConfigurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.kmsKeyNameInput">KmsKeyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.launcherMachineTypeInput">LauncherMachineTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.machineTypeInput">MachineTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.maxWorkersInput">MaxWorkersInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.networkInput">NetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.numWorkersInput">NumWorkersInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.onDeleteInput">OnDeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.parametersInput">ParametersInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.sdkContainerImageInput">SdkContainerImageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.serviceAccountEmailInput">ServiceAccountEmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.skipWaitOnJobTerminationInput">SkipWaitOnJobTerminationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.stagingLocationInput">StagingLocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.subnetworkInput">SubnetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.tempLocationInput">TempLocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.transformNameMappingInput">TransformNameMappingInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.additionalExperiments">AdditionalExperiments</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.additionalPipelineOptions">AdditionalPipelineOptions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.autoscalingAlgorithm">AutoscalingAlgorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.containerSpecGcsPath">ContainerSpecGcsPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.createIgnoreAlreadyExists">CreateIgnoreAlreadyExists</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.enableStreamingEngine">EnableStreamingEngine</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.ipConfiguration">IpConfiguration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.launcherMachineType">LauncherMachineType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.machineType">MachineType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.maxWorkers">MaxWorkers</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.numWorkers">NumWorkers</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.onDelete">OnDelete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.parameters">Parameters</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.sdkContainerImage">SdkContainerImage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.serviceAccountEmail">ServiceAccountEmail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.skipWaitOnJobTermination">SkipWaitOnJobTermination</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.stagingLocation">StagingLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.subnetwork">Subnetwork</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.tempLocation">TempLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.transformNameMapping">TransformNameMapping</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `JobId`<sup>Required</sup> <a name="JobId" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.jobId"></a>

```go
func JobId() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `AdditionalExperimentsInput`<sup>Optional</sup> <a name="AdditionalExperimentsInput" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.additionalExperimentsInput"></a>

```go
func AdditionalExperimentsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AdditionalPipelineOptionsInput`<sup>Optional</sup> <a name="AdditionalPipelineOptionsInput" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.additionalPipelineOptionsInput"></a>

```go
func AdditionalPipelineOptionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AutoscalingAlgorithmInput`<sup>Optional</sup> <a name="AutoscalingAlgorithmInput" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.autoscalingAlgorithmInput"></a>

```go
func AutoscalingAlgorithmInput() *string
```

- *Type:* *string

---

##### `ContainerSpecGcsPathInput`<sup>Optional</sup> <a name="ContainerSpecGcsPathInput" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.containerSpecGcsPathInput"></a>

```go
func ContainerSpecGcsPathInput() *string
```

- *Type:* *string

---

##### `CreateIgnoreAlreadyExistsInput`<sup>Optional</sup> <a name="CreateIgnoreAlreadyExistsInput" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.createIgnoreAlreadyExistsInput"></a>

```go
func CreateIgnoreAlreadyExistsInput() interface{}
```

- *Type:* interface{}

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `EnableStreamingEngineInput`<sup>Optional</sup> <a name="EnableStreamingEngineInput" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.enableStreamingEngineInput"></a>

```go
func EnableStreamingEngineInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IpConfigurationInput`<sup>Optional</sup> <a name="IpConfigurationInput" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.ipConfigurationInput"></a>

```go
func IpConfigurationInput() *string
```

- *Type:* *string

---

##### `KmsKeyNameInput`<sup>Optional</sup> <a name="KmsKeyNameInput" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.kmsKeyNameInput"></a>

```go
func KmsKeyNameInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LauncherMachineTypeInput`<sup>Optional</sup> <a name="LauncherMachineTypeInput" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.launcherMachineTypeInput"></a>

```go
func LauncherMachineTypeInput() *string
```

- *Type:* *string

---

##### `MachineTypeInput`<sup>Optional</sup> <a name="MachineTypeInput" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.machineTypeInput"></a>

```go
func MachineTypeInput() *string
```

- *Type:* *string

---

##### `MaxWorkersInput`<sup>Optional</sup> <a name="MaxWorkersInput" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.maxWorkersInput"></a>

```go
func MaxWorkersInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.networkInput"></a>

```go
func NetworkInput() *string
```

- *Type:* *string

---

##### `NumWorkersInput`<sup>Optional</sup> <a name="NumWorkersInput" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.numWorkersInput"></a>

```go
func NumWorkersInput() *f64
```

- *Type:* *f64

---

##### `OnDeleteInput`<sup>Optional</sup> <a name="OnDeleteInput" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.onDeleteInput"></a>

```go
func OnDeleteInput() *string
```

- *Type:* *string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.parametersInput"></a>

```go
func ParametersInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `SdkContainerImageInput`<sup>Optional</sup> <a name="SdkContainerImageInput" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.sdkContainerImageInput"></a>

```go
func SdkContainerImageInput() *string
```

- *Type:* *string

---

##### `ServiceAccountEmailInput`<sup>Optional</sup> <a name="ServiceAccountEmailInput" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.serviceAccountEmailInput"></a>

```go
func ServiceAccountEmailInput() *string
```

- *Type:* *string

---

##### `SkipWaitOnJobTerminationInput`<sup>Optional</sup> <a name="SkipWaitOnJobTerminationInput" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.skipWaitOnJobTerminationInput"></a>

```go
func SkipWaitOnJobTerminationInput() interface{}
```

- *Type:* interface{}

---

##### `StagingLocationInput`<sup>Optional</sup> <a name="StagingLocationInput" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.stagingLocationInput"></a>

```go
func StagingLocationInput() *string
```

- *Type:* *string

---

##### `SubnetworkInput`<sup>Optional</sup> <a name="SubnetworkInput" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.subnetworkInput"></a>

```go
func SubnetworkInput() *string
```

- *Type:* *string

---

##### `TempLocationInput`<sup>Optional</sup> <a name="TempLocationInput" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.tempLocationInput"></a>

```go
func TempLocationInput() *string
```

- *Type:* *string

---

##### `TransformNameMappingInput`<sup>Optional</sup> <a name="TransformNameMappingInput" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.transformNameMappingInput"></a>

```go
func TransformNameMappingInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `AdditionalExperiments`<sup>Required</sup> <a name="AdditionalExperiments" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.additionalExperiments"></a>

```go
func AdditionalExperiments() *[]*string
```

- *Type:* *[]*string

---

##### `AdditionalPipelineOptions`<sup>Required</sup> <a name="AdditionalPipelineOptions" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.additionalPipelineOptions"></a>

```go
func AdditionalPipelineOptions() *[]*string
```

- *Type:* *[]*string

---

##### `AutoscalingAlgorithm`<sup>Required</sup> <a name="AutoscalingAlgorithm" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.autoscalingAlgorithm"></a>

```go
func AutoscalingAlgorithm() *string
```

- *Type:* *string

---

##### `ContainerSpecGcsPath`<sup>Required</sup> <a name="ContainerSpecGcsPath" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.containerSpecGcsPath"></a>

```go
func ContainerSpecGcsPath() *string
```

- *Type:* *string

---

##### `CreateIgnoreAlreadyExists`<sup>Required</sup> <a name="CreateIgnoreAlreadyExists" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.createIgnoreAlreadyExists"></a>

```go
func CreateIgnoreAlreadyExists() interface{}
```

- *Type:* interface{}

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `EnableStreamingEngine`<sup>Required</sup> <a name="EnableStreamingEngine" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.enableStreamingEngine"></a>

```go
func EnableStreamingEngine() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IpConfiguration`<sup>Required</sup> <a name="IpConfiguration" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.ipConfiguration"></a>

```go
func IpConfiguration() *string
```

- *Type:* *string

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.kmsKeyName"></a>

```go
func KmsKeyName() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LauncherMachineType`<sup>Required</sup> <a name="LauncherMachineType" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.launcherMachineType"></a>

```go
func LauncherMachineType() *string
```

- *Type:* *string

---

##### `MachineType`<sup>Required</sup> <a name="MachineType" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.machineType"></a>

```go
func MachineType() *string
```

- *Type:* *string

---

##### `MaxWorkers`<sup>Required</sup> <a name="MaxWorkers" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.maxWorkers"></a>

```go
func MaxWorkers() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `NumWorkers`<sup>Required</sup> <a name="NumWorkers" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.numWorkers"></a>

```go
func NumWorkers() *f64
```

- *Type:* *f64

---

##### `OnDelete`<sup>Required</sup> <a name="OnDelete" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.onDelete"></a>

```go
func OnDelete() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.parameters"></a>

```go
func Parameters() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `SdkContainerImage`<sup>Required</sup> <a name="SdkContainerImage" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.sdkContainerImage"></a>

```go
func SdkContainerImage() *string
```

- *Type:* *string

---

##### `ServiceAccountEmail`<sup>Required</sup> <a name="ServiceAccountEmail" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.serviceAccountEmail"></a>

```go
func ServiceAccountEmail() *string
```

- *Type:* *string

---

##### `SkipWaitOnJobTermination`<sup>Required</sup> <a name="SkipWaitOnJobTermination" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.skipWaitOnJobTermination"></a>

```go
func SkipWaitOnJobTermination() interface{}
```

- *Type:* interface{}

---

##### `StagingLocation`<sup>Required</sup> <a name="StagingLocation" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.stagingLocation"></a>

```go
func StagingLocation() *string
```

- *Type:* *string

---

##### `Subnetwork`<sup>Required</sup> <a name="Subnetwork" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.subnetwork"></a>

```go
func Subnetwork() *string
```

- *Type:* *string

---

##### `TempLocation`<sup>Required</sup> <a name="TempLocation" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.tempLocation"></a>

```go
func TempLocation() *string
```

- *Type:* *string

---

##### `TransformNameMapping`<sup>Required</sup> <a name="TransformNameMapping" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.transformNameMapping"></a>

```go
func TransformNameMapping() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataflowFlexTemplateJobConfig <a name="DataflowFlexTemplateJobConfig" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/dataflowflextemplatejob"

&dataflowflextemplatejob.DataflowFlexTemplateJobConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ContainerSpecGcsPath: *string,
	Name: *string,
	AdditionalExperiments: *[]*string,
	AdditionalPipelineOptions: *[]*string,
	AutoscalingAlgorithm: *string,
	CreateIgnoreAlreadyExists: interface{},
	DeletionPolicy: *string,
	EnableStreamingEngine: interface{},
	Id: *string,
	IpConfiguration: *string,
	KmsKeyName: *string,
	Labels: *map[string]*string,
	LauncherMachineType: *string,
	MachineType: *string,
	MaxWorkers: *f64,
	Network: *string,
	NumWorkers: *f64,
	OnDelete: *string,
	Parameters: *map[string]*string,
	Project: *string,
	Region: *string,
	SdkContainerImage: *string,
	ServiceAccountEmail: *string,
	SkipWaitOnJobTermination: interface{},
	StagingLocation: *string,
	Subnetwork: *string,
	TempLocation: *string,
	TransformNameMapping: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.containerSpecGcsPath">ContainerSpecGcsPath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#container_spec_gcs_path DataflowFlexTemplateJob#container_spec_gcs_path}. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#name DataflowFlexTemplateJob#name}. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.additionalExperiments">AdditionalExperiments</a></code> | <code>*[]*string</code> | List of experiments that should be used by the job. An example value is ["enable_stackdriver_agent_metrics"]. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.additionalPipelineOptions">AdditionalPipelineOptions</a></code> | <code>*[]*string</code> | List of pipeline options that should be used by the job. An example value is ["numberOfWorkerHarnessThreads=20"]. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.autoscalingAlgorithm">AutoscalingAlgorithm</a></code> | <code>*string</code> | The algorithm to use for autoscaling. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.createIgnoreAlreadyExists">CreateIgnoreAlreadyExists</a></code> | <code>interface{}</code> | If true, if a 409 AlreadyExists error is returned on create, the provider will ignore it and adopt the existing resource. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.enableStreamingEngine">EnableStreamingEngine</a></code> | <code>interface{}</code> | Indicates if the job should use the streaming engine feature. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#id DataflowFlexTemplateJob#id}. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.ipConfiguration">IpConfiguration</a></code> | <code>*string</code> | The configuration for VM IPs. Options are "WORKER_IP_PUBLIC" or "WORKER_IP_PRIVATE". |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | The name for the Cloud KMS key for the job. Key format is: projects/PROJECT_ID/locations/LOCATION/keyRings/KEY_RING/cryptoKeys/KEY. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | User labels to be specified for the job. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.launcherMachineType">LauncherMachineType</a></code> | <code>*string</code> | The machine type to use for launching the job. The default is n1-standard-1. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.machineType">MachineType</a></code> | <code>*string</code> | The machine type to use for the job. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.maxWorkers">MaxWorkers</a></code> | <code>*f64</code> | The maximum number of Google Compute Engine instances to be made available to your pipeline during execution, from 1 to 1000. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.network">Network</a></code> | <code>*string</code> | The network to which VMs will be assigned. If it is not provided, "default" will be used. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.numWorkers">NumWorkers</a></code> | <code>*f64</code> | The initial number of Google Compute Engine instances for the job. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.onDelete">OnDelete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#on_delete DataflowFlexTemplateJob#on_delete}. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.parameters">Parameters</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#parameters DataflowFlexTemplateJob#parameters}. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#project DataflowFlexTemplateJob#project}. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.region">Region</a></code> | <code>*string</code> | The region in which the created job should run. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.sdkContainerImage">SdkContainerImage</a></code> | <code>*string</code> | Docker registry location of container image to use for the 'worker harness. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.serviceAccountEmail">ServiceAccountEmail</a></code> | <code>*string</code> | The Service Account email used to create the job. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.skipWaitOnJobTermination">SkipWaitOnJobTermination</a></code> | <code>interface{}</code> | If true, treat DRAINING and CANCELLING as terminal job states and do not wait for further changes before removing from terraform state and moving on. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.stagingLocation">StagingLocation</a></code> | <code>*string</code> | The Cloud Storage path to use for staging files. Must be a valid Cloud Storage URL, beginning with gs://. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.subnetwork">Subnetwork</a></code> | <code>*string</code> | The subnetwork to which VMs will be assigned. Should be of the form "regions/REGION/subnetworks/SUBNETWORK". |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.tempLocation">TempLocation</a></code> | <code>*string</code> | The Cloud Storage path to use for temporary files. Must be a valid Cloud Storage URL, beginning with gs://. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.transformNameMapping">TransformNameMapping</a></code> | <code>*map[string]*string</code> | Only applicable when updating a pipeline. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ContainerSpecGcsPath`<sup>Required</sup> <a name="ContainerSpecGcsPath" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.containerSpecGcsPath"></a>

```go
ContainerSpecGcsPath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#container_spec_gcs_path DataflowFlexTemplateJob#container_spec_gcs_path}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#name DataflowFlexTemplateJob#name}.

---

##### `AdditionalExperiments`<sup>Optional</sup> <a name="AdditionalExperiments" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.additionalExperiments"></a>

```go
AdditionalExperiments *[]*string
```

- *Type:* *[]*string

List of experiments that should be used by the job. An example value is ["enable_stackdriver_agent_metrics"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#additional_experiments DataflowFlexTemplateJob#additional_experiments}

---

##### `AdditionalPipelineOptions`<sup>Optional</sup> <a name="AdditionalPipelineOptions" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.additionalPipelineOptions"></a>

```go
AdditionalPipelineOptions *[]*string
```

- *Type:* *[]*string

List of pipeline options that should be used by the job. An example value is ["numberOfWorkerHarnessThreads=20"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#additional_pipeline_options DataflowFlexTemplateJob#additional_pipeline_options}

---

##### `AutoscalingAlgorithm`<sup>Optional</sup> <a name="AutoscalingAlgorithm" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.autoscalingAlgorithm"></a>

```go
AutoscalingAlgorithm *string
```

- *Type:* *string

The algorithm to use for autoscaling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#autoscaling_algorithm DataflowFlexTemplateJob#autoscaling_algorithm}

---

##### `CreateIgnoreAlreadyExists`<sup>Optional</sup> <a name="CreateIgnoreAlreadyExists" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.createIgnoreAlreadyExists"></a>

```go
CreateIgnoreAlreadyExists interface{}
```

- *Type:* interface{}

If true, if a 409 AlreadyExists error is returned on create, the provider will ignore it and adopt the existing resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#create_ignore_already_exists DataflowFlexTemplateJob#create_ignore_already_exists}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.deletionPolicy"></a>

```go
DeletionPolicy *string
```

- *Type:* *string

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#deletion_policy DataflowFlexTemplateJob#deletion_policy}

---

##### `EnableStreamingEngine`<sup>Optional</sup> <a name="EnableStreamingEngine" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.enableStreamingEngine"></a>

```go
EnableStreamingEngine interface{}
```

- *Type:* interface{}

Indicates if the job should use the streaming engine feature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#enable_streaming_engine DataflowFlexTemplateJob#enable_streaming_engine}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#id DataflowFlexTemplateJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IpConfiguration`<sup>Optional</sup> <a name="IpConfiguration" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.ipConfiguration"></a>

```go
IpConfiguration *string
```

- *Type:* *string

The configuration for VM IPs. Options are "WORKER_IP_PUBLIC" or "WORKER_IP_PRIVATE".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#ip_configuration DataflowFlexTemplateJob#ip_configuration}

---

##### `KmsKeyName`<sup>Optional</sup> <a name="KmsKeyName" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.kmsKeyName"></a>

```go
KmsKeyName *string
```

- *Type:* *string

The name for the Cloud KMS key for the job. Key format is: projects/PROJECT_ID/locations/LOCATION/keyRings/KEY_RING/cryptoKeys/KEY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#kms_key_name DataflowFlexTemplateJob#kms_key_name}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

User labels to be specified for the job.

Keys and values should follow the restrictions specified in the labeling restrictions page. NOTE: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#labels DataflowFlexTemplateJob#labels}

---

##### `LauncherMachineType`<sup>Optional</sup> <a name="LauncherMachineType" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.launcherMachineType"></a>

```go
LauncherMachineType *string
```

- *Type:* *string

The machine type to use for launching the job. The default is n1-standard-1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#launcher_machine_type DataflowFlexTemplateJob#launcher_machine_type}

---

##### `MachineType`<sup>Optional</sup> <a name="MachineType" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.machineType"></a>

```go
MachineType *string
```

- *Type:* *string

The machine type to use for the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#machine_type DataflowFlexTemplateJob#machine_type}

---

##### `MaxWorkers`<sup>Optional</sup> <a name="MaxWorkers" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.maxWorkers"></a>

```go
MaxWorkers *f64
```

- *Type:* *f64

The maximum number of Google Compute Engine instances to be made available to your pipeline during execution, from 1 to 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#max_workers DataflowFlexTemplateJob#max_workers}

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.network"></a>

```go
Network *string
```

- *Type:* *string

The network to which VMs will be assigned. If it is not provided, "default" will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#network DataflowFlexTemplateJob#network}

---

##### `NumWorkers`<sup>Optional</sup> <a name="NumWorkers" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.numWorkers"></a>

```go
NumWorkers *f64
```

- *Type:* *f64

The initial number of Google Compute Engine instances for the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#num_workers DataflowFlexTemplateJob#num_workers}

---

##### `OnDelete`<sup>Optional</sup> <a name="OnDelete" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.onDelete"></a>

```go
OnDelete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#on_delete DataflowFlexTemplateJob#on_delete}.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.parameters"></a>

```go
Parameters *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#parameters DataflowFlexTemplateJob#parameters}.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#project DataflowFlexTemplateJob#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

The region in which the created job should run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#region DataflowFlexTemplateJob#region}

---

##### `SdkContainerImage`<sup>Optional</sup> <a name="SdkContainerImage" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.sdkContainerImage"></a>

```go
SdkContainerImage *string
```

- *Type:* *string

Docker registry location of container image to use for the 'worker harness.

Default is the container for the version of the SDK. Note this field is only valid for portable pipelines.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#sdk_container_image DataflowFlexTemplateJob#sdk_container_image}

---

##### `ServiceAccountEmail`<sup>Optional</sup> <a name="ServiceAccountEmail" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.serviceAccountEmail"></a>

```go
ServiceAccountEmail *string
```

- *Type:* *string

The Service Account email used to create the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#service_account_email DataflowFlexTemplateJob#service_account_email}

---

##### `SkipWaitOnJobTermination`<sup>Optional</sup> <a name="SkipWaitOnJobTermination" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.skipWaitOnJobTermination"></a>

```go
SkipWaitOnJobTermination interface{}
```

- *Type:* interface{}

If true, treat DRAINING and CANCELLING as terminal job states and do not wait for further changes before removing from terraform state and moving on.

WARNING: this will lead to job name conflicts if you do not ensure that the job names are different, e.g. by embedding a release ID or by using a random_id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#skip_wait_on_job_termination DataflowFlexTemplateJob#skip_wait_on_job_termination}

---

##### `StagingLocation`<sup>Optional</sup> <a name="StagingLocation" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.stagingLocation"></a>

```go
StagingLocation *string
```

- *Type:* *string

The Cloud Storage path to use for staging files. Must be a valid Cloud Storage URL, beginning with gs://.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#staging_location DataflowFlexTemplateJob#staging_location}

---

##### `Subnetwork`<sup>Optional</sup> <a name="Subnetwork" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.subnetwork"></a>

```go
Subnetwork *string
```

- *Type:* *string

The subnetwork to which VMs will be assigned. Should be of the form "regions/REGION/subnetworks/SUBNETWORK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#subnetwork DataflowFlexTemplateJob#subnetwork}

---

##### `TempLocation`<sup>Optional</sup> <a name="TempLocation" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.tempLocation"></a>

```go
TempLocation *string
```

- *Type:* *string

The Cloud Storage path to use for temporary files. Must be a valid Cloud Storage URL, beginning with gs://.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#temp_location DataflowFlexTemplateJob#temp_location}

---

##### `TransformNameMapping`<sup>Optional</sup> <a name="TransformNameMapping" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.transformNameMapping"></a>

```go
TransformNameMapping *map[string]*string
```

- *Type:* *map[string]*string

Only applicable when updating a pipeline.

Map of transform name prefixes of the job to be replaced with the corresponding name prefixes of the new job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#transform_name_mapping DataflowFlexTemplateJob#transform_name_mapping}

---



