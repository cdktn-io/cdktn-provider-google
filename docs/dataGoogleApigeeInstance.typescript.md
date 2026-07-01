# `dataGoogleApigeeInstance` Submodule <a name="`dataGoogleApigeeInstance` Submodule" id="@cdktn/provider-google.dataGoogleApigeeInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleApigeeInstance <a name="DataGoogleApigeeInstance" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/apigee_instance google_apigee_instance}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.Initializer"></a>

```typescript
import { dataGoogleApigeeInstance } from '@cdktn/provider-google'

new dataGoogleApigeeInstance.DataGoogleApigeeInstance(scope: Construct, id: string, config: DataGoogleApigeeInstanceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstanceConfig">DataGoogleApigeeInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstanceConfig">DataGoogleApigeeInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleApigeeInstance resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.isConstruct"></a>

```typescript
import { dataGoogleApigeeInstance } from '@cdktn/provider-google'

dataGoogleApigeeInstance.DataGoogleApigeeInstance.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.isTerraformElement"></a>

```typescript
import { dataGoogleApigeeInstance } from '@cdktn/provider-google'

dataGoogleApigeeInstance.DataGoogleApigeeInstance.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.isTerraformDataSource"></a>

```typescript
import { dataGoogleApigeeInstance } from '@cdktn/provider-google'

dataGoogleApigeeInstance.DataGoogleApigeeInstance.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.generateConfigForImport"></a>

```typescript
import { dataGoogleApigeeInstance } from '@cdktn/provider-google'

dataGoogleApigeeInstance.DataGoogleApigeeInstance.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataGoogleApigeeInstance resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleApigeeInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleApigeeInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/apigee_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleApigeeInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.property.accessLoggingConfig">accessLoggingConfig</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstanceAccessLoggingConfigList">DataGoogleApigeeInstanceAccessLoggingConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.property.consumerAcceptList">consumerAcceptList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.property.diskEncryptionKeyName">diskEncryptionKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.property.ipRange">ipRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.property.peeringCidrRange">peeringCidrRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.property.port">port</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.property.serviceAttachment">serviceAttachment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.property.orgIdInput">orgIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.property.orgId">orgId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `accessLoggingConfig`<sup>Required</sup> <a name="accessLoggingConfig" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.property.accessLoggingConfig"></a>

```typescript
public readonly accessLoggingConfig: DataGoogleApigeeInstanceAccessLoggingConfigList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstanceAccessLoggingConfigList">DataGoogleApigeeInstanceAccessLoggingConfigList</a>

---

##### `consumerAcceptList`<sup>Required</sup> <a name="consumerAcceptList" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.property.consumerAcceptList"></a>

```typescript
public readonly consumerAcceptList: string[];
```

- *Type:* string[]

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `diskEncryptionKeyName`<sup>Required</sup> <a name="diskEncryptionKeyName" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.property.diskEncryptionKeyName"></a>

```typescript
public readonly diskEncryptionKeyName: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `ipRange`<sup>Required</sup> <a name="ipRange" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.property.ipRange"></a>

```typescript
public readonly ipRange: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `peeringCidrRange`<sup>Required</sup> <a name="peeringCidrRange" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.property.peeringCidrRange"></a>

```typescript
public readonly peeringCidrRange: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.property.port"></a>

```typescript
public readonly port: string;
```

- *Type:* string

---

##### `serviceAttachment`<sup>Required</sup> <a name="serviceAttachment" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.property.serviceAttachment"></a>

```typescript
public readonly serviceAttachment: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `orgIdInput`<sup>Optional</sup> <a name="orgIdInput" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.property.orgIdInput"></a>

```typescript
public readonly orgIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.property.orgId"></a>

```typescript
public readonly orgId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstance.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleApigeeInstanceAccessLoggingConfig <a name="DataGoogleApigeeInstanceAccessLoggingConfig" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstanceAccessLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstanceAccessLoggingConfig.Initializer"></a>

```typescript
import { dataGoogleApigeeInstance } from '@cdktn/provider-google'

const dataGoogleApigeeInstanceAccessLoggingConfig: dataGoogleApigeeInstance.DataGoogleApigeeInstanceAccessLoggingConfig = { ... }
```


### DataGoogleApigeeInstanceConfig <a name="DataGoogleApigeeInstanceConfig" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstanceConfig.Initializer"></a>

