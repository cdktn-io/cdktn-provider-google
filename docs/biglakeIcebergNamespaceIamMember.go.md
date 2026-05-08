# `biglakeIcebergNamespaceIamMember` Submodule <a name="`biglakeIcebergNamespaceIamMember` Submodule" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BiglakeIcebergNamespaceIamMember <a name="BiglakeIcebergNamespaceIamMember" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/biglake_iceberg_namespace_iam_member google_biglake_iceberg_namespace_iam_member}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/biglakeicebergnamespaceiammember"

biglakeicebergnamespaceiammember.NewBiglakeIcebergNamespaceIamMember(scope Construct, id *string, config BiglakeIcebergNamespaceIamMemberConfig) BiglakeIcebergNamespaceIamMember
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMemberConfig">BiglakeIcebergNamespaceIamMemberConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMemberConfig">BiglakeIcebergNamespaceIamMemberConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCondition` <a name="PutCondition" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.putCondition"></a>

```go
func PutCondition(value BiglakeIcebergNamespaceIamMemberCondition)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMemberCondition">BiglakeIcebergNamespaceIamMemberCondition</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.resetCondition"></a>

```go
func ResetCondition()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.resetProject"></a>

```go
func ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a BiglakeIcebergNamespaceIamMember resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/biglakeicebergnamespaceiammember"

biglakeicebergnamespaceiammember.BiglakeIcebergNamespaceIamMember_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/biglakeicebergnamespaceiammember"

biglakeicebergnamespaceiammember.BiglakeIcebergNamespaceIamMember_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/biglakeicebergnamespaceiammember"

biglakeicebergnamespaceiammember.BiglakeIcebergNamespaceIamMember_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/biglakeicebergnamespaceiammember"

biglakeicebergnamespaceiammember.BiglakeIcebergNamespaceIamMember_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a BiglakeIcebergNamespaceIamMember resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the BiglakeIcebergNamespaceIamMember to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing BiglakeIcebergNamespaceIamMember that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/biglake_iceberg_namespace_iam_member#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the BiglakeIcebergNamespaceIamMember to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.property.condition">Condition</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMemberConditionOutputReference">BiglakeIcebergNamespaceIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.property.catalogInput">CatalogInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMemberCondition">BiglakeIcebergNamespaceIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.property.memberInput">MemberInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.property.namespaceIdInput">NamespaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.property.roleInput">RoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.property.catalog">Catalog</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.property.member">Member</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.property.namespaceId">NamespaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.property.role">Role</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.property.condition"></a>

```go
func Condition() BiglakeIcebergNamespaceIamMemberConditionOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMemberConditionOutputReference">BiglakeIcebergNamespaceIamMemberConditionOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `CatalogInput`<sup>Optional</sup> <a name="CatalogInput" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.property.catalogInput"></a>

```go
func CatalogInput() *string
```

- *Type:* *string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.property.conditionInput"></a>

```go
func ConditionInput() BiglakeIcebergNamespaceIamMemberCondition
```

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMemberCondition">BiglakeIcebergNamespaceIamMemberCondition</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MemberInput`<sup>Optional</sup> <a name="MemberInput" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.property.memberInput"></a>

```go
func MemberInput() *string
```

- *Type:* *string

---

##### `NamespaceIdInput`<sup>Optional</sup> <a name="NamespaceIdInput" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.property.namespaceIdInput"></a>

```go
func NamespaceIdInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.property.roleInput"></a>

```go
func RoleInput() *string
```

- *Type:* *string

---

##### `Catalog`<sup>Required</sup> <a name="Catalog" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.property.catalog"></a>

```go
func Catalog() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Member`<sup>Required</sup> <a name="Member" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.property.member"></a>

```go
func Member() *string
```

- *Type:* *string

---

##### `NamespaceId`<sup>Required</sup> <a name="NamespaceId" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.property.namespaceId"></a>

```go
func NamespaceId() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMember.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### BiglakeIcebergNamespaceIamMemberCondition <a name="BiglakeIcebergNamespaceIamMemberCondition" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMemberCondition.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/biglakeicebergnamespaceiammember"

