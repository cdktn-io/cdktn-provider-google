# `computeOrganizationSecurityPolicyRule` Submodule <a name="`computeOrganizationSecurityPolicyRule` Submodule" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeOrganizationSecurityPolicyRule <a name="ComputeOrganizationSecurityPolicyRule" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_organization_security_policy_rule google_compute_organization_security_policy_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.Initializer"></a>

```typescript
import { computeOrganizationSecurityPolicyRule } from '@cdktn/provider-google'

new computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule(scope: Construct, id: string, config: ComputeOrganizationSecurityPolicyRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleConfig">ComputeOrganizationSecurityPolicyRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleConfig">ComputeOrganizationSecurityPolicyRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.putHeaderAction">putHeaderAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.putMatch">putMatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.putPreconfiguredWafConfig">putPreconfiguredWafConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.putRedirectOptions">putRedirectOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.resetHeaderAction">resetHeaderAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.resetPreconfiguredWafConfig">resetPreconfiguredWafConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.resetPreview">resetPreview</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.resetRedirectOptions">resetRedirectOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putHeaderAction` <a name="putHeaderAction" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.putHeaderAction"></a>

```typescript
public putHeaderAction(value: ComputeOrganizationSecurityPolicyRuleHeaderAction): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.putHeaderAction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderAction">ComputeOrganizationSecurityPolicyRuleHeaderAction</a>

---

##### `putMatch` <a name="putMatch" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.putMatch"></a>

```typescript
public putMatch(value: ComputeOrganizationSecurityPolicyRuleMatch): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.putMatch.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatch">ComputeOrganizationSecurityPolicyRuleMatch</a>

---

##### `putPreconfiguredWafConfig` <a name="putPreconfiguredWafConfig" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.putPreconfiguredWafConfig"></a>

