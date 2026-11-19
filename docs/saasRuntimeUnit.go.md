# `saasRuntimeUnit` Submodule <a name="`saasRuntimeUnit` Submodule" id="@cdktn/provider-google.saasRuntimeUnit"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SaasRuntimeUnit <a name="SaasRuntimeUnit" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit google_saas_runtime_unit}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/saasruntimeunit"

saasruntimeunit.NewSaasRuntimeUnit(scope Construct, id *string, config SaasRuntimeUnitConfig) SaasRuntimeUnit
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConfig">SaasRuntimeUnitConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConfig">SaasRuntimeUnitConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.putMaintenance">PutMaintenance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.resetApplication">ResetApplication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.resetMaintenance">ResetMaintenance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.resetManagementMode">ResetManagementMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.resetTenant">ResetTenant</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.resetUnitKind">ResetUnitKind</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutMaintenance` <a name="PutMaintenance" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.putMaintenance"></a>

```go
func PutMaintenance(value SaasRuntimeUnitMaintenance)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.putMaintenance.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenance">SaasRuntimeUnitMaintenance</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.putTimeouts"></a>

```go
func PutTimeouts(value SaasRuntimeUnitTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeouts">SaasRuntimeUnitTimeouts</a>

---

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.resetAnnotations"></a>

```go
func ResetAnnotations()
```

##### `ResetApplication` <a name="ResetApplication" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.resetApplication"></a>

```go
func ResetApplication()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetMaintenance` <a name="ResetMaintenance" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.resetMaintenance"></a>

```go
func ResetMaintenance()
```

##### `ResetManagementMode` <a name="ResetManagementMode" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.resetManagementMode"></a>

```go
func ResetManagementMode()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTenant` <a name="ResetTenant" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.resetTenant"></a>

```go
func ResetTenant()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetUnitKind` <a name="ResetUnitKind" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.resetUnitKind"></a>

```go
func ResetUnitKind()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SaasRuntimeUnit resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/saasruntimeunit"

saasruntimeunit.SaasRuntimeUnit_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/saasruntimeunit"

saasruntimeunit.SaasRuntimeUnit_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/saasruntimeunit"

saasruntimeunit.SaasRuntimeUnit_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/saasruntimeunit"

saasruntimeunit.SaasRuntimeUnit_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a SaasRuntimeUnit resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SaasRuntimeUnit to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SaasRuntimeUnit that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the SaasRuntimeUnit to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.conditions">Conditions</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsList">SaasRuntimeUnitConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.dependencies">Dependencies</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesList">SaasRuntimeUnitDependenciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.dependents">Dependents</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsList">SaasRuntimeUnitDependentsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.effectiveAnnotations">EffectiveAnnotations</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.inputVariables">InputVariables</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesList">SaasRuntimeUnitInputVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.maintenance">Maintenance</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference">SaasRuntimeUnitMaintenanceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.ongoingOperations">OngoingOperations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.outputVariables">OutputVariables</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesList">SaasRuntimeUnitOutputVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.pendingOperations">PendingOperations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.release">Release</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.scheduledOperations">ScheduledOperations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.systemCleanupAt">SystemCleanupAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.systemManagedState">SystemManagedState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference">SaasRuntimeUnitTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.annotationsInput">AnnotationsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.applicationInput">ApplicationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.maintenanceInput">MaintenanceInput</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenance">SaasRuntimeUnitMaintenance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.managementModeInput">ManagementModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.tenantInput">TenantInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.unitIdInput">UnitIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.unitKindInput">UnitKindInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.application">Application</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.managementMode">ManagementMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.tenant">Tenant</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.unitId">UnitId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.unitKind">UnitKind</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.conditions"></a>

```go
func Conditions() SaasRuntimeUnitConditionsList
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsList">SaasRuntimeUnitConditionsList</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Dependencies`<sup>Required</sup> <a name="Dependencies" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.dependencies"></a>

```go
func Dependencies() SaasRuntimeUnitDependenciesList
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesList">SaasRuntimeUnitDependenciesList</a>

---

##### `Dependents`<sup>Required</sup> <a name="Dependents" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.dependents"></a>

```go
func Dependents() SaasRuntimeUnitDependentsList
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsList">SaasRuntimeUnitDependentsList</a>

---

##### `EffectiveAnnotations`<sup>Required</sup> <a name="EffectiveAnnotations" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.effectiveAnnotations"></a>

