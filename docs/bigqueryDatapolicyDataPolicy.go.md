# `bigqueryDatapolicyDataPolicy` Submodule <a name="`bigqueryDatapolicyDataPolicy` Submodule" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BigqueryDatapolicyDataPolicy <a name="BigqueryDatapolicyDataPolicy" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/bigquery_datapolicy_data_policy google_bigquery_datapolicy_data_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/bigquerydatapolicydatapolicy"

bigquerydatapolicydatapolicy.NewBigqueryDatapolicyDataPolicy(scope Construct, id *string, config BigqueryDatapolicyDataPolicyConfig) BigqueryDatapolicyDataPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyConfig">BigqueryDatapolicyDataPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyConfig">BigqueryDatapolicyDataPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.putDataMaskingPolicy">PutDataMaskingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.resetDataMaskingPolicy">ResetDataMaskingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDataMaskingPolicy` <a name="PutDataMaskingPolicy" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.putDataMaskingPolicy"></a>

```go
func PutDataMaskingPolicy(value BigqueryDatapolicyDataPolicyDataMaskingPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.putDataMaskingPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicy">BigqueryDatapolicyDataPolicyDataMaskingPolicy</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.putTimeouts"></a>

```go
func PutTimeouts(value BigqueryDatapolicyDataPolicyTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeouts">BigqueryDatapolicyDataPolicyTimeouts</a>

---

##### `ResetDataMaskingPolicy` <a name="ResetDataMaskingPolicy" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.resetDataMaskingPolicy"></a>

```go
func ResetDataMaskingPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a BigqueryDatapolicyDataPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/bigquerydatapolicydatapolicy"

bigquerydatapolicydatapolicy.BigqueryDatapolicyDataPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/bigquerydatapolicydatapolicy"

bigquerydatapolicydatapolicy.BigqueryDatapolicyDataPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/bigquerydatapolicydatapolicy"

bigquerydatapolicydatapolicy.BigqueryDatapolicyDataPolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/bigquerydatapolicydatapolicy"

bigquerydatapolicydatapolicy.BigqueryDatapolicyDataPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a BigqueryDatapolicyDataPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the BigqueryDatapolicyDataPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing BigqueryDatapolicyDataPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/bigquery_datapolicy_data_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the BigqueryDatapolicyDataPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.dataMaskingPolicy">DataMaskingPolicy</a></code> | <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference">BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference">BigqueryDatapolicyDataPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.dataMaskingPolicyInput">DataMaskingPolicyInput</a></code> | <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicy">BigqueryDatapolicyDataPolicyDataMaskingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.dataPolicyIdInput">DataPolicyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.dataPolicyTypeInput">DataPolicyTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.policyTagInput">PolicyTagInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.dataPolicyId">DataPolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.dataPolicyType">DataPolicyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.policyTag">PolicyTag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DataMaskingPolicy`<sup>Required</sup> <a name="DataMaskingPolicy" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.dataMaskingPolicy"></a>

```go
func DataMaskingPolicy() BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference">BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.timeouts"></a>

```go
func Timeouts() BigqueryDatapolicyDataPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference">BigqueryDatapolicyDataPolicyTimeoutsOutputReference</a>

---

##### `DataMaskingPolicyInput`<sup>Optional</sup> <a name="DataMaskingPolicyInput" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.dataMaskingPolicyInput"></a>

```go
func DataMaskingPolicyInput() BigqueryDatapolicyDataPolicyDataMaskingPolicy
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicy">BigqueryDatapolicyDataPolicyDataMaskingPolicy</a>

---

##### `DataPolicyIdInput`<sup>Optional</sup> <a name="DataPolicyIdInput" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.dataPolicyIdInput"></a>

```go
func DataPolicyIdInput() *string
```

- *Type:* *string

---

##### `DataPolicyTypeInput`<sup>Optional</sup> <a name="DataPolicyTypeInput" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.dataPolicyTypeInput"></a>

```go
func DataPolicyTypeInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `PolicyTagInput`<sup>Optional</sup> <a name="PolicyTagInput" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.policyTagInput"></a>

```go
func PolicyTagInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DataPolicyId`<sup>Required</sup> <a name="DataPolicyId" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.dataPolicyId"></a>

```go
func DataPolicyId() *string
```

- *Type:* *string

---

##### `DataPolicyType`<sup>Required</sup> <a name="DataPolicyType" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.dataPolicyType"></a>

```go
func DataPolicyType() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `PolicyTag`<sup>Required</sup> <a name="PolicyTag" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.policyTag"></a>

```go
func PolicyTag() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### BigqueryDatapolicyDataPolicyConfig <a name="BigqueryDatapolicyDataPolicyConfig" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/bigquerydatapolicydatapolicy"

&bigquerydatapolicydatapolicy.BigqueryDatapolicyDataPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	DataPolicyId: *string,
	DataPolicyType: *string,
	Location: *string,
	PolicyTag: *string,
	DataMaskingPolicy: github.com/cdktn-io/cdktn-provider-google-go/google/v19.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicy,
	Id: *string,
	Project: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-google-go/google/v19.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyConfig.property.dataPolicyId">DataPolicyId</a></code> | <code>*string</code> | User-assigned (human readable) ID of the data policy that needs to be unique within a project. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyConfig.property.dataPolicyType">DataPolicyType</a></code> | <code>*string</code> | The enrollment level of the service. Possible values: ["COLUMN_LEVEL_SECURITY_POLICY", "DATA_MASKING_POLICY"]. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyConfig.property.location">Location</a></code> | <code>*string</code> | The name of the location of the data policy. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyConfig.property.policyTag">PolicyTag</a></code> | <code>*string</code> | Policy tag resource name, in the format of projects/{project_number}/locations/{locationId}/taxonomies/{taxonomyId}/policyTags/{policyTag_id}. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyConfig.property.dataMaskingPolicy">DataMaskingPolicy</a></code> | <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicy">BigqueryDatapolicyDataPolicyDataMaskingPolicy</a></code> | data_masking_policy block. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/bigquery_datapolicy_data_policy#id BigqueryDatapolicyDataPolicy#id}. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/bigquery_datapolicy_data_policy#project BigqueryDatapolicyDataPolicy#project}. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeouts">BigqueryDatapolicyDataPolicyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DataPolicyId`<sup>Required</sup> <a name="DataPolicyId" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyConfig.property.dataPolicyId"></a>

```go
DataPolicyId *string
```

- *Type:* *string

User-assigned (human readable) ID of the data policy that needs to be unique within a project.

Used as {dataPolicyId} in part of the resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/bigquery_datapolicy_data_policy#data_policy_id BigqueryDatapolicyDataPolicy#data_policy_id}

---

##### `DataPolicyType`<sup>Required</sup> <a name="DataPolicyType" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyConfig.property.dataPolicyType"></a>

```go
DataPolicyType *string
```

- *Type:* *string

The enrollment level of the service. Possible values: ["COLUMN_LEVEL_SECURITY_POLICY", "DATA_MASKING_POLICY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/bigquery_datapolicy_data_policy#data_policy_type BigqueryDatapolicyDataPolicy#data_policy_type}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The name of the location of the data policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/bigquery_datapolicy_data_policy#location BigqueryDatapolicyDataPolicy#location}

---

##### `PolicyTag`<sup>Required</sup> <a name="PolicyTag" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyConfig.property.policyTag"></a>

```go
PolicyTag *string
```

- *Type:* *string

Policy tag resource name, in the format of projects/{project_number}/locations/{locationId}/taxonomies/{taxonomyId}/policyTags/{policyTag_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/bigquery_datapolicy_data_policy#policy_tag BigqueryDatapolicyDataPolicy#policy_tag}

---

##### `DataMaskingPolicy`<sup>Optional</sup> <a name="DataMaskingPolicy" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyConfig.property.dataMaskingPolicy"></a>

```go
DataMaskingPolicy BigqueryDatapolicyDataPolicyDataMaskingPolicy
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicy">BigqueryDatapolicyDataPolicyDataMaskingPolicy</a>

data_masking_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/bigquery_datapolicy_data_policy#data_masking_policy BigqueryDatapolicyDataPolicy#data_masking_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/bigquery_datapolicy_data_policy#id BigqueryDatapolicyDataPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/bigquery_datapolicy_data_policy#project BigqueryDatapolicyDataPolicy#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyConfig.property.timeouts"></a>

```go
Timeouts BigqueryDatapolicyDataPolicyTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeouts">BigqueryDatapolicyDataPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/bigquery_datapolicy_data_policy#timeouts BigqueryDatapolicyDataPolicy#timeouts}

---

### BigqueryDatapolicyDataPolicyDataMaskingPolicy <a name="BigqueryDatapolicyDataPolicyDataMaskingPolicy" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/bigquerydatapolicydatapolicy"

&bigquerydatapolicydatapolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicy {
	PredefinedExpression: *string,
	Routine: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicy.property.predefinedExpression">PredefinedExpression</a></code> | <code>*string</code> | The available masking rules. Learn more here: https://cloud.google.com/bigquery/docs/column-data-masking-intro#masking_options. Possible values: ["SHA256", "ALWAYS_NULL", "DEFAULT_MASKING_VALUE", "LAST_FOUR_CHARACTERS", "FIRST_FOUR_CHARACTERS", "EMAIL_MASK", "DATE_YEAR_MASK"]. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicy.property.routine">Routine</a></code> | <code>*string</code> | The name of the BigQuery routine that contains the custom masking routine, in the format of projects/{projectNumber}/datasets/{dataset_id}/routines/{routine_id}. |

---

##### `PredefinedExpression`<sup>Optional</sup> <a name="PredefinedExpression" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicy.property.predefinedExpression"></a>

```go
PredefinedExpression *string
```

- *Type:* *string

The available masking rules. Learn more here: https://cloud.google.com/bigquery/docs/column-data-masking-intro#masking_options. Possible values: ["SHA256", "ALWAYS_NULL", "DEFAULT_MASKING_VALUE", "LAST_FOUR_CHARACTERS", "FIRST_FOUR_CHARACTERS", "EMAIL_MASK", "DATE_YEAR_MASK"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/bigquery_datapolicy_data_policy#predefined_expression BigqueryDatapolicyDataPolicy#predefined_expression}

---

##### `Routine`<sup>Optional</sup> <a name="Routine" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicy.property.routine"></a>

```go
Routine *string
```

- *Type:* *string

The name of the BigQuery routine that contains the custom masking routine, in the format of projects/{projectNumber}/datasets/{dataset_id}/routines/{routine_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/bigquery_datapolicy_data_policy#routine BigqueryDatapolicyDataPolicy#routine}

---

### BigqueryDatapolicyDataPolicyTimeouts <a name="BigqueryDatapolicyDataPolicyTimeouts" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/bigquerydatapolicydatapolicy"

&bigquerydatapolicydatapolicy.BigqueryDatapolicyDataPolicyTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/bigquery_datapolicy_data_policy#create BigqueryDatapolicyDataPolicy#create}. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/bigquery_datapolicy_data_policy#delete BigqueryDatapolicyDataPolicy#delete}. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/bigquery_datapolicy_data_policy#update BigqueryDatapolicyDataPolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/bigquery_datapolicy_data_policy#create BigqueryDatapolicyDataPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/bigquery_datapolicy_data_policy#delete BigqueryDatapolicyDataPolicy#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/bigquery_datapolicy_data_policy#update BigqueryDatapolicyDataPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference <a name="BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/bigquerydatapolicydatapolicy"

bigquerydatapolicydatapolicy.NewBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.resetPredefinedExpression">ResetPredefinedExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.resetRoutine">ResetRoutine</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPredefinedExpression` <a name="ResetPredefinedExpression" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.resetPredefinedExpression"></a>

```go
func ResetPredefinedExpression()
```

##### `ResetRoutine` <a name="ResetRoutine" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.resetRoutine"></a>

```go
func ResetRoutine()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.property.predefinedExpressionInput">PredefinedExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.property.routineInput">RoutineInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.property.predefinedExpression">PredefinedExpression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.property.routine">Routine</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicy">BigqueryDatapolicyDataPolicyDataMaskingPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PredefinedExpressionInput`<sup>Optional</sup> <a name="PredefinedExpressionInput" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.property.predefinedExpressionInput"></a>

```go
func PredefinedExpressionInput() *string
```

- *Type:* *string

---

##### `RoutineInput`<sup>Optional</sup> <a name="RoutineInput" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.property.routineInput"></a>

```go
func RoutineInput() *string
```

- *Type:* *string

---

##### `PredefinedExpression`<sup>Required</sup> <a name="PredefinedExpression" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.property.predefinedExpression"></a>

```go
func PredefinedExpression() *string
```

- *Type:* *string

---

##### `Routine`<sup>Required</sup> <a name="Routine" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.property.routine"></a>

```go
func Routine() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() BigqueryDatapolicyDataPolicyDataMaskingPolicy
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicy">BigqueryDatapolicyDataPolicyDataMaskingPolicy</a>

---


### BigqueryDatapolicyDataPolicyTimeoutsOutputReference <a name="BigqueryDatapolicyDataPolicyTimeoutsOutputReference" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/bigquerydatapolicydatapolicy"

bigquerydatapolicydatapolicy.NewBigqueryDatapolicyDataPolicyTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BigqueryDatapolicyDataPolicyTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



