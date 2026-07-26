# `bigqueryDatapolicyv2DataPolicyIamMember` Submodule <a name="`bigqueryDatapolicyv2DataPolicyIamMember` Submodule" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BigqueryDatapolicyv2DataPolicyIamMember <a name="BigqueryDatapolicyv2DataPolicyIamMember" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/bigquery_datapolicyv2_data_policy_iam_member google_bigquery_datapolicyv2_data_policy_iam_member}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/bigquerydatapolicyv2datapolicyiammember"

bigquerydatapolicyv2datapolicyiammember.NewBigqueryDatapolicyv2DataPolicyIamMember(scope Construct, id *string, config BigqueryDatapolicyv2DataPolicyIamMemberConfig) BigqueryDatapolicyv2DataPolicyIamMember
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMemberConfig">BigqueryDatapolicyv2DataPolicyIamMemberConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMemberConfig">BigqueryDatapolicyv2DataPolicyIamMemberConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCondition` <a name="PutCondition" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.putCondition"></a>

```go
func PutCondition(value BigqueryDatapolicyv2DataPolicyIamMemberCondition)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMemberCondition">BigqueryDatapolicyv2DataPolicyIamMemberCondition</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.resetCondition"></a>

```go
func ResetCondition()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.resetId"></a>

```go
func ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.resetProject"></a>

```go
func ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a BigqueryDatapolicyv2DataPolicyIamMember resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/bigquerydatapolicyv2datapolicyiammember"

bigquerydatapolicyv2datapolicyiammember.BigqueryDatapolicyv2DataPolicyIamMember_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/bigquerydatapolicyv2datapolicyiammember"

bigquerydatapolicyv2datapolicyiammember.BigqueryDatapolicyv2DataPolicyIamMember_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/bigquerydatapolicyv2datapolicyiammember"

bigquerydatapolicyv2datapolicyiammember.BigqueryDatapolicyv2DataPolicyIamMember_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/bigquerydatapolicyv2datapolicyiammember"

bigquerydatapolicyv2datapolicyiammember.BigqueryDatapolicyv2DataPolicyIamMember_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a BigqueryDatapolicyv2DataPolicyIamMember resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the BigqueryDatapolicyv2DataPolicyIamMember to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing BigqueryDatapolicyv2DataPolicyIamMember that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/bigquery_datapolicyv2_data_policy_iam_member#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the BigqueryDatapolicyv2DataPolicyIamMember to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.property.condition">Condition</a></code> | <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMemberConditionOutputReference">BigqueryDatapolicyv2DataPolicyIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMemberCondition">BigqueryDatapolicyv2DataPolicyIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.property.dataPolicyIdInput">DataPolicyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.property.memberInput">MemberInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.property.roleInput">RoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.property.dataPolicyId">DataPolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.property.member">Member</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.property.role">Role</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.property.condition"></a>

```go
func Condition() BigqueryDatapolicyv2DataPolicyIamMemberConditionOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMemberConditionOutputReference">BigqueryDatapolicyv2DataPolicyIamMemberConditionOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.property.conditionInput"></a>

```go
func ConditionInput() BigqueryDatapolicyv2DataPolicyIamMemberCondition
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMemberCondition">BigqueryDatapolicyv2DataPolicyIamMemberCondition</a>

---

##### `DataPolicyIdInput`<sup>Optional</sup> <a name="DataPolicyIdInput" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.property.dataPolicyIdInput"></a>

```go
func DataPolicyIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `MemberInput`<sup>Optional</sup> <a name="MemberInput" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.property.memberInput"></a>

```go
func MemberInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.property.roleInput"></a>

```go
func RoleInput() *string
```

- *Type:* *string

---

##### `DataPolicyId`<sup>Required</sup> <a name="DataPolicyId" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.property.dataPolicyId"></a>

```go
func DataPolicyId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Member`<sup>Required</sup> <a name="Member" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.property.member"></a>

```go
func Member() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMember.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### BigqueryDatapolicyv2DataPolicyIamMemberCondition <a name="BigqueryDatapolicyv2DataPolicyIamMemberCondition" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMemberCondition.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/bigquerydatapolicyv2datapolicyiammember"