```go
func EffectiveAnnotations() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `InputVariables`<sup>Required</sup> <a name="InputVariables" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.inputVariables"></a>

```go
func InputVariables() SaasRuntimeUnitInputVariablesList
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesList">SaasRuntimeUnitInputVariablesList</a>

---

##### `Maintenance`<sup>Required</sup> <a name="Maintenance" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.maintenance"></a>

```go
func Maintenance() SaasRuntimeUnitMaintenanceOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference">SaasRuntimeUnitMaintenanceOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OngoingOperations`<sup>Required</sup> <a name="OngoingOperations" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.ongoingOperations"></a>

```go
func OngoingOperations() *[]*string
```

- *Type:* *[]*string

---

##### `OutputVariables`<sup>Required</sup> <a name="OutputVariables" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.outputVariables"></a>

```go
func OutputVariables() SaasRuntimeUnitOutputVariablesList
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesList">SaasRuntimeUnitOutputVariablesList</a>

---

##### `PendingOperations`<sup>Required</sup> <a name="PendingOperations" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.pendingOperations"></a>

```go
func PendingOperations() *[]*string
```

- *Type:* *[]*string

---

##### `Release`<sup>Required</sup> <a name="Release" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.release"></a>

```go
func Release() *string
```

- *Type:* *string

---

##### `ScheduledOperations`<sup>Required</sup> <a name="ScheduledOperations" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.scheduledOperations"></a>

```go
func ScheduledOperations() *[]*string
```

- *Type:* *[]*string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemCleanupAt`<sup>Required</sup> <a name="SystemCleanupAt" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.systemCleanupAt"></a>

```go
func SystemCleanupAt() *string
```

- *Type:* *string

---

##### `SystemManagedState`<sup>Required</sup> <a name="SystemManagedState" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.systemManagedState"></a>

```go
func SystemManagedState() *string
```

- *Type:* *string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.timeouts"></a>

```go
func Timeouts() SaasRuntimeUnitTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference">SaasRuntimeUnitTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.annotationsInput"></a>

```go
func AnnotationsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ApplicationInput`<sup>Optional</sup> <a name="ApplicationInput" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.applicationInput"></a>

```go
func ApplicationInput() *string
```

- *Type:* *string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `MaintenanceInput`<sup>Optional</sup> <a name="MaintenanceInput" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.maintenanceInput"></a>

```go
func MaintenanceInput() SaasRuntimeUnitMaintenance
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenance">SaasRuntimeUnitMaintenance</a>

---

##### `ManagementModeInput`<sup>Optional</sup> <a name="ManagementModeInput" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.managementModeInput"></a>

```go
func ManagementModeInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TenantInput`<sup>Optional</sup> <a name="TenantInput" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.tenantInput"></a>

```go
func TenantInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `UnitIdInput`<sup>Optional</sup> <a name="UnitIdInput" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.unitIdInput"></a>

```go
func UnitIdInput() *string
```

- *Type:* *string

---

##### `UnitKindInput`<sup>Optional</sup> <a name="UnitKindInput" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.unitKindInput"></a>

```go
func UnitKindInput() *string
```

- *Type:* *string

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.annotations"></a>

```go
func Annotations() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Application`<sup>Required</sup> <a name="Application" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.application"></a>

```go
func Application() *string
```

- *Type:* *string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `ManagementMode`<sup>Required</sup> <a name="ManagementMode" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.managementMode"></a>

```go
func ManagementMode() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Tenant`<sup>Required</sup> <a name="Tenant" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.tenant"></a>

```go
func Tenant() *string
```

- *Type:* *string

---

##### `UnitId`<sup>Required</sup> <a name="UnitId" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.unitId"></a>

```go
func UnitId() *string
```

- *Type:* *string

---

##### `UnitKind`<sup>Required</sup> <a name="UnitKind" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.unitKind"></a>

```go
func UnitKind() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SaasRuntimeUnitConditions <a name="SaasRuntimeUnitConditions" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/saasruntimeunit"

