# `dialogflowTool` Submodule <a name="`dialogflowTool` Submodule" id="@cdktn/provider-google.dialogflowTool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DialogflowTool <a name="DialogflowTool" id="@cdktn/provider-google.dialogflowTool.DialogflowTool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool google_dialogflow_tool}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/dialogflowtool"

dialogflowtool.NewDialogflowTool(scope Construct, id *string, config DialogflowToolConfig) DialogflowTool
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConfig">DialogflowToolConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConfig">DialogflowToolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.putConnectorSpec">PutConnectorSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.putFunctionSpec">PutFunctionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.putOpenApiSpec">PutOpenApiSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.resetActionConfirmationRequirement">ResetActionConfirmationRequirement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.resetConnectorSpec">ResetConnectorSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.resetFunctionSpec">ResetFunctionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.resetOpenApiSpec">ResetOpenApiSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.resetToolId">ResetToolId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConnectorSpec` <a name="PutConnectorSpec" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.putConnectorSpec"></a>

```go
func PutConnectorSpec(value DialogflowToolConnectorSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.putConnectorSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpec">DialogflowToolConnectorSpec</a>

---

##### `PutFunctionSpec` <a name="PutFunctionSpec" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.putFunctionSpec"></a>

```go
func PutFunctionSpec(value DialogflowToolFunctionSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.putFunctionSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpec">DialogflowToolFunctionSpec</a>

---

##### `PutOpenApiSpec` <a name="PutOpenApiSpec" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.putOpenApiSpec"></a>

```go
func PutOpenApiSpec(value DialogflowToolOpenApiSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.putOpenApiSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpec">DialogflowToolOpenApiSpec</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.putTimeouts"></a>

```go
func PutTimeouts(value DialogflowToolTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeouts">DialogflowToolTimeouts</a>

---

##### `ResetActionConfirmationRequirement` <a name="ResetActionConfirmationRequirement" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.resetActionConfirmationRequirement"></a>

```go
func ResetActionConfirmationRequirement()
```

##### `ResetConnectorSpec` <a name="ResetConnectorSpec" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.resetConnectorSpec"></a>

```go
func ResetConnectorSpec()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFunctionSpec` <a name="ResetFunctionSpec" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.resetFunctionSpec"></a>

```go
func ResetFunctionSpec()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.resetId"></a>

```go
func ResetId()
```

##### `ResetOpenApiSpec` <a name="ResetOpenApiSpec" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.resetOpenApiSpec"></a>

```go
func ResetOpenApiSpec()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetToolId` <a name="ResetToolId" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.resetToolId"></a>

```go
func ResetToolId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DialogflowTool resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/dialogflowtool"

dialogflowtool.DialogflowTool_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/dialogflowtool"

dialogflowtool.DialogflowTool_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/dialogflowtool"

dialogflowtool.DialogflowTool_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/dialogflowtool"

dialogflowtool.DialogflowTool_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DialogflowTool resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DialogflowTool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DialogflowTool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DialogflowTool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.connectorSpec">ConnectorSpec</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference">DialogflowToolConnectorSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.functionSpec">FunctionSpec</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference">DialogflowToolFunctionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.openApiSpec">OpenApiSpec</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference">DialogflowToolOpenApiSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.satisfiesPzi">SatisfiesPzi</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.satisfiesPzs">SatisfiesPzs</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference">DialogflowToolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.actionConfirmationRequirementInput">ActionConfirmationRequirementInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.connectorSpecInput">ConnectorSpecInput</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpec">DialogflowToolConnectorSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.functionSpecInput">FunctionSpecInput</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpec">DialogflowToolFunctionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.openApiSpecInput">OpenApiSpecInput</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpec">DialogflowToolOpenApiSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.toolIdInput">ToolIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.toolKeyInput">ToolKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.actionConfirmationRequirement">ActionConfirmationRequirement</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.toolId">ToolId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.toolKey">ToolKey</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ConnectorSpec`<sup>Required</sup> <a name="ConnectorSpec" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.connectorSpec"></a>

```go
func ConnectorSpec() DialogflowToolConnectorSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference">DialogflowToolConnectorSpecOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `FunctionSpec`<sup>Required</sup> <a name="FunctionSpec" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.functionSpec"></a>

```go
func FunctionSpec() DialogflowToolFunctionSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference">DialogflowToolFunctionSpecOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OpenApiSpec`<sup>Required</sup> <a name="OpenApiSpec" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.openApiSpec"></a>

```go
func OpenApiSpec() DialogflowToolOpenApiSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference">DialogflowToolOpenApiSpecOutputReference</a>

---

##### `SatisfiesPzi`<sup>Required</sup> <a name="SatisfiesPzi" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.satisfiesPzi"></a>

```go
func SatisfiesPzi() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `SatisfiesPzs`<sup>Required</sup> <a name="SatisfiesPzs" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.satisfiesPzs"></a>

```go
func SatisfiesPzs() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.timeouts"></a>

```go
func Timeouts() DialogflowToolTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference">DialogflowToolTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `ActionConfirmationRequirementInput`<sup>Optional</sup> <a name="ActionConfirmationRequirementInput" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.actionConfirmationRequirementInput"></a>

```go
func ActionConfirmationRequirementInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ConnectorSpecInput`<sup>Optional</sup> <a name="ConnectorSpecInput" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.connectorSpecInput"></a>

```go
func ConnectorSpecInput() DialogflowToolConnectorSpec
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpec">DialogflowToolConnectorSpec</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FunctionSpecInput`<sup>Optional</sup> <a name="FunctionSpecInput" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.functionSpecInput"></a>

```go
func FunctionSpecInput() DialogflowToolFunctionSpec
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpec">DialogflowToolFunctionSpec</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `OpenApiSpecInput`<sup>Optional</sup> <a name="OpenApiSpecInput" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.openApiSpecInput"></a>

```go
func OpenApiSpecInput() DialogflowToolOpenApiSpec
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpec">DialogflowToolOpenApiSpec</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ToolIdInput`<sup>Optional</sup> <a name="ToolIdInput" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.toolIdInput"></a>

```go
func ToolIdInput() *string
```

- *Type:* *string

---

##### `ToolKeyInput`<sup>Optional</sup> <a name="ToolKeyInput" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.toolKeyInput"></a>

```go
func ToolKeyInput() *string
```

- *Type:* *string

---

##### `ActionConfirmationRequirement`<sup>Required</sup> <a name="ActionConfirmationRequirement" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.actionConfirmationRequirement"></a>

```go
func ActionConfirmationRequirement() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `ToolId`<sup>Required</sup> <a name="ToolId" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.toolId"></a>

```go
func ToolId() *string
```

- *Type:* *string

---

##### `ToolKey`<sup>Required</sup> <a name="ToolKey" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.toolKey"></a>

```go
func ToolKey() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DialogflowToolConfig <a name="DialogflowToolConfig" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/dialogflowtool"

&dialogflowtool.DialogflowToolConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	ToolKey: *string,
	ActionConfirmationRequirement: *map[string]*string,
	ConnectorSpec: github.com/cdktn-io/cdktn-provider-google-go/google/v21.dialogflowTool.DialogflowToolConnectorSpec,
	DeletionPolicy: *string,
	Description: *string,
	DisplayName: *string,
	FunctionSpec: github.com/cdktn-io/cdktn-provider-google-go/google/v21.dialogflowTool.DialogflowToolFunctionSpec,
	Id: *string,
	OpenApiSpec: github.com/cdktn-io/cdktn-provider-google-go/google/v21.dialogflowTool.DialogflowToolOpenApiSpec,
	Project: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-google-go/google/v21.dialogflowTool.DialogflowToolTimeouts,
	ToolId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.location">Location</a></code> | <code>*string</code> | The location of the tool. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.toolKey">ToolKey</a></code> | <code>*string</code> | Required. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.actionConfirmationRequirement">ActionConfirmationRequirement</a></code> | <code>*map[string]*string</code> | Optional. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.connectorSpec">ConnectorSpec</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpec">DialogflowToolConnectorSpec</a></code> | connector_spec block. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.description">Description</a></code> | <code>*string</code> | Optional. Human readable description of the tool. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Optional. The human-readable name of the tool, unique within the project and location. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.functionSpec">FunctionSpec</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpec">DialogflowToolFunctionSpec</a></code> | function_spec block. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#id DialogflowTool#id}. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.openApiSpec">OpenApiSpec</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpec">DialogflowToolOpenApiSpec</a></code> | open_api_spec block. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#project DialogflowTool#project}. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeouts">DialogflowToolTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.toolId">ToolId</a></code> | <code>*string</code> | Optional. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location of the tool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#location DialogflowTool#location}

---

##### `ToolKey`<sup>Required</sup> <a name="ToolKey" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.toolKey"></a>

```go
ToolKey *string
```

- *Type:* *string

Required.

A human readable short name of the tool, which should be unique within the project. It should only contain letters, numbers, and underscores, and it will be used by LLM to identify the tool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#tool_key DialogflowTool#tool_key}

---

##### `ActionConfirmationRequirement`<sup>Optional</sup> <a name="ActionConfirmationRequirement" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.actionConfirmationRequirement"></a>

```go
ActionConfirmationRequirement *map[string]*string
```

- *Type:* *map[string]*string

Optional.

Confirmation requirement for the actions. Each key is an action name in the 'action_schemas'.
If an action's confirmation requirement is not specified (either the key is not present, or its value is 'CONFIRMATION_REQUIREMENT_UNSPECIFIED'), a default value will be populated depending on the action's method type: GET actions default to 'NOT_REQUIRED', and other actions default to 'REQUIRED'.
Valid values are 'REQUIRED' and 'NOT_REQUIRED'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#action_confirmation_requirement DialogflowTool#action_confirmation_requirement}

---

##### `ConnectorSpec`<sup>Optional</sup> <a name="ConnectorSpec" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.connectorSpec"></a>

```go
ConnectorSpec DialogflowToolConnectorSpec
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpec">DialogflowToolConnectorSpec</a>

connector_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#connector_spec DialogflowTool#connector_spec}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#deletion_policy DialogflowTool#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Optional. Human readable description of the tool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#description DialogflowTool#description}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Optional. The human-readable name of the tool, unique within the project and location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#display_name DialogflowTool#display_name}

---

##### `FunctionSpec`<sup>Optional</sup> <a name="FunctionSpec" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.functionSpec"></a>

```go
FunctionSpec DialogflowToolFunctionSpec
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpec">DialogflowToolFunctionSpec</a>

function_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#function_spec DialogflowTool#function_spec}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#id DialogflowTool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `OpenApiSpec`<sup>Optional</sup> <a name="OpenApiSpec" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.openApiSpec"></a>

```go
OpenApiSpec DialogflowToolOpenApiSpec
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpec">DialogflowToolOpenApiSpec</a>

open_api_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#open_api_spec DialogflowTool#open_api_spec}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#project DialogflowTool#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.timeouts"></a>

```go
Timeouts DialogflowToolTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeouts">DialogflowToolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#timeouts DialogflowTool#timeouts}

---

##### `ToolId`<sup>Optional</sup> <a name="ToolId" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.toolId"></a>

```go
ToolId *string
```

- *Type:* *string

Optional.

The ID to use for the tool, which will become the final component of the tool's resource name.
The tool ID must be compliant with the regression formula '[a-zA-Z][a-zA-Z0-9_-]*' with the characters length in range of [3,64].
If the field is not provided, an Id will be auto-generated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#tool_id DialogflowTool#tool_id}

---

### DialogflowToolConnectorSpec <a name="DialogflowToolConnectorSpec" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpec.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/dialogflowtool"

&dialogflowtool.DialogflowToolConnectorSpec {
	Actions: interface{},
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpec.property.actions">Actions</a></code> | <code>interface{}</code> | actions block. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpec.property.name">Name</a></code> | <code>*string</code> | The full resource name of the referenced Integration Connectors Connection. Format: 'projects/* /locations/* /connections/*'. |

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpec.property.actions"></a>

```go
Actions interface{}
```

- *Type:* interface{}

actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#actions DialogflowTool#actions}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpec.property.name"></a>

```go
Name *string
```

- *Type:* *string

The full resource name of the referenced Integration Connectors Connection. Format: 'projects/* /locations/* /connections/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#name DialogflowTool#name}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### DialogflowToolConnectorSpecActions <a name="DialogflowToolConnectorSpecActions" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/dialogflowtool"

&dialogflowtool.DialogflowToolConnectorSpecActions {
	ConnectionActionId: *string,
	EntityOperation: github.com/cdktn-io/cdktn-provider-google-go/google/v21.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperation,
	InputFields: *[]*string,
	OutputFields: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActions.property.connectionActionId">ConnectionActionId</a></code> | <code>*string</code> | ID of a Connection action for the tool to use. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActions.property.entityOperation">EntityOperation</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperation">DialogflowToolConnectorSpecActionsEntityOperation</a></code> | entity_operation block. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActions.property.inputFields">InputFields</a></code> | <code>*[]*string</code> | Entity fields to use as inputs for the operation. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActions.property.outputFields">OutputFields</a></code> | <code>*[]*string</code> | Entity fields to return from the operation. If no fields are specified, all fields of the Entity will be returned. |

---

##### `ConnectionActionId`<sup>Optional</sup> <a name="ConnectionActionId" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActions.property.connectionActionId"></a>

```go
ConnectionActionId *string
```

- *Type:* *string

ID of a Connection action for the tool to use.

This field is part of a required union field 'action_spec'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#connection_action_id DialogflowTool#connection_action_id}

---

##### `EntityOperation`<sup>Optional</sup> <a name="EntityOperation" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActions.property.entityOperation"></a>

```go
EntityOperation DialogflowToolConnectorSpecActionsEntityOperation
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperation">DialogflowToolConnectorSpecActionsEntityOperation</a>

entity_operation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#entity_operation DialogflowTool#entity_operation}

---

##### `InputFields`<sup>Optional</sup> <a name="InputFields" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActions.property.inputFields"></a>

```go
InputFields *[]*string
```

- *Type:* *[]*string

Entity fields to use as inputs for the operation.

If no fields are specified, all fields of the Entity will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#input_fields DialogflowTool#input_fields}

---

##### `OutputFields`<sup>Optional</sup> <a name="OutputFields" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActions.property.outputFields"></a>

```go
OutputFields *[]*string
```

- *Type:* *[]*string

Entity fields to return from the operation. If no fields are specified, all fields of the Entity will be returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#output_fields DialogflowTool#output_fields}

---

### DialogflowToolConnectorSpecActionsEntityOperation <a name="DialogflowToolConnectorSpecActionsEntityOperation" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/dialogflowtool"

&dialogflowtool.DialogflowToolConnectorSpecActionsEntityOperation {
	EntityId: *string,
	Operation: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperation.property.entityId">EntityId</a></code> | <code>*string</code> | ID of the entity. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperation.property.operation">Operation</a></code> | <code>*string</code> | The operation to perform on the entity. Possible values: ["LIST", "GET", "CREATE", "UPDATE", "DELETE"]. |

---

##### `EntityId`<sup>Required</sup> <a name="EntityId" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperation.property.entityId"></a>

```go
EntityId *string
```

- *Type:* *string

ID of the entity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#entity_id DialogflowTool#entity_id}

---

##### `Operation`<sup>Required</sup> <a name="Operation" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperation.property.operation"></a>

```go
Operation *string
```

- *Type:* *string

The operation to perform on the entity. Possible values: ["LIST", "GET", "CREATE", "UPDATE", "DELETE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#operation DialogflowTool#operation}

---

### DialogflowToolFunctionSpec <a name="DialogflowToolFunctionSpec" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpec.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/dialogflowtool"

&dialogflowtool.DialogflowToolFunctionSpec {
	InputSchema: *string,
	MethodType: *string,
	OutputSchema: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpec.property.inputSchema">InputSchema</a></code> | <code>*string</code> | Optional. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpec.property.methodType">MethodType</a></code> | <code>*string</code> | Optional. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpec.property.outputSchema">OutputSchema</a></code> | <code>*string</code> | Optional. |

---

##### `InputSchema`<sup>Optional</sup> <a name="InputSchema" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpec.property.inputSchema"></a>

```go
InputSchema *string
```

- *Type:* *string

Optional.

The JSON schema is encapsulated in a [google.protobuf.Struct](https://protobuf.dev/reference/protobuf/google.protobuf/#struct) to describe the input of the function.
This input is a JSON object that contains the function's parameters as properties of the object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#input_schema DialogflowTool#input_schema}

---

##### `MethodType`<sup>Optional</sup> <a name="MethodType" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpec.property.methodType"></a>

```go
MethodType *string
```

- *Type:* *string

Optional.

The method type of the function. If not specified, the default value is GET. Possible values: ["GET", "POST", "PUT", "DELETE", "PATCH"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#method_type DialogflowTool#method_type}

---

##### `OutputSchema`<sup>Optional</sup> <a name="OutputSchema" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpec.property.outputSchema"></a>

```go
OutputSchema *string
```

- *Type:* *string

Optional.

The JSON schema is encapsulated in a [google.protobuf.Struct](https://protobuf.dev/reference/protobuf/google.protobuf/#struct) to describe the output of the function.
This output is a JSON object that contains the function's parameters as properties of the object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#output_schema DialogflowTool#output_schema}

---

### DialogflowToolOpenApiSpec <a name="DialogflowToolOpenApiSpec" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpec.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/dialogflowtool"

&dialogflowtool.DialogflowToolOpenApiSpec {
	TextSchema: *string,
	Authentication: github.com/cdktn-io/cdktn-provider-google-go/google/v21.dialogflowTool.DialogflowToolOpenApiSpecAuthentication,
	ServiceDirectoryConfig: github.com/cdktn-io/cdktn-provider-google-go/google/v21.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfig,
	TlsConfig: github.com/cdktn-io/cdktn-provider-google-go/google/v21.dialogflowTool.DialogflowToolOpenApiSpecTlsConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpec.property.textSchema">TextSchema</a></code> | <code>*string</code> | Required. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpec.property.authentication">Authentication</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthentication">DialogflowToolOpenApiSpecAuthentication</a></code> | authentication block. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpec.property.serviceDirectoryConfig">ServiceDirectoryConfig</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfig">DialogflowToolOpenApiSpecServiceDirectoryConfig</a></code> | service_directory_config block. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpec.property.tlsConfig">TlsConfig</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfig">DialogflowToolOpenApiSpecTlsConfig</a></code> | tls_config block. |

---

##### `TextSchema`<sup>Required</sup> <a name="TextSchema" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpec.property.textSchema"></a>

```go
TextSchema *string
```

- *Type:* *string

Required.

The OpenAPI schema specified as a text.
Note: Plays a role in linking the OpenAPI spec with the tool. The 'info.title' field in the OpenAPI schema must match the 'toolKey' of the tool, otherwise the API will overwrite 'info.title' with 'toolKey'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#text_schema DialogflowTool#text_schema}

---

##### `Authentication`<sup>Optional</sup> <a name="Authentication" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpec.property.authentication"></a>

```go
Authentication DialogflowToolOpenApiSpecAuthentication
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthentication">DialogflowToolOpenApiSpecAuthentication</a>

authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#authentication DialogflowTool#authentication}

---

##### `ServiceDirectoryConfig`<sup>Optional</sup> <a name="ServiceDirectoryConfig" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpec.property.serviceDirectoryConfig"></a>

```go
ServiceDirectoryConfig DialogflowToolOpenApiSpecServiceDirectoryConfig
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfig">DialogflowToolOpenApiSpecServiceDirectoryConfig</a>

service_directory_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#service_directory_config DialogflowTool#service_directory_config}

---

##### `TlsConfig`<sup>Optional</sup> <a name="TlsConfig" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpec.property.tlsConfig"></a>

```go
TlsConfig DialogflowToolOpenApiSpecTlsConfig
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfig">DialogflowToolOpenApiSpecTlsConfig</a>

tls_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#tls_config DialogflowTool#tls_config}

---

### DialogflowToolOpenApiSpecAuthentication <a name="DialogflowToolOpenApiSpecAuthentication" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthentication.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/dialogflowtool"

&dialogflowtool.DialogflowToolOpenApiSpecAuthentication {
	ApiKeyConfig: github.com/cdktn-io/cdktn-provider-google-go/google/v21.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfig,
	BearerTokenConfig: github.com/cdktn-io/cdktn-provider-google-go/google/v21.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig,
	OauthConfig: github.com/cdktn-io/cdktn-provider-google-go/google/v21.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfig,
	ServiceAgentAuthConfig: github.com/cdktn-io/cdktn-provider-google-go/google/v21.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthentication.property.apiKeyConfig">ApiKeyConfig</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfig">DialogflowToolOpenApiSpecAuthenticationApiKeyConfig</a></code> | api_key_config block. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthentication.property.bearerTokenConfig">BearerTokenConfig</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig">DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig</a></code> | bearer_token_config block. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthentication.property.oauthConfig">OauthConfig</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfig">DialogflowToolOpenApiSpecAuthenticationOauthConfig</a></code> | oauth_config block. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthentication.property.serviceAgentAuthConfig">ServiceAgentAuthConfig</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig">DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig</a></code> | service_agent_auth_config block. |

---

##### `ApiKeyConfig`<sup>Optional</sup> <a name="ApiKeyConfig" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthentication.property.apiKeyConfig"></a>

```go
ApiKeyConfig DialogflowToolOpenApiSpecAuthenticationApiKeyConfig
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfig">DialogflowToolOpenApiSpecAuthenticationApiKeyConfig</a>

api_key_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#api_key_config DialogflowTool#api_key_config}

---

##### `BearerTokenConfig`<sup>Optional</sup> <a name="BearerTokenConfig" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthentication.property.bearerTokenConfig"></a>

```go
BearerTokenConfig DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig">DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig</a>

bearer_token_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#bearer_token_config DialogflowTool#bearer_token_config}

---

##### `OauthConfig`<sup>Optional</sup> <a name="OauthConfig" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthentication.property.oauthConfig"></a>

```go
OauthConfig DialogflowToolOpenApiSpecAuthenticationOauthConfig
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfig">DialogflowToolOpenApiSpecAuthenticationOauthConfig</a>

oauth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#oauth_config DialogflowTool#oauth_config}

---

##### `ServiceAgentAuthConfig`<sup>Optional</sup> <a name="ServiceAgentAuthConfig" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthentication.property.serviceAgentAuthConfig"></a>

```go
ServiceAgentAuthConfig DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig">DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig</a>

service_agent_auth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#service_agent_auth_config DialogflowTool#service_agent_auth_config}

---

### DialogflowToolOpenApiSpecAuthenticationApiKeyConfig <a name="DialogflowToolOpenApiSpecAuthenticationApiKeyConfig" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/dialogflowtool"

&dialogflowtool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfig {
	KeyName: *string,
	RequestLocation: *string,
	ApiKey: *string,
	SecretVersionForApiKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfig.property.keyName">KeyName</a></code> | <code>*string</code> | The parameter name or the header name of the API key. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfig.property.requestLocation">RequestLocation</a></code> | <code>*string</code> | Key location in the request. Possible values: ["HEADER", "QUERY_STRING"]. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfig.property.apiKey">ApiKey</a></code> | <code>*string</code> | Optional. The API key. If the 'secretVersionForApiKey' field is set, this field will be ignored. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfig.property.secretVersionForApiKey">SecretVersionForApiKey</a></code> | <code>*string</code> | Optional. |

---

##### `KeyName`<sup>Required</sup> <a name="KeyName" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfig.property.keyName"></a>

```go
KeyName *string
```

- *Type:* *string

The parameter name or the header name of the API key.

E.g., If the API request is "https://example.com/act?X-Api-Key=", "X-Api-Key" would be the parameter name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#key_name DialogflowTool#key_name}

---

##### `RequestLocation`<sup>Required</sup> <a name="RequestLocation" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfig.property.requestLocation"></a>

```go
RequestLocation *string
```

- *Type:* *string

Key location in the request. Possible values: ["HEADER", "QUERY_STRING"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#request_location DialogflowTool#request_location}

---

##### `ApiKey`<sup>Optional</sup> <a name="ApiKey" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfig.property.apiKey"></a>

```go
ApiKey *string
```

- *Type:* *string

Optional. The API key. If the 'secretVersionForApiKey' field is set, this field will be ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#api_key DialogflowTool#api_key}

---

##### `SecretVersionForApiKey`<sup>Optional</sup> <a name="SecretVersionForApiKey" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfig.property.secretVersionForApiKey"></a>

```go
SecretVersionForApiKey *string
```

- *Type:* *string

Optional.

The name of the SecretManager secret version resource storing the API key.
If this field is set, the 'apiKey' field will be ignored.
Format: 'projects/{project}/secrets/{secret}/versions/{version}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#secret_version_for_api_key DialogflowTool#secret_version_for_api_key}

---

### DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig <a name="DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/dialogflowtool"

&dialogflowtool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig {
	SecretVersionForToken: *string,
	Token: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig.property.secretVersionForToken">SecretVersionForToken</a></code> | <code>*string</code> | Optional. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig.property.token">Token</a></code> | <code>*string</code> | Optional. The text token appended to the text 'Bearer' to the request Authorization header. |

---

##### `SecretVersionForToken`<sup>Optional</sup> <a name="SecretVersionForToken" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig.property.secretVersionForToken"></a>

```go
SecretVersionForToken *string
```

- *Type:* *string

Optional.

The name of the SecretManager secret version resource storing the Bearer token.
If this field is set, the 'token' field will be ignored.
Format: 'projects/{project}/secrets/{secret}/versions/{version}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#secret_version_for_token DialogflowTool#secret_version_for_token}

---

##### `Token`<sup>Optional</sup> <a name="Token" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig.property.token"></a>

```go
Token *string
```

- *Type:* *string

Optional. The text token appended to the text 'Bearer' to the request Authorization header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#token DialogflowTool#token}

---

### DialogflowToolOpenApiSpecAuthenticationOauthConfig <a name="DialogflowToolOpenApiSpecAuthenticationOauthConfig" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/dialogflowtool"

&dialogflowtool.DialogflowToolOpenApiSpecAuthenticationOauthConfig {
	ClientId: *string,
	OauthGrantType: *string,
	TokenEndpoint: *string,
	ClientSecret: *string,
	Scopes: *[]*string,
	SecretVersionForClientSecret: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfig.property.clientId">ClientId</a></code> | <code>*string</code> | The client ID from the OAuth provider. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfig.property.oauthGrantType">OauthGrantType</a></code> | <code>*string</code> | OAuth grant types. Possible values: ["CLIENT_CREDENTIAL"]. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfig.property.tokenEndpoint">TokenEndpoint</a></code> | <code>*string</code> | The token endpoint in the OAuth provider to exchange for an access token. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfig.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | Optional. The client secret from the OAuth provider. If the 'secretVersionForClientSecret' field is set, this field will be ignored. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfig.property.scopes">Scopes</a></code> | <code>*[]*string</code> | Optional. The OAuth scopes to grant. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfig.property.secretVersionForClientSecret">SecretVersionForClientSecret</a></code> | <code>*string</code> | Optional. |

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfig.property.clientId"></a>

```go
ClientId *string
```

- *Type:* *string

The client ID from the OAuth provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#client_id DialogflowTool#client_id}

---

##### `OauthGrantType`<sup>Required</sup> <a name="OauthGrantType" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfig.property.oauthGrantType"></a>

```go
OauthGrantType *string
```

- *Type:* *string

OAuth grant types. Possible values: ["CLIENT_CREDENTIAL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#oauth_grant_type DialogflowTool#oauth_grant_type}

---

##### `TokenEndpoint`<sup>Required</sup> <a name="TokenEndpoint" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfig.property.tokenEndpoint"></a>

```go
TokenEndpoint *string
```

- *Type:* *string

The token endpoint in the OAuth provider to exchange for an access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#token_endpoint DialogflowTool#token_endpoint}

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfig.property.clientSecret"></a>

```go
ClientSecret *string
```

- *Type:* *string

Optional. The client secret from the OAuth provider. If the 'secretVersionForClientSecret' field is set, this field will be ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#client_secret DialogflowTool#client_secret}

---

##### `Scopes`<sup>Optional</sup> <a name="Scopes" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfig.property.scopes"></a>

```go
Scopes *[]*string
```

- *Type:* *[]*string

Optional. The OAuth scopes to grant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#scopes DialogflowTool#scopes}

---

##### `SecretVersionForClientSecret`<sup>Optional</sup> <a name="SecretVersionForClientSecret" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfig.property.secretVersionForClientSecret"></a>

```go
SecretVersionForClientSecret *string
```

- *Type:* *string

Optional.

The name of the SecretManager secret version resource storing the client secret.
If this field is set, the 'clientSecret' field will be ignored.
Format: 'projects/{project}/secrets/{secret}/versions/{version}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#secret_version_for_client_secret DialogflowTool#secret_version_for_client_secret}

---

### DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig <a name="DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/dialogflowtool"

&dialogflowtool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig {
	ServiceAgentAuth: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig.property.serviceAgentAuth">ServiceAgentAuth</a></code> | <code>*string</code> | Optional. |

---

##### `ServiceAgentAuth`<sup>Optional</sup> <a name="ServiceAgentAuth" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig.property.serviceAgentAuth"></a>

```go
ServiceAgentAuth *string
```

- *Type:* *string

Optional.

Indicate the auth token type generated from the Dialogflow service agent.
The generated token is sent in the Authorization header. Possible values: ["ID_TOKEN", "ACCESS_TOKEN"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#service_agent_auth DialogflowTool#service_agent_auth}

---

### DialogflowToolOpenApiSpecServiceDirectoryConfig <a name="DialogflowToolOpenApiSpecServiceDirectoryConfig" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/dialogflowtool"

&dialogflowtool.DialogflowToolOpenApiSpecServiceDirectoryConfig {
	Service: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfig.property.service">Service</a></code> | <code>*string</code> | The name of [Service Directory](https://cloud.google.com/service-directory/docs) service. Format: 'projects/<ProjectID>/locations/<LocationID>/namespaces/<NamespaceID>/services/<ServiceID>'. 'LocationID' of the service directory must be the same as the location of the tool. |

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfig.property.service"></a>

```go
Service *string
```

- *Type:* *string

The name of [Service Directory](https://cloud.google.com/service-directory/docs) service. Format: 'projects/<ProjectID>/locations/<LocationID>/namespaces/<NamespaceID>/services/<ServiceID>'. 'LocationID' of the service directory must be the same as the location of the tool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#service DialogflowTool#service}

---

### DialogflowToolOpenApiSpecTlsConfig <a name="DialogflowToolOpenApiSpecTlsConfig" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/dialogflowtool"

&dialogflowtool.DialogflowToolOpenApiSpecTlsConfig {
	CaCerts: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfig.property.caCerts">CaCerts</a></code> | <code>interface{}</code> | ca_certs block. |

---

##### `CaCerts`<sup>Required</sup> <a name="CaCerts" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfig.property.caCerts"></a>

```go
CaCerts interface{}
```

- *Type:* interface{}

ca_certs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#ca_certs DialogflowTool#ca_certs}

---

### DialogflowToolOpenApiSpecTlsConfigCaCerts <a name="DialogflowToolOpenApiSpecTlsConfigCaCerts" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCerts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCerts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/dialogflowtool"

&dialogflowtool.DialogflowToolOpenApiSpecTlsConfigCaCerts {
	Cert: *string,
	DisplayName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCerts.property.cert">Cert</a></code> | <code>*string</code> | The allowed custom CA certificates (in DER format) for HTTPS verification. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCerts.property.displayName">DisplayName</a></code> | <code>*string</code> | The name of the allowed custom CA certificates. This can be used to disambiguate the custom CA certificates. |

---

##### `Cert`<sup>Required</sup> <a name="Cert" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCerts.property.cert"></a>

```go
Cert *string
```

- *Type:* *string

The allowed custom CA certificates (in DER format) for HTTPS verification.

This overrides the default SSL trust store.
If this is empty or unspecified, Dialogflow will use Google's default trust store to verify certificates.
N.B. Make sure the HTTPS server certificates are signed with "subject alt name".
A base64-encoded string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#cert DialogflowTool#cert}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCerts.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

The name of the allowed custom CA certificates. This can be used to disambiguate the custom CA certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#display_name DialogflowTool#display_name}

---

### DialogflowToolTimeouts <a name="DialogflowToolTimeouts" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/dialogflowtool"

&dialogflowtool.DialogflowToolTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#create DialogflowTool#create}. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#delete DialogflowTool#delete}. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#update DialogflowTool#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#create DialogflowTool#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#delete DialogflowTool#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#update DialogflowTool#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DialogflowToolConnectorSpecActionsEntityOperationOutputReference <a name="DialogflowToolConnectorSpecActionsEntityOperationOutputReference" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/dialogflowtool"

dialogflowtool.NewDialogflowToolConnectorSpecActionsEntityOperationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DialogflowToolConnectorSpecActionsEntityOperationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.property.entityIdInput">EntityIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.property.operationInput">OperationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.property.entityId">EntityId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.property.operation">Operation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperation">DialogflowToolConnectorSpecActionsEntityOperation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EntityIdInput`<sup>Optional</sup> <a name="EntityIdInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.property.entityIdInput"></a>

```go
func EntityIdInput() *string
```

- *Type:* *string

---

##### `OperationInput`<sup>Optional</sup> <a name="OperationInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.property.operationInput"></a>

```go
func OperationInput() *string
```

- *Type:* *string

---

##### `EntityId`<sup>Required</sup> <a name="EntityId" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.property.entityId"></a>

```go
func EntityId() *string
```

- *Type:* *string

---

##### `Operation`<sup>Required</sup> <a name="Operation" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.property.operation"></a>

```go
func Operation() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.property.internalValue"></a>

```go
func InternalValue() DialogflowToolConnectorSpecActionsEntityOperation
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperation">DialogflowToolConnectorSpecActionsEntityOperation</a>

---


### DialogflowToolConnectorSpecActionsList <a name="DialogflowToolConnectorSpecActionsList" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/dialogflowtool"

dialogflowtool.NewDialogflowToolConnectorSpecActionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DialogflowToolConnectorSpecActionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList.get"></a>

```go
func Get(index *f64) DialogflowToolConnectorSpecActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DialogflowToolConnectorSpecActionsOutputReference <a name="DialogflowToolConnectorSpecActionsOutputReference" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/dialogflowtool"

dialogflowtool.NewDialogflowToolConnectorSpecActionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DialogflowToolConnectorSpecActionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.putEntityOperation">PutEntityOperation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.resetConnectionActionId">ResetConnectionActionId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.resetEntityOperation">ResetEntityOperation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.resetInputFields">ResetInputFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.resetOutputFields">ResetOutputFields</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEntityOperation` <a name="PutEntityOperation" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.putEntityOperation"></a>

```go
func PutEntityOperation(value DialogflowToolConnectorSpecActionsEntityOperation)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.putEntityOperation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperation">DialogflowToolConnectorSpecActionsEntityOperation</a>

---

##### `ResetConnectionActionId` <a name="ResetConnectionActionId" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.resetConnectionActionId"></a>

```go
func ResetConnectionActionId()
```

##### `ResetEntityOperation` <a name="ResetEntityOperation" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.resetEntityOperation"></a>

```go
func ResetEntityOperation()
```

##### `ResetInputFields` <a name="ResetInputFields" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.resetInputFields"></a>

```go
func ResetInputFields()
```

##### `ResetOutputFields` <a name="ResetOutputFields" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.resetOutputFields"></a>

```go
func ResetOutputFields()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.property.entityOperation">EntityOperation</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference">DialogflowToolConnectorSpecActionsEntityOperationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.property.connectionActionIdInput">ConnectionActionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.property.entityOperationInput">EntityOperationInput</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperation">DialogflowToolConnectorSpecActionsEntityOperation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.property.inputFieldsInput">InputFieldsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.property.outputFieldsInput">OutputFieldsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.property.connectionActionId">ConnectionActionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.property.inputFields">InputFields</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.property.outputFields">OutputFields</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EntityOperation`<sup>Required</sup> <a name="EntityOperation" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.property.entityOperation"></a>

```go
func EntityOperation() DialogflowToolConnectorSpecActionsEntityOperationOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference">DialogflowToolConnectorSpecActionsEntityOperationOutputReference</a>

---

##### `ConnectionActionIdInput`<sup>Optional</sup> <a name="ConnectionActionIdInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.property.connectionActionIdInput"></a>

```go
func ConnectionActionIdInput() *string
```

- *Type:* *string

---

##### `EntityOperationInput`<sup>Optional</sup> <a name="EntityOperationInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.property.entityOperationInput"></a>

```go
func EntityOperationInput() DialogflowToolConnectorSpecActionsEntityOperation
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperation">DialogflowToolConnectorSpecActionsEntityOperation</a>

---

##### `InputFieldsInput`<sup>Optional</sup> <a name="InputFieldsInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.property.inputFieldsInput"></a>

```go
func InputFieldsInput() *[]*string
```

- *Type:* *[]*string

---

##### `OutputFieldsInput`<sup>Optional</sup> <a name="OutputFieldsInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.property.outputFieldsInput"></a>

```go
func OutputFieldsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ConnectionActionId`<sup>Required</sup> <a name="ConnectionActionId" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.property.connectionActionId"></a>

```go
func ConnectionActionId() *string
```

- *Type:* *string

---

##### `InputFields`<sup>Required</sup> <a name="InputFields" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.property.inputFields"></a>

```go
func InputFields() *[]*string
```

- *Type:* *[]*string

---

##### `OutputFields`<sup>Required</sup> <a name="OutputFields" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.property.outputFields"></a>

```go
func OutputFields() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DialogflowToolConnectorSpecOutputReference <a name="DialogflowToolConnectorSpecOutputReference" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/dialogflowtool"

dialogflowtool.NewDialogflowToolConnectorSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DialogflowToolConnectorSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.putActions">PutActions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutActions` <a name="PutActions" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.putActions"></a>

```go
func PutActions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.putActions.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.property.actions">Actions</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList">DialogflowToolConnectorSpecActionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.property.actionsInput">ActionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpec">DialogflowToolConnectorSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.property.actions"></a>

```go
func Actions() DialogflowToolConnectorSpecActionsList
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList">DialogflowToolConnectorSpecActionsList</a>

---

##### `ActionsInput`<sup>Optional</sup> <a name="ActionsInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.property.actionsInput"></a>

```go
func ActionsInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() DialogflowToolConnectorSpec
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpec">DialogflowToolConnectorSpec</a>

---


### DialogflowToolFunctionSpecOutputReference <a name="DialogflowToolFunctionSpecOutputReference" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/dialogflowtool"

dialogflowtool.NewDialogflowToolFunctionSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DialogflowToolFunctionSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.resetInputSchema">ResetInputSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.resetMethodType">ResetMethodType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.resetOutputSchema">ResetOutputSchema</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInputSchema` <a name="ResetInputSchema" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.resetInputSchema"></a>

```go
func ResetInputSchema()
```

##### `ResetMethodType` <a name="ResetMethodType" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.resetMethodType"></a>

```go
func ResetMethodType()
```

##### `ResetOutputSchema` <a name="ResetOutputSchema" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.resetOutputSchema"></a>

```go
func ResetOutputSchema()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.property.inputSchemaInput">InputSchemaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.property.methodTypeInput">MethodTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.property.outputSchemaInput">OutputSchemaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.property.inputSchema">InputSchema</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.property.methodType">MethodType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.property.outputSchema">OutputSchema</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpec">DialogflowToolFunctionSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InputSchemaInput`<sup>Optional</sup> <a name="InputSchemaInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.property.inputSchemaInput"></a>

```go
func InputSchemaInput() *string
```

- *Type:* *string

---

##### `MethodTypeInput`<sup>Optional</sup> <a name="MethodTypeInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.property.methodTypeInput"></a>

```go
func MethodTypeInput() *string
```

- *Type:* *string

---

##### `OutputSchemaInput`<sup>Optional</sup> <a name="OutputSchemaInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.property.outputSchemaInput"></a>

```go
func OutputSchemaInput() *string
```

- *Type:* *string

---

##### `InputSchema`<sup>Required</sup> <a name="InputSchema" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.property.inputSchema"></a>

```go
func InputSchema() *string
```

- *Type:* *string

---

##### `MethodType`<sup>Required</sup> <a name="MethodType" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.property.methodType"></a>

```go
func MethodType() *string
```

- *Type:* *string

---

##### `OutputSchema`<sup>Required</sup> <a name="OutputSchema" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.property.outputSchema"></a>

```go
func OutputSchema() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() DialogflowToolFunctionSpec
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpec">DialogflowToolFunctionSpec</a>

---


### DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference <a name="DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/dialogflowtool"

dialogflowtool.NewDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.resetApiKey">ResetApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.resetSecretVersionForApiKey">ResetSecretVersionForApiKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetApiKey` <a name="ResetApiKey" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.resetApiKey"></a>

```go
func ResetApiKey()
```

##### `ResetSecretVersionForApiKey` <a name="ResetSecretVersionForApiKey" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.resetSecretVersionForApiKey"></a>

```go
func ResetSecretVersionForApiKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.apiKeyInput">ApiKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.keyNameInput">KeyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.requestLocationInput">RequestLocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.secretVersionForApiKeyInput">SecretVersionForApiKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.apiKey">ApiKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.keyName">KeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.requestLocation">RequestLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.secretVersionForApiKey">SecretVersionForApiKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfig">DialogflowToolOpenApiSpecAuthenticationApiKeyConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiKeyInput`<sup>Optional</sup> <a name="ApiKeyInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.apiKeyInput"></a>

```go
func ApiKeyInput() *string
```

- *Type:* *string

---

##### `KeyNameInput`<sup>Optional</sup> <a name="KeyNameInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.keyNameInput"></a>

```go
func KeyNameInput() *string
```

- *Type:* *string

---

##### `RequestLocationInput`<sup>Optional</sup> <a name="RequestLocationInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.requestLocationInput"></a>

```go
func RequestLocationInput() *string
```

- *Type:* *string

---

##### `SecretVersionForApiKeyInput`<sup>Optional</sup> <a name="SecretVersionForApiKeyInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.secretVersionForApiKeyInput"></a>

```go
func SecretVersionForApiKeyInput() *string
```

- *Type:* *string

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.apiKey"></a>

```go
func ApiKey() *string
```

- *Type:* *string

---

##### `KeyName`<sup>Required</sup> <a name="KeyName" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.keyName"></a>

```go
func KeyName() *string
```

- *Type:* *string

---

##### `RequestLocation`<sup>Required</sup> <a name="RequestLocation" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.requestLocation"></a>

```go
func RequestLocation() *string
```

- *Type:* *string

---

##### `SecretVersionForApiKey`<sup>Required</sup> <a name="SecretVersionForApiKey" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.secretVersionForApiKey"></a>

```go
func SecretVersionForApiKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DialogflowToolOpenApiSpecAuthenticationApiKeyConfig
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfig">DialogflowToolOpenApiSpecAuthenticationApiKeyConfig</a>

---


### DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference <a name="DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/dialogflowtool"

dialogflowtool.NewDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.resetSecretVersionForToken">ResetSecretVersionForToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.resetToken">ResetToken</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSecretVersionForToken` <a name="ResetSecretVersionForToken" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.resetSecretVersionForToken"></a>

```go
func ResetSecretVersionForToken()
```

##### `ResetToken` <a name="ResetToken" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.resetToken"></a>

```go
func ResetToken()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.secretVersionForTokenInput">SecretVersionForTokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.tokenInput">TokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.secretVersionForToken">SecretVersionForToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.token">Token</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig">DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecretVersionForTokenInput`<sup>Optional</sup> <a name="SecretVersionForTokenInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.secretVersionForTokenInput"></a>

```go
func SecretVersionForTokenInput() *string
```

- *Type:* *string

---

##### `TokenInput`<sup>Optional</sup> <a name="TokenInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.tokenInput"></a>

```go
func TokenInput() *string
```

- *Type:* *string

---

##### `SecretVersionForToken`<sup>Required</sup> <a name="SecretVersionForToken" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.secretVersionForToken"></a>

```go
func SecretVersionForToken() *string
```

- *Type:* *string

---

##### `Token`<sup>Required</sup> <a name="Token" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.token"></a>

```go
func Token() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig">DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig</a>

---


### DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference <a name="DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/dialogflowtool"

dialogflowtool.NewDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.resetClientSecret">ResetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.resetScopes">ResetScopes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.resetSecretVersionForClientSecret">ResetSecretVersionForClientSecret</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClientSecret` <a name="ResetClientSecret" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.resetClientSecret"></a>

```go
func ResetClientSecret()
```

##### `ResetScopes` <a name="ResetScopes" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.resetScopes"></a>

```go
func ResetScopes()
```

##### `ResetSecretVersionForClientSecret` <a name="ResetSecretVersionForClientSecret" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.resetSecretVersionForClientSecret"></a>

```go
func ResetSecretVersionForClientSecret()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.clientSecretInput">ClientSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.oauthGrantTypeInput">OauthGrantTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.scopesInput">ScopesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.secretVersionForClientSecretInput">SecretVersionForClientSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.tokenEndpointInput">TokenEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.oauthGrantType">OauthGrantType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.scopes">Scopes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.secretVersionForClientSecret">SecretVersionForClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.tokenEndpoint">TokenEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfig">DialogflowToolOpenApiSpecAuthenticationOauthConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.clientIdInput"></a>

```go
func ClientIdInput() *string
```

- *Type:* *string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.clientSecretInput"></a>

```go
func ClientSecretInput() *string
```

- *Type:* *string

---

##### `OauthGrantTypeInput`<sup>Optional</sup> <a name="OauthGrantTypeInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.oauthGrantTypeInput"></a>

```go
func OauthGrantTypeInput() *string
```

- *Type:* *string

---

##### `ScopesInput`<sup>Optional</sup> <a name="ScopesInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.scopesInput"></a>

```go
func ScopesInput() *[]*string
```

- *Type:* *[]*string

---

##### `SecretVersionForClientSecretInput`<sup>Optional</sup> <a name="SecretVersionForClientSecretInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.secretVersionForClientSecretInput"></a>

```go
func SecretVersionForClientSecretInput() *string
```

- *Type:* *string

---

##### `TokenEndpointInput`<sup>Optional</sup> <a name="TokenEndpointInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.tokenEndpointInput"></a>

```go
func TokenEndpointInput() *string
```

- *Type:* *string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.clientSecret"></a>

```go
func ClientSecret() *string
```

- *Type:* *string

---

##### `OauthGrantType`<sup>Required</sup> <a name="OauthGrantType" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.oauthGrantType"></a>

```go
func OauthGrantType() *string
```

- *Type:* *string

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.scopes"></a>

```go
func Scopes() *[]*string
```

- *Type:* *[]*string

---

##### `SecretVersionForClientSecret`<sup>Required</sup> <a name="SecretVersionForClientSecret" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.secretVersionForClientSecret"></a>

```go
func SecretVersionForClientSecret() *string
```

- *Type:* *string

---

##### `TokenEndpoint`<sup>Required</sup> <a name="TokenEndpoint" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.tokenEndpoint"></a>

```go
func TokenEndpoint() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DialogflowToolOpenApiSpecAuthenticationOauthConfig
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfig">DialogflowToolOpenApiSpecAuthenticationOauthConfig</a>

---


### DialogflowToolOpenApiSpecAuthenticationOutputReference <a name="DialogflowToolOpenApiSpecAuthenticationOutputReference" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/dialogflowtool"

dialogflowtool.NewDialogflowToolOpenApiSpecAuthenticationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DialogflowToolOpenApiSpecAuthenticationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.putApiKeyConfig">PutApiKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.putBearerTokenConfig">PutBearerTokenConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.putOauthConfig">PutOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.putServiceAgentAuthConfig">PutServiceAgentAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.resetApiKeyConfig">ResetApiKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.resetBearerTokenConfig">ResetBearerTokenConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.resetOauthConfig">ResetOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.resetServiceAgentAuthConfig">ResetServiceAgentAuthConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutApiKeyConfig` <a name="PutApiKeyConfig" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.putApiKeyConfig"></a>

```go
func PutApiKeyConfig(value DialogflowToolOpenApiSpecAuthenticationApiKeyConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.putApiKeyConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfig">DialogflowToolOpenApiSpecAuthenticationApiKeyConfig</a>

---

##### `PutBearerTokenConfig` <a name="PutBearerTokenConfig" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.putBearerTokenConfig"></a>

```go
func PutBearerTokenConfig(value DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.putBearerTokenConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig">DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig</a>

---

##### `PutOauthConfig` <a name="PutOauthConfig" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.putOauthConfig"></a>

```go
func PutOauthConfig(value DialogflowToolOpenApiSpecAuthenticationOauthConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.putOauthConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfig">DialogflowToolOpenApiSpecAuthenticationOauthConfig</a>

---

##### `PutServiceAgentAuthConfig` <a name="PutServiceAgentAuthConfig" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.putServiceAgentAuthConfig"></a>

```go
func PutServiceAgentAuthConfig(value DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.putServiceAgentAuthConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig">DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig</a>

---

##### `ResetApiKeyConfig` <a name="ResetApiKeyConfig" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.resetApiKeyConfig"></a>

```go
func ResetApiKeyConfig()
```

##### `ResetBearerTokenConfig` <a name="ResetBearerTokenConfig" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.resetBearerTokenConfig"></a>

```go
func ResetBearerTokenConfig()
```

##### `ResetOauthConfig` <a name="ResetOauthConfig" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.resetOauthConfig"></a>

```go
func ResetOauthConfig()
```

##### `ResetServiceAgentAuthConfig` <a name="ResetServiceAgentAuthConfig" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.resetServiceAgentAuthConfig"></a>

```go
func ResetServiceAgentAuthConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.property.apiKeyConfig">ApiKeyConfig</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference">DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.property.bearerTokenConfig">BearerTokenConfig</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference">DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.property.oauthConfig">OauthConfig</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference">DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.property.serviceAgentAuthConfig">ServiceAgentAuthConfig</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference">DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.property.apiKeyConfigInput">ApiKeyConfigInput</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfig">DialogflowToolOpenApiSpecAuthenticationApiKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.property.bearerTokenConfigInput">BearerTokenConfigInput</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig">DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.property.oauthConfigInput">OauthConfigInput</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfig">DialogflowToolOpenApiSpecAuthenticationOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.property.serviceAgentAuthConfigInput">ServiceAgentAuthConfigInput</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig">DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthentication">DialogflowToolOpenApiSpecAuthentication</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiKeyConfig`<sup>Required</sup> <a name="ApiKeyConfig" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.property.apiKeyConfig"></a>

```go
func ApiKeyConfig() DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference">DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference</a>

---

##### `BearerTokenConfig`<sup>Required</sup> <a name="BearerTokenConfig" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.property.bearerTokenConfig"></a>

```go
func BearerTokenConfig() DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference">DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference</a>

---

##### `OauthConfig`<sup>Required</sup> <a name="OauthConfig" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.property.oauthConfig"></a>

```go
func OauthConfig() DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference">DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference</a>

---

##### `ServiceAgentAuthConfig`<sup>Required</sup> <a name="ServiceAgentAuthConfig" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.property.serviceAgentAuthConfig"></a>

```go
func ServiceAgentAuthConfig() DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference">DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference</a>

---

##### `ApiKeyConfigInput`<sup>Optional</sup> <a name="ApiKeyConfigInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.property.apiKeyConfigInput"></a>

```go
func ApiKeyConfigInput() DialogflowToolOpenApiSpecAuthenticationApiKeyConfig
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfig">DialogflowToolOpenApiSpecAuthenticationApiKeyConfig</a>

---

##### `BearerTokenConfigInput`<sup>Optional</sup> <a name="BearerTokenConfigInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.property.bearerTokenConfigInput"></a>

```go
func BearerTokenConfigInput() DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig">DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig</a>

---

##### `OauthConfigInput`<sup>Optional</sup> <a name="OauthConfigInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.property.oauthConfigInput"></a>

```go
func OauthConfigInput() DialogflowToolOpenApiSpecAuthenticationOauthConfig
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfig">DialogflowToolOpenApiSpecAuthenticationOauthConfig</a>

---

##### `ServiceAgentAuthConfigInput`<sup>Optional</sup> <a name="ServiceAgentAuthConfigInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.property.serviceAgentAuthConfigInput"></a>

```go
func ServiceAgentAuthConfigInput() DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig">DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.property.internalValue"></a>

```go
func InternalValue() DialogflowToolOpenApiSpecAuthentication
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthentication">DialogflowToolOpenApiSpecAuthentication</a>

---


### DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference <a name="DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/dialogflowtool"

dialogflowtool.NewDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.resetServiceAgentAuth">ResetServiceAgentAuth</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetServiceAgentAuth` <a name="ResetServiceAgentAuth" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.resetServiceAgentAuth"></a>

```go
func ResetServiceAgentAuth()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.serviceAgentAuthInput">ServiceAgentAuthInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.serviceAgentAuth">ServiceAgentAuth</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig">DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ServiceAgentAuthInput`<sup>Optional</sup> <a name="ServiceAgentAuthInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.serviceAgentAuthInput"></a>

```go
func ServiceAgentAuthInput() *string
```

- *Type:* *string

---

##### `ServiceAgentAuth`<sup>Required</sup> <a name="ServiceAgentAuth" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.serviceAgentAuth"></a>

```go
func ServiceAgentAuth() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig">DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig</a>

---


### DialogflowToolOpenApiSpecOutputReference <a name="DialogflowToolOpenApiSpecOutputReference" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/dialogflowtool"

dialogflowtool.NewDialogflowToolOpenApiSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DialogflowToolOpenApiSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.putAuthentication">PutAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.putServiceDirectoryConfig">PutServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.putTlsConfig">PutTlsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.resetAuthentication">ResetAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.resetServiceDirectoryConfig">ResetServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.resetTlsConfig">ResetTlsConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAuthentication` <a name="PutAuthentication" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.putAuthentication"></a>

```go
func PutAuthentication(value DialogflowToolOpenApiSpecAuthentication)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.putAuthentication.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthentication">DialogflowToolOpenApiSpecAuthentication</a>

---

##### `PutServiceDirectoryConfig` <a name="PutServiceDirectoryConfig" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.putServiceDirectoryConfig"></a>

```go
func PutServiceDirectoryConfig(value DialogflowToolOpenApiSpecServiceDirectoryConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.putServiceDirectoryConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfig">DialogflowToolOpenApiSpecServiceDirectoryConfig</a>

---

##### `PutTlsConfig` <a name="PutTlsConfig" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.putTlsConfig"></a>

```go
func PutTlsConfig(value DialogflowToolOpenApiSpecTlsConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.putTlsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfig">DialogflowToolOpenApiSpecTlsConfig</a>

---

##### `ResetAuthentication` <a name="ResetAuthentication" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.resetAuthentication"></a>

```go
func ResetAuthentication()
```

##### `ResetServiceDirectoryConfig` <a name="ResetServiceDirectoryConfig" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.resetServiceDirectoryConfig"></a>

```go
func ResetServiceDirectoryConfig()
```

##### `ResetTlsConfig` <a name="ResetTlsConfig" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.resetTlsConfig"></a>

```go
func ResetTlsConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.property.authentication">Authentication</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference">DialogflowToolOpenApiSpecAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.property.serviceDirectoryConfig">ServiceDirectoryConfig</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference">DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.property.tlsConfig">TlsConfig</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference">DialogflowToolOpenApiSpecTlsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.property.authenticationInput">AuthenticationInput</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthentication">DialogflowToolOpenApiSpecAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.property.serviceDirectoryConfigInput">ServiceDirectoryConfigInput</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfig">DialogflowToolOpenApiSpecServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.property.textSchemaInput">TextSchemaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.property.tlsConfigInput">TlsConfigInput</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfig">DialogflowToolOpenApiSpecTlsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.property.textSchema">TextSchema</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpec">DialogflowToolOpenApiSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Authentication`<sup>Required</sup> <a name="Authentication" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.property.authentication"></a>

```go
func Authentication() DialogflowToolOpenApiSpecAuthenticationOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference">DialogflowToolOpenApiSpecAuthenticationOutputReference</a>

---

##### `ServiceDirectoryConfig`<sup>Required</sup> <a name="ServiceDirectoryConfig" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.property.serviceDirectoryConfig"></a>

```go
func ServiceDirectoryConfig() DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference">DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference</a>

---

##### `TlsConfig`<sup>Required</sup> <a name="TlsConfig" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.property.tlsConfig"></a>

```go
func TlsConfig() DialogflowToolOpenApiSpecTlsConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference">DialogflowToolOpenApiSpecTlsConfigOutputReference</a>

---

##### `AuthenticationInput`<sup>Optional</sup> <a name="AuthenticationInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.property.authenticationInput"></a>

```go
func AuthenticationInput() DialogflowToolOpenApiSpecAuthentication
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthentication">DialogflowToolOpenApiSpecAuthentication</a>

---

##### `ServiceDirectoryConfigInput`<sup>Optional</sup> <a name="ServiceDirectoryConfigInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.property.serviceDirectoryConfigInput"></a>

```go
func ServiceDirectoryConfigInput() DialogflowToolOpenApiSpecServiceDirectoryConfig
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfig">DialogflowToolOpenApiSpecServiceDirectoryConfig</a>

---

##### `TextSchemaInput`<sup>Optional</sup> <a name="TextSchemaInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.property.textSchemaInput"></a>

```go
func TextSchemaInput() *string
```

- *Type:* *string

---

##### `TlsConfigInput`<sup>Optional</sup> <a name="TlsConfigInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.property.tlsConfigInput"></a>

```go
func TlsConfigInput() DialogflowToolOpenApiSpecTlsConfig
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfig">DialogflowToolOpenApiSpecTlsConfig</a>

---

##### `TextSchema`<sup>Required</sup> <a name="TextSchema" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.property.textSchema"></a>

```go
func TextSchema() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() DialogflowToolOpenApiSpec
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpec">DialogflowToolOpenApiSpec</a>

---


### DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference <a name="DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/dialogflowtool"

dialogflowtool.NewDialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.property.serviceInput">ServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.property.service">Service</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfig">DialogflowToolOpenApiSpecServiceDirectoryConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.property.serviceInput"></a>

```go
func ServiceInput() *string
```

- *Type:* *string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.property.service"></a>

```go
func Service() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DialogflowToolOpenApiSpecServiceDirectoryConfig
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfig">DialogflowToolOpenApiSpecServiceDirectoryConfig</a>

---


### DialogflowToolOpenApiSpecTlsConfigCaCertsList <a name="DialogflowToolOpenApiSpecTlsConfigCaCertsList" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/dialogflowtool"

dialogflowtool.NewDialogflowToolOpenApiSpecTlsConfigCaCertsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DialogflowToolOpenApiSpecTlsConfigCaCertsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList.get"></a>

```go
func Get(index *f64) DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference <a name="DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/dialogflowtool"

dialogflowtool.NewDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.property.certInput">CertInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.property.cert">Cert</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertInput`<sup>Optional</sup> <a name="CertInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.property.certInput"></a>

```go
func CertInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `Cert`<sup>Required</sup> <a name="Cert" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.property.cert"></a>

```go
func Cert() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DialogflowToolOpenApiSpecTlsConfigOutputReference <a name="DialogflowToolOpenApiSpecTlsConfigOutputReference" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/dialogflowtool"

dialogflowtool.NewDialogflowToolOpenApiSpecTlsConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DialogflowToolOpenApiSpecTlsConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.putCaCerts">PutCaCerts</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCaCerts` <a name="PutCaCerts" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.putCaCerts"></a>

```go
func PutCaCerts(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.putCaCerts.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.property.caCerts">CaCerts</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList">DialogflowToolOpenApiSpecTlsConfigCaCertsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.property.caCertsInput">CaCertsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfig">DialogflowToolOpenApiSpecTlsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CaCerts`<sup>Required</sup> <a name="CaCerts" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.property.caCerts"></a>

```go
func CaCerts() DialogflowToolOpenApiSpecTlsConfigCaCertsList
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList">DialogflowToolOpenApiSpecTlsConfigCaCertsList</a>

---

##### `CaCertsInput`<sup>Optional</sup> <a name="CaCertsInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.property.caCertsInput"></a>

```go
func CaCertsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DialogflowToolOpenApiSpecTlsConfig
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfig">DialogflowToolOpenApiSpecTlsConfig</a>

---


### DialogflowToolTimeoutsOutputReference <a name="DialogflowToolTimeoutsOutputReference" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/dialogflowtool"

dialogflowtool.NewDialogflowToolTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DialogflowToolTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



