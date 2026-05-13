# `bigqueryDatapolicyv2DataPolicy` Submodule <a name="`bigqueryDatapolicyv2DataPolicy` Submodule" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BigqueryDatapolicyv2DataPolicy <a name="BigqueryDatapolicyv2DataPolicy" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/bigquery_datapolicyv2_data_policy google_bigquery_datapolicyv2_data_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/bigquerydatapolicyv2datapolicy"

bigquerydatapolicyv2datapolicy.NewBigqueryDatapolicyv2DataPolicy(scope Construct, id *string, config BigqueryDatapolicyv2DataPolicyConfig) BigqueryDatapolicyv2DataPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyConfig">BigqueryDatapolicyv2DataPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyConfig">BigqueryDatapolicyv2DataPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.putDataMaskingPolicy">PutDataMaskingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.resetDataMaskingPolicy">ResetDataMaskingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.resetEtag">ResetEtag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.resetGrantees">ResetGrantees</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDataMaskingPolicy` <a name="PutDataMaskingPolicy" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.putDataMaskingPolicy"></a>

```go
func PutDataMaskingPolicy(value BigqueryDatapolicyv2DataPolicyDataMaskingPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.putDataMaskingPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicy">BigqueryDatapolicyv2DataPolicyDataMaskingPolicy</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.putTimeouts"></a>

```go
func PutTimeouts(value BigqueryDatapolicyv2DataPolicyTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeouts">BigqueryDatapolicyv2DataPolicyTimeouts</a>

---

##### `ResetDataMaskingPolicy` <a name="ResetDataMaskingPolicy" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.resetDataMaskingPolicy"></a>

```go
func ResetDataMaskingPolicy()
```

##### `ResetEtag` <a name="ResetEtag" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.resetEtag"></a>

```go
func ResetEtag()
```

##### `ResetGrantees` <a name="ResetGrantees" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.resetGrantees"></a>

```go
func ResetGrantees()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a BigqueryDatapolicyv2DataPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/bigquerydatapolicyv2datapolicy"

bigquerydatapolicyv2datapolicy.BigqueryDatapolicyv2DataPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/bigquerydatapolicyv2datapolicy"

bigquerydatapolicyv2datapolicy.BigqueryDatapolicyv2DataPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/bigquerydatapolicyv2datapolicy"

bigquerydatapolicyv2datapolicy.BigqueryDatapolicyv2DataPolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/bigquerydatapolicyv2datapolicy"

bigquerydatapolicyv2datapolicy.BigqueryDatapolicyv2DataPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a BigqueryDatapolicyv2DataPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the BigqueryDatapolicyv2DataPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing BigqueryDatapolicyv2DataPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/bigquery_datapolicyv2_data_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the BigqueryDatapolicyv2DataPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.dataMaskingPolicy">DataMaskingPolicy</a></code> | <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference">BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.policyTag">PolicyTag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference">BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.dataMaskingPolicyInput">DataMaskingPolicyInput</a></code> | <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicy">BigqueryDatapolicyv2DataPolicyDataMaskingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.dataPolicyIdInput">DataPolicyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.dataPolicyTypeInput">DataPolicyTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.etagInput">EtagInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.granteesInput">GranteesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.dataPolicyId">DataPolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.dataPolicyType">DataPolicyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.grantees">Grantees</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DataMaskingPolicy`<sup>Required</sup> <a name="DataMaskingPolicy" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.dataMaskingPolicy"></a>

```go
func DataMaskingPolicy() BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference">BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PolicyTag`<sup>Required</sup> <a name="PolicyTag" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.policyTag"></a>

```go
func PolicyTag() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.timeouts"></a>

```go
func Timeouts() BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference">BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference</a>

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `DataMaskingPolicyInput`<sup>Optional</sup> <a name="DataMaskingPolicyInput" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.dataMaskingPolicyInput"></a>

```go
func DataMaskingPolicyInput() BigqueryDatapolicyv2DataPolicyDataMaskingPolicy
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicy">BigqueryDatapolicyv2DataPolicyDataMaskingPolicy</a>

---

##### `DataPolicyIdInput`<sup>Optional</sup> <a name="DataPolicyIdInput" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.dataPolicyIdInput"></a>

```go
func DataPolicyIdInput() *string
```

- *Type:* *string

---

##### `DataPolicyTypeInput`<sup>Optional</sup> <a name="DataPolicyTypeInput" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.dataPolicyTypeInput"></a>

```go
func DataPolicyTypeInput() *string
```

- *Type:* *string

---

##### `EtagInput`<sup>Optional</sup> <a name="EtagInput" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.etagInput"></a>

```go
func EtagInput() *string
```

- *Type:* *string

---

##### `GranteesInput`<sup>Optional</sup> <a name="GranteesInput" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.granteesInput"></a>

```go
func GranteesInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DataPolicyId`<sup>Required</sup> <a name="DataPolicyId" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.dataPolicyId"></a>

```go
func DataPolicyId() *string
```

- *Type:* *string

---

##### `DataPolicyType`<sup>Required</sup> <a name="DataPolicyType" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.dataPolicyType"></a>

```go
func DataPolicyType() *string
```

- *Type:* *string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `Grantees`<sup>Required</sup> <a name="Grantees" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.grantees"></a>

```go
func Grantees() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### BigqueryDatapolicyv2DataPolicyConfig <a name="BigqueryDatapolicyv2DataPolicyConfig" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/bigquerydatapolicyv2datapolicy"

&bigquerydatapolicyv2datapolicy.BigqueryDatapolicyv2DataPolicyConfig {
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
	DataMaskingPolicy: github.com/cdktn-io/cdktn-provider-google-go/google/v19.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicy,
	Etag: *string,
	Grantees: *[]*string,
	Id: *string,
	Project: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-google-go/google/v19.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyConfig.property.dataPolicyId">DataPolicyId</a></code> | <code>*string</code> | User-assigned (human readable) ID of the data policy that needs to be unique within a project. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyConfig.property.dataPolicyType">DataPolicyType</a></code> | <code>*string</code> | Type of data policy. Possible values: DATA_MASKING_POLICY RAW_DATA_ACCESS_POLICY COLUMN_LEVEL_SECURITY_POLICY. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyConfig.property.location">Location</a></code> | <code>*string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyConfig.property.dataMaskingPolicy">DataMaskingPolicy</a></code> | <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicy">BigqueryDatapolicyv2DataPolicyDataMaskingPolicy</a></code> | data_masking_policy block. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyConfig.property.etag">Etag</a></code> | <code>*string</code> | The etag for this Data Policy. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyConfig.property.grantees">Grantees</a></code> | <code>*[]*string</code> | The list of IAM principals that have Fine Grained Access to the underlying data goverened by this data policy. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/bigquery_datapolicyv2_data_policy#id BigqueryDatapolicyv2DataPolicy#id}. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/bigquery_datapolicyv2_data_policy#project BigqueryDatapolicyv2DataPolicy#project}. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeouts">BigqueryDatapolicyv2DataPolicyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DataPolicyId`<sup>Required</sup> <a name="DataPolicyId" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyConfig.property.dataPolicyId"></a>

```go
DataPolicyId *string
```

- *Type:* *string

User-assigned (human readable) ID of the data policy that needs to be unique within a project.

Used as {data_policy_id} in part of the resource
name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/bigquery_datapolicyv2_data_policy#data_policy_id BigqueryDatapolicyv2DataPolicy#data_policy_id}

---

##### `DataPolicyType`<sup>Required</sup> <a name="DataPolicyType" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyConfig.property.dataPolicyType"></a>

```go
DataPolicyType *string
```

- *Type:* *string

Type of data policy. Possible values: DATA_MASKING_POLICY RAW_DATA_ACCESS_POLICY COLUMN_LEVEL_SECURITY_POLICY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/bigquery_datapolicyv2_data_policy#data_policy_type BigqueryDatapolicyv2DataPolicy#data_policy_type}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/bigquery_datapolicyv2_data_policy#location BigqueryDatapolicyv2DataPolicy#location}

---

##### `DataMaskingPolicy`<sup>Optional</sup> <a name="DataMaskingPolicy" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyConfig.property.dataMaskingPolicy"></a>

```go
DataMaskingPolicy BigqueryDatapolicyv2DataPolicyDataMaskingPolicy
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicy">BigqueryDatapolicyv2DataPolicyDataMaskingPolicy</a>

data_masking_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/bigquery_datapolicyv2_data_policy#data_masking_policy BigqueryDatapolicyv2DataPolicy#data_masking_policy}

---

##### `Etag`<sup>Optional</sup> <a name="Etag" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyConfig.property.etag"></a>

```go
Etag *string
```

- *Type:* *string

The etag for this Data Policy.

This field is used for UpdateDataPolicy calls. If Data Policy exists, this
field is required and must match the server's etag. It will also be
populated in the response of GetDataPolicy, CreateDataPolicy, and
UpdateDataPolicy calls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/bigquery_datapolicyv2_data_policy#etag BigqueryDatapolicyv2DataPolicy#etag}

---

##### `Grantees`<sup>Optional</sup> <a name="Grantees" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyConfig.property.grantees"></a>

```go
Grantees *[]*string
```

- *Type:* *[]*string

The list of IAM principals that have Fine Grained Access to the underlying data goverened by this data policy.

Uses the [IAM V2 principal
syntax](https://cloud.google.com/iam/docs/principal-identifiers#v2) Only
supports principal types users, groups, serviceaccounts, cloudidentity.
This field is supported in V2 Data Policy only. In case of V1 data policies
(i.e. verion = 1 and policy_tag is set), this field is not populated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/bigquery_datapolicyv2_data_policy#grantees BigqueryDatapolicyv2DataPolicy#grantees}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/bigquery_datapolicyv2_data_policy#id BigqueryDatapolicyv2DataPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/bigquery_datapolicyv2_data_policy#project BigqueryDatapolicyv2DataPolicy#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyConfig.property.timeouts"></a>

```go
Timeouts BigqueryDatapolicyv2DataPolicyTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeouts">BigqueryDatapolicyv2DataPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/bigquery_datapolicyv2_data_policy#timeouts BigqueryDatapolicyv2DataPolicy#timeouts}

---

### BigqueryDatapolicyv2DataPolicyDataMaskingPolicy <a name="BigqueryDatapolicyv2DataPolicyDataMaskingPolicy" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/bigquerydatapolicyv2datapolicy"

&bigquerydatapolicyv2datapolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicy {
	PredefinedExpression: *string,
	Routine: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicy.property.predefinedExpression">PredefinedExpression</a></code> | <code>*string</code> | A predefined masking expression. Possible values: SHA256 ALWAYS_NULL DEFAULT_MASKING_VALUE LAST_FOUR_CHARACTERS FIRST_FOUR_CHARACTERS EMAIL_MASK DATE_YEAR_MASK RANDOM_HASH. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicy.property.routine">Routine</a></code> | <code>*string</code> | The name of the BigQuery routine that contains the custom masking routine, in the format of 'projects/{project_number}/datasets/{dataset_id}/routines/{routine_id}'. |

---

##### `PredefinedExpression`<sup>Optional</sup> <a name="PredefinedExpression" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicy.property.predefinedExpression"></a>

```go
PredefinedExpression *string
```

- *Type:* *string

A predefined masking expression. Possible values: SHA256 ALWAYS_NULL DEFAULT_MASKING_VALUE LAST_FOUR_CHARACTERS FIRST_FOUR_CHARACTERS EMAIL_MASK DATE_YEAR_MASK RANDOM_HASH.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/bigquery_datapolicyv2_data_policy#predefined_expression BigqueryDatapolicyv2DataPolicy#predefined_expression}

---

##### `Routine`<sup>Optional</sup> <a name="Routine" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicy.property.routine"></a>

```go
Routine *string
```

- *Type:* *string

The name of the BigQuery routine that contains the custom masking routine, in the format of 'projects/{project_number}/datasets/{dataset_id}/routines/{routine_id}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/bigquery_datapolicyv2_data_policy#routine BigqueryDatapolicyv2DataPolicy#routine}

---

### BigqueryDatapolicyv2DataPolicyTimeouts <a name="BigqueryDatapolicyv2DataPolicyTimeouts" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/bigquerydatapolicyv2datapolicy"

&bigquerydatapolicyv2datapolicy.BigqueryDatapolicyv2DataPolicyTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/bigquery_datapolicyv2_data_policy#create BigqueryDatapolicyv2DataPolicy#create}. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/bigquery_datapolicyv2_data_policy#delete BigqueryDatapolicyv2DataPolicy#delete}. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/bigquery_datapolicyv2_data_policy#update BigqueryDatapolicyv2DataPolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/bigquery_datapolicyv2_data_policy#create BigqueryDatapolicyv2DataPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/bigquery_datapolicyv2_data_policy#delete BigqueryDatapolicyv2DataPolicy#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/bigquery_datapolicyv2_data_policy#update BigqueryDatapolicyv2DataPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference <a name="BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/bigquerydatapolicyv2datapolicy"

bigquerydatapolicyv2datapolicy.NewBigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.resetPredefinedExpression">ResetPredefinedExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.resetRoutine">ResetRoutine</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPredefinedExpression` <a name="ResetPredefinedExpression" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.resetPredefinedExpression"></a>

```go
func ResetPredefinedExpression()
```

##### `ResetRoutine` <a name="ResetRoutine" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.resetRoutine"></a>

```go
func ResetRoutine()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.property.predefinedExpressionInput">PredefinedExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.property.routineInput">RoutineInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.property.predefinedExpression">PredefinedExpression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.property.routine">Routine</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicy">BigqueryDatapolicyv2DataPolicyDataMaskingPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PredefinedExpressionInput`<sup>Optional</sup> <a name="PredefinedExpressionInput" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.property.predefinedExpressionInput"></a>

```go
func PredefinedExpressionInput() *string
```

- *Type:* *string

---

##### `RoutineInput`<sup>Optional</sup> <a name="RoutineInput" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.property.routineInput"></a>

```go
func RoutineInput() *string
```

- *Type:* *string

---

##### `PredefinedExpression`<sup>Required</sup> <a name="PredefinedExpression" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.property.predefinedExpression"></a>

```go
func PredefinedExpression() *string
```

- *Type:* *string

---

##### `Routine`<sup>Required</sup> <a name="Routine" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.property.routine"></a>

```go
func Routine() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() BigqueryDatapolicyv2DataPolicyDataMaskingPolicy
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicy">BigqueryDatapolicyv2DataPolicyDataMaskingPolicy</a>

---


### BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference <a name="BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/bigquerydatapolicyv2datapolicy"

bigquerydatapolicyv2datapolicy.NewBigqueryDatapolicyv2DataPolicyTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



