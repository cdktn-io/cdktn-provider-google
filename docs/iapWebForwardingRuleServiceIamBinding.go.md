# `iapWebForwardingRuleServiceIamBinding` Submodule <a name="`iapWebForwardingRuleServiceIamBinding` Submodule" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IapWebForwardingRuleServiceIamBinding <a name="IapWebForwardingRuleServiceIamBinding" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/iap_web_forwarding_rule_service_iam_binding google_iap_web_forwarding_rule_service_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/iapwebforwardingruleserviceiambinding"

iapwebforwardingruleserviceiambinding.NewIapWebForwardingRuleServiceIamBinding(scope Construct, id *string, config IapWebForwardingRuleServiceIamBindingConfig) IapWebForwardingRuleServiceIamBinding
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConfig">IapWebForwardingRuleServiceIamBindingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConfig">IapWebForwardingRuleServiceIamBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCondition` <a name="PutCondition" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.putCondition"></a>

```go
func PutCondition(value IapWebForwardingRuleServiceIamBindingCondition)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingCondition">IapWebForwardingRuleServiceIamBindingCondition</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.resetCondition"></a>

```go
func ResetCondition()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.resetProject"></a>

```go
func ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a IapWebForwardingRuleServiceIamBinding resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/iapwebforwardingruleserviceiambinding"

iapwebforwardingruleserviceiambinding.IapWebForwardingRuleServiceIamBinding_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/iapwebforwardingruleserviceiambinding"

iapwebforwardingruleserviceiambinding.IapWebForwardingRuleServiceIamBinding_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/iapwebforwardingruleserviceiambinding"

iapwebforwardingruleserviceiambinding.IapWebForwardingRuleServiceIamBinding_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/iapwebforwardingruleserviceiambinding"

iapwebforwardingruleserviceiambinding.IapWebForwardingRuleServiceIamBinding_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a IapWebForwardingRuleServiceIamBinding resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the IapWebForwardingRuleServiceIamBinding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing IapWebForwardingRuleServiceIamBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/iap_web_forwarding_rule_service_iam_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the IapWebForwardingRuleServiceIamBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.property.condition">Condition</a></code> | <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConditionOutputReference">IapWebForwardingRuleServiceIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingCondition">IapWebForwardingRuleServiceIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.property.forwardingRuleServiceNameInput">ForwardingRuleServiceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.property.membersInput">MembersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.property.roleInput">RoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.property.forwardingRuleServiceName">ForwardingRuleServiceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.property.members">Members</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.property.role">Role</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.property.condition"></a>

```go
func Condition() IapWebForwardingRuleServiceIamBindingConditionOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConditionOutputReference">IapWebForwardingRuleServiceIamBindingConditionOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.property.conditionInput"></a>

```go
func ConditionInput() IapWebForwardingRuleServiceIamBindingCondition
```

- *Type:* <a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingCondition">IapWebForwardingRuleServiceIamBindingCondition</a>

---

##### `ForwardingRuleServiceNameInput`<sup>Optional</sup> <a name="ForwardingRuleServiceNameInput" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.property.forwardingRuleServiceNameInput"></a>

```go
func ForwardingRuleServiceNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MembersInput`<sup>Optional</sup> <a name="MembersInput" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.property.membersInput"></a>

```go
func MembersInput() *[]*string
```

- *Type:* *[]*string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.property.roleInput"></a>

```go
func RoleInput() *string
```

- *Type:* *string

---

##### `ForwardingRuleServiceName`<sup>Required</sup> <a name="ForwardingRuleServiceName" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.property.forwardingRuleServiceName"></a>

```go
func ForwardingRuleServiceName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.property.members"></a>

```go
func Members() *[]*string
```

- *Type:* *[]*string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### IapWebForwardingRuleServiceIamBindingCondition <a name="IapWebForwardingRuleServiceIamBindingCondition" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingCondition.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/iapwebforwardingruleserviceiambinding"