```typescript
public putPreconfiguredWafConfig(value: ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.putPreconfiguredWafConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfig">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfig</a>

---

##### `putRedirectOptions` <a name="putRedirectOptions" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.putRedirectOptions"></a>

```typescript
public putRedirectOptions(value: ComputeOrganizationSecurityPolicyRuleRedirectOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.putRedirectOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptions">ComputeOrganizationSecurityPolicyRuleRedirectOptions</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.putTimeouts"></a>

```typescript
public putTimeouts(value: ComputeOrganizationSecurityPolicyRuleTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeouts">ComputeOrganizationSecurityPolicyRuleTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetHeaderAction` <a name="resetHeaderAction" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.resetHeaderAction"></a>

```typescript
public resetHeaderAction(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPreconfiguredWafConfig` <a name="resetPreconfiguredWafConfig" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.resetPreconfiguredWafConfig"></a>

```typescript
public resetPreconfiguredWafConfig(): void
```

##### `resetPreview` <a name="resetPreview" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.resetPreview"></a>

```typescript
public resetPreview(): void
```

##### `resetRedirectOptions` <a name="resetRedirectOptions" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.resetRedirectOptions"></a>

```typescript
public resetRedirectOptions(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ComputeOrganizationSecurityPolicyRule resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.isConstruct"></a>

```typescript
import { computeOrganizationSecurityPolicyRule } from '@cdktn/provider-google'

computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.isTerraformElement"></a>

```typescript
import { computeOrganizationSecurityPolicyRule } from '@cdktn/provider-google'

computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.isTerraformResource"></a>

```typescript
import { computeOrganizationSecurityPolicyRule } from '@cdktn/provider-google'

computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.generateConfigForImport"></a>

```typescript
import { computeOrganizationSecurityPolicyRule } from '@cdktn/provider-google'

computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ComputeOrganizationSecurityPolicyRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComputeOrganizationSecurityPolicyRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComputeOrganizationSecurityPolicyRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_organization_security_policy_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ComputeOrganizationSecurityPolicyRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.headerAction">headerAction</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference">ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.match">match</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference">ComputeOrganizationSecurityPolicyRuleMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.preconfiguredWafConfig">preconfiguredWafConfig</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.redirectOptions">redirectOptions</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference">ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference">ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.headerActionInput">headerActionInput</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderAction">ComputeOrganizationSecurityPolicyRuleHeaderAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.matchInput">matchInput</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatch">ComputeOrganizationSecurityPolicyRuleMatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.policyIdInput">policyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.preconfiguredWafConfigInput">preconfiguredWafConfigInput</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfig">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.previewInput">previewInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.redirectOptionsInput">redirectOptionsInput</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptions">ComputeOrganizationSecurityPolicyRuleRedirectOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeouts">ComputeOrganizationSecurityPolicyRuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.policyId">policyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.preview">preview</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.priority">priority</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `headerAction`<sup>Required</sup> <a name="headerAction" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.headerAction"></a>

```typescript
public readonly headerAction: ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference">ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference</a>

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.match"></a>

```typescript
public readonly match: ComputeOrganizationSecurityPolicyRuleMatchOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference">ComputeOrganizationSecurityPolicyRuleMatchOutputReference</a>

---

##### `preconfiguredWafConfig`<sup>Required</sup> <a name="preconfiguredWafConfig" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.preconfiguredWafConfig"></a>

```typescript
public readonly preconfiguredWafConfig: ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference</a>

---

##### `redirectOptions`<sup>Required</sup> <a name="redirectOptions" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.redirectOptions"></a>

```typescript
public readonly redirectOptions: ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference">ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.timeouts"></a>

```typescript
public readonly timeouts: ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference">ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `headerActionInput`<sup>Optional</sup> <a name="headerActionInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.headerActionInput"></a>

```typescript
public readonly headerActionInput: ComputeOrganizationSecurityPolicyRuleHeaderAction;
```

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderAction">ComputeOrganizationSecurityPolicyRuleHeaderAction</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `matchInput`<sup>Optional</sup> <a name="matchInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.matchInput"></a>

```typescript
public readonly matchInput: ComputeOrganizationSecurityPolicyRuleMatch;
```

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatch">ComputeOrganizationSecurityPolicyRuleMatch</a>

---

##### `policyIdInput`<sup>Optional</sup> <a name="policyIdInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.policyIdInput"></a>

```typescript
public readonly policyIdInput: string;
```

- *Type:* string

---

##### `preconfiguredWafConfigInput`<sup>Optional</sup> <a name="preconfiguredWafConfigInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.preconfiguredWafConfigInput"></a>

```typescript
public readonly preconfiguredWafConfigInput: ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfig;
```

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfig">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfig</a>

---

##### `previewInput`<sup>Optional</sup> <a name="previewInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.previewInput"></a>

```typescript
public readonly previewInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `redirectOptionsInput`<sup>Optional</sup> <a name="redirectOptionsInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.redirectOptionsInput"></a>

```typescript
public readonly redirectOptionsInput: ComputeOrganizationSecurityPolicyRuleRedirectOptions;
```

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptions">ComputeOrganizationSecurityPolicyRuleRedirectOptions</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ComputeOrganizationSecurityPolicyRuleTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeouts">ComputeOrganizationSecurityPolicyRuleTimeouts</a>

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.policyId"></a>

```typescript
public readonly policyId: string;
```

- *Type:* string

---

##### `preview`<sup>Required</sup> <a name="preview" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.preview"></a>

```typescript
public readonly preview: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeOrganizationSecurityPolicyRuleConfig <a name="ComputeOrganizationSecurityPolicyRuleConfig" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleConfig.Initializer"></a>

```typescript
import { computeOrganizationSecurityPolicyRule } from '@cdktn/provider-google'

const computeOrganizationSecurityPolicyRuleConfig: computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleConfig.property.action">action</a></code> | <code>string</code> | The Action to perform when the client connection triggers the rule. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleConfig.property.match">match</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatch">ComputeOrganizationSecurityPolicyRuleMatch</a></code> | match block. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleConfig.property.policyId">policyId</a></code> | <code>string</code> | The ID of the OrganizationSecurityPolicy this rule applies to. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleConfig.property.priority">priority</a></code> | <code>number</code> | An integer indicating the priority of a rule in the list. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleConfig.property.description">description</a></code> | <code>string</code> | A description of the rule. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleConfig.property.headerAction">headerAction</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderAction">ComputeOrganizationSecurityPolicyRuleHeaderAction</a></code> | header_action block. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_organization_security_policy_rule#id ComputeOrganizationSecurityPolicyRule#id}. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleConfig.property.preconfiguredWafConfig">preconfiguredWafConfig</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfig">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfig</a></code> | preconfigured_waf_config block. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleConfig.property.preview">preview</a></code> | <code>boolean \| cdktn.IResolvable</code> | If set to true, the specified action is not enforced. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleConfig.property.redirectOptions">redirectOptions</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptions">ComputeOrganizationSecurityPolicyRuleRedirectOptions</a></code> | redirect_options block. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeouts">ComputeOrganizationSecurityPolicyRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleConfig.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

The Action to perform when the client connection triggers the rule.

Valid actions are:
"allow": allow access to target.
"deny": deny access to target.
"goto_next": forward the request to the next hierarchical policy for evaluation.
"redirect": redirect to a different target. Parameters for this action can be configured via redirectOptions. Only EXTERNAL_302 redirect type is supported for organization security policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_organization_security_policy_rule#action ComputeOrganizationSecurityPolicyRule#action}

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleConfig.property.match"></a>

```typescript
public readonly match: ComputeOrganizationSecurityPolicyRuleMatch;
```

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatch">ComputeOrganizationSecurityPolicyRuleMatch</a>

match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_organization_security_policy_rule#match ComputeOrganizationSecurityPolicyRule#match}

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleConfig.property.policyId"></a>

```typescript
public readonly policyId: string;
```

- *Type:* string

The ID of the OrganizationSecurityPolicy this rule applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_organization_security_policy_rule#policy_id ComputeOrganizationSecurityPolicyRule#policy_id}

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleConfig.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

An integer indicating the priority of a rule in the list.

The priority must be a value
between 0 and 2147483647. Rules are evaluated from highest to lowest priority where 0 is the
highest priority and 2147483647 is the lowest prority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_organization_security_policy_rule#priority ComputeOrganizationSecurityPolicyRule#priority}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_organization_security_policy_rule#description ComputeOrganizationSecurityPolicyRule#description}

---

##### `headerAction`<sup>Optional</sup> <a name="headerAction" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleConfig.property.headerAction"></a>

```typescript
public readonly headerAction: ComputeOrganizationSecurityPolicyRuleHeaderAction;
```

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderAction">ComputeOrganizationSecurityPolicyRuleHeaderAction</a>

header_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_organization_security_policy_rule#header_action ComputeOrganizationSecurityPolicyRule#header_action}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_organization_security_policy_rule#id ComputeOrganizationSecurityPolicyRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `preconfiguredWafConfig`<sup>Optional</sup> <a name="preconfiguredWafConfig" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleConfig.property.preconfiguredWafConfig"></a>

```typescript
public readonly preconfiguredWafConfig: ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfig;
```

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfig">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfig</a>

preconfigured_waf_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_organization_security_policy_rule#preconfigured_waf_config ComputeOrganizationSecurityPolicyRule#preconfigured_waf_config}

---

##### `preview`<sup>Optional</sup> <a name="preview" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleConfig.property.preview"></a>

```typescript
public readonly preview: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If set to true, the specified action is not enforced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_organization_security_policy_rule#preview ComputeOrganizationSecurityPolicyRule#preview}

---

##### `redirectOptions`<sup>Optional</sup> <a name="redirectOptions" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleConfig.property.redirectOptions"></a>

```typescript
public readonly redirectOptions: ComputeOrganizationSecurityPolicyRuleRedirectOptions;
```

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptions">ComputeOrganizationSecurityPolicyRuleRedirectOptions</a>

redirect_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_organization_security_policy_rule#redirect_options ComputeOrganizationSecurityPolicyRule#redirect_options}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ComputeOrganizationSecurityPolicyRuleTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeouts">ComputeOrganizationSecurityPolicyRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_organization_security_policy_rule#timeouts ComputeOrganizationSecurityPolicyRule#timeouts}

---

### ComputeOrganizationSecurityPolicyRuleHeaderAction <a name="ComputeOrganizationSecurityPolicyRuleHeaderAction" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderAction.Initializer"></a>

```typescript
import { computeOrganizationSecurityPolicyRule } from '@cdktn/provider-google'

const computeOrganizationSecurityPolicyRuleHeaderAction: computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderAction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderAction.property.requestHeadersToAdds">requestHeadersToAdds</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAdds">ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAdds</a>[]</code> | request_headers_to_adds block. |

---

##### `requestHeadersToAdds`<sup>Optional</sup> <a name="requestHeadersToAdds" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderAction.property.requestHeadersToAdds"></a>

```typescript
public readonly requestHeadersToAdds: IResolvable | ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAdds[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAdds">ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAdds</a>[]

request_headers_to_adds block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_organization_security_policy_rule#request_headers_to_adds ComputeOrganizationSecurityPolicyRule#request_headers_to_adds}

---

### ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAdds <a name="ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAdds" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAdds"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAdds.Initializer"></a>

```typescript
import { computeOrganizationSecurityPolicyRule } from '@cdktn/provider-google'

const computeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAdds: computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAdds = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAdds.property.headerName">headerName</a></code> | <code>string</code> | The name of the header to set. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAdds.property.headerValue">headerValue</a></code> | <code>string</code> | The value to set the named header to. |

---

##### `headerName`<sup>Optional</sup> <a name="headerName" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAdds.property.headerName"></a>

```typescript
public readonly headerName: string;
```

- *Type:* string

The name of the header to set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_organization_security_policy_rule#header_name ComputeOrganizationSecurityPolicyRule#header_name}

---

##### `headerValue`<sup>Optional</sup> <a name="headerValue" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAdds.property.headerValue"></a>

```typescript
public readonly headerValue: string;
```

- *Type:* string

The value to set the named header to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_organization_security_policy_rule#header_value ComputeOrganizationSecurityPolicyRule#header_value}

---

### ComputeOrganizationSecurityPolicyRuleMatch <a name="ComputeOrganizationSecurityPolicyRuleMatch" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatch"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatch.Initializer"></a>

```typescript
import { computeOrganizationSecurityPolicyRule } from '@cdktn/provider-google'

const computeOrganizationSecurityPolicyRuleMatch: computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatch = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatch.property.config">config</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfig">ComputeOrganizationSecurityPolicyRuleMatchConfig</a></code> | config block. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatch.property.description">description</a></code> | <code>string</code> | A description of the rule. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatch.property.expr">expr</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExpr">ComputeOrganizationSecurityPolicyRuleMatchExpr</a></code> | expr block. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatch.property.versionedExpr">versionedExpr</a></code> | <code>string</code> | Preconfigured versioned expression. |

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatch.property.config"></a>

```typescript
public readonly config: ComputeOrganizationSecurityPolicyRuleMatchConfig;
```

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfig">ComputeOrganizationSecurityPolicyRuleMatchConfig</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_organization_security_policy_rule#config ComputeOrganizationSecurityPolicyRule#config}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatch.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_organization_security_policy_rule#description ComputeOrganizationSecurityPolicyRule#description}

---

##### `expr`<sup>Optional</sup> <a name="expr" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatch.property.expr"></a>

```typescript
public readonly expr: ComputeOrganizationSecurityPolicyRuleMatchExpr;
```

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExpr">ComputeOrganizationSecurityPolicyRuleMatchExpr</a>

expr block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_organization_security_policy_rule#expr ComputeOrganizationSecurityPolicyRule#expr}

---

##### `versionedExpr`<sup>Optional</sup> <a name="versionedExpr" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatch.property.versionedExpr"></a>

```typescript
public readonly versionedExpr: string;
```

- *Type:* string

Preconfigured versioned expression.

For organization security policy rules,
the only supported type is "SRC_IPS_V1".
**NOTE** : 'FIREWALL' type is deprecated. Please use 'google_compute_firewall_policy_rule' resource instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_organization_security_policy_rule#versioned_expr ComputeOrganizationSecurityPolicyRule#versioned_expr}

---

### ComputeOrganizationSecurityPolicyRuleMatchConfig <a name="ComputeOrganizationSecurityPolicyRuleMatchConfig" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfig.Initializer"></a>

```typescript
import { computeOrganizationSecurityPolicyRule } from '@cdktn/provider-google'

const computeOrganizationSecurityPolicyRuleMatchConfig: computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfig.property.srcIpRanges">srcIpRanges</a></code> | <code>string[]</code> | Source IP address range in CIDR format. Required for INGRESS rules. |

---

##### `srcIpRanges`<sup>Optional</sup> <a name="srcIpRanges" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfig.property.srcIpRanges"></a>

```typescript
public readonly srcIpRanges: string[];
```

- *Type:* string[]

Source IP address range in CIDR format. Required for INGRESS rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_organization_security_policy_rule#src_ip_ranges ComputeOrganizationSecurityPolicyRule#src_ip_ranges}

---

### ComputeOrganizationSecurityPolicyRuleMatchExpr <a name="ComputeOrganizationSecurityPolicyRuleMatchExpr" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExpr"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExpr.Initializer"></a>

```typescript
import { computeOrganizationSecurityPolicyRule } from '@cdktn/provider-google'

const computeOrganizationSecurityPolicyRuleMatchExpr: computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExpr = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExpr.property.expression">expression</a></code> | <code>string</code> | Textual representation of an expression in Common Expression Language syntax. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExpr.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Textual representation of an expression in Common Expression Language syntax.

The application context of the containing message determines which well-known feature set of CEL is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_organization_security_policy_rule#expression ComputeOrganizationSecurityPolicyRule#expression}

---

### ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfig <a name="ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfig" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfig.Initializer"></a>

```typescript
import { computeOrganizationSecurityPolicyRule } from '@cdktn/provider-google'

const computeOrganizationSecurityPolicyRulePreconfiguredWafConfig: computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfig.property.exclusion">exclusion</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion</a>[]</code> | exclusion block. |

---

##### `exclusion`<sup>Optional</sup> <a name="exclusion" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfig.property.exclusion"></a>

```typescript
public readonly exclusion: IResolvable | ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion</a>[]

exclusion block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_organization_security_policy_rule#exclusion ComputeOrganizationSecurityPolicyRule#exclusion}

---

### ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion <a name="ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion.Initializer"></a>

```typescript
import { computeOrganizationSecurityPolicyRule } from '@cdktn/provider-google'

const computeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion: computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion.property.targetRuleSet">targetRuleSet</a></code> | <code>string</code> | Target WAF rule set to apply the preconfigured WAF exclusion. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion.property.requestCookie">requestCookie</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie</a>[]</code> | request_cookie block. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion.property.requestHeader">requestHeader</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader</a>[]</code> | request_header block. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion.property.requestQueryParam">requestQueryParam</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam</a>[]</code> | request_query_param block. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion.property.requestUri">requestUri</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri</a>[]</code> | request_uri block. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion.property.targetRuleIds">targetRuleIds</a></code> | <code>string[]</code> | A list of target rule IDs under the WAF rule set to apply the preconfigured WAF exclusion. |

---

##### `targetRuleSet`<sup>Required</sup> <a name="targetRuleSet" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion.property.targetRuleSet"></a>

```typescript
public readonly targetRuleSet: string;
```

- *Type:* string

Target WAF rule set to apply the preconfigured WAF exclusion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_organization_security_policy_rule#target_rule_set ComputeOrganizationSecurityPolicyRule#target_rule_set}

---

##### `requestCookie`<sup>Optional</sup> <a name="requestCookie" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion.property.requestCookie"></a>

```typescript
public readonly requestCookie: IResolvable | ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie</a>[]

request_cookie block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_organization_security_policy_rule#request_cookie ComputeOrganizationSecurityPolicyRule#request_cookie}

---

##### `requestHeader`<sup>Optional</sup> <a name="requestHeader" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion.property.requestHeader"></a>

```typescript
public readonly requestHeader: IResolvable | ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader</a>[]

request_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_organization_security_policy_rule#request_header ComputeOrganizationSecurityPolicyRule#request_header}

---

##### `requestQueryParam`<sup>Optional</sup> <a name="requestQueryParam" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion.property.requestQueryParam"></a>

```typescript
public readonly requestQueryParam: IResolvable | ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam</a>[]

request_query_param block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_organization_security_policy_rule#request_query_param ComputeOrganizationSecurityPolicyRule#request_query_param}

---

##### `requestUri`<sup>Optional</sup> <a name="requestUri" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion.property.requestUri"></a>

```typescript
public readonly requestUri: IResolvable | ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri</a>[]

request_uri block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_organization_security_policy_rule#request_uri ComputeOrganizationSecurityPolicyRule#request_uri}

---

##### `targetRuleIds`<sup>Optional</sup> <a name="targetRuleIds" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion.property.targetRuleIds"></a>

```typescript
public readonly targetRuleIds: string[];
```

- *Type:* string[]

A list of target rule IDs under the WAF rule set to apply the preconfigured WAF exclusion.

If omitted, it refers to all the rule IDs under the WAF rule set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_organization_security_policy_rule#target_rule_ids ComputeOrganizationSecurityPolicyRule#target_rule_ids}

---

### ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie <a name="ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie.Initializer"></a>

```typescript
import { computeOrganizationSecurityPolicyRule } from '@cdktn/provider-google'

const computeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie: computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie.property.operator">operator</a></code> | <code>string</code> | You can specify an exact match or a partial match by using a field operator and a field value. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie.property.value">value</a></code> | <code>string</code> | A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

You can specify an exact match or a partial match by using a field operator and a field value.

Available options:
EQUALS: The operator matches if the field value equals the specified value.
STARTS_WITH: The operator matches if the field value starts with the specified value.
ENDS_WITH: The operator matches if the field value ends with the specified value.
CONTAINS: The operator matches if the field value contains the specified value.
EQUALS_ANY: The operator matches if the field value is any value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_organization_security_policy_rule#operator ComputeOrganizationSecurityPolicyRule#operator}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation.

The field value must be given if the field operator is not EQUALS_ANY, and cannot be given if the field operator is EQUALS_ANY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_organization_security_policy_rule#value ComputeOrganizationSecurityPolicyRule#value}

---

### ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader <a name="ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader.Initializer"></a>

```typescript
import { computeOrganizationSecurityPolicyRule } from '@cdktn/provider-google'

const computeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader: computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader.property.operator">operator</a></code> | <code>string</code> | You can specify an exact match or a partial match by using a field operator and a field value. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader.property.value">value</a></code> | <code>string</code> | A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

You can specify an exact match or a partial match by using a field operator and a field value.

Available options:
EQUALS: The operator matches if the field value equals the specified value.
STARTS_WITH: The operator matches if the field value starts with the specified value.
ENDS_WITH: The operator matches if the field value ends with the specified value.
CONTAINS: The operator matches if the field value contains the specified value.
EQUALS_ANY: The operator matches if the field value is any value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_organization_security_policy_rule#operator ComputeOrganizationSecurityPolicyRule#operator}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation.

The field value must be given if the field operator is not EQUALS_ANY, and cannot be given if the field operator is EQUALS_ANY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_organization_security_policy_rule#value ComputeOrganizationSecurityPolicyRule#value}

---

### ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam <a name="ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam.Initializer"></a>

```typescript
import { computeOrganizationSecurityPolicyRule } from '@cdktn/provider-google'

const computeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam: computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam.property.operator">operator</a></code> | <code>string</code> | You can specify an exact match or a partial match by using a field operator and a field value. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam.property.value">value</a></code> | <code>string</code> | A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

You can specify an exact match or a partial match by using a field operator and a field value.

Available options:
EQUALS: The operator matches if the field value equals the specified value.
STARTS_WITH: The operator matches if the field value starts with the specified value.
ENDS_WITH: The operator matches if the field value ends with the specified value.
CONTAINS: The operator matches if the field value contains the specified value.
EQUALS_ANY: The operator matches if the field value is any value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_organization_security_policy_rule#operator ComputeOrganizationSecurityPolicyRule#operator}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation.

The field value must be given if the field operator is not EQUALS_ANY, and cannot be given if the field operator is EQUALS_ANY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_organization_security_policy_rule#value ComputeOrganizationSecurityPolicyRule#value}

---

### ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri <a name="ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri.Initializer"></a>

```typescript
import { computeOrganizationSecurityPolicyRule } from '@cdktn/provider-google'

const computeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri: computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri.property.operator">operator</a></code> | <code>string</code> | You can specify an exact match or a partial match by using a field operator and a field value. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri.property.value">value</a></code> | <code>string</code> | A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

You can specify an exact match or a partial match by using a field operator and a field value.

Available options:
EQUALS: The operator matches if the field value equals the specified value.
STARTS_WITH: The operator matches if the field value starts with the specified value.
ENDS_WITH: The operator matches if the field value ends with the specified value.
CONTAINS: The operator matches if the field value contains the specified value.
EQUALS_ANY: The operator matches if the field value is any value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_organization_security_policy_rule#operator ComputeOrganizationSecurityPolicyRule#operator}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation.

The field value must be given if the field operator is not EQUALS_ANY, and cannot be given if the field operator is EQUALS_ANY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_organization_security_policy_rule#value ComputeOrganizationSecurityPolicyRule#value}

---

### ComputeOrganizationSecurityPolicyRuleRedirectOptions <a name="ComputeOrganizationSecurityPolicyRuleRedirectOptions" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptions.Initializer"></a>

```typescript
import { computeOrganizationSecurityPolicyRule } from '@cdktn/provider-google'

const computeOrganizationSecurityPolicyRuleRedirectOptions: computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptions.property.type">type</a></code> | <code>string</code> | Type of the redirect action. For organization security policies, only EXTERNAL_302 is supported. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptions.property.target">target</a></code> | <code>string</code> | Target for the redirect action. This is required if the type is EXTERNAL_302. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptions.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Type of the redirect action. For organization security policies, only EXTERNAL_302 is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_organization_security_policy_rule#type ComputeOrganizationSecurityPolicyRule#type}

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptions.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

Target for the redirect action. This is required if the type is EXTERNAL_302.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_organization_security_policy_rule#target ComputeOrganizationSecurityPolicyRule#target}

---

### ComputeOrganizationSecurityPolicyRuleTimeouts <a name="ComputeOrganizationSecurityPolicyRuleTimeouts" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeouts.Initializer"></a>

```typescript
import { computeOrganizationSecurityPolicyRule } from '@cdktn/provider-google'

const computeOrganizationSecurityPolicyRuleTimeouts: computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_organization_security_policy_rule#create ComputeOrganizationSecurityPolicyRule#create}. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_organization_security_policy_rule#delete ComputeOrganizationSecurityPolicyRule#delete}. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_organization_security_policy_rule#update ComputeOrganizationSecurityPolicyRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_organization_security_policy_rule#create ComputeOrganizationSecurityPolicyRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_organization_security_policy_rule#delete ComputeOrganizationSecurityPolicyRule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_organization_security_policy_rule#update ComputeOrganizationSecurityPolicyRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference <a name="ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.Initializer"></a>

```typescript
import { computeOrganizationSecurityPolicyRule } from '@cdktn/provider-google'

new computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.putRequestHeadersToAdds">putRequestHeadersToAdds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.resetRequestHeadersToAdds">resetRequestHeadersToAdds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRequestHeadersToAdds` <a name="putRequestHeadersToAdds" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.putRequestHeadersToAdds"></a>

```typescript
public putRequestHeadersToAdds(value: IResolvable | ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAdds[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.putRequestHeadersToAdds.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAdds">ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAdds</a>[]

---

##### `resetRequestHeadersToAdds` <a name="resetRequestHeadersToAdds" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.resetRequestHeadersToAdds"></a>

```typescript
public resetRequestHeadersToAdds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.property.requestHeadersToAdds">requestHeadersToAdds</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList">ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.property.requestHeadersToAddsInput">requestHeadersToAddsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAdds">ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAdds</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderAction">ComputeOrganizationSecurityPolicyRuleHeaderAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `requestHeadersToAdds`<sup>Required</sup> <a name="requestHeadersToAdds" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.property.requestHeadersToAdds"></a>

```typescript
public readonly requestHeadersToAdds: ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList;
```

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList">ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList</a>

---

##### `requestHeadersToAddsInput`<sup>Optional</sup> <a name="requestHeadersToAddsInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.property.requestHeadersToAddsInput"></a>

```typescript
public readonly requestHeadersToAddsInput: IResolvable | ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAdds[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAdds">ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAdds</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeOrganizationSecurityPolicyRuleHeaderAction;
```

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderAction">ComputeOrganizationSecurityPolicyRuleHeaderAction</a>

---


### ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList <a name="ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.Initializer"></a>

```typescript
import { computeOrganizationSecurityPolicyRule } from '@cdktn/provider-google'

new computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.get"></a>

```typescript
public get(index: number): ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAdds">ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAdds</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAdds[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAdds">ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAdds</a>[]

---


### ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference <a name="ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.Initializer"></a>

```typescript
import { computeOrganizationSecurityPolicyRule } from '@cdktn/provider-google'

new computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.resetHeaderName">resetHeaderName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.resetHeaderValue">resetHeaderValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHeaderName` <a name="resetHeaderName" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.resetHeaderName"></a>

```typescript
public resetHeaderName(): void
```

##### `resetHeaderValue` <a name="resetHeaderValue" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.resetHeaderValue"></a>

```typescript
public resetHeaderValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.property.headerNameInput">headerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.property.headerValueInput">headerValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.property.headerName">headerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.property.headerValue">headerValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAdds">ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAdds</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `headerNameInput`<sup>Optional</sup> <a name="headerNameInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.property.headerNameInput"></a>

```typescript
public readonly headerNameInput: string;
```

- *Type:* string

---

##### `headerValueInput`<sup>Optional</sup> <a name="headerValueInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.property.headerValueInput"></a>

```typescript
public readonly headerValueInput: string;
```

- *Type:* string

---

##### `headerName`<sup>Required</sup> <a name="headerName" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.property.headerName"></a>

```typescript
public readonly headerName: string;
```

- *Type:* string

---

##### `headerValue`<sup>Required</sup> <a name="headerValue" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.property.headerValue"></a>

```typescript
public readonly headerValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAdds;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAdds">ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAdds</a>

---


### ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference <a name="ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.Initializer"></a>

```typescript
import { computeOrganizationSecurityPolicyRule } from '@cdktn/provider-google'

new computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.resetSrcIpRanges">resetSrcIpRanges</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSrcIpRanges` <a name="resetSrcIpRanges" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.resetSrcIpRanges"></a>

```typescript
public resetSrcIpRanges(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.property.srcIpRangesInput">srcIpRangesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.property.srcIpRanges">srcIpRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfig">ComputeOrganizationSecurityPolicyRuleMatchConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `srcIpRangesInput`<sup>Optional</sup> <a name="srcIpRangesInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.property.srcIpRangesInput"></a>

```typescript
public readonly srcIpRangesInput: string[];
```

- *Type:* string[]

---

##### `srcIpRanges`<sup>Required</sup> <a name="srcIpRanges" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.property.srcIpRanges"></a>

```typescript
public readonly srcIpRanges: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeOrganizationSecurityPolicyRuleMatchConfig;
```

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfig">ComputeOrganizationSecurityPolicyRuleMatchConfig</a>

---


### ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference <a name="ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.Initializer"></a>

```typescript
import { computeOrganizationSecurityPolicyRule } from '@cdktn/provider-google'

new computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExpr">ComputeOrganizationSecurityPolicyRuleMatchExpr</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeOrganizationSecurityPolicyRuleMatchExpr;
```

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExpr">ComputeOrganizationSecurityPolicyRuleMatchExpr</a>

---


### ComputeOrganizationSecurityPolicyRuleMatchOutputReference <a name="ComputeOrganizationSecurityPolicyRuleMatchOutputReference" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.Initializer"></a>

```typescript
import { computeOrganizationSecurityPolicyRule } from '@cdktn/provider-google'

new computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.putConfig">putConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.putExpr">putExpr</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.resetConfig">resetConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.resetExpr">resetExpr</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.resetVersionedExpr">resetVersionedExpr</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConfig` <a name="putConfig" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.putConfig"></a>

```typescript
public putConfig(value: ComputeOrganizationSecurityPolicyRuleMatchConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfig">ComputeOrganizationSecurityPolicyRuleMatchConfig</a>

---

##### `putExpr` <a name="putExpr" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.putExpr"></a>

```typescript
public putExpr(value: ComputeOrganizationSecurityPolicyRuleMatchExpr): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.putExpr.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExpr">ComputeOrganizationSecurityPolicyRuleMatchExpr</a>

---

##### `resetConfig` <a name="resetConfig" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.resetConfig"></a>

```typescript
public resetConfig(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetExpr` <a name="resetExpr" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.resetExpr"></a>

```typescript
public resetExpr(): void
```

##### `resetVersionedExpr` <a name="resetVersionedExpr" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.resetVersionedExpr"></a>

```typescript
public resetVersionedExpr(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.property.config">config</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference">ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.property.expr">expr</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference">ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.property.configInput">configInput</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfig">ComputeOrganizationSecurityPolicyRuleMatchConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.property.exprInput">exprInput</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExpr">ComputeOrganizationSecurityPolicyRuleMatchExpr</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.property.versionedExprInput">versionedExprInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.property.versionedExpr">versionedExpr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatch">ComputeOrganizationSecurityPolicyRuleMatch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.property.config"></a>

```typescript
public readonly config: ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference">ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference</a>

---

##### `expr`<sup>Required</sup> <a name="expr" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.property.expr"></a>

```typescript
public readonly expr: ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference">ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference</a>

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.property.configInput"></a>

```typescript
public readonly configInput: ComputeOrganizationSecurityPolicyRuleMatchConfig;
```

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfig">ComputeOrganizationSecurityPolicyRuleMatchConfig</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `exprInput`<sup>Optional</sup> <a name="exprInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.property.exprInput"></a>

```typescript
public readonly exprInput: ComputeOrganizationSecurityPolicyRuleMatchExpr;
```

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExpr">ComputeOrganizationSecurityPolicyRuleMatchExpr</a>

---

##### `versionedExprInput`<sup>Optional</sup> <a name="versionedExprInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.property.versionedExprInput"></a>

```typescript
public readonly versionedExprInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `versionedExpr`<sup>Required</sup> <a name="versionedExpr" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.property.versionedExpr"></a>

```typescript
public readonly versionedExpr: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeOrganizationSecurityPolicyRuleMatch;
```

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatch">ComputeOrganizationSecurityPolicyRuleMatch</a>

---


### ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList <a name="ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList.Initializer"></a>

```typescript
import { computeOrganizationSecurityPolicyRule } from '@cdktn/provider-google'

new computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList.get"></a>

```typescript
public get(index: number): ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion</a>[]

---


### ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference <a name="ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.Initializer"></a>

```typescript
import { computeOrganizationSecurityPolicyRule } from '@cdktn/provider-google'

new computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.putRequestCookie">putRequestCookie</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.putRequestHeader">putRequestHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.putRequestQueryParam">putRequestQueryParam</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.putRequestUri">putRequestUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.resetRequestCookie">resetRequestCookie</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.resetRequestHeader">resetRequestHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.resetRequestQueryParam">resetRequestQueryParam</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.resetRequestUri">resetRequestUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.resetTargetRuleIds">resetTargetRuleIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRequestCookie` <a name="putRequestCookie" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.putRequestCookie"></a>

```typescript
public putRequestCookie(value: IResolvable | ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.putRequestCookie.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie</a>[]

---

##### `putRequestHeader` <a name="putRequestHeader" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.putRequestHeader"></a>

```typescript
public putRequestHeader(value: IResolvable | ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.putRequestHeader.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader</a>[]

---

##### `putRequestQueryParam` <a name="putRequestQueryParam" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.putRequestQueryParam"></a>

```typescript
public putRequestQueryParam(value: IResolvable | ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.putRequestQueryParam.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam</a>[]

---

##### `putRequestUri` <a name="putRequestUri" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.putRequestUri"></a>

```typescript
public putRequestUri(value: IResolvable | ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.putRequestUri.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri</a>[]

---

##### `resetRequestCookie` <a name="resetRequestCookie" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.resetRequestCookie"></a>

```typescript
public resetRequestCookie(): void
```

##### `resetRequestHeader` <a name="resetRequestHeader" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.resetRequestHeader"></a>

```typescript
public resetRequestHeader(): void
```

##### `resetRequestQueryParam` <a name="resetRequestQueryParam" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.resetRequestQueryParam"></a>

```typescript
public resetRequestQueryParam(): void
```

##### `resetRequestUri` <a name="resetRequestUri" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.resetRequestUri"></a>

```typescript
public resetRequestUri(): void
```

##### `resetTargetRuleIds` <a name="resetTargetRuleIds" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.resetTargetRuleIds"></a>

```typescript
public resetTargetRuleIds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestCookie">requestCookie</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestHeader">requestHeader</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestQueryParam">requestQueryParam</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestUri">requestUri</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestCookieInput">requestCookieInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestHeaderInput">requestHeaderInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestQueryParamInput">requestQueryParamInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestUriInput">requestUriInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.targetRuleIdsInput">targetRuleIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.targetRuleSetInput">targetRuleSetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.targetRuleIds">targetRuleIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.targetRuleSet">targetRuleSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `requestCookie`<sup>Required</sup> <a name="requestCookie" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestCookie"></a>

```typescript
public readonly requestCookie: ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList;
```

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList</a>

---

##### `requestHeader`<sup>Required</sup> <a name="requestHeader" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestHeader"></a>

```typescript
public readonly requestHeader: ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList;
```

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList</a>

---

##### `requestQueryParam`<sup>Required</sup> <a name="requestQueryParam" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestQueryParam"></a>

```typescript
public readonly requestQueryParam: ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList;
```

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList</a>

---

##### `requestUri`<sup>Required</sup> <a name="requestUri" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestUri"></a>

```typescript
public readonly requestUri: ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList;
```

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList</a>

---

##### `requestCookieInput`<sup>Optional</sup> <a name="requestCookieInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestCookieInput"></a>

```typescript
public readonly requestCookieInput: IResolvable | ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie</a>[]

---

##### `requestHeaderInput`<sup>Optional</sup> <a name="requestHeaderInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestHeaderInput"></a>

```typescript
public readonly requestHeaderInput: IResolvable | ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader</a>[]

---

##### `requestQueryParamInput`<sup>Optional</sup> <a name="requestQueryParamInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestQueryParamInput"></a>

```typescript
public readonly requestQueryParamInput: IResolvable | ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam</a>[]

---

##### `requestUriInput`<sup>Optional</sup> <a name="requestUriInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestUriInput"></a>

```typescript
public readonly requestUriInput: IResolvable | ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri</a>[]

---

##### `targetRuleIdsInput`<sup>Optional</sup> <a name="targetRuleIdsInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.targetRuleIdsInput"></a>

```typescript
public readonly targetRuleIdsInput: string[];
```

- *Type:* string[]

---

##### `targetRuleSetInput`<sup>Optional</sup> <a name="targetRuleSetInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.targetRuleSetInput"></a>

```typescript
public readonly targetRuleSetInput: string;
```

- *Type:* string

---

##### `targetRuleIds`<sup>Required</sup> <a name="targetRuleIds" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.targetRuleIds"></a>

```typescript
public readonly targetRuleIds: string[];
```

- *Type:* string[]

---

##### `targetRuleSet`<sup>Required</sup> <a name="targetRuleSet" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.targetRuleSet"></a>

```typescript
public readonly targetRuleSet: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion</a>

---


### ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList <a name="ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.Initializer"></a>

```typescript
import { computeOrganizationSecurityPolicyRule } from '@cdktn/provider-google'

new computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.get"></a>

```typescript
public get(index: number): ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie</a>[]

---


### ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference <a name="ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer"></a>

```typescript
import { computeOrganizationSecurityPolicyRule } from '@cdktn/provider-google'

new computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie</a>

---


### ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList <a name="ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.Initializer"></a>

```typescript
import { computeOrganizationSecurityPolicyRule } from '@cdktn/provider-google'

new computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.get"></a>

```typescript
public get(index: number): ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader</a>[]

---


### ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference <a name="ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer"></a>

```typescript
import { computeOrganizationSecurityPolicyRule } from '@cdktn/provider-google'

new computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader</a>

---


### ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList <a name="ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.Initializer"></a>

```typescript
import { computeOrganizationSecurityPolicyRule } from '@cdktn/provider-google'

new computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.get"></a>

```typescript
public get(index: number): ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam</a>[]

---


### ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference <a name="ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer"></a>

```typescript
import { computeOrganizationSecurityPolicyRule } from '@cdktn/provider-google'

new computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam</a>

---


### ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList <a name="ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.Initializer"></a>

```typescript
import { computeOrganizationSecurityPolicyRule } from '@cdktn/provider-google'

new computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.get"></a>

```typescript
public get(index: number): ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri</a>[]

---


### ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference <a name="ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer"></a>

```typescript
import { computeOrganizationSecurityPolicyRule } from '@cdktn/provider-google'

new computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri</a>

---


### ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference <a name="ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.Initializer"></a>

```typescript
import { computeOrganizationSecurityPolicyRule } from '@cdktn/provider-google'

new computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.putExclusion">putExclusion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.resetExclusion">resetExclusion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExclusion` <a name="putExclusion" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.putExclusion"></a>

```typescript
public putExclusion(value: IResolvable | ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.putExclusion.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion</a>[]

---

##### `resetExclusion` <a name="resetExclusion" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.resetExclusion"></a>

```typescript
public resetExclusion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.property.exclusion">exclusion</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.property.exclusionInput">exclusionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfig">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `exclusion`<sup>Required</sup> <a name="exclusion" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.property.exclusion"></a>

```typescript
public readonly exclusion: ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList;
```

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList</a>

---

##### `exclusionInput`<sup>Optional</sup> <a name="exclusionInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.property.exclusionInput"></a>

```typescript
public readonly exclusionInput: IResolvable | ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfig;
```

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfig">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfig</a>

---


### ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference <a name="ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.Initializer"></a>

```typescript
import { computeOrganizationSecurityPolicyRule } from '@cdktn/provider-google'

new computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.resetTarget">resetTarget</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTarget` <a name="resetTarget" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.resetTarget"></a>

```typescript
public resetTarget(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.property.targetInput">targetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.property.target">target</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptions">ComputeOrganizationSecurityPolicyRuleRedirectOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.property.targetInput"></a>

```typescript
public readonly targetInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeOrganizationSecurityPolicyRuleRedirectOptions;
```

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptions">ComputeOrganizationSecurityPolicyRuleRedirectOptions</a>

---


### ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference <a name="ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.Initializer"></a>

```typescript
import { computeOrganizationSecurityPolicyRule } from '@cdktn/provider-google'

new computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeouts">ComputeOrganizationSecurityPolicyRuleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeOrganizationSecurityPolicyRuleTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeouts">ComputeOrganizationSecurityPolicyRuleTimeouts</a>

---



