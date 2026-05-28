# `iamWorkforcePoolProviderScimToken` Submodule <a name="`iamWorkforcePoolProviderScimToken` Submodule" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IamWorkforcePoolProviderScimToken <a name="IamWorkforcePoolProviderScimToken" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/iam_workforce_pool_provider_scim_token google_iam_workforce_pool_provider_scim_token}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/iamworkforcepoolproviderscimtoken"

iamworkforcepoolproviderscimtoken.NewIamWorkforcePoolProviderScimToken(scope Construct, id *string, config IamWorkforcePoolProviderScimTokenConfig) IamWorkforcePoolProviderScimToken
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenConfig">IamWorkforcePoolProviderScimTokenConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenConfig">IamWorkforcePoolProviderScimTokenConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.putTimeouts"></a>

```go
func PutTimeouts(value IamWorkforcePoolProviderScimTokenTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeouts">IamWorkforcePoolProviderScimTokenTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a IamWorkforcePoolProviderScimToken resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/iamworkforcepoolproviderscimtoken"

iamworkforcepoolproviderscimtoken.IamWorkforcePoolProviderScimToken_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/iamworkforcepoolproviderscimtoken"

iamworkforcepoolproviderscimtoken.IamWorkforcePoolProviderScimToken_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/iamworkforcepoolproviderscimtoken"

iamworkforcepoolproviderscimtoken.IamWorkforcePoolProviderScimToken_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/iamworkforcepoolproviderscimtoken"

iamworkforcepoolproviderscimtoken.IamWorkforcePoolProviderScimToken_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a IamWorkforcePoolProviderScimToken resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the IamWorkforcePoolProviderScimToken to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing IamWorkforcePoolProviderScimToken that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/iam_workforce_pool_provider_scim_token#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the IamWorkforcePoolProviderScimToken to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.securityToken">SecurityToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference">IamWorkforcePoolProviderScimTokenTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.providerIdInput">ProviderIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.scimTenantIdInput">ScimTenantIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.scimTokenIdInput">ScimTokenIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.workforcePoolIdInput">WorkforcePoolIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.providerId">ProviderId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.scimTenantId">ScimTenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.scimTokenId">ScimTokenId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.workforcePoolId">WorkforcePoolId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SecurityToken`<sup>Required</sup> <a name="SecurityToken" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.securityToken"></a>

```go
func SecurityToken() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.timeouts"></a>

```go
func Timeouts() IamWorkforcePoolProviderScimTokenTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference">IamWorkforcePoolProviderScimTokenTimeoutsOutputReference</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProviderIdInput`<sup>Optional</sup> <a name="ProviderIdInput" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.providerIdInput"></a>

```go
func ProviderIdInput() *string
```

- *Type:* *string

---

##### `ScimTenantIdInput`<sup>Optional</sup> <a name="ScimTenantIdInput" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.scimTenantIdInput"></a>

```go
func ScimTenantIdInput() *string
```

- *Type:* *string

---

##### `ScimTokenIdInput`<sup>Optional</sup> <a name="ScimTokenIdInput" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.scimTokenIdInput"></a>

```go
func ScimTokenIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `WorkforcePoolIdInput`<sup>Optional</sup> <a name="WorkforcePoolIdInput" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.workforcePoolIdInput"></a>

```go
func WorkforcePoolIdInput() *string
```

- *Type:* *string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `ProviderId`<sup>Required</sup> <a name="ProviderId" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.providerId"></a>

```go
func ProviderId() *string
```

- *Type:* *string

---

##### `ScimTenantId`<sup>Required</sup> <a name="ScimTenantId" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.scimTenantId"></a>

```go
func ScimTenantId() *string
```

- *Type:* *string

---

##### `ScimTokenId`<sup>Required</sup> <a name="ScimTokenId" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.scimTokenId"></a>

```go
func ScimTokenId() *string
```

- *Type:* *string

---

##### `WorkforcePoolId`<sup>Required</sup> <a name="WorkforcePoolId" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.workforcePoolId"></a>

```go
func WorkforcePoolId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### IamWorkforcePoolProviderScimTokenConfig <a name="IamWorkforcePoolProviderScimTokenConfig" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/iamworkforcepoolproviderscimtoken"

