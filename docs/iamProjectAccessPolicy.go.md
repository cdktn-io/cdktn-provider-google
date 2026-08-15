# `iamProjectAccessPolicy` Submodule <a name="`iamProjectAccessPolicy` Submodule" id="@cdktn/provider-google.iamProjectAccessPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IamProjectAccessPolicy <a name="IamProjectAccessPolicy" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_project_access_policy google_iam_project_access_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/iamprojectaccesspolicy"

iamprojectaccesspolicy.NewIamProjectAccessPolicy(scope Construct, id *string, config IamProjectAccessPolicyConfig) IamProjectAccessPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyConfig">IamProjectAccessPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyConfig">IamProjectAccessPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.putDetails">PutDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.resetDetails">ResetDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDetails` <a name="PutDetails" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.putDetails"></a>

```go
func PutDetails(value IamProjectAccessPolicyDetails)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.putDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetails">IamProjectAccessPolicyDetails</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.putTimeouts"></a>

```go
func PutTimeouts(value IamProjectAccessPolicyTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeouts">IamProjectAccessPolicyTimeouts</a>

---

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.resetAnnotations"></a>

```go
func ResetAnnotations()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDetails` <a name="ResetDetails" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.resetDetails"></a>

```go
func ResetDetails()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a IamProjectAccessPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/iamprojectaccesspolicy"

iamprojectaccesspolicy.IamProjectAccessPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/iamprojectaccesspolicy"

iamprojectaccesspolicy.IamProjectAccessPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/iamprojectaccesspolicy"

iamprojectaccesspolicy.IamProjectAccessPolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/iamprojectaccesspolicy"

iamprojectaccesspolicy.IamProjectAccessPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a IamProjectAccessPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the IamProjectAccessPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing IamProjectAccessPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_project_access_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the IamProjectAccessPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.details">Details</a></code> | <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference">IamProjectAccessPolicyDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.effectiveAnnotations">EffectiveAnnotations</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference">IamProjectAccessPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.accessPolicyIdInput">AccessPolicyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.annotationsInput">AnnotationsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.detailsInput">DetailsInput</a></code> | <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetails">IamProjectAccessPolicyDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.accessPolicyId">AccessPolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Details`<sup>Required</sup> <a name="Details" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.details"></a>

```go
func Details() IamProjectAccessPolicyDetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference">IamProjectAccessPolicyDetailsOutputReference</a>

---

##### `EffectiveAnnotations`<sup>Required</sup> <a name="EffectiveAnnotations" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.effectiveAnnotations"></a>

```go
func EffectiveAnnotations() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.timeouts"></a>

```go
func Timeouts() IamProjectAccessPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference">IamProjectAccessPolicyTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `AccessPolicyIdInput`<sup>Optional</sup> <a name="AccessPolicyIdInput" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.accessPolicyIdInput"></a>

```go
func AccessPolicyIdInput() *string
```

- *Type:* *string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.annotationsInput"></a>

```go
func AnnotationsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DetailsInput`<sup>Optional</sup> <a name="DetailsInput" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.detailsInput"></a>

```go
func DetailsInput() IamProjectAccessPolicyDetails
```

- *Type:* <a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetails">IamProjectAccessPolicyDetails</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AccessPolicyId`<sup>Required</sup> <a name="AccessPolicyId" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.accessPolicyId"></a>

```go
func AccessPolicyId() *string
```

- *Type:* *string

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.annotations"></a>