&saasruntimeunit.SaasRuntimeUnitConditions {

}
```


### SaasRuntimeUnitConfig <a name="SaasRuntimeUnitConfig" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/saasruntimeunit"

&saasruntimeunit.SaasRuntimeUnitConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	UnitId: *string,
	Annotations: *map[string]*string,
	Application: *string,
	DeletionPolicy: *string,
	Id: *string,
	Labels: *map[string]*string,
	Maintenance: github.com/cdktn-io/cdktn-provider-google-go/google/v22.saasRuntimeUnit.SaasRuntimeUnitMaintenance,
	ManagementMode: *string,
	Project: *string,
	Tenant: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-google-go/google/v22.saasRuntimeUnit.SaasRuntimeUnitTimeouts,
	UnitKind: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConfig.property.location">Location</a></code> | <code>*string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConfig.property.unitId">UnitId</a></code> | <code>*string</code> | The ID value for the new unit. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConfig.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConfig.property.application">Application</a></code> | <code>*string</code> | Reference to the App Hub Application this Unit belongs to, in the format 'projects/{project}/locations/{location}/applications/{application}'. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit#id SaasRuntimeUnit#id}. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConfig.property.maintenance">Maintenance</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenance">SaasRuntimeUnitMaintenance</a></code> | maintenance block. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConfig.property.managementMode">ManagementMode</a></code> | <code>*string</code> | Indicates whether the Unit life cycle is controlled by the user or by the system. Immutable once created. Possible values: MANAGEMENT_MODE_USER MANAGEMENT_MODE_SYSTEM. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit#project SaasRuntimeUnit#project}. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConfig.property.tenant">Tenant</a></code> | <code>*string</code> | Reference to the Saas Tenant resource this unit belongs to. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeouts">SaasRuntimeUnitTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConfig.property.unitKind">UnitKind</a></code> | <code>*string</code> | Reference to the UnitKind this Unit belongs to. Immutable once set. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit#location SaasRuntimeUnit#location}

---

##### `UnitId`<sup>Required</sup> <a name="UnitId" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConfig.property.unitId"></a>

```go
UnitId *string
```

- *Type:* *string

The ID value for the new unit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit#unit_id SaasRuntimeUnit#unit_id}

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConfig.property.annotations"></a>

```go
Annotations *map[string]*string
```

- *Type:* *map[string]*string

Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata.

They are not queryable and should be preserved when modifying objects.

More info: https://kubernetes.io/docs/user-guide/annotations

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit#annotations SaasRuntimeUnit#annotations}

---

##### `Application`<sup>Optional</sup> <a name="Application" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConfig.property.application"></a>

```go
Application *string
```

- *Type:* *string

Reference to the App Hub Application this Unit belongs to, in the format 'projects/{project}/locations/{location}/applications/{application}'.

All resources deployed in this Unit are associated with the specified
Application. If empty, the service sets it during any UnitOperation
when the UnitKind has 'app_params.group' and App Hub is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit#application SaasRuntimeUnit#application}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit#deletion_policy SaasRuntimeUnit#deletion_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit#id SaasRuntimeUnit#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit#labels SaasRuntimeUnit#labels}

---

##### `Maintenance`<sup>Optional</sup> <a name="Maintenance" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConfig.property.maintenance"></a>

```go
Maintenance SaasRuntimeUnitMaintenance
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenance">SaasRuntimeUnitMaintenance</a>

maintenance block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit#maintenance SaasRuntimeUnit#maintenance}

---

##### `ManagementMode`<sup>Optional</sup> <a name="ManagementMode" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConfig.property.managementMode"></a>

```go
ManagementMode *string
```

- *Type:* *string

Indicates whether the Unit life cycle is controlled by the user or by the system. Immutable once created. Possible values: MANAGEMENT_MODE_USER MANAGEMENT_MODE_SYSTEM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit#management_mode SaasRuntimeUnit#management_mode}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit#project SaasRuntimeUnit#project}.

---

##### `Tenant`<sup>Optional</sup> <a name="Tenant" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConfig.property.tenant"></a>

```go
Tenant *string
```

- *Type:* *string

Reference to the Saas Tenant resource this unit belongs to.

This for
example informs the maintenance policies to use for scheduling future
updates on a unit. (optional and immutable once created)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit#tenant SaasRuntimeUnit#tenant}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConfig.property.timeouts"></a>

```go
Timeouts SaasRuntimeUnitTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeouts">SaasRuntimeUnitTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit#timeouts SaasRuntimeUnit#timeouts}

---

##### `UnitKind`<sup>Optional</sup> <a name="UnitKind" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConfig.property.unitKind"></a>

```go
UnitKind *string
```

- *Type:* *string

Reference to the UnitKind this Unit belongs to. Immutable once set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit#unit_kind SaasRuntimeUnit#unit_kind}

---

### SaasRuntimeUnitDependencies <a name="SaasRuntimeUnitDependencies" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependencies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependencies.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/saasruntimeunit"

&saasruntimeunit.SaasRuntimeUnitDependencies {

}
```


