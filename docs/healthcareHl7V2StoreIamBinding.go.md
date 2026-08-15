# `healthcareHl7V2StoreIamBinding` Submodule <a name="`healthcareHl7V2StoreIamBinding` Submodule" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HealthcareHl7V2StoreIamBinding <a name="HealthcareHl7V2StoreIamBinding" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/healthcare_hl7_v2_store_iam_binding google_healthcare_hl7_v2_store_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/healthcarehl7v2storeiambinding"

healthcarehl7v2storeiambinding.NewHealthcareHl7V2StoreIamBinding(scope Construct, id *string, config HealthcareHl7V2StoreIamBindingConfig) HealthcareHl7V2StoreIamBinding
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConfig">HealthcareHl7V2StoreIamBindingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConfig">HealthcareHl7V2StoreIamBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCondition` <a name="PutCondition" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.putCondition"></a>

```go
func PutCondition(value HealthcareHl7V2StoreIamBindingCondition)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingCondition">HealthcareHl7V2StoreIamBindingCondition</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.resetCondition"></a>

```go
func ResetCondition()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a HealthcareHl7V2StoreIamBinding resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/healthcarehl7v2storeiambinding"

healthcarehl7v2storeiambinding.HealthcareHl7V2StoreIamBinding_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/healthcarehl7v2storeiambinding"

healthcarehl7v2storeiambinding.HealthcareHl7V2StoreIamBinding_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/healthcarehl7v2storeiambinding"

healthcarehl7v2storeiambinding.HealthcareHl7V2StoreIamBinding_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/healthcarehl7v2storeiambinding"

healthcarehl7v2storeiambinding.HealthcareHl7V2StoreIamBinding_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a HealthcareHl7V2StoreIamBinding resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the HealthcareHl7V2StoreIamBinding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing HealthcareHl7V2StoreIamBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/healthcare_hl7_v2_store_iam_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the HealthcareHl7V2StoreIamBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.condition">Condition</a></code> | <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference">HealthcareHl7V2StoreIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingCondition">HealthcareHl7V2StoreIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.hl7V2StoreIdInput">Hl7V2StoreIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.membersInput">MembersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.roleInput">RoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.hl7V2StoreId">Hl7V2StoreId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.members">Members</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.role">Role</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.condition"></a>

```go
func Condition() HealthcareHl7V2StoreIamBindingConditionOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference">HealthcareHl7V2StoreIamBindingConditionOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.conditionInput"></a>

```go
func ConditionInput() HealthcareHl7V2StoreIamBindingCondition
```

- *Type:* <a href="#@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingCondition">HealthcareHl7V2StoreIamBindingCondition</a>

---

##### `Hl7V2StoreIdInput`<sup>Optional</sup> <a name="Hl7V2StoreIdInput" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.hl7V2StoreIdInput"></a>

```go
func Hl7V2StoreIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MembersInput`<sup>Optional</sup> <a name="MembersInput" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.membersInput"></a>

```go
func MembersInput() *[]*string
```

- *Type:* *[]*string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.roleInput"></a>

```go
func RoleInput() *string
```

- *Type:* *string

---

##### `Hl7V2StoreId`<sup>Required</sup> <a name="Hl7V2StoreId" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.hl7V2StoreId"></a>

```go
func Hl7V2StoreId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.members"></a>

```go
func Members() *[]*string
```

- *Type:* *[]*string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### HealthcareHl7V2StoreIamBindingCondition <a name="HealthcareHl7V2StoreIamBindingCondition" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingCondition.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/healthcarehl7v2storeiambinding"

&healthcarehl7v2storeiambinding.HealthcareHl7V2StoreIamBindingCondition {
	Expression: *string,
	Title: *string,
	Description: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingCondition.property.expression">Expression</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/healthcare_hl7_v2_store_iam_binding#expression HealthcareHl7V2StoreIamBinding#expression}. |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingCondition.property.title">Title</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/healthcare_hl7_v2_store_iam_binding#title HealthcareHl7V2StoreIamBinding#title}. |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingCondition.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/healthcare_hl7_v2_store_iam_binding#description HealthcareHl7V2StoreIamBinding#description}. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingCondition.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/healthcare_hl7_v2_store_iam_binding#expression HealthcareHl7V2StoreIamBinding#expression}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingCondition.property.title"></a>

```go
Title *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/healthcare_hl7_v2_store_iam_binding#title HealthcareHl7V2StoreIamBinding#title}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingCondition.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/healthcare_hl7_v2_store_iam_binding#description HealthcareHl7V2StoreIamBinding#description}.

---

### HealthcareHl7V2StoreIamBindingConfig <a name="HealthcareHl7V2StoreIamBindingConfig" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/healthcarehl7v2storeiambinding"

&healthcarehl7v2storeiambinding.HealthcareHl7V2StoreIamBindingConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Hl7V2StoreId: *string,
	Members: *[]*string,
	Role: *string,
	Condition: github.com/cdktn-io/cdktn-provider-google-go/google/v20.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingCondition,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConfig.property.hl7V2StoreId">Hl7V2StoreId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/healthcare_hl7_v2_store_iam_binding#hl7_v2_store_id HealthcareHl7V2StoreIamBinding#hl7_v2_store_id}. |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConfig.property.members">Members</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/healthcare_hl7_v2_store_iam_binding#members HealthcareHl7V2StoreIamBinding#members}. |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConfig.property.role">Role</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/healthcare_hl7_v2_store_iam_binding#role HealthcareHl7V2StoreIamBinding#role}. |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConfig.property.condition">Condition</a></code> | <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingCondition">HealthcareHl7V2StoreIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/healthcare_hl7_v2_store_iam_binding#id HealthcareHl7V2StoreIamBinding#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Hl7V2StoreId`<sup>Required</sup> <a name="Hl7V2StoreId" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConfig.property.hl7V2StoreId"></a>

```go
Hl7V2StoreId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/healthcare_hl7_v2_store_iam_binding#hl7_v2_store_id HealthcareHl7V2StoreIamBinding#hl7_v2_store_id}.

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConfig.property.members"></a>

```go
Members *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/healthcare_hl7_v2_store_iam_binding#members HealthcareHl7V2StoreIamBinding#members}.

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConfig.property.role"></a>

```go
Role *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/healthcare_hl7_v2_store_iam_binding#role HealthcareHl7V2StoreIamBinding#role}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConfig.property.condition"></a>

```go
Condition HealthcareHl7V2StoreIamBindingCondition
```

- *Type:* <a href="#@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingCondition">HealthcareHl7V2StoreIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/healthcare_hl7_v2_store_iam_binding#condition HealthcareHl7V2StoreIamBinding#condition}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/healthcare_hl7_v2_store_iam_binding#id HealthcareHl7V2StoreIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### HealthcareHl7V2StoreIamBindingConditionOutputReference <a name="HealthcareHl7V2StoreIamBindingConditionOutputReference" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/healthcarehl7v2storeiambinding"

healthcarehl7v2storeiambinding.NewHealthcareHl7V2StoreIamBindingConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) HealthcareHl7V2StoreIamBindingConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.resetDescription"></a>

```go
func ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingCondition">HealthcareHl7V2StoreIamBindingCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() HealthcareHl7V2StoreIamBindingCondition
```

- *Type:* <a href="#@cdktn/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingCondition">HealthcareHl7V2StoreIamBindingCondition</a>

---