```go
func Annotations() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### IamProjectAccessPolicyConfig <a name="IamProjectAccessPolicyConfig" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/iamprojectaccesspolicy"

&iamprojectaccesspolicy.IamProjectAccessPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AccessPolicyId: *string,
	Location: *string,
	Annotations: *map[string]*string,
	DeletionPolicy: *string,
	Details: github.com/cdktn-io/cdktn-provider-google-go/google/v20.iamProjectAccessPolicy.IamProjectAccessPolicyDetails,
	DisplayName: *string,
	Id: *string,
	Project: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-google-go/google/v20.iamProjectAccessPolicy.IamProjectAccessPolicyTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyConfig.property.accessPolicyId">AccessPolicyId</a></code> | <code>*string</code> | The ID to use for the access policy, which will become the final component of the access policy's resource name. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyConfig.property.location">Location</a></code> | <code>*string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyConfig.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | User defined annotations. See https://google.aip.dev/148#annotations for more details such as format and size limitations. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyConfig.property.details">Details</a></code> | <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetails">IamProjectAccessPolicyDetails</a></code> | details block. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | The description of the access policy. Must be less than or equal to 63 characters. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_project_access_policy#id IamProjectAccessPolicy#id}. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_project_access_policy#project IamProjectAccessPolicy#project}. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeouts">IamProjectAccessPolicyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccessPolicyId`<sup>Required</sup> <a name="AccessPolicyId" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyConfig.property.accessPolicyId"></a>

```go
AccessPolicyId *string
```

- *Type:* *string

The ID to use for the access policy, which will become the final component of the access policy's resource name.

This value must start with a lowercase letter followed by up to 62
lowercase letters, numbers, hyphens, or dots. Pattern,
/a-z{2,62}/.
This value must be unique among all access policies with the same parent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_project_access_policy#access_policy_id IamProjectAccessPolicy#access_policy_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_project_access_policy#location IamProjectAccessPolicy#location}

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyConfig.property.annotations"></a>

```go
Annotations *map[string]*string
```

- *Type:* *map[string]*string

User defined annotations. See https://google.aip.dev/148#annotations for more details such as format and size limitations.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_project_access_policy#annotations IamProjectAccessPolicy#annotations}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_project_access_policy#deletion_policy IamProjectAccessPolicy#deletion_policy}

---

##### `Details`<sup>Optional</sup> <a name="Details" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyConfig.property.details"></a>

```go
Details IamProjectAccessPolicyDetails
```

- *Type:* <a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetails">IamProjectAccessPolicyDetails</a>

details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_project_access_policy#details IamProjectAccessPolicy#details}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

The description of the access policy. Must be less than or equal to 63 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_project_access_policy#display_name IamProjectAccessPolicy#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_project_access_policy#id IamProjectAccessPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_project_access_policy#project IamProjectAccessPolicy#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyConfig.property.timeouts"></a>

