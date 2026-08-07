# `sccV2OrganizationSourceIamBinding` Submodule <a name="`sccV2OrganizationSourceIamBinding` Submodule" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SccV2OrganizationSourceIamBinding <a name="SccV2OrganizationSourceIamBinding" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/scc_v2_organization_source_iam_binding google_scc_v2_organization_source_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/sccv2organizationsourceiambinding"

sccv2organizationsourceiambinding.NewSccV2OrganizationSourceIamBinding(scope Construct, id *string, config SccV2OrganizationSourceIamBindingConfig) SccV2OrganizationSourceIamBinding
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBindingConfig">SccV2OrganizationSourceIamBindingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBindingConfig">SccV2OrganizationSourceIamBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCondition` <a name="PutCondition" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.putCondition"></a>

```go
func PutCondition(value SccV2OrganizationSourceIamBindingCondition)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBindingCondition">SccV2OrganizationSourceIamBindingCondition</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.resetCondition"></a>

```go
func ResetCondition()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SccV2OrganizationSourceIamBinding resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/sccv2organizationsourceiambinding"

sccv2organizationsourceiambinding.SccV2OrganizationSourceIamBinding_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/sccv2organizationsourceiambinding"

sccv2organizationsourceiambinding.SccV2OrganizationSourceIamBinding_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/sccv2organizationsourceiambinding"

sccv2organizationsourceiambinding.SccV2OrganizationSourceIamBinding_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/sccv2organizationsourceiambinding"

sccv2organizationsourceiambinding.SccV2OrganizationSourceIamBinding_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a SccV2OrganizationSourceIamBinding resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SccV2OrganizationSourceIamBinding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SccV2OrganizationSourceIamBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/scc_v2_organization_source_iam_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the SccV2OrganizationSourceIamBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.property.condition">Condition</a></code> | <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBindingConditionOutputReference">SccV2OrganizationSourceIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBindingCondition">SccV2OrganizationSourceIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.property.membersInput">MembersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.property.organizationInput">OrganizationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.property.roleInput">RoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.property.sourceInput">SourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.property.members">Members</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.property.organization">Organization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.property.role">Role</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.property.source">Source</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.property.condition"></a>

```go
func Condition() SccV2OrganizationSourceIamBindingConditionOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBindingConditionOutputReference">SccV2OrganizationSourceIamBindingConditionOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.property.conditionInput"></a>

```go
func ConditionInput() SccV2OrganizationSourceIamBindingCondition
```

- *Type:* <a href="#@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBindingCondition">SccV2OrganizationSourceIamBindingCondition</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MembersInput`<sup>Optional</sup> <a name="MembersInput" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.property.membersInput"></a>

```go
func MembersInput() *[]*string
```

- *Type:* *[]*string

---

##### `OrganizationInput`<sup>Optional</sup> <a name="OrganizationInput" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.property.organizationInput"></a>

```go
func OrganizationInput() *string
```

- *Type:* *string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.property.roleInput"></a>

```go
func RoleInput() *string
```

- *Type:* *string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.property.sourceInput"></a>

```go
func SourceInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.property.members"></a>

```go
func Members() *[]*string
```

- *Type:* *[]*string

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.property.organization"></a>

```go
func Organization() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.property.source"></a>

```go
func Source() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBinding.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SccV2OrganizationSourceIamBindingCondition <a name="SccV2OrganizationSourceIamBindingCondition" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBindingCondition.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/sccv2organizationsourceiambinding"

