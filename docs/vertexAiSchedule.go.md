# `vertexAiSchedule` Submodule <a name="`vertexAiSchedule` Submodule" id="@cdktn/provider-google.vertexAiSchedule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VertexAiSchedule <a name="VertexAiSchedule" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_schedule google_vertex_ai_schedule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/vertexaischedule"

vertexaischedule.NewVertexAiSchedule(scope Construct, id *string, config VertexAiScheduleConfig) VertexAiSchedule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleConfig">VertexAiScheduleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleConfig">VertexAiScheduleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.putCreateNotebookExecutionJobRequest">PutCreateNotebookExecutionJobRequest</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.putCreatePipelineJobRequest">PutCreatePipelineJobRequest</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.resetAllowQueueing">ResetAllowQueueing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.resetCreateNotebookExecutionJobRequest">ResetCreateNotebookExecutionJobRequest</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.resetCreatePipelineJobRequest">ResetCreatePipelineJobRequest</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.resetCron">ResetCron</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.resetEndTime">ResetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.resetMaxConcurrentActiveRunCount">ResetMaxConcurrentActiveRunCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.resetMaxRunCount">ResetMaxRunCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.resetStartTime">ResetStartTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCreateNotebookExecutionJobRequest` <a name="PutCreateNotebookExecutionJobRequest" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.putCreateNotebookExecutionJobRequest"></a>

```go
func PutCreateNotebookExecutionJobRequest(value VertexAiScheduleCreateNotebookExecutionJobRequest)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.putCreateNotebookExecutionJobRequest.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequest">VertexAiScheduleCreateNotebookExecutionJobRequest</a>

---

##### `PutCreatePipelineJobRequest` <a name="PutCreatePipelineJobRequest" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.putCreatePipelineJobRequest"></a>