```go
Timeouts IamProjectAccessPolicyTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeouts">IamProjectAccessPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_project_access_policy#timeouts IamProjectAccessPolicy#timeouts}

---

### IamProjectAccessPolicyDetails <a name="IamProjectAccessPolicyDetails" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetails.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/iamprojectaccesspolicy"

&iamprojectaccesspolicy.IamProjectAccessPolicyDetails {
	Rules: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetails.property.rules">Rules</a></code> | <code>interface{}</code> | rules block. |

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetails.property.rules"></a>

```go
Rules interface{}
```

- *Type:* interface{}

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_project_access_policy#rules IamProjectAccessPolicy#rules}

---

### IamProjectAccessPolicyDetailsRules <a name="IamProjectAccessPolicyDetailsRules" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRules.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/iamprojectaccesspolicy"

&iamprojectaccesspolicy.IamProjectAccessPolicyDetailsRules {
	Effect: *string,
	Operation: github.com/cdktn-io/cdktn-provider-google-go/google/v20.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperation,
	Principals: *[]*string,
	Conditions: interface{},
	Description: *string,
	ExcludedPrincipals: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRules.property.effect">Effect</a></code> | <code>*string</code> | The effect of the rule. Possible values: DENY ALLOW Possible values: ["DENY", "ALLOW"]. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRules.property.operation">Operation</a></code> | <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperation">IamProjectAccessPolicyDetailsRulesOperation</a></code> | operation block. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRules.property.principals">Principals</a></code> | <code>*[]*string</code> | The identities for which this rule's effect governs using one or more permissions on Google Cloud resources. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRules.property.conditions">Conditions</a></code> | <code>interface{}</code> | conditions block. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRules.property.description">Description</a></code> | <code>*string</code> | Customer specified description of the rule. Must be less than or equal to 256 characters. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRules.property.excludedPrincipals">ExcludedPrincipals</a></code> | <code>*[]*string</code> | The identities that are excluded from the access policy rule, even if they are listed in the 'principals'. |

---

##### `Effect`<sup>Required</sup> <a name="Effect" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRules.property.effect"></a>

```go
Effect *string
```

- *Type:* *string

The effect of the rule. Possible values: DENY ALLOW Possible values: ["DENY", "ALLOW"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_project_access_policy#effect IamProjectAccessPolicy#effect}

---

##### `Operation`<sup>Required</sup> <a name="Operation" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRules.property.operation"></a>

```go
Operation IamProjectAccessPolicyDetailsRulesOperation
```

- *Type:* <a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperation">IamProjectAccessPolicyDetailsRulesOperation</a>

operation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_project_access_policy#operation IamProjectAccessPolicy#operation}

---

##### `Principals`<sup>Required</sup> <a name="Principals" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRules.property.principals"></a>

```go
Principals *[]*string
```

- *Type:* *[]*string

The identities for which this rule's effect governs using one or more permissions on Google Cloud resources.

This field can contain the
following values:

* 'principal://goog/subject/{email_id}': A specific Google Account.
  Includes Gmail, Cloud Identity, and Google Workspace user accounts. For
  example, 'principal://goog/subject/alice@example.com'.
* 'principal://iam.googleapis.com/projects/-/serviceAccounts/{service_account_id}':
  A Google Cloud service account. For example,
  'principal://iam.googleapis.com/projects/-/serviceAccounts/my-service-account@iam.gserviceaccount.com'.
* 'principalSet://goog/group/{group_id}': A Google group. For example,
  'principalSet://goog/group/admins@example.com'.
* 'principalSet://goog/cloudIdentityCustomerId/{customer_id}': All of the
  principals associated with the specified Google Workspace or Cloud
  Identity customer ID. For example,
  'principalSet://goog/cloudIdentityCustomerId/C01Abc35'.
  If an identifier that was previously set on a policy is soft deleted, then
  calls to read that policy will return the identifier with a deleted
  prefix. Users cannot set identifiers with this syntax.
* 'deleted:principal://goog/subject/{email_id}?uid={uid}': A specific
  Google Account that was deleted recently. For example,
  'deleted:principal://goog/subject/alice@example.com?uid=1234567890'. If
  the Google Account is recovered, this identifier reverts to the standard
  identifier for a Google Account.
* 'deleted:principalSet://goog/group/{group_id}?uid={uid}': A Google group
  that was deleted recently. For example,
  'deleted:principalSet://goog/group/admins@example.com?uid=1234567890'.
  If the Google group is restored, this identifier reverts to the standard
  identifier for a Google group.
* 'deleted:principal://iam.googleapis.com/projects/-/serviceAccounts/{service_account_id}?uid={uid}':
  A Google Cloud service account that was deleted recently. For example,
  'deleted:principal://iam.googleapis.com/projects/-/serviceAccounts/my-service-account@iam.gserviceaccount.com?uid=1234567890'.
  If the service account is undeleted, this identifier reverts to the
  standard identifier for a service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_project_access_policy#principals IamProjectAccessPolicy#principals}

---

##### `Conditions`<sup>Optional</sup> <a name="Conditions" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRules.property.conditions"></a>

```go
Conditions interface{}
```

- *Type:* interface{}

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_project_access_policy#conditions IamProjectAccessPolicy#conditions}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRules.property.description"></a>

```go
Description *string
```

- *Type:* *string

Customer specified description of the rule. Must be less than or equal to 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_project_access_policy#description IamProjectAccessPolicy#description}

---

##### `ExcludedPrincipals`<sup>Optional</sup> <a name="ExcludedPrincipals" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRules.property.excludedPrincipals"></a>

```go
ExcludedPrincipals *[]*string
```

- *Type:* *[]*string

The identities that are excluded from the access policy rule, even if they are listed in the 'principals'.

For example, you could add a Google
group to the 'principals', then exclude specific users who belong to
that group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_project_access_policy#excluded_principals IamProjectAccessPolicy#excluded_principals}

---

### IamProjectAccessPolicyDetailsRulesConditions <a name="IamProjectAccessPolicyDetailsRulesConditions" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/iamprojectaccesspolicy"

&iamprojectaccesspolicy.IamProjectAccessPolicyDetailsRulesConditions {
	Service: *string,
	Expression: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditions.property.service">Service</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_project_access_policy#service IamProjectAccessPolicy#service}. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditions.property.expression">Expression</a></code> | <code>*string</code> | Textual representation of an expression in Common Expression Language syntax. |

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditions.property.service"></a>

```go
Service *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_project_access_policy#service IamProjectAccessPolicy#service}.

