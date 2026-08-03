# `apigeeSecurityFeedback` Submodule <a name="`apigeeSecurityFeedback` Submodule" id="@cdktn/provider-google.apigeeSecurityFeedback"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigeeSecurityFeedback <a name="ApigeeSecurityFeedback" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/apigee_security_feedback google_apigee_security_feedback}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/apigeesecurityfeedback"

apigeesecurityfeedback.NewApigeeSecurityFeedback(scope Construct, id *string, config ApigeeSecurityFeedbackConfig) ApigeeSecurityFeedback
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig">ApigeeSecurityFeedbackConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig">ApigeeSecurityFeedbackConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.putFeedbackContexts">PutFeedbackContexts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.resetReason">ResetReason</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutFeedbackContexts` <a name="PutFeedbackContexts" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.putFeedbackContexts"></a>

```go
func PutFeedbackContexts(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.putFeedbackContexts.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.putTimeouts"></a>

```go
func PutTimeouts(value ApigeeSecurityFeedbackTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeouts">ApigeeSecurityFeedbackTimeouts</a>

---

##### `ResetComment` <a name="ResetComment" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.resetComment"></a>

```go
func ResetComment()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.resetId"></a>

```go
func ResetId()
```

##### `ResetReason` <a name="ResetReason" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.resetReason"></a>

```go
func ResetReason()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ApigeeSecurityFeedback resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/apigeesecurityfeedback"

apigeesecurityfeedback.ApigeeSecurityFeedback_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/apigeesecurityfeedback"

apigeesecurityfeedback.ApigeeSecurityFeedback_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/apigeesecurityfeedback"

apigeesecurityfeedback.ApigeeSecurityFeedback_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/apigeesecurityfeedback"

apigeesecurityfeedback.ApigeeSecurityFeedback_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ApigeeSecurityFeedback resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ApigeeSecurityFeedback to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ApigeeSecurityFeedback that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/apigee_security_feedback#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ApigeeSecurityFeedback to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.feedbackContexts">FeedbackContexts</a></code> | <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsList">ApigeeSecurityFeedbackFeedbackContextsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference">ApigeeSecurityFeedbackTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.commentInput">CommentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.feedbackContextsInput">FeedbackContextsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.feedbackIdInput">FeedbackIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.feedbackTypeInput">FeedbackTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.orgIdInput">OrgIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.reasonInput">ReasonInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.feedbackId">FeedbackId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.feedbackType">FeedbackType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.orgId">OrgId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.reason">Reason</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `FeedbackContexts`<sup>Required</sup> <a name="FeedbackContexts" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.feedbackContexts"></a>

```go
func FeedbackContexts() ApigeeSecurityFeedbackFeedbackContextsList
```

- *Type:* <a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsList">ApigeeSecurityFeedbackFeedbackContextsList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.timeouts"></a>

```go
func Timeouts() ApigeeSecurityFeedbackTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference">ApigeeSecurityFeedbackTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.commentInput"></a>

```go
func CommentInput() *string
```

- *Type:* *string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FeedbackContextsInput`<sup>Optional</sup> <a name="FeedbackContextsInput" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.feedbackContextsInput"></a>

```go
func FeedbackContextsInput() interface{}
```

- *Type:* interface{}

---

##### `FeedbackIdInput`<sup>Optional</sup> <a name="FeedbackIdInput" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.feedbackIdInput"></a>

```go
func FeedbackIdInput() *string
```

- *Type:* *string

---

##### `FeedbackTypeInput`<sup>Optional</sup> <a name="FeedbackTypeInput" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.feedbackTypeInput"></a>

```go
func FeedbackTypeInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `OrgIdInput`<sup>Optional</sup> <a name="OrgIdInput" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.orgIdInput"></a>

```go
func OrgIdInput() *string
```

- *Type:* *string

---

##### `ReasonInput`<sup>Optional</sup> <a name="ReasonInput" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.reasonInput"></a>

```go
func ReasonInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FeedbackId`<sup>Required</sup> <a name="FeedbackId" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.feedbackId"></a>

```go
func FeedbackId() *string
```

- *Type:* *string

---

##### `FeedbackType`<sup>Required</sup> <a name="FeedbackType" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.feedbackType"></a>

```go
func FeedbackType() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `OrgId`<sup>Required</sup> <a name="OrgId" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.orgId"></a>

```go
func OrgId() *string
```

- *Type:* *string

---

##### `Reason`<sup>Required</sup> <a name="Reason" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.reason"></a>

```go
func Reason() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ApigeeSecurityFeedbackConfig <a name="ApigeeSecurityFeedbackConfig" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/apigeesecurityfeedback"

&apigeesecurityfeedback.ApigeeSecurityFeedbackConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	FeedbackContexts: interface{},
	FeedbackId: *string,
	FeedbackType: *string,
	OrgId: *string,
	Comment: *string,
	DeletionPolicy: *string,
	DisplayName: *string,
	Id: *string,
	Reason: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-google-go/google/v19.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.feedbackContexts">FeedbackContexts</a></code> | <code>interface{}</code> | feedback_contexts block. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.feedbackId">FeedbackId</a></code> | <code>*string</code> | Resource ID of the security feedback. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.feedbackType">FeedbackType</a></code> | <code>*string</code> | The type of feedback being submitted. Possible values: ["EXCLUDED_DETECTION"]. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.orgId">OrgId</a></code> | <code>*string</code> | The Apigee Organization associated with the Apigee Security Feedback, in the format 'organizations/{{org_name}}'. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.comment">Comment</a></code> | <code>*string</code> | Optional text the user can provide for additional, unstructured context. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | The display name of the feedback. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/apigee_security_feedback#id ApigeeSecurityFeedback#id}. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.reason">Reason</a></code> | <code>*string</code> | The reason for the feedback. Possible values: ["INTERNAL_SYSTEM", "NON_RISK_CLIENT", "NAT", "PENETRATION_TEST", "OTHER"]. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeouts">ApigeeSecurityFeedbackTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `FeedbackContexts`<sup>Required</sup> <a name="FeedbackContexts" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.feedbackContexts"></a>

```go
FeedbackContexts interface{}
```

- *Type:* interface{}

feedback_contexts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/apigee_security_feedback#feedback_contexts ApigeeSecurityFeedback#feedback_contexts}

---

##### `FeedbackId`<sup>Required</sup> <a name="FeedbackId" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.feedbackId"></a>

```go
FeedbackId *string
```

- *Type:* *string

Resource ID of the security feedback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/apigee_security_feedback#feedback_id ApigeeSecurityFeedback#feedback_id}

---

##### `FeedbackType`<sup>Required</sup> <a name="FeedbackType" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.feedbackType"></a>

```go
FeedbackType *string
```

- *Type:* *string

The type of feedback being submitted. Possible values: ["EXCLUDED_DETECTION"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/apigee_security_feedback#feedback_type ApigeeSecurityFeedback#feedback_type}

---

##### `OrgId`<sup>Required</sup> <a name="OrgId" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.orgId"></a>

```go
OrgId *string
```

- *Type:* *string

The Apigee Organization associated with the Apigee Security Feedback, in the format 'organizations/{{org_name}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/apigee_security_feedback#org_id ApigeeSecurityFeedback#org_id}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.comment"></a>

```go
Comment *string
```

- *Type:* *string

Optional text the user can provide for additional, unstructured context.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/apigee_security_feedback#comment ApigeeSecurityFeedback#comment}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/apigee_security_feedback#deletion_policy ApigeeSecurityFeedback#deletion_policy}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

The display name of the feedback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/apigee_security_feedback#display_name ApigeeSecurityFeedback#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/apigee_security_feedback#id ApigeeSecurityFeedback#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Reason`<sup>Optional</sup> <a name="Reason" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.reason"></a>

```go
Reason *string
```

- *Type:* *string

The reason for the feedback. Possible values: ["INTERNAL_SYSTEM", "NON_RISK_CLIENT", "NAT", "PENETRATION_TEST", "OTHER"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/apigee_security_feedback#reason ApigeeSecurityFeedback#reason}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.timeouts"></a>

```go
Timeouts ApigeeSecurityFeedbackTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeouts">ApigeeSecurityFeedbackTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/apigee_security_feedback#timeouts ApigeeSecurityFeedback#timeouts}

---

### ApigeeSecurityFeedbackFeedbackContexts <a name="ApigeeSecurityFeedbackFeedbackContexts" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContexts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContexts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/apigeesecurityfeedback"

&apigeesecurityfeedback.ApigeeSecurityFeedbackFeedbackContexts {
	Attribute: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContexts.property.attribute">Attribute</a></code> | <code>*string</code> | The attribute the user is providing feedback about. Possible values: ["ATTRIBUTE_ENVIRONMENTS", "ATTRIBUTE_IP_ADDRESS_RANGES"]. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContexts.property.values">Values</a></code> | <code>*[]*string</code> | The values of the attribute the user is providing feedback about, separated by commas. |

---

##### `Attribute`<sup>Required</sup> <a name="Attribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContexts.property.attribute"></a>

```go
Attribute *string
```

- *Type:* *string

The attribute the user is providing feedback about. Possible values: ["ATTRIBUTE_ENVIRONMENTS", "ATTRIBUTE_IP_ADDRESS_RANGES"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/apigee_security_feedback#attribute ApigeeSecurityFeedback#attribute}

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContexts.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

The values of the attribute the user is providing feedback about, separated by commas.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/apigee_security_feedback#values ApigeeSecurityFeedback#values}

---

### ApigeeSecurityFeedbackTimeouts <a name="ApigeeSecurityFeedbackTimeouts" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/apigeesecurityfeedback"

&apigeesecurityfeedback.ApigeeSecurityFeedbackTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/apigee_security_feedback#create ApigeeSecurityFeedback#create}. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/apigee_security_feedback#delete ApigeeSecurityFeedback#delete}. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/apigee_security_feedback#update ApigeeSecurityFeedback#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/apigee_security_feedback#create ApigeeSecurityFeedback#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/apigee_security_feedback#delete ApigeeSecurityFeedback#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/apigee_security_feedback#update ApigeeSecurityFeedback#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApigeeSecurityFeedbackFeedbackContextsList <a name="ApigeeSecurityFeedbackFeedbackContextsList" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/apigeesecurityfeedback"

apigeesecurityfeedback.NewApigeeSecurityFeedbackFeedbackContextsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApigeeSecurityFeedbackFeedbackContextsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsList.get"></a>

```go
func Get(index *f64) ApigeeSecurityFeedbackFeedbackContextsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApigeeSecurityFeedbackFeedbackContextsOutputReference <a name="ApigeeSecurityFeedbackFeedbackContextsOutputReference" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/apigeesecurityfeedback"

apigeesecurityfeedback.NewApigeeSecurityFeedbackFeedbackContextsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApigeeSecurityFeedbackFeedbackContextsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.property.attributeInput">AttributeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.property.attribute">Attribute</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AttributeInput`<sup>Optional</sup> <a name="AttributeInput" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.property.attributeInput"></a>

```go
func AttributeInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Attribute`<sup>Required</sup> <a name="Attribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.property.attribute"></a>

```go
func Attribute() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApigeeSecurityFeedbackTimeoutsOutputReference <a name="ApigeeSecurityFeedbackTimeoutsOutputReference" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/apigeesecurityfeedback"

apigeesecurityfeedback.NewApigeeSecurityFeedbackTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApigeeSecurityFeedbackTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