```go
func PutCreatePipelineJobRequest(value VertexAiScheduleCreatePipelineJobRequest)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.putCreatePipelineJobRequest.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequest">VertexAiScheduleCreatePipelineJobRequest</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.putTimeouts"></a>

```go
func PutTimeouts(value VertexAiScheduleTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleTimeouts">VertexAiScheduleTimeouts</a>

---

##### `ResetAllowQueueing` <a name="ResetAllowQueueing" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.resetAllowQueueing"></a>

```go
func ResetAllowQueueing()
```

##### `ResetCreateNotebookExecutionJobRequest` <a name="ResetCreateNotebookExecutionJobRequest" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.resetCreateNotebookExecutionJobRequest"></a>

```go
func ResetCreateNotebookExecutionJobRequest()
```

##### `ResetCreatePipelineJobRequest` <a name="ResetCreatePipelineJobRequest" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.resetCreatePipelineJobRequest"></a>

```go
func ResetCreatePipelineJobRequest()
```

##### `ResetCron` <a name="ResetCron" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.resetCron"></a>

```go
func ResetCron()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetEndTime` <a name="ResetEndTime" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.resetEndTime"></a>

```go
func ResetEndTime()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.resetId"></a>

```go
func ResetId()
```

##### `ResetMaxConcurrentActiveRunCount` <a name="ResetMaxConcurrentActiveRunCount" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.resetMaxConcurrentActiveRunCount"></a>

```go
func ResetMaxConcurrentActiveRunCount()
```

##### `ResetMaxRunCount` <a name="ResetMaxRunCount" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.resetMaxRunCount"></a>

```go
func ResetMaxRunCount()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.resetProject"></a>

```go
func ResetProject()
```

##### `ResetStartTime` <a name="ResetStartTime" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.resetStartTime"></a>

```go
func ResetStartTime()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a VertexAiSchedule resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/vertexaischedule"

vertexaischedule.VertexAiSchedule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/vertexaischedule"

vertexaischedule.VertexAiSchedule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/vertexaischedule"

vertexaischedule.VertexAiSchedule_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/vertexaischedule"

vertexaischedule.VertexAiSchedule_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a VertexAiSchedule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the VertexAiSchedule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing VertexAiSchedule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_schedule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the VertexAiSchedule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.property.catchUp">CatchUp</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.property.createNotebookExecutionJobRequest">CreateNotebookExecutionJobRequest</a></code> | <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestOutputReference">VertexAiScheduleCreateNotebookExecutionJobRequestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.property.createPipelineJobRequest">CreatePipelineJobRequest</a></code> | <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestOutputReference">VertexAiScheduleCreatePipelineJobRequestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.property.lastPauseTime">LastPauseTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.property.lastResumeTime">LastResumeTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.property.lastScheduledRunResponse">LastScheduledRunResponse</a></code> | <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleLastScheduledRunResponseList">VertexAiScheduleLastScheduledRunResponseList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.property.nextRunTime">NextRunTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.property.startedRunCount">StartedRunCount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleTimeoutsOutputReference">VertexAiScheduleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.property.allowQueueingInput">AllowQueueingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.property.createNotebookExecutionJobRequestInput">CreateNotebookExecutionJobRequestInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequest">VertexAiScheduleCreateNotebookExecutionJobRequest</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.property.createPipelineJobRequestInput">CreatePipelineJobRequestInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequest">VertexAiScheduleCreatePipelineJobRequest</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.property.cronInput">CronInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.property.endTimeInput">EndTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.property.maxConcurrentActiveRunCountInput">MaxConcurrentActiveRunCountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.property.maxConcurrentRunCountInput">MaxConcurrentRunCountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.property.maxRunCountInput">MaxRunCountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.property.startTimeInput">StartTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.property.allowQueueing">AllowQueueing</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.property.cron">Cron</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.property.endTime">EndTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.property.maxConcurrentActiveRunCount">MaxConcurrentActiveRunCount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.property.maxConcurrentRunCount">MaxConcurrentRunCount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.property.maxRunCount">MaxRunCount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.property.startTime">StartTime</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CatchUp`<sup>Required</sup> <a name="CatchUp" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.property.catchUp"></a>

```go
func CatchUp() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `CreateNotebookExecutionJobRequest`<sup>Required</sup> <a name="CreateNotebookExecutionJobRequest" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.property.createNotebookExecutionJobRequest"></a>

```go
func CreateNotebookExecutionJobRequest() VertexAiScheduleCreateNotebookExecutionJobRequestOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestOutputReference">VertexAiScheduleCreateNotebookExecutionJobRequestOutputReference</a>

---

##### `CreatePipelineJobRequest`<sup>Required</sup> <a name="CreatePipelineJobRequest" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.property.createPipelineJobRequest"></a>

```go
func CreatePipelineJobRequest() VertexAiScheduleCreatePipelineJobRequestOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestOutputReference">VertexAiScheduleCreatePipelineJobRequestOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `LastPauseTime`<sup>Required</sup> <a name="LastPauseTime" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.property.lastPauseTime"></a>

```go
func LastPauseTime() *string
```

- *Type:* *string

---

##### `LastResumeTime`<sup>Required</sup> <a name="LastResumeTime" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.property.lastResumeTime"></a>

```go
func LastResumeTime() *string
```

- *Type:* *string

---

##### `LastScheduledRunResponse`<sup>Required</sup> <a name="LastScheduledRunResponse" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.property.lastScheduledRunResponse"></a>

```go
func LastScheduledRunResponse() VertexAiScheduleLastScheduledRunResponseList
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleLastScheduledRunResponseList">VertexAiScheduleLastScheduledRunResponseList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NextRunTime`<sup>Required</sup> <a name="NextRunTime" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.property.nextRunTime"></a>

```go
func NextRunTime() *string
```

- *Type:* *string

---

##### `StartedRunCount`<sup>Required</sup> <a name="StartedRunCount" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.property.startedRunCount"></a>

```go
func StartedRunCount() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.property.timeouts"></a>

```go
func Timeouts() VertexAiScheduleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleTimeoutsOutputReference">VertexAiScheduleTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `AllowQueueingInput`<sup>Optional</sup> <a name="AllowQueueingInput" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.property.allowQueueingInput"></a>

```go
func AllowQueueingInput() interface{}
```

- *Type:* interface{}

---

##### `CreateNotebookExecutionJobRequestInput`<sup>Optional</sup> <a name="CreateNotebookExecutionJobRequestInput" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.property.createNotebookExecutionJobRequestInput"></a>

```go
func CreateNotebookExecutionJobRequestInput() VertexAiScheduleCreateNotebookExecutionJobRequest
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequest">VertexAiScheduleCreateNotebookExecutionJobRequest</a>

---

##### `CreatePipelineJobRequestInput`<sup>Optional</sup> <a name="CreatePipelineJobRequestInput" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.property.createPipelineJobRequestInput"></a>

```go
func CreatePipelineJobRequestInput() VertexAiScheduleCreatePipelineJobRequest
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequest">VertexAiScheduleCreatePipelineJobRequest</a>

---

##### `CronInput`<sup>Optional</sup> <a name="CronInput" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.property.cronInput"></a>

```go
func CronInput() *string
```

- *Type:* *string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EndTimeInput`<sup>Optional</sup> <a name="EndTimeInput" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.property.endTimeInput"></a>

```go
func EndTimeInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `MaxConcurrentActiveRunCountInput`<sup>Optional</sup> <a name="MaxConcurrentActiveRunCountInput" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.property.maxConcurrentActiveRunCountInput"></a>

```go
func MaxConcurrentActiveRunCountInput() *string
```

- *Type:* *string

---

##### `MaxConcurrentRunCountInput`<sup>Optional</sup> <a name="MaxConcurrentRunCountInput" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.property.maxConcurrentRunCountInput"></a>

```go
func MaxConcurrentRunCountInput() *string
```

- *Type:* *string

---

##### `MaxRunCountInput`<sup>Optional</sup> <a name="MaxRunCountInput" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.property.maxRunCountInput"></a>

```go
func MaxRunCountInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.property.startTimeInput"></a>

```go
func StartTimeInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AllowQueueing`<sup>Required</sup> <a name="AllowQueueing" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.property.allowQueueing"></a>

```go
func AllowQueueing() interface{}
```

- *Type:* interface{}

---

##### `Cron`<sup>Required</sup> <a name="Cron" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.property.cron"></a>

```go
func Cron() *string
```

- *Type:* *string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.property.endTime"></a>

```go
func EndTime() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `MaxConcurrentActiveRunCount`<sup>Required</sup> <a name="MaxConcurrentActiveRunCount" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.property.maxConcurrentActiveRunCount"></a>

```go
func MaxConcurrentActiveRunCount() *string
```

- *Type:* *string

---

##### `MaxConcurrentRunCount`<sup>Required</sup> <a name="MaxConcurrentRunCount" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.property.maxConcurrentRunCount"></a>

```go
func MaxConcurrentRunCount() *string
```

- *Type:* *string

---

##### `MaxRunCount`<sup>Required</sup> <a name="MaxRunCount" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.property.maxRunCount"></a>

```go
func MaxRunCount() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.property.startTime"></a>

```go
func StartTime() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.vertexAiSchedule.VertexAiSchedule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### VertexAiScheduleConfig <a name="VertexAiScheduleConfig" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/vertexaischedule"

&vertexaischedule.VertexAiScheduleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	DisplayName: *string,
	Location: *string,
	MaxConcurrentRunCount: *string,
	AllowQueueing: interface{},
	CreateNotebookExecutionJobRequest: github.com/cdktn-io/cdktn-provider-google-go/google/v20.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequest,
	CreatePipelineJobRequest: github.com/cdktn-io/cdktn-provider-google-go/google/v20.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequest,
	Cron: *string,
	DeletionPolicy: *string,
	EndTime: *string,
	Id: *string,
	MaxConcurrentActiveRunCount: *string,
	MaxRunCount: *string,
	Project: *string,
	StartTime: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-google-go/google/v20.vertexAiSchedule.VertexAiScheduleTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | User provided name of the Schedule. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleConfig.property.location">Location</a></code> | <code>*string</code> | The location of the Schedule. eg us-central1. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleConfig.property.maxConcurrentRunCount">MaxConcurrentRunCount</a></code> | <code>*string</code> | Maximum number of runs that can be started concurrently for this Schedule. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleConfig.property.allowQueueing">AllowQueueing</a></code> | <code>interface{}</code> | Whether new scheduled runs can be queued when max_concurrent_runs limit is reached. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleConfig.property.createNotebookExecutionJobRequest">CreateNotebookExecutionJobRequest</a></code> | <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequest">VertexAiScheduleCreateNotebookExecutionJobRequest</a></code> | create_notebook_execution_job_request block. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleConfig.property.createPipelineJobRequest">CreatePipelineJobRequest</a></code> | <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequest">VertexAiScheduleCreatePipelineJobRequest</a></code> | create_pipeline_job_request block. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleConfig.property.cron">Cron</a></code> | <code>*string</code> | Cron schedule (https://en.wikipedia.org/wiki/Cron) to launch scheduled runs. To explicitly set a timezone to the cron tab, apply a prefix in the cron tab: "CRON_TZ=${IANA_TIME_ZONE}" or "TZ=${IANA_TIME_ZONE}". The ${IANA_TIME_ZONE} may only be a valid string from IANA time zone database. For example, "CRON_TZ=America/New_York 1 * * * *", or "TZ=America/New_York 1 * * * *". |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleConfig.property.endTime">EndTime</a></code> | <code>*string</code> | Timestamp after which no new runs can be scheduled. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_schedule#id VertexAiSchedule#id}. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleConfig.property.maxConcurrentActiveRunCount">MaxConcurrentActiveRunCount</a></code> | <code>*string</code> | Specifies the maximum number of active runs that can be executed concurrently for this Schedule. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleConfig.property.maxRunCount">MaxRunCount</a></code> | <code>*string</code> | Maximum run count of the schedule. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_schedule#project VertexAiSchedule#project}. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleConfig.property.startTime">StartTime</a></code> | <code>*string</code> | Timestamp after which the first run can be scheduled. Default to Schedule create time if not specified. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleTimeouts">VertexAiScheduleTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

User provided name of the Schedule.

The name can be up to 128 characters long and can consist of any UTF-8 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_schedule#display_name VertexAiSchedule#display_name}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location of the Schedule. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_schedule#location VertexAiSchedule#location}

---

##### `MaxConcurrentRunCount`<sup>Required</sup> <a name="MaxConcurrentRunCount" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleConfig.property.maxConcurrentRunCount"></a>

```go
MaxConcurrentRunCount *string
```

- *Type:* *string

Maximum number of runs that can be started concurrently for this Schedule.

This is the limit for starting the scheduled requests and not the execution of the operations/jobs created by the requests (if applicable).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_schedule#max_concurrent_run_count VertexAiSchedule#max_concurrent_run_count}

---

##### `AllowQueueing`<sup>Optional</sup> <a name="AllowQueueing" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleConfig.property.allowQueueing"></a>

```go
AllowQueueing interface{}
```

- *Type:* interface{}

Whether new scheduled runs can be queued when max_concurrent_runs limit is reached.

If set to true, new runs will be queued instead of skipped. Default to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_schedule#allow_queueing VertexAiSchedule#allow_queueing}

---

##### `CreateNotebookExecutionJobRequest`<sup>Optional</sup> <a name="CreateNotebookExecutionJobRequest" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleConfig.property.createNotebookExecutionJobRequest"></a>

```go
CreateNotebookExecutionJobRequest VertexAiScheduleCreateNotebookExecutionJobRequest
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequest">VertexAiScheduleCreateNotebookExecutionJobRequest</a>

create_notebook_execution_job_request block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_schedule#create_notebook_execution_job_request VertexAiSchedule#create_notebook_execution_job_request}

---

##### `CreatePipelineJobRequest`<sup>Optional</sup> <a name="CreatePipelineJobRequest" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleConfig.property.createPipelineJobRequest"></a>

```go
CreatePipelineJobRequest VertexAiScheduleCreatePipelineJobRequest
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequest">VertexAiScheduleCreatePipelineJobRequest</a>

create_pipeline_job_request block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_schedule#create_pipeline_job_request VertexAiSchedule#create_pipeline_job_request}

---

##### `Cron`<sup>Optional</sup> <a name="Cron" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleConfig.property.cron"></a>

```go
Cron *string
```

- *Type:* *string

Cron schedule (https://en.wikipedia.org/wiki/Cron) to launch scheduled runs. To explicitly set a timezone to the cron tab, apply a prefix in the cron tab: "CRON_TZ=${IANA_TIME_ZONE}" or "TZ=${IANA_TIME_ZONE}". The ${IANA_TIME_ZONE} may only be a valid string from IANA time zone database. For example, "CRON_TZ=America/New_York 1 * * * *", or "TZ=America/New_York 1 * * * *".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_schedule#cron VertexAiSchedule#cron}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_schedule#deletion_policy VertexAiSchedule#deletion_policy}

---

##### `EndTime`<sup>Optional</sup> <a name="EndTime" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleConfig.property.endTime"></a>

```go
EndTime *string
```

- *Type:* *string

Timestamp after which no new runs can be scheduled.

If specified, The schedule will be completed when either end_time is reached or when scheduled_run_count >= max_run_count. If not specified, new runs will keep getting scheduled until this Schedule is paused or deleted. Already scheduled runs will be allowed to complete. Unset if not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_schedule#end_time VertexAiSchedule#end_time}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_schedule#id VertexAiSchedule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MaxConcurrentActiveRunCount`<sup>Optional</sup> <a name="MaxConcurrentActiveRunCount" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleConfig.property.maxConcurrentActiveRunCount"></a>

```go
MaxConcurrentActiveRunCount *string
```

- *Type:* *string

Specifies the maximum number of active runs that can be executed concurrently for this Schedule.

This limits the number of runs that can be in a non-terminal state at the same time. Currently, this field is only supported for requests of type CreatePipelineJobRequest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_schedule#max_concurrent_active_run_count VertexAiSchedule#max_concurrent_active_run_count}

---

##### `MaxRunCount`<sup>Optional</sup> <a name="MaxRunCount" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleConfig.property.maxRunCount"></a>

```go
MaxRunCount *string
```

- *Type:* *string

Maximum run count of the schedule.

If specified, The schedule will be completed when either started_run_count >= max_run_count or when end_time is reached. If not specified, new runs will keep getting scheduled until this Schedule is paused or deleted. Already scheduled runs will be allowed to complete. Unset if not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_schedule#max_run_count VertexAiSchedule#max_run_count}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_schedule#project VertexAiSchedule#project}.

---

##### `StartTime`<sup>Optional</sup> <a name="StartTime" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleConfig.property.startTime"></a>

```go
StartTime *string
```

- *Type:* *string

Timestamp after which the first run can be scheduled. Default to Schedule create time if not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_schedule#start_time VertexAiSchedule#start_time}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleConfig.property.timeouts"></a>

```go
Timeouts VertexAiScheduleTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleTimeouts">VertexAiScheduleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_schedule#timeouts VertexAiSchedule#timeouts}

---

### VertexAiScheduleCreateNotebookExecutionJobRequest <a name="VertexAiScheduleCreateNotebookExecutionJobRequest" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequest"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequest.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/vertexaischedule"

&vertexaischedule.VertexAiScheduleCreateNotebookExecutionJobRequest {
	NotebookExecutionJob: github.com/cdktn-io/cdktn-provider-google-go/google/v20.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob,
	Parent: *string,
	NotebookExecutionJobId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequest.property.notebookExecutionJob">NotebookExecutionJob</a></code> | <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob">VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob</a></code> | notebook_execution_job block. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequest.property.parent">Parent</a></code> | <code>*string</code> | The resource name of the Location to create the NotebookExecutionJob. Format: 'projects/{project}/locations/{location}'. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequest.property.notebookExecutionJobId">NotebookExecutionJobId</a></code> | <code>*string</code> | User specified ID for the NotebookExecutionJob. |

---

##### `NotebookExecutionJob`<sup>Required</sup> <a name="NotebookExecutionJob" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequest.property.notebookExecutionJob"></a>

```go
NotebookExecutionJob VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob">VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob</a>

notebook_execution_job block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_schedule#notebook_execution_job VertexAiSchedule#notebook_execution_job}

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequest.property.parent"></a>

```go
Parent *string
```

- *Type:* *string

The resource name of the Location to create the NotebookExecutionJob. Format: 'projects/{project}/locations/{location}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_schedule#parent VertexAiSchedule#parent}

---

##### `NotebookExecutionJobId`<sup>Optional</sup> <a name="NotebookExecutionJobId" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequest.property.notebookExecutionJobId"></a>

```go
NotebookExecutionJobId *string
```

- *Type:* *string

User specified ID for the NotebookExecutionJob.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_schedule#notebook_execution_job_id VertexAiSchedule#notebook_execution_job_id}

---

### VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob <a name="VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/vertexaischedule"

&vertexaischedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob {
	CustomEnvironmentSpec: github.com/cdktn-io/cdktn-provider-google-go/google/v20.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpec,
	DataformRepositorySource: github.com/cdktn-io/cdktn-provider-google-go/google/v20.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource,
	DirectNotebookSource: github.com/cdktn-io/cdktn-provider-google-go/google/v20.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDirectNotebookSource,
	DisplayName: *string,
	EncryptionSpec: github.com/cdktn-io/cdktn-provider-google-go/google/v20.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpec,
	ExecutionTimeout: *string,
	ExecutionUser: *string,
	GcsNotebookSource: github.com/cdktn-io/cdktn-provider-google-go/google/v20.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource,
	GcsOutputUri: *string,
	KernelName: *string,
	Labels: *map[string]*string,
	NotebookRuntimeTemplateResourceName: *string,
	Parameters: *map[string]*string,
	ServiceAccount: *string,
	WorkbenchRuntime: github.com/cdktn-io/cdktn-provider-google-go/google/v20.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntime,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob.property.customEnvironmentSpec">CustomEnvironmentSpec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpec">VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpec</a></code> | custom_environment_spec block. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob.property.dataformRepositorySource">DataformRepositorySource</a></code> | <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource">VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource</a></code> | dataform_repository_source block. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob.property.directNotebookSource">DirectNotebookSource</a></code> | <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDirectNotebookSource">VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDirectNotebookSource</a></code> | direct_notebook_source block. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob.property.displayName">DisplayName</a></code> | <code>*string</code> | The display name of the NotebookExecutionJob. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob.property.encryptionSpec">EncryptionSpec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpec">VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpec</a></code> | encryption_spec block. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob.property.executionTimeout">ExecutionTimeout</a></code> | <code>*string</code> | Max running time of the execution job in seconds (default 86400s / 24 hrs). |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob.property.executionUser">ExecutionUser</a></code> | <code>*string</code> | The user email to run the execution as. Only supported by Colab runtimes. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob.property.gcsNotebookSource">GcsNotebookSource</a></code> | <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource">VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource</a></code> | gcs_notebook_source block. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob.property.gcsOutputUri">GcsOutputUri</a></code> | <code>*string</code> | The Cloud Storage location to upload the result to. Format: 'gs://bucket-name'. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob.property.kernelName">KernelName</a></code> | <code>*string</code> | The name of the kernel to use during notebook execution. If unset, the default kernel is used. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob.property.labels">Labels</a></code> | <code>*map[string]*string</code> | The labels with user-defined metadata to organize NotebookExecutionJobs. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob.property.notebookRuntimeTemplateResourceName">NotebookRuntimeTemplateResourceName</a></code> | <code>*string</code> | The NotebookRuntimeTemplate to source compute configuration from. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob.property.parameters">Parameters</a></code> | <code>*map[string]*string</code> | The user-defined parameters to use during notebook execution. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob.property.serviceAccount">ServiceAccount</a></code> | <code>*string</code> | The service account to run the execution as. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob.property.workbenchRuntime">WorkbenchRuntime</a></code> | <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntime">VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntime</a></code> | workbench_runtime block. |

---

##### `CustomEnvironmentSpec`<sup>Optional</sup> <a name="CustomEnvironmentSpec" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob.property.customEnvironmentSpec"></a>

```go
CustomEnvironmentSpec VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpec
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpec">VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpec</a>

custom_environment_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_schedule#custom_environment_spec VertexAiSchedule#custom_environment_spec}

---

##### `DataformRepositorySource`<sup>Optional</sup> <a name="DataformRepositorySource" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob.property.dataformRepositorySource"></a>

```go
DataformRepositorySource VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource">VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource</a>

dataform_repository_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_schedule#dataform_repository_source VertexAiSchedule#dataform_repository_source}

---

##### `DirectNotebookSource`<sup>Optional</sup> <a name="DirectNotebookSource" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob.property.directNotebookSource"></a>

```go
DirectNotebookSource VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDirectNotebookSource
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDirectNotebookSource">VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDirectNotebookSource</a>

direct_notebook_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_schedule#direct_notebook_source VertexAiSchedule#direct_notebook_source}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

The display name of the NotebookExecutionJob.

The name can be up to 128 characters long and can consist of any UTF-8 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_schedule#display_name VertexAiSchedule#display_name}

---

##### `EncryptionSpec`<sup>Optional</sup> <a name="EncryptionSpec" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob.property.encryptionSpec"></a>

```go
EncryptionSpec VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpec
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpec">VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpec</a>

encryption_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_schedule#encryption_spec VertexAiSchedule#encryption_spec}

---

##### `ExecutionTimeout`<sup>Optional</sup> <a name="ExecutionTimeout" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob.property.executionTimeout"></a>

```go
ExecutionTimeout *string
```

- *Type:* *string

Max running time of the execution job in seconds (default 86400s / 24 hrs).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_schedule#execution_timeout VertexAiSchedule#execution_timeout}

---

##### `ExecutionUser`<sup>Optional</sup> <a name="ExecutionUser" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob.property.executionUser"></a>

```go
ExecutionUser *string
```

- *Type:* *string

The user email to run the execution as. Only supported by Colab runtimes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_schedule#execution_user VertexAiSchedule#execution_user}

---

##### `GcsNotebookSource`<sup>Optional</sup> <a name="GcsNotebookSource" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob.property.gcsNotebookSource"></a>

```go
GcsNotebookSource VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource">VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource</a>

gcs_notebook_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_schedule#gcs_notebook_source VertexAiSchedule#gcs_notebook_source}

---

##### `GcsOutputUri`<sup>Optional</sup> <a name="GcsOutputUri" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob.property.gcsOutputUri"></a>

```go
GcsOutputUri *string
```

- *Type:* *string

The Cloud Storage location to upload the result to. Format: 'gs://bucket-name'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_schedule#gcs_output_uri VertexAiSchedule#gcs_output_uri}

---

##### `KernelName`<sup>Optional</sup> <a name="KernelName" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob.property.kernelName"></a>

```go
KernelName *string
```

- *Type:* *string

The name of the kernel to use during notebook execution. If unset, the default kernel is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_schedule#kernel_name VertexAiSchedule#kernel_name}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

The labels with user-defined metadata to organize NotebookExecutionJobs.

Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. See https://goo.gl/xmQnxf for more information and examples of labels. System reserved label keys are prefixed with "aiplatform.googleapis.com/" and are immutable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_schedule#labels VertexAiSchedule#labels}

---

##### `NotebookRuntimeTemplateResourceName`<sup>Optional</sup> <a name="NotebookRuntimeTemplateResourceName" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob.property.notebookRuntimeTemplateResourceName"></a>

```go
NotebookRuntimeTemplateResourceName *string
```

- *Type:* *string

The NotebookRuntimeTemplate to source compute configuration from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_schedule#notebook_runtime_template_resource_name VertexAiSchedule#notebook_runtime_template_resource_name}

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob.property.parameters"></a>

```go
Parameters *map[string]*string
```

- *Type:* *map[string]*string

The user-defined parameters to use during notebook execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_schedule#parameters VertexAiSchedule#parameters}

---

##### `ServiceAccount`<sup>Optional</sup> <a name="ServiceAccount" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob.property.serviceAccount"></a>

```go
ServiceAccount *string
```

- *Type:* *string

The service account to run the execution as.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_schedule#service_account VertexAiSchedule#service_account}

---

##### `WorkbenchRuntime`<sup>Optional</sup> <a name="WorkbenchRuntime" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob.property.workbenchRuntime"></a>

```go
WorkbenchRuntime VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntime
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntime">VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntime</a>

workbench_runtime block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_schedule#workbench_runtime VertexAiSchedule#workbench_runtime}

---

### VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpec <a name="VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpec" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpec.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/vertexaischedule"

&vertexaischedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpec {
	MachineSpec: github.com/cdktn-io/cdktn-provider-google-go/google/v20.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpec,
	NetworkSpec: github.com/cdktn-io/cdktn-provider-google-go/google/v20.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpec,
	PersistentDiskSpec: github.com/cdktn-io/cdktn-provider-google-go/google/v20.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpec,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpec.property.machineSpec">MachineSpec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpec">VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpec</a></code> | machine_spec block. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpec.property.networkSpec">NetworkSpec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpec">VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpec</a></code> | network_spec block. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpec.property.persistentDiskSpec">PersistentDiskSpec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpec">VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpec</a></code> | persistent_disk_spec block. |

---

##### `MachineSpec`<sup>Optional</sup> <a name="MachineSpec" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpec.property.machineSpec"></a>

```go
MachineSpec VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpec
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpec">VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpec</a>

machine_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_schedule#machine_spec VertexAiSchedule#machine_spec}

---

##### `NetworkSpec`<sup>Optional</sup> <a name="NetworkSpec" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpec.property.networkSpec"></a>

```go
NetworkSpec VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpec
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpec">VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpec</a>

network_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_schedule#network_spec VertexAiSchedule#network_spec}

---

##### `PersistentDiskSpec`<sup>Optional</sup> <a name="PersistentDiskSpec" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpec.property.persistentDiskSpec"></a>

```go
PersistentDiskSpec VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpec
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpec">VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpec</a>

persistent_disk_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_schedule#persistent_disk_spec VertexAiSchedule#persistent_disk_spec}

---

### VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpec <a name="VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpec" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpec.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/vertexaischedule"

&vertexaischedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpec {
	AcceleratorCount: *f64,
	AcceleratorType: *string,
	GpuPartitionSize: *string,
	MachineType: *string,
	ReservationAffinity: github.com/cdktn-io/cdktn-provider-google-go/google/v20.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinity,
	TpuTopology: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpec.property.acceleratorCount">AcceleratorCount</a></code> | <code>*f64</code> | The number of accelerators to attach to the machine. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpec.property.acceleratorType">AcceleratorType</a></code> | <code>*string</code> | Possible values: NVIDIA_TESLA_K80 NVIDIA_TESLA_P100 NVIDIA_TESLA_V100 NVIDIA_TESLA_P4 NVIDIA_TESLA_T4 NVIDIA_TESLA_A100 NVIDIA_A100_80GB NVIDIA_L4 NVIDIA_H100_80GB NVIDIA_H100_MEGA_80GB NVIDIA_H200_141GB NVIDIA_B200 NVIDIA_GB200 NVIDIA_RTX_PRO_6000 TPU_V2 TPU_V3 TPU_V4_POD TPU_V5_LITEPOD. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpec.property.gpuPartitionSize">GpuPartitionSize</a></code> | <code>*string</code> | The Nvidia GPU partition size. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpec.property.machineType">MachineType</a></code> | <code>*string</code> | The type of the machine. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpec.property.reservationAffinity">ReservationAffinity</a></code> | <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinity">VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinity</a></code> | reservation_affinity block. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpec.property.tpuTopology">TpuTopology</a></code> | <code>*string</code> | The topology of the TPUs. Corresponds to the TPU topologies available from GKE. (Example: tpu_topology: "2x2x1"). |

---

##### `AcceleratorCount`<sup>Optional</sup> <a name="AcceleratorCount" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpec.property.acceleratorCount"></a>

```go
AcceleratorCount *f64
```

- *Type:* *f64

The number of accelerators to attach to the machine.

For accelerator optimized machine types (https://cloud.google.com/compute/docs/accelerator-optimized-machines), One may set the accelerator_count from 1 to N for machine with N GPUs. If accelerator_count is less than or equal to N / 2, Vertex will co-schedule the replicas of the model into the same VM to save cost. For example, if the machine type is a3-highgpu-8g, which has 8 H100 GPUs, one can set accelerator_count to 1 to 8. If accelerator_count is 1, 2, 3, or 4, Vertex will co-schedule 8, 4, 2, or 2 replicas of the model into the same VM to save cost. When co-scheduling, CPU, memory and storage on the VM will be distributed to replicas on the VM. For example, one can expect a co-scheduled replica requesting 2 GPUs out of a 8-GPU VM will receive 25% of the CPU, memory and storage of the VM. Note that the feature is not compatible with multihost_gpu_node_count. When multihost_gpu_node_count is set, the co-scheduling will not be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_schedule#accelerator_count VertexAiSchedule#accelerator_count}

---

##### `AcceleratorType`<sup>Optional</sup> <a name="AcceleratorType" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpec.property.acceleratorType"></a>

```go
AcceleratorType *string
```

- *Type:* *string

Possible values: NVIDIA_TESLA_K80 NVIDIA_TESLA_P100 NVIDIA_TESLA_V100 NVIDIA_TESLA_P4 NVIDIA_TESLA_T4 NVIDIA_TESLA_A100 NVIDIA_A100_80GB NVIDIA_L4 NVIDIA_H100_80GB NVIDIA_H100_MEGA_80GB NVIDIA_H200_141GB NVIDIA_B200 NVIDIA_GB200 NVIDIA_RTX_PRO_6000 TPU_V2 TPU_V3 TPU_V4_POD TPU_V5_LITEPOD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_schedule#accelerator_type VertexAiSchedule#accelerator_type}

---

##### `GpuPartitionSize`<sup>Optional</sup> <a name="GpuPartitionSize" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpec.property.gpuPartitionSize"></a>

```go
GpuPartitionSize *string
```

- *Type:* *string

The Nvidia GPU partition size.

When specified, the requested accelerators will be partitioned into smaller GPU partitions. For example, if the request is for 8 units of NVIDIA A100 GPUs, and gpu_partition_size="1g.10gb", the service will create 8 * 7 = 56 partitioned MIG instances. The partition size must be a value supported by the requested accelerator. Refer to [Nvidia GPU Partitioning](https://cloud.google.com/kubernetes-engine/docs/how-to/gpus-multi#multi-instance_gpu_partitions) for the available partition sizes. If set, the accelerator_count should be set to 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_schedule#gpu_partition_size VertexAiSchedule#gpu_partition_size}

---

##### `MachineType`<sup>Optional</sup> <a name="MachineType" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpec.property.machineType"></a>

```go
MachineType *string
```

- *Type:* *string

The type of the machine.

See the [list of machine types supported for prediction](https://cloud.google.com/vertex-ai/docs/predictions/configure-compute#machine-types) See the [list of machine types supported for custom training](https://cloud.google.com/vertex-ai/docs/training/configure-compute#machine-types). For DeployedModel this field is optional, and the default value is 'n1-standard-2'. For BatchPredictionJob or as part of WorkerPoolSpec this field is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_schedule#machine_type VertexAiSchedule#machine_type}

---

##### `ReservationAffinity`<sup>Optional</sup> <a name="ReservationAffinity" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpec.property.reservationAffinity"></a>

```go
ReservationAffinity VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinity
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinity">VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinity</a>

reservation_affinity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_schedule#reservation_affinity VertexAiSchedule#reservation_affinity}

---

##### `TpuTopology`<sup>Optional</sup> <a name="TpuTopology" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpec.property.tpuTopology"></a>

```go
TpuTopology *string
```

- *Type:* *string

The topology of the TPUs. Corresponds to the TPU topologies available from GKE. (Example: tpu_topology: "2x2x1").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_schedule#tpu_topology VertexAiSchedule#tpu_topology}

---

### VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinity <a name="VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinity" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinity.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/vertexaischedule"

&vertexaischedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinity {
	ReservationAffinityType: *string,
	Key: *string,
	UseReservationPool: interface{},
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinity.property.reservationAffinityType">ReservationAffinityType</a></code> | <code>*string</code> | Specifies the reservation affinity type. Possible values: NO_RESERVATION ANY_RESERVATION SPECIFIC_RESERVATION SPECIFIC_THEN_ANY_RESERVATION SPECIFIC_THEN_NO_RESERVATION. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinity.property.key">Key</a></code> | <code>*string</code> | Corresponds to the label key of a reservation resource. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinity.property.useReservationPool">UseReservationPool</a></code> | <code>interface{}</code> | When set to true, resources will be drawn from go/cloud-ai-gcp-pool. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinity.property.values">Values</a></code> | <code>*[]*string</code> | Corresponds to the label values of a reservation resource. |

---

##### `ReservationAffinityType`<sup>Required</sup> <a name="ReservationAffinityType" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinity.property.reservationAffinityType"></a>

```go
ReservationAffinityType *string
```

- *Type:* *string

Specifies the reservation affinity type. Possible values: NO_RESERVATION ANY_RESERVATION SPECIFIC_RESERVATION SPECIFIC_THEN_ANY_RESERVATION SPECIFIC_THEN_NO_RESERVATION.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_schedule#reservation_affinity_type VertexAiSchedule#reservation_affinity_type}

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinity.property.key"></a>

```go
Key *string
```

- *Type:* *string

Corresponds to the label key of a reservation resource.

To target a SPECIFIC_RESERVATION by name, use 'compute.googleapis.com/reservation-name' as the key and specify the name of your reservation as its value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_schedule#key VertexAiSchedule#key}

---

##### `UseReservationPool`<sup>Optional</sup> <a name="UseReservationPool" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinity.property.useReservationPool"></a>

```go
UseReservationPool interface{}
```

- *Type:* interface{}

When set to true, resources will be drawn from go/cloud-ai-gcp-pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_schedule#use_reservation_pool VertexAiSchedule#use_reservation_pool}

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinity.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Corresponds to the label values of a reservation resource.

This must be the full resource name of the reservation or reservation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_schedule#values VertexAiSchedule#values}

---

### VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpec <a name="VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpec" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpec.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/vertexaischedule"

&vertexaischedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpec {
	EnableInternetAccess: interface{},
	Network: *string,
	Subnetwork: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpec.property.enableInternetAccess">EnableInternetAccess</a></code> | <code>interface{}</code> | Whether to enable public internet access. Default false. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpec.property.network">Network</a></code> | <code>*string</code> | The full name of the Google Compute Engine [network](https://cloud.google.com//compute/docs/networks-and-firewalls#networks). |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpec.property.subnetwork">Subnetwork</a></code> | <code>*string</code> | The name of the subnet that this instance is in. Format: 'projects/{project_id_or_number}/regions/{region}/subnetworks/{subnetwork_id}'. |

---

##### `EnableInternetAccess`<sup>Optional</sup> <a name="EnableInternetAccess" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpec.property.enableInternetAccess"></a>

```go
EnableInternetAccess interface{}
```

- *Type:* interface{}

Whether to enable public internet access. Default false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_schedule#enable_internet_access VertexAiSchedule#enable_internet_access}

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpec.property.network"></a>

```go
Network *string
```

- *Type:* *string

The full name of the Google Compute Engine [network](https://cloud.google.com//compute/docs/networks-and-firewalls#networks).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_schedule#network VertexAiSchedule#network}

---

##### `Subnetwork`<sup>Optional</sup> <a name="Subnetwork" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpec.property.subnetwork"></a>

```go
Subnetwork *string
```

- *Type:* *string

The name of the subnet that this instance is in. Format: 'projects/{project_id_or_number}/regions/{region}/subnetworks/{subnetwork_id}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_schedule#subnetwork VertexAiSchedule#subnetwork}

---

### VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpec <a name="VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpec" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpec.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/vertexaischedule"

&vertexaischedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpec {
	DiskSizeGb: *string,
	DiskType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpec.property.diskSizeGb">DiskSizeGb</a></code> | <code>*string</code> | Size in GB of the disk (default is 100GB). |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpec.property.diskType">DiskType</a></code> | <code>*string</code> | Type of the disk (default is "pd-standard"). |

---

##### `DiskSizeGb`<sup>Optional</sup> <a name="DiskSizeGb" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpec.property.diskSizeGb"></a>

```go
DiskSizeGb *string
```

- *Type:* *string

Size in GB of the disk (default is 100GB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_schedule#disk_size_gb VertexAiSchedule#disk_size_gb}

---

##### `DiskType`<sup>Optional</sup> <a name="DiskType" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpec.property.diskType"></a>

```go
DiskType *string
```

- *Type:* *string

Type of the disk (default is "pd-standard").

Valid values: "pd-ssd" (Persistent Disk Solid State Drive) "pd-standard" (Persistent Disk Hard Disk Drive) "pd-balanced" (Balanced Persistent Disk) "pd-extreme" (Extreme Persistent Disk)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_schedule#disk_type VertexAiSchedule#disk_type}

---

### VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource <a name="VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/vertexaischedule"

&vertexaischedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource {
	CommitSha: *string,
	DataformRepositoryResourceName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource.property.commitSha">CommitSha</a></code> | <code>*string</code> | The commit SHA to read repository with. If unset, the file will be read at HEAD. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource.property.dataformRepositoryResourceName">DataformRepositoryResourceName</a></code> | <code>*string</code> | The resource name of the Dataform Repository. Format: 'projects/{project_id}/locations/{location}/repositories/{repository_id}'. |

---

##### `CommitSha`<sup>Optional</sup> <a name="CommitSha" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource.property.commitSha"></a>

```go
CommitSha *string
```

- *Type:* *string

The commit SHA to read repository with. If unset, the file will be read at HEAD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_schedule#commit_sha VertexAiSchedule#commit_sha}

---

##### `DataformRepositoryResourceName`<sup>Optional</sup> <a name="DataformRepositoryResourceName" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource.property.dataformRepositoryResourceName"></a>

```go
DataformRepositoryResourceName *string
```

- *Type:* *string

The resource name of the Dataform Repository. Format: 'projects/{project_id}/locations/{location}/repositories/{repository_id}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_schedule#dataform_repository_resource_name VertexAiSchedule#dataform_repository_resource_name}

---

### VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDirectNotebookSource <a name="VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDirectNotebookSource" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDirectNotebookSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDirectNotebookSource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/vertexaischedule"

&vertexaischedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDirectNotebookSource {
	Content: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDirectNotebookSource.property.content">Content</a></code> | <code>*string</code> | The base64-encoded contents of the input notebook file. |

---

##### `Content`<sup>Optional</sup> <a name="Content" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDirectNotebookSource.property.content"></a>

```go
Content *string
```

- *Type:* *string

The base64-encoded contents of the input notebook file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_schedule#content VertexAiSchedule#content}

---

### VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpec <a name="VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpec" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpec.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/vertexaischedule"

&vertexaischedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpec {
	KmsKeyName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpec.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | Resource name of the Cloud KMS key used to protect the resource. |

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpec.property.kmsKeyName"></a>

```go
KmsKeyName *string
```

- *Type:* *string

Resource name of the Cloud KMS key used to protect the resource.

The Cloud KMS key must be in the same region as the resource. It must have the format 'projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{crypto_key}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_schedule#kms_key_name VertexAiSchedule#kms_key_name}

---

### VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource <a name="VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/vertexaischedule"

&vertexaischedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource {
	Generation: *string,
	Uri: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource.property.generation">Generation</a></code> | <code>*string</code> | The version of the Cloud Storage object to read. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource.property.uri">Uri</a></code> | <code>*string</code> | The Cloud Storage uri pointing to the ipynb file. Format: 'gs://bucket/notebook_file.ipynb'. |

---

##### `Generation`<sup>Optional</sup> <a name="Generation" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource.property.generation"></a>

```go
Generation *string
```

- *Type:* *string

The version of the Cloud Storage object to read.

If unset, the current version of the object is read. See https://cloud.google.com/storage/docs/metadata#generation-number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_schedule#generation VertexAiSchedule#generation}

---

##### `Uri`<sup>Optional</sup> <a name="Uri" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource.property.uri"></a>

```go
Uri *string
```

- *Type:* *string

The Cloud Storage uri pointing to the ipynb file. Format: 'gs://bucket/notebook_file.ipynb'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_schedule#uri VertexAiSchedule#uri}

---

### VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntime <a name="VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntime" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntime.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/vertexaischedule"

&vertexaischedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntime {

}
```


### VertexAiScheduleCreatePipelineJobRequest <a name="VertexAiScheduleCreatePipelineJobRequest" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequest"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequest.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/vertexaischedule"

&vertexaischedule.VertexAiScheduleCreatePipelineJobRequest {
	Parent: *string,
	PipelineJob: github.com/cdktn-io/cdktn-provider-google-go/google/v20.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJob,
	PipelineJobId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequest.property.parent">Parent</a></code> | <code>*string</code> | The resource name of the Location to create the PipelineJob in. Format: 'projects/{project}/locations/{location}'. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequest.property.pipelineJob">PipelineJob</a></code> | <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJob">VertexAiScheduleCreatePipelineJobRequestPipelineJob</a></code> | pipeline_job block. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequest.property.pipelineJobId">PipelineJobId</a></code> | <code>*string</code> | The ID to use for the PipelineJob, which will become the final component of the PipelineJob name. |

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequest.property.parent"></a>

```go
Parent *string
```

- *Type:* *string

The resource name of the Location to create the PipelineJob in. Format: 'projects/{project}/locations/{location}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_schedule#parent VertexAiSchedule#parent}

---

##### `PipelineJob`<sup>Required</sup> <a name="PipelineJob" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequest.property.pipelineJob"></a>

```go
PipelineJob VertexAiScheduleCreatePipelineJobRequestPipelineJob
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJob">VertexAiScheduleCreatePipelineJobRequestPipelineJob</a>

pipeline_job block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_schedule#pipeline_job VertexAiSchedule#pipeline_job}

---

##### `PipelineJobId`<sup>Optional</sup> <a name="PipelineJobId" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequest.property.pipelineJobId"></a>

```go
PipelineJobId *string
```

- *Type:* *string

The ID to use for the PipelineJob, which will become the final component of the PipelineJob name.

If not provided, an ID will be automatically generated. This value should be less than 128 characters, and valid characters are '/a-z-/'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_schedule#pipeline_job_id VertexAiSchedule#pipeline_job_id}

---

### VertexAiScheduleCreatePipelineJobRequestPipelineJob <a name="VertexAiScheduleCreatePipelineJobRequestPipelineJob" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJob"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJob.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/vertexaischedule"

&vertexaischedule.VertexAiScheduleCreatePipelineJobRequestPipelineJob {
	DisplayName: *string,
	EncryptionSpec: github.com/cdktn-io/cdktn-provider-google-go/google/v20.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobEncryptionSpec,
	Labels: *map[string]*string,
	Network: *string,
	PipelineSpec: *string,
	PreflightValidations: interface{},
	PscInterfaceConfig: github.com/cdktn-io/cdktn-provider-google-go/google/v20.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfig,
	ReservedIpRanges: *[]*string,
	RuntimeConfig: github.com/cdktn-io/cdktn-provider-google-go/google/v20.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobRuntimeConfig,
	ServiceAccount: *string,
	TemplateUri: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJob.property.displayName">DisplayName</a></code> | <code>*string</code> | The display name of the Pipeline. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJob.property.encryptionSpec">EncryptionSpec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobEncryptionSpec">VertexAiScheduleCreatePipelineJobRequestPipelineJobEncryptionSpec</a></code> | encryption_spec block. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJob.property.labels">Labels</a></code> | <code>*map[string]*string</code> | The labels with user-defined metadata to organize PipelineJob. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJob.property.network">Network</a></code> | <code>*string</code> | The full name of the Compute Engine [network](/compute/docs/networks-and-firewalls#networks) to which the Pipeline Job's workload should be peered. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJob.property.pipelineSpec">PipelineSpec</a></code> | <code>*string</code> | A compiled definition of a pipeline, represented as a 'JSON' object. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJob.property.preflightValidations">PreflightValidations</a></code> | <code>interface{}</code> | Whether to do component level validations before job creation. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJob.property.pscInterfaceConfig">PscInterfaceConfig</a></code> | <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfig">VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfig</a></code> | psc_interface_config block. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJob.property.reservedIpRanges">ReservedIpRanges</a></code> | <code>*[]*string</code> | A list of names for the reserved ip ranges under the VPC network that can be used for this Pipeline Job's workload. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJob.property.runtimeConfig">RuntimeConfig</a></code> | <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobRuntimeConfig">VertexAiScheduleCreatePipelineJobRequestPipelineJobRuntimeConfig</a></code> | runtime_config block. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJob.property.serviceAccount">ServiceAccount</a></code> | <code>*string</code> | The service account that the pipeline workload runs as. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJob.property.templateUri">TemplateUri</a></code> | <code>*string</code> | A template uri from where the PipelineJob.pipeline_spec, if empty, will be downloaded. Currently, only uri from Vertex Template Registry & Gallery is supported. Reference to https://cloud.google.com/vertex-ai/docs/pipelines/create-pipeline-template. |

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJob.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

The display name of the Pipeline.

The name can be up to 128 characters long and can consist of any UTF-8 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_schedule#display_name VertexAiSchedule#display_name}

---

##### `EncryptionSpec`<sup>Optional</sup> <a name="EncryptionSpec" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJob.property.encryptionSpec"></a>

```go
EncryptionSpec VertexAiScheduleCreatePipelineJobRequestPipelineJobEncryptionSpec
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobEncryptionSpec">VertexAiScheduleCreatePipelineJobRequestPipelineJobEncryptionSpec</a>

encryption_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_schedule#encryption_spec VertexAiSchedule#encryption_spec}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJob.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

The labels with user-defined metadata to organize PipelineJob.

Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. See https://goo.gl/xmQnxf for more information and examples of labels. Note there is some reserved label key for Vertex AI Pipelines. - 'vertex-ai-pipelines-run-billing-id', user set value will get overrided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_schedule#labels VertexAiSchedule#labels}

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJob.property.network"></a>

```go
Network *string
```

- *Type:* *string

The full name of the Compute Engine [network](/compute/docs/networks-and-firewalls#networks) to which the Pipeline Job's workload should be peered.

For example, 'projects/12345/global/networks/myVPC'. [Format](/compute/docs/reference/rest/v1/networks/insert) is of the form 'projects/{project}/global/networks/{network}'. Where {project} is a project number, as in '12345', and {network} is a network name. Private services access must already be configured for the network. Pipeline job will apply the network configuration to the Google Cloud resources being launched, if applied, such as Vertex AI Training or Dataflow job. If left unspecified, the workload is not peered with any network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_schedule#network VertexAiSchedule#network}

---

##### `PipelineSpec`<sup>Optional</sup> <a name="PipelineSpec" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJob.property.pipelineSpec"></a>

```go
PipelineSpec *string
```

- *Type:* *string

A compiled definition of a pipeline, represented as a 'JSON' object.

Defines the structure of the pipeline, including its components, tasks, and parameters. This specification is generated by compiling a pipeline function defined in 'Python' using the 'Kubeflow Pipelines SDK'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_schedule#pipeline_spec VertexAiSchedule#pipeline_spec}

---

##### `PreflightValidations`<sup>Optional</sup> <a name="PreflightValidations" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJob.property.preflightValidations"></a>

```go
PreflightValidations interface{}
```

- *Type:* interface{}

Whether to do component level validations before job creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_schedule#preflight_validations VertexAiSchedule#preflight_validations}

---

##### `PscInterfaceConfig`<sup>Optional</sup> <a name="PscInterfaceConfig" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJob.property.pscInterfaceConfig"></a>

```go
PscInterfaceConfig VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfig
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfig">VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfig</a>

psc_interface_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_schedule#psc_interface_config VertexAiSchedule#psc_interface_config}

---

##### `ReservedIpRanges`<sup>Optional</sup> <a name="ReservedIpRanges" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJob.property.reservedIpRanges"></a>

```go
ReservedIpRanges *[]*string
```

- *Type:* *[]*string

A list of names for the reserved ip ranges under the VPC network that can be used for this Pipeline Job's workload.

If set, we will deploy the Pipeline Job's workload within the provided ip ranges. Otherwise, the job will be deployed to any ip ranges under the provided VPC network. Example: ['vertex-ai-ip-range'].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_schedule#reserved_ip_ranges VertexAiSchedule#reserved_ip_ranges}

---

##### `RuntimeConfig`<sup>Optional</sup> <a name="RuntimeConfig" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJob.property.runtimeConfig"></a>

```go
RuntimeConfig VertexAiScheduleCreatePipelineJobRequestPipelineJobRuntimeConfig
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobRuntimeConfig">VertexAiScheduleCreatePipelineJobRequestPipelineJobRuntimeConfig</a>

runtime_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_schedule#runtime_config VertexAiSchedule#runtime_config}

---

##### `ServiceAccount`<sup>Optional</sup> <a name="ServiceAccount" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJob.property.serviceAccount"></a>

```go
ServiceAccount *string
```

- *Type:* *string

The service account that the pipeline workload runs as.

If not specified, the Compute Engine default service account in the project will be used. See https://cloud.google.com/compute/docs/access/service-accounts#default_service_account Users starting the pipeline must have the 'iam.serviceAccounts.actAs' permission on this service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_schedule#service_account VertexAiSchedule#service_account}

---

##### `TemplateUri`<sup>Optional</sup> <a name="TemplateUri" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJob.property.templateUri"></a>

```go
TemplateUri *string
```

- *Type:* *string

A template uri from where the PipelineJob.pipeline_spec, if empty, will be downloaded. Currently, only uri from Vertex Template Registry & Gallery is supported. Reference to https://cloud.google.com/vertex-ai/docs/pipelines/create-pipeline-template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_schedule#template_uri VertexAiSchedule#template_uri}

---

### VertexAiScheduleCreatePipelineJobRequestPipelineJobEncryptionSpec <a name="VertexAiScheduleCreatePipelineJobRequestPipelineJobEncryptionSpec" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobEncryptionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobEncryptionSpec.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/vertexaischedule"

&vertexaischedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobEncryptionSpec {
	KmsKeyName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobEncryptionSpec.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | Resource name of the Cloud KMS key used to protect the resource. |

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobEncryptionSpec.property.kmsKeyName"></a>

```go
KmsKeyName *string
```

- *Type:* *string

Resource name of the Cloud KMS key used to protect the resource.

The Cloud KMS key must be in the same region as the resource. It must have the format 'projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{crypto_key}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_schedule#kms_key_name VertexAiSchedule#kms_key_name}

---

### VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfig <a name="VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfig" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/vertexaischedule"

&vertexaischedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfig {
	DnsPeeringConfigs: interface{},
	NetworkAttachment: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfig.property.dnsPeeringConfigs">DnsPeeringConfigs</a></code> | <code>interface{}</code> | dns_peering_configs block. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfig.property.networkAttachment">NetworkAttachment</a></code> | <code>*string</code> | The name of the Compute Engine [network attachment](https://cloud.google.com/vpc/docs/about-network-attachments) to attach to the resource within the region and user project. To specify this field, you must have already [created a network attachment] (https://cloud.google.com/vpc/docs/create-manage-network-attachments#create-network-attachments). This field is only used for resources using PSC-I. |

---

##### `DnsPeeringConfigs`<sup>Optional</sup> <a name="DnsPeeringConfigs" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfig.property.dnsPeeringConfigs"></a>

```go
DnsPeeringConfigs interface{}
```

- *Type:* interface{}

dns_peering_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_schedule#dns_peering_configs VertexAiSchedule#dns_peering_configs}

---

##### `NetworkAttachment`<sup>Optional</sup> <a name="NetworkAttachment" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfig.property.networkAttachment"></a>

```go
NetworkAttachment *string
```

- *Type:* *string

The name of the Compute Engine [network attachment](https://cloud.google.com/vpc/docs/about-network-attachments) to attach to the resource within the region and user project. To specify this field, you must have already [created a network attachment] (https://cloud.google.com/vpc/docs/create-manage-network-attachments#create-network-attachments). This field is only used for resources using PSC-I.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_schedule#network_attachment VertexAiSchedule#network_attachment}

---

### VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigs <a name="VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigs" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigs.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/vertexaischedule"

&vertexaischedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigs {
	Domain: *string,
	TargetNetwork: *string,
	TargetProject: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigs.property.domain">Domain</a></code> | <code>*string</code> | The DNS name suffix of the zone being peered to, e.g., "my-internal-domain.corp.". Must end with a dot. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigs.property.targetNetwork">TargetNetwork</a></code> | <code>*string</code> | The VPC network name in the target_project where the DNS zone specified by 'domain' is visible. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigs.property.targetProject">TargetProject</a></code> | <code>*string</code> | The project ID hosting the Cloud DNS managed zone that contains the 'domain'. |

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigs.property.domain"></a>

```go
Domain *string
```

- *Type:* *string

The DNS name suffix of the zone being peered to, e.g., "my-internal-domain.corp.". Must end with a dot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_schedule#domain VertexAiSchedule#domain}

---

##### `TargetNetwork`<sup>Required</sup> <a name="TargetNetwork" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigs.property.targetNetwork"></a>

```go
TargetNetwork *string
```

- *Type:* *string

The VPC network name in the target_project where the DNS zone specified by 'domain' is visible.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_schedule#target_network VertexAiSchedule#target_network}

---

##### `TargetProject`<sup>Required</sup> <a name="TargetProject" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigs.property.targetProject"></a>

```go
TargetProject *string
```

- *Type:* *string

The project ID hosting the Cloud DNS managed zone that contains the 'domain'.

The Vertex AI Service Agent requires the dns.peer role on this project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_schedule#target_project VertexAiSchedule#target_project}

---

### VertexAiScheduleCreatePipelineJobRequestPipelineJobRuntimeConfig <a name="VertexAiScheduleCreatePipelineJobRequestPipelineJobRuntimeConfig" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobRuntimeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobRuntimeConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/vertexaischedule"

&vertexaischedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobRuntimeConfig {
	GcsOutputDirectory: *string,
	FailurePolicy: *string,
	InputArtifacts: *map[string]*string,
	ParameterValues: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobRuntimeConfig.property.gcsOutputDirectory">GcsOutputDirectory</a></code> | <code>*string</code> | A path in a Cloud Storage bucket, which will be treated as the root output directory of the pipeline. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobRuntimeConfig.property.failurePolicy">FailurePolicy</a></code> | <code>*string</code> | Possible values: PIPELINE_FAILURE_POLICY_FAIL_SLOW PIPELINE_FAILURE_POLICY_FAIL_FAST. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobRuntimeConfig.property.inputArtifacts">InputArtifacts</a></code> | <code>*map[string]*string</code> | The runtime artifacts of the PipelineJob. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobRuntimeConfig.property.parameterValues">ParameterValues</a></code> | <code>*map[string]*string</code> | The runtime parameters of the PipelineJob. |

---

##### `GcsOutputDirectory`<sup>Required</sup> <a name="GcsOutputDirectory" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobRuntimeConfig.property.gcsOutputDirectory"></a>

```go
GcsOutputDirectory *string
```

- *Type:* *string

A path in a Cloud Storage bucket, which will be treated as the root output directory of the pipeline.

It is used by the system to generate the paths of output artifacts. The artifact paths are generated with a sub-path pattern '{job_id}/{task_id}/{output_key}' under the specified output directory. The service account specified in this pipeline must have the 'storage.objects.get' and 'storage.objects.create' permissions for this bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_schedule#gcs_output_directory VertexAiSchedule#gcs_output_directory}

---

##### `FailurePolicy`<sup>Optional</sup> <a name="FailurePolicy" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobRuntimeConfig.property.failurePolicy"></a>

```go
FailurePolicy *string
```

- *Type:* *string

Possible values: PIPELINE_FAILURE_POLICY_FAIL_SLOW PIPELINE_FAILURE_POLICY_FAIL_FAST.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_schedule#failure_policy VertexAiSchedule#failure_policy}

---

##### `InputArtifacts`<sup>Optional</sup> <a name="InputArtifacts" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobRuntimeConfig.property.inputArtifacts"></a>

```go
InputArtifacts *map[string]*string
```

- *Type:* *map[string]*string

The runtime artifacts of the PipelineJob.

The key will be the input artifact name and the value would be one of the InputArtifact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_schedule#input_artifacts VertexAiSchedule#input_artifacts}

---

##### `ParameterValues`<sup>Optional</sup> <a name="ParameterValues" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobRuntimeConfig.property.parameterValues"></a>

```go
ParameterValues *map[string]*string
```

- *Type:* *map[string]*string

The runtime parameters of the PipelineJob.

The parameters will be passed into PipelineJob.pipeline_spec to replace the placeholders at runtime. This field is used by pipelines built using 'PipelineJob.pipeline_spec.schema_version' 2.1.0, such as pipelines built using Kubeflow Pipelines SDK 1.9 or higher and the v2 DSL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_schedule#parameter_values VertexAiSchedule#parameter_values}

---

### VertexAiScheduleCreatePipelineJobRequestPipelineJobTemplateMetadata <a name="VertexAiScheduleCreatePipelineJobRequestPipelineJobTemplateMetadata" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobTemplateMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobTemplateMetadata.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/vertexaischedule"

&vertexaischedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobTemplateMetadata {

}
```


### VertexAiScheduleLastScheduledRunResponse <a name="VertexAiScheduleLastScheduledRunResponse" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleLastScheduledRunResponse"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleLastScheduledRunResponse.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/vertexaischedule"

&vertexaischedule.VertexAiScheduleLastScheduledRunResponse {

}
```


### VertexAiScheduleTimeouts <a name="VertexAiScheduleTimeouts" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/vertexaischedule"

&vertexaischedule.VertexAiScheduleTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_schedule#create VertexAiSchedule#create}. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_schedule#delete VertexAiSchedule#delete}. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_schedule#update VertexAiSchedule#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_schedule#create VertexAiSchedule#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_schedule#delete VertexAiSchedule#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_schedule#update VertexAiSchedule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference <a name="VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/vertexaischedule"

vertexaischedule.NewVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.putReservationAffinity">PutReservationAffinity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.resetAcceleratorCount">ResetAcceleratorCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.resetAcceleratorType">ResetAcceleratorType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.resetGpuPartitionSize">ResetGpuPartitionSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.resetMachineType">ResetMachineType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.resetReservationAffinity">ResetReservationAffinity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.resetTpuTopology">ResetTpuTopology</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutReservationAffinity` <a name="PutReservationAffinity" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.putReservationAffinity"></a>

```go
func PutReservationAffinity(value VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinity)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.putReservationAffinity.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinity">VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinity</a>

---

##### `ResetAcceleratorCount` <a name="ResetAcceleratorCount" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.resetAcceleratorCount"></a>

```go
func ResetAcceleratorCount()
```

##### `ResetAcceleratorType` <a name="ResetAcceleratorType" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.resetAcceleratorType"></a>

```go
func ResetAcceleratorType()
```

##### `ResetGpuPartitionSize` <a name="ResetGpuPartitionSize" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.resetGpuPartitionSize"></a>

```go
func ResetGpuPartitionSize()
```

##### `ResetMachineType` <a name="ResetMachineType" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.resetMachineType"></a>

```go
func ResetMachineType()
```

##### `ResetReservationAffinity` <a name="ResetReservationAffinity" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.resetReservationAffinity"></a>

```go
func ResetReservationAffinity()
```

##### `ResetTpuTopology` <a name="ResetTpuTopology" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.resetTpuTopology"></a>

```go
func ResetTpuTopology()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.property.reservationAffinity">ReservationAffinity</a></code> | <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference">VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.property.acceleratorCountInput">AcceleratorCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.property.acceleratorTypeInput">AcceleratorTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.property.gpuPartitionSizeInput">GpuPartitionSizeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.property.machineTypeInput">MachineTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.property.reservationAffinityInput">ReservationAffinityInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinity">VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.property.tpuTopologyInput">TpuTopologyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.property.acceleratorCount">AcceleratorCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.property.acceleratorType">AcceleratorType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.property.gpuPartitionSize">GpuPartitionSize</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.property.machineType">MachineType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.property.tpuTopology">TpuTopology</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpec">VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReservationAffinity`<sup>Required</sup> <a name="ReservationAffinity" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.property.reservationAffinity"></a>

```go
func ReservationAffinity() VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference">VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference</a>

---

##### `AcceleratorCountInput`<sup>Optional</sup> <a name="AcceleratorCountInput" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.property.acceleratorCountInput"></a>

```go
func AcceleratorCountInput() *f64
```

- *Type:* *f64

---

##### `AcceleratorTypeInput`<sup>Optional</sup> <a name="AcceleratorTypeInput" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.property.acceleratorTypeInput"></a>

```go
func AcceleratorTypeInput() *string
```

- *Type:* *string

---

##### `GpuPartitionSizeInput`<sup>Optional</sup> <a name="GpuPartitionSizeInput" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.property.gpuPartitionSizeInput"></a>

```go
func GpuPartitionSizeInput() *string
```

- *Type:* *string

---

##### `MachineTypeInput`<sup>Optional</sup> <a name="MachineTypeInput" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.property.machineTypeInput"></a>

```go
func MachineTypeInput() *string
```

- *Type:* *string

---

##### `ReservationAffinityInput`<sup>Optional</sup> <a name="ReservationAffinityInput" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.property.reservationAffinityInput"></a>

```go
func ReservationAffinityInput() VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinity
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinity">VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinity</a>

---

##### `TpuTopologyInput`<sup>Optional</sup> <a name="TpuTopologyInput" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.property.tpuTopologyInput"></a>

```go
func TpuTopologyInput() *string
```

- *Type:* *string

---

##### `AcceleratorCount`<sup>Required</sup> <a name="AcceleratorCount" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.property.acceleratorCount"></a>

```go
func AcceleratorCount() *f64
```

- *Type:* *f64

---

##### `AcceleratorType`<sup>Required</sup> <a name="AcceleratorType" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.property.acceleratorType"></a>

```go
func AcceleratorType() *string
```

- *Type:* *string

---

##### `GpuPartitionSize`<sup>Required</sup> <a name="GpuPartitionSize" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.property.gpuPartitionSize"></a>

```go
func GpuPartitionSize() *string
```

- *Type:* *string

---

##### `MachineType`<sup>Required</sup> <a name="MachineType" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.property.machineType"></a>

```go
func MachineType() *string
```

- *Type:* *string

---

##### `TpuTopology`<sup>Required</sup> <a name="TpuTopology" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.property.tpuTopology"></a>

```go
func TpuTopology() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpec
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpec">VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpec</a>

---


### VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference <a name="VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/vertexaischedule"

vertexaischedule.NewVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.resetUseReservationPool">ResetUseReservationPool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetUseReservationPool` <a name="ResetUseReservationPool" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.resetUseReservationPool"></a>

```go
func ResetUseReservationPool()
```

##### `ResetValues` <a name="ResetValues" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.resetValues"></a>

```go
func ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.property.reservationAffinityTypeInput">ReservationAffinityTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.property.useReservationPoolInput">UseReservationPoolInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.property.reservationAffinityType">ReservationAffinityType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.property.useReservationPool">UseReservationPool</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinity">VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ReservationAffinityTypeInput`<sup>Optional</sup> <a name="ReservationAffinityTypeInput" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.property.reservationAffinityTypeInput"></a>

```go
func ReservationAffinityTypeInput() *string
```

- *Type:* *string

---

##### `UseReservationPoolInput`<sup>Optional</sup> <a name="UseReservationPoolInput" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.property.useReservationPoolInput"></a>

```go
func UseReservationPoolInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `ReservationAffinityType`<sup>Required</sup> <a name="ReservationAffinityType" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.property.reservationAffinityType"></a>

```go
func ReservationAffinityType() *string
```

- *Type:* *string

---

##### `UseReservationPool`<sup>Required</sup> <a name="UseReservationPool" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.property.useReservationPool"></a>

```go
func UseReservationPool() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.property.internalValue"></a>

```go
func InternalValue() VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinity
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinity">VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinity</a>

---


### VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference <a name="VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/vertexaischedule"

vertexaischedule.NewVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.resetEnableInternetAccess">ResetEnableInternetAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.resetNetwork">ResetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.resetSubnetwork">ResetSubnetwork</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnableInternetAccess` <a name="ResetEnableInternetAccess" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.resetEnableInternetAccess"></a>

```go
func ResetEnableInternetAccess()
```

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.resetNetwork"></a>

```go
func ResetNetwork()
```

##### `ResetSubnetwork` <a name="ResetSubnetwork" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.resetSubnetwork"></a>

```go
func ResetSubnetwork()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.property.enableInternetAccessInput">EnableInternetAccessInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.property.networkInput">NetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.property.subnetworkInput">SubnetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.property.enableInternetAccess">EnableInternetAccess</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.property.subnetwork">Subnetwork</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpec">VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnableInternetAccessInput`<sup>Optional</sup> <a name="EnableInternetAccessInput" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.property.enableInternetAccessInput"></a>

```go
func EnableInternetAccessInput() interface{}
```

- *Type:* interface{}

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.property.networkInput"></a>

```go
func NetworkInput() *string
```

- *Type:* *string

---

##### `SubnetworkInput`<sup>Optional</sup> <a name="SubnetworkInput" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.property.subnetworkInput"></a>

```go
func SubnetworkInput() *string
```

- *Type:* *string

---

##### `EnableInternetAccess`<sup>Required</sup> <a name="EnableInternetAccess" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.property.enableInternetAccess"></a>

```go
func EnableInternetAccess() interface{}
```

- *Type:* interface{}

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `Subnetwork`<sup>Required</sup> <a name="Subnetwork" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.property.subnetwork"></a>

```go
func Subnetwork() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpec
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpec">VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpec</a>

---


### VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference <a name="VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/vertexaischedule"

vertexaischedule.NewVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.putMachineSpec">PutMachineSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.putNetworkSpec">PutNetworkSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.putPersistentDiskSpec">PutPersistentDiskSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.resetMachineSpec">ResetMachineSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.resetNetworkSpec">ResetNetworkSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.resetPersistentDiskSpec">ResetPersistentDiskSpec</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMachineSpec` <a name="PutMachineSpec" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.putMachineSpec"></a>

```go
func PutMachineSpec(value VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.putMachineSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpec">VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpec</a>

---

##### `PutNetworkSpec` <a name="PutNetworkSpec" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.putNetworkSpec"></a>

```go
func PutNetworkSpec(value VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.putNetworkSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpec">VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpec</a>

---

##### `PutPersistentDiskSpec` <a name="PutPersistentDiskSpec" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.putPersistentDiskSpec"></a>

```go
func PutPersistentDiskSpec(value VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.putPersistentDiskSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpec">VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpec</a>

---

##### `ResetMachineSpec` <a name="ResetMachineSpec" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.resetMachineSpec"></a>

```go
func ResetMachineSpec()
```

##### `ResetNetworkSpec` <a name="ResetNetworkSpec" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.resetNetworkSpec"></a>

```go
func ResetNetworkSpec()
```

##### `ResetPersistentDiskSpec` <a name="ResetPersistentDiskSpec" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.resetPersistentDiskSpec"></a>

```go
func ResetPersistentDiskSpec()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.property.machineSpec">MachineSpec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference">VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.property.networkSpec">NetworkSpec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference">VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.property.persistentDiskSpec">PersistentDiskSpec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference">VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.property.machineSpecInput">MachineSpecInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpec">VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.property.networkSpecInput">NetworkSpecInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpec">VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.property.persistentDiskSpecInput">PersistentDiskSpecInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpec">VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpec">VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MachineSpec`<sup>Required</sup> <a name="MachineSpec" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.property.machineSpec"></a>

```go
func MachineSpec() VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference">VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference</a>

---

##### `NetworkSpec`<sup>Required</sup> <a name="NetworkSpec" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.property.networkSpec"></a>

```go
func NetworkSpec() VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference">VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference</a>

---

##### `PersistentDiskSpec`<sup>Required</sup> <a name="PersistentDiskSpec" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.property.persistentDiskSpec"></a>

```go
func PersistentDiskSpec() VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference">VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference</a>

---

##### `MachineSpecInput`<sup>Optional</sup> <a name="MachineSpecInput" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.property.machineSpecInput"></a>

```go
func MachineSpecInput() VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpec
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpec">VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpec</a>

---

##### `NetworkSpecInput`<sup>Optional</sup> <a name="NetworkSpecInput" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.property.networkSpecInput"></a>

```go
func NetworkSpecInput() VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpec
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpec">VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpec</a>

---

##### `PersistentDiskSpecInput`<sup>Optional</sup> <a name="PersistentDiskSpecInput" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.property.persistentDiskSpecInput"></a>

```go
func PersistentDiskSpecInput() VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpec
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpec">VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpec</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpec
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpec">VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpec</a>

---


### VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference <a name="VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/vertexaischedule"

vertexaischedule.NewVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference.resetDiskSizeGb">ResetDiskSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference.resetDiskType">ResetDiskType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDiskSizeGb` <a name="ResetDiskSizeGb" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference.resetDiskSizeGb"></a>

```go
func ResetDiskSizeGb()
```

##### `ResetDiskType` <a name="ResetDiskType" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference.resetDiskType"></a>

```go
func ResetDiskType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference.property.diskSizeGbInput">DiskSizeGbInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference.property.diskTypeInput">DiskTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference.property.diskSizeGb">DiskSizeGb</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference.property.diskType">DiskType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpec">VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DiskSizeGbInput`<sup>Optional</sup> <a name="DiskSizeGbInput" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference.property.diskSizeGbInput"></a>

```go
func DiskSizeGbInput() *string
```

- *Type:* *string

---

##### `DiskTypeInput`<sup>Optional</sup> <a name="DiskTypeInput" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference.property.diskTypeInput"></a>

```go
func DiskTypeInput() *string
```

- *Type:* *string

---

##### `DiskSizeGb`<sup>Required</sup> <a name="DiskSizeGb" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference.property.diskSizeGb"></a>

```go
func DiskSizeGb() *string
```

- *Type:* *string

---

##### `DiskType`<sup>Required</sup> <a name="DiskType" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference.property.diskType"></a>

```go
func DiskType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpec
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpec">VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpec</a>

---


### VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference <a name="VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/vertexaischedule"

vertexaischedule.NewVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.resetCommitSha">ResetCommitSha</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.resetDataformRepositoryResourceName">ResetDataformRepositoryResourceName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCommitSha` <a name="ResetCommitSha" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.resetCommitSha"></a>

```go
func ResetCommitSha()
```

##### `ResetDataformRepositoryResourceName` <a name="ResetDataformRepositoryResourceName" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.resetDataformRepositoryResourceName"></a>

```go
func ResetDataformRepositoryResourceName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.property.commitShaInput">CommitShaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.property.dataformRepositoryResourceNameInput">DataformRepositoryResourceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.property.commitSha">CommitSha</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.property.dataformRepositoryResourceName">DataformRepositoryResourceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource">VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CommitShaInput`<sup>Optional</sup> <a name="CommitShaInput" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.property.commitShaInput"></a>

```go
func CommitShaInput() *string
```

- *Type:* *string

---

##### `DataformRepositoryResourceNameInput`<sup>Optional</sup> <a name="DataformRepositoryResourceNameInput" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.property.dataformRepositoryResourceNameInput"></a>

```go
func DataformRepositoryResourceNameInput() *string
```

- *Type:* *string

---

##### `CommitSha`<sup>Required</sup> <a name="CommitSha" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.property.commitSha"></a>

```go
func CommitSha() *string
```

- *Type:* *string

---

##### `DataformRepositoryResourceName`<sup>Required</sup> <a name="DataformRepositoryResourceName" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.property.dataformRepositoryResourceName"></a>

```go
func DataformRepositoryResourceName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.property.internalValue"></a>

```go
func InternalValue() VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource">VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource</a>

---


### VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDirectNotebookSourceOutputReference <a name="VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDirectNotebookSourceOutputReference" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDirectNotebookSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDirectNotebookSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/vertexaischedule"

vertexaischedule.NewVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDirectNotebookSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDirectNotebookSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDirectNotebookSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDirectNotebookSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDirectNotebookSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDirectNotebookSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDirectNotebookSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDirectNotebookSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDirectNotebookSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDirectNotebookSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDirectNotebookSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDirectNotebookSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDirectNotebookSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDirectNotebookSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDirectNotebookSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDirectNotebookSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDirectNotebookSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDirectNotebookSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDirectNotebookSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDirectNotebookSourceOutputReference.resetContent">ResetContent</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDirectNotebookSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDirectNotebookSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDirectNotebookSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDirectNotebookSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDirectNotebookSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDirectNotebookSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDirectNotebookSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDirectNotebookSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDirectNotebookSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDirectNotebookSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDirectNotebookSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDirectNotebookSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDirectNotebookSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDirectNotebookSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDirectNotebookSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDirectNotebookSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDirectNotebookSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDirectNotebookSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDirectNotebookSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDirectNotebookSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDirectNotebookSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDirectNotebookSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDirectNotebookSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDirectNotebookSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContent` <a name="ResetContent" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDirectNotebookSourceOutputReference.resetContent"></a>

```go
func ResetContent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDirectNotebookSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDirectNotebookSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDirectNotebookSourceOutputReference.property.contentInput">ContentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDirectNotebookSourceOutputReference.property.content">Content</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDirectNotebookSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDirectNotebookSource">VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDirectNotebookSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDirectNotebookSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDirectNotebookSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDirectNotebookSourceOutputReference.property.contentInput"></a>

```go
func ContentInput() *string
```

- *Type:* *string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDirectNotebookSourceOutputReference.property.content"></a>

```go
func Content() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDirectNotebookSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDirectNotebookSource
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDirectNotebookSource">VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDirectNotebookSource</a>

---


### VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecOutputReference <a name="VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecOutputReference" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/vertexaischedule"

vertexaischedule.NewVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecOutputReference.property.kmsKeyNameInput">KmsKeyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecOutputReference.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpec">VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsKeyNameInput`<sup>Optional</sup> <a name="KmsKeyNameInput" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecOutputReference.property.kmsKeyNameInput"></a>

```go
func KmsKeyNameInput() *string
```

- *Type:* *string

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecOutputReference.property.kmsKeyName"></a>

```go
func KmsKeyName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpec
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpec">VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpec</a>

---


### VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference <a name="VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/vertexaischedule"

vertexaischedule.NewVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.resetGeneration">ResetGeneration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.resetUri">ResetUri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGeneration` <a name="ResetGeneration" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.resetGeneration"></a>

```go
func ResetGeneration()
```

##### `ResetUri` <a name="ResetUri" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.resetUri"></a>

```go
func ResetUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.property.generationInput">GenerationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.property.uriInput">UriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.property.generation">Generation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.property.uri">Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource">VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GenerationInput`<sup>Optional</sup> <a name="GenerationInput" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.property.generationInput"></a>

```go
func GenerationInput() *string
```

- *Type:* *string

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.property.uriInput"></a>

```go
func UriInput() *string
```

- *Type:* *string

---

##### `Generation`<sup>Required</sup> <a name="Generation" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.property.generation"></a>

```go
func Generation() *string
```

- *Type:* *string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.property.uri"></a>

```go
func Uri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource">VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource</a>

---


### VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference <a name="VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/vertexaischedule"

vertexaischedule.NewVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.putCustomEnvironmentSpec">PutCustomEnvironmentSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.putDataformRepositorySource">PutDataformRepositorySource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.putDirectNotebookSource">PutDirectNotebookSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.putEncryptionSpec">PutEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.putGcsNotebookSource">PutGcsNotebookSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.putWorkbenchRuntime">PutWorkbenchRuntime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.resetCustomEnvironmentSpec">ResetCustomEnvironmentSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.resetDataformRepositorySource">ResetDataformRepositorySource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.resetDirectNotebookSource">ResetDirectNotebookSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.resetEncryptionSpec">ResetEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.resetExecutionTimeout">ResetExecutionTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.resetExecutionUser">ResetExecutionUser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.resetGcsNotebookSource">ResetGcsNotebookSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.resetGcsOutputUri">ResetGcsOutputUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.resetKernelName">ResetKernelName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.resetNotebookRuntimeTemplateResourceName">ResetNotebookRuntimeTemplateResourceName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.resetServiceAccount">ResetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.resetWorkbenchRuntime">ResetWorkbenchRuntime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomEnvironmentSpec` <a name="PutCustomEnvironmentSpec" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.putCustomEnvironmentSpec"></a>

```go
func PutCustomEnvironmentSpec(value VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.putCustomEnvironmentSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpec">VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpec</a>

---

##### `PutDataformRepositorySource` <a name="PutDataformRepositorySource" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.putDataformRepositorySource"></a>

```go
func PutDataformRepositorySource(value VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.putDataformRepositorySource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource">VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource</a>

---

##### `PutDirectNotebookSource` <a name="PutDirectNotebookSource" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.putDirectNotebookSource"></a>

```go
func PutDirectNotebookSource(value VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDirectNotebookSource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.putDirectNotebookSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDirectNotebookSource">VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDirectNotebookSource</a>

---

##### `PutEncryptionSpec` <a name="PutEncryptionSpec" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.putEncryptionSpec"></a>

```go
func PutEncryptionSpec(value VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.putEncryptionSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpec">VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpec</a>

---

##### `PutGcsNotebookSource` <a name="PutGcsNotebookSource" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.putGcsNotebookSource"></a>

```go
func PutGcsNotebookSource(value VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.putGcsNotebookSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource">VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource</a>

---

##### `PutWorkbenchRuntime` <a name="PutWorkbenchRuntime" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.putWorkbenchRuntime"></a>

```go
func PutWorkbenchRuntime(value VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntime)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.putWorkbenchRuntime.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntime">VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntime</a>

---

##### `ResetCustomEnvironmentSpec` <a name="ResetCustomEnvironmentSpec" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.resetCustomEnvironmentSpec"></a>

```go
func ResetCustomEnvironmentSpec()
```

##### `ResetDataformRepositorySource` <a name="ResetDataformRepositorySource" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.resetDataformRepositorySource"></a>

```go
func ResetDataformRepositorySource()
```

##### `ResetDirectNotebookSource` <a name="ResetDirectNotebookSource" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.resetDirectNotebookSource"></a>

```go
func ResetDirectNotebookSource()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetEncryptionSpec` <a name="ResetEncryptionSpec" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.resetEncryptionSpec"></a>

```go
func ResetEncryptionSpec()
```

##### `ResetExecutionTimeout` <a name="ResetExecutionTimeout" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.resetExecutionTimeout"></a>

```go
func ResetExecutionTimeout()
```

##### `ResetExecutionUser` <a name="ResetExecutionUser" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.resetExecutionUser"></a>

```go
func ResetExecutionUser()
```

##### `ResetGcsNotebookSource` <a name="ResetGcsNotebookSource" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.resetGcsNotebookSource"></a>

```go
func ResetGcsNotebookSource()
```

##### `ResetGcsOutputUri` <a name="ResetGcsOutputUri" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.resetGcsOutputUri"></a>

```go
func ResetGcsOutputUri()
```

##### `ResetKernelName` <a name="ResetKernelName" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.resetKernelName"></a>

```go
func ResetKernelName()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetNotebookRuntimeTemplateResourceName` <a name="ResetNotebookRuntimeTemplateResourceName" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.resetNotebookRuntimeTemplateResourceName"></a>

```go
func ResetNotebookRuntimeTemplateResourceName()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.resetParameters"></a>

```go
func ResetParameters()
```

##### `ResetServiceAccount` <a name="ResetServiceAccount" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.resetServiceAccount"></a>

```go
func ResetServiceAccount()
```

##### `ResetWorkbenchRuntime` <a name="ResetWorkbenchRuntime" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.resetWorkbenchRuntime"></a>

```go
func ResetWorkbenchRuntime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.customEnvironmentSpec">CustomEnvironmentSpec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference">VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.dataformRepositorySource">DataformRepositorySource</a></code> | <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference">VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.directNotebookSource">DirectNotebookSource</a></code> | <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDirectNotebookSourceOutputReference">VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDirectNotebookSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.encryptionSpec">EncryptionSpec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecOutputReference">VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.gcsNotebookSource">GcsNotebookSource</a></code> | <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference">VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.jobState">JobState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.scheduleResourceName">ScheduleResourceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.workbenchRuntime">WorkbenchRuntime</a></code> | <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntimeOutputReference">VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.customEnvironmentSpecInput">CustomEnvironmentSpecInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpec">VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.dataformRepositorySourceInput">DataformRepositorySourceInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource">VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.directNotebookSourceInput">DirectNotebookSourceInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDirectNotebookSource">VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDirectNotebookSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.encryptionSpecInput">EncryptionSpecInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpec">VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.executionTimeoutInput">ExecutionTimeoutInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.executionUserInput">ExecutionUserInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.gcsNotebookSourceInput">GcsNotebookSourceInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource">VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.gcsOutputUriInput">GcsOutputUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.kernelNameInput">KernelNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.notebookRuntimeTemplateResourceNameInput">NotebookRuntimeTemplateResourceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.parametersInput">ParametersInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.serviceAccountInput">ServiceAccountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.workbenchRuntimeInput">WorkbenchRuntimeInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntime">VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.executionTimeout">ExecutionTimeout</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.executionUser">ExecutionUser</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.gcsOutputUri">GcsOutputUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.kernelName">KernelName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.notebookRuntimeTemplateResourceName">NotebookRuntimeTemplateResourceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.parameters">Parameters</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.serviceAccount">ServiceAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob">VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `CustomEnvironmentSpec`<sup>Required</sup> <a name="CustomEnvironmentSpec" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.customEnvironmentSpec"></a>

```go
func CustomEnvironmentSpec() VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference">VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference</a>

---

##### `DataformRepositorySource`<sup>Required</sup> <a name="DataformRepositorySource" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.dataformRepositorySource"></a>

```go
func DataformRepositorySource() VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference">VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference</a>

---

##### `DirectNotebookSource`<sup>Required</sup> <a name="DirectNotebookSource" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.directNotebookSource"></a>

```go
func DirectNotebookSource() VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDirectNotebookSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDirectNotebookSourceOutputReference">VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDirectNotebookSourceOutputReference</a>

---

##### `EncryptionSpec`<sup>Required</sup> <a name="EncryptionSpec" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.encryptionSpec"></a>

```go
func EncryptionSpec() VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecOutputReference">VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecOutputReference</a>

---

##### `GcsNotebookSource`<sup>Required</sup> <a name="GcsNotebookSource" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.gcsNotebookSource"></a>

```go
func GcsNotebookSource() VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference">VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference</a>

---

##### `JobState`<sup>Required</sup> <a name="JobState" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.jobState"></a>

```go
func JobState() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ScheduleResourceName`<sup>Required</sup> <a name="ScheduleResourceName" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.scheduleResourceName"></a>

```go
func ScheduleResourceName() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `WorkbenchRuntime`<sup>Required</sup> <a name="WorkbenchRuntime" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.workbenchRuntime"></a>

```go
func WorkbenchRuntime() VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntimeOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntimeOutputReference">VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntimeOutputReference</a>

---

##### `CustomEnvironmentSpecInput`<sup>Optional</sup> <a name="CustomEnvironmentSpecInput" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.customEnvironmentSpecInput"></a>

```go
func CustomEnvironmentSpecInput() VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpec
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpec">VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpec</a>

---

##### `DataformRepositorySourceInput`<sup>Optional</sup> <a name="DataformRepositorySourceInput" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.dataformRepositorySourceInput"></a>

```go
func DataformRepositorySourceInput() VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource">VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource</a>

---

##### `DirectNotebookSourceInput`<sup>Optional</sup> <a name="DirectNotebookSourceInput" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.directNotebookSourceInput"></a>

```go
func DirectNotebookSourceInput() VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDirectNotebookSource
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDirectNotebookSource">VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDirectNotebookSource</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EncryptionSpecInput`<sup>Optional</sup> <a name="EncryptionSpecInput" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.encryptionSpecInput"></a>

```go
func EncryptionSpecInput() VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpec
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpec">VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpec</a>

---

##### `ExecutionTimeoutInput`<sup>Optional</sup> <a name="ExecutionTimeoutInput" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.executionTimeoutInput"></a>

```go
func ExecutionTimeoutInput() *string
```

- *Type:* *string

---

##### `ExecutionUserInput`<sup>Optional</sup> <a name="ExecutionUserInput" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.executionUserInput"></a>

```go
func ExecutionUserInput() *string
```

- *Type:* *string

---

##### `GcsNotebookSourceInput`<sup>Optional</sup> <a name="GcsNotebookSourceInput" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.gcsNotebookSourceInput"></a>

```go
func GcsNotebookSourceInput() VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource">VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource</a>

---

##### `GcsOutputUriInput`<sup>Optional</sup> <a name="GcsOutputUriInput" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.gcsOutputUriInput"></a>

```go
func GcsOutputUriInput() *string
```

- *Type:* *string

---

##### `KernelNameInput`<sup>Optional</sup> <a name="KernelNameInput" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.kernelNameInput"></a>

```go
func KernelNameInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `NotebookRuntimeTemplateResourceNameInput`<sup>Optional</sup> <a name="NotebookRuntimeTemplateResourceNameInput" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.notebookRuntimeTemplateResourceNameInput"></a>

```go
func NotebookRuntimeTemplateResourceNameInput() *string
```

- *Type:* *string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.parametersInput"></a>

```go
func ParametersInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ServiceAccountInput`<sup>Optional</sup> <a name="ServiceAccountInput" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.serviceAccountInput"></a>

```go
func ServiceAccountInput() *string
```

- *Type:* *string

---

##### `WorkbenchRuntimeInput`<sup>Optional</sup> <a name="WorkbenchRuntimeInput" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.workbenchRuntimeInput"></a>

```go
func WorkbenchRuntimeInput() VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntime
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntime">VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntime</a>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `ExecutionTimeout`<sup>Required</sup> <a name="ExecutionTimeout" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.executionTimeout"></a>

```go
func ExecutionTimeout() *string
```

- *Type:* *string

---

##### `ExecutionUser`<sup>Required</sup> <a name="ExecutionUser" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.executionUser"></a>

```go
func ExecutionUser() *string
```

- *Type:* *string

---

##### `GcsOutputUri`<sup>Required</sup> <a name="GcsOutputUri" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.gcsOutputUri"></a>

```go
func GcsOutputUri() *string
```

- *Type:* *string

---

##### `KernelName`<sup>Required</sup> <a name="KernelName" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.kernelName"></a>

```go
func KernelName() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `NotebookRuntimeTemplateResourceName`<sup>Required</sup> <a name="NotebookRuntimeTemplateResourceName" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.notebookRuntimeTemplateResourceName"></a>

```go
func NotebookRuntimeTemplateResourceName() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.parameters"></a>

```go
func Parameters() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.serviceAccount"></a>

```go
func ServiceAccount() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.internalValue"></a>

```go
func InternalValue() VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob">VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob</a>

---


### VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntimeOutputReference <a name="VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntimeOutputReference" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntimeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/vertexaischedule"

vertexaischedule.NewVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntimeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntimeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntimeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntimeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntimeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntimeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntimeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntimeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntimeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntimeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntimeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntimeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntimeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntimeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntimeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntimeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntimeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntimeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntimeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntimeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntimeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntimeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntimeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntimeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntimeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntimeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntimeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntimeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntimeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntimeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntimeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntimeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntime">VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntime</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntimeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntimeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntimeOutputReference.property.internalValue"></a>

```go
func InternalValue() VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntime
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntime">VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntime</a>

---


### VertexAiScheduleCreateNotebookExecutionJobRequestOutputReference <a name="VertexAiScheduleCreateNotebookExecutionJobRequestOutputReference" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/vertexaischedule"

vertexaischedule.NewVertexAiScheduleCreateNotebookExecutionJobRequestOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VertexAiScheduleCreateNotebookExecutionJobRequestOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestOutputReference.putNotebookExecutionJob">PutNotebookExecutionJob</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestOutputReference.resetNotebookExecutionJobId">ResetNotebookExecutionJobId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNotebookExecutionJob` <a name="PutNotebookExecutionJob" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestOutputReference.putNotebookExecutionJob"></a>

```go
func PutNotebookExecutionJob(value VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestOutputReference.putNotebookExecutionJob.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob">VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob</a>

---

##### `ResetNotebookExecutionJobId` <a name="ResetNotebookExecutionJobId" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestOutputReference.resetNotebookExecutionJobId"></a>

```go
func ResetNotebookExecutionJobId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestOutputReference.property.notebookExecutionJob">NotebookExecutionJob</a></code> | <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference">VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestOutputReference.property.notebookExecutionJobIdInput">NotebookExecutionJobIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestOutputReference.property.notebookExecutionJobInput">NotebookExecutionJobInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob">VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestOutputReference.property.parentInput">ParentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestOutputReference.property.notebookExecutionJobId">NotebookExecutionJobId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestOutputReference.property.parent">Parent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequest">VertexAiScheduleCreateNotebookExecutionJobRequest</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NotebookExecutionJob`<sup>Required</sup> <a name="NotebookExecutionJob" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestOutputReference.property.notebookExecutionJob"></a>

```go
func NotebookExecutionJob() VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference">VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference</a>

---

##### `NotebookExecutionJobIdInput`<sup>Optional</sup> <a name="NotebookExecutionJobIdInput" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestOutputReference.property.notebookExecutionJobIdInput"></a>

```go
func NotebookExecutionJobIdInput() *string
```

- *Type:* *string

---

##### `NotebookExecutionJobInput`<sup>Optional</sup> <a name="NotebookExecutionJobInput" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestOutputReference.property.notebookExecutionJobInput"></a>

```go
func NotebookExecutionJobInput() VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob">VertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob</a>

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestOutputReference.property.parentInput"></a>

```go
func ParentInput() *string
```

- *Type:* *string

---

##### `NotebookExecutionJobId`<sup>Required</sup> <a name="NotebookExecutionJobId" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestOutputReference.property.notebookExecutionJobId"></a>

```go
func NotebookExecutionJobId() *string
```

- *Type:* *string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestOutputReference.property.parent"></a>

```go
func Parent() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequestOutputReference.property.internalValue"></a>

```go
func InternalValue() VertexAiScheduleCreateNotebookExecutionJobRequest
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreateNotebookExecutionJobRequest">VertexAiScheduleCreateNotebookExecutionJobRequest</a>

---


### VertexAiScheduleCreatePipelineJobRequestOutputReference <a name="VertexAiScheduleCreatePipelineJobRequestOutputReference" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/vertexaischedule"

vertexaischedule.NewVertexAiScheduleCreatePipelineJobRequestOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VertexAiScheduleCreatePipelineJobRequestOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestOutputReference.putPipelineJob">PutPipelineJob</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestOutputReference.resetPipelineJobId">ResetPipelineJobId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPipelineJob` <a name="PutPipelineJob" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestOutputReference.putPipelineJob"></a>

```go
func PutPipelineJob(value VertexAiScheduleCreatePipelineJobRequestPipelineJob)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestOutputReference.putPipelineJob.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJob">VertexAiScheduleCreatePipelineJobRequestPipelineJob</a>

---

##### `ResetPipelineJobId` <a name="ResetPipelineJobId" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestOutputReference.resetPipelineJobId"></a>

```go
func ResetPipelineJobId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestOutputReference.property.pipelineJob">PipelineJob</a></code> | <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference">VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestOutputReference.property.parentInput">ParentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestOutputReference.property.pipelineJobIdInput">PipelineJobIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestOutputReference.property.pipelineJobInput">PipelineJobInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJob">VertexAiScheduleCreatePipelineJobRequestPipelineJob</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestOutputReference.property.parent">Parent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestOutputReference.property.pipelineJobId">PipelineJobId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequest">VertexAiScheduleCreatePipelineJobRequest</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PipelineJob`<sup>Required</sup> <a name="PipelineJob" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestOutputReference.property.pipelineJob"></a>

```go
func PipelineJob() VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference">VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference</a>

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestOutputReference.property.parentInput"></a>

```go
func ParentInput() *string
```

- *Type:* *string

---

##### `PipelineJobIdInput`<sup>Optional</sup> <a name="PipelineJobIdInput" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestOutputReference.property.pipelineJobIdInput"></a>

```go
func PipelineJobIdInput() *string
```

- *Type:* *string

---

##### `PipelineJobInput`<sup>Optional</sup> <a name="PipelineJobInput" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestOutputReference.property.pipelineJobInput"></a>

```go
func PipelineJobInput() VertexAiScheduleCreatePipelineJobRequestPipelineJob
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJob">VertexAiScheduleCreatePipelineJobRequestPipelineJob</a>

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestOutputReference.property.parent"></a>

```go
func Parent() *string
```

- *Type:* *string

---

##### `PipelineJobId`<sup>Required</sup> <a name="PipelineJobId" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestOutputReference.property.pipelineJobId"></a>

```go
func PipelineJobId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestOutputReference.property.internalValue"></a>

```go
func InternalValue() VertexAiScheduleCreatePipelineJobRequest
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequest">VertexAiScheduleCreatePipelineJobRequest</a>

---


### VertexAiScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecOutputReference <a name="VertexAiScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecOutputReference" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/vertexaischedule"

vertexaischedule.NewVertexAiScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VertexAiScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecOutputReference.property.kmsKeyNameInput">KmsKeyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecOutputReference.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobEncryptionSpec">VertexAiScheduleCreatePipelineJobRequestPipelineJobEncryptionSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsKeyNameInput`<sup>Optional</sup> <a name="KmsKeyNameInput" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecOutputReference.property.kmsKeyNameInput"></a>

```go
func KmsKeyNameInput() *string
```

- *Type:* *string

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecOutputReference.property.kmsKeyName"></a>

```go
func KmsKeyName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() VertexAiScheduleCreatePipelineJobRequestPipelineJobEncryptionSpec
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobEncryptionSpec">VertexAiScheduleCreatePipelineJobRequestPipelineJobEncryptionSpec</a>

---


### VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference <a name="VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/vertexaischedule"

vertexaischedule.NewVertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.putEncryptionSpec">PutEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.putPscInterfaceConfig">PutPscInterfaceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.putRuntimeConfig">PutRuntimeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.resetEncryptionSpec">ResetEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.resetNetwork">ResetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.resetPipelineSpec">ResetPipelineSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.resetPreflightValidations">ResetPreflightValidations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.resetPscInterfaceConfig">ResetPscInterfaceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.resetReservedIpRanges">ResetReservedIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.resetRuntimeConfig">ResetRuntimeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.resetServiceAccount">ResetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.resetTemplateUri">ResetTemplateUri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEncryptionSpec` <a name="PutEncryptionSpec" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.putEncryptionSpec"></a>

```go
func PutEncryptionSpec(value VertexAiScheduleCreatePipelineJobRequestPipelineJobEncryptionSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.putEncryptionSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobEncryptionSpec">VertexAiScheduleCreatePipelineJobRequestPipelineJobEncryptionSpec</a>

---

##### `PutPscInterfaceConfig` <a name="PutPscInterfaceConfig" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.putPscInterfaceConfig"></a>

```go
func PutPscInterfaceConfig(value VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.putPscInterfaceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfig">VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfig</a>

---

##### `PutRuntimeConfig` <a name="PutRuntimeConfig" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.putRuntimeConfig"></a>

```go
func PutRuntimeConfig(value VertexAiScheduleCreatePipelineJobRequestPipelineJobRuntimeConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.putRuntimeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobRuntimeConfig">VertexAiScheduleCreatePipelineJobRequestPipelineJobRuntimeConfig</a>

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetEncryptionSpec` <a name="ResetEncryptionSpec" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.resetEncryptionSpec"></a>

```go
func ResetEncryptionSpec()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.resetNetwork"></a>

```go
func ResetNetwork()
```

##### `ResetPipelineSpec` <a name="ResetPipelineSpec" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.resetPipelineSpec"></a>

```go
func ResetPipelineSpec()
```

##### `ResetPreflightValidations` <a name="ResetPreflightValidations" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.resetPreflightValidations"></a>

```go
func ResetPreflightValidations()
```

##### `ResetPscInterfaceConfig` <a name="ResetPscInterfaceConfig" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.resetPscInterfaceConfig"></a>

```go
func ResetPscInterfaceConfig()
```

##### `ResetReservedIpRanges` <a name="ResetReservedIpRanges" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.resetReservedIpRanges"></a>

```go
func ResetReservedIpRanges()
```

##### `ResetRuntimeConfig` <a name="ResetRuntimeConfig" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.resetRuntimeConfig"></a>

```go
func ResetRuntimeConfig()
```

##### `ResetServiceAccount` <a name="ResetServiceAccount" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.resetServiceAccount"></a>

```go
func ResetServiceAccount()
```

##### `ResetTemplateUri` <a name="ResetTemplateUri" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.resetTemplateUri"></a>

```go
func ResetTemplateUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.encryptionSpec">EncryptionSpec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecOutputReference">VertexAiScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.endTime">EndTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.pscInterfaceConfig">PscInterfaceConfig</a></code> | <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference">VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.runtimeConfig">RuntimeConfig</a></code> | <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference">VertexAiScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.scheduleName">ScheduleName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.startTime">StartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.templateMetadata">TemplateMetadata</a></code> | <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataList">VertexAiScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.encryptionSpecInput">EncryptionSpecInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobEncryptionSpec">VertexAiScheduleCreatePipelineJobRequestPipelineJobEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.networkInput">NetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.pipelineSpecInput">PipelineSpecInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.preflightValidationsInput">PreflightValidationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.pscInterfaceConfigInput">PscInterfaceConfigInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfig">VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.reservedIpRangesInput">ReservedIpRangesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.runtimeConfigInput">RuntimeConfigInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobRuntimeConfig">VertexAiScheduleCreatePipelineJobRequestPipelineJobRuntimeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.serviceAccountInput">ServiceAccountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.templateUriInput">TemplateUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.pipelineSpec">PipelineSpec</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.preflightValidations">PreflightValidations</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.reservedIpRanges">ReservedIpRanges</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.serviceAccount">ServiceAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.templateUri">TemplateUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJob">VertexAiScheduleCreatePipelineJobRequestPipelineJob</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EncryptionSpec`<sup>Required</sup> <a name="EncryptionSpec" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.encryptionSpec"></a>

```go
func EncryptionSpec() VertexAiScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecOutputReference">VertexAiScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecOutputReference</a>

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.endTime"></a>

```go
func EndTime() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PscInterfaceConfig`<sup>Required</sup> <a name="PscInterfaceConfig" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.pscInterfaceConfig"></a>

```go
func PscInterfaceConfig() VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference">VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference</a>

---

##### `RuntimeConfig`<sup>Required</sup> <a name="RuntimeConfig" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.runtimeConfig"></a>

```go
func RuntimeConfig() VertexAiScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference">VertexAiScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference</a>

---

##### `ScheduleName`<sup>Required</sup> <a name="ScheduleName" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.scheduleName"></a>

```go
func ScheduleName() *string
```

- *Type:* *string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.startTime"></a>

```go
func StartTime() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TemplateMetadata`<sup>Required</sup> <a name="TemplateMetadata" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.templateMetadata"></a>

```go
func TemplateMetadata() VertexAiScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataList
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataList">VertexAiScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataList</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EncryptionSpecInput`<sup>Optional</sup> <a name="EncryptionSpecInput" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.encryptionSpecInput"></a>

```go
func EncryptionSpecInput() VertexAiScheduleCreatePipelineJobRequestPipelineJobEncryptionSpec
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobEncryptionSpec">VertexAiScheduleCreatePipelineJobRequestPipelineJobEncryptionSpec</a>

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.networkInput"></a>

```go
func NetworkInput() *string
```

- *Type:* *string

---

##### `PipelineSpecInput`<sup>Optional</sup> <a name="PipelineSpecInput" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.pipelineSpecInput"></a>

```go
func PipelineSpecInput() *string
```

- *Type:* *string

---

##### `PreflightValidationsInput`<sup>Optional</sup> <a name="PreflightValidationsInput" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.preflightValidationsInput"></a>

```go
func PreflightValidationsInput() interface{}
```

- *Type:* interface{}

---

##### `PscInterfaceConfigInput`<sup>Optional</sup> <a name="PscInterfaceConfigInput" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.pscInterfaceConfigInput"></a>

```go
func PscInterfaceConfigInput() VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfig
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfig">VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfig</a>

---

##### `ReservedIpRangesInput`<sup>Optional</sup> <a name="ReservedIpRangesInput" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.reservedIpRangesInput"></a>

```go
func ReservedIpRangesInput() *[]*string
```

- *Type:* *[]*string

---

##### `RuntimeConfigInput`<sup>Optional</sup> <a name="RuntimeConfigInput" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.runtimeConfigInput"></a>

```go
func RuntimeConfigInput() VertexAiScheduleCreatePipelineJobRequestPipelineJobRuntimeConfig
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobRuntimeConfig">VertexAiScheduleCreatePipelineJobRequestPipelineJobRuntimeConfig</a>

---

##### `ServiceAccountInput`<sup>Optional</sup> <a name="ServiceAccountInput" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.serviceAccountInput"></a>

```go
func ServiceAccountInput() *string
```

- *Type:* *string

---

##### `TemplateUriInput`<sup>Optional</sup> <a name="TemplateUriInput" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.templateUriInput"></a>

```go
func TemplateUriInput() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `PipelineSpec`<sup>Required</sup> <a name="PipelineSpec" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.pipelineSpec"></a>

```go
func PipelineSpec() *string
```

- *Type:* *string

---

##### `PreflightValidations`<sup>Required</sup> <a name="PreflightValidations" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.preflightValidations"></a>

```go
func PreflightValidations() interface{}
```

- *Type:* interface{}

---

##### `ReservedIpRanges`<sup>Required</sup> <a name="ReservedIpRanges" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.reservedIpRanges"></a>

```go
func ReservedIpRanges() *[]*string
```

- *Type:* *[]*string

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.serviceAccount"></a>

```go
func ServiceAccount() *string
```

- *Type:* *string

---

##### `TemplateUri`<sup>Required</sup> <a name="TemplateUri" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.templateUri"></a>

```go
func TemplateUri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.internalValue"></a>

```go
func InternalValue() VertexAiScheduleCreatePipelineJobRequestPipelineJob
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJob">VertexAiScheduleCreatePipelineJobRequestPipelineJob</a>

---


### VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsList <a name="VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsList" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/vertexaischedule"

vertexaischedule.NewVertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsList.get"></a>

```go
func Get(index *f64) VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference <a name="VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/vertexaischedule"

vertexaischedule.NewVertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.property.domainInput">DomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetNetworkInput">TargetNetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetProjectInput">TargetProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.property.domain">Domain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetNetwork">TargetNetwork</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetProject">TargetProject</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.property.domainInput"></a>

```go
func DomainInput() *string
```

- *Type:* *string

---

##### `TargetNetworkInput`<sup>Optional</sup> <a name="TargetNetworkInput" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetNetworkInput"></a>

```go
func TargetNetworkInput() *string
```

- *Type:* *string

---

##### `TargetProjectInput`<sup>Optional</sup> <a name="TargetProjectInput" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetProjectInput"></a>

```go
func TargetProjectInput() *string
```

- *Type:* *string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.property.domain"></a>

```go
func Domain() *string
```

- *Type:* *string

---

##### `TargetNetwork`<sup>Required</sup> <a name="TargetNetwork" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetNetwork"></a>

```go
func TargetNetwork() *string
```

- *Type:* *string

---

##### `TargetProject`<sup>Required</sup> <a name="TargetProject" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetProject"></a>

```go
func TargetProject() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference <a name="VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/vertexaischedule"

vertexaischedule.NewVertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference.putDnsPeeringConfigs">PutDnsPeeringConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference.resetDnsPeeringConfigs">ResetDnsPeeringConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference.resetNetworkAttachment">ResetNetworkAttachment</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDnsPeeringConfigs` <a name="PutDnsPeeringConfigs" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference.putDnsPeeringConfigs"></a>

```go
func PutDnsPeeringConfigs(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference.putDnsPeeringConfigs.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDnsPeeringConfigs` <a name="ResetDnsPeeringConfigs" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference.resetDnsPeeringConfigs"></a>

```go
func ResetDnsPeeringConfigs()
```

##### `ResetNetworkAttachment` <a name="ResetNetworkAttachment" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference.resetNetworkAttachment"></a>

```go
func ResetNetworkAttachment()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference.property.dnsPeeringConfigs">DnsPeeringConfigs</a></code> | <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsList">VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference.property.dnsPeeringConfigsInput">DnsPeeringConfigsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference.property.networkAttachmentInput">NetworkAttachmentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference.property.networkAttachment">NetworkAttachment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfig">VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DnsPeeringConfigs`<sup>Required</sup> <a name="DnsPeeringConfigs" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference.property.dnsPeeringConfigs"></a>

```go
func DnsPeeringConfigs() VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsList
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsList">VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsList</a>

---

##### `DnsPeeringConfigsInput`<sup>Optional</sup> <a name="DnsPeeringConfigsInput" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference.property.dnsPeeringConfigsInput"></a>

```go
func DnsPeeringConfigsInput() interface{}
```

- *Type:* interface{}

---

##### `NetworkAttachmentInput`<sup>Optional</sup> <a name="NetworkAttachmentInput" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference.property.networkAttachmentInput"></a>

```go
func NetworkAttachmentInput() *string
```

- *Type:* *string

---

##### `NetworkAttachment`<sup>Required</sup> <a name="NetworkAttachment" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference.property.networkAttachment"></a>

```go
func NetworkAttachment() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfig
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfig">VertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfig</a>

---


### VertexAiScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference <a name="VertexAiScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/vertexaischedule"

vertexaischedule.NewVertexAiScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VertexAiScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.resetFailurePolicy">ResetFailurePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.resetInputArtifacts">ResetInputArtifacts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.resetParameterValues">ResetParameterValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFailurePolicy` <a name="ResetFailurePolicy" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.resetFailurePolicy"></a>

```go
func ResetFailurePolicy()
```

##### `ResetInputArtifacts` <a name="ResetInputArtifacts" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.resetInputArtifacts"></a>

```go
func ResetInputArtifacts()
```

##### `ResetParameterValues` <a name="ResetParameterValues" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.resetParameterValues"></a>

```go
func ResetParameterValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.property.failurePolicyInput">FailurePolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.property.gcsOutputDirectoryInput">GcsOutputDirectoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.property.inputArtifactsInput">InputArtifactsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.property.parameterValuesInput">ParameterValuesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.property.failurePolicy">FailurePolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.property.gcsOutputDirectory">GcsOutputDirectory</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.property.inputArtifacts">InputArtifacts</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.property.parameterValues">ParameterValues</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobRuntimeConfig">VertexAiScheduleCreatePipelineJobRequestPipelineJobRuntimeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FailurePolicyInput`<sup>Optional</sup> <a name="FailurePolicyInput" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.property.failurePolicyInput"></a>

```go
func FailurePolicyInput() *string
```

- *Type:* *string

---

##### `GcsOutputDirectoryInput`<sup>Optional</sup> <a name="GcsOutputDirectoryInput" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.property.gcsOutputDirectoryInput"></a>

```go
func GcsOutputDirectoryInput() *string
```

- *Type:* *string

---

##### `InputArtifactsInput`<sup>Optional</sup> <a name="InputArtifactsInput" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.property.inputArtifactsInput"></a>

```go
func InputArtifactsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ParameterValuesInput`<sup>Optional</sup> <a name="ParameterValuesInput" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.property.parameterValuesInput"></a>

```go
func ParameterValuesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `FailurePolicy`<sup>Required</sup> <a name="FailurePolicy" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.property.failurePolicy"></a>

```go
func FailurePolicy() *string
```

- *Type:* *string

---

##### `GcsOutputDirectory`<sup>Required</sup> <a name="GcsOutputDirectory" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.property.gcsOutputDirectory"></a>

```go
func GcsOutputDirectory() *string
```

- *Type:* *string

---

##### `InputArtifacts`<sup>Required</sup> <a name="InputArtifacts" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.property.inputArtifacts"></a>

```go
func InputArtifacts() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ParameterValues`<sup>Required</sup> <a name="ParameterValues" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.property.parameterValues"></a>

```go
func ParameterValues() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() VertexAiScheduleCreatePipelineJobRequestPipelineJobRuntimeConfig
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobRuntimeConfig">VertexAiScheduleCreatePipelineJobRequestPipelineJobRuntimeConfig</a>

---


### VertexAiScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataList <a name="VertexAiScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataList" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/vertexaischedule"

vertexaischedule.NewVertexAiScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) VertexAiScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataList.get"></a>

```go
func Get(index *f64) VertexAiScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### VertexAiScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataOutputReference <a name="VertexAiScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataOutputReference" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/vertexaischedule"

vertexaischedule.NewVertexAiScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) VertexAiScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobTemplateMetadata">VertexAiScheduleCreatePipelineJobRequestPipelineJobTemplateMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() VertexAiScheduleCreatePipelineJobRequestPipelineJobTemplateMetadata
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleCreatePipelineJobRequestPipelineJobTemplateMetadata">VertexAiScheduleCreatePipelineJobRequestPipelineJobTemplateMetadata</a>

---


### VertexAiScheduleLastScheduledRunResponseList <a name="VertexAiScheduleLastScheduledRunResponseList" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleLastScheduledRunResponseList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleLastScheduledRunResponseList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/vertexaischedule"

vertexaischedule.NewVertexAiScheduleLastScheduledRunResponseList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) VertexAiScheduleLastScheduledRunResponseList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleLastScheduledRunResponseList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleLastScheduledRunResponseList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleLastScheduledRunResponseList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleLastScheduledRunResponseList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleLastScheduledRunResponseList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleLastScheduledRunResponseList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleLastScheduledRunResponseList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleLastScheduledRunResponseList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleLastScheduledRunResponseList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleLastScheduledRunResponseList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleLastScheduledRunResponseList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleLastScheduledRunResponseList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleLastScheduledRunResponseList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleLastScheduledRunResponseList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleLastScheduledRunResponseList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleLastScheduledRunResponseList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleLastScheduledRunResponseList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleLastScheduledRunResponseList.get"></a>

```go
func Get(index *f64) VertexAiScheduleLastScheduledRunResponseOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleLastScheduledRunResponseList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleLastScheduledRunResponseList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleLastScheduledRunResponseList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleLastScheduledRunResponseList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleLastScheduledRunResponseList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### VertexAiScheduleLastScheduledRunResponseOutputReference <a name="VertexAiScheduleLastScheduledRunResponseOutputReference" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleLastScheduledRunResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleLastScheduledRunResponseOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/vertexaischedule"

vertexaischedule.NewVertexAiScheduleLastScheduledRunResponseOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) VertexAiScheduleLastScheduledRunResponseOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleLastScheduledRunResponseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleLastScheduledRunResponseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleLastScheduledRunResponseOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleLastScheduledRunResponseOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleLastScheduledRunResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleLastScheduledRunResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleLastScheduledRunResponseOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleLastScheduledRunResponseOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleLastScheduledRunResponseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleLastScheduledRunResponseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleLastScheduledRunResponseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleLastScheduledRunResponseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleLastScheduledRunResponseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleLastScheduledRunResponseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleLastScheduledRunResponseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleLastScheduledRunResponseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleLastScheduledRunResponseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleLastScheduledRunResponseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleLastScheduledRunResponseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleLastScheduledRunResponseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleLastScheduledRunResponseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleLastScheduledRunResponseOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleLastScheduledRunResponseOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleLastScheduledRunResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleLastScheduledRunResponseOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleLastScheduledRunResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleLastScheduledRunResponseOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleLastScheduledRunResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleLastScheduledRunResponseOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleLastScheduledRunResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleLastScheduledRunResponseOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleLastScheduledRunResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleLastScheduledRunResponseOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleLastScheduledRunResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleLastScheduledRunResponseOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleLastScheduledRunResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleLastScheduledRunResponseOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleLastScheduledRunResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleLastScheduledRunResponseOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleLastScheduledRunResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleLastScheduledRunResponseOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleLastScheduledRunResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleLastScheduledRunResponseOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleLastScheduledRunResponseOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleLastScheduledRunResponseOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleLastScheduledRunResponseOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleLastScheduledRunResponseOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleLastScheduledRunResponseOutputReference.property.runResponse">RunResponse</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleLastScheduledRunResponseOutputReference.property.scheduledRunTime">ScheduledRunTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleLastScheduledRunResponseOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleLastScheduledRunResponse">VertexAiScheduleLastScheduledRunResponse</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleLastScheduledRunResponseOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleLastScheduledRunResponseOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RunResponse`<sup>Required</sup> <a name="RunResponse" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleLastScheduledRunResponseOutputReference.property.runResponse"></a>

```go
func RunResponse() *string
```

- *Type:* *string

---

##### `ScheduledRunTime`<sup>Required</sup> <a name="ScheduledRunTime" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleLastScheduledRunResponseOutputReference.property.scheduledRunTime"></a>

```go
func ScheduledRunTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleLastScheduledRunResponseOutputReference.property.internalValue"></a>

```go
func InternalValue() VertexAiScheduleLastScheduledRunResponse
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleLastScheduledRunResponse">VertexAiScheduleLastScheduledRunResponse</a>

---


### VertexAiScheduleTimeoutsOutputReference <a name="VertexAiScheduleTimeoutsOutputReference" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/vertexaischedule"

vertexaischedule.NewVertexAiScheduleTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VertexAiScheduleTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiSchedule.VertexAiScheduleTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



