# `firebaseAppCheckResourcePolicy` Submodule <a name="`firebaseAppCheckResourcePolicy` Submodule" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FirebaseAppCheckResourcePolicy <a name="FirebaseAppCheckResourcePolicy" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/firebase_app_check_resource_policy google_firebase_app_check_resource_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/firebaseappcheckresourcepolicy"

firebaseappcheckresourcepolicy.NewFirebaseAppCheckResourcePolicy(scope Construct, id *string, config FirebaseAppCheckResourcePolicyConfig) FirebaseAppCheckResourcePolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicyConfig">FirebaseAppCheckResourcePolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicyConfig">FirebaseAppCheckResourcePolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.resetEnforcementMode">ResetEnforcementMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.putTimeouts"></a>

```go
func PutTimeouts(value FirebaseAppCheckResourcePolicyTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicyTimeouts">FirebaseAppCheckResourcePolicyTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetEnforcementMode` <a name="ResetEnforcementMode" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.resetEnforcementMode"></a>

```go
func ResetEnforcementMode()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a FirebaseAppCheckResourcePolicy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/firebaseappcheckresourcepolicy"

firebaseappcheckresourcepolicy.FirebaseAppCheckResourcePolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/firebaseappcheckresourcepolicy"

firebaseappcheckresourcepolicy.FirebaseAppCheckResourcePolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/firebaseappcheckresourcepolicy"

firebaseappcheckresourcepolicy.FirebaseAppCheckResourcePolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/firebaseappcheckresourcepolicy"

firebaseappcheckresourcepolicy.FirebaseAppCheckResourcePolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a FirebaseAppCheckResourcePolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the FirebaseAppCheckResourcePolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing FirebaseAppCheckResourcePolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/firebase_app_check_resource_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the FirebaseAppCheckResourcePolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.property.resourcePolicyId">ResourcePolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicyTimeoutsOutputReference">FirebaseAppCheckResourcePolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.property.enforcementModeInput">EnforcementModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.property.serviceIdInput">ServiceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.property.targetResourceInput">TargetResourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.property.enforcementMode">EnforcementMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.property.serviceId">ServiceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.property.targetResource">TargetResource</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `ResourcePolicyId`<sup>Required</sup> <a name="ResourcePolicyId" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.property.resourcePolicyId"></a>

```go
func ResourcePolicyId() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.property.timeouts"></a>

```go
func Timeouts() FirebaseAppCheckResourcePolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicyTimeoutsOutputReference">FirebaseAppCheckResourcePolicyTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `EnforcementModeInput`<sup>Optional</sup> <a name="EnforcementModeInput" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.property.enforcementModeInput"></a>

```go
func EnforcementModeInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `ServiceIdInput`<sup>Optional</sup> <a name="ServiceIdInput" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.property.serviceIdInput"></a>

```go
func ServiceIdInput() *string
```

- *Type:* *string

---

##### `TargetResourceInput`<sup>Optional</sup> <a name="TargetResourceInput" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.property.targetResourceInput"></a>

```go
func TargetResourceInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `EnforcementMode`<sup>Required</sup> <a name="EnforcementMode" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.property.enforcementMode"></a>

```go
func EnforcementMode() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `ServiceId`<sup>Required</sup> <a name="ServiceId" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.property.serviceId"></a>

```go
func ServiceId() *string
```

- *Type:* *string

---

##### `TargetResource`<sup>Required</sup> <a name="TargetResource" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.property.targetResource"></a>

```go
func TargetResource() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### FirebaseAppCheckResourcePolicyConfig <a name="FirebaseAppCheckResourcePolicyConfig" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicyConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/firebaseappcheckresourcepolicy"

&firebaseappcheckresourcepolicy.FirebaseAppCheckResourcePolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ServiceId: *string,
	TargetResource: *string,
	DeletionPolicy: *string,
	EnforcementMode: *string,
	Id: *string,
	Project: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-google-go/google/v19.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicyTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicyConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicyConfig.property.serviceId">ServiceId</a></code> | <code>*string</code> | The identifier of the service to configure a Resource Policy for. |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicyConfig.property.targetResource">TargetResource</a></code> | <code>*string</code> | Service specific name of the resource object to which this policy applies, in the format: * iOS OAuth clients (Google Identity for iOS):   '//oauth2.googleapis.com/projects/{project_number}/oauthClients/{oauthClientId}'. |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicyConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicyConfig.property.enforcementMode">EnforcementMode</a></code> | <code>*string</code> | The App Check enforcement mode for a service supported by App Check. |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/firebase_app_check_resource_policy#id FirebaseAppCheckResourcePolicy#id}. |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicyConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/firebase_app_check_resource_policy#project FirebaseAppCheckResourcePolicy#project}. |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicyTimeouts">FirebaseAppCheckResourcePolicyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ServiceId`<sup>Required</sup> <a name="ServiceId" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicyConfig.property.serviceId"></a>

