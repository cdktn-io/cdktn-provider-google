# `spannerInstance` Submodule <a name="`spannerInstance` Submodule" id="@cdktn/provider-google.spannerInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SpannerInstance <a name="SpannerInstance" id="@cdktn/provider-google.spannerInstance.SpannerInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/spanner_instance google_spanner_instance}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.spannerInstance.SpannerInstance.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/spannerinstance"

spannerinstance.NewSpannerInstance(scope Construct, id *string, config SpannerInstanceConfig) SpannerInstance
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstance.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstance.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceConfig">SpannerInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.spannerInstance.SpannerInstance.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.spannerInstance.SpannerInstance.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.spannerInstance.SpannerInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceConfig">SpannerInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstance.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstance.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstance.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstance.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstance.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstance.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstance.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstance.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstance.putAutoscalingConfig">PutAutoscalingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstance.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstance.resetAutoscalingConfig">ResetAutoscalingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstance.resetDefaultBackupScheduleType">ResetDefaultBackupScheduleType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstance.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstance.resetEdition">ResetEdition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstance.resetForceDestroy">ResetForceDestroy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstance.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstance.resetInstanceType">ResetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstance.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstance.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstance.resetNumNodes">ResetNumNodes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstance.resetProcessingUnits">ResetProcessingUnits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstance.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstance.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.spannerInstance.SpannerInstance.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.spannerInstance.SpannerInstance.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.spannerInstance.SpannerInstance.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.spannerInstance.SpannerInstance.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.spannerInstance.SpannerInstance.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.spannerInstance.SpannerInstance.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.spannerInstance.SpannerInstance.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.spannerInstance.SpannerInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.spannerInstance.SpannerInstance.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.spannerInstance.SpannerInstance.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.spannerInstance.SpannerInstance.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.spannerInstance.SpannerInstance.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.spannerInstance.SpannerInstance.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.spannerInstance.SpannerInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstance.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstance.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstance.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstance.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstance.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstance.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstance.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstance.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstance.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.spannerInstance.SpannerInstance.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.spannerInstance.SpannerInstance.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.spannerInstance.SpannerInstance.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.spannerInstance.SpannerInstance.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstance.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.spannerInstance.SpannerInstance.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.spannerInstance.SpannerInstance.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.spannerInstance.SpannerInstance.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.spannerInstance.SpannerInstance.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.spannerInstance.SpannerInstance.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.spannerInstance.SpannerInstance.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.spannerInstance.SpannerInstance.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAutoscalingConfig` <a name="PutAutoscalingConfig" id="@cdktn/provider-google.spannerInstance.SpannerInstance.putAutoscalingConfig"></a>

```go
func PutAutoscalingConfig(value SpannerInstanceAutoscalingConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.spannerInstance.SpannerInstance.putAutoscalingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfig">SpannerInstanceAutoscalingConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.spannerInstance.SpannerInstance.putTimeouts"></a>

```go
func PutTimeouts(value SpannerInstanceTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.spannerInstance.SpannerInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceTimeouts">SpannerInstanceTimeouts</a>

---

##### `ResetAutoscalingConfig` <a name="ResetAutoscalingConfig" id="@cdktn/provider-google.spannerInstance.SpannerInstance.resetAutoscalingConfig"></a>

```go
func ResetAutoscalingConfig()
```

##### `ResetDefaultBackupScheduleType` <a name="ResetDefaultBackupScheduleType" id="@cdktn/provider-google.spannerInstance.SpannerInstance.resetDefaultBackupScheduleType"></a>

```go
func ResetDefaultBackupScheduleType()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.spannerInstance.SpannerInstance.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetEdition` <a name="ResetEdition" id="@cdktn/provider-google.spannerInstance.SpannerInstance.resetEdition"></a>

```go
func ResetEdition()
```

##### `ResetForceDestroy` <a name="ResetForceDestroy" id="@cdktn/provider-google.spannerInstance.SpannerInstance.resetForceDestroy"></a>

```go
func ResetForceDestroy()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.spannerInstance.SpannerInstance.resetId"></a>

```go
func ResetId()
```

##### `ResetInstanceType` <a name="ResetInstanceType" id="@cdktn/provider-google.spannerInstance.SpannerInstance.resetInstanceType"></a>

```go
func ResetInstanceType()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google.spannerInstance.SpannerInstance.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-google.spannerInstance.SpannerInstance.resetName"></a>

```go
func ResetName()
```

##### `ResetNumNodes` <a name="ResetNumNodes" id="@cdktn/provider-google.spannerInstance.SpannerInstance.resetNumNodes"></a>

```go
func ResetNumNodes()
```

##### `ResetProcessingUnits` <a name="ResetProcessingUnits" id="@cdktn/provider-google.spannerInstance.SpannerInstance.resetProcessingUnits"></a>

```go
func ResetProcessingUnits()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.spannerInstance.SpannerInstance.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.spannerInstance.SpannerInstance.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstance.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstance.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SpannerInstance resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.spannerInstance.SpannerInstance.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/spannerinstance"

spannerinstance.SpannerInstance_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.spannerInstance.SpannerInstance.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.spannerInstance.SpannerInstance.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/spannerinstance"

spannerinstance.SpannerInstance_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.spannerInstance.SpannerInstance.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.spannerInstance.SpannerInstance.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/spannerinstance"

spannerinstance.SpannerInstance_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.spannerInstance.SpannerInstance.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.spannerInstance.SpannerInstance.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/spannerinstance"

spannerinstance.SpannerInstance_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a SpannerInstance resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.spannerInstance.SpannerInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.spannerInstance.SpannerInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SpannerInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.spannerInstance.SpannerInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SpannerInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/spanner_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.spannerInstance.SpannerInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the SpannerInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstance.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstance.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstance.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstance.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstance.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstance.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstance.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstance.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstance.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstance.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstance.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstance.property.autoscalingConfig">AutoscalingConfig</a></code> | <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference">SpannerInstanceAutoscalingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstance.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstance.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstance.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstance.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference">SpannerInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstance.property.autoscalingConfigInput">AutoscalingConfigInput</a></code> | <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfig">SpannerInstanceAutoscalingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstance.property.configInput">ConfigInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstance.property.defaultBackupScheduleTypeInput">DefaultBackupScheduleTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstance.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstance.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstance.property.editionInput">EditionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstance.property.forceDestroyInput">ForceDestroyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstance.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstance.property.instanceTypeInput">InstanceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstance.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstance.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstance.property.numNodesInput">NumNodesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstance.property.processingUnitsInput">ProcessingUnitsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstance.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstance.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstance.property.config">Config</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstance.property.defaultBackupScheduleType">DefaultBackupScheduleType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstance.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstance.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstance.property.edition">Edition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstance.property.forceDestroy">ForceDestroy</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstance.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstance.property.instanceType">InstanceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstance.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstance.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstance.property.numNodes">NumNodes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstance.property.processingUnits">ProcessingUnits</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstance.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.spannerInstance.SpannerInstance.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.spannerInstance.SpannerInstance.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.spannerInstance.SpannerInstance.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.spannerInstance.SpannerInstance.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.spannerInstance.SpannerInstance.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.spannerInstance.SpannerInstance.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.spannerInstance.SpannerInstance.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.spannerInstance.SpannerInstance.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.spannerInstance.SpannerInstance.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.spannerInstance.SpannerInstance.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.spannerInstance.SpannerInstance.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.spannerInstance.SpannerInstance.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.spannerInstance.SpannerInstance.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.spannerInstance.SpannerInstance.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AutoscalingConfig`<sup>Required</sup> <a name="AutoscalingConfig" id="@cdktn/provider-google.spannerInstance.SpannerInstance.property.autoscalingConfig"></a>

```go
func AutoscalingConfig() SpannerInstanceAutoscalingConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference">SpannerInstanceAutoscalingConfigOutputReference</a>

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google.spannerInstance.SpannerInstance.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.spannerInstance.SpannerInstance.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google.spannerInstance.SpannerInstance.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.spannerInstance.SpannerInstance.property.timeouts"></a>

```go
func Timeouts() SpannerInstanceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference">SpannerInstanceTimeoutsOutputReference</a>

---

##### `AutoscalingConfigInput`<sup>Optional</sup> <a name="AutoscalingConfigInput" id="@cdktn/provider-google.spannerInstance.SpannerInstance.property.autoscalingConfigInput"></a>

```go
func AutoscalingConfigInput() SpannerInstanceAutoscalingConfig
```

- *Type:* <a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfig">SpannerInstanceAutoscalingConfig</a>

---

##### `ConfigInput`<sup>Optional</sup> <a name="ConfigInput" id="@cdktn/provider-google.spannerInstance.SpannerInstance.property.configInput"></a>

```go
func ConfigInput() *string
```

- *Type:* *string

---

##### `DefaultBackupScheduleTypeInput`<sup>Optional</sup> <a name="DefaultBackupScheduleTypeInput" id="@cdktn/provider-google.spannerInstance.SpannerInstance.property.defaultBackupScheduleTypeInput"></a>

```go
func DefaultBackupScheduleTypeInput() *string
```

- *Type:* *string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.spannerInstance.SpannerInstance.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google.spannerInstance.SpannerInstance.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EditionInput`<sup>Optional</sup> <a name="EditionInput" id="@cdktn/provider-google.spannerInstance.SpannerInstance.property.editionInput"></a>

```go
func EditionInput() *string
```

- *Type:* *string

---

##### `ForceDestroyInput`<sup>Optional</sup> <a name="ForceDestroyInput" id="@cdktn/provider-google.spannerInstance.SpannerInstance.property.forceDestroyInput"></a>

```go
func ForceDestroyInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.spannerInstance.SpannerInstance.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InstanceTypeInput`<sup>Optional</sup> <a name="InstanceTypeInput" id="@cdktn/provider-google.spannerInstance.SpannerInstance.property.instanceTypeInput"></a>

```go
func InstanceTypeInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google.spannerInstance.SpannerInstance.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.spannerInstance.SpannerInstance.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NumNodesInput`<sup>Optional</sup> <a name="NumNodesInput" id="@cdktn/provider-google.spannerInstance.SpannerInstance.property.numNodesInput"></a>

```go
func NumNodesInput() *f64
```

- *Type:* *f64

---

##### `ProcessingUnitsInput`<sup>Optional</sup> <a name="ProcessingUnitsInput" id="@cdktn/provider-google.spannerInstance.SpannerInstance.property.processingUnitsInput"></a>

```go
func ProcessingUnitsInput() *f64
```

- *Type:* *f64

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.spannerInstance.SpannerInstance.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.spannerInstance.SpannerInstance.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.spannerInstance.SpannerInstance.property.config"></a>

```go
func Config() *string
```

- *Type:* *string

---

##### `DefaultBackupScheduleType`<sup>Required</sup> <a name="DefaultBackupScheduleType" id="@cdktn/provider-google.spannerInstance.SpannerInstance.property.defaultBackupScheduleType"></a>

```go
func DefaultBackupScheduleType() *string
```

- *Type:* *string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.spannerInstance.SpannerInstance.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.spannerInstance.SpannerInstance.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Edition`<sup>Required</sup> <a name="Edition" id="@cdktn/provider-google.spannerInstance.SpannerInstance.property.edition"></a>

```go
func Edition() *string
```

- *Type:* *string

---

##### `ForceDestroy`<sup>Required</sup> <a name="ForceDestroy" id="@cdktn/provider-google.spannerInstance.SpannerInstance.property.forceDestroy"></a>

```go
func ForceDestroy() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.spannerInstance.SpannerInstance.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktn/provider-google.spannerInstance.SpannerInstance.property.instanceType"></a>

```go
func InstanceType() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.spannerInstance.SpannerInstance.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.spannerInstance.SpannerInstance.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NumNodes`<sup>Required</sup> <a name="NumNodes" id="@cdktn/provider-google.spannerInstance.SpannerInstance.property.numNodes"></a>

```go
func NumNodes() *f64
```

- *Type:* *f64

---

##### `ProcessingUnits`<sup>Required</sup> <a name="ProcessingUnits" id="@cdktn/provider-google.spannerInstance.SpannerInstance.property.processingUnits"></a>

```go
func ProcessingUnits() *f64
```

- *Type:* *f64

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.spannerInstance.SpannerInstance.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstance.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.spannerInstance.SpannerInstance.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SpannerInstanceAutoscalingConfig <a name="SpannerInstanceAutoscalingConfig" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/spannerinstance"

&spannerinstance.SpannerInstanceAutoscalingConfig {
	AsymmetricAutoscalingOptions: interface{},
	AutoscalingLimits: github.com/cdktn-io/cdktn-provider-google-go/google/v19.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimits,
	AutoscalingTargets: github.com/cdktn-io/cdktn-provider-google-go/google/v19.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargets,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfig.property.asymmetricAutoscalingOptions">AsymmetricAutoscalingOptions</a></code> | <code>interface{}</code> | asymmetric_autoscaling_options block. |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfig.property.autoscalingLimits">AutoscalingLimits</a></code> | <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimits">SpannerInstanceAutoscalingConfigAutoscalingLimits</a></code> | autoscaling_limits block. |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfig.property.autoscalingTargets">AutoscalingTargets</a></code> | <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargets">SpannerInstanceAutoscalingConfigAutoscalingTargets</a></code> | autoscaling_targets block. |

---

##### `AsymmetricAutoscalingOptions`<sup>Optional</sup> <a name="AsymmetricAutoscalingOptions" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfig.property.asymmetricAutoscalingOptions"></a>

```go
AsymmetricAutoscalingOptions interface{}
```

- *Type:* interface{}

asymmetric_autoscaling_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/spanner_instance#asymmetric_autoscaling_options SpannerInstance#asymmetric_autoscaling_options}

---

##### `AutoscalingLimits`<sup>Optional</sup> <a name="AutoscalingLimits" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfig.property.autoscalingLimits"></a>

```go
AutoscalingLimits SpannerInstanceAutoscalingConfigAutoscalingLimits
```

- *Type:* <a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimits">SpannerInstanceAutoscalingConfigAutoscalingLimits</a>

autoscaling_limits block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/spanner_instance#autoscaling_limits SpannerInstance#autoscaling_limits}

---

##### `AutoscalingTargets`<sup>Optional</sup> <a name="AutoscalingTargets" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfig.property.autoscalingTargets"></a>

```go
AutoscalingTargets SpannerInstanceAutoscalingConfigAutoscalingTargets
```

- *Type:* <a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargets">SpannerInstanceAutoscalingConfigAutoscalingTargets</a>

autoscaling_targets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/spanner_instance#autoscaling_targets SpannerInstance#autoscaling_targets}

---

### SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions <a name="SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/spannerinstance"

&spannerinstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions {
	Overrides: github.com/cdktn-io/cdktn-provider-google-go/google/v19.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides,
	ReplicaSelection: github.com/cdktn-io/cdktn-provider-google-go/google/v19.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelection,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions.property.overrides">Overrides</a></code> | <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides">SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides</a></code> | overrides block. |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions.property.replicaSelection">ReplicaSelection</a></code> | <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelection">SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelection</a></code> | replica_selection block. |

---

##### `Overrides`<sup>Required</sup> <a name="Overrides" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions.property.overrides"></a>

```go
Overrides SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides
```

- *Type:* <a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides">SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides</a>

overrides block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/spanner_instance#overrides SpannerInstance#overrides}

---

##### `ReplicaSelection`<sup>Required</sup> <a name="ReplicaSelection" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions.property.replicaSelection"></a>

```go
ReplicaSelection SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelection
```

- *Type:* <a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelection">SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelection</a>

replica_selection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/spanner_instance#replica_selection SpannerInstance#replica_selection}

---

### SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides <a name="SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/spannerinstance"

&spannerinstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides {
	AutoscalingLimits: github.com/cdktn-io/cdktn-provider-google-go/google/v19.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits,
	AutoscalingTargetHighPriorityCpuUtilizationPercent: *f64,
	AutoscalingTargetTotalCpuUtilizationPercent: *f64,
	DisableHighPriorityCpuAutoscaling: interface{},
	DisableTotalCpuAutoscaling: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides.property.autoscalingLimits">AutoscalingLimits</a></code> | <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits">SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits</a></code> | autoscaling_limits block. |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides.property.autoscalingTargetHighPriorityCpuUtilizationPercent">AutoscalingTargetHighPriorityCpuUtilizationPercent</a></code> | <code>*f64</code> | The target high priority cpu utilization percentage that the autoscaler should be trying to achieve for this replica. |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides.property.autoscalingTargetTotalCpuUtilizationPercent">AutoscalingTargetTotalCpuUtilizationPercent</a></code> | <code>*f64</code> | The target total cpu utilization percentage that the autoscaler should be trying to achieve for this replica. |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides.property.disableHighPriorityCpuAutoscaling">DisableHighPriorityCpuAutoscaling</a></code> | <code>interface{}</code> | If true, disables high priority CPU autoscaling for this replica and ignores high_priority_cpu_utilization_percent in the top-level autoscaling configuration. |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides.property.disableTotalCpuAutoscaling">DisableTotalCpuAutoscaling</a></code> | <code>interface{}</code> | If true, disables total CPU autoscaling for this replica and ignores total_cpu_utilization_percent in the top-level autoscaling configuration. |

---

##### `AutoscalingLimits`<sup>Optional</sup> <a name="AutoscalingLimits" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides.property.autoscalingLimits"></a>

```go
AutoscalingLimits SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits
```

- *Type:* <a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits">SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits</a>

autoscaling_limits block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/spanner_instance#autoscaling_limits SpannerInstance#autoscaling_limits}

---

##### `AutoscalingTargetHighPriorityCpuUtilizationPercent`<sup>Optional</sup> <a name="AutoscalingTargetHighPriorityCpuUtilizationPercent" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides.property.autoscalingTargetHighPriorityCpuUtilizationPercent"></a>

```go
AutoscalingTargetHighPriorityCpuUtilizationPercent *f64
```

- *Type:* *f64

The target high priority cpu utilization percentage that the autoscaler should be trying to achieve for this replica.

This number is on a scale from 0 (no utilization) to 100 (full utilization).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/spanner_instance#autoscaling_target_high_priority_cpu_utilization_percent SpannerInstance#autoscaling_target_high_priority_cpu_utilization_percent}

---

##### `AutoscalingTargetTotalCpuUtilizationPercent`<sup>Optional</sup> <a name="AutoscalingTargetTotalCpuUtilizationPercent" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides.property.autoscalingTargetTotalCpuUtilizationPercent"></a>

```go
AutoscalingTargetTotalCpuUtilizationPercent *f64
```

- *Type:* *f64

The target total cpu utilization percentage that the autoscaler should be trying to achieve for this replica.

This number is on a scale from 0 (no utilization) to 100 (full utilization).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/spanner_instance#autoscaling_target_total_cpu_utilization_percent SpannerInstance#autoscaling_target_total_cpu_utilization_percent}

---

##### `DisableHighPriorityCpuAutoscaling`<sup>Optional</sup> <a name="DisableHighPriorityCpuAutoscaling" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides.property.disableHighPriorityCpuAutoscaling"></a>

```go
DisableHighPriorityCpuAutoscaling interface{}
```

- *Type:* interface{}

If true, disables high priority CPU autoscaling for this replica and ignores high_priority_cpu_utilization_percent in the top-level autoscaling configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/spanner_instance#disable_high_priority_cpu_autoscaling SpannerInstance#disable_high_priority_cpu_autoscaling}

---

##### `DisableTotalCpuAutoscaling`<sup>Optional</sup> <a name="DisableTotalCpuAutoscaling" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides.property.disableTotalCpuAutoscaling"></a>

```go
DisableTotalCpuAutoscaling interface{}
```

- *Type:* interface{}

If true, disables total CPU autoscaling for this replica and ignores total_cpu_utilization_percent in the top-level autoscaling configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/spanner_instance#disable_total_cpu_autoscaling SpannerInstance#disable_total_cpu_autoscaling}

---

### SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits <a name="SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/spannerinstance"

&spannerinstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits {
	MaxNodes: *f64,
	MaxProcessingUnits: *f64,
	MinNodes: *f64,
	MinProcessingUnits: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits.property.maxNodes">MaxNodes</a></code> | <code>*f64</code> | The maximum number of nodes for this specific replica. |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits.property.maxProcessingUnits">MaxProcessingUnits</a></code> | <code>*f64</code> | The maximum number of processing units for this specific replica. |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits.property.minNodes">MinNodes</a></code> | <code>*f64</code> | The minimum number of nodes for this specific replica. |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits.property.minProcessingUnits">MinProcessingUnits</a></code> | <code>*f64</code> | The minimum number of processing units for this specific replica. If set, this number should be multiples of 1000. |

---

##### `MaxNodes`<sup>Optional</sup> <a name="MaxNodes" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits.property.maxNodes"></a>

```go
MaxNodes *f64
```

- *Type:* *f64

The maximum number of nodes for this specific replica.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/spanner_instance#max_nodes SpannerInstance#max_nodes}

---

##### `MaxProcessingUnits`<sup>Optional</sup> <a name="MaxProcessingUnits" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits.property.maxProcessingUnits"></a>

```go
MaxProcessingUnits *f64
```

- *Type:* *f64

The maximum number of processing units for this specific replica.

If set, this number should be multiples of 1000 and be greater than or equal to
min_processing_units.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/spanner_instance#max_processing_units SpannerInstance#max_processing_units}

---

##### `MinNodes`<sup>Optional</sup> <a name="MinNodes" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits.property.minNodes"></a>

```go
MinNodes *f64
```

- *Type:* *f64

The minimum number of nodes for this specific replica.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/spanner_instance#min_nodes SpannerInstance#min_nodes}

---

##### `MinProcessingUnits`<sup>Optional</sup> <a name="MinProcessingUnits" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits.property.minProcessingUnits"></a>

```go
MinProcessingUnits *f64
```

- *Type:* *f64

The minimum number of processing units for this specific replica. If set, this number should be multiples of 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/spanner_instance#min_processing_units SpannerInstance#min_processing_units}

---

### SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelection <a name="SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelection" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelection.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/spannerinstance"

&spannerinstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelection {
	Location: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelection.property.location">Location</a></code> | <code>*string</code> | The location of the replica to apply asymmetric autoscaling options. |

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelection.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location of the replica to apply asymmetric autoscaling options.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/spanner_instance#location SpannerInstance#location}

---

### SpannerInstanceAutoscalingConfigAutoscalingLimits <a name="SpannerInstanceAutoscalingConfigAutoscalingLimits" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimits"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimits.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/spannerinstance"

&spannerinstance.SpannerInstanceAutoscalingConfigAutoscalingLimits {
	MaxNodes: *f64,
	MaxProcessingUnits: *f64,
	MinNodes: *f64,
	MinProcessingUnits: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimits.property.maxNodes">MaxNodes</a></code> | <code>*f64</code> | Specifies maximum number of nodes allocated to the instance. |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimits.property.maxProcessingUnits">MaxProcessingUnits</a></code> | <code>*f64</code> | Specifies maximum number of processing units allocated to the instance. |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimits.property.minNodes">MinNodes</a></code> | <code>*f64</code> | Specifies number of nodes allocated to the instance. If set, this number should be greater than or equal to 1. |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimits.property.minProcessingUnits">MinProcessingUnits</a></code> | <code>*f64</code> | Specifies minimum number of processing units allocated to the instance. If set, this number should be multiples of 1000. |

---

##### `MaxNodes`<sup>Optional</sup> <a name="MaxNodes" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimits.property.maxNodes"></a>

```go
MaxNodes *f64
```

- *Type:* *f64

Specifies maximum number of nodes allocated to the instance.

If set, this number
should be greater than or equal to min_nodes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/spanner_instance#max_nodes SpannerInstance#max_nodes}

---

##### `MaxProcessingUnits`<sup>Optional</sup> <a name="MaxProcessingUnits" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimits.property.maxProcessingUnits"></a>

```go
MaxProcessingUnits *f64
```

- *Type:* *f64

Specifies maximum number of processing units allocated to the instance.

If set, this number should be multiples of 1000 and be greater than or equal to
min_processing_units.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/spanner_instance#max_processing_units SpannerInstance#max_processing_units}

---

##### `MinNodes`<sup>Optional</sup> <a name="MinNodes" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimits.property.minNodes"></a>

```go
MinNodes *f64
```

- *Type:* *f64

Specifies number of nodes allocated to the instance. If set, this number should be greater than or equal to 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/spanner_instance#min_nodes SpannerInstance#min_nodes}

---

##### `MinProcessingUnits`<sup>Optional</sup> <a name="MinProcessingUnits" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimits.property.minProcessingUnits"></a>

```go
MinProcessingUnits *f64
```

- *Type:* *f64

Specifies minimum number of processing units allocated to the instance. If set, this number should be multiples of 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/spanner_instance#min_processing_units SpannerInstance#min_processing_units}

---

### SpannerInstanceAutoscalingConfigAutoscalingTargets <a name="SpannerInstanceAutoscalingConfigAutoscalingTargets" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargets.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/spannerinstance"

&spannerinstance.SpannerInstanceAutoscalingConfigAutoscalingTargets {
	HighPriorityCpuUtilizationPercent: *f64,
	StorageUtilizationPercent: *f64,
	TotalCpuUtilizationPercent: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargets.property.highPriorityCpuUtilizationPercent">HighPriorityCpuUtilizationPercent</a></code> | <code>*f64</code> | Specifies the target high priority cpu utilization percentage that the autoscaler should be trying to achieve for the instance. |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargets.property.storageUtilizationPercent">StorageUtilizationPercent</a></code> | <code>*f64</code> | Specifies the target storage utilization percentage that the autoscaler should be trying to achieve for the instance. |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargets.property.totalCpuUtilizationPercent">TotalCpuUtilizationPercent</a></code> | <code>*f64</code> | The target total cpu utilization percentage that the autoscaler should be trying to achieve for the instance. |

---

##### `HighPriorityCpuUtilizationPercent`<sup>Optional</sup> <a name="HighPriorityCpuUtilizationPercent" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargets.property.highPriorityCpuUtilizationPercent"></a>

```go
HighPriorityCpuUtilizationPercent *f64
```

- *Type:* *f64

Specifies the target high priority cpu utilization percentage that the autoscaler should be trying to achieve for the instance.

This number is on a scale from 0 (no utilization) to 100 (full utilization)..

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/spanner_instance#high_priority_cpu_utilization_percent SpannerInstance#high_priority_cpu_utilization_percent}

---

##### `StorageUtilizationPercent`<sup>Optional</sup> <a name="StorageUtilizationPercent" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargets.property.storageUtilizationPercent"></a>

```go
StorageUtilizationPercent *f64
```

- *Type:* *f64

Specifies the target storage utilization percentage that the autoscaler should be trying to achieve for the instance.

This number is on a scale from 0 (no utilization) to 100 (full utilization).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/spanner_instance#storage_utilization_percent SpannerInstance#storage_utilization_percent}

---

##### `TotalCpuUtilizationPercent`<sup>Optional</sup> <a name="TotalCpuUtilizationPercent" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargets.property.totalCpuUtilizationPercent"></a>

```go
TotalCpuUtilizationPercent *f64
```

- *Type:* *f64

The target total cpu utilization percentage that the autoscaler should be trying to achieve for the instance.

This number is on a scale from 0 (no utilization) to 100 (full utilization). The valid range is [10, 90] inclusive.
If not specified or set to 0, the autoscaler will skip scaling based on total cpu utilization.
The value should be higher than high_priority_cpu_utilization_percent if present.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/spanner_instance#total_cpu_utilization_percent SpannerInstance#total_cpu_utilization_percent}

---

### SpannerInstanceConfig <a name="SpannerInstanceConfig" id="@cdktn/provider-google.spannerInstance.SpannerInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.spannerInstance.SpannerInstanceConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/spannerinstance"

&spannerinstance.SpannerInstanceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Config: *string,
	DisplayName: *string,
	AutoscalingConfig: github.com/cdktn-io/cdktn-provider-google-go/google/v19.spannerInstance.SpannerInstanceAutoscalingConfig,
	DefaultBackupScheduleType: *string,
	DeletionPolicy: *string,
	Edition: *string,
	ForceDestroy: interface{},
	Id: *string,
	InstanceType: *string,
	Labels: *map[string]*string,
	Name: *string,
	NumNodes: *f64,
	ProcessingUnits: *f64,
	Project: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-google-go/google/v19.spannerInstance.SpannerInstanceTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceConfig.property.config">Config</a></code> | <code>*string</code> | The name of the instance's configuration (similar but not quite the same as a region) which defines the geographic placement and replication of your databases in this instance. |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | The descriptive name for this instance as it appears in UIs. |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceConfig.property.autoscalingConfig">AutoscalingConfig</a></code> | <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfig">SpannerInstanceAutoscalingConfig</a></code> | autoscaling_config block. |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceConfig.property.defaultBackupScheduleType">DefaultBackupScheduleType</a></code> | <code>*string</code> | Controls the default backup behavior for new databases within the instance. |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceConfig.property.edition">Edition</a></code> | <code>*string</code> | The edition selected for this instance. |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceConfig.property.forceDestroy">ForceDestroy</a></code> | <code>interface{}</code> | When deleting a spanner instance, this boolean option will delete all backups of this instance. |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/spanner_instance#id SpannerInstance#id}. |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceConfig.property.instanceType">InstanceType</a></code> | <code>*string</code> | The type of this instance. |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }. |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceConfig.property.name">Name</a></code> | <code>*string</code> | A unique identifier for the instance, which cannot be changed after the instance is created. |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceConfig.property.numNodes">NumNodes</a></code> | <code>*f64</code> | The number of nodes allocated to this instance. |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceConfig.property.processingUnits">ProcessingUnits</a></code> | <code>*f64</code> | The number of processing units allocated to this instance. |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/spanner_instance#project SpannerInstance#project}. |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceTimeouts">SpannerInstanceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.spannerInstance.SpannerInstanceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.spannerInstance.SpannerInstanceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.spannerInstance.SpannerInstanceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.spannerInstance.SpannerInstanceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.spannerInstance.SpannerInstanceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.spannerInstance.SpannerInstanceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.spannerInstance.SpannerInstanceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.spannerInstance.SpannerInstanceConfig.property.config"></a>

```go
Config *string
```

- *Type:* *string

The name of the instance's configuration (similar but not quite the same as a region) which defines the geographic placement and replication of your databases in this instance.

It determines where your data
is stored. Values are typically of the form 'regional-europe-west1' , 'us-central' etc.
In order to obtain a valid list please consult the
[Configuration section of the docs](https://cloud.google.com/spanner/docs/instances).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/spanner_instance#config SpannerInstance#config}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.spannerInstance.SpannerInstanceConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

The descriptive name for this instance as it appears in UIs.

Must be
unique per project and between 4 and 30 characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/spanner_instance#display_name SpannerInstance#display_name}

---

##### `AutoscalingConfig`<sup>Optional</sup> <a name="AutoscalingConfig" id="@cdktn/provider-google.spannerInstance.SpannerInstanceConfig.property.autoscalingConfig"></a>

```go
AutoscalingConfig SpannerInstanceAutoscalingConfig
```

- *Type:* <a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfig">SpannerInstanceAutoscalingConfig</a>

autoscaling_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/spanner_instance#autoscaling_config SpannerInstance#autoscaling_config}

---

##### `DefaultBackupScheduleType`<sup>Optional</sup> <a name="DefaultBackupScheduleType" id="@cdktn/provider-google.spannerInstance.SpannerInstanceConfig.property.defaultBackupScheduleType"></a>

```go
DefaultBackupScheduleType *string
```

- *Type:* *string

Controls the default backup behavior for new databases within the instance.

Note that 'AUTOMATIC' is not permitted for free instances, as backups and backup schedules are not allowed for free instances.
if unset or NONE, no default backup schedule will be created for new databases within the instance. Possible values: ["NONE", "AUTOMATIC"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/spanner_instance#default_backup_schedule_type SpannerInstance#default_backup_schedule_type}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.spannerInstance.SpannerInstanceConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/spanner_instance#deletion_policy SpannerInstance#deletion_policy}

---

##### `Edition`<sup>Optional</sup> <a name="Edition" id="@cdktn/provider-google.spannerInstance.SpannerInstanceConfig.property.edition"></a>

```go
Edition *string
```

- *Type:* *string

The edition selected for this instance.

Different editions provide different capabilities at different price points. Possible values: ["EDITION_UNSPECIFIED", "STANDARD", "ENTERPRISE", "ENTERPRISE_PLUS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/spanner_instance#edition SpannerInstance#edition}

---

##### `ForceDestroy`<sup>Optional</sup> <a name="ForceDestroy" id="@cdktn/provider-google.spannerInstance.SpannerInstanceConfig.property.forceDestroy"></a>

```go
ForceDestroy interface{}
```

- *Type:* interface{}

When deleting a spanner instance, this boolean option will delete all backups of this instance.

This must be set to true if you created a backup manually in the console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/spanner_instance#force_destroy SpannerInstance#force_destroy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.spannerInstance.SpannerInstanceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/spanner_instance#id SpannerInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InstanceType`<sup>Optional</sup> <a name="InstanceType" id="@cdktn/provider-google.spannerInstance.SpannerInstanceConfig.property.instanceType"></a>

```go
InstanceType *string
```

- *Type:* *string

The type of this instance.

The type can be used to distinguish product variants, that can affect aspects like:
usage restrictions, quotas and billing. Currently this is used to distinguish FREE_INSTANCE vs PROVISIONED instances.
When configured as FREE_INSTANCE, the field 'edition' should not be configured. Possible values: ["PROVISIONED", "FREE_INSTANCE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/spanner_instance#instance_type SpannerInstance#instance_type}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google.spannerInstance.SpannerInstanceConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/spanner_instance#labels SpannerInstance#labels}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-google.spannerInstance.SpannerInstanceConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

A unique identifier for the instance, which cannot be changed after the instance is created.

The name must be between 6 and 30 characters
in length.
If not provided, a random string starting with 'tf-' will be selected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/spanner_instance#name SpannerInstance#name}

---

##### `NumNodes`<sup>Optional</sup> <a name="NumNodes" id="@cdktn/provider-google.spannerInstance.SpannerInstanceConfig.property.numNodes"></a>

```go
NumNodes *f64
```

- *Type:* *f64

The number of nodes allocated to this instance.

Exactly one of either num_nodes, processing_units or
autoscaling_config must be present in terraform except when instance_type = FREE_INSTANCE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/spanner_instance#num_nodes SpannerInstance#num_nodes}

---

##### `ProcessingUnits`<sup>Optional</sup> <a name="ProcessingUnits" id="@cdktn/provider-google.spannerInstance.SpannerInstanceConfig.property.processingUnits"></a>

```go
ProcessingUnits *f64
```

- *Type:* *f64

The number of processing units allocated to this instance.

Exactly one of either num_nodes,
processing_units or autoscaling_config must be present in terraform except when instance_type = FREE_INSTANCE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/spanner_instance#processing_units SpannerInstance#processing_units}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.spannerInstance.SpannerInstanceConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/spanner_instance#project SpannerInstance#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.spannerInstance.SpannerInstanceConfig.property.timeouts"></a>

```go
Timeouts SpannerInstanceTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceTimeouts">SpannerInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/spanner_instance#timeouts SpannerInstance#timeouts}

---

### SpannerInstanceTimeouts <a name="SpannerInstanceTimeouts" id="@cdktn/provider-google.spannerInstance.SpannerInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.spannerInstance.SpannerInstanceTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/spannerinstance"

&spannerinstance.SpannerInstanceTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/spanner_instance#create SpannerInstance#create}. |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/spanner_instance#delete SpannerInstance#delete}. |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/spanner_instance#update SpannerInstance#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.spannerInstance.SpannerInstanceTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/spanner_instance#create SpannerInstance#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.spannerInstance.SpannerInstanceTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/spanner_instance#delete SpannerInstance#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.spannerInstance.SpannerInstanceTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/spanner_instance#update SpannerInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList <a name="SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/spannerinstance"

spannerinstance.NewSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList.get"></a>

```go
func Get(index *f64) SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference <a name="SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/spannerinstance"

spannerinstance.NewSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.putOverrides">PutOverrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.putReplicaSelection">PutReplicaSelection</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOverrides` <a name="PutOverrides" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.putOverrides"></a>

```go
func PutOverrides(value SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.putOverrides.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides">SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides</a>

---

##### `PutReplicaSelection` <a name="PutReplicaSelection" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.putReplicaSelection"></a>

```go
func PutReplicaSelection(value SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelection)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.putReplicaSelection.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelection">SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelection</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.property.overrides">Overrides</a></code> | <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference">SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.property.replicaSelection">ReplicaSelection</a></code> | <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference">SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.property.overridesInput">OverridesInput</a></code> | <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides">SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.property.replicaSelectionInput">ReplicaSelectionInput</a></code> | <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelection">SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Overrides`<sup>Required</sup> <a name="Overrides" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.property.overrides"></a>

```go
func Overrides() SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference">SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference</a>

---

##### `ReplicaSelection`<sup>Required</sup> <a name="ReplicaSelection" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.property.replicaSelection"></a>

```go
func ReplicaSelection() SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference">SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference</a>

---

##### `OverridesInput`<sup>Optional</sup> <a name="OverridesInput" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.property.overridesInput"></a>

```go
func OverridesInput() SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides
```

- *Type:* <a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides">SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides</a>

---

##### `ReplicaSelectionInput`<sup>Optional</sup> <a name="ReplicaSelectionInput" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.property.replicaSelectionInput"></a>

```go
func ReplicaSelectionInput() SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelection
```

- *Type:* <a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelection">SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelection</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference <a name="SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/spannerinstance"

spannerinstance.NewSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.resetMaxNodes">ResetMaxNodes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.resetMaxProcessingUnits">ResetMaxProcessingUnits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.resetMinNodes">ResetMinNodes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.resetMinProcessingUnits">ResetMinProcessingUnits</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxNodes` <a name="ResetMaxNodes" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.resetMaxNodes"></a>

```go
func ResetMaxNodes()
```

##### `ResetMaxProcessingUnits` <a name="ResetMaxProcessingUnits" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.resetMaxProcessingUnits"></a>

```go
func ResetMaxProcessingUnits()
```

##### `ResetMinNodes` <a name="ResetMinNodes" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.resetMinNodes"></a>

```go
func ResetMinNodes()
```

##### `ResetMinProcessingUnits` <a name="ResetMinProcessingUnits" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.resetMinProcessingUnits"></a>

```go
func ResetMinProcessingUnits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.property.maxNodesInput">MaxNodesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.property.maxProcessingUnitsInput">MaxProcessingUnitsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.property.minNodesInput">MinNodesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.property.minProcessingUnitsInput">MinProcessingUnitsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.property.maxNodes">MaxNodes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.property.maxProcessingUnits">MaxProcessingUnits</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.property.minNodes">MinNodes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.property.minProcessingUnits">MinProcessingUnits</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits">SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxNodesInput`<sup>Optional</sup> <a name="MaxNodesInput" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.property.maxNodesInput"></a>

```go
func MaxNodesInput() *f64
```

- *Type:* *f64

---

##### `MaxProcessingUnitsInput`<sup>Optional</sup> <a name="MaxProcessingUnitsInput" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.property.maxProcessingUnitsInput"></a>

```go
func MaxProcessingUnitsInput() *f64
```

- *Type:* *f64

---

##### `MinNodesInput`<sup>Optional</sup> <a name="MinNodesInput" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.property.minNodesInput"></a>

```go
func MinNodesInput() *f64
```

- *Type:* *f64

---

##### `MinProcessingUnitsInput`<sup>Optional</sup> <a name="MinProcessingUnitsInput" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.property.minProcessingUnitsInput"></a>

```go
func MinProcessingUnitsInput() *f64
```

- *Type:* *f64

---

##### `MaxNodes`<sup>Required</sup> <a name="MaxNodes" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.property.maxNodes"></a>

```go
func MaxNodes() *f64
```

- *Type:* *f64

---

##### `MaxProcessingUnits`<sup>Required</sup> <a name="MaxProcessingUnits" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.property.maxProcessingUnits"></a>

```go
func MaxProcessingUnits() *f64
```

- *Type:* *f64

---

##### `MinNodes`<sup>Required</sup> <a name="MinNodes" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.property.minNodes"></a>

```go
func MinNodes() *f64
```

- *Type:* *f64

---

##### `MinProcessingUnits`<sup>Required</sup> <a name="MinProcessingUnits" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.property.minProcessingUnits"></a>

```go
func MinProcessingUnits() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.property.internalValue"></a>

```go
func InternalValue() SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits
```

- *Type:* <a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits">SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits</a>

---


### SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference <a name="SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/spannerinstance"

spannerinstance.NewSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.putAutoscalingLimits">PutAutoscalingLimits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.resetAutoscalingLimits">ResetAutoscalingLimits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.resetAutoscalingTargetHighPriorityCpuUtilizationPercent">ResetAutoscalingTargetHighPriorityCpuUtilizationPercent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.resetAutoscalingTargetTotalCpuUtilizationPercent">ResetAutoscalingTargetTotalCpuUtilizationPercent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.resetDisableHighPriorityCpuAutoscaling">ResetDisableHighPriorityCpuAutoscaling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.resetDisableTotalCpuAutoscaling">ResetDisableTotalCpuAutoscaling</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAutoscalingLimits` <a name="PutAutoscalingLimits" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.putAutoscalingLimits"></a>

```go
func PutAutoscalingLimits(value SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.putAutoscalingLimits.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits">SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits</a>

---

##### `ResetAutoscalingLimits` <a name="ResetAutoscalingLimits" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.resetAutoscalingLimits"></a>

```go
func ResetAutoscalingLimits()
```

##### `ResetAutoscalingTargetHighPriorityCpuUtilizationPercent` <a name="ResetAutoscalingTargetHighPriorityCpuUtilizationPercent" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.resetAutoscalingTargetHighPriorityCpuUtilizationPercent"></a>

```go
func ResetAutoscalingTargetHighPriorityCpuUtilizationPercent()
```

##### `ResetAutoscalingTargetTotalCpuUtilizationPercent` <a name="ResetAutoscalingTargetTotalCpuUtilizationPercent" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.resetAutoscalingTargetTotalCpuUtilizationPercent"></a>

```go
func ResetAutoscalingTargetTotalCpuUtilizationPercent()
```

##### `ResetDisableHighPriorityCpuAutoscaling` <a name="ResetDisableHighPriorityCpuAutoscaling" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.resetDisableHighPriorityCpuAutoscaling"></a>

```go
func ResetDisableHighPriorityCpuAutoscaling()
```

##### `ResetDisableTotalCpuAutoscaling` <a name="ResetDisableTotalCpuAutoscaling" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.resetDisableTotalCpuAutoscaling"></a>

```go
func ResetDisableTotalCpuAutoscaling()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.property.autoscalingLimits">AutoscalingLimits</a></code> | <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference">SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.property.autoscalingLimitsInput">AutoscalingLimitsInput</a></code> | <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits">SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.property.autoscalingTargetHighPriorityCpuUtilizationPercentInput">AutoscalingTargetHighPriorityCpuUtilizationPercentInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.property.autoscalingTargetTotalCpuUtilizationPercentInput">AutoscalingTargetTotalCpuUtilizationPercentInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.property.disableHighPriorityCpuAutoscalingInput">DisableHighPriorityCpuAutoscalingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.property.disableTotalCpuAutoscalingInput">DisableTotalCpuAutoscalingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.property.autoscalingTargetHighPriorityCpuUtilizationPercent">AutoscalingTargetHighPriorityCpuUtilizationPercent</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.property.autoscalingTargetTotalCpuUtilizationPercent">AutoscalingTargetTotalCpuUtilizationPercent</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.property.disableHighPriorityCpuAutoscaling">DisableHighPriorityCpuAutoscaling</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.property.disableTotalCpuAutoscaling">DisableTotalCpuAutoscaling</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides">SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutoscalingLimits`<sup>Required</sup> <a name="AutoscalingLimits" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.property.autoscalingLimits"></a>

```go
func AutoscalingLimits() SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference">SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference</a>

---

##### `AutoscalingLimitsInput`<sup>Optional</sup> <a name="AutoscalingLimitsInput" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.property.autoscalingLimitsInput"></a>

```go
func AutoscalingLimitsInput() SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits
```

- *Type:* <a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits">SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits</a>

---

##### `AutoscalingTargetHighPriorityCpuUtilizationPercentInput`<sup>Optional</sup> <a name="AutoscalingTargetHighPriorityCpuUtilizationPercentInput" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.property.autoscalingTargetHighPriorityCpuUtilizationPercentInput"></a>

```go
func AutoscalingTargetHighPriorityCpuUtilizationPercentInput() *f64
```

- *Type:* *f64

---

##### `AutoscalingTargetTotalCpuUtilizationPercentInput`<sup>Optional</sup> <a name="AutoscalingTargetTotalCpuUtilizationPercentInput" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.property.autoscalingTargetTotalCpuUtilizationPercentInput"></a>

```go
func AutoscalingTargetTotalCpuUtilizationPercentInput() *f64
```

- *Type:* *f64

---

##### `DisableHighPriorityCpuAutoscalingInput`<sup>Optional</sup> <a name="DisableHighPriorityCpuAutoscalingInput" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.property.disableHighPriorityCpuAutoscalingInput"></a>

```go
func DisableHighPriorityCpuAutoscalingInput() interface{}
```

- *Type:* interface{}

---

##### `DisableTotalCpuAutoscalingInput`<sup>Optional</sup> <a name="DisableTotalCpuAutoscalingInput" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.property.disableTotalCpuAutoscalingInput"></a>

```go
func DisableTotalCpuAutoscalingInput() interface{}
```

- *Type:* interface{}

---

##### `AutoscalingTargetHighPriorityCpuUtilizationPercent`<sup>Required</sup> <a name="AutoscalingTargetHighPriorityCpuUtilizationPercent" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.property.autoscalingTargetHighPriorityCpuUtilizationPercent"></a>

```go
func AutoscalingTargetHighPriorityCpuUtilizationPercent() *f64
```

- *Type:* *f64

---

##### `AutoscalingTargetTotalCpuUtilizationPercent`<sup>Required</sup> <a name="AutoscalingTargetTotalCpuUtilizationPercent" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.property.autoscalingTargetTotalCpuUtilizationPercent"></a>

```go
func AutoscalingTargetTotalCpuUtilizationPercent() *f64
```

- *Type:* *f64

---

##### `DisableHighPriorityCpuAutoscaling`<sup>Required</sup> <a name="DisableHighPriorityCpuAutoscaling" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.property.disableHighPriorityCpuAutoscaling"></a>

```go
func DisableHighPriorityCpuAutoscaling() interface{}
```

- *Type:* interface{}

---

##### `DisableTotalCpuAutoscaling`<sup>Required</sup> <a name="DisableTotalCpuAutoscaling" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.property.disableTotalCpuAutoscaling"></a>

```go
func DisableTotalCpuAutoscaling() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.property.internalValue"></a>

```go
func InternalValue() SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides
```

- *Type:* <a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides">SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides</a>

---


### SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference <a name="SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/spannerinstance"

spannerinstance.NewSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelection">SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.property.internalValue"></a>

```go
func InternalValue() SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelection
```

- *Type:* <a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelection">SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelection</a>

---


### SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference <a name="SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/spannerinstance"

spannerinstance.NewSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.resetMaxNodes">ResetMaxNodes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.resetMaxProcessingUnits">ResetMaxProcessingUnits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.resetMinNodes">ResetMinNodes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.resetMinProcessingUnits">ResetMinProcessingUnits</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxNodes` <a name="ResetMaxNodes" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.resetMaxNodes"></a>

```go
func ResetMaxNodes()
```

##### `ResetMaxProcessingUnits` <a name="ResetMaxProcessingUnits" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.resetMaxProcessingUnits"></a>

```go
func ResetMaxProcessingUnits()
```

##### `ResetMinNodes` <a name="ResetMinNodes" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.resetMinNodes"></a>

```go
func ResetMinNodes()
```

##### `ResetMinProcessingUnits` <a name="ResetMinProcessingUnits" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.resetMinProcessingUnits"></a>

```go
func ResetMinProcessingUnits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.property.maxNodesInput">MaxNodesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.property.maxProcessingUnitsInput">MaxProcessingUnitsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.property.minNodesInput">MinNodesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.property.minProcessingUnitsInput">MinProcessingUnitsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.property.maxNodes">MaxNodes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.property.maxProcessingUnits">MaxProcessingUnits</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.property.minNodes">MinNodes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.property.minProcessingUnits">MinProcessingUnits</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimits">SpannerInstanceAutoscalingConfigAutoscalingLimits</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxNodesInput`<sup>Optional</sup> <a name="MaxNodesInput" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.property.maxNodesInput"></a>

```go
func MaxNodesInput() *f64
```

- *Type:* *f64

---

##### `MaxProcessingUnitsInput`<sup>Optional</sup> <a name="MaxProcessingUnitsInput" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.property.maxProcessingUnitsInput"></a>

```go
func MaxProcessingUnitsInput() *f64
```

- *Type:* *f64

---

##### `MinNodesInput`<sup>Optional</sup> <a name="MinNodesInput" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.property.minNodesInput"></a>

```go
func MinNodesInput() *f64
```

- *Type:* *f64

---

##### `MinProcessingUnitsInput`<sup>Optional</sup> <a name="MinProcessingUnitsInput" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.property.minProcessingUnitsInput"></a>

```go
func MinProcessingUnitsInput() *f64
```

- *Type:* *f64

---

##### `MaxNodes`<sup>Required</sup> <a name="MaxNodes" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.property.maxNodes"></a>

```go
func MaxNodes() *f64
```

- *Type:* *f64

---

##### `MaxProcessingUnits`<sup>Required</sup> <a name="MaxProcessingUnits" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.property.maxProcessingUnits"></a>

```go
func MaxProcessingUnits() *f64
```

- *Type:* *f64

---

##### `MinNodes`<sup>Required</sup> <a name="MinNodes" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.property.minNodes"></a>

```go
func MinNodes() *f64
```

- *Type:* *f64

---

##### `MinProcessingUnits`<sup>Required</sup> <a name="MinProcessingUnits" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.property.minProcessingUnits"></a>

```go
func MinProcessingUnits() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.property.internalValue"></a>

```go
func InternalValue() SpannerInstanceAutoscalingConfigAutoscalingLimits
```

- *Type:* <a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimits">SpannerInstanceAutoscalingConfigAutoscalingLimits</a>

---


### SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference <a name="SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/spannerinstance"

spannerinstance.NewSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.resetHighPriorityCpuUtilizationPercent">ResetHighPriorityCpuUtilizationPercent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.resetStorageUtilizationPercent">ResetStorageUtilizationPercent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.resetTotalCpuUtilizationPercent">ResetTotalCpuUtilizationPercent</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHighPriorityCpuUtilizationPercent` <a name="ResetHighPriorityCpuUtilizationPercent" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.resetHighPriorityCpuUtilizationPercent"></a>

```go
func ResetHighPriorityCpuUtilizationPercent()
```

##### `ResetStorageUtilizationPercent` <a name="ResetStorageUtilizationPercent" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.resetStorageUtilizationPercent"></a>

```go
func ResetStorageUtilizationPercent()
```

##### `ResetTotalCpuUtilizationPercent` <a name="ResetTotalCpuUtilizationPercent" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.resetTotalCpuUtilizationPercent"></a>

```go
func ResetTotalCpuUtilizationPercent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.property.highPriorityCpuUtilizationPercentInput">HighPriorityCpuUtilizationPercentInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.property.storageUtilizationPercentInput">StorageUtilizationPercentInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.property.totalCpuUtilizationPercentInput">TotalCpuUtilizationPercentInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.property.highPriorityCpuUtilizationPercent">HighPriorityCpuUtilizationPercent</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.property.storageUtilizationPercent">StorageUtilizationPercent</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.property.totalCpuUtilizationPercent">TotalCpuUtilizationPercent</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargets">SpannerInstanceAutoscalingConfigAutoscalingTargets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HighPriorityCpuUtilizationPercentInput`<sup>Optional</sup> <a name="HighPriorityCpuUtilizationPercentInput" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.property.highPriorityCpuUtilizationPercentInput"></a>

```go
func HighPriorityCpuUtilizationPercentInput() *f64
```

- *Type:* *f64

---

##### `StorageUtilizationPercentInput`<sup>Optional</sup> <a name="StorageUtilizationPercentInput" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.property.storageUtilizationPercentInput"></a>

```go
func StorageUtilizationPercentInput() *f64
```

- *Type:* *f64

---

##### `TotalCpuUtilizationPercentInput`<sup>Optional</sup> <a name="TotalCpuUtilizationPercentInput" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.property.totalCpuUtilizationPercentInput"></a>

```go
func TotalCpuUtilizationPercentInput() *f64
```

- *Type:* *f64

---

##### `HighPriorityCpuUtilizationPercent`<sup>Required</sup> <a name="HighPriorityCpuUtilizationPercent" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.property.highPriorityCpuUtilizationPercent"></a>

```go
func HighPriorityCpuUtilizationPercent() *f64
```

- *Type:* *f64

---

##### `StorageUtilizationPercent`<sup>Required</sup> <a name="StorageUtilizationPercent" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.property.storageUtilizationPercent"></a>

```go
func StorageUtilizationPercent() *f64
```

- *Type:* *f64

---

##### `TotalCpuUtilizationPercent`<sup>Required</sup> <a name="TotalCpuUtilizationPercent" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.property.totalCpuUtilizationPercent"></a>

```go
func TotalCpuUtilizationPercent() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.property.internalValue"></a>

```go
func InternalValue() SpannerInstanceAutoscalingConfigAutoscalingTargets
```

- *Type:* <a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargets">SpannerInstanceAutoscalingConfigAutoscalingTargets</a>

---


### SpannerInstanceAutoscalingConfigOutputReference <a name="SpannerInstanceAutoscalingConfigOutputReference" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/spannerinstance"

spannerinstance.NewSpannerInstanceAutoscalingConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SpannerInstanceAutoscalingConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.putAsymmetricAutoscalingOptions">PutAsymmetricAutoscalingOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.putAutoscalingLimits">PutAutoscalingLimits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.putAutoscalingTargets">PutAutoscalingTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.resetAsymmetricAutoscalingOptions">ResetAsymmetricAutoscalingOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.resetAutoscalingLimits">ResetAutoscalingLimits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.resetAutoscalingTargets">ResetAutoscalingTargets</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAsymmetricAutoscalingOptions` <a name="PutAsymmetricAutoscalingOptions" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.putAsymmetricAutoscalingOptions"></a>

```go
func PutAsymmetricAutoscalingOptions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.putAsymmetricAutoscalingOptions.parameter.value"></a>

- *Type:* interface{}

---

##### `PutAutoscalingLimits` <a name="PutAutoscalingLimits" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.putAutoscalingLimits"></a>

```go
func PutAutoscalingLimits(value SpannerInstanceAutoscalingConfigAutoscalingLimits)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.putAutoscalingLimits.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimits">SpannerInstanceAutoscalingConfigAutoscalingLimits</a>

---

##### `PutAutoscalingTargets` <a name="PutAutoscalingTargets" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.putAutoscalingTargets"></a>

```go
func PutAutoscalingTargets(value SpannerInstanceAutoscalingConfigAutoscalingTargets)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.putAutoscalingTargets.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargets">SpannerInstanceAutoscalingConfigAutoscalingTargets</a>

---

##### `ResetAsymmetricAutoscalingOptions` <a name="ResetAsymmetricAutoscalingOptions" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.resetAsymmetricAutoscalingOptions"></a>

```go
func ResetAsymmetricAutoscalingOptions()
```

##### `ResetAutoscalingLimits` <a name="ResetAutoscalingLimits" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.resetAutoscalingLimits"></a>

```go
func ResetAutoscalingLimits()
```

##### `ResetAutoscalingTargets` <a name="ResetAutoscalingTargets" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.resetAutoscalingTargets"></a>

```go
func ResetAutoscalingTargets()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.property.asymmetricAutoscalingOptions">AsymmetricAutoscalingOptions</a></code> | <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList">SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.property.autoscalingLimits">AutoscalingLimits</a></code> | <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference">SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.property.autoscalingTargets">AutoscalingTargets</a></code> | <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference">SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.property.asymmetricAutoscalingOptionsInput">AsymmetricAutoscalingOptionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.property.autoscalingLimitsInput">AutoscalingLimitsInput</a></code> | <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimits">SpannerInstanceAutoscalingConfigAutoscalingLimits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.property.autoscalingTargetsInput">AutoscalingTargetsInput</a></code> | <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargets">SpannerInstanceAutoscalingConfigAutoscalingTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfig">SpannerInstanceAutoscalingConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AsymmetricAutoscalingOptions`<sup>Required</sup> <a name="AsymmetricAutoscalingOptions" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.property.asymmetricAutoscalingOptions"></a>

```go
func AsymmetricAutoscalingOptions() SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList
```

- *Type:* <a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList">SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList</a>

---

##### `AutoscalingLimits`<sup>Required</sup> <a name="AutoscalingLimits" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.property.autoscalingLimits"></a>

```go
func AutoscalingLimits() SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference">SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference</a>

---

##### `AutoscalingTargets`<sup>Required</sup> <a name="AutoscalingTargets" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.property.autoscalingTargets"></a>

```go
func AutoscalingTargets() SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference">SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference</a>

---

##### `AsymmetricAutoscalingOptionsInput`<sup>Optional</sup> <a name="AsymmetricAutoscalingOptionsInput" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.property.asymmetricAutoscalingOptionsInput"></a>

```go
func AsymmetricAutoscalingOptionsInput() interface{}
```

- *Type:* interface{}

---

##### `AutoscalingLimitsInput`<sup>Optional</sup> <a name="AutoscalingLimitsInput" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.property.autoscalingLimitsInput"></a>

```go
func AutoscalingLimitsInput() SpannerInstanceAutoscalingConfigAutoscalingLimits
```

- *Type:* <a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimits">SpannerInstanceAutoscalingConfigAutoscalingLimits</a>

---

##### `AutoscalingTargetsInput`<sup>Optional</sup> <a name="AutoscalingTargetsInput" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.property.autoscalingTargetsInput"></a>

```go
func AutoscalingTargetsInput() SpannerInstanceAutoscalingConfigAutoscalingTargets
```

- *Type:* <a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargets">SpannerInstanceAutoscalingConfigAutoscalingTargets</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() SpannerInstanceAutoscalingConfig
```

- *Type:* <a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceAutoscalingConfig">SpannerInstanceAutoscalingConfig</a>

---


### SpannerInstanceTimeoutsOutputReference <a name="SpannerInstanceTimeoutsOutputReference" id="@cdktn/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/spannerinstance"

spannerinstance.NewSpannerInstanceTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SpannerInstanceTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



