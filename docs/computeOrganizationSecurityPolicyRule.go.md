# `computeOrganizationSecurityPolicyRule` Submodule <a name="`computeOrganizationSecurityPolicyRule` Submodule" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeOrganizationSecurityPolicyRule <a name="ComputeOrganizationSecurityPolicyRule" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy_rule google_compute_organization_security_policy_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/computeorganizationsecuritypolicyrule"

computeorganizationsecuritypolicyrule.NewComputeOrganizationSecurityPolicyRule(scope Construct, id *string, config ComputeOrganizationSecurityPolicyRuleConfig) ComputeOrganizationSecurityPolicyRule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleConfig">ComputeOrganizationSecurityPolicyRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleConfig">ComputeOrganizationSecurityPolicyRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.putHeaderAction">PutHeaderAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.putMatch">PutMatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.putPreconfiguredWafConfig">PutPreconfiguredWafConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.putRedirectOptions">PutRedirectOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.resetHeaderAction">ResetHeaderAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.resetPreconfiguredWafConfig">ResetPreconfiguredWafConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.resetPreview">ResetPreview</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.resetRedirectOptions">ResetRedirectOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutHeaderAction` <a name="PutHeaderAction" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.putHeaderAction"></a>

```go
func PutHeaderAction(value ComputeOrganizationSecurityPolicyRuleHeaderAction)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.putHeaderAction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderAction">ComputeOrganizationSecurityPolicyRuleHeaderAction</a>

---

##### `PutMatch` <a name="PutMatch" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.putMatch"></a>

