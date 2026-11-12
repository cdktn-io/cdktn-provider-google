# `dataLineageOpenLineageJob` Submodule <a name="`dataLineageOpenLineageJob` Submodule" id="@cdktn/provider-google.dataLineageOpenLineageJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataLineageOpenLineageJob <a name="DataLineageOpenLineageJob" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job google_data_lineage_open_lineage_job}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/datalineageopenlineagejob"

datalineageopenlineagejob.NewDataLineageOpenLineageJob(scope Construct, id *string, config DataLineageOpenLineageJobConfig) DataLineageOpenLineageJob
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig">DataLineageOpenLineageJobConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig">DataLineageOpenLineageJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.putInput">PutInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.putOutput">PutOutput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.resetInput">ResetInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.resetOutput">ResetOutput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutInput` <a name="PutInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.putInput"></a>

```go
func PutInput(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.putInput.parameter.value"></a>

- *Type:* interface{}

---

##### `PutOutput` <a name="PutOutput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.putOutput"></a>

```go
func PutOutput(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.putOutput.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.putTimeouts"></a>

```go
func PutTimeouts(value DataLineageOpenLineageJobTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeouts">DataLineageOpenLineageJobTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.resetId"></a>

```go
func ResetId()
```

##### `ResetInput` <a name="ResetInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.resetInput"></a>

```go
func ResetInput()
```

##### `ResetOutput` <a name="ResetOutput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.resetOutput"></a>

```go
func ResetOutput()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataLineageOpenLineageJob resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/datalineageopenlineagejob"

datalineageopenlineagejob.DataLineageOpenLineageJob_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/datalineageopenlineagejob"

datalineageopenlineagejob.DataLineageOpenLineageJob_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/datalineageopenlineagejob"

datalineageopenlineagejob.DataLineageOpenLineageJob_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/datalineageopenlineagejob"

datalineageopenlineagejob.DataLineageOpenLineageJob_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataLineageOpenLineageJob resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataLineageOpenLineageJob to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataLineageOpenLineageJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataLineageOpenLineageJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.input">Input</a></code> | <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList">DataLineageOpenLineageJobInputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.output">Output</a></code> | <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList">DataLineageOpenLineageJobOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.process">Process</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.run">Run</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference">DataLineageOpenLineageJobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.inputInput">InputInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.outputInput">OutputInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Input`<sup>Required</sup> <a name="Input" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.input"></a>

```go
func Input() DataLineageOpenLineageJobInputList
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList">DataLineageOpenLineageJobInputList</a>

---

##### `Output`<sup>Required</sup> <a name="Output" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.output"></a>

```go
func Output() DataLineageOpenLineageJobOutputList
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList">DataLineageOpenLineageJobOutputList</a>

---

##### `Process`<sup>Required</sup> <a name="Process" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.process"></a>

```go
func Process() *string
```

- *Type:* *string

---

##### `Run`<sup>Required</sup> <a name="Run" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.run"></a>

```go
func Run() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.timeouts"></a>

```go
func Timeouts() DataLineageOpenLineageJobTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference">DataLineageOpenLineageJobTimeoutsOutputReference</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InputInput`<sup>Optional</sup> <a name="InputInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.inputInput"></a>

```go
func InputInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `OutputInput`<sup>Optional</sup> <a name="OutputInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.outputInput"></a>

```go
func OutputInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataLineageOpenLineageJobConfig <a name="DataLineageOpenLineageJobConfig" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/datalineageopenlineagejob"

&datalineageopenlineagejob.DataLineageOpenLineageJobConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Namespace: *string,
	DeletionPolicy: *string,
	Description: *string,
	Id: *string,
	Input: interface{},
	Output: interface{},
	Timeouts: github.com/cdktn-io/cdktn-provider-google-go/google/v22.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.name">Name</a></code> | <code>*string</code> | Name of the OpenLineage job. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Namespace of the OpenLineage job. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.description">Description</a></code> | <code>*string</code> | Description of the OpenLineage job. Changes to description do not trigger updates. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#id DataLineageOpenLineageJob#id}. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.input">Input</a></code> | <code>interface{}</code> | input block. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.output">Output</a></code> | <code>interface{}</code> | output block. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeouts">DataLineageOpenLineageJobTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the OpenLineage job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#name DataLineageOpenLineageJob#name}

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Namespace of the OpenLineage job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#namespace DataLineageOpenLineageJob#namespace}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#deletion_policy DataLineageOpenLineageJob#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Description of the OpenLineage job. Changes to description do not trigger updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#description DataLineageOpenLineageJob#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#id DataLineageOpenLineageJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Input`<sup>Optional</sup> <a name="Input" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.input"></a>

```go
Input interface{}
```

- *Type:* interface{}

input block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#input DataLineageOpenLineageJob#input}

---

##### `Output`<sup>Optional</sup> <a name="Output" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.output"></a>

```go
Output interface{}
```

- *Type:* interface{}

output block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#output DataLineageOpenLineageJob#output}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.timeouts"></a>

```go
Timeouts DataLineageOpenLineageJobTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeouts">DataLineageOpenLineageJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#timeouts DataLineageOpenLineageJob#timeouts}

---

### DataLineageOpenLineageJobInput <a name="DataLineageOpenLineageJobInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/datalineageopenlineagejob"

&datalineageopenlineagejob.DataLineageOpenLineageJobInput {
	Name: *string,
	Namespace: *string,
	Catalog: github.com/cdktn-io/cdktn-provider-google-go/google/v22.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalog,
	Symlink: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInput.property.name">Name</a></code> | <code>*string</code> | Name of the dataset. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInput.property.namespace">Namespace</a></code> | <code>*string</code> | Namespace of the dataset. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInput.property.catalog">Catalog</a></code> | <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalog">DataLineageOpenLineageJobInputCatalog</a></code> | catalog block. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInput.property.symlink">Symlink</a></code> | <code>interface{}</code> | symlink block. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInput.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#name DataLineageOpenLineageJob#name}

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInput.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Namespace of the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#namespace DataLineageOpenLineageJob#namespace}

---

##### `Catalog`<sup>Optional</sup> <a name="Catalog" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInput.property.catalog"></a>

```go
Catalog DataLineageOpenLineageJobInputCatalog
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalog">DataLineageOpenLineageJobInputCatalog</a>

catalog block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#catalog DataLineageOpenLineageJob#catalog}

---

##### `Symlink`<sup>Optional</sup> <a name="Symlink" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInput.property.symlink"></a>

```go
Symlink interface{}
```

- *Type:* interface{}

symlink block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#symlink DataLineageOpenLineageJob#symlink}

---

### DataLineageOpenLineageJobInputCatalog <a name="DataLineageOpenLineageJobInputCatalog" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalog"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalog.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/datalineageopenlineagejob"

&datalineageopenlineagejob.DataLineageOpenLineageJobInputCatalog {
	Framework: *string,
	Name: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalog.property.framework">Framework</a></code> | <code>*string</code> | Catalog framework. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalog.property.name">Name</a></code> | <code>*string</code> | Catalog entity name. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalog.property.type">Type</a></code> | <code>*string</code> | Catalog entity type. |

---

##### `Framework`<sup>Required</sup> <a name="Framework" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalog.property.framework"></a>

```go
Framework *string
```

- *Type:* *string

Catalog framework.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#framework DataLineageOpenLineageJob#framework}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalog.property.name"></a>

```go
Name *string
```

- *Type:* *string

Catalog entity name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#name DataLineageOpenLineageJob#name}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalog.property.type"></a>

```go
Type *string
```

- *Type:* *string

Catalog entity type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#type DataLineageOpenLineageJob#type}

---

### DataLineageOpenLineageJobInputSymlink <a name="DataLineageOpenLineageJobInputSymlink" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlink"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlink.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/datalineageopenlineagejob"

&datalineageopenlineagejob.DataLineageOpenLineageJobInputSymlink {
	Name: *string,
	Namespace: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlink.property.name">Name</a></code> | <code>*string</code> | Name of the symlink target. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlink.property.namespace">Namespace</a></code> | <code>*string</code> | Namespace of the symlink target. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlink.property.type">Type</a></code> | <code>*string</code> | Type of the symlink target. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlink.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the symlink target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#name DataLineageOpenLineageJob#name}

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlink.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Namespace of the symlink target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#namespace DataLineageOpenLineageJob#namespace}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlink.property.type"></a>

```go
Type *string
```

- *Type:* *string

Type of the symlink target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#type DataLineageOpenLineageJob#type}

---

### DataLineageOpenLineageJobOutput <a name="DataLineageOpenLineageJobOutput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/datalineageopenlineagejob"

&datalineageopenlineagejob.DataLineageOpenLineageJobOutput {
	Name: *string,
	Namespace: *string,
	Catalog: github.com/cdktn-io/cdktn-provider-google-go/google/v22.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalog,
	ColumnLineage: github.com/cdktn-io/cdktn-provider-google-go/google/v22.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineage,
	Symlink: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutput.property.name">Name</a></code> | <code>*string</code> | Name of the dataset. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutput.property.namespace">Namespace</a></code> | <code>*string</code> | Namespace of the dataset. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutput.property.catalog">Catalog</a></code> | <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalog">DataLineageOpenLineageJobOutputCatalog</a></code> | catalog block. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutput.property.columnLineage">ColumnLineage</a></code> | <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineage">DataLineageOpenLineageJobOutputColumnLineage</a></code> | column_lineage block. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutput.property.symlink">Symlink</a></code> | <code>interface{}</code> | symlink block. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutput.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#name DataLineageOpenLineageJob#name}

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutput.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Namespace of the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#namespace DataLineageOpenLineageJob#namespace}

---

##### `Catalog`<sup>Optional</sup> <a name="Catalog" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutput.property.catalog"></a>

```go
Catalog DataLineageOpenLineageJobOutputCatalog
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalog">DataLineageOpenLineageJobOutputCatalog</a>

catalog block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#catalog DataLineageOpenLineageJob#catalog}

---

##### `ColumnLineage`<sup>Optional</sup> <a name="ColumnLineage" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutput.property.columnLineage"></a>

```go
ColumnLineage DataLineageOpenLineageJobOutputColumnLineage
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineage">DataLineageOpenLineageJobOutputColumnLineage</a>

column_lineage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#column_lineage DataLineageOpenLineageJob#column_lineage}

---

##### `Symlink`<sup>Optional</sup> <a name="Symlink" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutput.property.symlink"></a>

```go
Symlink interface{}
```

- *Type:* interface{}

symlink block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#symlink DataLineageOpenLineageJob#symlink}

---

### DataLineageOpenLineageJobOutputCatalog <a name="DataLineageOpenLineageJobOutputCatalog" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalog"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalog.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/datalineageopenlineagejob"

&datalineageopenlineagejob.DataLineageOpenLineageJobOutputCatalog {
	Framework: *string,
	Name: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalog.property.framework">Framework</a></code> | <code>*string</code> | Catalog framework. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalog.property.name">Name</a></code> | <code>*string</code> | Catalog entity name. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalog.property.type">Type</a></code> | <code>*string</code> | Catalog entity type. |

---

##### `Framework`<sup>Required</sup> <a name="Framework" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalog.property.framework"></a>

```go
Framework *string
```

- *Type:* *string

Catalog framework.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#framework DataLineageOpenLineageJob#framework}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalog.property.name"></a>

```go
Name *string
```

- *Type:* *string

Catalog entity name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#name DataLineageOpenLineageJob#name}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalog.property.type"></a>

```go
Type *string
```

- *Type:* *string

Catalog entity type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#type DataLineageOpenLineageJob#type}

---

### DataLineageOpenLineageJobOutputColumnLineage <a name="DataLineageOpenLineageJobOutputColumnLineage" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineage.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/datalineageopenlineagejob"

&datalineageopenlineagejob.DataLineageOpenLineageJobOutputColumnLineage {
	Field: interface{},
	DatasetInput: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineage.property.field">Field</a></code> | <code>interface{}</code> | field block. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineage.property.datasetInput">DatasetInput</a></code> | <code>interface{}</code> | dataset_input block. |

---

##### `Field`<sup>Required</sup> <a name="Field" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineage.property.field"></a>

```go
Field interface{}
```

- *Type:* interface{}

field block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#field DataLineageOpenLineageJob#field}

---

##### `DatasetInput`<sup>Optional</sup> <a name="DatasetInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineage.property.datasetInput"></a>

```go
DatasetInput interface{}
```

- *Type:* interface{}

dataset_input block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#dataset_input DataLineageOpenLineageJob#dataset_input}

---

### DataLineageOpenLineageJobOutputColumnLineageDatasetInput <a name="DataLineageOpenLineageJobOutputColumnLineageDatasetInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/datalineageopenlineagejob"

&datalineageopenlineagejob.DataLineageOpenLineageJobOutputColumnLineageDatasetInput {
	Field: *string,
	Name: *string,
	Namespace: *string,
	Transformation: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInput.property.field">Field</a></code> | <code>*string</code> | Source field name. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInput.property.name">Name</a></code> | <code>*string</code> | Name of the source dataset. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInput.property.namespace">Namespace</a></code> | <code>*string</code> | Namespace of the source dataset. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInput.property.transformation">Transformation</a></code> | <code>interface{}</code> | transformation block. |

---

##### `Field`<sup>Required</sup> <a name="Field" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInput.property.field"></a>

```go
Field *string
```

- *Type:* *string

Source field name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#field DataLineageOpenLineageJob#field}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInput.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the source dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#name DataLineageOpenLineageJob#name}

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInput.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Namespace of the source dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#namespace DataLineageOpenLineageJob#namespace}

---

##### `Transformation`<sup>Optional</sup> <a name="Transformation" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInput.property.transformation"></a>

```go
Transformation interface{}
```

- *Type:* interface{}

transformation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#transformation DataLineageOpenLineageJob#transformation}

---

### DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation <a name="DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/datalineageopenlineagejob"

&datalineageopenlineagejob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation {
	Type: *string,
	Subtype: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation.property.type">Type</a></code> | <code>*string</code> | Transformation type. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation.property.subtype">Subtype</a></code> | <code>*string</code> | Transformation subtype. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation.property.type"></a>

```go
Type *string
```

- *Type:* *string

Transformation type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#type DataLineageOpenLineageJob#type}

---

##### `Subtype`<sup>Optional</sup> <a name="Subtype" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation.property.subtype"></a>

```go
Subtype *string
```

- *Type:* *string

Transformation subtype.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#subtype DataLineageOpenLineageJob#subtype}

---

### DataLineageOpenLineageJobOutputColumnLineageField <a name="DataLineageOpenLineageJobOutputColumnLineageField" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageField"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageField.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/datalineageopenlineagejob"

&datalineageopenlineagejob.DataLineageOpenLineageJobOutputColumnLineageField {
	Input: interface{},
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageField.property.input">Input</a></code> | <code>interface{}</code> | input block. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageField.property.name">Name</a></code> | <code>*string</code> | Output field name. |

---

##### `Input`<sup>Required</sup> <a name="Input" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageField.property.input"></a>

```go
Input interface{}
```

- *Type:* interface{}

input block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#input DataLineageOpenLineageJob#input}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageField.property.name"></a>

```go
Name *string
```

- *Type:* *string

Output field name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#name DataLineageOpenLineageJob#name}

---

### DataLineageOpenLineageJobOutputColumnLineageFieldInput <a name="DataLineageOpenLineageJobOutputColumnLineageFieldInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/datalineageopenlineagejob"

&datalineageopenlineagejob.DataLineageOpenLineageJobOutputColumnLineageFieldInput {
	Field: *string,
	Name: *string,
	Namespace: *string,
	Transformation: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInput.property.field">Field</a></code> | <code>*string</code> | Source field name. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInput.property.name">Name</a></code> | <code>*string</code> | Name of the source dataset. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInput.property.namespace">Namespace</a></code> | <code>*string</code> | Namespace of the source dataset. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInput.property.transformation">Transformation</a></code> | <code>interface{}</code> | transformation block. |

---

##### `Field`<sup>Required</sup> <a name="Field" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInput.property.field"></a>

```go
Field *string
```

- *Type:* *string

Source field name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#field DataLineageOpenLineageJob#field}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInput.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the source dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#name DataLineageOpenLineageJob#name}

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInput.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Namespace of the source dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#namespace DataLineageOpenLineageJob#namespace}

---

##### `Transformation`<sup>Optional</sup> <a name="Transformation" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInput.property.transformation"></a>

```go
Transformation interface{}
```

- *Type:* interface{}

transformation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#transformation DataLineageOpenLineageJob#transformation}

---

### DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation <a name="DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/datalineageopenlineagejob"

&datalineageopenlineagejob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation {
	Type: *string,
	Subtype: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation.property.type">Type</a></code> | <code>*string</code> | Transformation type. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation.property.subtype">Subtype</a></code> | <code>*string</code> | Transformation subtype. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation.property.type"></a>

```go
Type *string
```

- *Type:* *string

Transformation type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#type DataLineageOpenLineageJob#type}

---

##### `Subtype`<sup>Optional</sup> <a name="Subtype" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation.property.subtype"></a>

```go
Subtype *string
```

- *Type:* *string

Transformation subtype.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#subtype DataLineageOpenLineageJob#subtype}

---

### DataLineageOpenLineageJobOutputSymlink <a name="DataLineageOpenLineageJobOutputSymlink" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlink"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlink.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/datalineageopenlineagejob"

&datalineageopenlineagejob.DataLineageOpenLineageJobOutputSymlink {
	Name: *string,
	Namespace: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlink.property.name">Name</a></code> | <code>*string</code> | Name of the symlink target. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlink.property.namespace">Namespace</a></code> | <code>*string</code> | Namespace of the symlink target. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlink.property.type">Type</a></code> | <code>*string</code> | Type of the symlink target. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlink.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the symlink target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#name DataLineageOpenLineageJob#name}

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlink.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Namespace of the symlink target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#namespace DataLineageOpenLineageJob#namespace}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlink.property.type"></a>

```go
Type *string
```

- *Type:* *string

Type of the symlink target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#type DataLineageOpenLineageJob#type}

---

### DataLineageOpenLineageJobTimeouts <a name="DataLineageOpenLineageJobTimeouts" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/datalineageopenlineagejob"

&datalineageopenlineagejob.DataLineageOpenLineageJobTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#create DataLineageOpenLineageJob#create}. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#delete DataLineageOpenLineageJob#delete}. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#update DataLineageOpenLineageJob#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#create DataLineageOpenLineageJob#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#delete DataLineageOpenLineageJob#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#update DataLineageOpenLineageJob#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataLineageOpenLineageJobInputCatalogOutputReference <a name="DataLineageOpenLineageJobInputCatalogOutputReference" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/datalineageopenlineagejob"

datalineageopenlineagejob.NewDataLineageOpenLineageJobInputCatalogOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataLineageOpenLineageJobInputCatalogOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.property.frameworkInput">FrameworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.property.framework">Framework</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalog">DataLineageOpenLineageJobInputCatalog</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FrameworkInput`<sup>Optional</sup> <a name="FrameworkInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.property.frameworkInput"></a>

```go
func FrameworkInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Framework`<sup>Required</sup> <a name="Framework" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.property.framework"></a>

```go
func Framework() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.property.internalValue"></a>

```go
func InternalValue() DataLineageOpenLineageJobInputCatalog
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalog">DataLineageOpenLineageJobInputCatalog</a>

---


### DataLineageOpenLineageJobInputList <a name="DataLineageOpenLineageJobInputList" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/datalineageopenlineagejob"

datalineageopenlineagejob.NewDataLineageOpenLineageJobInputList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataLineageOpenLineageJobInputList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList.get"></a>

```go
func Get(index *f64) DataLineageOpenLineageJobInputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataLineageOpenLineageJobInputOutputReference <a name="DataLineageOpenLineageJobInputOutputReference" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/datalineageopenlineagejob"

datalineageopenlineagejob.NewDataLineageOpenLineageJobInputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataLineageOpenLineageJobInputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.putCatalog">PutCatalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.putSymlink">PutSymlink</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.resetCatalog">ResetCatalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.resetSymlink">ResetSymlink</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCatalog` <a name="PutCatalog" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.putCatalog"></a>

```go
func PutCatalog(value DataLineageOpenLineageJobInputCatalog)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.putCatalog.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalog">DataLineageOpenLineageJobInputCatalog</a>

---

##### `PutSymlink` <a name="PutSymlink" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.putSymlink"></a>

```go
func PutSymlink(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.putSymlink.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCatalog` <a name="ResetCatalog" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.resetCatalog"></a>

```go
func ResetCatalog()
```

##### `ResetSymlink` <a name="ResetSymlink" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.resetSymlink"></a>

```go
func ResetSymlink()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.property.catalog">Catalog</a></code> | <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference">DataLineageOpenLineageJobInputCatalogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.property.symlink">Symlink</a></code> | <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList">DataLineageOpenLineageJobInputSymlinkList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.property.catalogInput">CatalogInput</a></code> | <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalog">DataLineageOpenLineageJobInputCatalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.property.symlinkInput">SymlinkInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Catalog`<sup>Required</sup> <a name="Catalog" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.property.catalog"></a>

```go
func Catalog() DataLineageOpenLineageJobInputCatalogOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference">DataLineageOpenLineageJobInputCatalogOutputReference</a>

---

##### `Symlink`<sup>Required</sup> <a name="Symlink" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.property.symlink"></a>

```go
func Symlink() DataLineageOpenLineageJobInputSymlinkList
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList">DataLineageOpenLineageJobInputSymlinkList</a>

---

##### `CatalogInput`<sup>Optional</sup> <a name="CatalogInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.property.catalogInput"></a>

```go
func CatalogInput() DataLineageOpenLineageJobInputCatalog
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalog">DataLineageOpenLineageJobInputCatalog</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `SymlinkInput`<sup>Optional</sup> <a name="SymlinkInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.property.symlinkInput"></a>

```go
func SymlinkInput() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataLineageOpenLineageJobInputSymlinkList <a name="DataLineageOpenLineageJobInputSymlinkList" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/datalineageopenlineagejob"

datalineageopenlineagejob.NewDataLineageOpenLineageJobInputSymlinkList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataLineageOpenLineageJobInputSymlinkList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList.get"></a>

```go
func Get(index *f64) DataLineageOpenLineageJobInputSymlinkOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataLineageOpenLineageJobInputSymlinkOutputReference <a name="DataLineageOpenLineageJobInputSymlinkOutputReference" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/datalineageopenlineagejob"

datalineageopenlineagejob.NewDataLineageOpenLineageJobInputSymlinkOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataLineageOpenLineageJobInputSymlinkOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataLineageOpenLineageJobOutputCatalogOutputReference <a name="DataLineageOpenLineageJobOutputCatalogOutputReference" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/datalineageopenlineagejob"

datalineageopenlineagejob.NewDataLineageOpenLineageJobOutputCatalogOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataLineageOpenLineageJobOutputCatalogOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.property.frameworkInput">FrameworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.property.framework">Framework</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalog">DataLineageOpenLineageJobOutputCatalog</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FrameworkInput`<sup>Optional</sup> <a name="FrameworkInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.property.frameworkInput"></a>

```go
func FrameworkInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Framework`<sup>Required</sup> <a name="Framework" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.property.framework"></a>

```go
func Framework() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.property.internalValue"></a>

```go
func InternalValue() DataLineageOpenLineageJobOutputCatalog
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalog">DataLineageOpenLineageJobOutputCatalog</a>

---


### DataLineageOpenLineageJobOutputColumnLineageDatasetInputList <a name="DataLineageOpenLineageJobOutputColumnLineageDatasetInputList" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/datalineageopenlineagejob"

datalineageopenlineagejob.NewDataLineageOpenLineageJobOutputColumnLineageDatasetInputList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataLineageOpenLineageJobOutputColumnLineageDatasetInputList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList.get"></a>

```go
func Get(index *f64) DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference <a name="DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/datalineageopenlineagejob"

datalineageopenlineagejob.NewDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.putTransformation">PutTransformation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.resetTransformation">ResetTransformation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTransformation` <a name="PutTransformation" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.putTransformation"></a>

```go
func PutTransformation(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.putTransformation.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetTransformation` <a name="ResetTransformation" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.resetTransformation"></a>

```go
func ResetTransformation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.transformation">Transformation</a></code> | <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList">DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.fieldInput">FieldInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.transformationInput">TransformationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.field">Field</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Transformation`<sup>Required</sup> <a name="Transformation" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.transformation"></a>

```go
func Transformation() DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList">DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList</a>

---

##### `FieldInput`<sup>Optional</sup> <a name="FieldInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.fieldInput"></a>

```go
func FieldInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `TransformationInput`<sup>Optional</sup> <a name="TransformationInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.transformationInput"></a>

```go
func TransformationInput() interface{}
```

- *Type:* interface{}

---

##### `Field`<sup>Required</sup> <a name="Field" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.field"></a>

```go
func Field() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList <a name="DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/datalineageopenlineagejob"

datalineageopenlineagejob.NewDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.get"></a>

```go
func Get(index *f64) DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference <a name="DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/datalineageopenlineagejob"

datalineageopenlineagejob.NewDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.resetSubtype">ResetSubtype</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSubtype` <a name="ResetSubtype" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.resetSubtype"></a>

```go
func ResetSubtype()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.subtypeInput">SubtypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.subtype">Subtype</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SubtypeInput`<sup>Optional</sup> <a name="SubtypeInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.subtypeInput"></a>

```go
func SubtypeInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Subtype`<sup>Required</sup> <a name="Subtype" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.subtype"></a>

```go
func Subtype() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataLineageOpenLineageJobOutputColumnLineageFieldInputList <a name="DataLineageOpenLineageJobOutputColumnLineageFieldInputList" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/datalineageopenlineagejob"

datalineageopenlineagejob.NewDataLineageOpenLineageJobOutputColumnLineageFieldInputList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataLineageOpenLineageJobOutputColumnLineageFieldInputList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList.get"></a>

```go
func Get(index *f64) DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference <a name="DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/datalineageopenlineagejob"

datalineageopenlineagejob.NewDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.putTransformation">PutTransformation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.resetTransformation">ResetTransformation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTransformation` <a name="PutTransformation" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.putTransformation"></a>

```go
func PutTransformation(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.putTransformation.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetTransformation` <a name="ResetTransformation" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.resetTransformation"></a>

```go
func ResetTransformation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.transformation">Transformation</a></code> | <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList">DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.fieldInput">FieldInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.transformationInput">TransformationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.field">Field</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Transformation`<sup>Required</sup> <a name="Transformation" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.transformation"></a>

```go
func Transformation() DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList">DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList</a>

---

##### `FieldInput`<sup>Optional</sup> <a name="FieldInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.fieldInput"></a>

```go
func FieldInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `TransformationInput`<sup>Optional</sup> <a name="TransformationInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.transformationInput"></a>

```go
func TransformationInput() interface{}
```

- *Type:* interface{}

---

##### `Field`<sup>Required</sup> <a name="Field" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.field"></a>

```go
func Field() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList <a name="DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/datalineageopenlineagejob"

datalineageopenlineagejob.NewDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.get"></a>

```go
func Get(index *f64) DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference <a name="DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/datalineageopenlineagejob"

datalineageopenlineagejob.NewDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.resetSubtype">ResetSubtype</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSubtype` <a name="ResetSubtype" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.resetSubtype"></a>

```go
func ResetSubtype()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.subtypeInput">SubtypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.subtype">Subtype</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SubtypeInput`<sup>Optional</sup> <a name="SubtypeInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.subtypeInput"></a>

```go
func SubtypeInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Subtype`<sup>Required</sup> <a name="Subtype" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.subtype"></a>

```go
func Subtype() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataLineageOpenLineageJobOutputColumnLineageFieldList <a name="DataLineageOpenLineageJobOutputColumnLineageFieldList" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/datalineageopenlineagejob"

datalineageopenlineagejob.NewDataLineageOpenLineageJobOutputColumnLineageFieldList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataLineageOpenLineageJobOutputColumnLineageFieldList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList.get"></a>

```go
func Get(index *f64) DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference <a name="DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/datalineageopenlineagejob"

datalineageopenlineagejob.NewDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.putInput">PutInput</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInput` <a name="PutInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.putInput"></a>

```go
func PutInput(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.putInput.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.input">Input</a></code> | <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList">DataLineageOpenLineageJobOutputColumnLineageFieldInputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.inputInput">InputInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Input`<sup>Required</sup> <a name="Input" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.input"></a>

```go
func Input() DataLineageOpenLineageJobOutputColumnLineageFieldInputList
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList">DataLineageOpenLineageJobOutputColumnLineageFieldInputList</a>

---

##### `InputInput`<sup>Optional</sup> <a name="InputInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.inputInput"></a>

```go
func InputInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataLineageOpenLineageJobOutputColumnLineageOutputReference <a name="DataLineageOpenLineageJobOutputColumnLineageOutputReference" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/datalineageopenlineagejob"

datalineageopenlineagejob.NewDataLineageOpenLineageJobOutputColumnLineageOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataLineageOpenLineageJobOutputColumnLineageOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.putDatasetInput">PutDatasetInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.putField">PutField</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.resetDatasetInput">ResetDatasetInput</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDatasetInput` <a name="PutDatasetInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.putDatasetInput"></a>

```go
func PutDatasetInput(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.putDatasetInput.parameter.value"></a>

- *Type:* interface{}

---

##### `PutField` <a name="PutField" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.putField"></a>

```go
func PutField(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.putField.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDatasetInput` <a name="ResetDatasetInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.resetDatasetInput"></a>

```go
func ResetDatasetInput()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.property.datasetInput">DatasetInput</a></code> | <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList">DataLineageOpenLineageJobOutputColumnLineageDatasetInputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.property.field">Field</a></code> | <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList">DataLineageOpenLineageJobOutputColumnLineageFieldList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.property.datasetInputInput">DatasetInputInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.property.fieldInput">FieldInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineage">DataLineageOpenLineageJobOutputColumnLineage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DatasetInput`<sup>Required</sup> <a name="DatasetInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.property.datasetInput"></a>

```go
func DatasetInput() DataLineageOpenLineageJobOutputColumnLineageDatasetInputList
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList">DataLineageOpenLineageJobOutputColumnLineageDatasetInputList</a>

---

##### `Field`<sup>Required</sup> <a name="Field" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.property.field"></a>

```go
func Field() DataLineageOpenLineageJobOutputColumnLineageFieldList
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList">DataLineageOpenLineageJobOutputColumnLineageFieldList</a>

---

##### `DatasetInputInput`<sup>Optional</sup> <a name="DatasetInputInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.property.datasetInputInput"></a>

```go
func DatasetInputInput() interface{}
```

- *Type:* interface{}

---

##### `FieldInput`<sup>Optional</sup> <a name="FieldInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.property.fieldInput"></a>

```go
func FieldInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.property.internalValue"></a>

```go
func InternalValue() DataLineageOpenLineageJobOutputColumnLineage
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineage">DataLineageOpenLineageJobOutputColumnLineage</a>

---


### DataLineageOpenLineageJobOutputList <a name="DataLineageOpenLineageJobOutputList" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/datalineageopenlineagejob"

datalineageopenlineagejob.NewDataLineageOpenLineageJobOutputList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataLineageOpenLineageJobOutputList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList.get"></a>

```go
func Get(index *f64) DataLineageOpenLineageJobOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataLineageOpenLineageJobOutputOutputReference <a name="DataLineageOpenLineageJobOutputOutputReference" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/datalineageopenlineagejob"

datalineageopenlineagejob.NewDataLineageOpenLineageJobOutputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataLineageOpenLineageJobOutputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.putCatalog">PutCatalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.putColumnLineage">PutColumnLineage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.putSymlink">PutSymlink</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.resetCatalog">ResetCatalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.resetColumnLineage">ResetColumnLineage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.resetSymlink">ResetSymlink</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCatalog` <a name="PutCatalog" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.putCatalog"></a>

```go
func PutCatalog(value DataLineageOpenLineageJobOutputCatalog)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.putCatalog.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalog">DataLineageOpenLineageJobOutputCatalog</a>

---

##### `PutColumnLineage` <a name="PutColumnLineage" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.putColumnLineage"></a>

```go
func PutColumnLineage(value DataLineageOpenLineageJobOutputColumnLineage)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.putColumnLineage.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineage">DataLineageOpenLineageJobOutputColumnLineage</a>

---

##### `PutSymlink` <a name="PutSymlink" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.putSymlink"></a>

```go
func PutSymlink(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.putSymlink.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCatalog` <a name="ResetCatalog" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.resetCatalog"></a>

```go
func ResetCatalog()
```

##### `ResetColumnLineage` <a name="ResetColumnLineage" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.resetColumnLineage"></a>

```go
func ResetColumnLineage()
```

##### `ResetSymlink` <a name="ResetSymlink" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.resetSymlink"></a>

```go
func ResetSymlink()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.property.catalog">Catalog</a></code> | <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference">DataLineageOpenLineageJobOutputCatalogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.property.columnLineage">ColumnLineage</a></code> | <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference">DataLineageOpenLineageJobOutputColumnLineageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.property.symlink">Symlink</a></code> | <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList">DataLineageOpenLineageJobOutputSymlinkList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.property.catalogInput">CatalogInput</a></code> | <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalog">DataLineageOpenLineageJobOutputCatalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.property.columnLineageInput">ColumnLineageInput</a></code> | <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineage">DataLineageOpenLineageJobOutputColumnLineage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.property.symlinkInput">SymlinkInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Catalog`<sup>Required</sup> <a name="Catalog" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.property.catalog"></a>

```go
func Catalog() DataLineageOpenLineageJobOutputCatalogOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference">DataLineageOpenLineageJobOutputCatalogOutputReference</a>

---

##### `ColumnLineage`<sup>Required</sup> <a name="ColumnLineage" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.property.columnLineage"></a>

```go
func ColumnLineage() DataLineageOpenLineageJobOutputColumnLineageOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference">DataLineageOpenLineageJobOutputColumnLineageOutputReference</a>

---

##### `Symlink`<sup>Required</sup> <a name="Symlink" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.property.symlink"></a>

```go
func Symlink() DataLineageOpenLineageJobOutputSymlinkList
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList">DataLineageOpenLineageJobOutputSymlinkList</a>

---

##### `CatalogInput`<sup>Optional</sup> <a name="CatalogInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.property.catalogInput"></a>

```go
func CatalogInput() DataLineageOpenLineageJobOutputCatalog
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalog">DataLineageOpenLineageJobOutputCatalog</a>

---

##### `ColumnLineageInput`<sup>Optional</sup> <a name="ColumnLineageInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.property.columnLineageInput"></a>

```go
func ColumnLineageInput() DataLineageOpenLineageJobOutputColumnLineage
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineage">DataLineageOpenLineageJobOutputColumnLineage</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `SymlinkInput`<sup>Optional</sup> <a name="SymlinkInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.property.symlinkInput"></a>

```go
func SymlinkInput() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataLineageOpenLineageJobOutputSymlinkList <a name="DataLineageOpenLineageJobOutputSymlinkList" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/datalineageopenlineagejob"

datalineageopenlineagejob.NewDataLineageOpenLineageJobOutputSymlinkList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataLineageOpenLineageJobOutputSymlinkList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList.get"></a>

```go
func Get(index *f64) DataLineageOpenLineageJobOutputSymlinkOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataLineageOpenLineageJobOutputSymlinkOutputReference <a name="DataLineageOpenLineageJobOutputSymlinkOutputReference" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/datalineageopenlineagejob"

datalineageopenlineagejob.NewDataLineageOpenLineageJobOutputSymlinkOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataLineageOpenLineageJobOutputSymlinkOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataLineageOpenLineageJobTimeoutsOutputReference <a name="DataLineageOpenLineageJobTimeoutsOutputReference" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/datalineageopenlineagejob"

datalineageopenlineagejob.NewDataLineageOpenLineageJobTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataLineageOpenLineageJobTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