### SaasRuntimeUnitDependents <a name="SaasRuntimeUnitDependents" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependents"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependents.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/saasruntimeunit"

&saasruntimeunit.SaasRuntimeUnitDependents {

}
```


### SaasRuntimeUnitInputVariables <a name="SaasRuntimeUnitInputVariables" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariables.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/saasruntimeunit"

&saasruntimeunit.SaasRuntimeUnitInputVariables {

}
```


### SaasRuntimeUnitMaintenance <a name="SaasRuntimeUnitMaintenance" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenance"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenance.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/saasruntimeunit"

&saasruntimeunit.SaasRuntimeUnitMaintenance {
	PinnedUntilTime: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenance.property.pinnedUntilTime">PinnedUntilTime</a></code> | <code>*string</code> | If present, it fixes the release on the unit until the given time; |

---

##### `PinnedUntilTime`<sup>Optional</sup> <a name="PinnedUntilTime" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenance.property.pinnedUntilTime"></a>

```go
PinnedUntilTime *string
```

- *Type:* *string

If present, it fixes the release on the unit until the given time;

i.e.
changes to the release field will be rejected. Rollouts should and will
also respect this by not requesting an upgrade in the first place.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit#pinned_until_time SaasRuntimeUnit#pinned_until_time}

---

### SaasRuntimeUnitOutputVariables <a name="SaasRuntimeUnitOutputVariables" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariables.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/saasruntimeunit"

&saasruntimeunit.SaasRuntimeUnitOutputVariables {

}
```


### SaasRuntimeUnitTimeouts <a name="SaasRuntimeUnitTimeouts" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/saasruntimeunit"

&saasruntimeunit.SaasRuntimeUnitTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit#create SaasRuntimeUnit#create}. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit#delete SaasRuntimeUnit#delete}. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit#update SaasRuntimeUnit#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit#create SaasRuntimeUnit#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit#delete SaasRuntimeUnit#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit#update SaasRuntimeUnit#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SaasRuntimeUnitConditionsList <a name="SaasRuntimeUnitConditionsList" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/saasruntimeunit"

saasruntimeunit.NewSaasRuntimeUnitConditionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SaasRuntimeUnitConditionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsList.get"></a>

```go
func Get(index *f64) SaasRuntimeUnitConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### SaasRuntimeUnitConditionsOutputReference <a name="SaasRuntimeUnitConditionsOutputReference" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/saasruntimeunit"

saasruntimeunit.NewSaasRuntimeUnitConditionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SaasRuntimeUnitConditionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.property.lastTransitionTime">LastTransitionTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.property.reason">Reason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditions">SaasRuntimeUnitConditions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LastTransitionTime`<sup>Required</sup> <a name="LastTransitionTime" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.property.lastTransitionTime"></a>

```go
func LastTransitionTime() *string
```

- *Type:* *string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `Reason`<sup>Required</sup> <a name="Reason" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.property.reason"></a>

```go
func Reason() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.property.internalValue"></a>

```go
func InternalValue() SaasRuntimeUnitConditions
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditions">SaasRuntimeUnitConditions</a>

---


### SaasRuntimeUnitDependenciesList <a name="SaasRuntimeUnitDependenciesList" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/saasruntimeunit"

saasruntimeunit.NewSaasRuntimeUnitDependenciesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SaasRuntimeUnitDependenciesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesList.get"></a>

```go
func Get(index *f64) SaasRuntimeUnitDependenciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### SaasRuntimeUnitDependenciesOutputReference <a name="SaasRuntimeUnitDependenciesOutputReference" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/saasruntimeunit"

saasruntimeunit.NewSaasRuntimeUnitDependenciesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SaasRuntimeUnitDependenciesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.property.alias">Alias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.property.unit">Unit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependencies">SaasRuntimeUnitDependencies</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.property.alias"></a>

```go
func Alias() *string
```

- *Type:* *string

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.property.unit"></a>

```go
func Unit() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.property.internalValue"></a>

```go
func InternalValue() SaasRuntimeUnitDependencies
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependencies">SaasRuntimeUnitDependencies</a>

---


### SaasRuntimeUnitDependentsList <a name="SaasRuntimeUnitDependentsList" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/saasruntimeunit"

saasruntimeunit.NewSaasRuntimeUnitDependentsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SaasRuntimeUnitDependentsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsList.get"></a>

```go
func Get(index *f64) SaasRuntimeUnitDependentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### SaasRuntimeUnitDependentsOutputReference <a name="SaasRuntimeUnitDependentsOutputReference" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/saasruntimeunit"

saasruntimeunit.NewSaasRuntimeUnitDependentsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SaasRuntimeUnitDependentsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.property.alias">Alias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.property.unit">Unit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependents">SaasRuntimeUnitDependents</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.property.alias"></a>

```go
func Alias() *string
```

- *Type:* *string

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.property.unit"></a>

```go
func Unit() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.property.internalValue"></a>

```go
func InternalValue() SaasRuntimeUnitDependents
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependents">SaasRuntimeUnitDependents</a>

---


### SaasRuntimeUnitInputVariablesList <a name="SaasRuntimeUnitInputVariablesList" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/saasruntimeunit"

saasruntimeunit.NewSaasRuntimeUnitInputVariablesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SaasRuntimeUnitInputVariablesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesList.get"></a>

```go
func Get(index *f64) SaasRuntimeUnitInputVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### SaasRuntimeUnitInputVariablesOutputReference <a name="SaasRuntimeUnitInputVariablesOutputReference" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/saasruntimeunit"

saasruntimeunit.NewSaasRuntimeUnitInputVariablesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SaasRuntimeUnitInputVariablesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.property.variable">Variable</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariables">SaasRuntimeUnitInputVariables</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `Variable`<sup>Required</sup> <a name="Variable" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.property.variable"></a>

```go
func Variable() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.property.internalValue"></a>

```go
func InternalValue() SaasRuntimeUnitInputVariables
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariables">SaasRuntimeUnitInputVariables</a>

---


### SaasRuntimeUnitMaintenanceOutputReference <a name="SaasRuntimeUnitMaintenanceOutputReference" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/saasruntimeunit"

saasruntimeunit.NewSaasRuntimeUnitMaintenanceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SaasRuntimeUnitMaintenanceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.resetPinnedUntilTime">ResetPinnedUntilTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPinnedUntilTime` <a name="ResetPinnedUntilTime" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.resetPinnedUntilTime"></a>

```go
func ResetPinnedUntilTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.property.pinnedUntilTimeInput">PinnedUntilTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.property.pinnedUntilTime">PinnedUntilTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenance">SaasRuntimeUnitMaintenance</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PinnedUntilTimeInput`<sup>Optional</sup> <a name="PinnedUntilTimeInput" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.property.pinnedUntilTimeInput"></a>

```go
func PinnedUntilTimeInput() *string
```

- *Type:* *string

---

##### `PinnedUntilTime`<sup>Required</sup> <a name="PinnedUntilTime" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.property.pinnedUntilTime"></a>

```go
func PinnedUntilTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.property.internalValue"></a>

```go
func InternalValue() SaasRuntimeUnitMaintenance
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenance">SaasRuntimeUnitMaintenance</a>

---


### SaasRuntimeUnitOutputVariablesList <a name="SaasRuntimeUnitOutputVariablesList" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/saasruntimeunit"

saasruntimeunit.NewSaasRuntimeUnitOutputVariablesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SaasRuntimeUnitOutputVariablesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesList.get"></a>

```go
func Get(index *f64) SaasRuntimeUnitOutputVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### SaasRuntimeUnitOutputVariablesOutputReference <a name="SaasRuntimeUnitOutputVariablesOutputReference" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/saasruntimeunit"

saasruntimeunit.NewSaasRuntimeUnitOutputVariablesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SaasRuntimeUnitOutputVariablesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.property.variable">Variable</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariables">SaasRuntimeUnitOutputVariables</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `Variable`<sup>Required</sup> <a name="Variable" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.property.variable"></a>

```go
func Variable() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.property.internalValue"></a>

```go
func InternalValue() SaasRuntimeUnitOutputVariables
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariables">SaasRuntimeUnitOutputVariables</a>

---


### SaasRuntimeUnitTimeoutsOutputReference <a name="SaasRuntimeUnitTimeoutsOutputReference" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/saasruntimeunit"

saasruntimeunit.NewSaasRuntimeUnitTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SaasRuntimeUnitTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



