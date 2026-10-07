# `bigqueryAnalyticsHubListingSubscription` Submodule <a name="`bigqueryAnalyticsHubListingSubscription` Submodule" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BigqueryAnalyticsHubListingSubscription <a name="BigqueryAnalyticsHubListingSubscription" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription google_bigquery_analytics_hub_listing_subscription}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.Initializer"></a>

```typescript
import { bigqueryAnalyticsHubListingSubscription } from '@cdktn/provider-google'

new bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription(scope: Construct, id: string, config: BigqueryAnalyticsHubListingSubscriptionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionConfig">BigqueryAnalyticsHubListingSubscriptionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionConfig">BigqueryAnalyticsHubListingSubscriptionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.putDestinationDataset">putDestinationDataset</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.putDestinationPubsubSubscription">putDestinationPubsubSubscription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.resetDestinationDataset">resetDestinationDataset</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.resetDestinationPubsubSubscription">resetDestinationPubsubSubscription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDestinationDataset` <a name="putDestinationDataset" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.putDestinationDataset"></a>

```typescript
public putDestinationDataset(value: BigqueryAnalyticsHubListingSubscriptionDestinationDataset): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.putDestinationDataset.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDataset">BigqueryAnalyticsHubListingSubscriptionDestinationDataset</a>

---

##### `putDestinationPubsubSubscription` <a name="putDestinationPubsubSubscription" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.putDestinationPubsubSubscription"></a>

```typescript
public putDestinationPubsubSubscription(value: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscription): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.putDestinationPubsubSubscription.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscription">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscription</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.putTimeouts"></a>

```typescript
public putTimeouts(value: BigqueryAnalyticsHubListingSubscriptionTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeouts">BigqueryAnalyticsHubListingSubscriptionTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDestinationDataset` <a name="resetDestinationDataset" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.resetDestinationDataset"></a>

```typescript
public resetDestinationDataset(): void
```

##### `resetDestinationPubsubSubscription` <a name="resetDestinationPubsubSubscription" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.resetDestinationPubsubSubscription"></a>

```typescript
public resetDestinationPubsubSubscription(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a BigqueryAnalyticsHubListingSubscription resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.isConstruct"></a>

```typescript
import { bigqueryAnalyticsHubListingSubscription } from '@cdktn/provider-google'

bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.isTerraformElement"></a>

```typescript
import { bigqueryAnalyticsHubListingSubscription } from '@cdktn/provider-google'

bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.isTerraformResource"></a>

```typescript
import { bigqueryAnalyticsHubListingSubscription } from '@cdktn/provider-google'

bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.generateConfigForImport"></a>

```typescript
import { bigqueryAnalyticsHubListingSubscription } from '@cdktn/provider-google'

bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a BigqueryAnalyticsHubListingSubscription resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BigqueryAnalyticsHubListingSubscription to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BigqueryAnalyticsHubListingSubscription that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the BigqueryAnalyticsHubListingSubscription to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.commercialInfo">commercialInfo</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoList">BigqueryAnalyticsHubListingSubscriptionCommercialInfoList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.creationTime">creationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.destinationDataset">destinationDataset</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference">BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.destinationPubsubSubscription">destinationPubsubSubscription</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.lastModifyTime">lastModifyTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.linkedDatasetMap">linkedDatasetMap</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList">BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.linkedResources">linkedResources</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesList">BigqueryAnalyticsHubListingSubscriptionLinkedResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.logLinkedDatasetQueryUserEmail">logLinkedDatasetQueryUserEmail</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.organizationDisplayName">organizationDisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.organizationId">organizationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.subscriberContact">subscriberContact</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.subscriptionId">subscriptionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference">BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.dataExchangeIdInput">dataExchangeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.destinationDatasetInput">destinationDatasetInput</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDataset">BigqueryAnalyticsHubListingSubscriptionDestinationDataset</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.destinationPubsubSubscriptionInput">destinationPubsubSubscriptionInput</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscription">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.listingIdInput">listingIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeouts">BigqueryAnalyticsHubListingSubscriptionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.dataExchangeId">dataExchangeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.listingId">listingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `commercialInfo`<sup>Required</sup> <a name="commercialInfo" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.commercialInfo"></a>

```typescript
public readonly commercialInfo: BigqueryAnalyticsHubListingSubscriptionCommercialInfoList;
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoList">BigqueryAnalyticsHubListingSubscriptionCommercialInfoList</a>

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.creationTime"></a>

```typescript
public readonly creationTime: string;
```

- *Type:* string

---

##### `destinationDataset`<sup>Required</sup> <a name="destinationDataset" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.destinationDataset"></a>

```typescript
public readonly destinationDataset: BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference">BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference</a>

---

##### `destinationPubsubSubscription`<sup>Required</sup> <a name="destinationPubsubSubscription" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.destinationPubsubSubscription"></a>

```typescript
public readonly destinationPubsubSubscription: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference</a>

---

##### `lastModifyTime`<sup>Required</sup> <a name="lastModifyTime" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.lastModifyTime"></a>

```typescript
public readonly lastModifyTime: string;
```

- *Type:* string

---

##### `linkedDatasetMap`<sup>Required</sup> <a name="linkedDatasetMap" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.linkedDatasetMap"></a>

```typescript
public readonly linkedDatasetMap: BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList;
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList">BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList</a>

---

##### `linkedResources`<sup>Required</sup> <a name="linkedResources" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.linkedResources"></a>

```typescript
public readonly linkedResources: BigqueryAnalyticsHubListingSubscriptionLinkedResourcesList;
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesList">BigqueryAnalyticsHubListingSubscriptionLinkedResourcesList</a>

---

##### `logLinkedDatasetQueryUserEmail`<sup>Required</sup> <a name="logLinkedDatasetQueryUserEmail" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.logLinkedDatasetQueryUserEmail"></a>

```typescript
public readonly logLinkedDatasetQueryUserEmail: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `organizationDisplayName`<sup>Required</sup> <a name="organizationDisplayName" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.organizationDisplayName"></a>

```typescript
public readonly organizationDisplayName: string;
```

- *Type:* string

---

##### `organizationId`<sup>Required</sup> <a name="organizationId" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.organizationId"></a>

```typescript
public readonly organizationId: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `subscriberContact`<sup>Required</sup> <a name="subscriberContact" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.subscriberContact"></a>

```typescript
public readonly subscriberContact: string;
```

- *Type:* string

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.subscriptionId"></a>

```typescript
public readonly subscriptionId: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.timeouts"></a>

```typescript
public readonly timeouts: BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference">BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference</a>

---

##### `dataExchangeIdInput`<sup>Optional</sup> <a name="dataExchangeIdInput" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.dataExchangeIdInput"></a>

```typescript
public readonly dataExchangeIdInput: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `destinationDatasetInput`<sup>Optional</sup> <a name="destinationDatasetInput" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.destinationDatasetInput"></a>

```typescript
public readonly destinationDatasetInput: BigqueryAnalyticsHubListingSubscriptionDestinationDataset;
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDataset">BigqueryAnalyticsHubListingSubscriptionDestinationDataset</a>

---

##### `destinationPubsubSubscriptionInput`<sup>Optional</sup> <a name="destinationPubsubSubscriptionInput" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.destinationPubsubSubscriptionInput"></a>

```typescript
public readonly destinationPubsubSubscriptionInput: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscription;
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscription">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscription</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `listingIdInput`<sup>Optional</sup> <a name="listingIdInput" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.listingIdInput"></a>

```typescript
public readonly listingIdInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | BigqueryAnalyticsHubListingSubscriptionTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeouts">BigqueryAnalyticsHubListingSubscriptionTimeouts</a>

---

##### `dataExchangeId`<sup>Required</sup> <a name="dataExchangeId" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.dataExchangeId"></a>

```typescript
public readonly dataExchangeId: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `listingId`<sup>Required</sup> <a name="listingId" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.listingId"></a>

```typescript
public readonly listingId: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BigqueryAnalyticsHubListingSubscriptionCommercialInfo <a name="BigqueryAnalyticsHubListingSubscriptionCommercialInfo" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfo.Initializer"></a>

```typescript
import { bigqueryAnalyticsHubListingSubscription } from '@cdktn/provider-google'

const bigqueryAnalyticsHubListingSubscriptionCommercialInfo: bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfo = { ... }
```


### BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplace <a name="BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplace" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplace"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplace.Initializer"></a>

```typescript
import { bigqueryAnalyticsHubListingSubscription } from '@cdktn/provider-google'

const bigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplace: bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplace = { ... }
```


### BigqueryAnalyticsHubListingSubscriptionConfig <a name="BigqueryAnalyticsHubListingSubscriptionConfig" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionConfig.Initializer"></a>

```typescript
import { bigqueryAnalyticsHubListingSubscription } from '@cdktn/provider-google'

const bigqueryAnalyticsHubListingSubscriptionConfig: bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionConfig.property.dataExchangeId">dataExchangeId</a></code> | <code>string</code> | The ID of the data exchange. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionConfig.property.listingId">listingId</a></code> | <code>string</code> | The ID of the listing. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionConfig.property.location">location</a></code> | <code>string</code> | The name of the location of the data exchange. Distinct from the location of the destination data set. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionConfig.property.destinationDataset">destinationDataset</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDataset">BigqueryAnalyticsHubListingSubscriptionDestinationDataset</a></code> | destination_dataset block. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionConfig.property.destinationPubsubSubscription">destinationPubsubSubscription</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscription">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscription</a></code> | destination_pubsub_subscription block. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#id BigqueryAnalyticsHubListingSubscription#id}. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#project BigqueryAnalyticsHubListingSubscription#project}. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeouts">BigqueryAnalyticsHubListingSubscriptionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `dataExchangeId`<sup>Required</sup> <a name="dataExchangeId" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionConfig.property.dataExchangeId"></a>

```typescript
public readonly dataExchangeId: string;
```

- *Type:* string

The ID of the data exchange.

Must contain only Unicode letters, numbers (0-9), underscores (_). Should not use characters that require URL-escaping, or characters outside of ASCII, spaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#data_exchange_id BigqueryAnalyticsHubListingSubscription#data_exchange_id}

---

##### `listingId`<sup>Required</sup> <a name="listingId" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionConfig.property.listingId"></a>

```typescript
public readonly listingId: string;
```

- *Type:* string

The ID of the listing.

Must contain only Unicode letters, numbers (0-9), underscores (_). Should not use characters that require URL-escaping, or characters outside of ASCII, spaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#listing_id BigqueryAnalyticsHubListingSubscription#listing_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The name of the location of the data exchange. Distinct from the location of the destination data set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#location BigqueryAnalyticsHubListingSubscription#location}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#deletion_policy BigqueryAnalyticsHubListingSubscription#deletion_policy}

---

##### `destinationDataset`<sup>Optional</sup> <a name="destinationDataset" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionConfig.property.destinationDataset"></a>

```typescript
public readonly destinationDataset: BigqueryAnalyticsHubListingSubscriptionDestinationDataset;
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDataset">BigqueryAnalyticsHubListingSubscriptionDestinationDataset</a>

