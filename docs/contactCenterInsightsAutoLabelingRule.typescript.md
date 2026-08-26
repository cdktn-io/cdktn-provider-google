# `contactCenterInsightsAutoLabelingRule` Submodule <a name="`contactCenterInsightsAutoLabelingRule` Submodule" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContactCenterInsightsAutoLabelingRule <a name="ContactCenterInsightsAutoLabelingRule" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/contact_center_insights_auto_labeling_rule google_contact_center_insights_auto_labeling_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.Initializer"></a>

```typescript
import { contactCenterInsightsAutoLabelingRule } from '@cdktn/provider-google'

new contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule(scope: Construct, id: string, config: ContactCenterInsightsAutoLabelingRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig">ContactCenterInsightsAutoLabelingRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig">ContactCenterInsightsAutoLabelingRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.putConditions">putConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.resetActive">resetActive</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.resetAutoLabelingRuleId">resetAutoLabelingRuleId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.resetConditions">resetConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.resetLabelKey">resetLabelKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.resetLabelKeyType">resetLabelKeyType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConditions` <a name="putConditions" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.putConditions"></a>

```typescript
public putConditions(value: IResolvable | ContactCenterInsightsAutoLabelingRuleConditions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.putConditions.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditions">ContactCenterInsightsAutoLabelingRuleConditions</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.putTimeouts"></a>

```typescript
public putTimeouts(value: ContactCenterInsightsAutoLabelingRuleTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeouts">ContactCenterInsightsAutoLabelingRuleTimeouts</a>

---

##### `resetActive` <a name="resetActive" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.resetActive"></a>

```typescript
public resetActive(): void
```

##### `resetAutoLabelingRuleId` <a name="resetAutoLabelingRuleId" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.resetAutoLabelingRuleId"></a>

```typescript
public resetAutoLabelingRuleId(): void
```

##### `resetConditions` <a name="resetConditions" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.resetConditions"></a>

```typescript
public resetConditions(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabelKey` <a name="resetLabelKey" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.resetLabelKey"></a>

```typescript
public resetLabelKey(): void
```

##### `resetLabelKeyType` <a name="resetLabelKeyType" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.resetLabelKeyType"></a>

```typescript
public resetLabelKeyType(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ContactCenterInsightsAutoLabelingRule resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.isConstruct"></a>

```typescript
import { contactCenterInsightsAutoLabelingRule } from '@cdktn/provider-google'

contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.isTerraformElement"></a>

```typescript
import { contactCenterInsightsAutoLabelingRule } from '@cdktn/provider-google'

contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.isTerraformResource"></a>

```typescript
import { contactCenterInsightsAutoLabelingRule } from '@cdktn/provider-google'

contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.generateConfigForImport"></a>

```typescript
import { contactCenterInsightsAutoLabelingRule } from '@cdktn/provider-google'

contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ContactCenterInsightsAutoLabelingRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ContactCenterInsightsAutoLabelingRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ContactCenterInsightsAutoLabelingRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/contact_center_insights_auto_labeling_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ContactCenterInsightsAutoLabelingRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.conditions">conditions</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList">ContactCenterInsightsAutoLabelingRuleConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference">ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.activeInput">activeInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.autoLabelingRuleIdInput">autoLabelingRuleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.conditionsInput">conditionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditions">ContactCenterInsightsAutoLabelingRuleConditions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.labelKeyInput">labelKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.labelKeyTypeInput">labelKeyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeouts">ContactCenterInsightsAutoLabelingRuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.active">active</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.autoLabelingRuleId">autoLabelingRuleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.labelKey">labelKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.labelKeyType">labelKeyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.conditions"></a>

```typescript
public readonly conditions: ContactCenterInsightsAutoLabelingRuleConditionsList;
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList">ContactCenterInsightsAutoLabelingRuleConditionsList</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.timeouts"></a>

```typescript
public readonly timeouts: ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference">ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `activeInput`<sup>Optional</sup> <a name="activeInput" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.activeInput"></a>

```typescript
public readonly activeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `autoLabelingRuleIdInput`<sup>Optional</sup> <a name="autoLabelingRuleIdInput" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.autoLabelingRuleIdInput"></a>

```typescript
public readonly autoLabelingRuleIdInput: string;
```

- *Type:* string

---

##### `conditionsInput`<sup>Optional</sup> <a name="conditionsInput" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.conditionsInput"></a>

```typescript
public readonly conditionsInput: IResolvable | ContactCenterInsightsAutoLabelingRuleConditions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditions">ContactCenterInsightsAutoLabelingRuleConditions</a>[]

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelKeyInput`<sup>Optional</sup> <a name="labelKeyInput" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.labelKeyInput"></a>

```typescript
public readonly labelKeyInput: string;
```

- *Type:* string

---

##### `labelKeyTypeInput`<sup>Optional</sup> <a name="labelKeyTypeInput" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.labelKeyTypeInput"></a>

```typescript
public readonly labelKeyTypeInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ContactCenterInsightsAutoLabelingRuleTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeouts">ContactCenterInsightsAutoLabelingRuleTimeouts</a>

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.active"></a>

```typescript
public readonly active: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `autoLabelingRuleId`<sup>Required</sup> <a name="autoLabelingRuleId" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.autoLabelingRuleId"></a>

```typescript
public readonly autoLabelingRuleId: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labelKey`<sup>Required</sup> <a name="labelKey" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.labelKey"></a>

```typescript
public readonly labelKey: string;
```

- *Type:* string

---

##### `labelKeyType`<sup>Required</sup> <a name="labelKeyType" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.labelKeyType"></a>

```typescript
public readonly labelKeyType: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ContactCenterInsightsAutoLabelingRuleConditions <a name="ContactCenterInsightsAutoLabelingRuleConditions" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditions.Initializer"></a>

```typescript
import { contactCenterInsightsAutoLabelingRule } from '@cdktn/provider-google'

const contactCenterInsightsAutoLabelingRuleConditions: contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditions.property.condition">condition</a></code> | <code>string</code> | A optional CEL expression to be evaluated as a boolean value. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditions.property.value">value</a></code> | <code>string</code> | CEL expression to be evaluated as the value. |

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditions.property.condition"></a>

```typescript
public readonly condition: string;
```

- *Type:* string

A optional CEL expression to be evaluated as a boolean value.

Once evaluated as true, then we will proceed with the value evaluation.
An empty condition will be auto evaluated as true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/contact_center_insights_auto_labeling_rule#condition ContactCenterInsightsAutoLabelingRule#condition}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditions.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

CEL expression to be evaluated as the value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/contact_center_insights_auto_labeling_rule#value ContactCenterInsightsAutoLabelingRule#value}

---

### ContactCenterInsightsAutoLabelingRuleConfig <a name="ContactCenterInsightsAutoLabelingRuleConfig" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.Initializer"></a>

```typescript
import { contactCenterInsightsAutoLabelingRule } from '@cdktn/provider-google'

const contactCenterInsightsAutoLabelingRuleConfig: contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.location">location</a></code> | <code>string</code> | Location of the resource. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.active">active</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether the rule is active. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.autoLabelingRuleId">autoLabelingRuleId</a></code> | <code>string</code> | A unique ID for the new AutoLabelingRule. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.conditions">conditions</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditions">ContactCenterInsightsAutoLabelingRuleConditions</a>[]</code> | conditions block. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.description">description</a></code> | <code>string</code> | The description of the rule. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.displayName">displayName</a></code> | <code>string</code> | Display Name of the auto labeling rule. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/contact_center_insights_auto_labeling_rule#id ContactCenterInsightsAutoLabelingRule#id}. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.labelKey">labelKey</a></code> | <code>string</code> | The label key. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.labelKeyType">labelKeyType</a></code> | <code>string</code> | The type of the label key. Possible values: ["LABEL_KEY_TYPE_UNSPECIFIED", "LABEL_KEY_TYPE_CUSTOM"]. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/contact_center_insights_auto_labeling_rule#project ContactCenterInsightsAutoLabelingRule#project}. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeouts">ContactCenterInsightsAutoLabelingRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/contact_center_insights_auto_labeling_rule#location ContactCenterInsightsAutoLabelingRule#location}

---

##### `active`<sup>Optional</sup> <a name="active" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.active"></a>

```typescript
public readonly active: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether the rule is active.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/contact_center_insights_auto_labeling_rule#active ContactCenterInsightsAutoLabelingRule#active}

---

##### `autoLabelingRuleId`<sup>Optional</sup> <a name="autoLabelingRuleId" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.autoLabelingRuleId"></a>

```typescript
public readonly autoLabelingRuleId: string;
```

- *Type:* string

A unique ID for the new AutoLabelingRule.

This ID will become the final
component of the AutoLabelingRule's resource name. If no ID is specified,
a server-generated ID will be used.

This value should be 4-64 characters and must match the regular
expression '^[A-Za-z0-9]{4,64}$'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/contact_center_insights_auto_labeling_rule#auto_labeling_rule_id ContactCenterInsightsAutoLabelingRule#auto_labeling_rule_id}

---

##### `conditions`<sup>Optional</sup> <a name="conditions" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.conditions"></a>

```typescript
public readonly conditions: IResolvable | ContactCenterInsightsAutoLabelingRuleConditions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditions">ContactCenterInsightsAutoLabelingRuleConditions</a>[]

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/contact_center_insights_auto_labeling_rule#conditions ContactCenterInsightsAutoLabelingRule#conditions}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/contact_center_insights_auto_labeling_rule#deletion_policy ContactCenterInsightsAutoLabelingRule#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/contact_center_insights_auto_labeling_rule#description ContactCenterInsightsAutoLabelingRule#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Display Name of the auto labeling rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/contact_center_insights_auto_labeling_rule#display_name ContactCenterInsightsAutoLabelingRule#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/contact_center_insights_auto_labeling_rule#id ContactCenterInsightsAutoLabelingRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labelKey`<sup>Optional</sup> <a name="labelKey" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.labelKey"></a>

```typescript
public readonly labelKey: string;
```

- *Type:* string

The label key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/contact_center_insights_auto_labeling_rule#label_key ContactCenterInsightsAutoLabelingRule#label_key}

---

##### `labelKeyType`<sup>Optional</sup> <a name="labelKeyType" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.labelKeyType"></a>

```typescript
public readonly labelKeyType: string;
```

- *Type:* string

The type of the label key. Possible values: ["LABEL_KEY_TYPE_UNSPECIFIED", "LABEL_KEY_TYPE_CUSTOM"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/contact_center_insights_auto_labeling_rule#label_key_type ContactCenterInsightsAutoLabelingRule#label_key_type}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/contact_center_insights_auto_labeling_rule#project ContactCenterInsightsAutoLabelingRule#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ContactCenterInsightsAutoLabelingRuleTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeouts">ContactCenterInsightsAutoLabelingRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/contact_center_insights_auto_labeling_rule#timeouts ContactCenterInsightsAutoLabelingRule#timeouts}

---

### ContactCenterInsightsAutoLabelingRuleTimeouts <a name="ContactCenterInsightsAutoLabelingRuleTimeouts" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeouts.Initializer"></a>

```typescript
import { contactCenterInsightsAutoLabelingRule } from '@cdktn/provider-google'

const contactCenterInsightsAutoLabelingRuleTimeouts: contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/contact_center_insights_auto_labeling_rule#create ContactCenterInsightsAutoLabelingRule#create}. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/contact_center_insights_auto_labeling_rule#delete ContactCenterInsightsAutoLabelingRule#delete}. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/contact_center_insights_auto_labeling_rule#update ContactCenterInsightsAutoLabelingRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/contact_center_insights_auto_labeling_rule#create ContactCenterInsightsAutoLabelingRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/contact_center_insights_auto_labeling_rule#delete ContactCenterInsightsAutoLabelingRule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/contact_center_insights_auto_labeling_rule#update ContactCenterInsightsAutoLabelingRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ContactCenterInsightsAutoLabelingRuleConditionsList <a name="ContactCenterInsightsAutoLabelingRuleConditionsList" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList.Initializer"></a>

```typescript
import { contactCenterInsightsAutoLabelingRule } from '@cdktn/provider-google'

new contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList.get"></a>

```typescript
public get(index: number): ContactCenterInsightsAutoLabelingRuleConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditions">ContactCenterInsightsAutoLabelingRuleConditions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContactCenterInsightsAutoLabelingRuleConditions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditions">ContactCenterInsightsAutoLabelingRuleConditions</a>[]

---


### ContactCenterInsightsAutoLabelingRuleConditionsOutputReference <a name="ContactCenterInsightsAutoLabelingRuleConditionsOutputReference" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.Initializer"></a>

```typescript
import { contactCenterInsightsAutoLabelingRule } from '@cdktn/provider-google'

new contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCondition` <a name="resetCondition" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.resetCondition"></a>

```typescript
public resetCondition(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.property.conditionInput">conditionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.property.condition">condition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditions">ContactCenterInsightsAutoLabelingRuleConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.property.conditionInput"></a>

```typescript
public readonly conditionInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.property.condition"></a>

```typescript
public readonly condition: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContactCenterInsightsAutoLabelingRuleConditions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditions">ContactCenterInsightsAutoLabelingRuleConditions</a>

---


### ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference <a name="ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.Initializer"></a>

```typescript
import { contactCenterInsightsAutoLabelingRule } from '@cdktn/provider-google'

new contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeouts">ContactCenterInsightsAutoLabelingRuleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContactCenterInsightsAutoLabelingRuleTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeouts">ContactCenterInsightsAutoLabelingRuleTimeouts</a>

---