```go
func PutMatch(value ComputeOrganizationSecurityPolicyRuleMatch)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.putMatch.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatch">ComputeOrganizationSecurityPolicyRuleMatch</a>

---

##### `PutPreconfiguredWafConfig` <a name="PutPreconfiguredWafConfig" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.putPreconfiguredWafConfig"></a>

```go
func PutPreconfiguredWafConfig(value ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.putPreconfiguredWafConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfig">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfig</a>

---

##### `PutRedirectOptions` <a name="PutRedirectOptions" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.putRedirectOptions"></a>

```go
func PutRedirectOptions(value ComputeOrganizationSecurityPolicyRuleRedirectOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.putRedirectOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptions">ComputeOrganizationSecurityPolicyRuleRedirectOptions</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.putTimeouts"></a>

```go
func PutTimeouts(value ComputeOrganizationSecurityPolicyRuleTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeouts">ComputeOrganizationSecurityPolicyRuleTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetHeaderAction` <a name="ResetHeaderAction" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.resetHeaderAction"></a>

```go
func ResetHeaderAction()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.resetId"></a>

```go
func ResetId()
```

##### `ResetPreconfiguredWafConfig` <a name="ResetPreconfiguredWafConfig" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.resetPreconfiguredWafConfig"></a>

```go
func ResetPreconfiguredWafConfig()
```

##### `ResetPreview` <a name="ResetPreview" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.resetPreview"></a>

```go
func ResetPreview()
```

##### `ResetRedirectOptions` <a name="ResetRedirectOptions" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.resetRedirectOptions"></a>

```go
func ResetRedirectOptions()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ComputeOrganizationSecurityPolicyRule resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/computeorganizationsecuritypolicyrule"

computeorganizationsecuritypolicyrule.ComputeOrganizationSecurityPolicyRule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/computeorganizationsecuritypolicyrule"

computeorganizationsecuritypolicyrule.ComputeOrganizationSecurityPolicyRule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/computeorganizationsecuritypolicyrule"

computeorganizationsecuritypolicyrule.ComputeOrganizationSecurityPolicyRule_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/computeorganizationsecuritypolicyrule"

computeorganizationsecuritypolicyrule.ComputeOrganizationSecurityPolicyRule_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ComputeOrganizationSecurityPolicyRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ComputeOrganizationSecurityPolicyRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ComputeOrganizationSecurityPolicyRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ComputeOrganizationSecurityPolicyRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.headerAction">HeaderAction</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference">ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.match">Match</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference">ComputeOrganizationSecurityPolicyRuleMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.preconfiguredWafConfig">PreconfiguredWafConfig</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.redirectOptions">RedirectOptions</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference">ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference">ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.actionInput">ActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.headerActionInput">HeaderActionInput</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderAction">ComputeOrganizationSecurityPolicyRuleHeaderAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.matchInput">MatchInput</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatch">ComputeOrganizationSecurityPolicyRuleMatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.policyIdInput">PolicyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.preconfiguredWafConfigInput">PreconfiguredWafConfigInput</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfig">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.previewInput">PreviewInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.priorityInput">PriorityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.redirectOptionsInput">RedirectOptionsInput</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptions">ComputeOrganizationSecurityPolicyRuleRedirectOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.policyId">PolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.preview">Preview</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `HeaderAction`<sup>Required</sup> <a name="HeaderAction" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.headerAction"></a>

```go
func HeaderAction() ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference">ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference</a>

---

##### `Match`<sup>Required</sup> <a name="Match" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.match"></a>

```go
func Match() ComputeOrganizationSecurityPolicyRuleMatchOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference">ComputeOrganizationSecurityPolicyRuleMatchOutputReference</a>

---

##### `PreconfiguredWafConfig`<sup>Required</sup> <a name="PreconfiguredWafConfig" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.preconfiguredWafConfig"></a>

```go
func PreconfiguredWafConfig() ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference</a>

---

##### `RedirectOptions`<sup>Required</sup> <a name="RedirectOptions" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.redirectOptions"></a>

```go
func RedirectOptions() ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference">ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.timeouts"></a>

```go
func Timeouts() ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference">ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.actionInput"></a>

```go
func ActionInput() *string
```

- *Type:* *string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `HeaderActionInput`<sup>Optional</sup> <a name="HeaderActionInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.headerActionInput"></a>

```go
func HeaderActionInput() ComputeOrganizationSecurityPolicyRuleHeaderAction
```

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderAction">ComputeOrganizationSecurityPolicyRuleHeaderAction</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MatchInput`<sup>Optional</sup> <a name="MatchInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.matchInput"></a>

```go
func MatchInput() ComputeOrganizationSecurityPolicyRuleMatch
```

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatch">ComputeOrganizationSecurityPolicyRuleMatch</a>

---

##### `PolicyIdInput`<sup>Optional</sup> <a name="PolicyIdInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.policyIdInput"></a>

```go
func PolicyIdInput() *string
```

- *Type:* *string

---

##### `PreconfiguredWafConfigInput`<sup>Optional</sup> <a name="PreconfiguredWafConfigInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.preconfiguredWafConfigInput"></a>

```go
func PreconfiguredWafConfigInput() ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfig
```

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfig">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfig</a>

---

##### `PreviewInput`<sup>Optional</sup> <a name="PreviewInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.previewInput"></a>

```go
func PreviewInput() interface{}
```

- *Type:* interface{}

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.priorityInput"></a>

```go
func PriorityInput() *f64
```

- *Type:* *f64

---

##### `RedirectOptionsInput`<sup>Optional</sup> <a name="RedirectOptionsInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.redirectOptionsInput"></a>

```go
func RedirectOptionsInput() ComputeOrganizationSecurityPolicyRuleRedirectOptions
```

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptions">ComputeOrganizationSecurityPolicyRuleRedirectOptions</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.policyId"></a>

```go
func PolicyId() *string
```

- *Type:* *string

---

##### `Preview`<sup>Required</sup> <a name="Preview" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.preview"></a>

```go
func Preview() interface{}
```

- *Type:* interface{}

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeOrganizationSecurityPolicyRuleConfig <a name="ComputeOrganizationSecurityPolicyRuleConfig" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/computeorganizationsecuritypolicyrule"

&computeorganizationsecuritypolicyrule.ComputeOrganizationSecurityPolicyRuleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Action: *string,
	Match: github.com/cdktn-io/cdktn-provider-google-go/google/v19.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatch,
	PolicyId: *string,
	Priority: *f64,
	DeletionPolicy: *string,
	Description: *string,
	HeaderAction: github.com/cdktn-io/cdktn-provider-google-go/google/v19.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderAction,
	Id: *string,
	PreconfiguredWafConfig: github.com/cdktn-io/cdktn-provider-google-go/google/v19.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfig,
	Preview: interface{},
	RedirectOptions: github.com/cdktn-io/cdktn-provider-google-go/google/v19.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptions,
	Timeouts: github.com/cdktn-io/cdktn-provider-google-go/google/v19.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleConfig.property.action">Action</a></code> | <code>*string</code> | The Action to perform when the client connection triggers the rule. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleConfig.property.match">Match</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatch">ComputeOrganizationSecurityPolicyRuleMatch</a></code> | match block. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleConfig.property.policyId">PolicyId</a></code> | <code>*string</code> | The ID of the OrganizationSecurityPolicy this rule applies to. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleConfig.property.priority">Priority</a></code> | <code>*f64</code> | An integer indicating the priority of a rule in the list. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleConfig.property.description">Description</a></code> | <code>*string</code> | A description of the rule. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleConfig.property.headerAction">HeaderAction</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderAction">ComputeOrganizationSecurityPolicyRuleHeaderAction</a></code> | header_action block. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy_rule#id ComputeOrganizationSecurityPolicyRule#id}. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleConfig.property.preconfiguredWafConfig">PreconfiguredWafConfig</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfig">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfig</a></code> | preconfigured_waf_config block. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleConfig.property.preview">Preview</a></code> | <code>interface{}</code> | If set to true, the specified action is not enforced. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleConfig.property.redirectOptions">RedirectOptions</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptions">ComputeOrganizationSecurityPolicyRuleRedirectOptions</a></code> | redirect_options block. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeouts">ComputeOrganizationSecurityPolicyRuleTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleConfig.property.action"></a>

```go
Action *string
```

- *Type:* *string

The Action to perform when the client connection triggers the rule.

Valid actions are:
"allow": allow access to target.
"deny": deny access to target.
"goto_next": forward the request to the next hierarchical policy for evaluation.
"redirect": redirect to a different target. Parameters for this action can be configured via redirectOptions. Only EXTERNAL_302 redirect type is supported for organization security policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy_rule#action ComputeOrganizationSecurityPolicyRule#action}

---

##### `Match`<sup>Required</sup> <a name="Match" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleConfig.property.match"></a>

```go
Match ComputeOrganizationSecurityPolicyRuleMatch
```

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatch">ComputeOrganizationSecurityPolicyRuleMatch</a>

match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy_rule#match ComputeOrganizationSecurityPolicyRule#match}

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleConfig.property.policyId"></a>

```go
PolicyId *string
```

- *Type:* *string

The ID of the OrganizationSecurityPolicy this rule applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy_rule#policy_id ComputeOrganizationSecurityPolicyRule#policy_id}

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleConfig.property.priority"></a>

```go
Priority *f64
```

- *Type:* *f64

An integer indicating the priority of a rule in the list.

The priority must be a value
between 0 and 2147483647. Rules are evaluated from highest to lowest priority where 0 is the
highest priority and 2147483647 is the lowest prority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy_rule#priority ComputeOrganizationSecurityPolicyRule#priority}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy_rule#deletion_policy ComputeOrganizationSecurityPolicyRule#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A description of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy_rule#description ComputeOrganizationSecurityPolicyRule#description}

---

##### `HeaderAction`<sup>Optional</sup> <a name="HeaderAction" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleConfig.property.headerAction"></a>

```go
HeaderAction ComputeOrganizationSecurityPolicyRuleHeaderAction
```

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderAction">ComputeOrganizationSecurityPolicyRuleHeaderAction</a>

header_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy_rule#header_action ComputeOrganizationSecurityPolicyRule#header_action}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy_rule#id ComputeOrganizationSecurityPolicyRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PreconfiguredWafConfig`<sup>Optional</sup> <a name="PreconfiguredWafConfig" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleConfig.property.preconfiguredWafConfig"></a>

```go
PreconfiguredWafConfig ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfig
```

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfig">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfig</a>

preconfigured_waf_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy_rule#preconfigured_waf_config ComputeOrganizationSecurityPolicyRule#preconfigured_waf_config}

---

##### `Preview`<sup>Optional</sup> <a name="Preview" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleConfig.property.preview"></a>

```go
Preview interface{}
```

- *Type:* interface{}

If set to true, the specified action is not enforced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy_rule#preview ComputeOrganizationSecurityPolicyRule#preview}

---

##### `RedirectOptions`<sup>Optional</sup> <a name="RedirectOptions" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleConfig.property.redirectOptions"></a>

```go
RedirectOptions ComputeOrganizationSecurityPolicyRuleRedirectOptions
```

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptions">ComputeOrganizationSecurityPolicyRuleRedirectOptions</a>

redirect_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy_rule#redirect_options ComputeOrganizationSecurityPolicyRule#redirect_options}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleConfig.property.timeouts"></a>

```go
Timeouts ComputeOrganizationSecurityPolicyRuleTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeouts">ComputeOrganizationSecurityPolicyRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy_rule#timeouts ComputeOrganizationSecurityPolicyRule#timeouts}

---

### ComputeOrganizationSecurityPolicyRuleHeaderAction <a name="ComputeOrganizationSecurityPolicyRuleHeaderAction" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderAction.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/computeorganizationsecuritypolicyrule"

&computeorganizationsecuritypolicyrule.ComputeOrganizationSecurityPolicyRuleHeaderAction {
	RequestHeadersToAdds: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderAction.property.requestHeadersToAdds">RequestHeadersToAdds</a></code> | <code>interface{}</code> | request_headers_to_adds block. |

---

##### `RequestHeadersToAdds`<sup>Optional</sup> <a name="RequestHeadersToAdds" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderAction.property.requestHeadersToAdds"></a>

```go
RequestHeadersToAdds interface{}
```

- *Type:* interface{}

request_headers_to_adds block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy_rule#request_headers_to_adds ComputeOrganizationSecurityPolicyRule#request_headers_to_adds}

---

### ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAdds <a name="ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAdds" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAdds"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAdds.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/computeorganizationsecuritypolicyrule"

&computeorganizationsecuritypolicyrule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAdds {
	HeaderName: *string,
	HeaderValue: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAdds.property.headerName">HeaderName</a></code> | <code>*string</code> | The name of the header to set. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAdds.property.headerValue">HeaderValue</a></code> | <code>*string</code> | The value to set the named header to. |

---

##### `HeaderName`<sup>Optional</sup> <a name="HeaderName" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAdds.property.headerName"></a>

```go
HeaderName *string
```

- *Type:* *string

The name of the header to set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy_rule#header_name ComputeOrganizationSecurityPolicyRule#header_name}

---

##### `HeaderValue`<sup>Optional</sup> <a name="HeaderValue" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAdds.property.headerValue"></a>

```go
HeaderValue *string
```

- *Type:* *string

The value to set the named header to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy_rule#header_value ComputeOrganizationSecurityPolicyRule#header_value}

---

### ComputeOrganizationSecurityPolicyRuleMatch <a name="ComputeOrganizationSecurityPolicyRuleMatch" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatch"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatch.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/computeorganizationsecuritypolicyrule"

&computeorganizationsecuritypolicyrule.ComputeOrganizationSecurityPolicyRuleMatch {
	Config: github.com/cdktn-io/cdktn-provider-google-go/google/v19.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfig,
	Description: *string,
	Expr: github.com/cdktn-io/cdktn-provider-google-go/google/v19.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExpr,
	VersionedExpr: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatch.property.config">Config</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfig">ComputeOrganizationSecurityPolicyRuleMatchConfig</a></code> | config block. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatch.property.description">Description</a></code> | <code>*string</code> | A description of the rule. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatch.property.expr">Expr</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExpr">ComputeOrganizationSecurityPolicyRuleMatchExpr</a></code> | expr block. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatch.property.versionedExpr">VersionedExpr</a></code> | <code>*string</code> | Preconfigured versioned expression. |

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatch.property.config"></a>

```go
Config ComputeOrganizationSecurityPolicyRuleMatchConfig
```

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfig">ComputeOrganizationSecurityPolicyRuleMatchConfig</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy_rule#config ComputeOrganizationSecurityPolicyRule#config}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatch.property.description"></a>

```go
Description *string
```

- *Type:* *string

A description of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy_rule#description ComputeOrganizationSecurityPolicyRule#description}

---

##### `Expr`<sup>Optional</sup> <a name="Expr" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatch.property.expr"></a>

```go
Expr ComputeOrganizationSecurityPolicyRuleMatchExpr
```

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExpr">ComputeOrganizationSecurityPolicyRuleMatchExpr</a>

expr block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy_rule#expr ComputeOrganizationSecurityPolicyRule#expr}

---

##### `VersionedExpr`<sup>Optional</sup> <a name="VersionedExpr" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatch.property.versionedExpr"></a>

```go
VersionedExpr *string
```

- *Type:* *string

Preconfigured versioned expression.

For organization security policy rules,
the only supported type is "SRC_IPS_V1".
**NOTE** : 'FIREWALL' type is deprecated. Please use 'google_compute_firewall_policy_rule' resource instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy_rule#versioned_expr ComputeOrganizationSecurityPolicyRule#versioned_expr}

---

### ComputeOrganizationSecurityPolicyRuleMatchConfig <a name="ComputeOrganizationSecurityPolicyRuleMatchConfig" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/computeorganizationsecuritypolicyrule"

&computeorganizationsecuritypolicyrule.ComputeOrganizationSecurityPolicyRuleMatchConfig {
	SrcIpRanges: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfig.property.srcIpRanges">SrcIpRanges</a></code> | <code>*[]*string</code> | Source IP address range in CIDR format. Required for INGRESS rules. |

---

##### `SrcIpRanges`<sup>Optional</sup> <a name="SrcIpRanges" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfig.property.srcIpRanges"></a>

```go
SrcIpRanges *[]*string
```

- *Type:* *[]*string

Source IP address range in CIDR format. Required for INGRESS rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy_rule#src_ip_ranges ComputeOrganizationSecurityPolicyRule#src_ip_ranges}

---

### ComputeOrganizationSecurityPolicyRuleMatchExpr <a name="ComputeOrganizationSecurityPolicyRuleMatchExpr" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExpr"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExpr.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/computeorganizationsecuritypolicyrule"

&computeorganizationsecuritypolicyrule.ComputeOrganizationSecurityPolicyRuleMatchExpr {
	Expression: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExpr.property.expression">Expression</a></code> | <code>*string</code> | Textual representation of an expression in Common Expression Language syntax. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExpr.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

Textual representation of an expression in Common Expression Language syntax.

The application context of the containing message determines which well-known feature set of CEL is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy_rule#expression ComputeOrganizationSecurityPolicyRule#expression}

---

### ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfig <a name="ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfig" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/computeorganizationsecuritypolicyrule"

&computeorganizationsecuritypolicyrule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfig {
	Exclusion: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfig.property.exclusion">Exclusion</a></code> | <code>interface{}</code> | exclusion block. |

---

##### `Exclusion`<sup>Optional</sup> <a name="Exclusion" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfig.property.exclusion"></a>

```go
Exclusion interface{}
```

- *Type:* interface{}

exclusion block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy_rule#exclusion ComputeOrganizationSecurityPolicyRule#exclusion}

---

### ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion <a name="ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/computeorganizationsecuritypolicyrule"

&computeorganizationsecuritypolicyrule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion {
	TargetRuleSet: *string,
	RequestCookie: interface{},
	RequestHeader: interface{},
	RequestQueryParam: interface{},
	RequestUri: interface{},
	TargetRuleIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion.property.targetRuleSet">TargetRuleSet</a></code> | <code>*string</code> | Target WAF rule set to apply the preconfigured WAF exclusion. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion.property.requestCookie">RequestCookie</a></code> | <code>interface{}</code> | request_cookie block. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion.property.requestHeader">RequestHeader</a></code> | <code>interface{}</code> | request_header block. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion.property.requestQueryParam">RequestQueryParam</a></code> | <code>interface{}</code> | request_query_param block. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion.property.requestUri">RequestUri</a></code> | <code>interface{}</code> | request_uri block. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion.property.targetRuleIds">TargetRuleIds</a></code> | <code>*[]*string</code> | A list of target rule IDs under the WAF rule set to apply the preconfigured WAF exclusion. |

---

##### `TargetRuleSet`<sup>Required</sup> <a name="TargetRuleSet" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion.property.targetRuleSet"></a>

```go
TargetRuleSet *string
```

- *Type:* *string

Target WAF rule set to apply the preconfigured WAF exclusion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy_rule#target_rule_set ComputeOrganizationSecurityPolicyRule#target_rule_set}

---

##### `RequestCookie`<sup>Optional</sup> <a name="RequestCookie" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion.property.requestCookie"></a>

```go
RequestCookie interface{}
```

- *Type:* interface{}

request_cookie block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy_rule#request_cookie ComputeOrganizationSecurityPolicyRule#request_cookie}

---

##### `RequestHeader`<sup>Optional</sup> <a name="RequestHeader" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion.property.requestHeader"></a>

```go
RequestHeader interface{}
```

- *Type:* interface{}

request_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy_rule#request_header ComputeOrganizationSecurityPolicyRule#request_header}

---

##### `RequestQueryParam`<sup>Optional</sup> <a name="RequestQueryParam" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion.property.requestQueryParam"></a>

```go
RequestQueryParam interface{}
```

- *Type:* interface{}

request_query_param block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy_rule#request_query_param ComputeOrganizationSecurityPolicyRule#request_query_param}

---

##### `RequestUri`<sup>Optional</sup> <a name="RequestUri" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion.property.requestUri"></a>

```go
RequestUri interface{}
```

- *Type:* interface{}

request_uri block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy_rule#request_uri ComputeOrganizationSecurityPolicyRule#request_uri}

---

##### `TargetRuleIds`<sup>Optional</sup> <a name="TargetRuleIds" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion.property.targetRuleIds"></a>

```go
TargetRuleIds *[]*string
```

- *Type:* *[]*string

A list of target rule IDs under the WAF rule set to apply the preconfigured WAF exclusion.

If omitted, it refers to all the rule IDs under the WAF rule set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy_rule#target_rule_ids ComputeOrganizationSecurityPolicyRule#target_rule_ids}

---

### ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie <a name="ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/computeorganizationsecuritypolicyrule"

&computeorganizationsecuritypolicyrule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie {
	Operator: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie.property.operator">Operator</a></code> | <code>*string</code> | You can specify an exact match or a partial match by using a field operator and a field value. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie.property.value">Value</a></code> | <code>*string</code> | A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

You can specify an exact match or a partial match by using a field operator and a field value.

Available options:
EQUALS: The operator matches if the field value equals the specified value.
STARTS_WITH: The operator matches if the field value starts with the specified value.
ENDS_WITH: The operator matches if the field value ends with the specified value.
CONTAINS: The operator matches if the field value contains the specified value.
EQUALS_ANY: The operator matches if the field value is any value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy_rule#operator ComputeOrganizationSecurityPolicyRule#operator}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie.property.value"></a>

```go
Value *string
```

- *Type:* *string

A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation.

The field value must be given if the field operator is not EQUALS_ANY, and cannot be given if the field operator is EQUALS_ANY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy_rule#value ComputeOrganizationSecurityPolicyRule#value}

---

### ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader <a name="ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/computeorganizationsecuritypolicyrule"

&computeorganizationsecuritypolicyrule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader {
	Operator: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader.property.operator">Operator</a></code> | <code>*string</code> | You can specify an exact match or a partial match by using a field operator and a field value. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader.property.value">Value</a></code> | <code>*string</code> | A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

You can specify an exact match or a partial match by using a field operator and a field value.

Available options:
EQUALS: The operator matches if the field value equals the specified value.
STARTS_WITH: The operator matches if the field value starts with the specified value.
ENDS_WITH: The operator matches if the field value ends with the specified value.
CONTAINS: The operator matches if the field value contains the specified value.
EQUALS_ANY: The operator matches if the field value is any value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy_rule#operator ComputeOrganizationSecurityPolicyRule#operator}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader.property.value"></a>

```go
Value *string
```

- *Type:* *string

A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation.

The field value must be given if the field operator is not EQUALS_ANY, and cannot be given if the field operator is EQUALS_ANY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy_rule#value ComputeOrganizationSecurityPolicyRule#value}

---

### ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam <a name="ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/computeorganizationsecuritypolicyrule"

&computeorganizationsecuritypolicyrule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam {
	Operator: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam.property.operator">Operator</a></code> | <code>*string</code> | You can specify an exact match or a partial match by using a field operator and a field value. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam.property.value">Value</a></code> | <code>*string</code> | A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

You can specify an exact match or a partial match by using a field operator and a field value.

Available options:
EQUALS: The operator matches if the field value equals the specified value.
STARTS_WITH: The operator matches if the field value starts with the specified value.
ENDS_WITH: The operator matches if the field value ends with the specified value.
CONTAINS: The operator matches if the field value contains the specified value.
EQUALS_ANY: The operator matches if the field value is any value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy_rule#operator ComputeOrganizationSecurityPolicyRule#operator}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam.property.value"></a>

```go
Value *string
```

- *Type:* *string

A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation.

The field value must be given if the field operator is not EQUALS_ANY, and cannot be given if the field operator is EQUALS_ANY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy_rule#value ComputeOrganizationSecurityPolicyRule#value}

---

### ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri <a name="ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/computeorganizationsecuritypolicyrule"

&computeorganizationsecuritypolicyrule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri {
	Operator: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri.property.operator">Operator</a></code> | <code>*string</code> | You can specify an exact match or a partial match by using a field operator and a field value. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri.property.value">Value</a></code> | <code>*string</code> | A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

You can specify an exact match or a partial match by using a field operator and a field value.

Available options:
EQUALS: The operator matches if the field value equals the specified value.
STARTS_WITH: The operator matches if the field value starts with the specified value.
ENDS_WITH: The operator matches if the field value ends with the specified value.
CONTAINS: The operator matches if the field value contains the specified value.
EQUALS_ANY: The operator matches if the field value is any value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy_rule#operator ComputeOrganizationSecurityPolicyRule#operator}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri.property.value"></a>

```go
Value *string
```

- *Type:* *string

A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation.

The field value must be given if the field operator is not EQUALS_ANY, and cannot be given if the field operator is EQUALS_ANY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy_rule#value ComputeOrganizationSecurityPolicyRule#value}

---

### ComputeOrganizationSecurityPolicyRuleRedirectOptions <a name="ComputeOrganizationSecurityPolicyRuleRedirectOptions" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/computeorganizationsecuritypolicyrule"

&computeorganizationsecuritypolicyrule.ComputeOrganizationSecurityPolicyRuleRedirectOptions {
	Type: *string,
	Target: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptions.property.type">Type</a></code> | <code>*string</code> | Type of the redirect action. For organization security policies, only EXTERNAL_302 is supported. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptions.property.target">Target</a></code> | <code>*string</code> | Target for the redirect action. This is required if the type is EXTERNAL_302. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptions.property.type"></a>

```go
Type *string
```

- *Type:* *string

Type of the redirect action. For organization security policies, only EXTERNAL_302 is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy_rule#type ComputeOrganizationSecurityPolicyRule#type}

---

##### `Target`<sup>Optional</sup> <a name="Target" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptions.property.target"></a>

```go
Target *string
```

- *Type:* *string

Target for the redirect action. This is required if the type is EXTERNAL_302.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy_rule#target ComputeOrganizationSecurityPolicyRule#target}

---

### ComputeOrganizationSecurityPolicyRuleTimeouts <a name="ComputeOrganizationSecurityPolicyRuleTimeouts" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/computeorganizationsecuritypolicyrule"

&computeorganizationsecuritypolicyrule.ComputeOrganizationSecurityPolicyRuleTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy_rule#create ComputeOrganizationSecurityPolicyRule#create}. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy_rule#delete ComputeOrganizationSecurityPolicyRule#delete}. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy_rule#update ComputeOrganizationSecurityPolicyRule#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy_rule#create ComputeOrganizationSecurityPolicyRule#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy_rule#delete ComputeOrganizationSecurityPolicyRule#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy_rule#update ComputeOrganizationSecurityPolicyRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference <a name="ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/computeorganizationsecuritypolicyrule"

computeorganizationsecuritypolicyrule.NewComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.putRequestHeadersToAdds">PutRequestHeadersToAdds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.resetRequestHeadersToAdds">ResetRequestHeadersToAdds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRequestHeadersToAdds` <a name="PutRequestHeadersToAdds" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.putRequestHeadersToAdds"></a>

```go
func PutRequestHeadersToAdds(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.putRequestHeadersToAdds.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetRequestHeadersToAdds` <a name="ResetRequestHeadersToAdds" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.resetRequestHeadersToAdds"></a>

```go
func ResetRequestHeadersToAdds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.property.requestHeadersToAdds">RequestHeadersToAdds</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList">ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.property.requestHeadersToAddsInput">RequestHeadersToAddsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderAction">ComputeOrganizationSecurityPolicyRuleHeaderAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RequestHeadersToAdds`<sup>Required</sup> <a name="RequestHeadersToAdds" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.property.requestHeadersToAdds"></a>

```go
func RequestHeadersToAdds() ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList
```

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList">ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList</a>

---

##### `RequestHeadersToAddsInput`<sup>Optional</sup> <a name="RequestHeadersToAddsInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.property.requestHeadersToAddsInput"></a>

```go
func RequestHeadersToAddsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeOrganizationSecurityPolicyRuleHeaderAction
```

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderAction">ComputeOrganizationSecurityPolicyRuleHeaderAction</a>

---


### ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList <a name="ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/computeorganizationsecuritypolicyrule"

computeorganizationsecuritypolicyrule.NewComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.get"></a>

```go
func Get(index *f64) ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference <a name="ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/computeorganizationsecuritypolicyrule"

computeorganizationsecuritypolicyrule.NewComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.resetHeaderName">ResetHeaderName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.resetHeaderValue">ResetHeaderValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHeaderName` <a name="ResetHeaderName" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.resetHeaderName"></a>

```go
func ResetHeaderName()
```

##### `ResetHeaderValue` <a name="ResetHeaderValue" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.resetHeaderValue"></a>

```go
func ResetHeaderValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.property.headerNameInput">HeaderNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.property.headerValueInput">HeaderValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.property.headerName">HeaderName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.property.headerValue">HeaderValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HeaderNameInput`<sup>Optional</sup> <a name="HeaderNameInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.property.headerNameInput"></a>

```go
func HeaderNameInput() *string
```

- *Type:* *string

---

##### `HeaderValueInput`<sup>Optional</sup> <a name="HeaderValueInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.property.headerValueInput"></a>

```go
func HeaderValueInput() *string
```

- *Type:* *string

---

##### `HeaderName`<sup>Required</sup> <a name="HeaderName" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.property.headerName"></a>

```go
func HeaderName() *string
```

- *Type:* *string

---

##### `HeaderValue`<sup>Required</sup> <a name="HeaderValue" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.property.headerValue"></a>

```go
func HeaderValue() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference <a name="ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/computeorganizationsecuritypolicyrule"

computeorganizationsecuritypolicyrule.NewComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.resetSrcIpRanges">ResetSrcIpRanges</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSrcIpRanges` <a name="ResetSrcIpRanges" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.resetSrcIpRanges"></a>

```go
func ResetSrcIpRanges()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.property.srcIpRangesInput">SrcIpRangesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.property.srcIpRanges">SrcIpRanges</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfig">ComputeOrganizationSecurityPolicyRuleMatchConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SrcIpRangesInput`<sup>Optional</sup> <a name="SrcIpRangesInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.property.srcIpRangesInput"></a>

```go
func SrcIpRangesInput() *[]*string
```

- *Type:* *[]*string

---

##### `SrcIpRanges`<sup>Required</sup> <a name="SrcIpRanges" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.property.srcIpRanges"></a>

```go
func SrcIpRanges() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeOrganizationSecurityPolicyRuleMatchConfig
```

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfig">ComputeOrganizationSecurityPolicyRuleMatchConfig</a>

---


### ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference <a name="ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/computeorganizationsecuritypolicyrule"

computeorganizationsecuritypolicyrule.NewComputeOrganizationSecurityPolicyRuleMatchExprOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExpr">ComputeOrganizationSecurityPolicyRuleMatchExpr</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeOrganizationSecurityPolicyRuleMatchExpr
```

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExpr">ComputeOrganizationSecurityPolicyRuleMatchExpr</a>

---


### ComputeOrganizationSecurityPolicyRuleMatchOutputReference <a name="ComputeOrganizationSecurityPolicyRuleMatchOutputReference" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/computeorganizationsecuritypolicyrule"

computeorganizationsecuritypolicyrule.NewComputeOrganizationSecurityPolicyRuleMatchOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeOrganizationSecurityPolicyRuleMatchOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.putConfig">PutConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.putExpr">PutExpr</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.resetConfig">ResetConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.resetExpr">ResetExpr</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.resetVersionedExpr">ResetVersionedExpr</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConfig` <a name="PutConfig" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.putConfig"></a>

```go
func PutConfig(value ComputeOrganizationSecurityPolicyRuleMatchConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfig">ComputeOrganizationSecurityPolicyRuleMatchConfig</a>

---

##### `PutExpr` <a name="PutExpr" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.putExpr"></a>

```go
func PutExpr(value ComputeOrganizationSecurityPolicyRuleMatchExpr)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.putExpr.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExpr">ComputeOrganizationSecurityPolicyRuleMatchExpr</a>

---

##### `ResetConfig` <a name="ResetConfig" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.resetConfig"></a>

```go
func ResetConfig()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetExpr` <a name="ResetExpr" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.resetExpr"></a>

```go
func ResetExpr()
```

##### `ResetVersionedExpr` <a name="ResetVersionedExpr" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.resetVersionedExpr"></a>

```go
func ResetVersionedExpr()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.property.config">Config</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference">ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.property.expr">Expr</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference">ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.property.configInput">ConfigInput</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfig">ComputeOrganizationSecurityPolicyRuleMatchConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.property.exprInput">ExprInput</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExpr">ComputeOrganizationSecurityPolicyRuleMatchExpr</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.property.versionedExprInput">VersionedExprInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.property.versionedExpr">VersionedExpr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatch">ComputeOrganizationSecurityPolicyRuleMatch</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.property.config"></a>

```go
func Config() ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference">ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference</a>

---

##### `Expr`<sup>Required</sup> <a name="Expr" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.property.expr"></a>

```go
func Expr() ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference">ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference</a>

---

##### `ConfigInput`<sup>Optional</sup> <a name="ConfigInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.property.configInput"></a>

```go
func ConfigInput() ComputeOrganizationSecurityPolicyRuleMatchConfig
```

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfig">ComputeOrganizationSecurityPolicyRuleMatchConfig</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExprInput`<sup>Optional</sup> <a name="ExprInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.property.exprInput"></a>

```go
func ExprInput() ComputeOrganizationSecurityPolicyRuleMatchExpr
```

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExpr">ComputeOrganizationSecurityPolicyRuleMatchExpr</a>

---

##### `VersionedExprInput`<sup>Optional</sup> <a name="VersionedExprInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.property.versionedExprInput"></a>

```go
func VersionedExprInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `VersionedExpr`<sup>Required</sup> <a name="VersionedExpr" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.property.versionedExpr"></a>

```go
func VersionedExpr() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeOrganizationSecurityPolicyRuleMatch
```

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatch">ComputeOrganizationSecurityPolicyRuleMatch</a>

---


### ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList <a name="ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/computeorganizationsecuritypolicyrule"

computeorganizationsecuritypolicyrule.NewComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList.get"></a>

```go
func Get(index *f64) ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference <a name="ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/computeorganizationsecuritypolicyrule"

computeorganizationsecuritypolicyrule.NewComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.putRequestCookie">PutRequestCookie</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.putRequestHeader">PutRequestHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.putRequestQueryParam">PutRequestQueryParam</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.putRequestUri">PutRequestUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.resetRequestCookie">ResetRequestCookie</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.resetRequestHeader">ResetRequestHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.resetRequestQueryParam">ResetRequestQueryParam</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.resetRequestUri">ResetRequestUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.resetTargetRuleIds">ResetTargetRuleIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRequestCookie` <a name="PutRequestCookie" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.putRequestCookie"></a>

```go
func PutRequestCookie(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.putRequestCookie.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRequestHeader` <a name="PutRequestHeader" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.putRequestHeader"></a>

```go
func PutRequestHeader(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.putRequestHeader.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRequestQueryParam` <a name="PutRequestQueryParam" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.putRequestQueryParam"></a>

```go
func PutRequestQueryParam(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.putRequestQueryParam.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRequestUri` <a name="PutRequestUri" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.putRequestUri"></a>

```go
func PutRequestUri(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.putRequestUri.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetRequestCookie` <a name="ResetRequestCookie" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.resetRequestCookie"></a>

```go
func ResetRequestCookie()
```

##### `ResetRequestHeader` <a name="ResetRequestHeader" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.resetRequestHeader"></a>

```go
func ResetRequestHeader()
```

##### `ResetRequestQueryParam` <a name="ResetRequestQueryParam" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.resetRequestQueryParam"></a>

```go
func ResetRequestQueryParam()
```

##### `ResetRequestUri` <a name="ResetRequestUri" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.resetRequestUri"></a>

```go
func ResetRequestUri()
```

##### `ResetTargetRuleIds` <a name="ResetTargetRuleIds" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.resetTargetRuleIds"></a>

```go
func ResetTargetRuleIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestCookie">RequestCookie</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestHeader">RequestHeader</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestQueryParam">RequestQueryParam</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestUri">RequestUri</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestCookieInput">RequestCookieInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestHeaderInput">RequestHeaderInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestQueryParamInput">RequestQueryParamInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestUriInput">RequestUriInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.targetRuleIdsInput">TargetRuleIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.targetRuleSetInput">TargetRuleSetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.targetRuleIds">TargetRuleIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.targetRuleSet">TargetRuleSet</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RequestCookie`<sup>Required</sup> <a name="RequestCookie" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestCookie"></a>

```go
func RequestCookie() ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList
```

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList</a>

---

##### `RequestHeader`<sup>Required</sup> <a name="RequestHeader" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestHeader"></a>

```go
func RequestHeader() ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList
```

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList</a>

---

##### `RequestQueryParam`<sup>Required</sup> <a name="RequestQueryParam" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestQueryParam"></a>

```go
func RequestQueryParam() ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList
```

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList</a>

---

##### `RequestUri`<sup>Required</sup> <a name="RequestUri" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestUri"></a>

```go
func RequestUri() ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList
```

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList</a>

---

##### `RequestCookieInput`<sup>Optional</sup> <a name="RequestCookieInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestCookieInput"></a>

```go
func RequestCookieInput() interface{}
```

- *Type:* interface{}

---

##### `RequestHeaderInput`<sup>Optional</sup> <a name="RequestHeaderInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestHeaderInput"></a>

```go
func RequestHeaderInput() interface{}
```

- *Type:* interface{}

---

##### `RequestQueryParamInput`<sup>Optional</sup> <a name="RequestQueryParamInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestQueryParamInput"></a>

```go
func RequestQueryParamInput() interface{}
```

- *Type:* interface{}

---

##### `RequestUriInput`<sup>Optional</sup> <a name="RequestUriInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestUriInput"></a>

```go
func RequestUriInput() interface{}
```

- *Type:* interface{}

---

##### `TargetRuleIdsInput`<sup>Optional</sup> <a name="TargetRuleIdsInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.targetRuleIdsInput"></a>

```go
func TargetRuleIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TargetRuleSetInput`<sup>Optional</sup> <a name="TargetRuleSetInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.targetRuleSetInput"></a>

```go
func TargetRuleSetInput() *string
```

- *Type:* *string

---

##### `TargetRuleIds`<sup>Required</sup> <a name="TargetRuleIds" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.targetRuleIds"></a>

```go
func TargetRuleIds() *[]*string
```

- *Type:* *[]*string

---

##### `TargetRuleSet`<sup>Required</sup> <a name="TargetRuleSet" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.targetRuleSet"></a>

```go
func TargetRuleSet() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList <a name="ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/computeorganizationsecuritypolicyrule"

computeorganizationsecuritypolicyrule.NewComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.get"></a>

```go
func Get(index *f64) ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference <a name="ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/computeorganizationsecuritypolicyrule"

computeorganizationsecuritypolicyrule.NewComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList <a name="ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/computeorganizationsecuritypolicyrule"

computeorganizationsecuritypolicyrule.NewComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.get"></a>

```go
func Get(index *f64) ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference <a name="ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/computeorganizationsecuritypolicyrule"

computeorganizationsecuritypolicyrule.NewComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList <a name="ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/computeorganizationsecuritypolicyrule"

computeorganizationsecuritypolicyrule.NewComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.get"></a>

```go
func Get(index *f64) ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference <a name="ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/computeorganizationsecuritypolicyrule"

computeorganizationsecuritypolicyrule.NewComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList <a name="ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/computeorganizationsecuritypolicyrule"

computeorganizationsecuritypolicyrule.NewComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.get"></a>

```go
func Get(index *f64) ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference <a name="ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/computeorganizationsecuritypolicyrule"

computeorganizationsecuritypolicyrule.NewComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference <a name="ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/computeorganizationsecuritypolicyrule"

computeorganizationsecuritypolicyrule.NewComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.putExclusion">PutExclusion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.resetExclusion">ResetExclusion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExclusion` <a name="PutExclusion" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.putExclusion"></a>

```go
func PutExclusion(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.putExclusion.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetExclusion` <a name="ResetExclusion" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.resetExclusion"></a>

```go
func ResetExclusion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.property.exclusion">Exclusion</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.property.exclusionInput">ExclusionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfig">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Exclusion`<sup>Required</sup> <a name="Exclusion" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.property.exclusion"></a>

```go
func Exclusion() ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList
```

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList</a>

---

##### `ExclusionInput`<sup>Optional</sup> <a name="ExclusionInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.property.exclusionInput"></a>

```go
func ExclusionInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfig
```

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfig">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfig</a>

---


### ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference <a name="ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/computeorganizationsecuritypolicyrule"

computeorganizationsecuritypolicyrule.NewComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.resetTarget">ResetTarget</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTarget` <a name="ResetTarget" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.resetTarget"></a>

```go
func ResetTarget()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.property.targetInput">TargetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.property.target">Target</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptions">ComputeOrganizationSecurityPolicyRuleRedirectOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.property.targetInput"></a>

```go
func TargetInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.property.target"></a>

```go
func Target() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeOrganizationSecurityPolicyRuleRedirectOptions
```

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptions">ComputeOrganizationSecurityPolicyRuleRedirectOptions</a>

---


### ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference <a name="ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/computeorganizationsecuritypolicyrule"

computeorganizationsecuritypolicyrule.NewComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



