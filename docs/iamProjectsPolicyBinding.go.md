# `iamProjectsPolicyBinding` Submodule <a name="`iamProjectsPolicyBinding` Submodule" id="@cdktn/provider-google.iamProjectsPolicyBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IamProjectsPolicyBinding <a name="IamProjectsPolicyBinding" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/iam_projects_policy_binding google_iam_projects_policy_binding}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v18/iamprojectspolicybinding"

iamprojectspolicybinding.NewIamProjectsPolicyBinding(scope Construct, id *string, config IamProjectsPolicyBindingConfig) IamProjectsPolicyBinding
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig">IamProjectsPolicyBindingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig">IamProjectsPolicyBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.putTarget">PutTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.resetPolicyKind">ResetPolicyKind</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCondition` <a name="PutCondition" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.putCondition"></a>

```go
func PutCondition(value IamProjectsPolicyBindingCondition)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingCondition">IamProjectsPolicyBindingCondition</a>

---

##### `PutTarget` <a name="PutTarget" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.putTarget"></a>

```go
func PutTarget(value IamProjectsPolicyBindingTarget)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.putTarget.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTarget">IamProjectsPolicyBindingTarget</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.putTimeouts"></a>

```go
func PutTimeouts(value IamProjectsPolicyBindingTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeouts">IamProjectsPolicyBindingTimeouts</a>

---

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.resetAnnotations"></a>

```go
func ResetAnnotations()
```

##### `ResetCondition` <a name="ResetCondition" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.resetCondition"></a>

```go
func ResetCondition()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.resetId"></a>

```go
func ResetId()
```

##### `ResetPolicyKind` <a name="ResetPolicyKind" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.resetPolicyKind"></a>

```go
func ResetPolicyKind()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a IamProjectsPolicyBinding resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v18/iamprojectspolicybinding"

iamprojectspolicybinding.IamProjectsPolicyBinding_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v18/iamprojectspolicybinding"

iamprojectspolicybinding.IamProjectsPolicyBinding_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v18/iamprojectspolicybinding"

iamprojectspolicybinding.IamProjectsPolicyBinding_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v18/iamprojectspolicybinding"

iamprojectspolicybinding.IamProjectsPolicyBinding_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a IamProjectsPolicyBinding resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the IamProjectsPolicyBinding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing IamProjectsPolicyBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/iam_projects_policy_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the IamProjectsPolicyBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.condition">Condition</a></code> | <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference">IamProjectsPolicyBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.effectiveAnnotations">EffectiveAnnotations</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.policyUid">PolicyUid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.target">Target</a></code> | <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference">IamProjectsPolicyBindingTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference">IamProjectsPolicyBindingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.annotationsInput">AnnotationsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingCondition">IamProjectsPolicyBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.policyBindingIdInput">PolicyBindingIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.policyInput">PolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.policyKindInput">PolicyKindInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.targetInput">TargetInput</a></code> | <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTarget">IamProjectsPolicyBindingTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.policy">Policy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.policyBindingId">PolicyBindingId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.policyKind">PolicyKind</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.condition"></a>

```go
func Condition() IamProjectsPolicyBindingConditionOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference">IamProjectsPolicyBindingConditionOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EffectiveAnnotations`<sup>Required</sup> <a name="EffectiveAnnotations" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.effectiveAnnotations"></a>

```go
func EffectiveAnnotations() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PolicyUid`<sup>Required</sup> <a name="PolicyUid" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.policyUid"></a>

```go
func PolicyUid() *string
```

- *Type:* *string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.target"></a>

```go
func Target() IamProjectsPolicyBindingTargetOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference">IamProjectsPolicyBindingTargetOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.timeouts"></a>

```go
func Timeouts() IamProjectsPolicyBindingTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference">IamProjectsPolicyBindingTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.annotationsInput"></a>

```go
func AnnotationsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.conditionInput"></a>

```go
func ConditionInput() IamProjectsPolicyBindingCondition
```

- *Type:* <a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingCondition">IamProjectsPolicyBindingCondition</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `PolicyBindingIdInput`<sup>Optional</sup> <a name="PolicyBindingIdInput" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.policyBindingIdInput"></a>

```go
func PolicyBindingIdInput() *string
```

- *Type:* *string

---

##### `PolicyInput`<sup>Optional</sup> <a name="PolicyInput" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.policyInput"></a>

```go
func PolicyInput() *string
```

- *Type:* *string

---

##### `PolicyKindInput`<sup>Optional</sup> <a name="PolicyKindInput" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.policyKindInput"></a>

```go
func PolicyKindInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.targetInput"></a>

```go
func TargetInput() IamProjectsPolicyBindingTarget
```

- *Type:* <a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTarget">IamProjectsPolicyBindingTarget</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.annotations"></a>

```go
func Annotations() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.policy"></a>

```go
func Policy() *string
```

- *Type:* *string

---

##### `PolicyBindingId`<sup>Required</sup> <a name="PolicyBindingId" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.policyBindingId"></a>

```go
func PolicyBindingId() *string
```

- *Type:* *string

---

##### `PolicyKind`<sup>Required</sup> <a name="PolicyKind" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.policyKind"></a>

```go
func PolicyKind() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### IamProjectsPolicyBindingCondition <a name="IamProjectsPolicyBindingCondition" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingCondition.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v18/iamprojectspolicybinding"

&iamprojectspolicybinding.IamProjectsPolicyBindingCondition {
	Description: *string,
	Expression: *string,
	Location: *string,
	Title: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingCondition.property.description">Description</a></code> | <code>*string</code> | Optional. |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingCondition.property.expression">Expression</a></code> | <code>*string</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingCondition.property.location">Location</a></code> | <code>*string</code> | Optional. |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingCondition.property.title">Title</a></code> | <code>*string</code> | Optional. |

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingCondition.property.description"></a>

```go
Description *string
```

- *Type:* *string

Optional.

Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/iam_projects_policy_binding#description IamProjectsPolicyBinding#description}

---

##### `Expression`<sup>Optional</sup> <a name="Expression" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingCondition.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/iam_projects_policy_binding#expression IamProjectsPolicyBinding#expression}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingCondition.property.location"></a>

```go
Location *string
```

- *Type:* *string

Optional.

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/iam_projects_policy_binding#location IamProjectsPolicyBinding#location}

---

##### `Title`<sup>Optional</sup> <a name="Title" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingCondition.property.title"></a>

```go
Title *string
```

- *Type:* *string

Optional.

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/iam_projects_policy_binding#title IamProjectsPolicyBinding#title}

---

### IamProjectsPolicyBindingConfig <a name="IamProjectsPolicyBindingConfig" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v18/iamprojectspolicybinding"

&iamprojectspolicybinding.IamProjectsPolicyBindingConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	Policy: *string,
	PolicyBindingId: *string,
	Target: github.com/cdktn-io/cdktn-provider-google-go/google/v18.iamProjectsPolicyBinding.IamProjectsPolicyBindingTarget,
	Annotations: *map[string]*string,
	Condition: github.com/cdktn-io/cdktn-provider-google-go/google/v18.iamProjectsPolicyBinding.IamProjectsPolicyBindingCondition,
	DisplayName: *string,
	Id: *string,
	PolicyKind: *string,
	Project: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-google-go/google/v18.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.location">Location</a></code> | <code>*string</code> | The location of the Policy Binding. |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.policy">Policy</a></code> | <code>*string</code> | Required. |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.policyBindingId">PolicyBindingId</a></code> | <code>*string</code> | The Policy Binding ID. |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.target">Target</a></code> | <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTarget">IamProjectsPolicyBindingTarget</a></code> | target block. |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | Optional. User defined annotations. See https://google.aip.dev/148#annotations for more details such as format and size limitations. |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.condition">Condition</a></code> | <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingCondition">IamProjectsPolicyBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Optional. The description of the policy binding. Must be less than or equal to 63 characters. |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/iam_projects_policy_binding#id IamProjectsPolicyBinding#id}. |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.policyKind">PolicyKind</a></code> | <code>*string</code> | Immutable. |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/iam_projects_policy_binding#project IamProjectsPolicyBinding#project}. |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeouts">IamProjectsPolicyBindingTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location of the Policy Binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/iam_projects_policy_binding#location IamProjectsPolicyBinding#location}

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.policy"></a>

```go
Policy *string
```

- *Type:* *string

Required.

Immutable. The resource name of the policy to be bound. The binding parent and policy must belong to the same Organization (or Project).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/iam_projects_policy_binding#policy IamProjectsPolicyBinding#policy}

---

##### `PolicyBindingId`<sup>Required</sup> <a name="PolicyBindingId" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.policyBindingId"></a>

```go
PolicyBindingId *string
```

- *Type:* *string

The Policy Binding ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/iam_projects_policy_binding#policy_binding_id IamProjectsPolicyBinding#policy_binding_id}

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.target"></a>

```go
Target IamProjectsPolicyBindingTarget
```

- *Type:* <a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTarget">IamProjectsPolicyBindingTarget</a>

target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/iam_projects_policy_binding#target IamProjectsPolicyBinding#target}

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.annotations"></a>

```go
Annotations *map[string]*string
```

- *Type:* *map[string]*string

Optional. User defined annotations. See https://google.aip.dev/148#annotations for more details such as format and size limitations.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/iam_projects_policy_binding#annotations IamProjectsPolicyBinding#annotations}

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.condition"></a>

```go
Condition IamProjectsPolicyBindingCondition
```

- *Type:* <a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingCondition">IamProjectsPolicyBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/iam_projects_policy_binding#condition IamProjectsPolicyBinding#condition}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Optional. The description of the policy binding. Must be less than or equal to 63 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/iam_projects_policy_binding#display_name IamProjectsPolicyBinding#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/iam_projects_policy_binding#id IamProjectsPolicyBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PolicyKind`<sup>Optional</sup> <a name="PolicyKind" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.policyKind"></a>

```go
PolicyKind *string
```

- *Type:* *string

Immutable.

The kind of the policy to attach in this binding. This
field must be one of the following:  - Left empty (will be automatically set
to the policy kind) - The input policy kind   Possible values:  POLICY_KIND_UNSPECIFIED PRINCIPAL_ACCESS_BOUNDARY ACCESS

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/iam_projects_policy_binding#policy_kind IamProjectsPolicyBinding#policy_kind}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/iam_projects_policy_binding#project IamProjectsPolicyBinding#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.timeouts"></a>

```go
Timeouts IamProjectsPolicyBindingTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeouts">IamProjectsPolicyBindingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/iam_projects_policy_binding#timeouts IamProjectsPolicyBinding#timeouts}

---

### IamProjectsPolicyBindingTarget <a name="IamProjectsPolicyBindingTarget" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTarget.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v18/iamprojectspolicybinding"

&iamprojectspolicybinding.IamProjectsPolicyBindingTarget {
	PrincipalSet: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTarget.property.principalSet">PrincipalSet</a></code> | <code>*string</code> | Required. |

---

##### `PrincipalSet`<sup>Optional</sup> <a name="PrincipalSet" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTarget.property.principalSet"></a>

```go
PrincipalSet *string
```

- *Type:* *string

Required.

Immutable. Full Resource Name of the principal set used for principal access boundary policy bindings.
Examples for each one of the following supported principal set types:

* Project:

  * '//cloudresourcemanager.googleapis.com/projects/PROJECT_NUMBER'
  * '//cloudresourcemanager.googleapis.com/projects/PROJECT_ID'
* Workload Identity Pool: '//iam.googleapis.com/projects/PROJECT_NUMBER/locations/LOCATION/workloadIdentityPools/WORKLOAD_POOL_ID'
  It must be parent by the policy binding's parent (the project).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/iam_projects_policy_binding#principal_set IamProjectsPolicyBinding#principal_set}

---

### IamProjectsPolicyBindingTimeouts <a name="IamProjectsPolicyBindingTimeouts" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v18/iamprojectspolicybinding"

&iamprojectspolicybinding.IamProjectsPolicyBindingTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/iam_projects_policy_binding#create IamProjectsPolicyBinding#create}. |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/iam_projects_policy_binding#delete IamProjectsPolicyBinding#delete}. |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/iam_projects_policy_binding#update IamProjectsPolicyBinding#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/iam_projects_policy_binding#create IamProjectsPolicyBinding#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/iam_projects_policy_binding#delete IamProjectsPolicyBinding#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/iam_projects_policy_binding#update IamProjectsPolicyBinding#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IamProjectsPolicyBindingConditionOutputReference <a name="IamProjectsPolicyBindingConditionOutputReference" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v18/iamprojectspolicybinding"

iamprojectspolicybinding.NewIamProjectsPolicyBindingConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IamProjectsPolicyBindingConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.resetExpression">ResetExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.resetTitle">ResetTitle</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetExpression` <a name="ResetExpression" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.resetExpression"></a>

```go
func ResetExpression()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetTitle` <a name="ResetTitle" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.resetTitle"></a>

```go
func ResetTitle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingCondition">IamProjectsPolicyBindingCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() IamProjectsPolicyBindingCondition
```

- *Type:* <a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingCondition">IamProjectsPolicyBindingCondition</a>

---


### IamProjectsPolicyBindingTargetOutputReference <a name="IamProjectsPolicyBindingTargetOutputReference" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v18/iamprojectspolicybinding"

iamprojectspolicybinding.NewIamProjectsPolicyBindingTargetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IamProjectsPolicyBindingTargetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.resetPrincipalSet">ResetPrincipalSet</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPrincipalSet` <a name="ResetPrincipalSet" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.resetPrincipalSet"></a>

```go
func ResetPrincipalSet()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.property.principalSetInput">PrincipalSetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.property.principalSet">PrincipalSet</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTarget">IamProjectsPolicyBindingTarget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PrincipalSetInput`<sup>Optional</sup> <a name="PrincipalSetInput" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.property.principalSetInput"></a>

```go
func PrincipalSetInput() *string
```

- *Type:* *string

---

##### `PrincipalSet`<sup>Required</sup> <a name="PrincipalSet" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.property.principalSet"></a>

```go
func PrincipalSet() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.property.internalValue"></a>

```go
func InternalValue() IamProjectsPolicyBindingTarget
```

- *Type:* <a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTarget">IamProjectsPolicyBindingTarget</a>

---


### IamProjectsPolicyBindingTimeoutsOutputReference <a name="IamProjectsPolicyBindingTimeoutsOutputReference" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v18/iamprojectspolicybinding"

iamprojectspolicybinding.NewIamProjectsPolicyBindingTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IamProjectsPolicyBindingTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