```go
ServiceId *string
```

- *Type:* *string

The identifier of the service to configure a Resource Policy for.

Currently, the following service IDs are supported:

* 'oauth2.googleapis.com' (Google Identity for iOS)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/firebase_app_check_resource_policy#service_id FirebaseAppCheckResourcePolicy#service_id}

---

##### `TargetResource`<sup>Required</sup> <a name="TargetResource" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicyConfig.property.targetResource"></a>

```go
TargetResource *string
```

- *Type:* *string

Service specific name of the resource object to which this policy applies, in the format: * iOS OAuth clients (Google Identity for iOS):   '//oauth2.googleapis.com/projects/{project_number}/oauthClients/{oauthClientId}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/firebase_app_check_resource_policy#target_resource FirebaseAppCheckResourcePolicy#target_resource}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicyConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/firebase_app_check_resource_policy#deletion_policy FirebaseAppCheckResourcePolicy#deletion_policy}

---

##### `EnforcementMode`<sup>Optional</sup> <a name="EnforcementMode" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicyConfig.property.enforcementMode"></a>

```go
EnforcementMode *string
```

- *Type:* *string

The App Check enforcement mode for a service supported by App Check.

This will override the EnforcementMode setting on the service.
Valid values are:

(Unset)
Firebase App Check is not enforced for the service, nor are App Check metrics collected.
Though the service is not protected by App Check in this mode, other applicable protections,
such as user authorization, are still enforced. An unconfigured service is in this mode by default.
This is equivalent to OFF in the REST API. Deleting the Terraform resource will also switch the
enforcement to OFF for this service.

UNENFORCED
Firebase App Check is not enforced for the service. App Check metrics are collected to help you
decide when to turn on enforcement for the service. Though the service is not protected by App Check
in this mode, other applicable protections, such as user authorization, are still enforced.

ENFORCED
Firebase App Check is enforced for the service. The service will reject any request that attempts to
access your project's resources if it does not have valid App Check token attached, with some exceptions
depending on the service; for example, some services will still allow requests bearing the developer's
privileged service account credentials without an App Check token. App Check metrics continue to be
collected to help you detect issues with your App Check integration and monitor the composition of your
callers. While the service is protected by App Check, other applicable protections, such as user
authorization, continue to be enforced at the same time.

Use caution when choosing to enforce App Check on a Firebase service. If your users have not updated
to an App Check capable version of your app, their apps will no longer be able to use your Firebase
services that are enforcing App Check. App Check metrics can help you decide whether to enforce App
Check on your Firebase services.

If your app has not launched yet, you should enable enforcement immediately, since there are no outdated
clients in use. Possible values: ["UNENFORCED", "ENFORCED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/firebase_app_check_resource_policy#enforcement_mode FirebaseAppCheckResourcePolicy#enforcement_mode}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/firebase_app_check_resource_policy#id FirebaseAppCheckResourcePolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicyConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/firebase_app_check_resource_policy#project FirebaseAppCheckResourcePolicy#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicyConfig.property.timeouts"></a>

```go
Timeouts FirebaseAppCheckResourcePolicyTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicyTimeouts">FirebaseAppCheckResourcePolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/firebase_app_check_resource_policy#timeouts FirebaseAppCheckResourcePolicy#timeouts}

---

### FirebaseAppCheckResourcePolicyTimeouts <a name="FirebaseAppCheckResourcePolicyTimeouts" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicyTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/firebaseappcheckresourcepolicy"

&firebaseappcheckresourcepolicy.FirebaseAppCheckResourcePolicyTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicyTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/firebase_app_check_resource_policy#create FirebaseAppCheckResourcePolicy#create}. |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicyTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/firebase_app_check_resource_policy#delete FirebaseAppCheckResourcePolicy#delete}. |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicyTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/firebase_app_check_resource_policy#update FirebaseAppCheckResourcePolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicyTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/firebase_app_check_resource_policy#create FirebaseAppCheckResourcePolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicyTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/firebase_app_check_resource_policy#delete FirebaseAppCheckResourcePolicy#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicyTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/firebase_app_check_resource_policy#update FirebaseAppCheckResourcePolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FirebaseAppCheckResourcePolicyTimeoutsOutputReference <a name="FirebaseAppCheckResourcePolicyTimeoutsOutputReference" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicyTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/firebaseappcheckresourcepolicy"

firebaseappcheckresourcepolicy.NewFirebaseAppCheckResourcePolicyTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FirebaseAppCheckResourcePolicyTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicyTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicyTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicyTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicyTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicyTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicyTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicyTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicyTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicyTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicyTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicyTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicyTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicyTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicyTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicyTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicyTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicyTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.firebaseAppCheckResourcePolicy.FirebaseAppCheckResourcePolicyTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



