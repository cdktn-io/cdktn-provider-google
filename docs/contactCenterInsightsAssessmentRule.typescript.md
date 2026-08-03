# `contactCenterInsightsAssessmentRule` Submodule <a name="`contactCenterInsightsAssessmentRule` Submodule" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContactCenterInsightsAssessmentRule <a name="ContactCenterInsightsAssessmentRule" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/contact_center_insights_assessment_rule google_contact_center_insights_assessment_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.Initializer"></a>

```typescript
import { contactCenterInsightsAssessmentRule } from '@cdktn/provider-google'

new contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule(scope: Construct, id: string, config: ContactCenterInsightsAssessmentRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleConfig">ContactCenterInsightsAssessmentRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleConfig">ContactCenterInsightsAssessmentRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.putSampleRule">putSampleRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.putScheduleInfo">putScheduleInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.resetActive">resetActive</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.resetAssessmentRuleId">resetAssessmentRuleId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.resetSampleRule">resetSampleRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.resetScheduleInfo">resetScheduleInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSampleRule` <a name="putSampleRule" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.putSampleRule"></a>

```typescript
public putSampleRule(value: ContactCenterInsightsAssessmentRuleSampleRule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.putSampleRule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRule">ContactCenterInsightsAssessmentRuleSampleRule</a>

---

##### `putScheduleInfo` <a name="putScheduleInfo" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.putScheduleInfo"></a>

```typescript
public putScheduleInfo(value: ContactCenterInsightsAssessmentRuleScheduleInfo): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.putScheduleInfo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfo">ContactCenterInsightsAssessmentRuleScheduleInfo</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.putTimeouts"></a>

