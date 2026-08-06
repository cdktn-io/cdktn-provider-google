# `bigqueryAnalyticsHubDataExchangeIamMember` Submodule <a name="`bigqueryAnalyticsHubDataExchangeIamMember` Submodule" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BigqueryAnalyticsHubDataExchangeIamMember <a name="BigqueryAnalyticsHubDataExchangeIamMember" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/bigquery_analytics_hub_data_exchange_iam_member google_bigquery_analytics_hub_data_exchange_iam_member}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.Initializer"></a>

```typescript
import { bigqueryAnalyticsHubDataExchangeIamMember } from '@cdktn/provider-google'

new bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember(scope: Construct, id: string, config: BigqueryAnalyticsHubDataExchangeIamMemberConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConfig">BigqueryAnalyticsHubDataExchangeIamMemberConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConfig">BigqueryAnalyticsHubDataExchangeIamMemberConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCondition` <a name="putCondition" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.putCondition"></a>

```typescript
public putCondition(value: BigqueryAnalyticsHubDataExchangeIamMemberCondition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberCondition">BigqueryAnalyticsHubDataExchangeIamMemberCondition</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.resetCondition"></a>

```typescript
public resetCondition(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a BigqueryAnalyticsHubDataExchangeIamMember resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.isConstruct"></a>

```typescript
import { bigqueryAnalyticsHubDataExchangeIamMember } from '@cdktn/provider-google'

bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.isTerraformElement"></a>

```typescript
import { bigqueryAnalyticsHubDataExchangeIamMember } from '@cdktn/provider-google'

bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.isTerraformResource"></a>

```typescript
import { bigqueryAnalyticsHubDataExchangeIamMember } from '@cdktn/provider-google'

bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.generateConfigForImport"></a>

```typescript
import { bigqueryAnalyticsHubDataExchangeIamMember } from '@cdktn/provider-google'

bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a BigqueryAnalyticsHubDataExchangeIamMember resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BigqueryAnalyticsHubDataExchangeIamMember to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BigqueryAnalyticsHubDataExchangeIamMember that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/bigquery_analytics_hub_data_exchange_iam_member#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the BigqueryAnalyticsHubDataExchangeIamMember to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference">BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberCondition">BigqueryAnalyticsHubDataExchangeIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.property.dataExchangeIdInput">dataExchangeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.property.memberInput">memberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.property.dataExchangeId">dataExchangeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.property.member">member</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.property.role">role</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.property.condition"></a>

```typescript
public readonly condition: BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference">BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.property.conditionInput"></a>

```typescript
public readonly conditionInput: BigqueryAnalyticsHubDataExchangeIamMemberCondition;
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberCondition">BigqueryAnalyticsHubDataExchangeIamMemberCondition</a>

---

##### `dataExchangeIdInput`<sup>Optional</sup> <a name="dataExchangeIdInput" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.property.dataExchangeIdInput"></a>

```typescript
public readonly dataExchangeIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `memberInput`<sup>Optional</sup> <a name="memberInput" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.property.memberInput"></a>

```typescript
public readonly memberInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `dataExchangeId`<sup>Required</sup> <a name="dataExchangeId" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.property.dataExchangeId"></a>

```typescript
public readonly dataExchangeId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.property.member"></a>

```typescript
public readonly member: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BigqueryAnalyticsHubDataExchangeIamMemberCondition <a name="BigqueryAnalyticsHubDataExchangeIamMemberCondition" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberCondition.Initializer"></a>

```typescript
import { bigqueryAnalyticsHubDataExchangeIamMember } from '@cdktn/provider-google'

const bigqueryAnalyticsHubDataExchangeIamMemberCondition: bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberCondition.property.expression">expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/bigquery_analytics_hub_data_exchange_iam_member#expression BigqueryAnalyticsHubDataExchangeIamMember#expression}. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberCondition.property.title">title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/bigquery_analytics_hub_data_exchange_iam_member#title BigqueryAnalyticsHubDataExchangeIamMember#title}. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberCondition.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/bigquery_analytics_hub_data_exchange_iam_member#description BigqueryAnalyticsHubDataExchangeIamMember#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberCondition.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/bigquery_analytics_hub_data_exchange_iam_member#expression BigqueryAnalyticsHubDataExchangeIamMember#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberCondition.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/bigquery_analytics_hub_data_exchange_iam_member#title BigqueryAnalyticsHubDataExchangeIamMember#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberCondition.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/bigquery_analytics_hub_data_exchange_iam_member#description BigqueryAnalyticsHubDataExchangeIamMember#description}.

---

### BigqueryAnalyticsHubDataExchangeIamMemberConfig <a name="BigqueryAnalyticsHubDataExchangeIamMemberConfig" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConfig.Initializer"></a>

```typescript
import { bigqueryAnalyticsHubDataExchangeIamMember } from '@cdktn/provider-google'

const bigqueryAnalyticsHubDataExchangeIamMemberConfig: bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConfig.property.dataExchangeId">dataExchangeId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/bigquery_analytics_hub_data_exchange_iam_member#data_exchange_id BigqueryAnalyticsHubDataExchangeIamMember#data_exchange_id}. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConfig.property.member">member</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/bigquery_analytics_hub_data_exchange_iam_member#member BigqueryAnalyticsHubDataExchangeIamMember#member}. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConfig.property.role">role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/bigquery_analytics_hub_data_exchange_iam_member#role BigqueryAnalyticsHubDataExchangeIamMember#role}. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConfig.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberCondition">BigqueryAnalyticsHubDataExchangeIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/bigquery_analytics_hub_data_exchange_iam_member#id BigqueryAnalyticsHubDataExchangeIamMember#id}. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/bigquery_analytics_hub_data_exchange_iam_member#location BigqueryAnalyticsHubDataExchangeIamMember#location}. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/bigquery_analytics_hub_data_exchange_iam_member#project BigqueryAnalyticsHubDataExchangeIamMember#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `dataExchangeId`<sup>Required</sup> <a name="dataExchangeId" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConfig.property.dataExchangeId"></a>

```typescript
public readonly dataExchangeId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/bigquery_analytics_hub_data_exchange_iam_member#data_exchange_id BigqueryAnalyticsHubDataExchangeIamMember#data_exchange_id}.

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConfig.property.member"></a>

```typescript
public readonly member: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/bigquery_analytics_hub_data_exchange_iam_member#member BigqueryAnalyticsHubDataExchangeIamMember#member}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConfig.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/bigquery_analytics_hub_data_exchange_iam_member#role BigqueryAnalyticsHubDataExchangeIamMember#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConfig.property.condition"></a>

```typescript
public readonly condition: BigqueryAnalyticsHubDataExchangeIamMemberCondition;
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberCondition">BigqueryAnalyticsHubDataExchangeIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/bigquery_analytics_hub_data_exchange_iam_member#condition BigqueryAnalyticsHubDataExchangeIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/bigquery_analytics_hub_data_exchange_iam_member#id BigqueryAnalyticsHubDataExchangeIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/bigquery_analytics_hub_data_exchange_iam_member#location BigqueryAnalyticsHubDataExchangeIamMember#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/bigquery_analytics_hub_data_exchange_iam_member#project BigqueryAnalyticsHubDataExchangeIamMember#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference <a name="BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.Initializer"></a>

```typescript
import { bigqueryAnalyticsHubDataExchangeIamMember } from '@cdktn/provider-google'

new bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberCondition">BigqueryAnalyticsHubDataExchangeIamMemberCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BigqueryAnalyticsHubDataExchangeIamMemberCondition;
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberCondition">BigqueryAnalyticsHubDataExchangeIamMemberCondition</a>

---