&iapwebforwardingruleserviceiambinding.IapWebForwardingRuleServiceIamBindingCondition {
	Expression: *string,
	Title: *string,
	Description: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingCondition.property.expression">Expression</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/iap_web_forwarding_rule_service_iam_binding#expression IapWebForwardingRuleServiceIamBinding#expression}. |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingCondition.property.title">Title</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/iap_web_forwarding_rule_service_iam_binding#title IapWebForwardingRuleServiceIamBinding#title}. |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingCondition.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/iap_web_forwarding_rule_service_iam_binding#description IapWebForwardingRuleServiceIamBinding#description}. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingCondition.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/iap_web_forwarding_rule_service_iam_binding#expression IapWebForwardingRuleServiceIamBinding#expression}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingCondition.property.title"></a>

```go
Title *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/iap_web_forwarding_rule_service_iam_binding#title IapWebForwardingRuleServiceIamBinding#title}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingCondition.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/iap_web_forwarding_rule_service_iam_binding#description IapWebForwardingRuleServiceIamBinding#description}.

---

### IapWebForwardingRuleServiceIamBindingConfig <a name="IapWebForwardingRuleServiceIamBindingConfig" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/iapwebforwardingruleserviceiambinding"

&iapwebforwardingruleserviceiambinding.IapWebForwardingRuleServiceIamBindingConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ForwardingRuleServiceName: *string,
	Members: *[]*string,
	Role: *string,
	Condition: github.com/cdktn-io/cdktn-provider-google-go/google/v19.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingCondition,
	Id: *string,
	Project: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConfig.property.forwardingRuleServiceName">ForwardingRuleServiceName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/iap_web_forwarding_rule_service_iam_binding#forwarding_rule_service_name IapWebForwardingRuleServiceIamBinding#forwarding_rule_service_name}. |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConfig.property.members">Members</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/iap_web_forwarding_rule_service_iam_binding#members IapWebForwardingRuleServiceIamBinding#members}. |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConfig.property.role">Role</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/iap_web_forwarding_rule_service_iam_binding#role IapWebForwardingRuleServiceIamBinding#role}. |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConfig.property.condition">Condition</a></code> | <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingCondition">IapWebForwardingRuleServiceIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/iap_web_forwarding_rule_service_iam_binding#id IapWebForwardingRuleServiceIamBinding#id}. |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/iap_web_forwarding_rule_service_iam_binding#project IapWebForwardingRuleServiceIamBinding#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ForwardingRuleServiceName`<sup>Required</sup> <a name="ForwardingRuleServiceName" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConfig.property.forwardingRuleServiceName"></a>

```go
ForwardingRuleServiceName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/iap_web_forwarding_rule_service_iam_binding#forwarding_rule_service_name IapWebForwardingRuleServiceIamBinding#forwarding_rule_service_name}.

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConfig.property.members"></a>

```go
Members *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/iap_web_forwarding_rule_service_iam_binding#members IapWebForwardingRuleServiceIamBinding#members}.

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConfig.property.role"></a>

```go
Role *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/iap_web_forwarding_rule_service_iam_binding#role IapWebForwardingRuleServiceIamBinding#role}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConfig.property.condition"></a>

```go
Condition IapWebForwardingRuleServiceIamBindingCondition
```

- *Type:* <a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingCondition">IapWebForwardingRuleServiceIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/iap_web_forwarding_rule_service_iam_binding#condition IapWebForwardingRuleServiceIamBinding#condition}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/iap_web_forwarding_rule_service_iam_binding#id IapWebForwardingRuleServiceIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/iap_web_forwarding_rule_service_iam_binding#project IapWebForwardingRuleServiceIamBinding#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### IapWebForwardingRuleServiceIamBindingConditionOutputReference <a name="IapWebForwardingRuleServiceIamBindingConditionOutputReference" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/iapwebforwardingruleserviceiambinding"

iapwebforwardingruleserviceiambinding.NewIapWebForwardingRuleServiceIamBindingConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IapWebForwardingRuleServiceIamBindingConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConditionOutputReference.resetDescription"></a>

```go
func ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConditionOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConditionOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConditionOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingCondition">IapWebForwardingRuleServiceIamBindingCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConditionOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConditionOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConditionOutputReference.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConditionOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConditionOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConditionOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() IapWebForwardingRuleServiceIamBindingCondition
```

- *Type:* <a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingCondition">IapWebForwardingRuleServiceIamBindingCondition</a>

---



