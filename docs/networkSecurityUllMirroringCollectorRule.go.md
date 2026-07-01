# `networkSecurityUllMirroringCollectorRule` Submodule <a name="`networkSecurityUllMirroringCollectorRule` Submodule" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkSecurityUllMirroringCollectorRule <a name="NetworkSecurityUllMirroringCollectorRule" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/network_security_ull_mirroring_collector_rule google_network_security_ull_mirroring_collector_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networksecurityullmirroringcollectorrule"

networksecurityullmirroringcollectorrule.NewNetworkSecurityUllMirroringCollectorRule(scope Construct, id *string, config NetworkSecurityUllMirroringCollectorRuleConfig) NetworkSecurityUllMirroringCollectorRule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleConfig">NetworkSecurityUllMirroringCollectorRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleConfig">NetworkSecurityUllMirroringCollectorRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.putMatch">PutMatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutMatch` <a name="PutMatch" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.putMatch"></a>

```go
func PutMatch(value NetworkSecurityUllMirroringCollectorRuleMatch)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.putMatch.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatch">NetworkSecurityUllMirroringCollectorRuleMatch</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.putTimeouts"></a>

```go
func PutTimeouts(value NetworkSecurityUllMirroringCollectorRuleTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeouts">NetworkSecurityUllMirroringCollectorRuleTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a NetworkSecurityUllMirroringCollectorRule resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networksecurityullmirroringcollectorrule"

networksecurityullmirroringcollectorrule.NetworkSecurityUllMirroringCollectorRule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networksecurityullmirroringcollectorrule"

networksecurityullmirroringcollectorrule.NetworkSecurityUllMirroringCollectorRule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networksecurityullmirroringcollectorrule"

networksecurityullmirroringcollectorrule.NetworkSecurityUllMirroringCollectorRule_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networksecurityullmirroringcollectorrule"

networksecurityullmirroringcollectorrule.NetworkSecurityUllMirroringCollectorRule_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a NetworkSecurityUllMirroringCollectorRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the NetworkSecurityUllMirroringCollectorRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing NetworkSecurityUllMirroringCollectorRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/network_security_ull_mirroring_collector_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the NetworkSecurityUllMirroringCollectorRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.match">Match</a></code> | <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference">NetworkSecurityUllMirroringCollectorRuleMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.reconciling">Reconciling</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference">NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.matchInput">MatchInput</a></code> | <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatch">NetworkSecurityUllMirroringCollectorRuleMatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.ullMirroringCollectorInput">UllMirroringCollectorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.ullMirroringCollectorRuleIdInput">UllMirroringCollectorRuleIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.ullMirroringCollector">UllMirroringCollector</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.ullMirroringCollectorRuleId">UllMirroringCollectorRuleId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Match`<sup>Required</sup> <a name="Match" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.match"></a>

```go
func Match() NetworkSecurityUllMirroringCollectorRuleMatchOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference">NetworkSecurityUllMirroringCollectorRuleMatchOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Reconciling`<sup>Required</sup> <a name="Reconciling" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.reconciling"></a>

```go
func Reconciling() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.timeouts"></a>

```go
func Timeouts() NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference">NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `MatchInput`<sup>Optional</sup> <a name="MatchInput" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.matchInput"></a>

```go
func MatchInput() NetworkSecurityUllMirroringCollectorRuleMatch
```

- *Type:* <a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatch">NetworkSecurityUllMirroringCollectorRuleMatch</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `UllMirroringCollectorInput`<sup>Optional</sup> <a name="UllMirroringCollectorInput" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.ullMirroringCollectorInput"></a>

```go
func UllMirroringCollectorInput() *string
```

- *Type:* *string

---

##### `UllMirroringCollectorRuleIdInput`<sup>Optional</sup> <a name="UllMirroringCollectorRuleIdInput" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.ullMirroringCollectorRuleIdInput"></a>

```go
func UllMirroringCollectorRuleIdInput() *string
```

- *Type:* *string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `UllMirroringCollector`<sup>Required</sup> <a name="UllMirroringCollector" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.ullMirroringCollector"></a>

```go
func UllMirroringCollector() *string
```

- *Type:* *string

---

##### `UllMirroringCollectorRuleId`<sup>Required</sup> <a name="UllMirroringCollectorRuleId" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.ullMirroringCollectorRuleId"></a>

```go
func UllMirroringCollectorRuleId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkSecurityUllMirroringCollectorRuleConfig <a name="NetworkSecurityUllMirroringCollectorRuleConfig" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networksecurityullmirroringcollectorrule"

&networksecurityullmirroringcollectorrule.NetworkSecurityUllMirroringCollectorRuleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	Match: github.com/cdktn-io/cdktn-provider-google-go/google/v19.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatch,
	UllMirroringCollector: *string,
	UllMirroringCollectorRuleId: *string,
	DeletionPolicy: *string,
	Id: *string,
	Labels: *map[string]*string,
	Project: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-google-go/google/v19.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleConfig.property.location">Location</a></code> | <code>*string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleConfig.property.match">Match</a></code> | <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatch">NetworkSecurityUllMirroringCollectorRuleMatch</a></code> | match block. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleConfig.property.ullMirroringCollector">UllMirroringCollector</a></code> | <code>*string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleConfig.property.ullMirroringCollectorRuleId">UllMirroringCollectorRuleId</a></code> | <code>*string</code> | ID for the new UllMirroringCollectorRule. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/network_security_ull_mirroring_collector_rule#id NetworkSecurityUllMirroringCollectorRule#id}. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Labels as key value pairs. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/network_security_ull_mirroring_collector_rule#project NetworkSecurityUllMirroringCollectorRule#project}. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeouts">NetworkSecurityUllMirroringCollectorRuleTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/network_security_ull_mirroring_collector_rule#location NetworkSecurityUllMirroringCollectorRule#location}

---

##### `Match`<sup>Required</sup> <a name="Match" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleConfig.property.match"></a>

```go
Match NetworkSecurityUllMirroringCollectorRuleMatch
```

- *Type:* <a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatch">NetworkSecurityUllMirroringCollectorRuleMatch</a>

match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/network_security_ull_mirroring_collector_rule#match NetworkSecurityUllMirroringCollectorRule#match}

---

##### `UllMirroringCollector`<sup>Required</sup> <a name="UllMirroringCollector" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleConfig.property.ullMirroringCollector"></a>

```go
UllMirroringCollector *string
```

- *Type:* *string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/network_security_ull_mirroring_collector_rule#ull_mirroring_collector NetworkSecurityUllMirroringCollectorRule#ull_mirroring_collector}

---

##### `UllMirroringCollectorRuleId`<sup>Required</sup> <a name="UllMirroringCollectorRuleId" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleConfig.property.ullMirroringCollectorRuleId"></a>

```go
UllMirroringCollectorRuleId *string
```

- *Type:* *string

ID for the new UllMirroringCollectorRule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/network_security_ull_mirroring_collector_rule#ull_mirroring_collector_rule_id NetworkSecurityUllMirroringCollectorRule#ull_mirroring_collector_rule_id}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/network_security_ull_mirroring_collector_rule#deletion_policy NetworkSecurityUllMirroringCollectorRule#deletion_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/network_security_ull_mirroring_collector_rule#id NetworkSecurityUllMirroringCollectorRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/network_security_ull_mirroring_collector_rule#labels NetworkSecurityUllMirroringCollectorRule#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/network_security_ull_mirroring_collector_rule#project NetworkSecurityUllMirroringCollectorRule#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleConfig.property.timeouts"></a>

```go
Timeouts NetworkSecurityUllMirroringCollectorRuleTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeouts">NetworkSecurityUllMirroringCollectorRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/network_security_ull_mirroring_collector_rule#timeouts NetworkSecurityUllMirroringCollectorRule#timeouts}

---

### NetworkSecurityUllMirroringCollectorRuleMatch <a name="NetworkSecurityUllMirroringCollectorRuleMatch" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatch"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatch.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networksecurityullmirroringcollectorrule"

&networksecurityullmirroringcollectorrule.NetworkSecurityUllMirroringCollectorRuleMatch {
	Direction: *string,
	DstIpRanges: *[]*string,
	IpProtocols: *[]*string,
	SrcIpRanges: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatch.property.direction">Direction</a></code> | <code>*string</code> | Direction of traffic to match. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatch.property.dstIpRanges">DstIpRanges</a></code> | <code>*[]*string</code> | Destination IP ranges to match. When unset, matches any destination IP range. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatch.property.ipProtocols">IpProtocols</a></code> | <code>*[]*string</code> | IP protocols to match. When unset, matches any IP protocol. Examples: "tcp", "udp", "icmp". If unset, matches any IP protocol. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatch.property.srcIpRanges">SrcIpRanges</a></code> | <code>*[]*string</code> | Source IP ranges to match. When unset, matches any source IP range. |

---

##### `Direction`<sup>Optional</sup> <a name="Direction" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatch.property.direction"></a>

```go
Direction *string
```

- *Type:* *string

Direction of traffic to match.

When unset, matches any direction.
Possible values:
INGRESS: Traffic inbound to the capture point.
EGRESS: Traffic outbound from the capture point.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/network_security_ull_mirroring_collector_rule#direction NetworkSecurityUllMirroringCollectorRule#direction}

---

##### `DstIpRanges`<sup>Optional</sup> <a name="DstIpRanges" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatch.property.dstIpRanges"></a>

```go
DstIpRanges *[]*string
```

- *Type:* *[]*string

Destination IP ranges to match. When unset, matches any destination IP range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/network_security_ull_mirroring_collector_rule#dst_ip_ranges NetworkSecurityUllMirroringCollectorRule#dst_ip_ranges}

---

##### `IpProtocols`<sup>Optional</sup> <a name="IpProtocols" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatch.property.ipProtocols"></a>

```go
IpProtocols *[]*string
```

- *Type:* *[]*string

IP protocols to match. When unset, matches any IP protocol. Examples: "tcp", "udp", "icmp". If unset, matches any IP protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/network_security_ull_mirroring_collector_rule#ip_protocols NetworkSecurityUllMirroringCollectorRule#ip_protocols}

---

##### `SrcIpRanges`<sup>Optional</sup> <a name="SrcIpRanges" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatch.property.srcIpRanges"></a>

```go
SrcIpRanges *[]*string
```

- *Type:* *[]*string

Source IP ranges to match. When unset, matches any source IP range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/network_security_ull_mirroring_collector_rule#src_ip_ranges NetworkSecurityUllMirroringCollectorRule#src_ip_ranges}

---

### NetworkSecurityUllMirroringCollectorRuleTimeouts <a name="NetworkSecurityUllMirroringCollectorRuleTimeouts" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networksecurityullmirroringcollectorrule"

&networksecurityullmirroringcollectorrule.NetworkSecurityUllMirroringCollectorRuleTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/network_security_ull_mirroring_collector_rule#create NetworkSecurityUllMirroringCollectorRule#create}. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/network_security_ull_mirroring_collector_rule#delete NetworkSecurityUllMirroringCollectorRule#delete}. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/network_security_ull_mirroring_collector_rule#update NetworkSecurityUllMirroringCollectorRule#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/network_security_ull_mirroring_collector_rule#create NetworkSecurityUllMirroringCollectorRule#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/network_security_ull_mirroring_collector_rule#delete NetworkSecurityUllMirroringCollectorRule#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/network_security_ull_mirroring_collector_rule#update NetworkSecurityUllMirroringCollectorRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkSecurityUllMirroringCollectorRuleMatchOutputReference <a name="NetworkSecurityUllMirroringCollectorRuleMatchOutputReference" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networksecurityullmirroringcollectorrule"

networksecurityullmirroringcollectorrule.NewNetworkSecurityUllMirroringCollectorRuleMatchOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkSecurityUllMirroringCollectorRuleMatchOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.resetDirection">ResetDirection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.resetDstIpRanges">ResetDstIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.resetIpProtocols">ResetIpProtocols</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.resetSrcIpRanges">ResetSrcIpRanges</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDirection` <a name="ResetDirection" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.resetDirection"></a>

```go
func ResetDirection()
```

##### `ResetDstIpRanges` <a name="ResetDstIpRanges" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.resetDstIpRanges"></a>

```go
func ResetDstIpRanges()
```

##### `ResetIpProtocols` <a name="ResetIpProtocols" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.resetIpProtocols"></a>

```go
func ResetIpProtocols()
```

##### `ResetSrcIpRanges` <a name="ResetSrcIpRanges" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.resetSrcIpRanges"></a>

```go
func ResetSrcIpRanges()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.directionInput">DirectionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.dstIpRangesInput">DstIpRangesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.ipProtocolsInput">IpProtocolsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.srcIpRangesInput">SrcIpRangesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.direction">Direction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.dstIpRanges">DstIpRanges</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.ipProtocols">IpProtocols</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.srcIpRanges">SrcIpRanges</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatch">NetworkSecurityUllMirroringCollectorRuleMatch</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DirectionInput`<sup>Optional</sup> <a name="DirectionInput" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.directionInput"></a>

```go
func DirectionInput() *string
```

- *Type:* *string

---

##### `DstIpRangesInput`<sup>Optional</sup> <a name="DstIpRangesInput" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.dstIpRangesInput"></a>

```go
func DstIpRangesInput() *[]*string
```

- *Type:* *[]*string

---

##### `IpProtocolsInput`<sup>Optional</sup> <a name="IpProtocolsInput" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.ipProtocolsInput"></a>

```go
func IpProtocolsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SrcIpRangesInput`<sup>Optional</sup> <a name="SrcIpRangesInput" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.srcIpRangesInput"></a>

```go
func SrcIpRangesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.direction"></a>

```go
func Direction() *string
```

- *Type:* *string

---

##### `DstIpRanges`<sup>Required</sup> <a name="DstIpRanges" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.dstIpRanges"></a>

```go
func DstIpRanges() *[]*string
```

- *Type:* *[]*string

---

##### `IpProtocols`<sup>Required</sup> <a name="IpProtocols" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.ipProtocols"></a>

```go
func IpProtocols() *[]*string
```

- *Type:* *[]*string

---

##### `SrcIpRanges`<sup>Required</sup> <a name="SrcIpRanges" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.srcIpRanges"></a>

```go
func SrcIpRanges() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.internalValue"></a>

```go
func InternalValue() NetworkSecurityUllMirroringCollectorRuleMatch
```

- *Type:* <a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatch">NetworkSecurityUllMirroringCollectorRuleMatch</a>

---


### NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference <a name="NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networksecurityullmirroringcollectorrule"

networksecurityullmirroringcollectorrule.NewNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