&bigquerydatapolicyv2datapolicyiammember.BigqueryDatapolicyv2DataPolicyIamMemberCondition {
	Expression: *string,
	Title: *string,
	Description: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMemberCondition.property.expression">Expression</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/bigquery_datapolicyv2_data_policy_iam_member#expression BigqueryDatapolicyv2DataPolicyIamMember#expression}. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMemberCondition.property.title">Title</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/bigquery_datapolicyv2_data_policy_iam_member#title BigqueryDatapolicyv2DataPolicyIamMember#title}. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMemberCondition.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/bigquery_datapolicyv2_data_policy_iam_member#description BigqueryDatapolicyv2DataPolicyIamMember#description}. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMemberCondition.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/bigquery_datapolicyv2_data_policy_iam_member#expression BigqueryDatapolicyv2DataPolicyIamMember#expression}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMemberCondition.property.title"></a>

```go
Title *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/bigquery_datapolicyv2_data_policy_iam_member#title BigqueryDatapolicyv2DataPolicyIamMember#title}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMemberCondition.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/bigquery_datapolicyv2_data_policy_iam_member#description BigqueryDatapolicyv2DataPolicyIamMember#description}.

---

### BigqueryDatapolicyv2DataPolicyIamMemberConfig <a name="BigqueryDatapolicyv2DataPolicyIamMemberConfig" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMemberConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/bigquerydatapolicyv2datapolicyiammember"

&bigquerydatapolicyv2datapolicyiammember.BigqueryDatapolicyv2DataPolicyIamMemberConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	DataPolicyId: *string,
	Member: *string,
	Role: *string,
	Condition: github.com/cdktn-io/cdktn-provider-google-go/google/v20.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMemberCondition,
	Id: *string,
	Location: *string,
	Project: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMemberConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMemberConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMemberConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMemberConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMemberConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMemberConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMemberConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMemberConfig.property.dataPolicyId">DataPolicyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/bigquery_datapolicyv2_data_policy_iam_member#data_policy_id BigqueryDatapolicyv2DataPolicyIamMember#data_policy_id}. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMemberConfig.property.member">Member</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/bigquery_datapolicyv2_data_policy_iam_member#member BigqueryDatapolicyv2DataPolicyIamMember#member}. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMemberConfig.property.role">Role</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/bigquery_datapolicyv2_data_policy_iam_member#role BigqueryDatapolicyv2DataPolicyIamMember#role}. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMemberConfig.property.condition">Condition</a></code> | <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMemberCondition">BigqueryDatapolicyv2DataPolicyIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMemberConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/bigquery_datapolicyv2_data_policy_iam_member#id BigqueryDatapolicyv2DataPolicyIamMember#id}. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMemberConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/bigquery_datapolicyv2_data_policy_iam_member#location BigqueryDatapolicyv2DataPolicyIamMember#location}. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMemberConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/bigquery_datapolicyv2_data_policy_iam_member#project BigqueryDatapolicyv2DataPolicyIamMember#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMemberConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMemberConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMemberConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMemberConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMemberConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMemberConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMemberConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DataPolicyId`<sup>Required</sup> <a name="DataPolicyId" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMemberConfig.property.dataPolicyId"></a>

```go
DataPolicyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/bigquery_datapolicyv2_data_policy_iam_member#data_policy_id BigqueryDatapolicyv2DataPolicyIamMember#data_policy_id}.

---

##### `Member`<sup>Required</sup> <a name="Member" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMemberConfig.property.member"></a>

```go
Member *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/bigquery_datapolicyv2_data_policy_iam_member#member BigqueryDatapolicyv2DataPolicyIamMember#member}.

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMemberConfig.property.role"></a>

```go
Role *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/bigquery_datapolicyv2_data_policy_iam_member#role BigqueryDatapolicyv2DataPolicyIamMember#role}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMemberConfig.property.condition"></a>

```go
Condition BigqueryDatapolicyv2DataPolicyIamMemberCondition
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMemberCondition">BigqueryDatapolicyv2DataPolicyIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/bigquery_datapolicyv2_data_policy_iam_member#condition BigqueryDatapolicyv2DataPolicyIamMember#condition}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMemberConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/bigquery_datapolicyv2_data_policy_iam_member#id BigqueryDatapolicyv2DataPolicyIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMemberConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/bigquery_datapolicyv2_data_policy_iam_member#location BigqueryDatapolicyv2DataPolicyIamMember#location}.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMemberConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/bigquery_datapolicyv2_data_policy_iam_member#project BigqueryDatapolicyv2DataPolicyIamMember#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### BigqueryDatapolicyv2DataPolicyIamMemberConditionOutputReference <a name="BigqueryDatapolicyv2DataPolicyIamMemberConditionOutputReference" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMemberConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/bigquerydatapolicyv2datapolicyiammember"

bigquerydatapolicyv2datapolicyiammember.NewBigqueryDatapolicyv2DataPolicyIamMemberConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BigqueryDatapolicyv2DataPolicyIamMemberConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMemberConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMemberConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMemberConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMemberConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMemberConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMemberConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMemberConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMemberConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMemberConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMemberConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMemberConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMemberConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMemberConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMemberConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMemberConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMemberConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMemberConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMemberConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMemberConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMemberConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMemberConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMemberConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMemberConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMemberConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMemberConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMemberConditionOutputReference.resetDescription"></a>

```go
func ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMemberConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMemberConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMemberConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMemberConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMemberConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMemberConditionOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMemberConditionOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMemberConditionOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMemberConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMemberCondition">BigqueryDatapolicyv2DataPolicyIamMemberCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMemberConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMemberConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMemberConditionOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMemberConditionOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMemberConditionOutputReference.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMemberConditionOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMemberConditionOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMemberConditionOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMemberConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() BigqueryDatapolicyv2DataPolicyIamMemberCondition
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamMember.BigqueryDatapolicyv2DataPolicyIamMemberCondition">BigqueryDatapolicyv2DataPolicyIamMemberCondition</a>

---



