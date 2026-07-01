# `bigqueryRoutineIamPolicy` Submodule <a name="`bigqueryRoutineIamPolicy` Submodule" id="@cdktn/provider-google.bigqueryRoutineIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BigqueryRoutineIamPolicy <a name="BigqueryRoutineIamPolicy" id="@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/bigquery_routine_iam_policy google_bigquery_routine_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/bigqueryroutineiampolicy"

bigqueryroutineiampolicy.NewBigqueryRoutineIamPolicy(scope Construct, id *string, config BigqueryRoutineIamPolicyConfig) BigqueryRoutineIamPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicyConfig">BigqueryRoutineIamPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicyConfig">BigqueryRoutineIamPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.resetProject"></a>

```go
func ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a BigqueryRoutineIamPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/bigqueryroutineiampolicy"

bigqueryroutineiampolicy.BigqueryRoutineIamPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/bigqueryroutineiampolicy"

bigqueryroutineiampolicy.BigqueryRoutineIamPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/bigqueryroutineiampolicy"

bigqueryroutineiampolicy.BigqueryRoutineIamPolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/bigqueryroutineiampolicy"

bigqueryroutineiampolicy.BigqueryRoutineIamPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a BigqueryRoutineIamPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the BigqueryRoutineIamPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing BigqueryRoutineIamPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/bigquery_routine_iam_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the BigqueryRoutineIamPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.property.datasetIdInput">DatasetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.property.policyDataInput">PolicyDataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.property.routineIdInput">RoutineIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.property.datasetId">DatasetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.property.policyData">PolicyData</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.property.routineId">RoutineId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `DatasetIdInput`<sup>Optional</sup> <a name="DatasetIdInput" id="@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.property.datasetIdInput"></a>

```go
func DatasetIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PolicyDataInput`<sup>Optional</sup> <a name="PolicyDataInput" id="@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.property.policyDataInput"></a>

```go
func PolicyDataInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RoutineIdInput`<sup>Optional</sup> <a name="RoutineIdInput" id="@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.property.routineIdInput"></a>

```go
func RoutineIdInput() *string
```

- *Type:* *string

---

##### `DatasetId`<sup>Required</sup> <a name="DatasetId" id="@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.property.datasetId"></a>

```go
func DatasetId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PolicyData`<sup>Required</sup> <a name="PolicyData" id="@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.property.policyData"></a>

```go
func PolicyData() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `RoutineId`<sup>Required</sup> <a name="RoutineId" id="@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.property.routineId"></a>

```go
func RoutineId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### BigqueryRoutineIamPolicyConfig <a name="BigqueryRoutineIamPolicyConfig" id="@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicyConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/bigqueryroutineiampolicy"

&bigqueryroutineiampolicy.BigqueryRoutineIamPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	DatasetId: *string,
	PolicyData: *string,
	RoutineId: *string,
	Id: *string,
	Project: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicyConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicyConfig.property.datasetId">DatasetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/bigquery_routine_iam_policy#dataset_id BigqueryRoutineIamPolicy#dataset_id}. |
| <code><a href="#@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicyConfig.property.policyData">PolicyData</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/bigquery_routine_iam_policy#policy_data BigqueryRoutineIamPolicy#policy_data}. |
| <code><a href="#@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicyConfig.property.routineId">RoutineId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/bigquery_routine_iam_policy#routine_id BigqueryRoutineIamPolicy#routine_id}. |
| <code><a href="#@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/bigquery_routine_iam_policy#id BigqueryRoutineIamPolicy#id}. |
| <code><a href="#@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicyConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/bigquery_routine_iam_policy#project BigqueryRoutineIamPolicy#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DatasetId`<sup>Required</sup> <a name="DatasetId" id="@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicyConfig.property.datasetId"></a>

```go
DatasetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/bigquery_routine_iam_policy#dataset_id BigqueryRoutineIamPolicy#dataset_id}.

---

##### `PolicyData`<sup>Required</sup> <a name="PolicyData" id="@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicyConfig.property.policyData"></a>

```go
PolicyData *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/bigquery_routine_iam_policy#policy_data BigqueryRoutineIamPolicy#policy_data}.

---

##### `RoutineId`<sup>Required</sup> <a name="RoutineId" id="@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicyConfig.property.routineId"></a>

```go
RoutineId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/bigquery_routine_iam_policy#routine_id BigqueryRoutineIamPolicy#routine_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/bigquery_routine_iam_policy#id BigqueryRoutineIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.bigqueryRoutineIamPolicy.BigqueryRoutineIamPolicyConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/bigquery_routine_iam_policy#project BigqueryRoutineIamPolicy#project}.

---



