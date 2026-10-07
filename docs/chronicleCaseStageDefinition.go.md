# `chronicleCaseStageDefinition` Submodule <a name="`chronicleCaseStageDefinition` Submodule" id="@cdktn/provider-google.chronicleCaseStageDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChronicleCaseStageDefinition <a name="ChronicleCaseStageDefinition" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_case_stage_definition google_chronicle_case_stage_definition}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/chroniclecasestagedefinition"

chroniclecasestagedefinition.NewChronicleCaseStageDefinition(scope Construct, id *string, config ChronicleCaseStageDefinitionConfig) ChronicleCaseStageDefinition
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionConfig">ChronicleCaseStageDefinitionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionConfig">ChronicleCaseStageDefinitionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.putTimeouts"></a>

```go
func PutTimeouts(value ChronicleCaseStageDefinitionTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeouts">ChronicleCaseStageDefinitionTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ChronicleCaseStageDefinition resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/chroniclecasestagedefinition"

chroniclecasestagedefinition.ChronicleCaseStageDefinition_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/chroniclecasestagedefinition"

chroniclecasestagedefinition.ChronicleCaseStageDefinition_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/chroniclecasestagedefinition"

chroniclecasestagedefinition.ChronicleCaseStageDefinition_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/chroniclecasestagedefinition"

chroniclecasestagedefinition.ChronicleCaseStageDefinition_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ChronicleCaseStageDefinition resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ChronicleCaseStageDefinition to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ChronicleCaseStageDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_case_stage_definition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ChronicleCaseStageDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.caseStageDefinitionId">CaseStageDefinitionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference">ChronicleCaseStageDefinitionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.instanceInput">InstanceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.orderInput">OrderInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.instance">Instance</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.order">Order</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CaseStageDefinitionId`<sup>Required</sup> <a name="CaseStageDefinitionId" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.caseStageDefinitionId"></a>

```go
func CaseStageDefinitionId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.timeouts"></a>

```go
func Timeouts() ChronicleCaseStageDefinitionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference">ChronicleCaseStageDefinitionTimeoutsOutputReference</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InstanceInput`<sup>Optional</sup> <a name="InstanceInput" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.instanceInput"></a>

```go
func InstanceInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `OrderInput`<sup>Optional</sup> <a name="OrderInput" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.orderInput"></a>

```go
func OrderInput() *f64
```

- *Type:* *f64

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.instance"></a>

```go
func Instance() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Order`<sup>Required</sup> <a name="Order" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.order"></a>

```go
func Order() *f64
```

- *Type:* *f64

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ChronicleCaseStageDefinitionConfig <a name="ChronicleCaseStageDefinitionConfig" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/chroniclecasestagedefinition"

&chroniclecasestagedefinition.ChronicleCaseStageDefinitionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	DisplayName: *string,
	Instance: *string,
	Location: *string,
	Order: *f64,
	DeletionPolicy: *string,
	Id: *string,
	Project: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-google-go/google/v21.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | The display name of the stage. |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionConfig.property.instance">Instance</a></code> | <code>*string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionConfig.property.location">Location</a></code> | <code>*string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionConfig.property.order">Order</a></code> | <code>*f64</code> | Defines the case stage order in the lifetime of a case. |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_case_stage_definition#id ChronicleCaseStageDefinition#id}. |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_case_stage_definition#project ChronicleCaseStageDefinition#project}. |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeouts">ChronicleCaseStageDefinitionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

The display name of the stage.

The display name must be unique within the instance. The display name must not contain special characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_case_stage_definition#display_name ChronicleCaseStageDefinition#display_name}

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionConfig.property.instance"></a>

```go
Instance *string
```

- *Type:* *string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_case_stage_definition#instance ChronicleCaseStageDefinition#instance}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_case_stage_definition#location ChronicleCaseStageDefinition#location}

---

##### `Order`<sup>Required</sup> <a name="Order" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionConfig.property.order"></a>

```go
Order *f64
```

- *Type:* *f64

Defines the case stage order in the lifetime of a case.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_case_stage_definition#order ChronicleCaseStageDefinition#order}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_case_stage_definition#deletion_policy ChronicleCaseStageDefinition#deletion_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_case_stage_definition#id ChronicleCaseStageDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_case_stage_definition#project ChronicleCaseStageDefinition#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionConfig.property.timeouts"></a>

```go
Timeouts ChronicleCaseStageDefinitionTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeouts">ChronicleCaseStageDefinitionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_case_stage_definition#timeouts ChronicleCaseStageDefinition#timeouts}

---

### ChronicleCaseStageDefinitionTimeouts <a name="ChronicleCaseStageDefinitionTimeouts" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/chroniclecasestagedefinition"

&chroniclecasestagedefinition.ChronicleCaseStageDefinitionTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_case_stage_definition#create ChronicleCaseStageDefinition#create}. |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_case_stage_definition#delete ChronicleCaseStageDefinition#delete}. |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_case_stage_definition#update ChronicleCaseStageDefinition#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_case_stage_definition#create ChronicleCaseStageDefinition#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_case_stage_definition#delete ChronicleCaseStageDefinition#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_case_stage_definition#update ChronicleCaseStageDefinition#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ChronicleCaseStageDefinitionTimeoutsOutputReference <a name="ChronicleCaseStageDefinitionTimeoutsOutputReference" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/chroniclecasestagedefinition"

chroniclecasestagedefinition.NewChronicleCaseStageDefinitionTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ChronicleCaseStageDefinitionTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