&biglakeicebergnamespaceiammember.BiglakeIcebergNamespaceIamMemberCondition {
	Expression: *string,
	Title: *string,
	Description: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMemberCondition.property.expression">Expression</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/biglake_iceberg_namespace_iam_member#expression BiglakeIcebergNamespaceIamMember#expression}. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMemberCondition.property.title">Title</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/biglake_iceberg_namespace_iam_member#title BiglakeIcebergNamespaceIamMember#title}. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMemberCondition.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/biglake_iceberg_namespace_iam_member#description BiglakeIcebergNamespaceIamMember#description}. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMemberCondition.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/biglake_iceberg_namespace_iam_member#expression BiglakeIcebergNamespaceIamMember#expression}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMemberCondition.property.title"></a>

```go
Title *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/biglake_iceberg_namespace_iam_member#title BiglakeIcebergNamespaceIamMember#title}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMemberCondition.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/biglake_iceberg_namespace_iam_member#description BiglakeIcebergNamespaceIamMember#description}.

---

### BiglakeIcebergNamespaceIamMemberConfig <a name="BiglakeIcebergNamespaceIamMemberConfig" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMemberConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/biglakeicebergnamespaceiammember"

&biglakeicebergnamespaceiammember.BiglakeIcebergNamespaceIamMemberConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Catalog: *string,
	Member: *string,
	NamespaceId: *string,
	Role: *string,
	Condition: github.com/cdktn-io/cdktn-provider-google-go/google/v19.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMemberCondition,
	Id: *string,
	Project: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMemberConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMemberConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMemberConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMemberConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMemberConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMemberConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMemberConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMemberConfig.property.catalog">Catalog</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/biglake_iceberg_namespace_iam_member#catalog BiglakeIcebergNamespaceIamMember#catalog}. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMemberConfig.property.member">Member</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/biglake_iceberg_namespace_iam_member#member BiglakeIcebergNamespaceIamMember#member}. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMemberConfig.property.namespaceId">NamespaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/biglake_iceberg_namespace_iam_member#namespace_id BiglakeIcebergNamespaceIamMember#namespace_id}. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMemberConfig.property.role">Role</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/biglake_iceberg_namespace_iam_member#role BiglakeIcebergNamespaceIamMember#role}. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMemberConfig.property.condition">Condition</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMemberCondition">BiglakeIcebergNamespaceIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMemberConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/biglake_iceberg_namespace_iam_member#id BiglakeIcebergNamespaceIamMember#id}. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMemberConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/biglake_iceberg_namespace_iam_member#project BiglakeIcebergNamespaceIamMember#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMemberConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMemberConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMemberConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMemberConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMemberConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMemberConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMemberConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Catalog`<sup>Required</sup> <a name="Catalog" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMemberConfig.property.catalog"></a>

```go
Catalog *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/biglake_iceberg_namespace_iam_member#catalog BiglakeIcebergNamespaceIamMember#catalog}.

---

##### `Member`<sup>Required</sup> <a name="Member" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMemberConfig.property.member"></a>

```go
Member *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/biglake_iceberg_namespace_iam_member#member BiglakeIcebergNamespaceIamMember#member}.

---

##### `NamespaceId`<sup>Required</sup> <a name="NamespaceId" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMemberConfig.property.namespaceId"></a>

```go
NamespaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/biglake_iceberg_namespace_iam_member#namespace_id BiglakeIcebergNamespaceIamMember#namespace_id}.

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMemberConfig.property.role"></a>

```go
Role *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/biglake_iceberg_namespace_iam_member#role BiglakeIcebergNamespaceIamMember#role}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMemberConfig.property.condition"></a>

```go
Condition BiglakeIcebergNamespaceIamMemberCondition
```

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMemberCondition">BiglakeIcebergNamespaceIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/biglake_iceberg_namespace_iam_member#condition BiglakeIcebergNamespaceIamMember#condition}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMemberConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/biglake_iceberg_namespace_iam_member#id BiglakeIcebergNamespaceIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMemberConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/biglake_iceberg_namespace_iam_member#project BiglakeIcebergNamespaceIamMember#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### BiglakeIcebergNamespaceIamMemberConditionOutputReference <a name="BiglakeIcebergNamespaceIamMemberConditionOutputReference" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMemberConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/biglakeicebergnamespaceiammember"

biglakeicebergnamespaceiammember.NewBiglakeIcebergNamespaceIamMemberConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BiglakeIcebergNamespaceIamMemberConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMemberConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMemberConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMemberConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMemberConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMemberConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMemberConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMemberConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMemberConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMemberConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMemberConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMemberConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMemberConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMemberConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMemberConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMemberConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMemberConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMemberConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMemberConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMemberConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMemberConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMemberConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMemberConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMemberConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMemberConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMemberConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMemberConditionOutputReference.resetDescription"></a>

```go
func ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMemberConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMemberConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMemberConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMemberConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMemberConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMemberConditionOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMemberConditionOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMemberConditionOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMemberConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMemberCondition">BiglakeIcebergNamespaceIamMemberCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMemberConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMemberConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMemberConditionOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMemberConditionOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMemberConditionOutputReference.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMemberConditionOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMemberConditionOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMemberConditionOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMemberConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() BiglakeIcebergNamespaceIamMemberCondition
```

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergNamespaceIamMember.BiglakeIcebergNamespaceIamMemberCondition">BiglakeIcebergNamespaceIamMemberCondition</a>

---



