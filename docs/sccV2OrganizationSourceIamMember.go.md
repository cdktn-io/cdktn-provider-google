# `sccV2OrganizationSourceIamMember` Submodule <a name="`sccV2OrganizationSourceIamMember` Submodule" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SccV2OrganizationSourceIamMember <a name="SccV2OrganizationSourceIamMember" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/scc_v2_organization_source_iam_member google_scc_v2_organization_source_iam_member}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/sccv2organizationsourceiammember"

sccv2organizationsourceiammember.NewSccV2OrganizationSourceIamMember(scope Construct, id *string, config SccV2OrganizationSourceIamMemberConfig) SccV2OrganizationSourceIamMember
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConfig">SccV2OrganizationSourceIamMemberConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConfig">SccV2OrganizationSourceIamMemberConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCondition` <a name="PutCondition" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.putCondition"></a>

```go
func PutCondition(value SccV2OrganizationSourceIamMemberCondition)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberCondition">SccV2OrganizationSourceIamMemberCondition</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.resetCondition"></a>

```go
func ResetCondition()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SccV2OrganizationSourceIamMember resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/sccv2organizationsourceiammember"

sccv2organizationsourceiammember.SccV2OrganizationSourceIamMember_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/sccv2organizationsourceiammember"

sccv2organizationsourceiammember.SccV2OrganizationSourceIamMember_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/sccv2organizationsourceiammember"

sccv2organizationsourceiammember.SccV2OrganizationSourceIamMember_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/sccv2organizationsourceiammember"

sccv2organizationsourceiammember.SccV2OrganizationSourceIamMember_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a SccV2OrganizationSourceIamMember resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SccV2OrganizationSourceIamMember to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SccV2OrganizationSourceIamMember that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/scc_v2_organization_source_iam_member#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the SccV2OrganizationSourceIamMember to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.condition">Condition</a></code> | <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference">SccV2OrganizationSourceIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberCondition">SccV2OrganizationSourceIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.memberInput">MemberInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.organizationInput">OrganizationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.roleInput">RoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.sourceInput">SourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.member">Member</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.organization">Organization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.role">Role</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.source">Source</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.condition"></a>

```go
func Condition() SccV2OrganizationSourceIamMemberConditionOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference">SccV2OrganizationSourceIamMemberConditionOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.conditionInput"></a>

```go
func ConditionInput() SccV2OrganizationSourceIamMemberCondition
```

- *Type:* <a href="#@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberCondition">SccV2OrganizationSourceIamMemberCondition</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MemberInput`<sup>Optional</sup> <a name="MemberInput" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.memberInput"></a>

```go
func MemberInput() *string
```

- *Type:* *string

---

##### `OrganizationInput`<sup>Optional</sup> <a name="OrganizationInput" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.organizationInput"></a>

```go
func OrganizationInput() *string
```

- *Type:* *string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.roleInput"></a>

```go
func RoleInput() *string
```

- *Type:* *string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.sourceInput"></a>

```go
func SourceInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Member`<sup>Required</sup> <a name="Member" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.member"></a>

```go
func Member() *string
```

- *Type:* *string

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.organization"></a>

```go
func Organization() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.source"></a>

```go
func Source() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SccV2OrganizationSourceIamMemberCondition <a name="SccV2OrganizationSourceIamMemberCondition" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberCondition.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/sccv2organizationsourceiammember"

&sccv2organizationsourceiammember.SccV2OrganizationSourceIamMemberCondition {
	Expression: *string,
	Title: *string,
	Description: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberCondition.property.expression">Expression</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/scc_v2_organization_source_iam_member#expression SccV2OrganizationSourceIamMember#expression}. |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberCondition.property.title">Title</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/scc_v2_organization_source_iam_member#title SccV2OrganizationSourceIamMember#title}. |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberCondition.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/scc_v2_organization_source_iam_member#description SccV2OrganizationSourceIamMember#description}. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberCondition.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/scc_v2_organization_source_iam_member#expression SccV2OrganizationSourceIamMember#expression}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberCondition.property.title"></a>

```go
Title *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/scc_v2_organization_source_iam_member#title SccV2OrganizationSourceIamMember#title}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberCondition.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/scc_v2_organization_source_iam_member#description SccV2OrganizationSourceIamMember#description}.

---

### SccV2OrganizationSourceIamMemberConfig <a name="SccV2OrganizationSourceIamMemberConfig" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/sccv2organizationsourceiammember"

&sccv2organizationsourceiammember.SccV2OrganizationSourceIamMemberConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Member: *string,
	Organization: *string,
	Role: *string,
	Source: *string,
	Condition: github.com/cdktn-io/cdktn-provider-google-go/google/v19.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberCondition,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConfig.property.member">Member</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/scc_v2_organization_source_iam_member#member SccV2OrganizationSourceIamMember#member}. |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConfig.property.organization">Organization</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/scc_v2_organization_source_iam_member#organization SccV2OrganizationSourceIamMember#organization}. |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConfig.property.role">Role</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/scc_v2_organization_source_iam_member#role SccV2OrganizationSourceIamMember#role}. |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConfig.property.source">Source</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/scc_v2_organization_source_iam_member#source SccV2OrganizationSourceIamMember#source}. |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConfig.property.condition">Condition</a></code> | <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberCondition">SccV2OrganizationSourceIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/scc_v2_organization_source_iam_member#id SccV2OrganizationSourceIamMember#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Member`<sup>Required</sup> <a name="Member" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConfig.property.member"></a>

```go
Member *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/scc_v2_organization_source_iam_member#member SccV2OrganizationSourceIamMember#member}.

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConfig.property.organization"></a>

```go
Organization *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/scc_v2_organization_source_iam_member#organization SccV2OrganizationSourceIamMember#organization}.

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConfig.property.role"></a>

```go
Role *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/scc_v2_organization_source_iam_member#role SccV2OrganizationSourceIamMember#role}.

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConfig.property.source"></a>

```go
Source *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/scc_v2_organization_source_iam_member#source SccV2OrganizationSourceIamMember#source}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConfig.property.condition"></a>

```go
Condition SccV2OrganizationSourceIamMemberCondition
```

- *Type:* <a href="#@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberCondition">SccV2OrganizationSourceIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/scc_v2_organization_source_iam_member#condition SccV2OrganizationSourceIamMember#condition}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/scc_v2_organization_source_iam_member#id SccV2OrganizationSourceIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### SccV2OrganizationSourceIamMemberConditionOutputReference <a name="SccV2OrganizationSourceIamMemberConditionOutputReference" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/sccv2organizationsourceiammember"

sccv2organizationsourceiammember.NewSccV2OrganizationSourceIamMemberConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SccV2OrganizationSourceIamMemberConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.resetDescription"></a>

```go
func ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberCondition">SccV2OrganizationSourceIamMemberCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() SccV2OrganizationSourceIamMemberCondition
```

- *Type:* <a href="#@cdktn/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberCondition">SccV2OrganizationSourceIamMemberCondition</a>

---



