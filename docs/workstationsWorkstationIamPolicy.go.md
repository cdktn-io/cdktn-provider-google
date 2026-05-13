# `workstationsWorkstationIamPolicy` Submodule <a name="`workstationsWorkstationIamPolicy` Submodule" id="@cdktn/provider-google.workstationsWorkstationIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkstationsWorkstationIamPolicy <a name="WorkstationsWorkstationIamPolicy" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/workstations_workstation_iam_policy google_workstations_workstation_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/workstationsworkstationiampolicy"

workstationsworkstationiampolicy.NewWorkstationsWorkstationIamPolicy(scope Construct, id *string, config WorkstationsWorkstationIamPolicyConfig) WorkstationsWorkstationIamPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicyConfig">WorkstationsWorkstationIamPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicyConfig">WorkstationsWorkstationIamPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.resetProject"></a>

```go
func ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a WorkstationsWorkstationIamPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/workstationsworkstationiampolicy"

workstationsworkstationiampolicy.WorkstationsWorkstationIamPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/workstationsworkstationiampolicy"

workstationsworkstationiampolicy.WorkstationsWorkstationIamPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/workstationsworkstationiampolicy"

workstationsworkstationiampolicy.WorkstationsWorkstationIamPolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/workstationsworkstationiampolicy"

workstationsworkstationiampolicy.WorkstationsWorkstationIamPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a WorkstationsWorkstationIamPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the WorkstationsWorkstationIamPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing WorkstationsWorkstationIamPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/workstations_workstation_iam_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the WorkstationsWorkstationIamPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.property.policyDataInput">PolicyDataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.property.workstationClusterIdInput">WorkstationClusterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.property.workstationConfigIdInput">WorkstationConfigIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.property.workstationIdInput">WorkstationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.property.policyData">PolicyData</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.property.workstationClusterId">WorkstationClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.property.workstationConfigId">WorkstationConfigId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.property.workstationId">WorkstationId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `PolicyDataInput`<sup>Optional</sup> <a name="PolicyDataInput" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.property.policyDataInput"></a>

```go
func PolicyDataInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `WorkstationClusterIdInput`<sup>Optional</sup> <a name="WorkstationClusterIdInput" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.property.workstationClusterIdInput"></a>

```go
func WorkstationClusterIdInput() *string
```

- *Type:* *string

---

##### `WorkstationConfigIdInput`<sup>Optional</sup> <a name="WorkstationConfigIdInput" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.property.workstationConfigIdInput"></a>

```go
func WorkstationConfigIdInput() *string
```

- *Type:* *string

---

##### `WorkstationIdInput`<sup>Optional</sup> <a name="WorkstationIdInput" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.property.workstationIdInput"></a>

```go
func WorkstationIdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `PolicyData`<sup>Required</sup> <a name="PolicyData" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.property.policyData"></a>

```go
func PolicyData() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `WorkstationClusterId`<sup>Required</sup> <a name="WorkstationClusterId" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.property.workstationClusterId"></a>

```go
func WorkstationClusterId() *string
```

- *Type:* *string

---

##### `WorkstationConfigId`<sup>Required</sup> <a name="WorkstationConfigId" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.property.workstationConfigId"></a>

```go
func WorkstationConfigId() *string
```

- *Type:* *string

---

##### `WorkstationId`<sup>Required</sup> <a name="WorkstationId" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.property.workstationId"></a>

```go
func WorkstationId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### WorkstationsWorkstationIamPolicyConfig <a name="WorkstationsWorkstationIamPolicyConfig" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicyConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/workstationsworkstationiampolicy"

&workstationsworkstationiampolicy.WorkstationsWorkstationIamPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	PolicyData: *string,
	WorkstationClusterId: *string,
	WorkstationConfigId: *string,
	WorkstationId: *string,
	Id: *string,
	Location: *string,
	Project: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicyConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicyConfig.property.policyData">PolicyData</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/workstations_workstation_iam_policy#policy_data WorkstationsWorkstationIamPolicy#policy_data}. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicyConfig.property.workstationClusterId">WorkstationClusterId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/workstations_workstation_iam_policy#workstation_cluster_id WorkstationsWorkstationIamPolicy#workstation_cluster_id}. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicyConfig.property.workstationConfigId">WorkstationConfigId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/workstations_workstation_iam_policy#workstation_config_id WorkstationsWorkstationIamPolicy#workstation_config_id}. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicyConfig.property.workstationId">WorkstationId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/workstations_workstation_iam_policy#workstation_id WorkstationsWorkstationIamPolicy#workstation_id}. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/workstations_workstation_iam_policy#id WorkstationsWorkstationIamPolicy#id}. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicyConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/workstations_workstation_iam_policy#location WorkstationsWorkstationIamPolicy#location}. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicyConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/workstations_workstation_iam_policy#project WorkstationsWorkstationIamPolicy#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `PolicyData`<sup>Required</sup> <a name="PolicyData" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicyConfig.property.policyData"></a>

```go
PolicyData *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/workstations_workstation_iam_policy#policy_data WorkstationsWorkstationIamPolicy#policy_data}.

---

##### `WorkstationClusterId`<sup>Required</sup> <a name="WorkstationClusterId" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicyConfig.property.workstationClusterId"></a>

```go
WorkstationClusterId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/workstations_workstation_iam_policy#workstation_cluster_id WorkstationsWorkstationIamPolicy#workstation_cluster_id}.

---

##### `WorkstationConfigId`<sup>Required</sup> <a name="WorkstationConfigId" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicyConfig.property.workstationConfigId"></a>

```go
WorkstationConfigId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/workstations_workstation_iam_policy#workstation_config_id WorkstationsWorkstationIamPolicy#workstation_config_id}.

---

##### `WorkstationId`<sup>Required</sup> <a name="WorkstationId" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicyConfig.property.workstationId"></a>

```go
WorkstationId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/workstations_workstation_iam_policy#workstation_id WorkstationsWorkstationIamPolicy#workstation_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/workstations_workstation_iam_policy#id WorkstationsWorkstationIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicyConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/workstations_workstation_iam_policy#location WorkstationsWorkstationIamPolicy#location}.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicyConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/workstations_workstation_iam_policy#project WorkstationsWorkstationIamPolicy#project}.

---