&sccv2organizationsourceiambinding.SccV2OrganizationSourceIamBindingCondition {
	Expression: *string,
	Title: *string,
	Description: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBindingCondition.property.expression">Expression</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/scc_v2_organization_source_iam_binding#expression SccV2OrganizationSourceIamBinding#expression}. |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBindingCondition.property.title">Title</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/scc_v2_organization_source_iam_binding#title SccV2OrganizationSourceIamBinding#title}. |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBindingCondition.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/scc_v2_organization_source_iam_binding#description SccV2OrganizationSourceIamBinding#description}. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBindingCondition.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/scc_v2_organization_source_iam_binding#expression SccV2OrganizationSourceIamBinding#expression}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBindingCondition.property.title"></a>

```go
Title *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/scc_v2_organization_source_iam_binding#title SccV2OrganizationSourceIamBinding#title}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBindingCondition.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/scc_v2_organization_source_iam_binding#description SccV2OrganizationSourceIamBinding#description}.

---

### SccV2OrganizationSourceIamBindingConfig <a name="SccV2OrganizationSourceIamBindingConfig" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBindingConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/sccv2organizationsourceiambinding"

&sccv2organizationsourceiambinding.SccV2OrganizationSourceIamBindingConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Members: *[]*string,
	Organization: *string,
	Role: *string,
	Source: *string,
	Condition: github.com/cdktn-io/cdktn-provider-google-go/google/v19.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBindingCondition,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBindingConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBindingConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBindingConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBindingConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBindingConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBindingConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBindingConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBindingConfig.property.members">Members</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/scc_v2_organization_source_iam_binding#members SccV2OrganizationSourceIamBinding#members}. |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBindingConfig.property.organization">Organization</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/scc_v2_organization_source_iam_binding#organization SccV2OrganizationSourceIamBinding#organization}. |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBindingConfig.property.role">Role</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/scc_v2_organization_source_iam_binding#role SccV2OrganizationSourceIamBinding#role}. |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBindingConfig.property.source">Source</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/scc_v2_organization_source_iam_binding#source SccV2OrganizationSourceIamBinding#source}. |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBindingConfig.property.condition">Condition</a></code> | <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBindingCondition">SccV2OrganizationSourceIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBindingConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/scc_v2_organization_source_iam_binding#id SccV2OrganizationSourceIamBinding#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBindingConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBindingConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBindingConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBindingConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBindingConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBindingConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBindingConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBindingConfig.property.members"></a>

```go
Members *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/scc_v2_organization_source_iam_binding#members SccV2OrganizationSourceIamBinding#members}.

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBindingConfig.property.organization"></a>

```go
Organization *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/scc_v2_organization_source_iam_binding#organization SccV2OrganizationSourceIamBinding#organization}.

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBindingConfig.property.role"></a>

```go
Role *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/scc_v2_organization_source_iam_binding#role SccV2OrganizationSourceIamBinding#role}.

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBindingConfig.property.source"></a>

```go
Source *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/scc_v2_organization_source_iam_binding#source SccV2OrganizationSourceIamBinding#source}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBindingConfig.property.condition"></a>

```go
Condition SccV2OrganizationSourceIamBindingCondition
```

- *Type:* <a href="#@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBindingCondition">SccV2OrganizationSourceIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/scc_v2_organization_source_iam_binding#condition SccV2OrganizationSourceIamBinding#condition}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBindingConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/scc_v2_organization_source_iam_binding#id SccV2OrganizationSourceIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### SccV2OrganizationSourceIamBindingConditionOutputReference <a name="SccV2OrganizationSourceIamBindingConditionOutputReference" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBindingConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/sccv2organizationsourceiambinding"

sccv2organizationsourceiambinding.NewSccV2OrganizationSourceIamBindingConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SccV2OrganizationSourceIamBindingConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBindingConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBindingConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBindingConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBindingConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBindingConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBindingConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBindingConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBindingConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBindingConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBindingConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBindingConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBindingConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBindingConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBindingConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBindingConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBindingConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBindingConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBindingConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBindingConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBindingConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBindingConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBindingConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBindingConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBindingConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBindingConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBindingConditionOutputReference.resetDescription"></a>

```go
func ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBindingConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBindingConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBindingConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBindingConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBindingConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBindingConditionOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBindingConditionOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBindingConditionOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBindingConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBindingCondition">SccV2OrganizationSourceIamBindingCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBindingConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBindingConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBindingConditionOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBindingConditionOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBindingConditionOutputReference.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBindingConditionOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBindingConditionOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBindingConditionOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBindingConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() SccV2OrganizationSourceIamBindingCondition
```

- *Type:* <a href="#@cdktn/provider-google.sccV2OrganizationSourceIamBinding.SccV2OrganizationSourceIamBindingCondition">SccV2OrganizationSourceIamBindingCondition</a>

---



