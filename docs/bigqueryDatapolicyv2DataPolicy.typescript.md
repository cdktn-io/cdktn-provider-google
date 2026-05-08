# `bigqueryDatapolicyv2DataPolicy` Submodule <a name="`bigqueryDatapolicyv2DataPolicy` Submodule" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BigqueryDatapolicyv2DataPolicy <a name="BigqueryDatapolicyv2DataPolicy" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/bigquery_datapolicyv2_data_policy google_bigquery_datapolicyv2_data_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.Initializer"></a>

```typescript
import { bigqueryDatapolicyv2DataPolicy } from '@cdktn/provider-google'

new bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy(scope: Construct, id: string, config: BigqueryDatapolicyv2DataPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyConfig">BigqueryDatapolicyv2DataPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyConfig">BigqueryDatapolicyv2DataPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.putDataMaskingPolicy">putDataMaskingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.resetDataMaskingPolicy">resetDataMaskingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.resetEtag">resetEtag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.resetGrantees">resetGrantees</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDataMaskingPolicy` <a name="putDataMaskingPolicy" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.putDataMaskingPolicy"></a>

```typescript
public putDataMaskingPolicy(value: BigqueryDatapolicyv2DataPolicyDataMaskingPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.putDataMaskingPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicy">BigqueryDatapolicyv2DataPolicyDataMaskingPolicy</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.putTimeouts"></a>

```typescript
public putTimeouts(value: BigqueryDatapolicyv2DataPolicyTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeouts">BigqueryDatapolicyv2DataPolicyTimeouts</a>

---

##### `resetDataMaskingPolicy` <a name="resetDataMaskingPolicy" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.resetDataMaskingPolicy"></a>

```typescript
public resetDataMaskingPolicy(): void
```

##### `resetEtag` <a name="resetEtag" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.resetEtag"></a>

```typescript
public resetEtag(): void
```

##### `resetGrantees` <a name="resetGrantees" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.resetGrantees"></a>

```typescript
public resetGrantees(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a BigqueryDatapolicyv2DataPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.isConstruct"></a>

```typescript
import { bigqueryDatapolicyv2DataPolicy } from '@cdktn/provider-google'

bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.isTerraformElement"></a>

```typescript
import { bigqueryDatapolicyv2DataPolicy } from '@cdktn/provider-google'

bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.isTerraformResource"></a>

```typescript
import { bigqueryDatapolicyv2DataPolicy } from '@cdktn/provider-google'

bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.generateConfigForImport"></a>

```typescript
import { bigqueryDatapolicyv2DataPolicy } from '@cdktn/provider-google'

bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a BigqueryDatapolicyv2DataPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BigqueryDatapolicyv2DataPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BigqueryDatapolicyv2DataPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/bigquery_datapolicyv2_data_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the BigqueryDatapolicyv2DataPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.dataMaskingPolicy">dataMaskingPolicy</a></code> | <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference">BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.policyTag">policyTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference">BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.dataMaskingPolicyInput">dataMaskingPolicyInput</a></code> | <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicy">BigqueryDatapolicyv2DataPolicyDataMaskingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.dataPolicyIdInput">dataPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.dataPolicyTypeInput">dataPolicyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.etagInput">etagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.granteesInput">granteesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeouts">BigqueryDatapolicyv2DataPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.dataPolicyId">dataPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.dataPolicyType">dataPolicyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.grantees">grantees</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `dataMaskingPolicy`<sup>Required</sup> <a name="dataMaskingPolicy" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.dataMaskingPolicy"></a>

```typescript
public readonly dataMaskingPolicy: BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference">BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `policyTag`<sup>Required</sup> <a name="policyTag" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.policyTag"></a>

```typescript
public readonly policyTag: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.timeouts"></a>

```typescript
public readonly timeouts: BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference">BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `dataMaskingPolicyInput`<sup>Optional</sup> <a name="dataMaskingPolicyInput" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.dataMaskingPolicyInput"></a>

```typescript
public readonly dataMaskingPolicyInput: BigqueryDatapolicyv2DataPolicyDataMaskingPolicy;
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicy">BigqueryDatapolicyv2DataPolicyDataMaskingPolicy</a>

---

##### `dataPolicyIdInput`<sup>Optional</sup> <a name="dataPolicyIdInput" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.dataPolicyIdInput"></a>

```typescript
public readonly dataPolicyIdInput: string;
```

- *Type:* string

---

##### `dataPolicyTypeInput`<sup>Optional</sup> <a name="dataPolicyTypeInput" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.dataPolicyTypeInput"></a>

```typescript
public readonly dataPolicyTypeInput: string;
```

- *Type:* string

---

##### `etagInput`<sup>Optional</sup> <a name="etagInput" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.etagInput"></a>

```typescript
public readonly etagInput: string;
```

- *Type:* string

---

##### `granteesInput`<sup>Optional</sup> <a name="granteesInput" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.granteesInput"></a>

```typescript
public readonly granteesInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | BigqueryDatapolicyv2DataPolicyTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeouts">BigqueryDatapolicyv2DataPolicyTimeouts</a>

---

##### `dataPolicyId`<sup>Required</sup> <a name="dataPolicyId" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.dataPolicyId"></a>

```typescript
public readonly dataPolicyId: string;
```

- *Type:* string

---

##### `dataPolicyType`<sup>Required</sup> <a name="dataPolicyType" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.dataPolicyType"></a>

```typescript
public readonly dataPolicyType: string;
```

- *Type:* string

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `grantees`<sup>Required</sup> <a name="grantees" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.grantees"></a>

```typescript
public readonly grantees: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BigqueryDatapolicyv2DataPolicyConfig <a name="BigqueryDatapolicyv2DataPolicyConfig" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyConfig.Initializer"></a>

```typescript
import { bigqueryDatapolicyv2DataPolicy } from '@cdktn/provider-google'

const bigqueryDatapolicyv2DataPolicyConfig: bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyConfig.property.dataPolicyId">dataPolicyId</a></code> | <code>string</code> | User-assigned (human readable) ID of the data policy that needs to be unique within a project. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyConfig.property.dataPolicyType">dataPolicyType</a></code> | <code>string</code> | Type of data policy. Possible values: DATA_MASKING_POLICY RAW_DATA_ACCESS_POLICY COLUMN_LEVEL_SECURITY_POLICY. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyConfig.property.location">location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyConfig.property.dataMaskingPolicy">dataMaskingPolicy</a></code> | <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicy">BigqueryDatapolicyv2DataPolicyDataMaskingPolicy</a></code> | data_masking_policy block. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyConfig.property.etag">etag</a></code> | <code>string</code> | The etag for this Data Policy. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyConfig.property.grantees">grantees</a></code> | <code>string[]</code> | The list of IAM principals that have Fine Grained Access to the underlying data goverened by this data policy. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/bigquery_datapolicyv2_data_policy#id BigqueryDatapolicyv2DataPolicy#id}. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/bigquery_datapolicyv2_data_policy#project BigqueryDatapolicyv2DataPolicy#project}. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeouts">BigqueryDatapolicyv2DataPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `dataPolicyId`<sup>Required</sup> <a name="dataPolicyId" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyConfig.property.dataPolicyId"></a>

```typescript
public readonly dataPolicyId: string;
```

- *Type:* string

User-assigned (human readable) ID of the data policy that needs to be unique within a project.

Used as {data_policy_id} in part of the resource
name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/bigquery_datapolicyv2_data_policy#data_policy_id BigqueryDatapolicyv2DataPolicy#data_policy_id}

---

##### `dataPolicyType`<sup>Required</sup> <a name="dataPolicyType" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyConfig.property.dataPolicyType"></a>

```typescript
public readonly dataPolicyType: string;
```

- *Type:* string

Type of data policy. Possible values: DATA_MASKING_POLICY RAW_DATA_ACCESS_POLICY COLUMN_LEVEL_SECURITY_POLICY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/bigquery_datapolicyv2_data_policy#data_policy_type BigqueryDatapolicyv2DataPolicy#data_policy_type}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/bigquery_datapolicyv2_data_policy#location BigqueryDatapolicyv2DataPolicy#location}

---

##### `dataMaskingPolicy`<sup>Optional</sup> <a name="dataMaskingPolicy" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyConfig.property.dataMaskingPolicy"></a>

```typescript
public readonly dataMaskingPolicy: BigqueryDatapolicyv2DataPolicyDataMaskingPolicy;
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicy">BigqueryDatapolicyv2DataPolicyDataMaskingPolicy</a>

data_masking_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/bigquery_datapolicyv2_data_policy#data_masking_policy BigqueryDatapolicyv2DataPolicy#data_masking_policy}

---

##### `etag`<sup>Optional</sup> <a name="etag" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyConfig.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

The etag for this Data Policy.

This field is used for UpdateDataPolicy calls. If Data Policy exists, this
field is required and must match the server's etag. It will also be
populated in the response of GetDataPolicy, CreateDataPolicy, and
UpdateDataPolicy calls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/bigquery_datapolicyv2_data_policy#etag BigqueryDatapolicyv2DataPolicy#etag}

---

##### `grantees`<sup>Optional</sup> <a name="grantees" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyConfig.property.grantees"></a>

```typescript
public readonly grantees: string[];
```

- *Type:* string[]

The list of IAM principals that have Fine Grained Access to the underlying data goverened by this data policy.

Uses the [IAM V2 principal
syntax](https://cloud.google.com/iam/docs/principal-identifiers#v2) Only
supports principal types users, groups, serviceaccounts, cloudidentity.
This field is supported in V2 Data Policy only. In case of V1 data policies
(i.e. verion = 1 and policy_tag is set), this field is not populated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/bigquery_datapolicyv2_data_policy#grantees BigqueryDatapolicyv2DataPolicy#grantees}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/bigquery_datapolicyv2_data_policy#id BigqueryDatapolicyv2DataPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/bigquery_datapolicyv2_data_policy#project BigqueryDatapolicyv2DataPolicy#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyConfig.property.timeouts"></a>

```typescript
public readonly timeouts: BigqueryDatapolicyv2DataPolicyTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeouts">BigqueryDatapolicyv2DataPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/bigquery_datapolicyv2_data_policy#timeouts BigqueryDatapolicyv2DataPolicy#timeouts}

---

### BigqueryDatapolicyv2DataPolicyDataMaskingPolicy <a name="BigqueryDatapolicyv2DataPolicyDataMaskingPolicy" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicy.Initializer"></a>

```typescript
import { bigqueryDatapolicyv2DataPolicy } from '@cdktn/provider-google'

const bigqueryDatapolicyv2DataPolicyDataMaskingPolicy: bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicy.property.predefinedExpression">predefinedExpression</a></code> | <code>string</code> | A predefined masking expression. Possible values: SHA256 ALWAYS_NULL DEFAULT_MASKING_VALUE LAST_FOUR_CHARACTERS FIRST_FOUR_CHARACTERS EMAIL_MASK DATE_YEAR_MASK RANDOM_HASH. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicy.property.routine">routine</a></code> | <code>string</code> | The name of the BigQuery routine that contains the custom masking routine, in the format of 'projects/{project_number}/datasets/{dataset_id}/routines/{routine_id}'. |

---

##### `predefinedExpression`<sup>Optional</sup> <a name="predefinedExpression" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicy.property.predefinedExpression"></a>

```typescript
public readonly predefinedExpression: string;
```

- *Type:* string

A predefined masking expression. Possible values: SHA256 ALWAYS_NULL DEFAULT_MASKING_VALUE LAST_FOUR_CHARACTERS FIRST_FOUR_CHARACTERS EMAIL_MASK DATE_YEAR_MASK RANDOM_HASH.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/bigquery_datapolicyv2_data_policy#predefined_expression BigqueryDatapolicyv2DataPolicy#predefined_expression}

---

##### `routine`<sup>Optional</sup> <a name="routine" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicy.property.routine"></a>

```typescript
public readonly routine: string;
```

- *Type:* string

The name of the BigQuery routine that contains the custom masking routine, in the format of 'projects/{project_number}/datasets/{dataset_id}/routines/{routine_id}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/bigquery_datapolicyv2_data_policy#routine BigqueryDatapolicyv2DataPolicy#routine}

---

### BigqueryDatapolicyv2DataPolicyTimeouts <a name="BigqueryDatapolicyv2DataPolicyTimeouts" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeouts.Initializer"></a>

```typescript
import { bigqueryDatapolicyv2DataPolicy } from '@cdktn/provider-google'

const bigqueryDatapolicyv2DataPolicyTimeouts: bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/bigquery_datapolicyv2_data_policy#create BigqueryDatapolicyv2DataPolicy#create}. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/bigquery_datapolicyv2_data_policy#delete BigqueryDatapolicyv2DataPolicy#delete}. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/bigquery_datapolicyv2_data_policy#update BigqueryDatapolicyv2DataPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/bigquery_datapolicyv2_data_policy#create BigqueryDatapolicyv2DataPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/bigquery_datapolicyv2_data_policy#delete BigqueryDatapolicyv2DataPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/bigquery_datapolicyv2_data_policy#update BigqueryDatapolicyv2DataPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference <a name="BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.Initializer"></a>

```typescript
import { bigqueryDatapolicyv2DataPolicy } from '@cdktn/provider-google'

new bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.resetPredefinedExpression">resetPredefinedExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.resetRoutine">resetRoutine</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPredefinedExpression` <a name="resetPredefinedExpression" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.resetPredefinedExpression"></a>

```typescript
public resetPredefinedExpression(): void
```

##### `resetRoutine` <a name="resetRoutine" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.resetRoutine"></a>

```typescript
public resetRoutine(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.property.predefinedExpressionInput">predefinedExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.property.routineInput">routineInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.property.predefinedExpression">predefinedExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.property.routine">routine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicy">BigqueryDatapolicyv2DataPolicyDataMaskingPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `predefinedExpressionInput`<sup>Optional</sup> <a name="predefinedExpressionInput" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.property.predefinedExpressionInput"></a>

```typescript
public readonly predefinedExpressionInput: string;
```

- *Type:* string

---

##### `routineInput`<sup>Optional</sup> <a name="routineInput" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.property.routineInput"></a>

```typescript
public readonly routineInput: string;
```

- *Type:* string

---

##### `predefinedExpression`<sup>Required</sup> <a name="predefinedExpression" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.property.predefinedExpression"></a>

```typescript
public readonly predefinedExpression: string;
```

- *Type:* string

---

##### `routine`<sup>Required</sup> <a name="routine" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.property.routine"></a>

```typescript
public readonly routine: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BigqueryDatapolicyv2DataPolicyDataMaskingPolicy;
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicy">BigqueryDatapolicyv2DataPolicyDataMaskingPolicy</a>

---


### BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference <a name="BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.Initializer"></a>

```typescript
import { bigqueryDatapolicyv2DataPolicy } from '@cdktn/provider-google'

new bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeouts">BigqueryDatapolicyv2DataPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BigqueryDatapolicyv2DataPolicyTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeouts">BigqueryDatapolicyv2DataPolicyTimeouts</a>

---