destination_dataset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#destination_dataset BigqueryAnalyticsHubListingSubscription#destination_dataset}

---

##### `destinationPubsubSubscription`<sup>Optional</sup> <a name="destinationPubsubSubscription" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionConfig.property.destinationPubsubSubscription"></a>

```typescript
public readonly destinationPubsubSubscription: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscription;
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscription">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscription</a>

destination_pubsub_subscription block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#destination_pubsub_subscription BigqueryAnalyticsHubListingSubscription#destination_pubsub_subscription}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#id BigqueryAnalyticsHubListingSubscription#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#project BigqueryAnalyticsHubListingSubscription#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionConfig.property.timeouts"></a>

```typescript
public readonly timeouts: BigqueryAnalyticsHubListingSubscriptionTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeouts">BigqueryAnalyticsHubListingSubscriptionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#timeouts BigqueryAnalyticsHubListingSubscription#timeouts}

---

### BigqueryAnalyticsHubListingSubscriptionDestinationDataset <a name="BigqueryAnalyticsHubListingSubscriptionDestinationDataset" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDataset"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDataset.Initializer"></a>

```typescript
import { bigqueryAnalyticsHubListingSubscription } from '@cdktn/provider-google'

const bigqueryAnalyticsHubListingSubscriptionDestinationDataset: bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDataset = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDataset.property.datasetReference">datasetReference</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReference">BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReference</a></code> | dataset_reference block. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDataset.property.location">location</a></code> | <code>string</code> | The geographic location where the dataset should reside. See https://cloud.google.com/bigquery/docs/locations for supported locations. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDataset.property.description">description</a></code> | <code>string</code> | A user-friendly description of the dataset. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDataset.property.friendlyName">friendlyName</a></code> | <code>string</code> | A descriptive name for the dataset. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDataset.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | The labels associated with this dataset. You can use these to organize and group your datasets. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDataset.property.replicaLocations">replicaLocations</a></code> | <code>string[]</code> | List of regions where the subscriber wants dataset replicas. |

---

##### `datasetReference`<sup>Required</sup> <a name="datasetReference" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDataset.property.datasetReference"></a>

```typescript
public readonly datasetReference: BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReference;
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReference">BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReference</a>

dataset_reference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#dataset_reference BigqueryAnalyticsHubListingSubscription#dataset_reference}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDataset.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The geographic location where the dataset should reside. See https://cloud.google.com/bigquery/docs/locations for supported locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#location BigqueryAnalyticsHubListingSubscription#location}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDataset.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A user-friendly description of the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#description BigqueryAnalyticsHubListingSubscription#description}

---

##### `friendlyName`<sup>Optional</sup> <a name="friendlyName" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDataset.property.friendlyName"></a>

```typescript
public readonly friendlyName: string;
```

- *Type:* string

A descriptive name for the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#friendly_name BigqueryAnalyticsHubListingSubscription#friendly_name}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDataset.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The labels associated with this dataset. You can use these to organize and group your datasets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#labels BigqueryAnalyticsHubListingSubscription#labels}

---

##### `replicaLocations`<sup>Optional</sup> <a name="replicaLocations" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDataset.property.replicaLocations"></a>

```typescript
public readonly replicaLocations: string[];
```

- *Type:* string[]

List of regions where the subscriber wants dataset replicas.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#replica_locations BigqueryAnalyticsHubListingSubscription#replica_locations}

---

### BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReference <a name="BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReference" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReference"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReference.Initializer"></a>

```typescript
import { bigqueryAnalyticsHubListingSubscription } from '@cdktn/provider-google'

const bigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReference: bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReference = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReference.property.datasetId">datasetId</a></code> | <code>string</code> | A unique ID for this dataset, without the project name. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReference.property.projectId">projectId</a></code> | <code>string</code> | The ID of the project containing this dataset. |

---

##### `datasetId`<sup>Required</sup> <a name="datasetId" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReference.property.datasetId"></a>

```typescript
public readonly datasetId: string;
```

- *Type:* string

A unique ID for this dataset, without the project name.

The ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_). The maximum length is 1,024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#dataset_id BigqueryAnalyticsHubListingSubscription#dataset_id}

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReference.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

The ID of the project containing this dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#project_id BigqueryAnalyticsHubListingSubscription#project_id}

---

### BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscription <a name="BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscription" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscription"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscription.Initializer"></a>

```typescript
import { bigqueryAnalyticsHubListingSubscription } from '@cdktn/provider-google'

const bigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscription: bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscription = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscription.property.pubsubSubscription">pubsubSubscription</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription</a></code> | pubsub_subscription block. |

---

##### `pubsubSubscription`<sup>Required</sup> <a name="pubsubSubscription" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscription.property.pubsubSubscription"></a>

```typescript
public readonly pubsubSubscription: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription;
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription</a>

pubsub_subscription block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#pubsub_subscription BigqueryAnalyticsHubListingSubscription#pubsub_subscription}

---

### BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription <a name="BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription.Initializer"></a>

```typescript
import { bigqueryAnalyticsHubListingSubscription } from '@cdktn/provider-google'

const bigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription: bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription.property.name">name</a></code> | <code>string</code> | Name of the subscription. Format is 'projects/{project}/subscriptions/{sub}'. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription.property.ackDeadlineSeconds">ackDeadlineSeconds</a></code> | <code>number</code> | The approximate amount of time (on a best-effort basis) Pub/Sub waits for the subscriber to acknowledge receipt before resending the message. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription.property.bigqueryConfig">bigqueryConfig</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig</a></code> | bigquery_config block. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription.property.cloudStorageConfig">cloudStorageConfig</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig</a></code> | cloud_storage_config block. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription.property.deadLetterPolicy">deadLetterPolicy</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicy">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicy</a></code> | dead_letter_policy block. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription.property.detached">detached</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates whether the subscription is detached from its topic. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription.property.enableExactlyOnceDelivery">enableExactlyOnceDelivery</a></code> | <code>boolean \| cdktn.IResolvable</code> | If true, Pub/Sub provides the following guarantees for the delivery of a message with a given value of 'message_id' on this subscription: The message sent to a subscriber is guaranteed not to be resent before the message's acknowledgement deadline expires. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription.property.enableMessageOrdering">enableMessageOrdering</a></code> | <code>boolean \| cdktn.IResolvable</code> | If true, messages published with the same 'ordering_key' in 'PubsubMessage' will be delivered to the subscribers in the order in which they are received by the Pub/Sub system. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription.property.expirationPolicy">expirationPolicy</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicy">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicy</a></code> | expiration_policy block. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription.property.filter">filter</a></code> | <code>string</code> | An expression written in the Pub/Sub filter language. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | See [Creating and managing labels](https://cloud.google.com/pubsub/docs/labels). |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription.property.messageRetentionDuration">messageRetentionDuration</a></code> | <code>string</code> | How long to retain unacknowledged messages in the subscription's backlog, from the moment a message is published. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription.property.pushConfig">pushConfig</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig</a></code> | push_config block. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription.property.retainAckedMessages">retainAckedMessages</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates whether to retain acknowledged messages. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription.property.retryPolicy">retryPolicy</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicy">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicy</a></code> | retry_policy block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the subscription. Format is 'projects/{project}/subscriptions/{sub}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#name BigqueryAnalyticsHubListingSubscription#name}

---

##### `ackDeadlineSeconds`<sup>Optional</sup> <a name="ackDeadlineSeconds" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription.property.ackDeadlineSeconds"></a>

```typescript
public readonly ackDeadlineSeconds: number;
```

- *Type:* number

The approximate amount of time (on a best-effort basis) Pub/Sub waits for the subscriber to acknowledge receipt before resending the message.

In the interval after the message is delivered
and before it is acknowledged, it is considered to be outstanding. During that time period, the
message will not be redelivered (on a best-effort basis). For pull subscriptions, this value is
used as the initial value for the ack deadline. To override this value for a given message, call
'ModifyAckDeadline' with the corresponding 'ack_id' if using non-streaming pull or send the
'ack_id' in a 'StreamingModifyAckDeadlineRequest' if using streaming pull. The minimum custom
deadline you can specify is 10 seconds. The maximum custom deadline you can specify is 600
seconds (10 minutes). If this parameter is 0, a default value of 10 seconds is used. For push
delivery, this value is also used to set the request timeout for the call to the push endpoint.
If the subscriber never acknowledges the message, the Pub/Sub system will eventually redeliver
the message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#ack_deadline_seconds BigqueryAnalyticsHubListingSubscription#ack_deadline_seconds}

---

##### `bigqueryConfig`<sup>Optional</sup> <a name="bigqueryConfig" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription.property.bigqueryConfig"></a>

```typescript
public readonly bigqueryConfig: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig;
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig</a>

bigquery_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#bigquery_config BigqueryAnalyticsHubListingSubscription#bigquery_config}

---

##### `cloudStorageConfig`<sup>Optional</sup> <a name="cloudStorageConfig" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription.property.cloudStorageConfig"></a>

```typescript
public readonly cloudStorageConfig: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig;
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig</a>

cloud_storage_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#cloud_storage_config BigqueryAnalyticsHubListingSubscription#cloud_storage_config}

---

##### `deadLetterPolicy`<sup>Optional</sup> <a name="deadLetterPolicy" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription.property.deadLetterPolicy"></a>

```typescript
public readonly deadLetterPolicy: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicy;
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicy">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicy</a>

dead_letter_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#dead_letter_policy BigqueryAnalyticsHubListingSubscription#dead_letter_policy}

---

##### `detached`<sup>Optional</sup> <a name="detached" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription.property.detached"></a>

```typescript
public readonly detached: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates whether the subscription is detached from its topic.

Detached subscriptions don't
receive messages from their topic and don't retain any backlog. 'Pull' and 'StreamingPull'
requests will return FAILED_PRECONDITION. If the subscription is a push subscription, pushes
to the endpoint will not be made.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#detached BigqueryAnalyticsHubListingSubscription#detached}

---

##### `enableExactlyOnceDelivery`<sup>Optional</sup> <a name="enableExactlyOnceDelivery" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription.property.enableExactlyOnceDelivery"></a>