```typescript
import { dataGoogleApigeeInstance } from '@cdktn/provider-google'

const dataGoogleApigeeInstanceConfig: dataGoogleApigeeInstance.DataGoogleApigeeInstanceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstanceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstanceConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstanceConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstanceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstanceConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstanceConfig.property.name">name</a></code> | <code>string</code> | Resource ID of the instance. |
| <code><a href="#@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstanceConfig.property.orgId">orgId</a></code> | <code>string</code> | The Apigee Organization associated with the Apigee instance, in the format 'organizations/{{org_name}}'. |
| <code><a href="#@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstanceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/apigee_instance#id DataGoogleApigeeInstance#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstanceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstanceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstanceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstanceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstanceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstanceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstanceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstanceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Resource ID of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/apigee_instance#name DataGoogleApigeeInstance#name}

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstanceConfig.property.orgId"></a>

```typescript
public readonly orgId: string;
```

- *Type:* string

The Apigee Organization associated with the Apigee instance, in the format 'organizations/{{org_name}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/apigee_instance#org_id DataGoogleApigeeInstance#org_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstanceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/apigee_instance#id DataGoogleApigeeInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### DataGoogleApigeeInstanceAccessLoggingConfigList <a name="DataGoogleApigeeInstanceAccessLoggingConfigList" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstanceAccessLoggingConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstanceAccessLoggingConfigList.Initializer"></a>

```typescript
import { dataGoogleApigeeInstance } from '@cdktn/provider-google'

new dataGoogleApigeeInstance.DataGoogleApigeeInstanceAccessLoggingConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstanceAccessLoggingConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstanceAccessLoggingConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstanceAccessLoggingConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstanceAccessLoggingConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstanceAccessLoggingConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstanceAccessLoggingConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstanceAccessLoggingConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstanceAccessLoggingConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstanceAccessLoggingConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstanceAccessLoggingConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstanceAccessLoggingConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstanceAccessLoggingConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstanceAccessLoggingConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstanceAccessLoggingConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstanceAccessLoggingConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstanceAccessLoggingConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstanceAccessLoggingConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstanceAccessLoggingConfigList.get"></a>

```typescript
public get(index: number): DataGoogleApigeeInstanceAccessLoggingConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstanceAccessLoggingConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstanceAccessLoggingConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstanceAccessLoggingConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstanceAccessLoggingConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstanceAccessLoggingConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleApigeeInstanceAccessLoggingConfigOutputReference <a name="DataGoogleApigeeInstanceAccessLoggingConfigOutputReference" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstanceAccessLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstanceAccessLoggingConfigOutputReference.Initializer"></a>

```typescript
import { dataGoogleApigeeInstance } from '@cdktn/provider-google'

new dataGoogleApigeeInstance.DataGoogleApigeeInstanceAccessLoggingConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstanceAccessLoggingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstanceAccessLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstanceAccessLoggingConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstanceAccessLoggingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstanceAccessLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstanceAccessLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstanceAccessLoggingConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstanceAccessLoggingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstanceAccessLoggingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstanceAccessLoggingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstanceAccessLoggingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstanceAccessLoggingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstanceAccessLoggingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstanceAccessLoggingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstanceAccessLoggingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstanceAccessLoggingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstanceAccessLoggingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstanceAccessLoggingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstanceAccessLoggingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstanceAccessLoggingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstanceAccessLoggingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstanceAccessLoggingConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstanceAccessLoggingConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstanceAccessLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstanceAccessLoggingConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstanceAccessLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstanceAccessLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstanceAccessLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstanceAccessLoggingConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstanceAccessLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstanceAccessLoggingConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstanceAccessLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstanceAccessLoggingConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstanceAccessLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstanceAccessLoggingConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstanceAccessLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstanceAccessLoggingConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstanceAccessLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstanceAccessLoggingConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstanceAccessLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstanceAccessLoggingConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstanceAccessLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstanceAccessLoggingConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstanceAccessLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstanceAccessLoggingConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstanceAccessLoggingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstanceAccessLoggingConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstanceAccessLoggingConfigOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstanceAccessLoggingConfigOutputReference.property.filter">filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstanceAccessLoggingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstanceAccessLoggingConfig">DataGoogleApigeeInstanceAccessLoggingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstanceAccessLoggingConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstanceAccessLoggingConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstanceAccessLoggingConfigOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstanceAccessLoggingConfigOutputReference.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstanceAccessLoggingConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleApigeeInstanceAccessLoggingConfig;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleApigeeInstance.DataGoogleApigeeInstanceAccessLoggingConfig">DataGoogleApigeeInstanceAccessLoggingConfig</a>

---