```typescript
public putTimeouts(value: ContactCenterInsightsAssessmentRuleTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeouts">ContactCenterInsightsAssessmentRuleTimeouts</a>

---

##### `resetActive` <a name="resetActive" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.resetActive"></a>

```typescript
public resetActive(): void
```

##### `resetAssessmentRuleId` <a name="resetAssessmentRuleId" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.resetAssessmentRuleId"></a>

```typescript
public resetAssessmentRuleId(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetSampleRule` <a name="resetSampleRule" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.resetSampleRule"></a>

```typescript
public resetSampleRule(): void
```

##### `resetScheduleInfo` <a name="resetScheduleInfo" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.resetScheduleInfo"></a>

```typescript
public resetScheduleInfo(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ContactCenterInsightsAssessmentRule resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.isConstruct"></a>

```typescript
import { contactCenterInsightsAssessmentRule } from '@cdktn/provider-google'

contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.isTerraformElement"></a>

```typescript
import { contactCenterInsightsAssessmentRule } from '@cdktn/provider-google'

contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.isTerraformResource"></a>

```typescript
import { contactCenterInsightsAssessmentRule } from '@cdktn/provider-google'

contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.generateConfigForImport"></a>

```typescript
import { contactCenterInsightsAssessmentRule } from '@cdktn/provider-google'

contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ContactCenterInsightsAssessmentRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ContactCenterInsightsAssessmentRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ContactCenterInsightsAssessmentRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/contact_center_insights_assessment_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ContactCenterInsightsAssessmentRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.sampleRule">sampleRule</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference">ContactCenterInsightsAssessmentRuleSampleRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.scheduleInfo">scheduleInfo</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference">ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference">ContactCenterInsightsAssessmentRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.activeInput">activeInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.assessmentRuleIdInput">assessmentRuleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.sampleRuleInput">sampleRuleInput</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRule">ContactCenterInsightsAssessmentRuleSampleRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.scheduleInfoInput">scheduleInfoInput</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfo">ContactCenterInsightsAssessmentRuleScheduleInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeouts">ContactCenterInsightsAssessmentRuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.active">active</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.assessmentRuleId">assessmentRuleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `sampleRule`<sup>Required</sup> <a name="sampleRule" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.sampleRule"></a>

```typescript
public readonly sampleRule: ContactCenterInsightsAssessmentRuleSampleRuleOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference">ContactCenterInsightsAssessmentRuleSampleRuleOutputReference</a>

---

##### `scheduleInfo`<sup>Required</sup> <a name="scheduleInfo" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.scheduleInfo"></a>

```typescript
public readonly scheduleInfo: ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference">ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.timeouts"></a>

```typescript
public readonly timeouts: ContactCenterInsightsAssessmentRuleTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference">ContactCenterInsightsAssessmentRuleTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `activeInput`<sup>Optional</sup> <a name="activeInput" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.activeInput"></a>

```typescript
public readonly activeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `assessmentRuleIdInput`<sup>Optional</sup> <a name="assessmentRuleIdInput" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.assessmentRuleIdInput"></a>

```typescript
public readonly assessmentRuleIdInput: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `sampleRuleInput`<sup>Optional</sup> <a name="sampleRuleInput" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.sampleRuleInput"></a>

```typescript
public readonly sampleRuleInput: ContactCenterInsightsAssessmentRuleSampleRule;
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRule">ContactCenterInsightsAssessmentRuleSampleRule</a>

---

##### `scheduleInfoInput`<sup>Optional</sup> <a name="scheduleInfoInput" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.scheduleInfoInput"></a>

```typescript
public readonly scheduleInfoInput: ContactCenterInsightsAssessmentRuleScheduleInfo;
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfo">ContactCenterInsightsAssessmentRuleScheduleInfo</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ContactCenterInsightsAssessmentRuleTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeouts">ContactCenterInsightsAssessmentRuleTimeouts</a>

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.active"></a>

```typescript
public readonly active: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `assessmentRuleId`<sup>Required</sup> <a name="assessmentRuleId" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.assessmentRuleId"></a>

```typescript
public readonly assessmentRuleId: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ContactCenterInsightsAssessmentRuleConfig <a name="ContactCenterInsightsAssessmentRuleConfig" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleConfig.Initializer"></a>

```typescript
import { contactCenterInsightsAssessmentRule } from '@cdktn/provider-google'

const contactCenterInsightsAssessmentRuleConfig: contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleConfig.property.location">location</a></code> | <code>string</code> | Location of the resource. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleConfig.property.active">active</a></code> | <code>boolean \| cdktn.IResolvable</code> | If true, apply this rule to conversations. Otherwise, this rule is inactive. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleConfig.property.assessmentRuleId">assessmentRuleId</a></code> | <code>string</code> | A unique ID for the new AssessmentRule. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleConfig.property.displayName">displayName</a></code> | <code>string</code> | Display Name of the assessment rule. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/contact_center_insights_assessment_rule#id ContactCenterInsightsAssessmentRule#id}. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/contact_center_insights_assessment_rule#project ContactCenterInsightsAssessmentRule#project}. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleConfig.property.sampleRule">sampleRule</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRule">ContactCenterInsightsAssessmentRuleSampleRule</a></code> | sample_rule block. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleConfig.property.scheduleInfo">scheduleInfo</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfo">ContactCenterInsightsAssessmentRuleScheduleInfo</a></code> | schedule_info block. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeouts">ContactCenterInsightsAssessmentRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/contact_center_insights_assessment_rule#location ContactCenterInsightsAssessmentRule#location}

---

##### `active`<sup>Optional</sup> <a name="active" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleConfig.property.active"></a>

```typescript
public readonly active: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If true, apply this rule to conversations. Otherwise, this rule is inactive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/contact_center_insights_assessment_rule#active ContactCenterInsightsAssessmentRule#active}

---

##### `assessmentRuleId`<sup>Optional</sup> <a name="assessmentRuleId" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleConfig.property.assessmentRuleId"></a>

```typescript
public readonly assessmentRuleId: string;
```

- *Type:* string

A unique ID for the new AssessmentRule.

This ID will become the final
component of the AssessmentRule's resource name. If no ID is specified,
a server-generated ID will be used.

This value should be 4-64 characters and must match the regular
expression '^[A-Za-z0-9]{4,64}$'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/contact_center_insights_assessment_rule#assessment_rule_id ContactCenterInsightsAssessmentRule#assessment_rule_id}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/contact_center_insights_assessment_rule#deletion_policy ContactCenterInsightsAssessmentRule#deletion_policy}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Display Name of the assessment rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/contact_center_insights_assessment_rule#display_name ContactCenterInsightsAssessmentRule#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/contact_center_insights_assessment_rule#id ContactCenterInsightsAssessmentRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/contact_center_insights_assessment_rule#project ContactCenterInsightsAssessmentRule#project}.

---

##### `sampleRule`<sup>Optional</sup> <a name="sampleRule" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleConfig.property.sampleRule"></a>

```typescript
public readonly sampleRule: ContactCenterInsightsAssessmentRuleSampleRule;
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRule">ContactCenterInsightsAssessmentRuleSampleRule</a>

sample_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/contact_center_insights_assessment_rule#sample_rule ContactCenterInsightsAssessmentRule#sample_rule}

---

##### `scheduleInfo`<sup>Optional</sup> <a name="scheduleInfo" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleConfig.property.scheduleInfo"></a>

```typescript
public readonly scheduleInfo: ContactCenterInsightsAssessmentRuleScheduleInfo;
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfo">ContactCenterInsightsAssessmentRuleScheduleInfo</a>

schedule_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/contact_center_insights_assessment_rule#schedule_info ContactCenterInsightsAssessmentRule#schedule_info}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ContactCenterInsightsAssessmentRuleTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeouts">ContactCenterInsightsAssessmentRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/contact_center_insights_assessment_rule#timeouts ContactCenterInsightsAssessmentRule#timeouts}

---

### ContactCenterInsightsAssessmentRuleSampleRule <a name="ContactCenterInsightsAssessmentRuleSampleRule" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRule.Initializer"></a>

```typescript
import { contactCenterInsightsAssessmentRule } from '@cdktn/provider-google'

const contactCenterInsightsAssessmentRuleSampleRule: contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRule.property.conversationFilter">conversationFilter</a></code> | <code>string</code> | To specify the filter for the conversions that should apply this sample rule. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRule.property.dimension">dimension</a></code> | <code>string</code> | Group by dimension to sample the conversation. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRule.property.samplePercentage">samplePercentage</a></code> | <code>number</code> | Percentage of conversations that we should sample  based on the dimension between [0, 100]. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRule.property.sampleRow">sampleRow</a></code> | <code>number</code> | Number of the conversations that we should sample based on the dimension. |

---

##### `conversationFilter`<sup>Optional</sup> <a name="conversationFilter" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRule.property.conversationFilter"></a>

```typescript
public readonly conversationFilter: string;
```

- *Type:* string

To specify the filter for the conversions that should apply this sample rule.

An empty filter means this sample rule applies to all conversations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/contact_center_insights_assessment_rule#conversation_filter ContactCenterInsightsAssessmentRule#conversation_filter}

---

##### `dimension`<sup>Optional</sup> <a name="dimension" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRule.property.dimension"></a>

```typescript
public readonly dimension: string;
```

- *Type:* string

Group by dimension to sample the conversation.

If no dimension is
provided, the sampling will be applied to the project level.
Current supported dimensions is 'quality_metadata.agent_info.agent_id'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/contact_center_insights_assessment_rule#dimension ContactCenterInsightsAssessmentRule#dimension}

---

##### `samplePercentage`<sup>Optional</sup> <a name="samplePercentage" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRule.property.samplePercentage"></a>

```typescript
public readonly samplePercentage: number;
```

- *Type:* number

Percentage of conversations that we should sample  based on the dimension between [0, 100].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/contact_center_insights_assessment_rule#sample_percentage ContactCenterInsightsAssessmentRule#sample_percentage}

---

##### `sampleRow`<sup>Optional</sup> <a name="sampleRow" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRule.property.sampleRow"></a>

```typescript
public readonly sampleRow: number;
```

- *Type:* number

Number of the conversations that we should sample based on the dimension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/contact_center_insights_assessment_rule#sample_row ContactCenterInsightsAssessmentRule#sample_row}

---

### ContactCenterInsightsAssessmentRuleScheduleInfo <a name="ContactCenterInsightsAssessmentRuleScheduleInfo" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfo.Initializer"></a>

```typescript
import { contactCenterInsightsAssessmentRule } from '@cdktn/provider-google'

const contactCenterInsightsAssessmentRuleScheduleInfo: contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfo = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfo.property.endTime">endTime</a></code> | <code>string</code> | End time of the schedule. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfo.property.schedule">schedule</a></code> | <code>string</code> | The groc expression. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfo.property.startTime">startTime</a></code> | <code>string</code> | Start time of the schedule. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfo.property.timeZone">timeZone</a></code> | <code>string</code> | The timezone to use for the groc expression. If not specified, defaults to UTC. |

---

##### `endTime`<sup>Optional</sup> <a name="endTime" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfo.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

End time of the schedule.

If not specified, will keep scheduling new
pipelines for execution until the schedule is no longer active or deleted.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and
up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/contact_center_insights_assessment_rule#end_time ContactCenterInsightsAssessmentRule#end_time}

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfo.property.schedule"></a>

```typescript
public readonly schedule: string;
```

- *Type:* string

The groc expression.

Format: 'every number [synchronized]'
Cron syntax is not supported.
Time units can be: minutes, hours
Synchronized is optional and indicates that the schedule should be
synchronized to the start of the interval: every 5 minutes synchronized
means 00:00, 00:05 ...
Otherwise the start time is random within the interval.
Example: 'every 5 minutes'
could be  00:02, 00:07, 00:12, ...

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/contact_center_insights_assessment_rule#schedule ContactCenterInsightsAssessmentRule#schedule}

---

##### `startTime`<sup>Optional</sup> <a name="startTime" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfo.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

Start time of the schedule.

If not specified, will start as soon as the
schedule is created.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and
up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/contact_center_insights_assessment_rule#start_time ContactCenterInsightsAssessmentRule#start_time}

---

##### `timeZone`<sup>Optional</sup> <a name="timeZone" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfo.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

The timezone to use for the groc expression. If not specified, defaults to UTC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/contact_center_insights_assessment_rule#time_zone ContactCenterInsightsAssessmentRule#time_zone}

---

### ContactCenterInsightsAssessmentRuleTimeouts <a name="ContactCenterInsightsAssessmentRuleTimeouts" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeouts.Initializer"></a>

```typescript
import { contactCenterInsightsAssessmentRule } from '@cdktn/provider-google'

const contactCenterInsightsAssessmentRuleTimeouts: contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/contact_center_insights_assessment_rule#create ContactCenterInsightsAssessmentRule#create}. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/contact_center_insights_assessment_rule#delete ContactCenterInsightsAssessmentRule#delete}. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/contact_center_insights_assessment_rule#update ContactCenterInsightsAssessmentRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/contact_center_insights_assessment_rule#create ContactCenterInsightsAssessmentRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/contact_center_insights_assessment_rule#delete ContactCenterInsightsAssessmentRule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/contact_center_insights_assessment_rule#update ContactCenterInsightsAssessmentRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ContactCenterInsightsAssessmentRuleSampleRuleOutputReference <a name="ContactCenterInsightsAssessmentRuleSampleRuleOutputReference" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.Initializer"></a>

```typescript
import { contactCenterInsightsAssessmentRule } from '@cdktn/provider-google'

new contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.resetConversationFilter">resetConversationFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.resetDimension">resetDimension</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.resetSamplePercentage">resetSamplePercentage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.resetSampleRow">resetSampleRow</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConversationFilter` <a name="resetConversationFilter" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.resetConversationFilter"></a>

```typescript
public resetConversationFilter(): void
```

##### `resetDimension` <a name="resetDimension" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.resetDimension"></a>

```typescript
public resetDimension(): void
```

##### `resetSamplePercentage` <a name="resetSamplePercentage" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.resetSamplePercentage"></a>

```typescript
public resetSamplePercentage(): void
```

##### `resetSampleRow` <a name="resetSampleRow" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.resetSampleRow"></a>

```typescript
public resetSampleRow(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.conversationFilterInput">conversationFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.dimensionInput">dimensionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.samplePercentageInput">samplePercentageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.sampleRowInput">sampleRowInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.conversationFilter">conversationFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.dimension">dimension</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.samplePercentage">samplePercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.sampleRow">sampleRow</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRule">ContactCenterInsightsAssessmentRuleSampleRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `conversationFilterInput`<sup>Optional</sup> <a name="conversationFilterInput" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.conversationFilterInput"></a>

```typescript
public readonly conversationFilterInput: string;
```

- *Type:* string

---

##### `dimensionInput`<sup>Optional</sup> <a name="dimensionInput" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.dimensionInput"></a>

```typescript
public readonly dimensionInput: string;
```

- *Type:* string

---

##### `samplePercentageInput`<sup>Optional</sup> <a name="samplePercentageInput" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.samplePercentageInput"></a>

```typescript
public readonly samplePercentageInput: number;
```

- *Type:* number

---

##### `sampleRowInput`<sup>Optional</sup> <a name="sampleRowInput" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.sampleRowInput"></a>

```typescript
public readonly sampleRowInput: number;
```

- *Type:* number

---

##### `conversationFilter`<sup>Required</sup> <a name="conversationFilter" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.conversationFilter"></a>

```typescript
public readonly conversationFilter: string;
```

- *Type:* string

---

##### `dimension`<sup>Required</sup> <a name="dimension" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.dimension"></a>

```typescript
public readonly dimension: string;
```

- *Type:* string

---

##### `samplePercentage`<sup>Required</sup> <a name="samplePercentage" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.samplePercentage"></a>

```typescript
public readonly samplePercentage: number;
```

- *Type:* number

---

##### `sampleRow`<sup>Required</sup> <a name="sampleRow" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.sampleRow"></a>

```typescript
public readonly sampleRow: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContactCenterInsightsAssessmentRuleSampleRule;
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRule">ContactCenterInsightsAssessmentRuleSampleRule</a>

---


### ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference <a name="ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.Initializer"></a>

```typescript
import { contactCenterInsightsAssessmentRule } from '@cdktn/provider-google'

new contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.resetEndTime">resetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.resetSchedule">resetSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.resetStartTime">resetStartTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.resetTimeZone">resetTimeZone</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEndTime` <a name="resetEndTime" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.resetEndTime"></a>

```typescript
public resetEndTime(): void
```

##### `resetSchedule` <a name="resetSchedule" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.resetSchedule"></a>

```typescript
public resetSchedule(): void
```

##### `resetStartTime` <a name="resetStartTime" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.resetStartTime"></a>

```typescript
public resetStartTime(): void
```

##### `resetTimeZone` <a name="resetTimeZone" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.resetTimeZone"></a>

```typescript
public resetTimeZone(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.endTimeInput">endTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.scheduleInput">scheduleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.timeZoneInput">timeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.endTime">endTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.schedule">schedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.timeZone">timeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfo">ContactCenterInsightsAssessmentRuleScheduleInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endTimeInput`<sup>Optional</sup> <a name="endTimeInput" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.endTimeInput"></a>

```typescript
public readonly endTimeInput: string;
```

- *Type:* string

---

##### `scheduleInput`<sup>Optional</sup> <a name="scheduleInput" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.scheduleInput"></a>

```typescript
public readonly scheduleInput: string;
```

- *Type:* string

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.startTimeInput"></a>

```typescript
public readonly startTimeInput: string;
```

- *Type:* string

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.timeZoneInput"></a>

```typescript
public readonly timeZoneInput: string;
```

- *Type:* string

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.schedule"></a>

```typescript
public readonly schedule: string;
```

- *Type:* string

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContactCenterInsightsAssessmentRuleScheduleInfo;
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfo">ContactCenterInsightsAssessmentRuleScheduleInfo</a>

---


### ContactCenterInsightsAssessmentRuleTimeoutsOutputReference <a name="ContactCenterInsightsAssessmentRuleTimeoutsOutputReference" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.Initializer"></a>

```typescript
import { contactCenterInsightsAssessmentRule } from '@cdktn/provider-google'

new contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeouts">ContactCenterInsightsAssessmentRuleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContactCenterInsightsAssessmentRuleTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeouts">ContactCenterInsightsAssessmentRuleTimeouts</a>

---