```typescript
public readonly enableExactlyOnceDelivery: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If true, Pub/Sub provides the following guarantees for the delivery of a message with a given value of 'message_id' on this subscription: The message sent to a subscriber is guaranteed not to be resent before the message's acknowledgement deadline expires.

An acknowledged message will
not be resent to a subscriber. Note that subscribers may still receive multiple copies of a
message when 'enableExactlyOnceDelivery' is true if the message was published multiple times by
a publisher client. These copies are considered distinct by Pub/Sub and have distinct 'message_id'
values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#enable_exactly_once_delivery BigqueryAnalyticsHubListingSubscription#enable_exactly_once_delivery}

---

##### `enableMessageOrdering`<sup>Optional</sup> <a name="enableMessageOrdering" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription.property.enableMessageOrdering"></a>

```typescript
public readonly enableMessageOrdering: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If true, messages published with the same 'ordering_key' in 'PubsubMessage' will be delivered to the subscribers in the order in which they are received by the Pub/Sub system.

Otherwise, they may be delivered in any order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#enable_message_ordering BigqueryAnalyticsHubListingSubscription#enable_message_ordering}

---

##### `expirationPolicy`<sup>Optional</sup> <a name="expirationPolicy" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription.property.expirationPolicy"></a>

```typescript
public readonly expirationPolicy: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicy;
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicy">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicy</a>

expiration_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#expiration_policy BigqueryAnalyticsHubListingSubscription#expiration_policy}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

An expression written in the Pub/Sub filter language.

If non-empty, then only 'PubsubMessage's
whose 'attributes' field matches the filter are delivered on this subscription. If empty, then
no messages are filtered out.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#filter BigqueryAnalyticsHubListingSubscription#filter}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

See [Creating and managing labels](https://cloud.google.com/pubsub/docs/labels).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#labels BigqueryAnalyticsHubListingSubscription#labels}

---

##### `messageRetentionDuration`<sup>Optional</sup> <a name="messageRetentionDuration" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription.property.messageRetentionDuration"></a>

```typescript
public readonly messageRetentionDuration: string;
```

- *Type:* string

How long to retain unacknowledged messages in the subscription's backlog, from the moment a message is published.

If 'retainAckedMessages' is true, then this also configures the retention
of acknowledged messages, and thus configures how far back in time a Seek can be done. Defaults
to 7 days. Cannot be more than 31 days or less than 10 minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#message_retention_duration BigqueryAnalyticsHubListingSubscription#message_retention_duration}

---

##### `pushConfig`<sup>Optional</sup> <a name="pushConfig" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription.property.pushConfig"></a>

```typescript
public readonly pushConfig: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig;
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig</a>

push_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#push_config BigqueryAnalyticsHubListingSubscription#push_config}

---

##### `retainAckedMessages`<sup>Optional</sup> <a name="retainAckedMessages" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription.property.retainAckedMessages"></a>

```typescript
public readonly retainAckedMessages: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates whether to retain acknowledged messages.

If true, then messages are not expunged from
the subscription's backlog, even if they are acknowledged, until they fall out of the
'messageRetentionDuration' window. This must be true if you would like to Seek to a timestamp
in the past to replay previously-acknowledged messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#retain_acked_messages BigqueryAnalyticsHubListingSubscription#retain_acked_messages}

---

##### `retryPolicy`<sup>Optional</sup> <a name="retryPolicy" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription.property.retryPolicy"></a>

```typescript
public readonly retryPolicy: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicy;
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicy">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicy</a>

retry_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#retry_policy BigqueryAnalyticsHubListingSubscription#retry_policy}

---

### BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig <a name="BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig.Initializer"></a>

```typescript
import { bigqueryAnalyticsHubListingSubscription } from '@cdktn/provider-google'

const bigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig: bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig.property.dropUnknownFields">dropUnknownFields</a></code> | <code>boolean \| cdktn.IResolvable</code> | When true and 'useTopicSchema' is true, any fields that are a part of the topic schema that are not part of the BigQuery table schema are dropped when writing to BigQuery. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>string</code> | The service account to use to write to BigQuery. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig.property.table">table</a></code> | <code>string</code> | The name of the table to which to write data, of the form {projectId}.{datasetId}.{tableId}. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig.property.useTableSchema">useTableSchema</a></code> | <code>boolean \| cdktn.IResolvable</code> | When true, use the BigQuery table's schema as the columns to write to in BigQuery. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig.property.useTopicSchema">useTopicSchema</a></code> | <code>boolean \| cdktn.IResolvable</code> | When true, use the topic's schema as the columns to write to in BigQuery, if it exists. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig.property.writeMetadata">writeMetadata</a></code> | <code>boolean \| cdktn.IResolvable</code> | When true, write the subscription name, message_id, publish_time, attributes, and ordering_key to additional columns in the table. |

---

##### `dropUnknownFields`<sup>Optional</sup> <a name="dropUnknownFields" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig.property.dropUnknownFields"></a>

```typescript
public readonly dropUnknownFields: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

When true and 'useTopicSchema' is true, any fields that are a part of the topic schema that are not part of the BigQuery table schema are dropped when writing to BigQuery.

Otherwise, the schemas
must be kept in sync and any messages with extra fields are not written and remain in the
subscription's backlog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#drop_unknown_fields BigqueryAnalyticsHubListingSubscription#drop_unknown_fields}

---

##### `serviceAccountEmail`<sup>Optional</sup> <a name="serviceAccountEmail" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig.property.serviceAccountEmail"></a>

```typescript
public readonly serviceAccountEmail: string;
```

- *Type:* string

The service account to use to write to BigQuery.

The subscription creator or updater that
specifies this field must have 'iam.serviceAccounts.actAs' permission on the service account.
If not specified, the Pub/Sub service agent,
service-{project_number}@gcp-sa-pubsub.iam.gserviceaccount.com, is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#service_account_email BigqueryAnalyticsHubListingSubscription#service_account_email}

---

##### `table`<sup>Optional</sup> <a name="table" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig.property.table"></a>

```typescript
public readonly table: string;
```

- *Type:* string

The name of the table to which to write data, of the form {projectId}.{datasetId}.{tableId}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#table BigqueryAnalyticsHubListingSubscription#table}

---

##### `useTableSchema`<sup>Optional</sup> <a name="useTableSchema" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig.property.useTableSchema"></a>

```typescript
public readonly useTableSchema: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

When true, use the BigQuery table's schema as the columns to write to in BigQuery.

'useTableSchema' and 'useTopicSchema' cannot be enabled at the same time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#use_table_schema BigqueryAnalyticsHubListingSubscription#use_table_schema}

---

##### `useTopicSchema`<sup>Optional</sup> <a name="useTopicSchema" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig.property.useTopicSchema"></a>

```typescript
public readonly useTopicSchema: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

When true, use the topic's schema as the columns to write to in BigQuery, if it exists.

'useTopicSchema' and 'useTableSchema' cannot be enabled at the same time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#use_topic_schema BigqueryAnalyticsHubListingSubscription#use_topic_schema}

---

##### `writeMetadata`<sup>Optional</sup> <a name="writeMetadata" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig.property.writeMetadata"></a>

```typescript
public readonly writeMetadata: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

When true, write the subscription name, message_id, publish_time, attributes, and ordering_key to additional columns in the table.

The subscription name, message_id, and publish_time fields
are put in their own columns while all other message properties (other than data) are written
to a JSON object in the attributes column.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#write_metadata BigqueryAnalyticsHubListingSubscription#write_metadata}

---

### BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig <a name="BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig.Initializer"></a>

```typescript
import { bigqueryAnalyticsHubListingSubscription } from '@cdktn/provider-google'

const bigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig: bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig.property.avroConfig">avroConfig</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfig">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfig</a></code> | avro_config block. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig.property.bucket">bucket</a></code> | <code>string</code> | User-provided name for the Cloud Storage bucket. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig.property.filenameDatetimeFormat">filenameDatetimeFormat</a></code> | <code>string</code> | User-provided format string specifying how to represent datetimes in Cloud Storage filenames. See the [datetime format guidance](https://cloud.google.com/pubsub/docs/create-cloudstorage-subscription#file_names). |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig.property.filenamePrefix">filenamePrefix</a></code> | <code>string</code> | User-provided prefix for Cloud Storage filename. See the [object naming requirements](https://cloud.google.com/storage/docs/objects#naming). |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig.property.filenameSuffix">filenameSuffix</a></code> | <code>string</code> | User-provided suffix for Cloud Storage filename. See the [object naming requirements](https://cloud.google.com/storage/docs/objects#naming). Must not end in "/". |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig.property.maxBytes">maxBytes</a></code> | <code>string</code> | The maximum bytes that can be written to a Cloud Storage file before a new file is created. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig.property.maxDuration">maxDuration</a></code> | <code>string</code> | The maximum duration that can elapse before a new Cloud Storage file is created. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig.property.maxMessages">maxMessages</a></code> | <code>string</code> | The maximum number of messages that can be written to a Cloud Storage file before a new file is created. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>string</code> | The service account to use to write to Cloud Storage. |

---

##### `avroConfig`<sup>Optional</sup> <a name="avroConfig" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig.property.avroConfig"></a>

```typescript
public readonly avroConfig: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfig;
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfig">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfig</a>

avro_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#avro_config BigqueryAnalyticsHubListingSubscription#avro_config}

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

User-provided name for the Cloud Storage bucket.

The bucket must be created by the user.
The bucket name must be without any prefix like "gs://". See the
[bucket naming requirements](https://cloud.google.com/storage/docs/buckets#naming).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#bucket BigqueryAnalyticsHubListingSubscription#bucket}

---

##### `filenameDatetimeFormat`<sup>Optional</sup> <a name="filenameDatetimeFormat" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig.property.filenameDatetimeFormat"></a>

```typescript
public readonly filenameDatetimeFormat: string;
```

- *Type:* string

User-provided format string specifying how to represent datetimes in Cloud Storage filenames. See the [datetime format guidance](https://cloud.google.com/pubsub/docs/create-cloudstorage-subscription#file_names).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#filename_datetime_format BigqueryAnalyticsHubListingSubscription#filename_datetime_format}

---

##### `filenamePrefix`<sup>Optional</sup> <a name="filenamePrefix" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig.property.filenamePrefix"></a>

```typescript
public readonly filenamePrefix: string;
```

- *Type:* string

User-provided prefix for Cloud Storage filename. See the [object naming requirements](https://cloud.google.com/storage/docs/objects#naming).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#filename_prefix BigqueryAnalyticsHubListingSubscription#filename_prefix}

---

##### `filenameSuffix`<sup>Optional</sup> <a name="filenameSuffix" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig.property.filenameSuffix"></a>

```typescript
public readonly filenameSuffix: string;
```

- *Type:* string

User-provided suffix for Cloud Storage filename. See the [object naming requirements](https://cloud.google.com/storage/docs/objects#naming). Must not end in "/".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#filename_suffix BigqueryAnalyticsHubListingSubscription#filename_suffix}

---

##### `maxBytes`<sup>Optional</sup> <a name="maxBytes" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig.property.maxBytes"></a>

```typescript
public readonly maxBytes: string;
```

- *Type:* string

The maximum bytes that can be written to a Cloud Storage file before a new file is created.

Min 1 KB, max 10 GiB. The maxBytes limit may be exceeded in cases where messages are larger
than the limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#max_bytes BigqueryAnalyticsHubListingSubscription#max_bytes}

---

##### `maxDuration`<sup>Optional</sup> <a name="maxDuration" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig.property.maxDuration"></a>

```typescript
public readonly maxDuration: string;
```

- *Type:* string

The maximum duration that can elapse before a new Cloud Storage file is created.

Min 1 minute, max 10 minutes, default 5 minutes. May not exceed the subscription's
acknowledgement deadline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#max_duration BigqueryAnalyticsHubListingSubscription#max_duration}

---

##### `maxMessages`<sup>Optional</sup> <a name="maxMessages" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig.property.maxMessages"></a>

```typescript
public readonly maxMessages: string;
```

- *Type:* string

The maximum number of messages that can be written to a Cloud Storage file before a new file is created.

Min 1000 messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#max_messages BigqueryAnalyticsHubListingSubscription#max_messages}

---

##### `serviceAccountEmail`<sup>Optional</sup> <a name="serviceAccountEmail" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig.property.serviceAccountEmail"></a>

```typescript
public readonly serviceAccountEmail: string;
```

- *Type:* string

The service account to use to write to Cloud Storage.

The subscription creator or updater that
specifies this field must have 'iam.serviceAccounts.actAs' permission on the service account.
If not specified, the Pub/Sub service agent,
service-{project_number}@gcp-sa-pubsub.iam.gserviceaccount.com, is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#service_account_email BigqueryAnalyticsHubListingSubscription#service_account_email}

---

### BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfig <a name="BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfig" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfig.Initializer"></a>

```typescript
import { bigqueryAnalyticsHubListingSubscription } from '@cdktn/provider-google'

const bigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfig: bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfig.property.useTopicSchema">useTopicSchema</a></code> | <code>boolean \| cdktn.IResolvable</code> | When true, the output Cloud Storage file will be serialized using the topic schema, if it exists. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfig.property.writeMetadata">writeMetadata</a></code> | <code>boolean \| cdktn.IResolvable</code> | When true, write the subscription name, message_id, publish_time, attributes, and ordering_key as additional fields in the output. |

---

##### `useTopicSchema`<sup>Optional</sup> <a name="useTopicSchema" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfig.property.useTopicSchema"></a>

```typescript
public readonly useTopicSchema: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

When true, the output Cloud Storage file will be serialized using the topic schema, if it exists.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#use_topic_schema BigqueryAnalyticsHubListingSubscription#use_topic_schema}

---

##### `writeMetadata`<sup>Optional</sup> <a name="writeMetadata" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfig.property.writeMetadata"></a>

```typescript
public readonly writeMetadata: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

When true, write the subscription name, message_id, publish_time, attributes, and ordering_key as additional fields in the output.

The subscription name, message_id, and publish_time fields
are put in their own fields while all other message properties other than data (for example,
an ordering_key, if present) are added as entries in the attributes map.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#write_metadata BigqueryAnalyticsHubListingSubscription#write_metadata}

---

### BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicy <a name="BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicy" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicy.Initializer"></a>

```typescript
import { bigqueryAnalyticsHubListingSubscription } from '@cdktn/provider-google'

const bigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicy: bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicy.property.deadLetterTopic">deadLetterTopic</a></code> | <code>string</code> | The name of the topic to which dead letter messages should be published. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicy.property.maxDeliveryAttempts">maxDeliveryAttempts</a></code> | <code>number</code> | The maximum number of delivery attempts for any message. |

---

##### `deadLetterTopic`<sup>Optional</sup> <a name="deadLetterTopic" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicy.property.deadLetterTopic"></a>

```typescript
public readonly deadLetterTopic: string;
```

- *Type:* string

The name of the topic to which dead letter messages should be published.

Format is
'projects/{project}/topics/{topic}'. The Pub/Sub service account associated with the enclosing
subscription's parent project (i.e., service-{project_number}@gcp-sa-pubsub.iam.gserviceaccount.com)
must have permission to Publish() to this topic. The operation will fail if the topic does not exist.
Users should ensure that there is a subscription attached to this topic since messages published to
a topic with no subscriptions are lost.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#dead_letter_topic BigqueryAnalyticsHubListingSubscription#dead_letter_topic}

---

##### `maxDeliveryAttempts`<sup>Optional</sup> <a name="maxDeliveryAttempts" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicy.property.maxDeliveryAttempts"></a>

```typescript
public readonly maxDeliveryAttempts: number;
```

- *Type:* number

The maximum number of delivery attempts for any message.

The value must be between 5 and 100.
The number of delivery attempts is defined as 1 + (the sum of number of NACKs and number of times
the acknowledgement deadline has been exceeded for the message). A NACK is any call to
ModifyAckDeadline with a 0 deadline. Note that client libraries may automatically extend
ack_deadlines. This field will be honored on a best effort basis. If this parameter is 0, a
default value of 5 is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#max_delivery_attempts BigqueryAnalyticsHubListingSubscription#max_delivery_attempts}

---

### BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicy <a name="BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicy" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicy.Initializer"></a>

```typescript
import { bigqueryAnalyticsHubListingSubscription } from '@cdktn/provider-google'

const bigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicy: bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicy.property.ttl">ttl</a></code> | <code>string</code> | Specifies the "time-to-live" duration for an associated resource. |

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicy.property.ttl"></a>

```typescript
public readonly ttl: string;
```

- *Type:* string

Specifies the "time-to-live" duration for an associated resource.

The resource expires if it
is not active for a period of 'ttl'. The definition of "activity" depends on the type of the
associated resource. The minimum and maximum allowed values for 'ttl' depend on the type of
the associated resource, as well. If 'ttl' is not set, the associated resource never expires.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#ttl BigqueryAnalyticsHubListingSubscription#ttl}

---

### BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig <a name="BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig.Initializer"></a>

```typescript
import { bigqueryAnalyticsHubListingSubscription } from '@cdktn/provider-google'

const bigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig: bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig.property.attributes">attributes</a></code> | <code>{[ key: string ]: string}</code> | Endpoint configuration attributes that can be used to control different aspects of the message delivery. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig.property.noWrapper">noWrapper</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapper">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapper</a></code> | no_wrapper block. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig.property.oidcToken">oidcToken</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcToken">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcToken</a></code> | oidc_token block. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig.property.pushEndpoint">pushEndpoint</a></code> | <code>string</code> | A URL locating the endpoint to which messages should be pushed. For example, a Webhook endpoint might use 'https://example.com/push'. |

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig.property.attributes"></a>

```typescript
public readonly attributes: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Endpoint configuration attributes that can be used to control different aspects of the message delivery.

The only currently supported attribute is 'x-goog-version', which you can use to change the format of the
pushed message. This attribute indicates the version of the data expected by the endpoint. This controls
the shape of the pushed message (i.e., its fields and metadata). If not present during the
'CreateSubscription' call, it will default to the version of the Pub/Sub API used to make such call.
If not present in a 'ModifyPushConfig' call, its value will not be changed. 'GetSubscription' calls
will always return a valid version, even if the subscription was created without this attribute.
The only supported values for the 'x-goog-version' attribute are: 'v1beta1': uses the push format
defined in the v1beta1 Pub/Sub API. 'v1' or 'v1beta2': uses the push format defined in the v1 Pub/Sub API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#attributes BigqueryAnalyticsHubListingSubscription#attributes}

---

##### `noWrapper`<sup>Optional</sup> <a name="noWrapper" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig.property.noWrapper"></a>

```typescript
public readonly noWrapper: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapper;
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapper">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapper</a>

no_wrapper block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#no_wrapper BigqueryAnalyticsHubListingSubscription#no_wrapper}

---

##### `oidcToken`<sup>Optional</sup> <a name="oidcToken" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig.property.oidcToken"></a>

```typescript
public readonly oidcToken: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcToken;
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcToken">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcToken</a>

oidc_token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#oidc_token BigqueryAnalyticsHubListingSubscription#oidc_token}

---

##### `pushEndpoint`<sup>Optional</sup> <a name="pushEndpoint" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig.property.pushEndpoint"></a>

```typescript
public readonly pushEndpoint: string;
```

- *Type:* string

A URL locating the endpoint to which messages should be pushed. For example, a Webhook endpoint might use 'https://example.com/push'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#push_endpoint BigqueryAnalyticsHubListingSubscription#push_endpoint}

---

### BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapper <a name="BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapper" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapper"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapper.Initializer"></a>

```typescript
import { bigqueryAnalyticsHubListingSubscription } from '@cdktn/provider-google'

const bigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapper: bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapper = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapper.property.writeMetadata">writeMetadata</a></code> | <code>boolean \| cdktn.IResolvable</code> | When true, writes the Pub/Sub message metadata to 'x-goog-pubsub-<KEY>:<VAL>' headers of the HTTP request. |

---

##### `writeMetadata`<sup>Optional</sup> <a name="writeMetadata" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapper.property.writeMetadata"></a>

```typescript
public readonly writeMetadata: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

When true, writes the Pub/Sub message metadata to 'x-goog-pubsub-<KEY>:<VAL>' headers of the HTTP request.

Writes the Pub/Sub message attributes to '<KEY>:<VAL>' headers of the HTTP request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#write_metadata BigqueryAnalyticsHubListingSubscription#write_metadata}

---

### BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcToken <a name="BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcToken" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcToken"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcToken.Initializer"></a>

```typescript
import { bigqueryAnalyticsHubListingSubscription } from '@cdktn/provider-google'

const bigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcToken: bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcToken = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcToken.property.audience">audience</a></code> | <code>string</code> | Audience to be used when generating OIDC token. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcToken.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>string</code> | Service account email used for generating the OIDC token. For more information on setting up authentication, see Push subscriptions. |

---

##### `audience`<sup>Optional</sup> <a name="audience" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcToken.property.audience"></a>

```typescript
public readonly audience: string;
```

- *Type:* string

Audience to be used when generating OIDC token.

The audience claim identifies the recipients
that the JWT is intended for. The audience value is a single case-sensitive string. Having
multiple values (array) for the audience field is not supported. More info about the OIDC JWT
token audience here: https://tools.ietf.org/html/rfc7519#section-4.1.3 Note: if not specified,
the Push endpoint URL will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#audience BigqueryAnalyticsHubListingSubscription#audience}

---

##### `serviceAccountEmail`<sup>Optional</sup> <a name="serviceAccountEmail" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcToken.property.serviceAccountEmail"></a>

```typescript
public readonly serviceAccountEmail: string;
```

- *Type:* string

Service account email used for generating the OIDC token. For more information on setting up authentication, see Push subscriptions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#service_account_email BigqueryAnalyticsHubListingSubscription#service_account_email}

---

### BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicy <a name="BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicy" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicy.Initializer"></a>

```typescript
import { bigqueryAnalyticsHubListingSubscription } from '@cdktn/provider-google'

const bigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicy: bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicy.property.maximumBackoff">maximumBackoff</a></code> | <code>string</code> | The maximum delay between consecutive deliveries of a given message. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicy.property.minimumBackoff">minimumBackoff</a></code> | <code>string</code> | The minimum delay between consecutive deliveries of a given message. |

---

##### `maximumBackoff`<sup>Optional</sup> <a name="maximumBackoff" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicy.property.maximumBackoff"></a>

```typescript
public readonly maximumBackoff: string;
```

- *Type:* string

The maximum delay between consecutive deliveries of a given message.

Value should be between 0 and 600 seconds. Defaults to 600 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#maximum_backoff BigqueryAnalyticsHubListingSubscription#maximum_backoff}

---

##### `minimumBackoff`<sup>Optional</sup> <a name="minimumBackoff" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicy.property.minimumBackoff"></a>

```typescript
public readonly minimumBackoff: string;
```

- *Type:* string

The minimum delay between consecutive deliveries of a given message.

Value should be between 0 and 600 seconds. Defaults to 10 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#minimum_backoff BigqueryAnalyticsHubListingSubscription#minimum_backoff}

---

### BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMap <a name="BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMap" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMap"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMap.Initializer"></a>

```typescript
import { bigqueryAnalyticsHubListingSubscription } from '@cdktn/provider-google'

const bigqueryAnalyticsHubListingSubscriptionLinkedDatasetMap: bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMap = { ... }
```


### BigqueryAnalyticsHubListingSubscriptionLinkedResources <a name="BigqueryAnalyticsHubListingSubscriptionLinkedResources" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResources.Initializer"></a>

```typescript
import { bigqueryAnalyticsHubListingSubscription } from '@cdktn/provider-google'

const bigqueryAnalyticsHubListingSubscriptionLinkedResources: bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResources = { ... }
```


### BigqueryAnalyticsHubListingSubscriptionTimeouts <a name="BigqueryAnalyticsHubListingSubscriptionTimeouts" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeouts.Initializer"></a>

```typescript
import { bigqueryAnalyticsHubListingSubscription } from '@cdktn/provider-google'

const bigqueryAnalyticsHubListingSubscriptionTimeouts: bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#create BigqueryAnalyticsHubListingSubscription#create}. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#delete BigqueryAnalyticsHubListingSubscription#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#create BigqueryAnalyticsHubListingSubscription#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#delete BigqueryAnalyticsHubListingSubscription#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList <a name="BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList.Initializer"></a>

```typescript
import { bigqueryAnalyticsHubListingSubscription } from '@cdktn/provider-google'

new bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList.get"></a>

```typescript
public get(index: number): BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference <a name="BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.Initializer"></a>

```typescript
import { bigqueryAnalyticsHubListingSubscription } from '@cdktn/provider-google'

new bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.property.order">order</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplace">BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplace</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.property.order"></a>

```typescript
public readonly order: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplace;
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplace">BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplace</a>

---


### BigqueryAnalyticsHubListingSubscriptionCommercialInfoList <a name="BigqueryAnalyticsHubListingSubscriptionCommercialInfoList" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoList.Initializer"></a>

```typescript
import { bigqueryAnalyticsHubListingSubscription } from '@cdktn/provider-google'

new bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoList.get"></a>

```typescript
public get(index: number): BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference <a name="BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.Initializer"></a>

```typescript
import { bigqueryAnalyticsHubListingSubscription } from '@cdktn/provider-google'

new bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.property.cloudMarketplace">cloudMarketplace</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList">BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfo">BigqueryAnalyticsHubListingSubscriptionCommercialInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudMarketplace`<sup>Required</sup> <a name="cloudMarketplace" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.property.cloudMarketplace"></a>

```typescript
public readonly cloudMarketplace: BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList;
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList">BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BigqueryAnalyticsHubListingSubscriptionCommercialInfo;
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfo">BigqueryAnalyticsHubListingSubscriptionCommercialInfo</a>

---


### BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference <a name="BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.Initializer"></a>

```typescript
import { bigqueryAnalyticsHubListingSubscription } from '@cdktn/provider-google'

new bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.property.datasetIdInput">datasetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.property.datasetId">datasetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReference">BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReference</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `datasetIdInput`<sup>Optional</sup> <a name="datasetIdInput" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.property.datasetIdInput"></a>

```typescript
public readonly datasetIdInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `datasetId`<sup>Required</sup> <a name="datasetId" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.property.datasetId"></a>

```typescript
public readonly datasetId: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReference;
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReference">BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReference</a>

---


### BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference <a name="BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.Initializer"></a>

```typescript
import { bigqueryAnalyticsHubListingSubscription } from '@cdktn/provider-google'

new bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.putDatasetReference">putDatasetReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.resetFriendlyName">resetFriendlyName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.resetReplicaLocations">resetReplicaLocations</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDatasetReference` <a name="putDatasetReference" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.putDatasetReference"></a>

```typescript
public putDatasetReference(value: BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReference): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.putDatasetReference.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReference">BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReference</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetFriendlyName` <a name="resetFriendlyName" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.resetFriendlyName"></a>

```typescript
public resetFriendlyName(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetReplicaLocations` <a name="resetReplicaLocations" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.resetReplicaLocations"></a>

```typescript
public resetReplicaLocations(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.property.datasetReference">datasetReference</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference">BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.property.datasetReferenceInput">datasetReferenceInput</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReference">BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.property.friendlyNameInput">friendlyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.property.replicaLocationsInput">replicaLocationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.property.friendlyName">friendlyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.property.replicaLocations">replicaLocations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDataset">BigqueryAnalyticsHubListingSubscriptionDestinationDataset</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `datasetReference`<sup>Required</sup> <a name="datasetReference" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.property.datasetReference"></a>

```typescript
public readonly datasetReference: BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference">BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference</a>

---

##### `datasetReferenceInput`<sup>Optional</sup> <a name="datasetReferenceInput" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.property.datasetReferenceInput"></a>

```typescript
public readonly datasetReferenceInput: BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReference;
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReference">BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `friendlyNameInput`<sup>Optional</sup> <a name="friendlyNameInput" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.property.friendlyNameInput"></a>

```typescript
public readonly friendlyNameInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `replicaLocationsInput`<sup>Optional</sup> <a name="replicaLocationsInput" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.property.replicaLocationsInput"></a>

```typescript
public readonly replicaLocationsInput: string[];
```

- *Type:* string[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `friendlyName`<sup>Required</sup> <a name="friendlyName" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.property.friendlyName"></a>

```typescript
public readonly friendlyName: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `replicaLocations`<sup>Required</sup> <a name="replicaLocations" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.property.replicaLocations"></a>

```typescript
public readonly replicaLocations: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BigqueryAnalyticsHubListingSubscriptionDestinationDataset;
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDataset">BigqueryAnalyticsHubListingSubscriptionDestinationDataset</a>

---


### BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference <a name="BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.Initializer"></a>

```typescript
import { bigqueryAnalyticsHubListingSubscription } from '@cdktn/provider-google'

new bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.putPubsubSubscription">putPubsubSubscription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPubsubSubscription` <a name="putPubsubSubscription" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.putPubsubSubscription"></a>

```typescript
public putPubsubSubscription(value: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.putPubsubSubscription.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.property.pubsubSubscription">pubsubSubscription</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.property.pubsubSubscriptionInput">pubsubSubscriptionInput</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscription">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscription</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pubsubSubscription`<sup>Required</sup> <a name="pubsubSubscription" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.property.pubsubSubscription"></a>

```typescript
public readonly pubsubSubscription: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference</a>

---

##### `pubsubSubscriptionInput`<sup>Optional</sup> <a name="pubsubSubscriptionInput" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.property.pubsubSubscriptionInput"></a>

```typescript
public readonly pubsubSubscriptionInput: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription;
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscription;
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscription">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscription</a>

---


### BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference <a name="BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.Initializer"></a>

```typescript
import { bigqueryAnalyticsHubListingSubscription } from '@cdktn/provider-google'

new bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.resetDropUnknownFields">resetDropUnknownFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.resetServiceAccountEmail">resetServiceAccountEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.resetTable">resetTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.resetUseTableSchema">resetUseTableSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.resetUseTopicSchema">resetUseTopicSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.resetWriteMetadata">resetWriteMetadata</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDropUnknownFields` <a name="resetDropUnknownFields" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.resetDropUnknownFields"></a>

```typescript
public resetDropUnknownFields(): void
```

##### `resetServiceAccountEmail` <a name="resetServiceAccountEmail" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.resetServiceAccountEmail"></a>

```typescript
public resetServiceAccountEmail(): void
```

##### `resetTable` <a name="resetTable" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.resetTable"></a>

```typescript
public resetTable(): void
```

##### `resetUseTableSchema` <a name="resetUseTableSchema" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.resetUseTableSchema"></a>

```typescript
public resetUseTableSchema(): void
```

##### `resetUseTopicSchema` <a name="resetUseTopicSchema" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.resetUseTopicSchema"></a>

```typescript
public resetUseTopicSchema(): void
```

##### `resetWriteMetadata` <a name="resetWriteMetadata" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.resetWriteMetadata"></a>

```typescript
public resetWriteMetadata(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.property.dropUnknownFieldsInput">dropUnknownFieldsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.property.serviceAccountEmailInput">serviceAccountEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.property.tableInput">tableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.property.useTableSchemaInput">useTableSchemaInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.property.useTopicSchemaInput">useTopicSchemaInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.property.writeMetadataInput">writeMetadataInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.property.dropUnknownFields">dropUnknownFields</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.property.table">table</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.property.useTableSchema">useTableSchema</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.property.useTopicSchema">useTopicSchema</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.property.writeMetadata">writeMetadata</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dropUnknownFieldsInput`<sup>Optional</sup> <a name="dropUnknownFieldsInput" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.property.dropUnknownFieldsInput"></a>

```typescript
public readonly dropUnknownFieldsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `serviceAccountEmailInput`<sup>Optional</sup> <a name="serviceAccountEmailInput" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.property.serviceAccountEmailInput"></a>

```typescript
public readonly serviceAccountEmailInput: string;
```

- *Type:* string

---

##### `tableInput`<sup>Optional</sup> <a name="tableInput" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.property.tableInput"></a>

```typescript
public readonly tableInput: string;
```

- *Type:* string

---

##### `useTableSchemaInput`<sup>Optional</sup> <a name="useTableSchemaInput" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.property.useTableSchemaInput"></a>

```typescript
public readonly useTableSchemaInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `useTopicSchemaInput`<sup>Optional</sup> <a name="useTopicSchemaInput" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.property.useTopicSchemaInput"></a>

```typescript
public readonly useTopicSchemaInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `writeMetadataInput`<sup>Optional</sup> <a name="writeMetadataInput" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.property.writeMetadataInput"></a>

```typescript
public readonly writeMetadataInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `dropUnknownFields`<sup>Required</sup> <a name="dropUnknownFields" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.property.dropUnknownFields"></a>

```typescript
public readonly dropUnknownFields: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `serviceAccountEmail`<sup>Required</sup> <a name="serviceAccountEmail" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.property.serviceAccountEmail"></a>

```typescript
public readonly serviceAccountEmail: string;
```

- *Type:* string

---

##### `table`<sup>Required</sup> <a name="table" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.property.table"></a>

```typescript
public readonly table: string;
```

- *Type:* string

---

##### `useTableSchema`<sup>Required</sup> <a name="useTableSchema" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.property.useTableSchema"></a>

```typescript
public readonly useTableSchema: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `useTopicSchema`<sup>Required</sup> <a name="useTopicSchema" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.property.useTopicSchema"></a>

```typescript
public readonly useTopicSchema: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `writeMetadata`<sup>Required</sup> <a name="writeMetadata" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.property.writeMetadata"></a>

```typescript
public readonly writeMetadata: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig;
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig</a>

---


### BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference <a name="BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.Initializer"></a>

```typescript
import { bigqueryAnalyticsHubListingSubscription } from '@cdktn/provider-google'

new bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.resetUseTopicSchema">resetUseTopicSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.resetWriteMetadata">resetWriteMetadata</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUseTopicSchema` <a name="resetUseTopicSchema" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.resetUseTopicSchema"></a>

```typescript
public resetUseTopicSchema(): void
```

##### `resetWriteMetadata` <a name="resetWriteMetadata" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.resetWriteMetadata"></a>

```typescript
public resetWriteMetadata(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.useTopicSchemaInput">useTopicSchemaInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.writeMetadataInput">writeMetadataInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.useTopicSchema">useTopicSchema</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.writeMetadata">writeMetadata</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfig">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `useTopicSchemaInput`<sup>Optional</sup> <a name="useTopicSchemaInput" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.useTopicSchemaInput"></a>

```typescript
public readonly useTopicSchemaInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `writeMetadataInput`<sup>Optional</sup> <a name="writeMetadataInput" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.writeMetadataInput"></a>

```typescript
public readonly writeMetadataInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `useTopicSchema`<sup>Required</sup> <a name="useTopicSchema" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.useTopicSchema"></a>

```typescript
public readonly useTopicSchema: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `writeMetadata`<sup>Required</sup> <a name="writeMetadata" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.writeMetadata"></a>

```typescript
public readonly writeMetadata: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfig;
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfig">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfig</a>

---


### BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference <a name="BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.Initializer"></a>

```typescript
import { bigqueryAnalyticsHubListingSubscription } from '@cdktn/provider-google'

new bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.putAvroConfig">putAvroConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.resetAvroConfig">resetAvroConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.resetBucket">resetBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.resetFilenameDatetimeFormat">resetFilenameDatetimeFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.resetFilenamePrefix">resetFilenamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.resetFilenameSuffix">resetFilenameSuffix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.resetMaxBytes">resetMaxBytes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.resetMaxDuration">resetMaxDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.resetMaxMessages">resetMaxMessages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.resetServiceAccountEmail">resetServiceAccountEmail</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAvroConfig` <a name="putAvroConfig" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.putAvroConfig"></a>

```typescript
public putAvroConfig(value: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.putAvroConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfig">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfig</a>

---

##### `resetAvroConfig` <a name="resetAvroConfig" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.resetAvroConfig"></a>

```typescript
public resetAvroConfig(): void
```

##### `resetBucket` <a name="resetBucket" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.resetBucket"></a>

```typescript
public resetBucket(): void
```

##### `resetFilenameDatetimeFormat` <a name="resetFilenameDatetimeFormat" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.resetFilenameDatetimeFormat"></a>

```typescript
public resetFilenameDatetimeFormat(): void
```

##### `resetFilenamePrefix` <a name="resetFilenamePrefix" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.resetFilenamePrefix"></a>

```typescript
public resetFilenamePrefix(): void
```

##### `resetFilenameSuffix` <a name="resetFilenameSuffix" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.resetFilenameSuffix"></a>

```typescript
public resetFilenameSuffix(): void
```

##### `resetMaxBytes` <a name="resetMaxBytes" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.resetMaxBytes"></a>

```typescript
public resetMaxBytes(): void
```

##### `resetMaxDuration` <a name="resetMaxDuration" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.resetMaxDuration"></a>

```typescript
public resetMaxDuration(): void
```

##### `resetMaxMessages` <a name="resetMaxMessages" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.resetMaxMessages"></a>

```typescript
public resetMaxMessages(): void
```

##### `resetServiceAccountEmail` <a name="resetServiceAccountEmail" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.resetServiceAccountEmail"></a>

```typescript
public resetServiceAccountEmail(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.avroConfig">avroConfig</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.avroConfigInput">avroConfigInput</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfig">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.filenameDatetimeFormatInput">filenameDatetimeFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.filenamePrefixInput">filenamePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.filenameSuffixInput">filenameSuffixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.maxBytesInput">maxBytesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.maxDurationInput">maxDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.maxMessagesInput">maxMessagesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.serviceAccountEmailInput">serviceAccountEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.filenameDatetimeFormat">filenameDatetimeFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.filenamePrefix">filenamePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.filenameSuffix">filenameSuffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.maxBytes">maxBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.maxDuration">maxDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.maxMessages">maxMessages</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `avroConfig`<sup>Required</sup> <a name="avroConfig" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.avroConfig"></a>

```typescript
public readonly avroConfig: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference</a>

---

##### `avroConfigInput`<sup>Optional</sup> <a name="avroConfigInput" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.avroConfigInput"></a>

```typescript
public readonly avroConfigInput: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfig;
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfig">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfig</a>

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `filenameDatetimeFormatInput`<sup>Optional</sup> <a name="filenameDatetimeFormatInput" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.filenameDatetimeFormatInput"></a>

```typescript
public readonly filenameDatetimeFormatInput: string;
```

- *Type:* string

---

##### `filenamePrefixInput`<sup>Optional</sup> <a name="filenamePrefixInput" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.filenamePrefixInput"></a>

```typescript
public readonly filenamePrefixInput: string;
```

- *Type:* string

---

##### `filenameSuffixInput`<sup>Optional</sup> <a name="filenameSuffixInput" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.filenameSuffixInput"></a>

```typescript
public readonly filenameSuffixInput: string;
```

- *Type:* string

---

##### `maxBytesInput`<sup>Optional</sup> <a name="maxBytesInput" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.maxBytesInput"></a>

```typescript
public readonly maxBytesInput: string;
```

- *Type:* string

---

##### `maxDurationInput`<sup>Optional</sup> <a name="maxDurationInput" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.maxDurationInput"></a>

```typescript
public readonly maxDurationInput: string;
```

- *Type:* string

---

##### `maxMessagesInput`<sup>Optional</sup> <a name="maxMessagesInput" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.maxMessagesInput"></a>

```typescript
public readonly maxMessagesInput: string;
```

- *Type:* string

---

##### `serviceAccountEmailInput`<sup>Optional</sup> <a name="serviceAccountEmailInput" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.serviceAccountEmailInput"></a>

```typescript
public readonly serviceAccountEmailInput: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `filenameDatetimeFormat`<sup>Required</sup> <a name="filenameDatetimeFormat" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.filenameDatetimeFormat"></a>

```typescript
public readonly filenameDatetimeFormat: string;
```

- *Type:* string

---

##### `filenamePrefix`<sup>Required</sup> <a name="filenamePrefix" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.filenamePrefix"></a>

```typescript
public readonly filenamePrefix: string;
```

- *Type:* string

---

##### `filenameSuffix`<sup>Required</sup> <a name="filenameSuffix" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.filenameSuffix"></a>

```typescript
public readonly filenameSuffix: string;
```

- *Type:* string

---

##### `maxBytes`<sup>Required</sup> <a name="maxBytes" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.maxBytes"></a>

```typescript
public readonly maxBytes: string;
```

- *Type:* string

---

##### `maxDuration`<sup>Required</sup> <a name="maxDuration" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.maxDuration"></a>

```typescript
public readonly maxDuration: string;
```

- *Type:* string

---

##### `maxMessages`<sup>Required</sup> <a name="maxMessages" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.maxMessages"></a>

```typescript
public readonly maxMessages: string;
```

- *Type:* string

---

##### `serviceAccountEmail`<sup>Required</sup> <a name="serviceAccountEmail" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.serviceAccountEmail"></a>

```typescript
public readonly serviceAccountEmail: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig;
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig</a>

---


### BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference <a name="BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.Initializer"></a>

```typescript
import { bigqueryAnalyticsHubListingSubscription } from '@cdktn/provider-google'

new bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.resetDeadLetterTopic">resetDeadLetterTopic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.resetMaxDeliveryAttempts">resetMaxDeliveryAttempts</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDeadLetterTopic` <a name="resetDeadLetterTopic" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.resetDeadLetterTopic"></a>

```typescript
public resetDeadLetterTopic(): void
```

##### `resetMaxDeliveryAttempts` <a name="resetMaxDeliveryAttempts" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.resetMaxDeliveryAttempts"></a>

```typescript
public resetMaxDeliveryAttempts(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.property.deadLetterTopicInput">deadLetterTopicInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.property.maxDeliveryAttemptsInput">maxDeliveryAttemptsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.property.deadLetterTopic">deadLetterTopic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.property.maxDeliveryAttempts">maxDeliveryAttempts</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicy">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deadLetterTopicInput`<sup>Optional</sup> <a name="deadLetterTopicInput" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.property.deadLetterTopicInput"></a>

```typescript
public readonly deadLetterTopicInput: string;
```

- *Type:* string

---

##### `maxDeliveryAttemptsInput`<sup>Optional</sup> <a name="maxDeliveryAttemptsInput" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.property.maxDeliveryAttemptsInput"></a>

```typescript
public readonly maxDeliveryAttemptsInput: number;
```

- *Type:* number

---

##### `deadLetterTopic`<sup>Required</sup> <a name="deadLetterTopic" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.property.deadLetterTopic"></a>

```typescript
public readonly deadLetterTopic: string;
```

- *Type:* string

---

##### `maxDeliveryAttempts`<sup>Required</sup> <a name="maxDeliveryAttempts" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.property.maxDeliveryAttempts"></a>

```typescript
public readonly maxDeliveryAttempts: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicy;
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicy">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicy</a>

---


### BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference <a name="BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.Initializer"></a>

```typescript
import { bigqueryAnalyticsHubListingSubscription } from '@cdktn/provider-google'

new bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.resetTtl">resetTtl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTtl` <a name="resetTtl" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.resetTtl"></a>

```typescript
public resetTtl(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.property.ttlInput">ttlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.property.ttl">ttl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicy">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.property.ttlInput"></a>

```typescript
public readonly ttlInput: string;
```

- *Type:* string

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.property.ttl"></a>

```typescript
public readonly ttl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicy;
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicy">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicy</a>

---


### BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference <a name="BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.Initializer"></a>

```typescript
import { bigqueryAnalyticsHubListingSubscription } from '@cdktn/provider-google'

new bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.putBigqueryConfig">putBigqueryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.putCloudStorageConfig">putCloudStorageConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.putDeadLetterPolicy">putDeadLetterPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.putExpirationPolicy">putExpirationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.putPushConfig">putPushConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.putRetryPolicy">putRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.resetAckDeadlineSeconds">resetAckDeadlineSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.resetBigqueryConfig">resetBigqueryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.resetCloudStorageConfig">resetCloudStorageConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.resetDeadLetterPolicy">resetDeadLetterPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.resetDetached">resetDetached</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.resetEnableExactlyOnceDelivery">resetEnableExactlyOnceDelivery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.resetEnableMessageOrdering">resetEnableMessageOrdering</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.resetExpirationPolicy">resetExpirationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.resetMessageRetentionDuration">resetMessageRetentionDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.resetPushConfig">resetPushConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.resetRetainAckedMessages">resetRetainAckedMessages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.resetRetryPolicy">resetRetryPolicy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBigqueryConfig` <a name="putBigqueryConfig" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.putBigqueryConfig"></a>

```typescript
public putBigqueryConfig(value: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.putBigqueryConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig</a>

---

##### `putCloudStorageConfig` <a name="putCloudStorageConfig" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.putCloudStorageConfig"></a>

```typescript
public putCloudStorageConfig(value: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.putCloudStorageConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig</a>

---

##### `putDeadLetterPolicy` <a name="putDeadLetterPolicy" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.putDeadLetterPolicy"></a>

```typescript
public putDeadLetterPolicy(value: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.putDeadLetterPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicy">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicy</a>

---

##### `putExpirationPolicy` <a name="putExpirationPolicy" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.putExpirationPolicy"></a>

```typescript
public putExpirationPolicy(value: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.putExpirationPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicy">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicy</a>

---

##### `putPushConfig` <a name="putPushConfig" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.putPushConfig"></a>

```typescript
public putPushConfig(value: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.putPushConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig</a>

---

##### `putRetryPolicy` <a name="putRetryPolicy" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.putRetryPolicy"></a>

```typescript
public putRetryPolicy(value: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.putRetryPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicy">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicy</a>

---

##### `resetAckDeadlineSeconds` <a name="resetAckDeadlineSeconds" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.resetAckDeadlineSeconds"></a>

```typescript
public resetAckDeadlineSeconds(): void
```

##### `resetBigqueryConfig` <a name="resetBigqueryConfig" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.resetBigqueryConfig"></a>

```typescript
public resetBigqueryConfig(): void
```

##### `resetCloudStorageConfig` <a name="resetCloudStorageConfig" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.resetCloudStorageConfig"></a>

```typescript
public resetCloudStorageConfig(): void
```

##### `resetDeadLetterPolicy` <a name="resetDeadLetterPolicy" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.resetDeadLetterPolicy"></a>

```typescript
public resetDeadLetterPolicy(): void
```

##### `resetDetached` <a name="resetDetached" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.resetDetached"></a>

```typescript
public resetDetached(): void
```

##### `resetEnableExactlyOnceDelivery` <a name="resetEnableExactlyOnceDelivery" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.resetEnableExactlyOnceDelivery"></a>

```typescript
public resetEnableExactlyOnceDelivery(): void
```

##### `resetEnableMessageOrdering` <a name="resetEnableMessageOrdering" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.resetEnableMessageOrdering"></a>

```typescript
public resetEnableMessageOrdering(): void
```

##### `resetExpirationPolicy` <a name="resetExpirationPolicy" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.resetExpirationPolicy"></a>

```typescript
public resetExpirationPolicy(): void
```

##### `resetFilter` <a name="resetFilter" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetMessageRetentionDuration` <a name="resetMessageRetentionDuration" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.resetMessageRetentionDuration"></a>

```typescript
public resetMessageRetentionDuration(): void
```

##### `resetPushConfig` <a name="resetPushConfig" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.resetPushConfig"></a>

```typescript
public resetPushConfig(): void
```

##### `resetRetainAckedMessages` <a name="resetRetainAckedMessages" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.resetRetainAckedMessages"></a>

```typescript
public resetRetainAckedMessages(): void
```

##### `resetRetryPolicy` <a name="resetRetryPolicy" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.resetRetryPolicy"></a>

```typescript
public resetRetryPolicy(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.bigqueryConfig">bigqueryConfig</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.cloudStorageConfig">cloudStorageConfig</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.deadLetterPolicy">deadLetterPolicy</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.expirationPolicy">expirationPolicy</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.pushConfig">pushConfig</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.retryPolicy">retryPolicy</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.ackDeadlineSecondsInput">ackDeadlineSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.bigqueryConfigInput">bigqueryConfigInput</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.cloudStorageConfigInput">cloudStorageConfigInput</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.deadLetterPolicyInput">deadLetterPolicyInput</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicy">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.detachedInput">detachedInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.enableExactlyOnceDeliveryInput">enableExactlyOnceDeliveryInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.enableMessageOrderingInput">enableMessageOrderingInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.expirationPolicyInput">expirationPolicyInput</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicy">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.filterInput">filterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.messageRetentionDurationInput">messageRetentionDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.pushConfigInput">pushConfigInput</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.retainAckedMessagesInput">retainAckedMessagesInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.retryPolicyInput">retryPolicyInput</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicy">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.ackDeadlineSeconds">ackDeadlineSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.detached">detached</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.enableExactlyOnceDelivery">enableExactlyOnceDelivery</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.enableMessageOrdering">enableMessageOrdering</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.filter">filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.messageRetentionDuration">messageRetentionDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.retainAckedMessages">retainAckedMessages</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bigqueryConfig`<sup>Required</sup> <a name="bigqueryConfig" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.bigqueryConfig"></a>

```typescript
public readonly bigqueryConfig: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference</a>

---

##### `cloudStorageConfig`<sup>Required</sup> <a name="cloudStorageConfig" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.cloudStorageConfig"></a>

```typescript
public readonly cloudStorageConfig: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference</a>

---

##### `deadLetterPolicy`<sup>Required</sup> <a name="deadLetterPolicy" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.deadLetterPolicy"></a>

```typescript
public readonly deadLetterPolicy: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference</a>

---

##### `expirationPolicy`<sup>Required</sup> <a name="expirationPolicy" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.expirationPolicy"></a>

```typescript
public readonly expirationPolicy: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference</a>

---

##### `pushConfig`<sup>Required</sup> <a name="pushConfig" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.pushConfig"></a>

```typescript
public readonly pushConfig: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference</a>

---

##### `retryPolicy`<sup>Required</sup> <a name="retryPolicy" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.retryPolicy"></a>

```typescript
public readonly retryPolicy: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference</a>

---

##### `ackDeadlineSecondsInput`<sup>Optional</sup> <a name="ackDeadlineSecondsInput" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.ackDeadlineSecondsInput"></a>

```typescript
public readonly ackDeadlineSecondsInput: number;
```

- *Type:* number

---

##### `bigqueryConfigInput`<sup>Optional</sup> <a name="bigqueryConfigInput" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.bigqueryConfigInput"></a>

```typescript
public readonly bigqueryConfigInput: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig;
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig</a>

---

##### `cloudStorageConfigInput`<sup>Optional</sup> <a name="cloudStorageConfigInput" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.cloudStorageConfigInput"></a>

```typescript
public readonly cloudStorageConfigInput: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig;
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig</a>

---

##### `deadLetterPolicyInput`<sup>Optional</sup> <a name="deadLetterPolicyInput" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.deadLetterPolicyInput"></a>

```typescript
public readonly deadLetterPolicyInput: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicy;
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicy">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicy</a>

---

##### `detachedInput`<sup>Optional</sup> <a name="detachedInput" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.detachedInput"></a>

```typescript
public readonly detachedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enableExactlyOnceDeliveryInput`<sup>Optional</sup> <a name="enableExactlyOnceDeliveryInput" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.enableExactlyOnceDeliveryInput"></a>

```typescript
public readonly enableExactlyOnceDeliveryInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enableMessageOrderingInput`<sup>Optional</sup> <a name="enableMessageOrderingInput" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.enableMessageOrderingInput"></a>

```typescript
public readonly enableMessageOrderingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `expirationPolicyInput`<sup>Optional</sup> <a name="expirationPolicyInput" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.expirationPolicyInput"></a>

```typescript
public readonly expirationPolicyInput: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicy;
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicy">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicy</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.filterInput"></a>

```typescript
public readonly filterInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `messageRetentionDurationInput`<sup>Optional</sup> <a name="messageRetentionDurationInput" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.messageRetentionDurationInput"></a>

```typescript
public readonly messageRetentionDurationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `pushConfigInput`<sup>Optional</sup> <a name="pushConfigInput" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.pushConfigInput"></a>

```typescript
public readonly pushConfigInput: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig;
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig</a>

---

##### `retainAckedMessagesInput`<sup>Optional</sup> <a name="retainAckedMessagesInput" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.retainAckedMessagesInput"></a>

```typescript
public readonly retainAckedMessagesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `retryPolicyInput`<sup>Optional</sup> <a name="retryPolicyInput" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.retryPolicyInput"></a>

```typescript
public readonly retryPolicyInput: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicy;
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicy">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicy</a>

---

##### `ackDeadlineSeconds`<sup>Required</sup> <a name="ackDeadlineSeconds" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.ackDeadlineSeconds"></a>

```typescript
public readonly ackDeadlineSeconds: number;
```

- *Type:* number

---

##### `detached`<sup>Required</sup> <a name="detached" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.detached"></a>

```typescript
public readonly detached: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enableExactlyOnceDelivery`<sup>Required</sup> <a name="enableExactlyOnceDelivery" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.enableExactlyOnceDelivery"></a>

```typescript
public readonly enableExactlyOnceDelivery: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enableMessageOrdering`<sup>Required</sup> <a name="enableMessageOrdering" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.enableMessageOrdering"></a>

```typescript
public readonly enableMessageOrdering: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `messageRetentionDuration`<sup>Required</sup> <a name="messageRetentionDuration" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.messageRetentionDuration"></a>

```typescript
public readonly messageRetentionDuration: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `retainAckedMessages`<sup>Required</sup> <a name="retainAckedMessages" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.retainAckedMessages"></a>

```typescript
public readonly retainAckedMessages: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription;
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription</a>

---


### BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference <a name="BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.Initializer"></a>

```typescript
import { bigqueryAnalyticsHubListingSubscription } from '@cdktn/provider-google'

new bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.resetWriteMetadata">resetWriteMetadata</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWriteMetadata` <a name="resetWriteMetadata" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.resetWriteMetadata"></a>

```typescript
public resetWriteMetadata(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.property.writeMetadataInput">writeMetadataInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.property.writeMetadata">writeMetadata</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapper">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapper</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `writeMetadataInput`<sup>Optional</sup> <a name="writeMetadataInput" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.property.writeMetadataInput"></a>

```typescript
public readonly writeMetadataInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `writeMetadata`<sup>Required</sup> <a name="writeMetadata" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.property.writeMetadata"></a>

```typescript
public readonly writeMetadata: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapper;
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapper">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapper</a>

---


### BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference <a name="BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.Initializer"></a>

```typescript
import { bigqueryAnalyticsHubListingSubscription } from '@cdktn/provider-google'

new bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.resetAudience">resetAudience</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.resetServiceAccountEmail">resetServiceAccountEmail</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAudience` <a name="resetAudience" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.resetAudience"></a>

```typescript
public resetAudience(): void
```

##### `resetServiceAccountEmail` <a name="resetServiceAccountEmail" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.resetServiceAccountEmail"></a>

```typescript
public resetServiceAccountEmail(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.property.audienceInput">audienceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.property.serviceAccountEmailInput">serviceAccountEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.property.audience">audience</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcToken">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcToken</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `audienceInput`<sup>Optional</sup> <a name="audienceInput" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.property.audienceInput"></a>

```typescript
public readonly audienceInput: string;
```

- *Type:* string

---

##### `serviceAccountEmailInput`<sup>Optional</sup> <a name="serviceAccountEmailInput" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.property.serviceAccountEmailInput"></a>

```typescript
public readonly serviceAccountEmailInput: string;
```

- *Type:* string

---

##### `audience`<sup>Required</sup> <a name="audience" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.property.audience"></a>

```typescript
public readonly audience: string;
```

- *Type:* string

---

##### `serviceAccountEmail`<sup>Required</sup> <a name="serviceAccountEmail" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.property.serviceAccountEmail"></a>

```typescript
public readonly serviceAccountEmail: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcToken;
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcToken">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcToken</a>

---


### BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference <a name="BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.Initializer"></a>

```typescript
import { bigqueryAnalyticsHubListingSubscription } from '@cdktn/provider-google'

new bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.putNoWrapper">putNoWrapper</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.putOidcToken">putOidcToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.resetAttributes">resetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.resetNoWrapper">resetNoWrapper</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.resetOidcToken">resetOidcToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.resetPushEndpoint">resetPushEndpoint</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNoWrapper` <a name="putNoWrapper" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.putNoWrapper"></a>

```typescript
public putNoWrapper(value: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapper): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.putNoWrapper.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapper">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapper</a>

---

##### `putOidcToken` <a name="putOidcToken" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.putOidcToken"></a>

```typescript
public putOidcToken(value: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcToken): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.putOidcToken.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcToken">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcToken</a>

---

##### `resetAttributes` <a name="resetAttributes" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.resetAttributes"></a>

```typescript
public resetAttributes(): void
```

##### `resetNoWrapper` <a name="resetNoWrapper" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.resetNoWrapper"></a>

```typescript
public resetNoWrapper(): void
```

##### `resetOidcToken` <a name="resetOidcToken" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.resetOidcToken"></a>

```typescript
public resetOidcToken(): void
```

##### `resetPushEndpoint` <a name="resetPushEndpoint" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.resetPushEndpoint"></a>

```typescript
public resetPushEndpoint(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.property.noWrapper">noWrapper</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.property.oidcToken">oidcToken</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.property.attributesInput">attributesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.property.noWrapperInput">noWrapperInput</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapper">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapper</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.property.oidcTokenInput">oidcTokenInput</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcToken">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.property.pushEndpointInput">pushEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.property.attributes">attributes</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.property.pushEndpoint">pushEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `noWrapper`<sup>Required</sup> <a name="noWrapper" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.property.noWrapper"></a>

```typescript
public readonly noWrapper: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference</a>

---

##### `oidcToken`<sup>Required</sup> <a name="oidcToken" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.property.oidcToken"></a>

```typescript
public readonly oidcToken: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference</a>

---

##### `attributesInput`<sup>Optional</sup> <a name="attributesInput" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.property.attributesInput"></a>

```typescript
public readonly attributesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `noWrapperInput`<sup>Optional</sup> <a name="noWrapperInput" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.property.noWrapperInput"></a>

```typescript
public readonly noWrapperInput: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapper;
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapper">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapper</a>

---

##### `oidcTokenInput`<sup>Optional</sup> <a name="oidcTokenInput" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.property.oidcTokenInput"></a>

```typescript
public readonly oidcTokenInput: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcToken;
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcToken">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcToken</a>

---

##### `pushEndpointInput`<sup>Optional</sup> <a name="pushEndpointInput" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.property.pushEndpointInput"></a>

```typescript
public readonly pushEndpointInput: string;
```

- *Type:* string

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.property.attributes"></a>

```typescript
public readonly attributes: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `pushEndpoint`<sup>Required</sup> <a name="pushEndpoint" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.property.pushEndpoint"></a>

```typescript
public readonly pushEndpoint: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig;
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig</a>

---


### BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference <a name="BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.Initializer"></a>

```typescript
import { bigqueryAnalyticsHubListingSubscription } from '@cdktn/provider-google'

new bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.resetMaximumBackoff">resetMaximumBackoff</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.resetMinimumBackoff">resetMinimumBackoff</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaximumBackoff` <a name="resetMaximumBackoff" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.resetMaximumBackoff"></a>

```typescript
public resetMaximumBackoff(): void
```

##### `resetMinimumBackoff` <a name="resetMinimumBackoff" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.resetMinimumBackoff"></a>

```typescript
public resetMinimumBackoff(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.property.maximumBackoffInput">maximumBackoffInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.property.minimumBackoffInput">minimumBackoffInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.property.maximumBackoff">maximumBackoff</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.property.minimumBackoff">minimumBackoff</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicy">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maximumBackoffInput`<sup>Optional</sup> <a name="maximumBackoffInput" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.property.maximumBackoffInput"></a>

```typescript
public readonly maximumBackoffInput: string;
```

- *Type:* string

---

##### `minimumBackoffInput`<sup>Optional</sup> <a name="minimumBackoffInput" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.property.minimumBackoffInput"></a>

```typescript
public readonly minimumBackoffInput: string;
```

- *Type:* string

---

##### `maximumBackoff`<sup>Required</sup> <a name="maximumBackoff" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.property.maximumBackoff"></a>

```typescript
public readonly maximumBackoff: string;
```

- *Type:* string

---

##### `minimumBackoff`<sup>Required</sup> <a name="minimumBackoff" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.property.minimumBackoff"></a>

```typescript
public readonly minimumBackoff: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicy;
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicy">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicy</a>

---


### BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList <a name="BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList.Initializer"></a>

```typescript
import { bigqueryAnalyticsHubListingSubscription } from '@cdktn/provider-google'

new bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList.get"></a>

```typescript
public get(index: number): BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference <a name="BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.Initializer"></a>

```typescript
import { bigqueryAnalyticsHubListingSubscription } from '@cdktn/provider-google'

new bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.property.linkedDataset">linkedDataset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.property.linkedPubsubSubscription">linkedPubsubSubscription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.property.listing">listing</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.property.resourceName">resourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMap">BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMap</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `linkedDataset`<sup>Required</sup> <a name="linkedDataset" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.property.linkedDataset"></a>

```typescript
public readonly linkedDataset: string;
```

- *Type:* string

---

##### `linkedPubsubSubscription`<sup>Required</sup> <a name="linkedPubsubSubscription" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.property.linkedPubsubSubscription"></a>

```typescript
public readonly linkedPubsubSubscription: string;
```

- *Type:* string

---

##### `listing`<sup>Required</sup> <a name="listing" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.property.listing"></a>

```typescript
public readonly listing: string;
```

- *Type:* string

---

##### `resourceName`<sup>Required</sup> <a name="resourceName" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.property.resourceName"></a>

```typescript
public readonly resourceName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMap;
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMap">BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMap</a>

---


### BigqueryAnalyticsHubListingSubscriptionLinkedResourcesList <a name="BigqueryAnalyticsHubListingSubscriptionLinkedResourcesList" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesList.Initializer"></a>

```typescript
import { bigqueryAnalyticsHubListingSubscription } from '@cdktn/provider-google'

new bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesList.get"></a>

```typescript
public get(index: number): BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference <a name="BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.Initializer"></a>

```typescript
import { bigqueryAnalyticsHubListingSubscription } from '@cdktn/provider-google'

new bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.property.linkedDataset">linkedDataset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.property.linkedPubsubSubscription">linkedPubsubSubscription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.property.listing">listing</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResources">BigqueryAnalyticsHubListingSubscriptionLinkedResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `linkedDataset`<sup>Required</sup> <a name="linkedDataset" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.property.linkedDataset"></a>

```typescript
public readonly linkedDataset: string;
```

- *Type:* string

---

##### `linkedPubsubSubscription`<sup>Required</sup> <a name="linkedPubsubSubscription" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.property.linkedPubsubSubscription"></a>

```typescript
public readonly linkedPubsubSubscription: string;
```

- *Type:* string

---

##### `listing`<sup>Required</sup> <a name="listing" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.property.listing"></a>

```typescript
public readonly listing: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BigqueryAnalyticsHubListingSubscriptionLinkedResources;
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResources">BigqueryAnalyticsHubListingSubscriptionLinkedResources</a>

---


### BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference <a name="BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.Initializer"></a>

```typescript
import { bigqueryAnalyticsHubListingSubscription } from '@cdktn/provider-google'

new bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeouts">BigqueryAnalyticsHubListingSubscriptionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BigqueryAnalyticsHubListingSubscriptionTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeouts">BigqueryAnalyticsHubListingSubscriptionTimeouts</a>

---