&iamworkforcepoolproviderscimtoken.IamWorkforcePoolProviderScimTokenConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	ProviderId: *string,
	ScimTenantId: *string,
	ScimTokenId: *string,
	WorkforcePoolId: *string,
	DeletionPolicy: *string,
	DisplayName: *string,
	Id: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-google-go/google/v19.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenConfig.property.location">Location</a></code> | <code>*string</code> | The location for the resource. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenConfig.property.providerId">ProviderId</a></code> | <code>*string</code> | The ID of the Provider. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenConfig.property.scimTenantId">ScimTenantId</a></code> | <code>*string</code> | The ID of the SCIM Tenant. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenConfig.property.scimTokenId">ScimTokenId</a></code> | <code>*string</code> | The ID to use for the SCIM Token, which becomes the final component of the resource name. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenConfig.property.workforcePoolId">WorkforcePoolId</a></code> | <code>*string</code> | The ID of the Workforce Pool. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | A user-specified display name for the scim token. Cannot exceed 32 characters. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/iam_workforce_pool_provider_scim_token#id IamWorkforcePoolProviderScimToken#id}. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeouts">IamWorkforcePoolProviderScimTokenTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/iam_workforce_pool_provider_scim_token#location IamWorkforcePoolProviderScimToken#location}

---

##### `ProviderId`<sup>Required</sup> <a name="ProviderId" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenConfig.property.providerId"></a>

```go
ProviderId *string
```

- *Type:* *string

The ID of the Provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/iam_workforce_pool_provider_scim_token#provider_id IamWorkforcePoolProviderScimToken#provider_id}

---

##### `ScimTenantId`<sup>Required</sup> <a name="ScimTenantId" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenConfig.property.scimTenantId"></a>

```go
ScimTenantId *string
```

- *Type:* *string

The ID of the SCIM Tenant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/iam_workforce_pool_provider_scim_token#scim_tenant_id IamWorkforcePoolProviderScimToken#scim_tenant_id}

---

##### `ScimTokenId`<sup>Required</sup> <a name="ScimTokenId" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenConfig.property.scimTokenId"></a>

```go
ScimTokenId *string
```

- *Type:* *string

The ID to use for the SCIM Token, which becomes the final component of the resource name.

This value should be 4-32 characters and follow the pattern: '([a-z](%5Ba-z0-9%5C-%5D%7B2,30%7D%5Ba-z0-9%5D))'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/iam_workforce_pool_provider_scim_token#scim_token_id IamWorkforcePoolProviderScimToken#scim_token_id}

---

##### `WorkforcePoolId`<sup>Required</sup> <a name="WorkforcePoolId" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenConfig.property.workforcePoolId"></a>

```go
WorkforcePoolId *string
```

- *Type:* *string

The ID of the Workforce Pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/iam_workforce_pool_provider_scim_token#workforce_pool_id IamWorkforcePoolProviderScimToken#workforce_pool_id}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/iam_workforce_pool_provider_scim_token#deletion_policy IamWorkforcePoolProviderScimToken#deletion_policy}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

A user-specified display name for the scim token. Cannot exceed 32 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/iam_workforce_pool_provider_scim_token#display_name IamWorkforcePoolProviderScimToken#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/iam_workforce_pool_provider_scim_token#id IamWorkforcePoolProviderScimToken#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenConfig.property.timeouts"></a>

```go
Timeouts IamWorkforcePoolProviderScimTokenTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeouts">IamWorkforcePoolProviderScimTokenTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/iam_workforce_pool_provider_scim_token#timeouts IamWorkforcePoolProviderScimToken#timeouts}

---

### IamWorkforcePoolProviderScimTokenTimeouts <a name="IamWorkforcePoolProviderScimTokenTimeouts" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/iamworkforcepoolproviderscimtoken"

&iamworkforcepoolproviderscimtoken.IamWorkforcePoolProviderScimTokenTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/iam_workforce_pool_provider_scim_token#create IamWorkforcePoolProviderScimToken#create}. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/iam_workforce_pool_provider_scim_token#delete IamWorkforcePoolProviderScimToken#delete}. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/iam_workforce_pool_provider_scim_token#update IamWorkforcePoolProviderScimToken#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/iam_workforce_pool_provider_scim_token#create IamWorkforcePoolProviderScimToken#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/iam_workforce_pool_provider_scim_token#delete IamWorkforcePoolProviderScimToken#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/iam_workforce_pool_provider_scim_token#update IamWorkforcePoolProviderScimToken#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IamWorkforcePoolProviderScimTokenTimeoutsOutputReference <a name="IamWorkforcePoolProviderScimTokenTimeoutsOutputReference" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/iamworkforcepoolproviderscimtoken"

iamworkforcepoolproviderscimtoken.NewIamWorkforcePoolProviderScimTokenTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IamWorkforcePoolProviderScimTokenTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