---

##### `Expression`<sup>Optional</sup> <a name="Expression" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditions.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_project_access_policy#expression IamProjectAccessPolicy#expression}

---

### IamProjectAccessPolicyDetailsRulesOperation <a name="IamProjectAccessPolicyDetailsRulesOperation" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/iamprojectaccesspolicy"

&iamprojectaccesspolicy.IamProjectAccessPolicyDetailsRulesOperation {
	Permissions: *[]*string,
	ExcludedPermissions: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperation.property.permissions">Permissions</a></code> | <code>*[]*string</code> | The permissions that are explicitly affected by this rule. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperation.property.excludedPermissions">ExcludedPermissions</a></code> | <code>*[]*string</code> | Specifies the permissions that this rule excludes from the set of affected permissions given by 'permissions'. |

---

##### `Permissions`<sup>Required</sup> <a name="Permissions" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperation.property.permissions"></a>

```go
Permissions *[]*string
```

- *Type:* *[]*string

The permissions that are explicitly affected by this rule.

Each
permission uses the format '{service_fqdn}/{resource}.{verb}', where
'{service_fqdn}' is the fully qualified domain name for the service.
Currently supported permissions are as follows:

* 'eventarc.googleapis.com/messageBuses.publish'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_project_access_policy#permissions IamProjectAccessPolicy#permissions}

---

##### `ExcludedPermissions`<sup>Optional</sup> <a name="ExcludedPermissions" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperation.property.excludedPermissions"></a>

```go
ExcludedPermissions *[]*string
```

- *Type:* *[]*string

Specifies the permissions that this rule excludes from the set of affected permissions given by 'permissions'.

If a permission appears in
'permissions' *and* in 'excluded_permissions' then it will *not* be
subject to the policy effect.
The excluded permissions can be specified using the same syntax as
'permissions'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_project_access_policy#excluded_permissions IamProjectAccessPolicy#excluded_permissions}

---

### IamProjectAccessPolicyTimeouts <a name="IamProjectAccessPolicyTimeouts" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/iamprojectaccesspolicy"

&iamprojectaccesspolicy.IamProjectAccessPolicyTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_project_access_policy#create IamProjectAccessPolicy#create}. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_project_access_policy#delete IamProjectAccessPolicy#delete}. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_project_access_policy#update IamProjectAccessPolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_project_access_policy#create IamProjectAccessPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_project_access_policy#delete IamProjectAccessPolicy#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_project_access_policy#update IamProjectAccessPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IamProjectAccessPolicyDetailsOutputReference <a name="IamProjectAccessPolicyDetailsOutputReference" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/iamprojectaccesspolicy"

iamprojectaccesspolicy.NewIamProjectAccessPolicyDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IamProjectAccessPolicyDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.putRules">PutRules</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRules` <a name="PutRules" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.putRules"></a>

```go
func PutRules(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.putRules.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.property.rules">Rules</a></code> | <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesList">IamProjectAccessPolicyDetailsRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.property.rulesInput">RulesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetails">IamProjectAccessPolicyDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.property.rules"></a>

```go
func Rules() IamProjectAccessPolicyDetailsRulesList
```

- *Type:* <a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesList">IamProjectAccessPolicyDetailsRulesList</a>

---

##### `RulesInput`<sup>Optional</sup> <a name="RulesInput" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.property.rulesInput"></a>

```go
func RulesInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() IamProjectAccessPolicyDetails
```

- *Type:* <a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetails">IamProjectAccessPolicyDetails</a>

---


### IamProjectAccessPolicyDetailsRulesConditionsList <a name="IamProjectAccessPolicyDetailsRulesConditionsList" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/iamprojectaccesspolicy"

iamprojectaccesspolicy.NewIamProjectAccessPolicyDetailsRulesConditionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IamProjectAccessPolicyDetailsRulesConditionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsList.get"></a>

```go
func Get(index *f64) IamProjectAccessPolicyDetailsRulesConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IamProjectAccessPolicyDetailsRulesConditionsOutputReference <a name="IamProjectAccessPolicyDetailsRulesConditionsOutputReference" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/iamprojectaccesspolicy"

iamprojectaccesspolicy.NewIamProjectAccessPolicyDetailsRulesConditionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IamProjectAccessPolicyDetailsRulesConditionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.resetExpression">ResetExpression</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExpression` <a name="ResetExpression" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.resetExpression"></a>

```go
func ResetExpression()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.property.serviceInput">ServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.property.service">Service</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.property.serviceInput"></a>

```go
func ServiceInput() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.property.service"></a>

```go
func Service() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IamProjectAccessPolicyDetailsRulesList <a name="IamProjectAccessPolicyDetailsRulesList" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/iamprojectaccesspolicy"

iamprojectaccesspolicy.NewIamProjectAccessPolicyDetailsRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IamProjectAccessPolicyDetailsRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesList.get"></a>

```go
func Get(index *f64) IamProjectAccessPolicyDetailsRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IamProjectAccessPolicyDetailsRulesOperationOutputReference <a name="IamProjectAccessPolicyDetailsRulesOperationOutputReference" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/iamprojectaccesspolicy"

iamprojectaccesspolicy.NewIamProjectAccessPolicyDetailsRulesOperationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IamProjectAccessPolicyDetailsRulesOperationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.resetExcludedPermissions">ResetExcludedPermissions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExcludedPermissions` <a name="ResetExcludedPermissions" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.resetExcludedPermissions"></a>

```go
func ResetExcludedPermissions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.property.excludedPermissionsInput">ExcludedPermissionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.property.permissionsInput">PermissionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.property.excludedPermissions">ExcludedPermissions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.property.permissions">Permissions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperation">IamProjectAccessPolicyDetailsRulesOperation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExcludedPermissionsInput`<sup>Optional</sup> <a name="ExcludedPermissionsInput" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.property.excludedPermissionsInput"></a>

```go
func ExcludedPermissionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `PermissionsInput`<sup>Optional</sup> <a name="PermissionsInput" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.property.permissionsInput"></a>

```go
func PermissionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ExcludedPermissions`<sup>Required</sup> <a name="ExcludedPermissions" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.property.excludedPermissions"></a>

```go
func ExcludedPermissions() *[]*string
```

- *Type:* *[]*string

---

##### `Permissions`<sup>Required</sup> <a name="Permissions" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.property.permissions"></a>

```go
func Permissions() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.property.internalValue"></a>

```go
func InternalValue() IamProjectAccessPolicyDetailsRulesOperation
```

- *Type:* <a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperation">IamProjectAccessPolicyDetailsRulesOperation</a>

---


### IamProjectAccessPolicyDetailsRulesOutputReference <a name="IamProjectAccessPolicyDetailsRulesOutputReference" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/iamprojectaccesspolicy"

iamprojectaccesspolicy.NewIamProjectAccessPolicyDetailsRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IamProjectAccessPolicyDetailsRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.putConditions">PutConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.putOperation">PutOperation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.resetConditions">ResetConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.resetExcludedPrincipals">ResetExcludedPrincipals</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConditions` <a name="PutConditions" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.putConditions"></a>

```go
func PutConditions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.putConditions.parameter.value"></a>

- *Type:* interface{}

---

##### `PutOperation` <a name="PutOperation" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.putOperation"></a>

```go
func PutOperation(value IamProjectAccessPolicyDetailsRulesOperation)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.putOperation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperation">IamProjectAccessPolicyDetailsRulesOperation</a>

---

##### `ResetConditions` <a name="ResetConditions" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.resetConditions"></a>

```go
func ResetConditions()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetExcludedPrincipals` <a name="ResetExcludedPrincipals" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.resetExcludedPrincipals"></a>

```go
func ResetExcludedPrincipals()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.property.conditions">Conditions</a></code> | <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsList">IamProjectAccessPolicyDetailsRulesConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.property.operation">Operation</a></code> | <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference">IamProjectAccessPolicyDetailsRulesOperationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.property.conditionsInput">ConditionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.property.effectInput">EffectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.property.excludedPrincipalsInput">ExcludedPrincipalsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.property.operationInput">OperationInput</a></code> | <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperation">IamProjectAccessPolicyDetailsRulesOperation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.property.principalsInput">PrincipalsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.property.effect">Effect</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.property.excludedPrincipals">ExcludedPrincipals</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.property.principals">Principals</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.property.conditions"></a>

```go
func Conditions() IamProjectAccessPolicyDetailsRulesConditionsList
```

- *Type:* <a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsList">IamProjectAccessPolicyDetailsRulesConditionsList</a>

---

##### `Operation`<sup>Required</sup> <a name="Operation" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.property.operation"></a>

```go
func Operation() IamProjectAccessPolicyDetailsRulesOperationOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference">IamProjectAccessPolicyDetailsRulesOperationOutputReference</a>

---

##### `ConditionsInput`<sup>Optional</sup> <a name="ConditionsInput" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.property.conditionsInput"></a>

```go
func ConditionsInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EffectInput`<sup>Optional</sup> <a name="EffectInput" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.property.effectInput"></a>

```go
func EffectInput() *string
```

- *Type:* *string

---

##### `ExcludedPrincipalsInput`<sup>Optional</sup> <a name="ExcludedPrincipalsInput" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.property.excludedPrincipalsInput"></a>

```go
func ExcludedPrincipalsInput() *[]*string
```

- *Type:* *[]*string

---

##### `OperationInput`<sup>Optional</sup> <a name="OperationInput" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.property.operationInput"></a>

```go
func OperationInput() IamProjectAccessPolicyDetailsRulesOperation
```

- *Type:* <a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperation">IamProjectAccessPolicyDetailsRulesOperation</a>

---

##### `PrincipalsInput`<sup>Optional</sup> <a name="PrincipalsInput" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.property.principalsInput"></a>

```go
func PrincipalsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Effect`<sup>Required</sup> <a name="Effect" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.property.effect"></a>

```go
func Effect() *string
```

- *Type:* *string

---

##### `ExcludedPrincipals`<sup>Required</sup> <a name="ExcludedPrincipals" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.property.excludedPrincipals"></a>

```go
func ExcludedPrincipals() *[]*string
```

- *Type:* *[]*string

---

##### `Principals`<sup>Required</sup> <a name="Principals" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.property.principals"></a>

```go
func Principals() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IamProjectAccessPolicyTimeoutsOutputReference <a name="IamProjectAccessPolicyTimeoutsOutputReference" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/iamprojectaccesspolicy"

iamprojectaccesspolicy.NewIamProjectAccessPolicyTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IamProjectAccessPolicyTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



